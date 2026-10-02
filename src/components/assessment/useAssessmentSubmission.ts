import { useCallback, useState } from "react";
import {
  fetchRecommendations,
  persistAssessmentResults,
  loadAssessmentResults,
} from "../../lib/schemeClient";
import { submitAssessmentLead } from "../../lib/leadCapture";
import { createLogger } from "../../lib/logger";
import type { SchemeRecommendation, FollowUpQuestion, SchemeUserProfile } from "../../lib/schemeTypes";
import type { AssessmentFormValues } from "./assessmentModel";
import {
  applyFollowUpAnswer,
  buildProfileFromForm,
  hasAnyProfileValue,
  EMPTY_ASSESSMENT_FORM,
} from "./assessmentModel";

const log = createLogger("AssessmentPage");

/** Result state shown on the results view. */
export interface AssessmentOutcome {
  recommendations: SchemeRecommendation[];
  followUpQuestions: FollowUpQuestion[];
  extractedProfile: SchemeUserProfile | null;
  generatedPayload: string;
}

/** Builds the trimmed identity/business `data` block shared by all requests. */
function buildDataBlock(form: AssessmentFormValues) {
  return {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    businessName: form.businessName.trim(),
    businessType: form.businessType,
    businessDescription: form.businessDescription.trim(),
  };
}

/**
 * Assessment submission orchestration.
 *
 * Responsibilities (extracted from the page component):
 * 1. run the recommendation request via the shared API client,
 * 2. fire lead capture (independent, never blocks the flow),
 * 3. persist results to sessionStorage,
 * 4. merge follow-up answers into the profile and re-run.
 */
export function useAssessmentSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<AssessmentOutcome | null>(null);
  const [requestPayload, setRequestPayload] = useState<string | null>(null);

  const persist = useCallback((resData: Awaited<ReturnType<typeof fetchRecommendations>>, form: AssessmentFormValues) => {
    persistAssessmentResults({
      recommendations: resData.recommendations || [],
      originalFormData: buildDataBlock(form),
      profile: resData.extractedProfile,
      followUpQuestions: resData.followUpQuestions,
      knowledgeBaseVersion: resData.knowledgeBase?.version,
    });
  }, []);

  /**
   * Restore previously persisted results (e.g. after a modal-flow redirect).
   * Returns the persisted form values (or an empty form) so the page can
   * rehydrate its controlled form state — the results header renders from
   * that state, so a results-only restore would show placeholder fields.
   */
  const restore = useCallback((): AssessmentFormValues | null => {
    const stored = loadAssessmentResults();
    if (stored && stored.recommendations && stored.recommendations.length > 0) {
      setOutcome({
        recommendations: stored.recommendations,
        followUpQuestions: stored.followUpQuestions ?? [],
        extractedProfile: stored.profile ?? null,
        generatedPayload: JSON.stringify(stored.recommendations, null, 2),
      });
      return { ...EMPTY_ASSESSMENT_FORM, ...(stored.originalFormData ?? {}) };
    }
    return null;
  }, []);

  const submit = useCallback(
    async (form: AssessmentFormValues, requirementText: string, source: string): Promise<boolean> => {
      setIsSubmitting(true);
      setApiError(null);

      const structuredProfile = buildProfileFromForm(form);
      const naturalInput = requirementText.trim() || form.businessDescription.trim();

      setRequestPayload(JSON.stringify({ source, data: buildDataBlock(form), profile: structuredProfile }, null, 2));

      try {
        // Lead capture is independent of the recommendation engine: the
        // recommendation flow works even if Google Sheets fails. The
        // structured profile (age/state/income/category/...) enriches the
        // CRM lead so experts can pre-qualify before calling back.
        submitAssessmentLead(
          { formType: "Assessment Page", ...form },
          hasAnyProfileValue(form) ? structuredProfile : undefined,
        );

        const resData = await fetchRecommendations({
          data: buildDataBlock(form),
          profile: structuredProfile,
          naturalLanguageInput: naturalInput || undefined,
          source,
          leadSource: "assessment_page",
        });
        setOutcome({
          recommendations: resData.recommendations || [],
          followUpQuestions: resData.followUpQuestions || [],
          extractedProfile: resData.extractedProfile ?? null,
          generatedPayload: JSON.stringify(resData, null, 2),
        });
        persist(resData, form);
        return true;
      } catch (error) {
        log.error("recommendation request failed", error);
        setApiError(
          error instanceof Error && error.message
            ? error.message
            : "Unable to establish connection to the funding advisory database.",
        );
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [persist],
  );

  const answerFollowUp = useCallback(
    async (
      form: AssessmentFormValues,
      requirementText: string,
      question: FollowUpQuestion,
      rawAnswer: string,
    ): Promise<boolean> => {
      if (!rawAnswer.trim()) return false;
      setIsSubmitting(true);
      setApiError(null);
      try {
        // Merge into the previously extracted profile AND the form-backed
        // structured profile so both carry the new fact forward.
        const structured = buildProfileFromForm(form);
        const mergedProfile: Partial<SchemeUserProfile> = {
          ...(outcome?.extractedProfile ?? {}),
          ...structured,
        };
        applyFollowUpAnswer(mergedProfile as Record<string, unknown>, question.field, rawAnswer.trim());

        const resData = await fetchRecommendations({
          data: buildDataBlock(form),
          profile: mergedProfile,
          naturalLanguageInput: requirementText.trim() || form.businessDescription.trim(),
          source: "follow_up",
          leadSource: "assessment_page",
        });

        const finalProfile = resData.extractedProfile ?? (mergedProfile as SchemeUserProfile);
        setOutcome({
          recommendations: resData.recommendations || [],
          followUpQuestions: resData.followUpQuestions || [],
          extractedProfile: finalProfile,
          generatedPayload: JSON.stringify(resData, null, 2),
        });
        persist(resData, form);
        return true;
      } catch (error) {
        log.error("follow-up re-run failed", error);
        setApiError(error instanceof Error && error.message ? error.message : "Unable to update recommendations.");
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [outcome?.extractedProfile, persist],
  );

  return {
    isSubmitting,
    apiError,
    outcome,
    requestPayload,
    setApiError,
    submit,
    answerFollowUp,
    restore,
  };
}
