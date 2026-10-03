import React, { useState, useEffect, useRef, Suspense } from "react";
import { X, Phone, HelpCircle } from "lucide-react";
import ClickSpark from "./ui/ClickSpark";
import { gsap } from "gsap";
import { ResultsHeader } from "./assessment/ResultsHeader";
import { FollowUpCard } from "./assessment/FollowUpCard";
import { RecommendationCard } from "./assessment/RecommendationCard";
import { AssessmentFormFields } from "./assessment/AssessmentForm";
import { SubmitProgressDisplay, useSubmitProgress } from "./assessment/SubmitProgress";
import { EditParametersModal } from "./assessment/EditParametersModal";
import { useAssessmentSubmission } from "./assessment/useAssessmentSubmission";
import type { AssessmentFormValues } from "./assessment/assessmentModel";
import {
  validateForm,
  validateFieldValue,
  formPatchForFollowUp,
  EMPTY_ASSESSMENT_FORM,
} from "./assessment/assessmentModel";
import type { FollowUpQuestion } from "../lib/schemeTypes";

const Grainient = React.lazy(() => import("./ui/Grainient"));

/**
 * Assessment page — composition root only.
 *
 * Owns page-level state wiring (form values, view phase, edit modal) and
 * delegates to extracted modules:
 * - assessmentModel.ts       validation + follow-up merge logic
 * - useAssessmentSubmission  submission orchestration + persistence
 * - AssessmentFormFields     form presentation
 * - SubmitProgress           progress hook + display
 * - ResultsHeader / FollowUpCard / RecommendationCard / EditParametersModal
 */
export function AssessmentPage() {
  const gradientRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.fromTo(
      gradientRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" }
    );
  }, []);

  const [formData, setFormData] = useState<AssessmentFormValues>(EMPTY_ASSESSMENT_FORM);
  const [requirementText, setRequirementText] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    isSubmitting,
    apiError,
    outcome,
    setApiError,
    submit,
    answerFollowUp,
    restore,
  } = useAssessmentSubmission();
  const [submitProgress, setSubmitProgress] = useSubmitProgress(isSubmitting);

  const maxRelevance = Math.max(
    0,
    ...(outcome?.recommendations ?? []).map((item) => item.relevance?.score ?? 0),
  );

  // Prevent background body scroll when edit modal is open
  useEffect(() => {
    if (isEditModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isEditModalOpen]);

  // Restore results from sessionStorage (e.g. after modal-flow redirect).
  // Rehydrates the form state too — the results header renders from it.
  useEffect(() => {
    const restoredForm = restore();
    if (restoredForm) {
      setFormData(restoredForm);
      setIsSuccess(true);
    }
  }, [restore]);

  const handleFieldChange = (name: keyof AssessmentFormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    const errorMsg = validateFieldValue(name, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (errorMsg) next[name] = errorMsg;
      else delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    const ok = await submit(formData, requirementText, "manual_click");
    if (ok) {
      setIsSuccess(true);
      setIsEditModalOpen(false);
    }
    setSubmitProgress(100);
  };

  const handleFollowUpAnswer = async (question: FollowUpQuestion, rawAnswer: string) => {
    const ok = await answerFollowUp(formData, requirementText, question, rawAnswer);
    if (ok) {
      // Persist the answer into form state so later re-runs (edit modal,
      // resubmits) keep the fact instead of regressing to the pre-answer form.
      const patch = formPatchForFollowUp(question.field, rawAnswer);
      if (Object.keys(patch).length > 0) {
        setFormData((prev) => ({ ...prev, ...patch }));
      }
    }
  };

  return (
    <div
      ref={gradientRef}
      className="relative w-full min-h-screen bg-zinc-50 pt-24 pb-24 flex items-start justify-center overflow-x-hidden"
    >
      {/* Dynamic Background Glow */}
      <Suspense fallback={null}>
        <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
          <Grainient
            color1="#FFEAE6"
            color2="#FFF8F6"
            color3="#FFF5F2"
            timeSpeed={0.15}
            zoom={1.2}
            contrast={1.1}
            saturation={0.8}
            grainAmount={0.06}
          />
        </div>
      </Suspense>

      <div className="w-full px-6 transition-all duration-500 ease-in-out max-w-7xl z-10 animate-in fade-in duration-300">
        {apiError ? (
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 text-center shadow-sm max-w-xl mx-auto space-y-6">
            <div className="flex flex-col items-center justify-center py-4">
              <div className="w-12 h-12 bg-red-50 text-red-500 border border-red-100 flex items-center justify-center rounded-full mb-3 shadow-xs">
                <X size={24} strokeWidth={2.5} />
              </div>
              <h1 className="font-sans text-lg font-extrabold text-black uppercase tracking-wider">
                Submission Error
              </h1>
              <p className="text-zinc-500 font-sans text-xs max-w-sm mt-2 leading-relaxed text-center">
                We encountered an issue while processing your assessment request:
              </p>
              <pre className="mt-3 w-full text-left font-mono text-[10px] text-red-600 bg-red-50/50 border border-red-100 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap max-h-40 overflow-y-auto">
                {apiError}
              </pre>
            </div>

            {/* Direct Call Button (User CTA) */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 max-w-sm mx-auto flex flex-col items-center justify-center space-y-2">
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase select-none">
                Direct Eligibility Hotline
              </span>
              <ClickSpark sparkColor="#ea580c" sparkRadius={20} sparkCount={8} duration={350} className="w-full">
                <a
                  href="tel:+91 8447198483"
                  className="bg-white border border-zinc-200 text-zinc-900 px-5 py-3 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs active:scale-95"
                >
                  <Phone size={13} className="text-primary" />
                  +91 8447198483
                </a>
              </ClickSpark>
            </div>

            <div className="pt-2 flex justify-center">
              <ClickSpark sparkColor="#000" sparkRadius={20} sparkCount={8} duration={350}>
                <button
                  onClick={() => {
                    setApiError(null);
                    setIsSuccess(false);
                  }}
                  className="border border-zinc-200 text-black px-10 py-3.5 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-50 transition-colors active:scale-95 duration-100 cursor-pointer"
                >
                  Retry Diagnostics Form
                </button>
              </ClickSpark>
            </div>
          </div>
        ) : !isSuccess ? (
          <div className="flex flex-col items-center animate-in fade-in-0 duration-200 max-w-2xl mx-auto w-full">
            {/* Top Centered Header */}
            <div className="text-center max-w-3xl mx-auto mb-6 flex flex-col items-center justify-center w-full">
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                Find Government Schemes You May Qualify For
              </h1>
            </div>

            {/* Compact Form Card */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm w-full min-h-[350px] flex flex-col justify-center">
              {isSubmitting ? (
                <SubmitProgressDisplay progress={submitProgress} />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <h2 className="font-sans text-xl font-extrabold text-black mb-1">
                      Free Advisory Diagnostic
                    </h2>
                    <p className="text-zinc-500 font-sans text-xs leading-relaxed">
                      Provide your corporate details below to run our policy matching matrix.
                    </p>
                  </div>

                  <AssessmentFormFields
                    values={formData}
                    errors={errors}
                    requirementText={requirementText}
                    showRequirement={true}
                    onFieldChange={handleFieldChange}
                    onRequirementChange={setRequirementText}
                  />

                  {/* Submit button */}
                  <div className="pt-2">
                    <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400} className="w-full" style={{ display: "block", width: "100%" }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-3 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-all duration-100 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Running Advisory Matrix...
                          </>
                        ) : (
                          "Compile Eligibility Diagnostic"
                        )}
                      </button>
                    </ClickSpark>
                  </div>
                </form>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in-0 duration-200 w-full text-left">
            {/* 1. Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-1">
              <div className="space-y-1">
                <h1 className="font-sans text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight leading-tight">
                  Matched Funding Schemes
                </h1>
              </div>
            </div>

            {/* 2. Collapsible Profile Panel */}
            <ResultsHeader form={formData} profile={outcome?.extractedProfile} onEdit={() => setIsEditModalOpen(true)} />

            {/* 3. Follow-up questions */}
            {outcome?.followUpQuestions && outcome.followUpQuestions.length > 0 && (
              <div className="bg-white border border-zinc-200 rounded-2xl p-5 md:p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center text-primary">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-extrabold text-black tracking-tight">
                      Improve Your Matches
                    </h3>
                    <p className="text-zinc-500 font-sans text-[11px]">
                      Answering these helps us check eligibility for more schemes.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {outcome.followUpQuestions.map((q) => (
                    <FollowUpCard
                      key={q.field}
                      question={q}
                      disabled={isSubmitting}
                      onAnswer={(ans) => handleFollowUpAnswer(q, ans)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 4. Matched schemes grid */}
            <div className="w-full">
              {isSubmitting ? (
                <div className="flex flex-col items-center justify-center py-24 space-y-4 bg-white border border-zinc-200 rounded-2xl shadow-xs">
                  <span className="w-8 h-8 border-4 border-zinc-250 border-t-black rounded-full animate-spin" />
                  <p className="text-zinc-500 font-sans text-xs">Submitting sovereign policy matching matrix...</p>
                </div>
              ) : outcome?.recommendations && outcome.recommendations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {outcome.recommendations.map((rec, idx) => (
                    <RecommendationCard
                      key={rec.schemeId ?? idx}
                      rec={rec}
                      matchPercent={
                        maxRelevance > 0
                          ? Math.round(Math.max(0, Math.min(1, (rec.relevance?.score ?? 0) / maxRelevance)) * 100)
                          : 0
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white border border-zinc-200 rounded-2xl shadow-xs text-zinc-500 text-xs font-sans">
                  No matching schemes were found for your business profile at this time.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Edit Parameters overlay */}
      {isEditModalOpen && (
        <EditParametersModal
          values={formData}
          errors={errors}
          isSubmitting={isSubmitting}
          submitProgress={submitProgress}
          onClose={() => setIsEditModalOpen(false)}
          onFieldChange={handleFieldChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
