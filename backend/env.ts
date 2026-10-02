/**
 * Environment contract — validated once at boot.
 *
 * Required variables fail fast with an explicit message instead of letting
 * the server start half-configured. Optional variables are normalized here so
 * the rest of the code never reads process.env directly.
 *
 * The lead-capture variables are REQUIRED: the server must never run in a
 * state where leads are silently dropped (no Sheets forwarding) or where the
 * PII export endpoints are unprotected (no export token).
 */

export interface BackendEnv {
  /** Port the API listens on. */
  port: number;
  /** "development" | "test" | "production" — used for log level + validation. */
  nodeEnv: string;
  /** LLM extraction is optional; when absent the heuristic extractor is used. */
  llmConfigured: boolean;
  /** Groq chat personalization is optional; when absent the template reply is used. */
  groqConfigured: boolean;
  /** Chat per-IP burst size (token-bucket capacity). Only enforced when Groq is configured. */
  chatRateLimitBurst: number;
  /** Chat per-IP sustained rate: one message per this many seconds. */
  chatRateLimitWindowSeconds: number;
  /** Google Apps Script intake endpoint for lead forwarding (required). */
  leadSheetsUrl: string;
  /** Shared token for the lead export endpoints (required). */
  leadsExportToken: string;
}

function readPort(): number {
  const raw = process.env.PORT;
  if (raw === undefined || raw === "") return 8000;
  const port = Number(raw);
  if (!Number.isInteger(port) || port < 0 || port > 65535) {
    throw new Error(`Invalid PORT: "${raw}" — must be an integer between 0 and 65535.`);
  }
  // PORT=0 asks the OS for an ephemeral port. That is incompatible with this
  // app: the frontend resolves the API to a fixed origin (localhost:8000 in
  // dev, VITE_BACKEND_URL in prod), so a random port is unreachable. Some
  // Windows machines have PORT=0 set globally, which silently broke every
  // local boot — treat it as unset and say so.
  if (port === 0) return 8000;
  return port;
}

function readNodeEnv(): string {
  const env = process.env.NODE_ENV;
  if (env === undefined || env === "") return "production";
  if (!["development", "test", "production"].includes(env)) {
    throw new Error(`Invalid NODE_ENV: "${env}" — expected development, test or production.`);
  }
  return env;
}

const ENV_FIX_HINT = "Copy .env.example to .env and fill in the values (local dev), or set them in your deployment environment (Docker/hosting).";

function readLeadSheetsUrl(): string {
  const raw = process.env.LEAD_SHEETS_URL?.trim();
  if (!raw) {
    throw new Error(
      "Missing required env var LEAD_SHEETS_URL (Google Apps Script lead intake). " +
        "The API refuses to start without it so leads are never silently dropped. " + ENV_FIX_HINT,
    );
  }
  if (!/^https?:\/\/.+/.test(raw)) {
    throw new Error(
      `Invalid LEAD_SHEETS_URL: "${raw}" — must be a valid http(s) URL ` +
        "(the Apps Script web-app .../exec endpoint).",
    );
  }
  return raw;
}

function readLeadsExportToken(): string {
  const raw = process.env.LEADS_EXPORT_TOKEN?.trim();
  if (!raw) {
    throw new Error(
      "Missing required env var LEADS_EXPORT_TOKEN (auth for GET /api/leads and /api/leads/export). " +
        "The API refuses to start without it so lead PII is never served unprotected. " + ENV_FIX_HINT,
    );
  }
  if (raw.length < 16) {
    throw new Error(
      "Invalid LEADS_EXPORT_TOKEN: must be at least 16 characters (it guards lead PII). " +
        "Generate one with: openssl rand -base64 32",
    );
  }
  return raw;
}

function readChatRateLimitBurst(): number {
  const raw = process.env.CHAT_RATE_LIMIT_BURST;
  if (raw === undefined || raw === "") return 8;
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    throw new Error(`Invalid CHAT_RATE_LIMIT_BURST: "${raw}" — must be an integer between 1 and 100.`);
  }
  return n;
}

function readChatRateLimitWindowSeconds(): number {
  const raw = process.env.CHAT_RATE_LIMIT_WINDOW_SECONDS;
  if (raw === undefined || raw === "") return 6;
  if (!/^\d+$/.test(raw)) {
    throw new Error(`Invalid CHAT_RATE_LIMIT_WINDOW_SECONDS: "${raw}" — must be a positive integer (seconds).`);
  }
  const n = Number(raw);
  if (n < 1 || n > 3600) {
    throw new Error(`Invalid CHAT_RATE_LIMIT_WINDOW_SECONDS: "${raw}" — must be between 1 and 3600.`);
  }
  return n;
}

/**
 * Validate and load the environment. Throws (process exits) when the
 * configuration is invalid — the server must never boot half-configured.
 */
export function loadEnv(): BackendEnv {
  const nodeEnv = readNodeEnv();
  const port = readPort();
  const leadSheetsUrl = readLeadSheetsUrl();
  const leadsExportToken = readLeadsExportToken();

  const llmConfigured = Boolean(
    process.env.OPENAI_API_KEY ||
      process.env.ANTHROPIC_API_KEY ||
      process.env.GROQ_API_KEY, // Groq also powers LLM requirement extraction
  );
  const groqConfigured = Boolean(process.env.GROQ_API_KEY);
  const chatRateLimitBurst = readChatRateLimitBurst();
  const chatRateLimitWindowSeconds = readChatRateLimitWindowSeconds();

  return {
    port,
    nodeEnv,
    llmConfigured,
    groqConfigured,
    chatRateLimitBurst,
    chatRateLimitWindowSeconds,
    leadSheetsUrl,
    leadsExportToken,
  };
}
