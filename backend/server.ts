/**
 * ICS API server (Bun).
 *
 * Serves:
 *   POST /api/recommend-schemes — OKF-backed scheme recommendation engine
 *   POST /api/chat             — chat endpoint: requirement extraction +
 *                                recommendations + conversational turns
 *   GET  /api/health           — knowledge-base health probe
 *   POST /api/ingest-schemes   — rebuild/re-verify the OKF index on demand
 *   GET  /*                    — demo mode: serves the built frontend (dist/)
 *
 * All OKF content, rule logic and any LLM credentials stay server-side.
 * The knowledge base is ingested once per server process; requests use the
 * preprocessed in-memory index (no per-request parsing).
 */

import path from "node:path";
import { ingestOkfBundle } from "./okfIngest";
import { RecommendationEngine } from "./recommendationPipeline";
import type { RecommendSchemesResponse, SchemeUserProfile } from "../src/lib/schemeTypes";
import { loadEnv } from "./env";
import { log, newRequestId } from "./logger";
import { LeadStore, leadsToCsv, loadLeads, normalizeEmail, normalizePhone } from "./leads";
import type { LeadSource, LeadSubmission } from "./leads";
import { matchSmallTalkReply } from "./chatReplies";
import { composeChatReply, isGroqConfigured, sanitizeHistory } from "./chatLlm";
import { TokenBucketLimiter, clientIpKey } from "./rateLimiter";
import {
  sanitizeBoolean,
  sanitizeNumber,
  sanitizeProfile,
  sanitizeString,
  sanitizeStringArray,
} from "./profileSanitize";

// Boot-time environment validation — fails fast before the server starts.
const env = loadEnv();
const PORT = env.port;

// ---------------------------------------------------------------------------
// Knowledge base (loaded once per process; rebuilt via /api/ingest-schemes)
// ---------------------------------------------------------------------------

let engine: RecommendationEngine | null = null;
let engineError: string | null = null;
let ingestionStats: { schemes: number; warnings: string[]; loadedAt: string } | null = null;

// Lead store: loaded once per process from data/leads/.
const leadStore = new LeadStore(loadLeads(), env.leadSheetsUrl);

async function loadEngine(): Promise<RecommendationEngine | null> {
  if (engine) return engine;
  if (engineError) return null;
  try {
    const bundleDir = path.resolve(import.meta.dir, "..", "govt-schemes-okf");
    const result = await ingestOkfBundle(bundleDir);
    if (result.stats.schemesIngested === 0) {
      engineError = "OKF bundle contained no schemes";
      return null;
    }
    engine = new RecommendationEngine(result.knowledgeBase);
    ingestionStats = {
      schemes: result.stats.schemesIngested,
      warnings: result.stats.warnings,
      loadedAt: new Date().toISOString(),
    };
    log.info("knowledge base ingested", {
      schemes: result.stats.schemesIngested,
      warnings: result.stats.warnings.length,
    });
    return engine;
  } catch (err) {
    engineError = err instanceof Error ? err.message : String(err);
    log.error("failed to ingest knowledge base", { error: engineError });
    return null;
  }
}

// ---------------------------------------------------------------------------
// Demo static serving (single-container mode) — serves dist/ when present
// ---------------------------------------------------------------------------

const STATIC_DIR = path.resolve(import.meta.dir, "..", "dist");

const CONTENT_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

/** Serve a file from dist/ with SPA fallback; null when dist/ is absent. */
async function serveStatic(pathname: string): Promise<Response | null> {
  let decoded: string;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const target = path.resolve(STATIC_DIR, `.${decoded}`);
  // Path-traversal guard: resolved target must stay inside STATIC_DIR.
  if (target !== STATIC_DIR && !target.startsWith(STATIC_DIR + path.sep)) return null;

  const filePath = target === STATIC_DIR ? path.join(STATIC_DIR, "index.html") : target;
  const file = Bun.file(filePath);
  if (await file.exists()) {
    const ext = path.extname(filePath).toLowerCase();
    return new Response(file, {
      headers: { "Content-Type": CONTENT_TYPES[ext] ?? "application/octet-stream" },
    });
  }

  // SPA fallback: client-side routes get index.html
  const index = Bun.file(path.join(STATIC_DIR, "index.html"));
  if (await index.exists()) {
    return new Response(index, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
  return null;
}

// ---------------------------------------------------------------------------
// Request validation (never trust frontend-supplied eligibility)
// ---------------------------------------------------------------------------

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function errResponse(status: number, detail: string): Response {
  return json({ detail }, status);
}

// ---------------------------------------------------------------------------
// Chat rate limiting — protects the shared Groq quota from a single client
// ---------------------------------------------------------------------------

/**
 * Token bucket per client IP: 8-message bursts, sustained ~1 message / 6s.
 * Generous for a human chat session (even fast typists pause), tight enough
 * that one client cannot burn the Groq quota for everyone. Disabled without
 * GROQ_API_KEY since there is no quota to protect.
 */
const chatLimiter = env.groqConfigured
  ? new TokenBucketLimiter({
      capacity: env.chatRateLimitBurst,
      refillPerSecond: 1 / env.chatRateLimitWindowSeconds,
    })
  : null;

/** Attach standard rate-limit headers to any response. */
function withRateLimitHeaders(
  response: Response,
  decision: ReturnType<TokenBucketLimiter["take"]>,
): Response {
  response.headers.set("x-ratelimit-limit", String(decision.limit));
  response.headers.set("x-ratelimit-remaining", String(decision.remaining));
  if (!decision.allowed) {
    response.headers.set("retry-after", String(decision.retryAfterSeconds));
  }
  return response;
}

/** 429 for chat requests over the per-IP limit. */
function rateLimitedResponse(decision: ReturnType<TokenBucketLimiter["take"]>): Response {
  return withRateLimitHeaders(
    json(
      {
        answer:
          "You're sending messages very quickly. Please wait a few seconds and try again — I want to make sure everyone gets fast, accurate scheme guidance.",
        rateLimited: true,
      },
      429,
    ),
    decision,
  );
}

const MAX_BODY_BYTES = 128 * 1024;

const ALLOWED_DATA_FIELDS = [
  "name", "email", "phone", "businessName", "businessType", "businessDescription",
];

function sanitizeData(raw: unknown): Record<string, string> {
  if (!raw || typeof raw !== "object") return {};
  const d = raw as Record<string, unknown>;  const out: Record<string, string> = {};
  for (const key of ALLOWED_DATA_FIELDS) {
    const value = sanitizeString(d[key], 4000);
    if (value !== undefined) out[key] = value;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Chat helper — conversational recommendation flow on top of the same engine
// ---------------------------------------------------------------------------

interface ChatRequestBody {
  query?: unknown;
  profile?: unknown;
  collected?: unknown;
  /** Recent conversation turns (user/bot) used to personalize the Groq reply. */
  history?: unknown;
}

function buildChatReply(
  result: RecommendSchemesResponse,
  profile: Partial<SchemeUserProfile>,
): { text: string; actionable: boolean } {
  const recs = result.recommendations.filter((r) => r.eligibilityStatus !== "unknown").slice(0, 3);

  if (result.followUpQuestions.length > 0 && recs.length < 3) {
    const q = result.followUpQuestions[0];
    if (q) {
      const lines = [
        "I can check the government schemes in our scheme knowledge base for you.",
        q.question,
      ];
      return { text: lines.join("\n"), actionable: true };
    }
  }

  if (recs.length === 0) {
    return {
      text: "Based on the information you've provided, I couldn't find clearly matching schemes in our verified knowledge base. Please call our advisory line at +91 8447198483 for personalised guidance.",
      actionable: true,
    };
  }

  const lines: string[] = [];
  // Natural phrasing: "For a woman applicant in Haryana, ..." instead of
  // "you've provided in Haryana" when only the state (or only gender) is known.
  if (profile.gender === "female" || profile.state) {
    const who = [
      profile.gender === "female" ? "a woman applicant" : "an applicant",
      profile.state ? `in ${profile.state}` : null,
    ]
      .filter(Boolean)
      .join(" ");
    lines.push(`For ${who}, these schemes may be relevant:`);
  } else {
    lines.push("Based on the information you've provided, these schemes may be relevant:");
  }
  recs.forEach((rec, i) => {
    const statusNote =
      rec.eligibilityStatus === "eligible"
        ? "You appear to meet the known conditions."
        : rec.eligibilityStatus === "potentially_eligible"
          ? "Key conditions are satisfied; final verification happens with the authorities."
          : "Some details are still needed to confirm eligibility.";
    lines.push(`${i + 1}. ${rec.schemeName} — ${statusNote}`);
    if (rec.fundingRange) lines.push(`   Support: ${rec.fundingRange}`);
  });
  const q = result.followUpQuestions[0];
  if (q) {
    lines.push("");
    lines.push(`To refine this further: ${q.question}`);
  }
  lines.push("");
  lines.push("Verify details on the official sources listed with each scheme before applying.");
  return { text: lines.join("\n"), actionable: true };
}

// ---------------------------------------------------------------------------
// HTTP handling
// ---------------------------------------------------------------------------

async function readJsonBody(request: Request): Promise<Record<string, unknown> | null> {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) return null;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return null;
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Lead capture — shared by /api/leads and the auto-capture on recommend flows
// ---------------------------------------------------------------------------

const ALLOWED_LEAD_SOURCES: LeadSource[] = ["assessment_modal", "assessment_page", "chatbot", "callback_form"];

/** Whitelist sanitizer for explicit lead submissions (chat soft-ask, callback). */
function sanitizeLeadSubmission(raw: unknown): LeadSubmission | null {
  if (!raw || typeof raw !== "object") return null;
  const d = raw as Record<string, unknown>;
  const source = typeof d.source === "string" && ALLOWED_LEAD_SOURCES.includes(d.source as LeadSource)
    ? (d.source as LeadSource)
    : null;
  if (!source) return null;

  const profileRaw = d.profile;
  const profile = profileRaw && typeof profileRaw === "object" ? sanitizeProfile(profileRaw) : undefined;

  let topSchemes: LeadSubmission["topSchemes"];
  if (Array.isArray(d.topSchemes)) {
    topSchemes = d.topSchemes
      .slice(0, 5)
      .map((s) => {
        if (!s || typeof s !== "object") return null;
        const t = s as Record<string, unknown>;
        const schemeId = sanitizeString(t.schemeId, 40);
        const schemeName = sanitizeString(t.schemeName, 200);
        const eligibilityStatus = sanitizeString(t.eligibilityStatus, 40) ?? "unknown";
        return schemeId && schemeName ? { schemeId, schemeName, eligibilityStatus } : null;
      })
      .filter((s): s is NonNullable<typeof s> => s !== null);
  }

  let chat: LeadSubmission["chat"];
  if (d.chat && typeof d.chat === "object") {
    const c = d.chat as Record<string, unknown>;
    const messageCount = sanitizeNumber(c.messageCount, 0, 1000);
    chat = {
      messageCount: messageCount != null ? Math.round(messageCount) : 0,
      sessionSummary: sanitizeString(c.sessionSummary, 2000),
    };
  }

  const sub: LeadSubmission = {
    source,
    name: sanitizeString(d.name, 120),
    email: sanitizeString(d.email, 200),
    phone: sanitizeString(d.phone, 30),
    businessName: sanitizeString(d.businessName, 200),
    businessType: sanitizeString(d.businessType, 80),
    businessDescription: sanitizeString(d.businessDescription, 4000),
    company: sanitizeString(d.company, 200),
    description: sanitizeString(d.description, 4000),
    profile: profile && Object.keys(profile).length > 0 ? (profile as Record<string, unknown>) : undefined,
    topSchemes: topSchemes && topSchemes.length > 0 ? topSchemes : undefined,
    chat,
    countsAsAssessment: sanitizeBoolean(d.countsAsAssessment),
  };

  // At least one stable identity is required to store a lead.
  const hasIdentity = (sub.phone && normalizePhone(sub.phone)) || (sub.email && normalizeEmail(sub.email));
  return hasIdentity ? sub : null;
}

/**
 * Build an enriched lead submission from a recommendation result (assessment
 * and follow-up re-runs).
 */
function leadFromRecommendation(
  source: LeadSource,
  data: Record<string, string>,
  profile: Partial<SchemeUserProfile>,
  result: RecommendSchemesResponse,
  isFollowUp: boolean,
): LeadSubmission | null {
  const topSchemes = result.recommendations
    .filter((r) => r.eligibilityStatus === "eligible" || r.eligibilityStatus === "potentially_eligible")
    .slice(0, 5)
    .map((r) => ({
      schemeId: r.schemeId,
      schemeName: r.schemeName,
      eligibilityStatus: r.eligibilityStatus as string,
    }));
  const fallback = result.recommendations.slice(0, 3).map((r) => ({
    schemeId: r.schemeId,
    schemeName: r.schemeName,
    eligibilityStatus: r.eligibilityStatus as string,
  }));
  const schemes = topSchemes.length > 0 ? topSchemes : fallback;

  return sanitizeLeadSubmission({
    source,
    ...data,
    profile: Object.keys(profile).length > 0 ? (profile as Record<string, unknown>) : undefined,
    topSchemes: schemes.length > 0 ? schemes : undefined,
    countsAsAssessment: !isFollowUp,
  });
}

/**
 * Bearer-token auth for the lead PII endpoints. The token is guaranteed to
 * exist by the boot-time env gate (loadEnv refuses to start without it).
 * Comparison is timing-safe to avoid leaking the token via response timing.
 */
function leadExportAuthorized(request: Request): boolean {
  const token = env.leadsExportToken;
  const header = request.headers.get("authorization") ?? "";
  const bearer = header.startsWith("Bearer ") ? header.slice(7) : undefined;
  const urlToken = new URL(request.url).searchParams.get("token") ?? undefined;
  const provided = bearer ?? urlToken;
  if (provided === undefined) return false;
  return timingSafeEqual(provided, token);
}

/** Constant-time string equality (padded to equal length). */
function timingSafeEqual(a: string, b: string): boolean {
  const maxLen = Math.max(a.length, b.length, 1);
  let diff = a.length === b.length ? 0 : 1;
  for (let i = 0; i < maxLen; i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}

// CORS headers attached to EVERY response (not just the OPTIONS preflight —
// the browser also requires them on the actual response, and a preflight-only
// implementation blocks every real request cross-origin).
const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const route = `${request.method} ${url.pathname}`;  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  if (route === "GET /api/health") {
    const e = await loadEngine();
    return json({
      status: e ? "ok" : "degraded",
      knowledgeBase: e
        ? { ...e.knowledgeBaseMeta, warnings: ingestionStats?.warnings ?? [] }
        : null,
      error: engineError,
    }, e ? 200 : 503);
  }

  if (route === "POST /api/ingest-schemes") {
    const bundleDir = path.resolve(import.meta.dir, "..", "govt-schemes-okf");
    const result = await ingestOkfBundle(bundleDir);
    if (result.stats.schemesIngested > 0) {
      engine = new RecommendationEngine(result.knowledgeBase);
      engineError = null;
      ingestionStats = {
        schemes: result.stats.schemesIngested,
        warnings: result.stats.warnings,
        loadedAt: new Date().toISOString(),
      };
    }
    return json({
      ingested: result.stats.schemesIngested,
      schemeDirs: result.stats.schemeDirs,
      warnings: result.stats.warnings,
    });
  }

  if (route === "POST /api/recommend-schemes") {
    const e = await loadEngine();
    if (!e) {
      return errResponse(503, "Recommendation service unavailable: knowledge base could not be loaded.");
    }

    const body = await readJsonBody(request);
    if (!body) {
      return errResponse(400, "Invalid JSON body or payload too large.");
    }

    const data = sanitizeData(body.data);
    const profile = sanitizeProfile(body.profile);
    const naturalLanguageInput = sanitizeString(body.naturalLanguageInput, 4000);
    const description = data.businessDescription;
    const hasInput = naturalLanguageInput || Object.keys(profile).length > 0 || (description && description.length > 10);
    if (!hasInput) {
      return errResponse(400, "Provide profile information, a natural-language requirement, or a business description.");
    }

    const result = await e.recommend({
      data,
      profile,
      naturalLanguageInput,
    });

    // Auto-capture an enriched lead for assessment flows. Identity comes from
    // the form (name/phone/email); enrichment comes from the engine output.
    // Fire-and-forget: never block or fail the recommendation response.
    try {
      const source: LeadSource =
        body.leadSource === "assessment_page" || body.source === "follow_up"
          ? "assessment_page"
          : "assessment_modal";
      const lead = leadFromRecommendation(
        source,
        data,
        { ...profile, ...result.profile } as Partial<SchemeUserProfile>,
        result.response,
        body.source === "follow_up",
      );
      if (lead) {
        const stored = leadStore.upsert(lead, result.response.recommendations);
        log.info("lead captured from assessment", {
          leadId: stored.leadId,
          score: stored.score,
          source: stored.sources[0],
          followUp: body.source === "follow_up",
        });
      }
    } catch (err) {
      log.warn("assessment lead capture failed (non-blocking)", { error: String(err) });
    }

    return json(result.response);
  }

  // Legacy route name kept for compatibility with the deployed API
  // Gateway (chat-restricted). Same engine, same handler as /api/chat.
  if (route === "POST /api/chat" || route === "POST /api/chat-restricted") {
    // Per-IP quota protection: reject BEFORE loading the engine or calling
    // Groq. Only active when Groq is configured (nothing to protect otherwise).
    if (chatLimiter) {
      const decision = chatLimiter.take(clientIpKey(request));
      if (!decision.allowed) {
        log.warn("chat rate limited", {
          route,
          ip: clientIpKey(request),
          retryAfter: decision.retryAfterSeconds,
        });
        return rateLimitedResponse(decision);
      }
    }

    const e = await loadEngine();
    if (!e) {
      return json({ answer: "I'm unable to reach the scheme knowledge base right now. Please try again in a moment." }, 503);
    }

    const body = (await readJsonBody(request)) as ChatRequestBody | null;
    if (!body || typeof body.query !== "string" || body.query.trim().length === 0) {
      return json({ answer: "Please type your question about government schemes." }, 400);
    }
    const query = body.query.trim().slice(0, 4000);
    const profile = sanitizeProfile(body.collected ?? body.profile);

    // Conversation history for Groq personalization. Sanitized against
    // malformed/untrusted client payloads; null when absent or unusable.
    const history = sanitizeHistory(body.history);

    // Pure small talk ("hi", "thanks", ...) never reaches the recommendation
    // engine — an empty query would otherwise fall back to ranking the whole
    // corpus and dump irrelevant schemes on a greeting.
    const smallTalk = matchSmallTalkReply(query);
    if (smallTalk) {
      // With Groq configured, even greetings feel conversational: the model
      // rewrites the canned line using the chat so far. Same grounded-facts
      // contract — on failure we return the template line unchanged.
      const composed =
        isGroqConfigured() && history
          ? await composeChatReply({
              query,
              history,
              profile,
              templateReply: smallTalk,
              recommendations: [],
            })
          : null;
      return json({
        answer: composed ?? smallTalk,
        actionable: true,
        recommendations: [],
        followUpQuestions: [],
        collected: profile,
      });
    }

    const result = await e.recommend({
      profile,
      naturalLanguageInput: query,
    });

    const reply = buildChatReply(result.response, result.profile);

    // Groq personalization layer: rewrites the deterministic template reply
    // into a natural, conversation-aware answer. Grounded strictly in the
    // engine's structured output; any failure falls back to `reply.text`.
    const composed =
      isGroqConfigured() && reply.text
        ? await composeChatReply({
            query,
            history,
            profile: result.profile,
            templateReply: reply.text,
            recommendations: result.response.recommendations,
            followUpQuestion: result.response.followUpQuestions[0]?.question ?? null,
          })
        : null;
    if (composed) {
      log.info("groq reply composed", {
        route: "POST /api/chat",
        recs: result.response.recommendations.length,
      });
    }

    return json({
      answer: composed ?? reply.text,
      actionable: reply.actionable,
      recommendations: result.response.recommendations,
      followUpQuestions: result.response.followUpQuestions,
      collected: result.profile,
      knowledgeBase: result.response.knowledgeBase,
    });
  }

  // Explicit lead capture: chatbot soft-ask card and callback form post here.
  if (route === "POST /api/leads") {
    const body = await readJsonBody(request);
    if (!body) {
      return errResponse(400, "Invalid JSON body or payload too large.");
    }
    const sub = sanitizeLeadSubmission(body);
    if (!sub) {
      return errResponse(400, "Provide a source and at least one valid identifier (phone or email).");
    }
    const stored = leadStore.upsert(sub);
    log.info("lead captured", { leadId: stored.leadId, score: stored.score, source: sub.source, newLead: stored.touchpoints <= 1 });
    return json({
      ok: true,
      leadId: stored.leadId,
      merged: stored.touchpoints > 1,
      score: stored.score,
    });
  }

  // Lead listing (PII — token-protected when LEADS_EXPORT_TOKEN is set).
  if (route === "GET /api/leads") {
    if (!leadExportAuthorized(request)) {
      return errResponse(401, "Unauthorized: provide a valid bearer token (LEADS_EXPORT_TOKEN).");
    }
    const leads = leadStore.listLeads();
    return json({ count: leads.length, leads });
  }

  // Lead export. Canonical route: /api/leads/export. Short alias: /export
  // (simpler to paste into a CRM importer / browser). Both token-protected.
  if (route === "GET /api/leads/export" || route === "GET /export" || route === "GET /export.csv") {
    if (!leadExportAuthorized(request)) {
      return errResponse(401, "Unauthorized: provide a valid bearer token (LEADS_EXPORT_TOKEN).");
    }
    const leads = leadStore.listLeads();
    const format = (new URL(request.url).searchParams.get("format") ?? "csv").toLowerCase();
    if (format === "json") {
      return json({ count: leads.length, exportedAt: new Date().toISOString(), leads });
    }
    const csv = leadsToCsv(leads);
    const filename = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  }

  // Demo single-container mode: serve the built frontend from dist/.
  if (request.method === "GET" && !url.pathname.startsWith("/api/")) {
    const staticResponse = await serveStatic(url.pathname);
    if (staticResponse) return staticResponse;
  }

  return errResponse(404, `Unknown route: ${route}`);
}

const server = Bun.serve({
  port: PORT,
  async fetch(request) {
    const reqId = newRequestId();
    const start = performance.now();
    try {
      const response = await handleRequest(request);
      if (request.method === "OPTIONS") {
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type");
      }
      for (const [name, value] of Object.entries(corsHeaders)) {
        response.headers.set(name, value);
      }
      response.headers.set("x-request-id", reqId);
      log.info("request completed", {
        reqId,
        route: `${request.method} ${new URL(request.url).pathname}`,
        status: response.status,
        durationMs: Math.round(performance.now() - start),
      });
      return response;
    } catch (err) {
      log.error("request failed", {
        reqId,
        route: `${request.method} ${new URL(request.url).pathname}`,
        error: err instanceof Error ? err.message : String(err),
      });
      const response = errResponse(500, "Internal server error.");
      for (const [name, value] of Object.entries(corsHeaders)) {
        response.headers.set(name, value);
      }
      response.headers.set("x-request-id", reqId);
      return response;
    }
  },
});

log.info("api server listening", {
  port: server.port,
  env: env.nodeEnv,
  llm: env.llmConfigured,
  // Guaranteed by the boot-time env gate — the server cannot start otherwise.
  leads: { store: leadStore.size, sheetsForwarding: true },
});

export { server };
