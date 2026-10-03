import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { SubmitProgressDisplay } from "./SubmitProgress";
import { ProfileFieldsSection } from "./AssessmentForm";
import { BUSINESS_TYPES } from "./assessmentModel";
import type { AssessmentFormValues } from "./assessmentModel";

/**
 * "Modify Parameters" overlay: re-runs the assessment with an updated
 * business vertical, description and eligibility profile. Progress display
 * is shared.
 */
export function EditParametersModal({
  values,
  errors,
  isSubmitting,
  submitProgress,
  onClose,
  onFieldChange,
  onSubmit,
}: {
  values: AssessmentFormValues;
  errors: Record<string, string>;
  isSubmitting: boolean;
  submitProgress: number;
  onClose: () => void;
  onFieldChange: (name: keyof AssessmentFormValues, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-hidden p-4 pt-10 md:pt-14 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in-0 duration-200">
      {/* Close modal on click backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-2xl shadow-xl text-left z-10 animate-in zoom-in-95 duration-200 overflow-visible">
        {/* Premium Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-2 sm:-top-4 sm:-right-4 z-50 w-9 h-9 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:scale-110 hover:rotate-90 active:scale-95 cursor-pointer"
          title="Close"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        <div data-modal-scroll className="max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8" style={{ overflowAnchor: "none" }}>
          {isSubmitting ? (
            <SubmitProgressDisplay progress={submitProgress} />
          ) : (
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
            <div>
              <h3 className="font-sans text-lg font-extrabold text-black tracking-tight">
                Modify Parameters
              </h3>
              <p className="text-zinc-500 font-sans text-xs leading-relaxed mt-1">
                Adjust your business profile and eligibility details, then re-run the matching engine.
              </p>
            </div>

            <div className="space-y-4">
              {/* Business Type Selector */}
              <div className="space-y-1">
                <Label htmlFor="edit-businessType" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Business Vertical
                </Label>
                <Select
                  value={values.businessType}
                  onValueChange={(val) => onFieldChange("businessType", val)}
                >
                  <SelectTrigger
                    id="edit-businessType"
                    className={`w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-black outline-none h-10 cursor-pointer ${errors.businessType ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Select business sector" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-zinc-250 text-black">
                    {BUSINESS_TYPES.map((bt) => (
                      <SelectItem key={bt.value} value={bt.value}>
                        {bt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.businessType && <span className="text-[9px] font-semibold text-red-500 block">{errors.businessType}</span>}
              </div>

              {/* Description */}
              <div className="space-y-1">
                <Label htmlFor="businessDescription" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Business & Funding Goals Description
                </Label>
                <Textarea
                  id="businessDescription"
                  name="businessDescription"
                  rows={4}
                  value={values.businessDescription}
                  onChange={(e) => onFieldChange("businessDescription", e.target.value)}
                  className={`text-xs rounded-lg border-zinc-200 focus-visible:ring-black/20 min-h-[100px] resize-none ${errors.businessDescription ? "border-red-500" : ""}`}
                />
                {errors.businessDescription && (
                  <span className="text-[9px] font-semibold text-red-500 block">{errors.businessDescription}</span>
                )}
              </div>

              {/* Eligibility profile stays optional and collapsed until selected. */}
              <ProfileFieldsSection values={values} errors={errors} onFieldChange={onFieldChange} />
            </div>

            {/* Actions Row */}
            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="border border-zinc-200 hover:border-black text-black px-6 py-2.5 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-8 py-2.5 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                SUBMIT
              </button>
            </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
