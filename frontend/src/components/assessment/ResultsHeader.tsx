import { Building, User, Mail, Phone, Info } from "lucide-react";
import type { AssessmentFormValues } from "./assessmentModel";
import type { SchemeUserProfile } from "../../lib/schemeTypes";

/** Human label + short value formatter for one profile fact. */
function formatFact(key: string, value: unknown): { label: string; value: string } | null {
  if (value == null || value === "") return null;
  switch (key) {
    case "age": return { label: "Age", value: `${value} yrs` };
    case "gender": return { label: "Gender", value: String(value) };
    case "state": return { label: "State", value: String(value) };
    case "district": return { label: "District", value: String(value) };
    case "ruralUrban": return { label: "Area", value: String(value) };
    case "socialCategory": return { label: "Category", value: String(value).toUpperCase() };
    case "annualIncome":
    case "projectCost": {
      const n = Number(value);
      if (!Number.isFinite(n)) return null;
      const v = n >= 10000000
        ? `₹${(n / 10000000).toFixed(n % 10000000 === 0 ? 0 : 2)} Cr`
        : n >= 100000
          ? `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)} L`
          : `₹${n.toLocaleString("en-IN")}`;
      return { label: key === "annualIncome" ? "Income" : "Project cost", value: v };
    }
    case "employmentStatus": return { label: "Employment", value: String(value).replace(/_/g, " ") };
    case "businessStage":
      return { label: "Stage", value: value === "greenfield" ? "New" : "Existing" };
    case "businessStatus": return { label: "Stage", value: String(value) };
    case "maritalStatus": return { label: "Marital", value: String(value) };
    case "educationLevel": return { label: "Education", value: String(value).replace(/_/g, " ") };
    case "incomeTaxPayer": return { label: "Tax payer", value: value === true ? "Yes" : "No" };
    case "farmerStatus": return { label: "Farmer", value: value === true ? "Yes" : "No" };
    case "studentStatus": return { label: "Student", value: value === true ? "Yes" : "No" };
    case "landOwnership": return { label: "Owns land", value: value === true ? "Yes" : "No" };
    default: return null;
  }
}

/** Ordered profile keys for the chip row. */
const PROFILE_KEYS = [
  "age", "gender", "state", "district", "ruralUrban", "socialCategory",
  "annualIncome", "employmentStatus", "businessStage", "businessStatus",
  "projectCost", "maritalStatus", "educationLevel", "incomeTaxPayer",
  "farmerStatus", "studentStatus", "landOwnership",
] as const;

/**
 * Collapsible profile summary shown above the matched schemes: entity,
 * representative and contact details, the structured facts the engine used,
 * plus the edit-parameters trigger.
 */
export function ResultsHeader({
  form,
  profile,
  onEdit,
}: {
  form: AssessmentFormValues;
  /** Structured profile (form-backed + follow-up answers + extraction). */
  profile?: Partial<SchemeUserProfile> | null;
  onEdit: () => void;
}) {
  const profileRecord = (profile ?? {}) as Record<string, unknown>;
  const facts = PROFILE_KEYS
    // businessStatus (free-text extraction) is redundant when the canonical
    // businessStage is present — drop the duplicate "Stage" chip.
    .filter((k) => !(k === "businessStatus" && profileRecord.businessStage != null))
    .map((k) => formatFact(k, profileRecord[k]))
    .filter((f): f is NonNullable<typeof f> => f !== null)
    .slice(0, 10);

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-xs text-left transition-all duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 animate-in fade-in duration-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {/* Entity Profile */}
          <div className="space-y-2">
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase select-none block">
              Enterprise Entity
            </span>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-150 flex items-center justify-center text-zinc-500 shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-sm text-black leading-tight">
                  {form.businessName || "Unnamed Business"}
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide mt-1">
                  {form.businessType || "Unspecified Sector"}
                </span>
              </div>
            </div>
          </div>

          {/* Key Representative */}
          <div className="space-y-2">
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase select-none block">
              Representative
            </span>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-150 flex items-center justify-center text-zinc-500 shrink-0">
                <User className="w-4 h-4" />
              </div>
              <span className="font-sans font-extrabold text-sm text-zinc-800 leading-tight">
                {form.name}
              </span>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-2">
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase select-none block">
              Contact Information
            </span>
            <div className="flex flex-col gap-1.5 text-left">
              <a href={`mailto:${form.email}`} className="flex items-center gap-2 text-xs text-zinc-600 hover:text-primary transition-colors w-fit">
                <div className="w-5 h-5 rounded-md bg-zinc-50 border border-zinc-150 flex items-center justify-center text-zinc-400 shrink-0">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="font-medium truncate max-w-[200px]">{form.email}</span>
              </a>
              <a href={`tel:${form.phone}`} className="flex items-center gap-2 text-xs text-zinc-600 hover:text-primary transition-colors w-fit">
                <div className="w-5 h-5 rounded-md bg-zinc-50 border border-zinc-150 flex items-center justify-center text-zinc-400 shrink-0">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="font-semibold">{form.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-2 lg:pt-0 lg:border-l lg:border-zinc-100 lg:pl-6 flex items-center">
          <button
            type="button"
            onClick={onEdit}
            className="w-full lg:w-auto border border-zinc-200 hover:border-black text-black px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
          >
            Modify Parameters
          </button>
        </div>
      </div>

      {/* Structured profile facts the engine evaluated */}
      {facts.length > 0 && (
        <div className="mt-4 pt-4 border-t border-zinc-100 flex items-start gap-2 flex-wrap">
          <span className="flex items-center gap-1 text-[9px] font-mono tracking-widest text-zinc-400 uppercase select-none pt-1 shrink-0">
            <Info size={11} />
            Assessed profile
          </span>
          {facts.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-1 bg-zinc-50 border border-zinc-150 rounded-full px-2.5 py-1 text-[10px] leading-none"
            >
              <span className="text-zinc-400 font-bold uppercase tracking-wider">{f.label}</span>
              <span className="text-zinc-800 font-extrabold">{f.value}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
