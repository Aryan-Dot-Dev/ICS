/**
 * Groq-backed conversational reply composer for the chat endpoints.
 *
 * The recommendation engine stays fully deterministic: extraction ->
 * retrieval -> rule-based eligibility -> template reply. Groq's ONLY job is
 * to personalize the *wording* of the final answer using the conversation
 * history, the collected profile and the engine's structured output. The
 * model never invents schemes, eligibility or numbers — it is given a closed
 * set of facts and instructed to compose them into a warm, conversational
 * reply.
 *
 * Failure contract: `composeChatReply` returns null on ANY failure (no key,
 * HTTP error, timeout, unparseable response, safety truncate). The server
 * then falls back to the template reply, so the chatbot degrades gracefully
 * exactly like the LLM extraction path does.
 *
 * Endpoint: https://api.groq.com/openai/v1/chat/completions (OpenAI-
 * compatible). Default model `openai/gpt-oss-120b` — the current Groq
 * production chat model; `llama-3.3-70b-versatile` became Enterprise-only in
 * Aug 2026. Override with GROQ_MODEL.
 */

import type { SchemeRecommendation, SchemeUserProfile } from "./schemeTypes";
import { runtimeEnv } from "./runtimeEnv";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = "openai/gpt-oss-120b";
const TIMEOUT_MS = 8_000;
const RETRY_BACKOFF_MS = 700;
const RETRY_CAP_MS = 2_500;
const MAX_REPLY_CHARS = 1200;

/** Conversation turns sent to the model (most recent kept). */
const MAX_HISTORY_TURNS = 8;
const MAX_HISTORY_TURN_CHARS = 400;

const SYSTEM_PROMPT = `You are the ICS scheme advisor, a warm and professional chatbot on the ICS website that helps people in India discover government schemes they may be eligible for.

You will receive:
1. The recent conversation history.
2. The user's profile collected so far (may be partial).
3. The engine's template reply and a CLOSED LIST of scheme facts from a verified, rule-based eligibility engine.

Rules:
- Personalize: acknowledge what the user already told you (their situation, location, history) and vary phrasing so the chat feels human. Use the user's name ONLY if it actually appears in the conversation — NEVER invent, guess, or add a name.
- Ground strictly: mention ONLY schemes and numbers from the provided facts. NEVER invent, estimate or guess scheme names, amounts, deadlines or eligibility. If the facts say a scheme needs more information, say so instead of guessing.
- Match the user's language: reply in English, Hindi, or Hinglish depending on how they wrote. Keep it natural either way.
- Be concise: at most 150 words. Plain text only — no markdown, no bullet characters other than simple dashes for the scheme list.
- Always end with exactly ONE clear next step (answer the follow-up question, describe their situation in more detail, or call the advisor line when no schemes matched).
- Never promise outcomes; say "you appear to meet the known conditions" style phrasing for eligible schemes and remind the user to verify on official sources before applying.
- Output ONLY the reply text. No preamble, no quotes.`;

// ---------------------------------------------------------------------------
// Input sanitization — the client sends history, treat it as untrusted input
// ---------------------------------------------------------------------------

export interface ChatHistoryTurn {
  role: "user" | "bot";
  content: string;
}

/** Strip control characters (newlines kept as spaces to keep log lines sane). */
function sanitizeText(raw: string, maxLen: number): string {
  return raw
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

/**
 * Sanitize a raw history array (untrusted client JSON) into clean turns.
 * Returns null when nothing usable remains.
 */
export function sanitizeHistory(raw: unknown): ChatHistoryTurn[] | null {
  if (!Array.isArray(raw)) return null;
  const turns: ChatHistoryTurn[] = [];
  for (const item of raw.slice(-MAX_HISTORY_TURNS)) {
    if (!item || typeof item !== "object") continue;
    const t = item as Record<string, unknown>;
    const role = t.role === "user" ? "user" : t.role === "bot" ? "bot" : null;
    const content = typeof t.content === "string" ? t.content : typeof t.text === "string" ? t.text : null;
    if (!role || !content) continue;
    const clean = sanitizeText(content, MAX_HISTORY_TURN_CHARS);
    if (clean.length === 0) continue;
    turns.push({ role, content: clean });
  }
  // Drop a trailing bot turn — the upcoming answer replaces it.
  while (turns.length > 0) {
    const last = turns[turns.length - 1];
    if (last && last.role === "bot") turns.pop();
    else break;
  }
  return turns.length > 0 ? turns : null;
}

// ---------------------------------------------------------------------------
// Prompt building (exported for tests)
// ---------------------------------------------------------------------------

export interface ChatLlmInput {
  query: string;
  /** Sanitized conversation history (already excludes the current query). */
  history?: ChatHistoryTurn[] | null;
  profile: Partial<SchemeUserProfile>;
  /** Template reply produced by the deterministic engine. */
  templateReply: string;
  /** Top recommendations with their structured facts. */
  recommendations: SchemeRecommendation[];
  /** First follow-up question selected by the engine, if any. */
  followUpQuestion?: string | null;
}

/** Compact, fact-grounded digest of one recommendation for the prompt. */
export function buildSchemeFacts(recs: SchemeRecommendation[]): string {
  if (recs.length === 0) return "(no schemes matched — steer the user to describe their situation in more detail)";
  return recs
    .map((r, i) => {
      const parts = [
        `${i + 1}. ${r.schemeName} (eligibility: ${r.eligibilityStatus})`,
        r.schemeDescription ? `About: ${sanitizeText(r.schemeDescription, 200)}` : null,
        r.fundingRange ? `Support: ${sanitizeText(r.fundingRange, 80)}` : null,
        r.relevance?.reasons?.[0] ? `Why matched: ${sanitizeText(r.relevance.reasons[0], 140)}` : null,
        r.recommendedNextStep ? `Next step: ${sanitizeText(r.recommendedNextStep, 140)}` : null,
        r.application?.deadline ? `Deadline: ${sanitizeText(r.application.deadline, 80)}` : null,
        r.application?.info_portal ? `Official info: ${sanitizeText(r.application.info_portal, 140)}` : null,
      ].filter(Boolean);
      return parts.join("\n");
    })
    .join("\n\n");
}

export function buildUserPrompt(input: ChatLlmInput): string {
  const sections: string[] = [];

  if (input.history && input.history.length > 0) {
    const transcript = input.history
      .map((t) => `${t.role === "user" ? "User" : "Advisor"}: ${t.content}`)
      .join("\n");
    sections.push(`CONVERSATION SO FAR:\n${transcript}`);
  }

  const profileEntries = Object.entries(input.profile).filter(
    ([, v]) => v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && v.length === 0),
  );
  if (profileEntries.length > 0) {
    sections.push(
      `USER PROFILE COLLECTED SO FAR:\n${JSON.stringify(Object.fromEntries(profileEntries))}`,
    );
  }

  sections.push(`VERIFIED SCHEME FACTS (the ONLY schemes/numbers you may mention):\n${buildSchemeFacts(input.recommendations)}`);

  if (input.followUpQuestion) {
    sections.push(`NEXT QUESTION TO ASK THE USER: ${sanitizeText(input.followUpQuestion, 200)}`);
  }

  sections.push(`USER'S LATEST MESSAGE: ${sanitizeText(input.query, 1000)}`);
  sections.push(`ENGINE'S TEMPLATE REPLY (rewrite into a natural conversational answer; keep every fact identical):\n${sanitizeText(input.templateReply, 1500)}`);

  return sections.join("\n\n");
}

// ---------------------------------------------------------------------------
// Groq call
// ---------------------------------------------------------------------------

export function groqApiUrl(): string {
  // Base-URL override exists for self-hosted proxies and hermetic tests.
  const base = runtimeEnv().GROQ_BASE_URL?.trim().replace(/\/+$/, "");
  return base ? `${base}/chat/completions` : GROQ_API_URL;
}

export function isGroqConfigured(): boolean {
  return Boolean(runtimeEnv().GROQ_API_KEY);
}

/**
 * Compose a personalized reply via Groq, or null when Groq is not configured
 * or the call fails for any reason (caller falls back to the template reply).
 *
 * Retries once on 429/5xx with a short backoff: the free tier throttles
 * bursts (RPM/RPD limits) and transient 5xx, and a single retry recovers
 * most of those without materially delaying the reply. Other 4xx (bad key,
 * bad model) fail fast — they cannot fix themselves.
 */
export async function composeChatReply(input: ChatLlmInput): Promise<string | null> {
  const apiKey = runtimeEnv().GROQ_API_KEY;
  if (!apiKey) return null;
  const model = runtimeEnv().GROQ_MODEL?.trim() || DEFAULT_MODEL;
  const query = input.query.trim();
  if (query.length === 0) return null;

  const messages = [
    { role: "system" as const, content: SYSTEM_PROMPT },
    { role: "user" as const, content: buildUserPrompt({ ...input, query }) },
  ];

  const MAX_ATTEMPTS = 2;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(groqApiUrl(), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          temperature: 0.6,
          // Reasoning models (gpt-oss) spend completion tokens thinking first;
          // a tight budget returns all reasoning and empty content. Give the
          // budget headroom and keep effort low — this is a rewrite task.
          max_completion_tokens: 1024,
          ...(model.includes("gpt-oss") ? { reasoning_effort: "low" } : {}),
          messages,
        }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });

      if (!response.ok) {
        const retryable = response.status === 429 || response.status >= 500;
        if (retryable && attempt < MAX_ATTEMPTS) {
          // Honor Groq's Retry-After when present, capped so a chat reply
          // never hangs; otherwise use the short default backoff.
          const retryAfter = Number(response.headers.get("retry-after"));
          const waitMs = Number.isFinite(retryAfter) && retryAfter > 0
            ? Math.min(retryAfter * 1000, RETRY_CAP_MS)
            : RETRY_BACKOFF_MS;
          console.warn(`[GROQ] HTTP ${response.status} on attempt ${attempt}, retrying in ${Math.round(waitMs)}ms...`);
          await new Promise((r) => setTimeout(r, waitMs));
          continue;
        }
        console.warn(
          `[GROQ] compose failed: HTTP ${response.status}${response.status >= 500 ? " (transient)" : ""}`,
        );
        return null;
      }

      const data = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const text = data.choices?.[0]?.message?.content?.trim();
      if (!text) {
        console.warn("[GROQ] compose failed: empty content (reasoning budget exhausted?)");
        return null;
      }

      // Guard against runaway output and stray wrapping quotes.
      return text
        .replace(/^["'`]+|["'`]+$/g, "")
        .slice(0, MAX_REPLY_CHARS)
        .trim() || null;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const isTimeout = msg.includes("abort") || msg.includes("timeout") || msg.includes("Timeout");
      console.warn(`[GROQ] compose failed: ${isTimeout ? `timed out after ${TIMEOUT_MS}ms` : msg}`);
      return null;
    }
  }
  return null;
}
