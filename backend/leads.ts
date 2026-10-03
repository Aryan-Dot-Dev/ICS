/**
 * Lead store — the backend system of record for every lead the site captures.
 *
 * Design:
 * - DEDUPE: one lead per identity (phone first, then email). Repeat
 *   submissions (assessment → chat → callback) MERGE into the same lead so the
 *   CRM sees a single, progressively richer row instead of three fragments.
 * - SCORING: deterministic 0–100 intent score computed from eligibility
 *   results, engagement depth and contact completeness. Reasons are stored so
 *   the sales team can sort by score and see WHY.
 * - PERSISTENCE: append-only JSONL (one JSON object per line) in data/leads/.
 *   Survives restarts, trivially recoverable, no DB dependency.
 * - SHEETS FORWARDING: every create/merge is forwarded to the Google Apps
 *   Script intake endpoint (the current CRM) fire-and-forget with retry.
 * - EXPORT: stable-column CSV for CRM import via GET /api/leads/export.
 *
 * Never throws on Sheets failures — the store of record is always local.
 */

import fs from "node:fs";
import path from "node:path";
import { log } from "./logger";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LeadSource = "assessment_modal" | "assessment_page" | "chatbot" | "callback_form";

/** What the client sends. All fields optional except at least one identifier. */
export interface LeadSubmission {
  source: LeadSource;
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  businessDescription?: string;
  company?: string;
  description?: string;
  /** Canonical extracted profile from the recommendation engine, if any. */
  profile?: Record<string, unknown>;
  /** Top scheme recommendations shown to the user, if any. */
  topSchemes?: Array<{ schemeId: string; schemeName: string; eligibilityStatus: string }>;
  /** Chat engagement metrics, chatbot leads only. */
  chat?: { messageCount: number; sessionSummary?: string };
  /** False for follow-up re-runs, which enrich but don't count as new assessments. */
  countsAsAssessment?: boolean;
}

/** The stored, enriched lead record. */
export interface LeadRecord {
  leadId: string;
  createdAt: string;
  updatedAt: string;
  /** Last time this lead contacted us (ISO). */
  lastActivityAt: string;
  /** Sources that produced this lead, most recent first. */
  sources: LeadSource[];
  /** Current funnel stage the lead reached. */
  stage: "lead" | "assessed" | "chat_engaged" | "callback_requested";
  // Identity
  name?: string;
  email?: string;
  phone?: string;
  // Business
  businessName?: string;
  businessType?: string;
  businessDescription?: string;
  /** Canonical scheme profile (state, income, age, category, ...). */
  profile: Record<string, unknown>;
  /** Top scheme recommendations at last assessment. */
  topSchemes: Array<{ schemeId: string; schemeName: string; eligibilityStatus: string }>;
  /** Estimated funding span across the top recommendations, human-readable. */
  potentialFunding?: string;
  // Engagement
  chatMessages: number;
  chatSessionSummary?: string;
  assessmentCount: number;
  /** Total interactions across all surfaces. */
  touchpoints: number;
  // Scoring
  score: number;
  scoreReasons: string[];
  /** ISO timestamp of the latest manual CRM touch, when known. */
  consentAt?: string;
}

// ---------------------------------------------------------------------------
// Normalization helpers
// ---------------------------------------------------------------------------

function cleanString(value: unknown, maxLen = 500): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed.slice(0, maxLen) : undefined;
}

/** Digits-only phone for dedupe keys ("+91 98765 43210" → "919876543210"). */
export function normalizePhone(raw: string): string | undefined {
  let digits = raw.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) return undefined;
  // Leading trunk zero ("09876543210") is a dialing prefix, not the number.
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  // Indian numbers without country code get 91 prepended for stable keys.
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export function normalizeEmail(raw: string): string | undefined {
  const trimmed = raw.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed) ? trimmed : undefined;
}

// ---------------------------------------------------------------------------
// Lead scoring
// ---------------------------------------------------------------------------

/**
 * Deterministic intent score, 0–100.
 * - Eligibility evidence is the strongest signal (up to 45): eligible schemes
 *   mean the lead has verified, actionable funding paths.
 * - Engagement depth (up to 30): assessment completion, chat activity.
 * - Contact completeness (up to 25): how reachable the lead is.
 */
export function computeLeadScore(lead: Pick<
  LeadRecord,
  "topSchemes" | "assessmentCount" | "chatMessages" | "phone" | "email" | "name" | "profile" | "stage"
>): { score: number; reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];

  // 1. Eligibility evidence (max 45)
  const eligible = lead.topSchemes.filter((s) => s.eligibilityStatus === "eligible");
  const potentiallyEligible = lead.topSchemes.filter((s) => s.eligibilityStatus === "potentially_eligible");
  if (eligible.length > 0) {
    const pts = Math.min(45, 25 + 10 * (eligible.length - 1));
    score += pts;
    reasons.push(`${eligible.length} verified-eligible scheme${eligible.length > 1 ? "s" : ""} (+${pts})`);
  } else if (potentiallyEligible.length > 0) {
    const pts = Math.min(20, 12 + 4 * (potentiallyEligible.length - 1));
    score += pts;
    reasons.push(`${potentiallyEligible.length} potentially-eligible scheme${potentiallyEligible.length > 1 ? "s" : ""} (+${pts})`);
  } else if (lead.topSchemes.length > 0) {
    score += 5;
    reasons.push(`received ${lead.topSchemes.length} scheme recommendations (+5)`);
  }

  // 2. Engagement depth (max 30)
  if (lead.assessmentCount > 0) {
    const pts = lead.assessmentCount > 1 ? 20 : 15;
    score += pts;
    reasons.push(`completed funding assessment (+${pts})`);
  }
  if (lead.chatMessages >= 6) {
    score += 10;
    reasons.push(`active chat conversation (${lead.chatMessages} messages) (+10)`);
  } else if (lead.chatMessages >= 2) {
    score += 5;
    reasons.push(`used the chatbot (+5)`);
  }
  if (lead.stage === "callback_requested") {
    score += 10;
    reasons.push("requested a callback (+10)");
  }

  // 3. Contact completeness (max 25)
  if (lead.phone) {
    score += 10;
    reasons.push("phone provided (+10)");
  }
  if (lead.email) {
    score += 10;
    reasons.push("email provided (+10)");
  }
  if (lead.name) {
    score += 5;
    reasons.push("name provided (+5)");
  }

  // Rich profile details are a soft bonus signal of intent.
  const profileFields = Object.keys(lead.profile ?? {}).filter((k) => !["goals", "needs", "businessDescription"].includes(k));
  if (profileFields.length >= 3) {
    score += Math.min(5, profileFields.length);
    reasons.push(`rich profile (${profileFields.length} structured details) (+${Math.min(5, profileFields.length)})`);
  }

  return { score: Math.min(100, score), reasons };
}

function fundingSpanFromSchemes(schemes: LeadRecord["topSchemes"], fullRecommendations?: unknown[]): string | undefined {
  // Prefer the range the recommendation response already computed.
  if (Array.isArray(fullRecommendations)) {
    const ranges = fullRecommendations
      .map((r) => (r as { fundingRange?: string }).fundingRange)
      .filter((r): r is string => typeof r === "string" && r.length > 0);
    if (ranges.length > 0) return [...new Set(ranges)].slice(0, 2).join(" · ");
  }
  if (schemes.length === 0) return undefined;
  return schemes.map((s) => s.schemeName).slice(0, 3).join(", ");
}

// ---------------------------------------------------------------------------
// Sheets value safety
// ---------------------------------------------------------------------------

const FORMULA_TRIGGER_CHARS = new Set(["=", "+", "-", "@"]);

/**
 * Google Sheets parses values that start with =, +, - or @ as formulas when
 * the Apps Script writes them via setValue/appendRow — a phone like
 * "+91 90000 99999" lands as #ERROR!. Prefixing an apostrophe is the
 * standard "treat as text" escape and is consumed by Sheets on entry.
 */
export function sheetsSafeCell(value: string): string {
  const trimmed = value.trim();
  return trimmed.length > 0 && FORMULA_TRIGGER_CHARS.has(trimmed[0]!) ? `'${trimmed}` : value;
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

// `import.meta.dir` exists in Bun but not in the Workers runtime. Workers use
// the in-memory store (and Sheets forwarding) instead of filesystem storage.
const DEFAULT_DATA_DIR: string | null =
  typeof import.meta.dir === "string" ? path.resolve(import.meta.dir, "data", "leads") : null;

function leadsFileFor(dataDir: string): string {
  return path.join(dataDir, "leads.jsonl");
}

/** Load all leads (call once per process; the store keeps an in-memory map). */
export function loadLeads(dataDir: string | null = DEFAULT_DATA_DIR): Map<string, LeadRecord> {
  const leads = new Map<string, LeadRecord>();
  if (dataDir === null) return leads;
  try {
    const file = leadsFileFor(dataDir);
    if (!fs.existsSync(file)) return leads;
    const lines = fs.readFileSync(file, "utf8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      try {
        const lead = JSON.parse(trimmed) as LeadRecord;
        leads.set(lead.leadId, lead);
      } catch {
        // Skip malformed lines; the file is append-only JSONL.
      }
    }
  } catch (err) {
    log.warn("failed to load leads file; starting with empty store", { error: String(err) });
  }
  return leads;
}

/**
 * Find an existing lead matching the identity. Phone wins (stronger
 * identifier); email is the fallback. Identity keys are stored in a side
 * index so merged leads stay findable by any identity ever seen for them.
 */
export class LeadStore {
  private leads: Map<string, LeadRecord>;
  /** normalized identity -> leadId */
  private identityIndex: Map<string, string>;
  /** Google Apps Script intake endpoint; forwarding is off when absent. */
  private sheetsUrl?: string;
  /** Directory holding the JSONL store; injectable for tests. */
  private dataDir: string | null;

  constructor(leads?: Map<string, LeadRecord>, sheetsUrl?: string, dataDir: string | null = DEFAULT_DATA_DIR) {
    this.leads = leads ?? new Map();
    this.sheetsUrl = sheetsUrl;
    this.dataDir = dataDir;
    this.identityIndex = new Map();
    for (const lead of this.leads.values()) {
      const phone = lead.phone ? normalizePhone(lead.phone) : undefined;
      if (phone) this.identityIndex.set(`p:${phone}`, lead.leadId);
      const email = lead.email ? normalizeEmail(lead.email) : undefined;
      if (email) this.identityIndex.set(`e:${email}`, lead.leadId);
    }
  }

  get size(): number {
    return this.leads.size;
  }

  /** Set the forwarding destination for runtimes whose bindings arrive per request. */
  configureSheets(sheetsUrl?: string): void {
    this.sheetsUrl = sheetsUrl;
  }

  /** Replace the in-memory snapshot after loading it from a Worker KV store. */
  replaceLeads(leads: LeadRecord[]): void {
    this.leads = new Map(leads.map((lead) => [lead.leadId, lead]));
    this.identityIndex = new Map();
    for (const lead of this.leads.values()) {
      const phone = lead.phone ? normalizePhone(lead.phone) : undefined;
      if (phone) this.identityIndex.set(`p:${phone}`, lead.leadId);
      const email = lead.email ? normalizeEmail(lead.email) : undefined;
      if (email) this.identityIndex.set(`e:${email}`, lead.leadId);
    }
  }

  listLeads(): LeadRecord[] {
    return [...this.leads.values()].sort((a, b) => b.lastActivityAt.localeCompare(a.lastActivityAt));
  }

  private findByIdentity(sub: LeadSubmission): LeadRecord | undefined {
    const phone = sub.phone ? normalizePhone(sub.phone) : undefined;
    if (phone) {
      const id = this.identityIndex.get(`p:${phone}`);
      if (id) return this.leads.get(id);
    }
    const email = sub.email ? normalizeEmail(sub.email) : undefined;
    if (email) {
      const id = this.identityIndex.get(`e:${email}`);
      if (id) return this.leads.get(id);
    }
    return undefined;
  }

  /** Create or merge a lead. Returns the stored record. */
  upsert(sub: LeadSubmission, fullRecommendations?: unknown[]): LeadRecord {
    const now = new Date().toISOString();
    const existing = this.findByIdentity(sub);
    const phone = sub.phone ? normalizePhone(sub.phone) : undefined;
    const email = sub.email ? normalizeEmail(sub.email) : undefined;

    let lead: LeadRecord;
    if (existing) {
      lead = existing;
      lead.updatedAt = now;
      lead.lastActivityAt = now;
      lead.touchpoints += 1;
      if (!lead.sources.includes(sub.source)) lead.sources.unshift(sub.source);
      else lead.sources = [sub.source, ...lead.sources.filter((s) => s !== sub.source)];
    } else {
      lead = {
        leadId: `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
        createdAt: now,
        updatedAt: now,
        lastActivityAt: now,
        sources: [sub.source],
        stage: "lead",
        profile: {},
        topSchemes: [],
        chatMessages: 0,
        assessmentCount: 0,
        touchpoints: 1,
        score: 0,
        scoreReasons: [],
      };
      this.leads.set(lead.leadId, lead);
    }

    // --- Merge identity (never overwrite non-empty with empty) ---
    if (sub.name) lead.name = sub.name;
    if (email) {
      lead.email = email;
      this.identityIndex.set(`e:${email}`, lead.leadId);
    }
    if (phone) {
      lead.phone = sub.phone?.trim() ?? sub.phone;
      this.identityIndex.set(`p:${phone}`, lead.leadId);
    }
    if (sub.businessName) lead.businessName = sub.businessName;
    if (sub.businessType) lead.businessType = sub.businessType;
    if (sub.businessDescription) lead.businessDescription = sub.businessDescription;
    if (sub.company && !lead.businessName) lead.businessName = sub.company;
    if (sub.description && !lead.businessDescription) lead.businessDescription = sub.description;

    // --- Merge enrichment ---
    if (sub.profile && typeof sub.profile === "object") {
      // Incoming extraction is authoritative for facts it carries; existing
      // facts are kept when the new payload lacks them.
      lead.profile = { ...lead.profile, ...sub.profile };
    }
    if (sub.topSchemes && sub.topSchemes.length > 0) {
      lead.topSchemes = sub.topSchemes.slice(0, 5);
      const span = fundingSpanFromSchemes(lead.topSchemes, fullRecommendations);
      if (span) lead.potentialFunding = span;
    }
    if (sub.chat) {
      lead.chatMessages = Math.max(lead.chatMessages, sub.chat.messageCount);
      if (sub.chat.sessionSummary) lead.chatSessionSummary = sub.chat.sessionSummary;
    }
    if (
      (sub.source === "assessment_modal" || sub.source === "assessment_page") &&
      sub.countsAsAssessment !== false
    ) {
      lead.assessmentCount += 1;
    }

    // --- Stage progression (monotonic) ---
    const stageRank: Record<LeadRecord["stage"], number> = {
      lead: 0,
      chat_engaged: 1,
      assessed: 2,
      callback_requested: 3,
    };
    const subStage: LeadRecord["stage"] =
      sub.source === "callback_form" ? "callback_requested"
        : sub.source === "assessment_modal" || sub.source === "assessment_page" ? "assessed"
          : "chat_engaged";
    if (stageRank[subStage] > stageRank[lead.stage]) lead.stage = subStage;

    // --- Score ---
    const { score, reasons } = computeLeadScore(lead);
    lead.score = score;
    lead.scoreReasons = reasons;

    this.persist(lead);
    this.forwardToSheets(lead, sub);
    return lead;
  }

  /** JSONL persistence: one file per lead + a compacted single-file index. */
  private persist(lead: LeadRecord): void {
    // Cloudflare Workers have no writable filesystem. The Worker entrypoint
    // passes null here and uses the in-memory store plus Sheets forwarding.
    if (this.dataDir === null) return;
    try {
      fs.mkdirSync(this.dataDir, { recursive: true });
      // Per-lead file keeps updates simple and recovery trivial.
      const leadFile = path.join(this.dataDir, `${lead.leadId}.json`);
      fs.writeFileSync(leadFile, JSON.stringify(lead, null, 2));
      // Compact index for tools that want a single file.
      fs.writeFileSync(
        leadsFileFor(this.dataDir),
        this.listLeads().map((l) => JSON.stringify(l)).join("\n") + "\n",
      );
    } catch (err) {
      log.error("failed to persist lead", { leadId: lead.leadId, error: String(err) });
    }
  }

  /**
   * Forward to the Google Apps Script intake (the current CRM sheet).
   * Fire-and-forget with one retry; failures are logged, never thrown — the
   * local store is the system of record and the CSV export is the backup.
   */
  private forwardToSheets(lead: LeadRecord, sub: LeadSubmission): void {
    const sheetsUrl = this.sheetsUrl;
    if (!sheetsUrl) return; // Feature off: local store + CSV only.

    const params = new URLSearchParams();
    const cell = sheetsSafeCell;
    params.append("formType", cell(lead.sources[0] ?? sub.source));
    params.append("name", cell(lead.name ?? ""));
    params.append("email", cell(lead.email ?? ""));
    params.append("phone", cell(lead.phone ?? ""));
    params.append("businessName", cell(lead.businessName ?? ""));
    params.append("businessType", cell(lead.businessType ?? ""));
    params.append("businessDescription", cell(lead.businessDescription ?? ""));
    // Enrichment columns — the Apps Script appends unknown params to the row.
    params.append("leadId", lead.leadId);
    params.append("leadScore", String(lead.score));
    params.append("leadStage", lead.stage);
    params.append("topSchemes", cell(lead.topSchemes.map((s) => `${s.schemeName} (${s.eligibilityStatus})`).join("; ")));
    params.append("potentialFunding", cell(lead.potentialFunding ?? ""));
    params.append("profileSummary", cell(Object.entries(lead.profile)
      .filter(([k]) => !["goals", "needs", "businessDescription"].includes(k))
      .map(([k, v]) => `${k}=${Array.isArray(v) ? v.join("|") : String(v)}`)
      .slice(0, 10)
      .join("; ")));
    params.append("source", cell(lead.sources.join(",")));
    params.append("chatMessages", String(lead.chatMessages));
    params.append("chatSummary", cell(lead.chatSessionSummary ?? ""));

    const post = (): Promise<void> =>
      fetch(sheetsUrl, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      }).then((res) => {
        if (res.ok) {
          log.info("lead forwarded to sheets", { leadId: lead.leadId, status: res.status });
        } else {
          log.warn("sheets forward returned non-ok", { leadId: lead.leadId, status: res.status });
        }
      });

    post().catch(() => {
      // One retry after a short delay; give up silently after that.
      setTimeout(() => post().catch((err) => log.warn("sheets forward failed permanently", { leadId: lead.leadId, error: String(err) })), 2000);
    });
  }
}

// ---------------------------------------------------------------------------
// CSV export
// ---------------------------------------------------------------------------

/** Stable column order — CRMs import this directly. Additions go at the END. */
export const CSV_COLUMNS = [
  "lead_id",
  "created_at",
  "updated_at",
  "last_activity_at",
  "stage",
  "sources",
  "score",
  "score_reasons",
  "name",
  "email",
  "phone",
  "business_name",
  "business_type",
  "business_description",
  "profile_summary",
  "top_schemes",
  "potential_funding",
  "chat_messages",
  "chat_summary",
  "assessment_count",
  "touchpoints",
] as const;

function csvCell(value: unknown): string {
  if (value === undefined || value === null) return "";
  const s = String(value);
  // Quote anything with a comma, quote, newline; double the quotes.
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function leadsToCsv(leads: LeadRecord[]): string {
  const rows: string[] = [CSV_COLUMNS.join(",")];
  for (const lead of leads) {
    const profileSummary = Object.entries(lead.profile)
      .filter(([k]) => !["goals", "needs", "businessDescription"].includes(k))
      .map(([k, v]) => `${k}=${Array.isArray(v) ? v.join("|") : String(v)}`)
      .join("; ");
    rows.push([
      lead.leadId,
      lead.createdAt,
      lead.updatedAt,
      lead.lastActivityAt,
      lead.stage,
      lead.sources.join(","),
      String(lead.score),
      lead.scoreReasons.join("; "),
      lead.name ?? "",
      lead.email ?? "",
      lead.phone ?? "",
      lead.businessName ?? "",
      lead.businessType ?? "",
      lead.businessDescription ?? "",
      profileSummary,
      lead.topSchemes.map((s) => `${s.schemeName} (${s.eligibilityStatus})`).join("; "),
      lead.potentialFunding ?? "",
      String(lead.chatMessages),
      lead.chatSessionSummary ?? "",
      String(lead.assessmentCount),
      String(lead.touchpoints),
    ].map(csvCell).join(","));
  }
  return rows.join("\r\n") + "\r\n";
}
