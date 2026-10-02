import { useState } from "react";
import {
  CheckCircle,
  X,
  ShieldAlert,
  Award,
  FileText,
  ChevronDown,
  Phone,
  ExternalLink,
  HelpCircle,
  Landmark,
} from "lucide-react";
import { STATUS_LABELS, STATUS_STYLES } from "../../lib/schemeClient";
import type { OkfBenefit } from "../../lib/schemeTypes";
import type { SchemeRecommendation } from "../../lib/schemeTypes";

/** Short human string for a benefit: amount when known, name/type otherwise. */
function benefitLabel(b: OkfBenefit): string {
  const amount = (b as { amount?: { min_value?: number; max_value?: number; value?: number } }).amount;
  const inr = (n: number) =>
    n >= 10000000
      ? `₹${(n / 10000000).toFixed(n % 10000000 === 0 ? 0 : 2)} Cr`
      : n >= 100000
        ? `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)} L`
        : `₹${n.toLocaleString("en-IN")}`;
  if (amount?.value != null) return inr(amount.value);
  if (amount?.max_value != null) {
    return amount.min_value != null ? `${inr(amount.min_value)} – ${inr(amount.max_value)}` : `up to ${inr(amount.max_value)}`;
  }
  // Slugs like "security_deposit_waived" read as machine output — humanize.
  const raw = String(b.name ?? b.type ?? "Scheme benefit");
  return /[_/]/.test(raw) && !raw.includes(" ")
    ? raw.replace(/[_/]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : raw;
}

/**
 * One matched-scheme result card, tuned for end users: the essentials
 * (status, what it gives, how much, what to do next) are always visible;
 * everything else — documents, eligibility evidence, apply channels — sits
 * behind a single "Details" expander.
 */
export function RecommendationCard({ rec }: { rec: SchemeRecommendation }) {
  const [showDetails, setShowDetails] = useState(false);
  const channel = (rec.application?.channels ?? rec.application?.mode ?? [])[0];
  const portal = rec.application?.facilitation_portal ?? rec.application?.info_portal;

  // The single most important benefit: first with an amount, else the first.
  const keyBenefit =
    rec.benefits?.find((b) => (b as { amount?: unknown }).amount != null) ?? rec.benefits?.[0];

  const missingInfo = rec.eligibility?.missingInformation ?? [];
  const topMissing = missingInfo.slice(0, 2);

  return (
    <div className="bg-white border border-zinc-200 p-6 rounded-2xl flex flex-col space-y-4 shadow-xs hover:border-black hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-left relative">
      {/* Premium Call Badge with Tooltip */}
      <div className="absolute top-5 right-5 z-20 group/tooltip">
        <a
          href="tel:+91 8447198483"
          className="w-7 h-7 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm border border-primary/20 relative"
        >
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75 pointer-events-none group-hover/tooltip:animate-none" />
          <Phone size={11} strokeWidth={2.5} />
        </a>
        <div className="absolute bottom-full right-0 mb-2 px-2.5 py-1.5 bg-zinc-900 text-white text-[10px] font-bold tracking-wide uppercase rounded-lg shadow-md whitespace-nowrap opacity-0 scale-95 pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 ease-out z-30 font-sans border border-zinc-800 flex items-center gap-1.5">
          <Phone size={10} className="text-primary" />
          <span>Call to get more details</span>
          <div className="absolute top-full right-2.5 w-2 h-2 bg-zinc-900 rotate-45 border-r border-b border-zinc-800" />
        </div>
      </div>

      <div className="space-y-2.5 flex-1">
        {/* Name + status */}
        <div className="pr-9 space-y-1.5">
          <h4 className="font-sans text-base font-extrabold text-black tracking-tight leading-tight">
            {rec.schemeName}
          </h4>
          <span
            className={`inline-block w-fit text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wider border ${STATUS_STYLES[rec.eligibilityStatus] ?? STATUS_STYLES.unknown}`}
          >
            {STATUS_LABELS[rec.eligibilityStatus] ?? rec.eligibilityStatus}
          </span>
        </div>

        {/* One-line description */}
        <p className="font-sans text-xs text-zinc-500 leading-relaxed line-clamp-2">
          {rec.schemeDescription}
        </p>

        {/* The essentials: money + what to do next */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3">
            <span className="block text-[8px] font-extrabold uppercase tracking-widest text-zinc-500 font-sans">
              {keyBenefit ? "You can get" : "Funding range"}
            </span>
            <span className="block text-xs font-extrabold text-primary tracking-tight mt-1 font-sans">
              {keyBenefit ? benefitLabel(keyBenefit) : rec.fundingRange || "See official source"}
            </span>
            {keyBenefit && (
              <span className="block text-[10px] text-zinc-400 font-sans mt-0.5 truncate">
                {keyBenefit.name ?? keyBenefit.type ?? ""}
              </span>
            )}
          </div>
          <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3">
            <span className="block text-[8px] font-extrabold uppercase tracking-widest text-zinc-500 font-sans">
              Next step
            </span>
            <span className="block text-xs font-bold text-zinc-800 tracking-tight mt-1 font-sans leading-snug">
              {rec.eligibilityStatus === "ineligible"
                ? "Review why above"
                : missingInfo.length > 0
                  ? "Share the pending details"
                  : (rec.recommendedNextStep || "Apply via official source")}
            </span>
          </div>
        </div>

        {/* Pending questions for THIS scheme — only when it blocks the verdict */}
        {rec.eligibilityStatus === "needs_information" && topMissing.length > 0 && (
          <div className="space-y-1">
            {topMissing.map((m) => (
              <div key={m.field} className="flex items-start gap-1.5 text-[11px] text-zinc-500 font-sans">
                <HelpCircle size={11} className="text-amber-500 mt-0.5 shrink-0" />
                <span>{m.question ?? `Information still needed: ${m.field.split(".").pop()?.replace(/_/g, " ")}`}</span>
              </div>
            ))}
          </div>
        )}

        {/* Unverified-rules notice */}
        {rec.eligibilityStatus === "unknown" && (
          <div className="flex items-start gap-1.5 text-[11px] text-zinc-500 font-sans">
            <ShieldAlert size={11} className="mt-0.5 shrink-0" />
            <span>No verified rules yet — confirm eligibility on the official source.</span>
          </div>
        )}

        {/* Stale-knowledge disclosure */}
        {rec.okf?.staleAfter && new Date(rec.okf.staleAfter).getTime() < Date.now() && (
          <div className="flex items-center gap-1.5 text-[9px] text-amber-600 font-sans bg-amber-50/60 border border-amber-100 rounded-lg px-2 py-1">
            <ShieldAlert size={10} className="shrink-0" />
            <span>Scheduled for re-verification ({rec.okf.staleAfter}) — confirm on the official source.</span>
          </div>
        )}
      </div>

      {/* Details expander — documents, eligibility evidence, apply info */}
      <div className="border-t border-zinc-100 pt-2">
        <button
          type="button"
          onClick={() => setShowDetails((s) => !s)}
          className="w-full flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors cursor-pointer py-1"
          aria-expanded={showDetails}
        >
          <span>
            Details
            {rec.documents?.length > 0 && (
              <span className="ml-1.5 text-zinc-400 normal-case font-semibold tracking-normal">
                · {rec.documents.length} document{rec.documents.length === 1 ? "" : "s"} needed
              </span>
            )}
          </span>
          <ChevronDown size={14} className={`transition-transform duration-200 ${showDetails ? "rotate-180" : ""}`} />
        </button>

        {showDetails && (
          <div className="space-y-3 pt-2 animate-in fade-in-0 slide-in-from-top-1 duration-200">
            {/* Why this matches */}
            {rec.relevance?.reasons?.length > 0 && (
              <div>
                <span className="block text-[8px] font-extrabold uppercase tracking-widest text-zinc-400 font-sans mb-1">
                  Why this matches
                </span>
                <ul className="space-y-0.5">
                  {rec.relevance.reasons.map((reason, ri) => (
                    <li key={ri} className="flex items-start gap-1.5 text-[11px] text-zinc-600 font-sans leading-relaxed">
                      <Award size={10} className="text-primary mt-0.5 shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* All benefits */}
            {rec.benefits?.length > 1 && (
              <div>
                <span className="block text-[8px] font-extrabold uppercase tracking-widest text-zinc-400 font-sans mb-1">
                  All benefits
                </span>
                <ul className="space-y-0.5">
                  {rec.benefits.slice(0, 4).map((b, bi) => (
                    <li key={b.benefit_id ?? bi} className="text-[11px] text-zinc-600 font-sans flex items-start gap-1.5">
                      <Award size={10} className="text-primary mt-0.5 shrink-0" />
                      <span>{benefitLabel(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Documents */}
            {rec.documents?.length > 0 && (
              <div>
                <span className="block text-[8px] font-extrabold uppercase tracking-widest text-zinc-400 font-sans mb-1">
                  Documents
                </span>
                <ul className="space-y-0.5">
                  {rec.documents.slice(0, 5).map((d, di) => (
                    <li key={d.id ?? di} className="text-[11px] text-zinc-600 font-sans flex items-start gap-1.5">
                      <FileText size={10} className="text-zinc-400 mt-0.5 shrink-0" />
                      <span>{d.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Eligibility evidence */}
            <div>
              <span className="block text-[8px] font-extrabold uppercase tracking-widest text-zinc-400 font-sans mb-1">
                Eligibility evidence
              </span>
              {rec.eligibility?.matchedRules?.slice(0, 4).map((rule) => (
                <div key={rule.ruleId} className="flex items-start gap-1.5 text-[11px] text-zinc-600 font-sans">
                  <CheckCircle size={11} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    {rule.field.split(".").pop()?.replace(/_/g, " ")}
                    <span className="text-zinc-400"> — condition satisfied</span>
                  </span>
                </div>
              ))}
              {(rec.eligibility?.missingInformation ?? []).slice(2, 5).map((m) => (
                <div key={m.field} className="flex items-start gap-1.5 text-[11px] text-zinc-500 font-sans">
                  <HelpCircle size={11} className="text-amber-500 mt-0.5 shrink-0" />
                  <span>{m.question ?? `Information still needed: ${m.field.split(".").pop()?.replace(/_/g, " ")}`}</span>
                </div>
              ))}
              {rec.eligibility?.failedRules?.slice(0, 3).map((rule) => (
                <div key={rule.ruleId} className="flex items-start gap-1.5 text-[11px] text-red-500 font-sans">
                  <X size={11} className="mt-0.5 shrink-0" />
                  <span>
                    {rule.field.split(".").pop()?.replace(/_/g, " ")}
                    <span className="text-zinc-400"> — not satisfied for this scheme</span>
                  </span>
                </div>
              ))}
              {!rec.eligibility?.matchedRules?.length &&
                !rec.eligibility?.failedRules?.length &&
                !(rec.eligibility?.missingInformation?.length > 2) && (
                  <span className="text-[11px] text-zinc-400 font-sans">No rule-level evidence recorded.</span>
                )}
            </div>

            {/* How to apply */}
            {(channel || portal) && (
              <div>
                <span className="block text-[8px] font-extrabold uppercase tracking-widest text-zinc-400 font-sans mb-1">
                  How to apply
                </span>
                <p className="text-[11px] text-zinc-600 font-sans flex items-start gap-1.5">
                  <ExternalLink size={10} className="text-zinc-400 mt-0.5 shrink-0" />
                  {channel ? String(channel).replace(/_/g, " ") : "Via the official portal"}
                </p>
              </div>
            )}

            {/* Official source */}
            {rec.sources?.[0]?.resource && (
              <a
                href={rec.sources[0].resource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-widest uppercase text-primary hover:text-primary/80 transition-colors font-sans"
              >
                <Landmark size={11} />
                Official source
                <ExternalLink size={9} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
