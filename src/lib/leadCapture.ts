/**
 * Lead capture — the SINGLE implementation for capturing leads.
 *
 * All leads now flow through the backend (`POST /api/leads`), which is the
 * system of record: it dedupes by phone/email, merges repeat submissions into
 * one progressively richer lead, computes an intent score, persists to
 * data/leads/, and forwards to the Google Sheets CRM. The backend CSV export
 * (GET /api/leads/export) is the CRM-ready output.
 *
 * Notes:
 * - Fire-and-forget by design: lead capture must never block or fail the
 *   user-facing flow (recommendations, form success), so errors are logged,
 *   never thrown.
 * - Previously this posted directly to Google Sheets from the browser with
 *   `mode: "no-cors"`; routing through the backend lets us enrich, dedupe,
 *   score and export reliably.
 */

import { apiUrl } from "./api";
import { createLogger } from "./logger";

const log = createLogger("leadCapture");

/** Lead submission payload accepted by POST /api/leads. */
export interface LeadPayload {
  source: "assessment_modal" | "assessment_page" | "chatbot" | "callback_form";
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  businessDescription?: string;
  company?: string;
  description?: string;
  /** Structured profile from the recommendation engine, when available. */
  profile?: Record<string, unknown>;
  /** Top scheme recommendations shown to the user. */
  topSchemes?: Array<{ schemeId: string; schemeName: string; eligibilityStatus: string }>;
  /** Chat engagement metrics (chatbot leads). */
  chat?: { messageCount: number; sessionSummary?: string };
}

export interface LeadResponse {
  ok: boolean;
  leadId?: string;
  merged?: boolean;
  score?: number;
}

/** Fire-and-forget POST of a lead to the backend. Never throws. */
export function submitLead(lead: LeadPayload): void {
  submitLeadAsync(lead).catch((err: unknown) => log.warn("lead save failed (non-blocking)", err));
}

/** Awaitable variant for flows that want to confirm capture succeeded. */
export async function submitLeadAsync(lead: LeadPayload): Promise<LeadResponse | null> {
  try {
    const response = await fetch(apiUrl("/api/leads"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!response.ok) {
      log.warn("lead endpoint rejected submission", { status: response.status });
      return null;
    }
    return (await response.json()) as LeadResponse;
  } catch (err) {
    log.warn("lead save failed (non-blocking)", err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Convenience wrappers preserving the historical call signatures
// ---------------------------------------------------------------------------

/** Assessment/audit funnel lead (AssessmentModal, useAssessmentSubmission). */
export interface AssessmentLead {
  formType?: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  businessDescription: string;
  /** Optional structured eligibility profile (age, state, income, ...). */
  age?: string;
  gender?: string;
  state?: string;
  ruralUrban?: string;
  socialCategory?: string;
  annualIncome?: string;
  employmentStatus?: string;
  businessStage?: string;
  projectCost?: string;
  maritalStatus?: string;
  educationLevel?: string;
  incomeTaxPayer?: string;
}

/** Contact/callback funnel lead (ContactSection). */
export interface CallbackLead {
  name: string;
  email: string;
  phone: string;
  company: string;
  description: string;
}

/**
 * Submit an assessment/audit lead. Never throws.
 *
 * `profile` carries the structured eligibility facts (age, state, income,
 * category, ...) collected by the optional profile section; they enrich the
 * backend lead record (and the Sheets CRM profileSummary column) so the
 * expert follow-up call starts pre-qualified.
 */
export function submitAssessmentLead(lead: AssessmentLead, profile?: Record<string, unknown>): void {
  // Keep capture in sync with the backend's auto-capture (same funnel, same
  // attribution) — the backend record is authoritative, this is the echo.
  const source = lead.formType === "Assessment Page" ? "assessment_page" : "assessment_modal";
  submitLead({
    source,
    name: lead.name.trim(),
    email: lead.email.trim(),
    phone: lead.phone.trim(),
    businessName: lead.businessName.trim(),
    businessType: lead.businessType,
    businessDescription: lead.businessDescription.trim(),
    ...(profile && Object.keys(profile).length > 0 ? { profile } : {}),
  });
}

/** Submit a contact/callback lead. Never throws. */
export function submitCallbackLead(lead: CallbackLead): void {
  submitLead({
    source: "callback_form",
    name: lead.name.trim(),
    email: lead.email.trim(),
    phone: lead.phone.trim(),
    company: lead.company.trim(),
    description: lead.description.trim(),
  });
}
