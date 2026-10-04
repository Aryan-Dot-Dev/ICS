/**
 * Shared client helpers for the recommendation API.
 *
 * Used by AssessmentPage, AssessmentModal and ChatbotWidget so that all three
 * surfaces call the public censored backend view and share
 * one request/response contract.
 *
 * Lead capture has moved to lib/leadCapture.ts — this module is purely the
 * recommendation API client + session persistence + UI status vocabulary.
 */

import { apiUrl } from "./api";
import type {
  FollowUpQuestion,
  RecommendSchemesResponse,
  SchemeUserProfile,
} from "./schemeTypes";

export interface AssessmentFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  businessDescription: string;
}

export interface RecommendationRequestOptions {
  data?: AssessmentFormData;
  profile?: Partial<SchemeUserProfile>;
  naturalLanguageInput?: string;
  source?: string;
  /** Funnel attribution for backend lead capture (modal vs page). */
  leadSource?: "assessment_modal" | "assessment_page";
}

/**
 * Call the shared recommendation engine. Lead capture is intentionally NOT
 * part of this call: recommendations must work even if Sheets fails.
 */
export async function fetchRecommendations(
  options: RecommendationRequestOptions,
): Promise<RecommendSchemesResponse> {
  const payload: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    source: options.source ?? "manual_click",
  };
  if (options.leadSource) payload.leadSource = options.leadSource;
  if (options.data) payload.data = options.data;
  if (options.profile && Object.keys(options.profile).length > 0) payload.profile = options.profile;
  if (options.naturalLanguageInput) payload.naturalLanguageInput = options.naturalLanguageInput;

  const response = await fetch(apiUrl(`/api/recommend-schemes/censored`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMsg = `HTTP Error ${response.status}`;
    try {
      const errData = await response.json();
      if (errData && errData.detail) {
        errorMsg = errData.detail;
      }
    } catch {
      // keep default message
    }
    throw new Error(errorMsg);
  }

  return (await response.json()) as RecommendSchemesResponse;
}

// ---------------------------------------------------------------------------
// Session storage (infou_assessment_results — structure extended, not replaced)
// ---------------------------------------------------------------------------

export interface StoredAssessmentResults {
  recommendations: RecommendSchemesResponse["recommendations"];
  /** Full form values (identity + optional profile strings) so the
   * /assessment page can rehydrate everything the user entered, including
   * modal-collected About-you fields. */
  originalFormData?: AssessmentFormData & Partial<Record<string, string>>;
  profile?: SchemeUserProfile;
  followUpQuestions?: FollowUpQuestion[];
  knowledgeBaseVersion?: string;
}

const STORAGE_KEY = "infou_assessment_results";

export function persistAssessmentResults(stored: StoredAssessmentResults): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch (err) {
    console.warn("[SESSION STORAGE] Failed to persist assessment results", err);
  }
}
export function loadAssessmentResults(): StoredAssessmentResults | null {
  try {
    const cached = sessionStorage.getItem(STORAGE_KEY);
    if (!cached) return null;
    return JSON.parse(cached) as StoredAssessmentResults;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Status labels for the UI
// ---------------------------------------------------------------------------

export const STATUS_LABELS: Record<string, string> = {
  eligible: "ELIGIBLE",
  potentially_eligible: "POTENTIALLY ELIGIBLE",
  needs_information: "MORE INFORMATION NEEDED",
  ineligible: "NOT ELIGIBLE",
  unknown: "UNVERIFIED",
};

export const STATUS_STYLES: Record<string, string> = {
  eligible: "bg-emerald-50 text-emerald-700 border-emerald-200",
  potentially_eligible: "bg-primary/5 text-primary border-primary/20",
  needs_information: "bg-amber-50 text-amber-700 border-amber-200",
  ineligible: "bg-red-50 text-red-600 border-red-200",
  unknown: "bg-zinc-100 text-zinc-500 border-zinc-200",
};
