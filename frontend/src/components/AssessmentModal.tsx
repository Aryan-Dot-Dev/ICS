import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Stepper, { Step } from "./ui/Stepper";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ClickSpark } from "./ui/ClickSpark";
import { navigateTo } from "../lib/router";
import { apiUrl } from "../lib/api";
import { trackMetaPixelEvent } from "../lib/metaPixel";
import { submitAssessmentLead } from "../lib/leadCapture";
import { createLogger } from "../lib/logger";
import { useSubmitProgress, SubmitProgressDisplay } from "./assessment/SubmitProgress";
import { SubmissionErrorView } from "./assessment/AssessmentStatusViews";
import { SectorDropdown } from "./assessment/SectorDropdown";
import type { AssessmentFormValues } from "./assessment/assessmentModel";
import { validateFieldValue, EMPTY_ASSESSMENT_FORM, buildProfileFromForm, countProfileValues } from "./assessment/assessmentModel";
import { ProfileFieldsSection } from "./assessment/AssessmentForm";
import type { SchemeRecommendation } from "../lib/schemeTypes";

const log = createLogger("AssessmentModal");

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: "manual_click" | "random_popup";
  onSubmitSuccess?: (payload: { data: AssessmentFormValues }) => void;
}

const EMPTY_FORM: AssessmentFormValues = { ...EMPTY_ASSESSMENT_FORM };

export function AssessmentModal({ isOpen, onClose, source, onSubmitSuccess }: AssessmentModalProps) {
  const [formData, setFormData] = useState<AssessmentFormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [submitProgress, setSubmitProgress] = useSubmitProgress(isSubmitting);

  // Stepper state tracking
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({ ...EMPTY_ASSESSMENT_FORM });
      setErrors({});
      setApiError(null);
      setCurrentStepIndex(1);
    }
  }, [isOpen]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Instant field-level validation for responsive UX feedback
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

  // Step validation helpers to dynamically control the "Continue" stepper button
  const isStep1Valid = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[+0-9\s-]{8,20}$/;
    return (
      formData.name.trim() !== "" &&
      !errors.name &&
      formData.email.trim() !== "" &&
      emailRegex.test(formData.email) &&
      !errors.email &&
      formData.phone.trim() !== "" &&
      phoneRegex.test(formData.phone) &&
      !errors.phone &&
      formData.businessName.trim() !== "" &&
      !errors.businessName
    );
  };

  const isStep2Valid = () => formData.businessType !== "" && !errors.businessType;
  const isStep3Valid = () =>
    formData.businessDescription.trim() !== "" && !errors.businessDescription;
  // About-you is optional; only validate the numeric fields the user filled.
  const isStep4Valid = () =>
    !validateFieldValue("age", formData.age) &&
    !validateFieldValue("annualIncome", formData.annualIncome) &&
    !validateFieldValue("projectCost", formData.projectCost);

  const isCurrentStepValid = () => {
    if (currentStepIndex === 1) return isStep1Valid();
    if (currentStepIndex === 2) return isStep2Valid();
    if (currentStepIndex === 3) return isStep3Valid();
    if (currentStepIndex === 4) return isStep4Valid();
    return true;
  };

  const handleFinalStepCompleted = async () => {
    setIsSubmitting(true);
    setApiError(null);

    // Structured eligibility profile from the About-you step — sent to the
    // engine so matches are accurate from the very first popup submission.
    const profile = buildProfileFromForm(formData);

    const payload = {
      timestamp: new Date().toISOString(),
      source,
      leadSource: "assessment_modal",
      formId: `audit_${Math.random().toString(36).substring(2, 11)}`,
      data: {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        businessName: formData.businessName.trim(),
        businessType: formData.businessType,
        businessDescription: formData.businessDescription.trim(),
      },
      profile,
    };

    const reqJson = JSON.stringify(payload, null, 2);
    log.info("recommendation request initiated", { source, formId: payload.formId });

    try {
      // Lead capture is independent of the recommendation flow (fire-and-forget)
      submitAssessmentLead(
        {
          formType: "Assessment Audit Modal",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          businessType: formData.businessType,
          businessDescription: formData.businessDescription,
        },
        Object.keys(profile).length > 0 ? profile : undefined,
      );

      const response = await fetch(apiUrl(`/api/recommend-schemes`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: reqJson,
      });

      if (!response.ok) {
        let errorMsg = `HTTP Error ${response.status}`;
        try {
          const errData = (await response.json()) as { detail?: string };
          if (errData && errData.detail) errorMsg = errData.detail;
        } catch {
          // keep default message
        }
        throw new Error(errorMsg);
      }

      const resData = (await response.json()) as {
        recommendations?: SchemeRecommendation[];
        extractedProfile?: unknown;
        followUpQuestions?: unknown;
        knowledgeBase?: { version?: string };
      };

      // Animate progress to 100
      setSubmitProgress(100);
      await new Promise((resolve) => setTimeout(resolve, 350));

      // Persist EVERYTHING the user entered (identity + About-you strings) so
      // the /assessment results page rehydrates the full form: follow-up
      // answers merge into it and "Modify Parameters" edits the same facts.
      const sessionPayload = {
        recommendations: resData.recommendations || [],
        originalFormData: { ...formData },
        profile: resData.extractedProfile ?? (Object.keys(profile).length > 0 ? profile : undefined),
        followUpQuestions: resData.followUpQuestions ?? [],
        knowledgeBaseVersion: resData.knowledgeBase?.version,
      };
      sessionStorage.setItem("infou_assessment_results", JSON.stringify(sessionPayload));

      // Fire Meta Pixel Lead event for conversion tracking
      trackMetaPixelEvent("Lead", {
        content_name: "Assessment Form Submission",
        business_type: formData.businessType,
      });

      if (onSubmitSuccess) {
        onSubmitSuccess({ data: formData });
      }

      onClose();
      navigateTo("assessment");
    } catch (error) {
      log.error("recommendation request failed", error);
      setApiError(
        error instanceof Error && error.message
          ? error.message
          : "Unable to establish connection to the local funding advisory database.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in-0 duration-200">
      {/* Click outside to close (disabled for form integrity, close button is explicit) */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl z-10 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        {/* Premium white circular Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-2 sm:-top-4 sm:-right-4 z-50 w-9 h-9 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:scale-110 hover:rotate-90 active:scale-95 cursor-pointer"
          title="Close"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        {apiError ? (
          <SubmissionErrorView
            apiError={apiError}
            onRetry={() => {
              setApiError(null);
            }}
          />
        ) : isSubmitting ? (
          <div className="p-6 md:p-8 pt-16 pb-16 flex flex-col items-center justify-center min-h-[350px] bg-white border border-zinc-200 rounded-2xl shadow-xl text-center space-y-6">
            <SubmitProgressDisplay progress={submitProgress} />
          </div>
        ) : (
          <Stepper
            initialStep={1}
            onStepChange={(step) => setCurrentStepIndex(step)}
            onFinalStepCompleted={handleFinalStepCompleted}
            disableStepIndicators={false}
            backButtonText="Back"
            nextButtonText="Continue"
            nextButtonProps={{
              disabled: !isCurrentStepValid(),
              style: { opacity: isCurrentStepValid() ? 1 : 0.6 },
            }}
          >
            <Step>
              <div className="space-y-4 text-left">
                <h3 className="font-sans text-sm font-extrabold text-black uppercase tracking-wider mb-2">
                  Profile
                </h3>
                <p className="text-zinc-500 font-sans text-xs leading-relaxed mb-4">
                  Provide your details and registered business profile for scheme evaluation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${errors.name ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                    />
                    {errors.name && <span className="text-[10px] font-semibold text-red-500">{errors.name}</span>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. v.sharma@company.in"
                      value={formData.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${errors.email ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                    />
                    {errors.email && <span className="text-[10px] font-semibold text-red-500">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleFieldChange("phone", e.target.value)}
                      className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${errors.phone ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                    />
                    {errors.phone && <span className="text-[10px] font-semibold text-red-500">{errors.phone}</span>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="businessName" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                      Business Name
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      placeholder="e.g. Infotech Systems Ltd"
                      value={formData.businessName}
                      onChange={(e) => handleFieldChange("businessName", e.target.value)}
                      className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${errors.businessName ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                    />
                    {errors.businessName && (
                      <span className="text-[10px] font-semibold text-red-500">{errors.businessName}</span>
                    )}
                  </div>
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-4 text-left">
                <h3 className="font-sans text-sm font-extrabold text-black uppercase tracking-wider mb-2">
                  Industry Sector
                </h3>
                <p className="text-zinc-500 font-sans text-xs leading-relaxed mb-4">
                  Select the business vertical that primary represents your company's core operational activities.
                </p>

                <Label htmlFor="businessType" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                  Business Vertical
                </Label>
                <SectorDropdown
                  value={formData.businessType}
                  error={errors.businessType}
                  onChange={(sector) => handleFieldChange("businessType", sector)}
                />
              </div>
            </Step>

            <Step>
              <div className="space-y-4 text-left">
                <h3 className="font-sans text-sm font-extrabold text-black uppercase tracking-wider mb-2">
                  Detailed Description
                </h3>
                <p className="text-zinc-500 font-sans text-xs leading-relaxed mb-4">
                  Describe your primary operations and targeted government schemes or grants.
                </p>

                <div className="space-y-1.5">
                  <Label htmlFor="businessDescription" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                    Business Description
                  </Label>
                  <Textarea
                    id="businessDescription"
                    name="businessDescription"
                    rows={4}
                    placeholder="Describe your business, your situation and what you are looking for (e.g. 'I run a small tailoring unit in Haryana and need a loan to buy machines')."
                    value={formData.businessDescription}
                    onChange={(e) => handleFieldChange("businessDescription", e.target.value)}
                    className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 text-sm min-h-[110px] resize-none ${errors.businessDescription ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                  />
                  {errors.businessDescription && (
                    <span className="text-[10px] font-semibold text-red-500">{errors.businessDescription}</span>
                  )}
                </div>
              </div>
            </Step>

            {/* About you — optional eligibility facts for the matching engine */}
            <Step>
              <div className="space-y-4 text-left">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-sans text-sm font-extrabold text-black uppercase tracking-wider mb-1">
                      About You
                    </h3>
                    <p className="text-zinc-500 font-sans text-xs leading-relaxed">
                      Optional — but every detail here converts "more information needed" into firm eligibility answers.
                    </p>
                  </div>
                  {countProfileValues(formData) > 0 && (
                    <span className="shrink-0 text-[9px] font-extrabold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-1 mt-1">
                      {countProfileValues(formData)} added
                    </span>
                  )}
                </div>

                <ProfileFieldsSection
                  values={formData}
                  errors={errors}
                  onFieldChange={handleFieldChange}
                  forceOpen
                />
              </div>
            </Step>
          </Stepper>
        )}
      </div>
    </div>
  );
}
