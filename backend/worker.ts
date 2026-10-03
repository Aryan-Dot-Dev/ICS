/// <reference types="@cloudflare/workers-types" />

import workerData from "./worker-data.json";
import { RecommendationEngine } from "./recommendationPipeline";
import type { RecommendSchemesResponse, SchemeUserProfile } from "./schemeTypes";
import { setRuntimeEnv } from "./runtimeEnv";
import { LeadStore, leadsToCsv, normalizeEmail, normalizePhone } from "./leads";
import type { LeadRecord, LeadSource, LeadSubmission } from "./leads";
import { matchSmallTalkReply } from "./chatReplies";
import { composeChatReply, isGroqConfigured, sanitizeHistory } from "./chatLlm";
import { TokenBucketLimiter, clientIpKey } from "./rateLimiter";
import {
  sanitizeBoolean,
  sanitizeNumber,
  sanitizeProfile,
  sanitizeString,
} from "./profileSanitize";
import { log, newRequestId } from "./logger";

export interface Env {
  /** Optional KV namespace binding for persistent lead records. */
  LEADS_KV?: KVNamespace;
  LEAD_SHEETS_URL?: string;
  LEADS_EXPORT_TOKEN?: string;
  OPENAI_API_KEY?: string;
  ANTHROPIC_API_KEY?: string;
  GROQ_API_KEY?: string;
  GROQ_BASE_URL?: string;
  GROQ_MODEL?: string;
  SCHEME_LLM_MODEL?: string;
  SCHEME_LLM_BASE_URL?: string;
  CHAT_RATE_LIMIT_BURST?: string;
  CHAT_RATE_LIMIT_WINDOW_SECONDS?: string;
  NODE_ENV?: string;
}

type WorkerKnowledgeBase = Omit<typeof workerData, "byId"> & { byId: Map<string, (typeof workerData.schemes)[number]> };
const knowledgeBase: WorkerKnowledgeBase = {
  ...workerData,
  byId: new Map(workerData.schemes.map((scheme) => [scheme.schemeId, scheme])),
};
const engine = new RecommendationEngine(knowledgeBase as never);
const leadStore = new LeadStore(new Map(), undefined, null);
const chatLimiter = new TokenBucketLimiter({ capacity: 8, refillPerSecond: 1 / 6 });

const MAX_BODY_BYTES = 128 * 1024;
const FRONTEND_ORIGIN = "https://ics-frontend.aryan-main21.workers.dev";

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("origin");
  const allowed = origin === FRONTEND_ORIGIN || origin === "http://localhost:3000" || origin === "http://localhost:5173";
  return {
    "Access-Control-Allow-Origin": allowed ? origin! : "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    ...(origin ? { Vary: "Origin" } : {}),
  };
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function errorResponse(status: number, detail: string): Response {
  return json({ detail }, status);
}

async function readBody(request: Request): Promise<Record<string, unknown> | null> {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) return null;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return null;
    const value = JSON.parse(text);
    return value && typeof value === "object" ? value as Record<string, unknown> : null;
  } catch {
    return null;
  }
}

function sanitizeData(raw: unknown): Record<string, string> {
  if (!raw || typeof raw !== "object") return {};
  const data = raw as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const key of ["name", "email", "phone", "businessName", "businessType", "businessDescription"]) {
    const value = sanitizeString(data[key], 4000);
    if (value) out[key] = value;
  }
  return out;
}

function chatReply(result: { recommendations: any[]; followUpQuestions: any[] }, profile: Partial<SchemeUserProfile>) {
  const recs = result.recommendations.filter((r) => r.eligibilityStatus !== "unknown").slice(0, 3);
  if (result.followUpQuestions.length > 0 && recs.length < 3) {
    return { text: `I can check the government schemes in our scheme knowledge base for you.\n${result.followUpQuestions[0].question}`, actionable: true };
  }
  if (recs.length === 0) {
    return { text: "Based on the information you've provided, I couldn't find clearly matching schemes in our verified knowledge base. Please call our advisory line at +91 8447198483 for personalised guidance.", actionable: true };
  }
  const who = [profile.gender === "female" ? "a woman applicant" : "an applicant", profile.state ? `in ${profile.state}` : null].filter(Boolean).join(" ");
  const lines = [`For ${who}, these schemes may be relevant:`];
  recs.forEach((rec, index) => lines.push(`${index + 1}. ${rec.schemeName} — ${rec.eligibilityStatus === "eligible" ? "You appear to meet the known conditions." : "Final verification is required."}`));
  if (result.followUpQuestions[0]) lines.push("", `To refine this further: ${result.followUpQuestions[0].question}`);
  lines.push("", "Verify details on the official sources listed with each scheme before applying.");
  return { text: lines.join("\n"), actionable: true };
}

function authorized(request: Request, env: Env): boolean {
  const expected = env.LEADS_EXPORT_TOKEN?.trim();
  if (!expected) return false;
  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const query = new URL(request.url).searchParams.get("token");
  return (bearer ?? query) === expected;
}

function leadSubmission(raw: Record<string, unknown>): LeadSubmission | null {
  const sources: LeadSource[] = ["assessment_modal", "assessment_page", "chatbot", "callback_form"];
  const source = typeof raw.source === "string" && sources.includes(raw.source as LeadSource) ? raw.source as LeadSource : null;
  if (!source) return null;
  const phone = sanitizeString(raw.phone, 30);
  const email = sanitizeString(raw.email, 200);
  if (!(phone && normalizePhone(phone)) && !(email && normalizeEmail(email))) return null;
  return {
    source,
    name: sanitizeString(raw.name, 120),
    email,
    phone,
    businessName: sanitizeString(raw.businessName, 200),
    businessType: sanitizeString(raw.businessType, 80),
    businessDescription: sanitizeString(raw.businessDescription, 4000),
    profile: sanitizeProfile(raw.profile),
    chat: raw.chat && typeof raw.chat === "object" ? {
      messageCount: Math.round(sanitizeNumber((raw.chat as Record<string, unknown>).messageCount, 0, 1000) ?? 0),
      sessionSummary: sanitizeString((raw.chat as Record<string, unknown>).sessionSummary, 2000),
    } : undefined,
    countsAsAssessment: sanitizeBoolean(raw.countsAsAssessment),
  };
}

async function handle(request: Request, env: Env): Promise<Response> {
  setRuntimeEnv(env as Record<string, string | undefined>);
  leadStore.configureSheets(env.LEAD_SHEETS_URL);
  if (env.LEADS_KV) {
    try {
      const snapshot = await env.LEADS_KV.get("snapshot", "json") as unknown;
      if (Array.isArray(snapshot)) leadStore.replaceLeads(snapshot as LeadRecord[]);
    } catch (error) {
      log.warn("failed to load lead snapshot from KV", { error: String(error) });
    }
  }
  const url = new URL(request.url);
  if (request.method === "OPTIONS") return new Response(null, { status: 204 });

  if (request.method === "GET" && url.pathname === "/api/health") {
    return json({ status: "ok", knowledgeBase: { okfVersion: knowledgeBase.okfVersion, version: knowledgeBase.bundleVersion || knowledgeBase.generatedAt || "unknown", schemeCount: knowledgeBase.schemes.length, generatedAt: knowledgeBase.generatedAt }, error: null });
  }

  if (request.method === "POST" && url.pathname === "/api/ingest-schemes") {
    return json({ ingested: knowledgeBase.schemes.length, schemeDirs: knowledgeBase.schemes.length, warnings: [], mode: "bundled-worker-data" });
  }

  if (request.method === "POST" && url.pathname === "/api/recommend-schemes") {
    const body = await readBody(request);
    if (!body) return errorResponse(400, "Invalid JSON body or payload too large.");
    const data = sanitizeData(body.data);
    const profile = sanitizeProfile(body.profile);
    const naturalLanguageInput = sanitizeString(body.naturalLanguageInput, 4000);
    if (!naturalLanguageInput && Object.keys(profile).length === 0 && !(data.businessDescription && data.businessDescription.length > 10)) {
      return errorResponse(400, "Provide profile information, a natural-language requirement, or a business description.");
    }
    const result = await engine.recommend({ data, profile, naturalLanguageInput });
    return json(result.response);
  }

  if (request.method === "POST" && (url.pathname === "/api/chat" || url.pathname === "/api/chat-restricted")) {
    const decision = chatLimiter.take(clientIpKey(request));
    if (!decision.allowed) return json({ answer: "You're sending messages very quickly. Please wait a few seconds and try again — I want to make sure everyone gets fast, accurate scheme guidance.", rateLimited: true }, 429);
    const body = await readBody(request);
    if (!body || typeof body.query !== "string" || body.query.trim().length === 0) return json({ answer: "Please type your question about government schemes." }, 400);
    const query = body.query.trim().slice(0, 4000);
    const profile = sanitizeProfile(body.collected ?? body.profile);
    const history = sanitizeHistory(body.history);
    const smallTalk = matchSmallTalkReply(query);
    if (smallTalk) {
      const composed = isGroqConfigured() && history ? await composeChatReply({ query, history, profile, templateReply: smallTalk, recommendations: [] }) : null;
      return json({ answer: composed ?? smallTalk, actionable: true, recommendations: [], followUpQuestions: [], collected: profile });
    }
    const result = await engine.recommend({ profile, naturalLanguageInput: query });
    const reply = chatReply(result.response, result.profile);
    const composed = isGroqConfigured() ? await composeChatReply({ query, history, profile: result.profile, templateReply: reply.text, recommendations: result.response.recommendations, followUpQuestion: result.response.followUpQuestions[0]?.question ?? null }) : null;
    return json({ answer: composed ?? reply.text, actionable: reply.actionable, recommendations: result.response.recommendations, followUpQuestions: result.response.followUpQuestions, collected: result.profile, knowledgeBase: result.response.knowledgeBase });
  }

  if (request.method === "POST" && url.pathname === "/api/leads") {
    const body = await readBody(request);
    const sub = body ? leadSubmission(body) : null;
    if (!sub) return errorResponse(400, "Provide a source and at least one valid identifier (phone or email).");
    const stored = leadStore.upsert(sub);
    if (env.LEADS_KV) {
      await env.LEADS_KV.put("snapshot", JSON.stringify(leadStore.listLeads()));
    }
    return json({ ok: true, leadId: stored.leadId, merged: stored.touchpoints > 1, score: stored.score });
  }

  if (request.method === "GET" && url.pathname === "/api/leads") {
    if (!authorized(request, env)) return errorResponse(401, "Unauthorized: provide a valid bearer token (LEADS_EXPORT_TOKEN).");
    const leads = leadStore.listLeads();
    return json({ count: leads.length, leads });
  }

  if (request.method === "GET" && ["/api/leads/export", "/export", "/export.csv"].includes(url.pathname)) {
    if (!authorized(request, env)) return errorResponse(401, "Unauthorized: provide a valid bearer token (LEADS_EXPORT_TOKEN).");
    const leads = leadStore.listLeads();
    if (url.searchParams.get("format") === "json") return json({ count: leads.length, exportedAt: new Date().toISOString(), leads });
    return new Response(leadsToCsv(leads), { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"` } });
  }

  return errorResponse(404, `Unknown route: ${request.method} ${url.pathname}`);
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const reqId = newRequestId();
    try {
      const response = await handle(request, env);
      for (const [name, value] of Object.entries(corsHeaders(request))) response.headers.set(name, value);
      response.headers.set("x-request-id", reqId);
      return response;
    } catch (error) {
      log.error("worker request failed", { reqId, error: String(error) });
      const response = errorResponse(500, "Internal server error.");
      for (const [name, value] of Object.entries(corsHeaders(request))) response.headers.set(name, value);
      response.headers.set("x-request-id", reqId);
      return response;
    }
  },
};

export default worker satisfies ExportedHandler<Env>;
