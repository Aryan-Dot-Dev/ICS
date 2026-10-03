import { ShieldAlert, Phone } from "lucide-react";
import { STATUS_LABELS, STATUS_STYLES } from "../../lib/schemeClient";
import type { OkfBenefit, SchemeRecommendation } from "../../lib/schemeTypes";

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
    return amount.min_value != null
      ? `${inr(amount.min_value)} – ${inr(amount.max_value)}`
      : `up to ${inr(amount.max_value)}`;
  }

  const raw = String(b.name ?? b.type ?? "Scheme benefit");
  return /[_/]/.test(raw) && !raw.includes(" ")
    ? raw.replace(/[_/]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : raw;
}

/** A compact matched-scheme card with the primary result visible at a glance. */
export function RecommendationCard({
  rec,
  matchPercent,
}: {
  rec: SchemeRecommendation;
  matchPercent: number;
}) {
  const keyBenefit =
    rec.benefits?.find((b) => (b as { amount?: unknown }).amount != null) ?? rec.benefits?.[0];
  const showStatus = rec.eligibilityStatus !== "needs_information";

  return (
    <div className="bg-white border border-zinc-200 p-6 rounded-2xl flex flex-col space-y-4 shadow-xs hover:border-black hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-left relative">
      <div className="absolute top-5 right-5 z-20 group/tooltip">
        <a
          href="tel:+91 8447198483"
          aria-label="Call for more details"
          className="w-7 h-7 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm border border-primary/20 relative"
        >
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75 pointer-events-none group-hover/tooltip:animate-none" />
          <Phone size={11} strokeWidth={2.5} />
        </a>
        <div className="absolute bottom-full right-0 mb-2 px-2.5 py-1.5 bg-zinc-900 text-white text-[10px] font-bold tracking-wide uppercase rounded-lg shadow-md whitespace-nowrap opacity-0 scale-95 pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 ease-out z-30 font-sans border border-zinc-800">
          Call to get more details
        </div>
      </div>

      <div className="space-y-3 flex-1">
        <div className="pr-9 space-y-2">
          <h4 className="font-sans text-base font-extrabold text-black tracking-tight leading-tight">
            {rec.schemeName}
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {showStatus && (
              <span
                className={`inline-block w-fit text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wider border ${STATUS_STYLES[rec.eligibilityStatus] ?? STATUS_STYLES.unknown}`}
              >
                {STATUS_LABELS[rec.eligibilityStatus] ?? rec.eligibilityStatus}
              </span>
            )}
            <span className="inline-flex items-center text-[8px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wider border border-primary/20 bg-primary/5 text-primary">
              {matchPercent}% match
            </span>
          </div>
        </div>

        <p className="font-sans text-xs text-zinc-500 leading-relaxed line-clamp-2">
          {rec.schemeDescription}
        </p>

        <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3">
          <span className="block text-[8px] font-extrabold uppercase tracking-widest text-zinc-500 font-sans">
            {keyBenefit ? "You can get" : "Funding range"}
          </span>
          <span className="block text-xs font-extrabold text-primary tracking-tight mt-1 font-sans">
            {keyBenefit ? benefitLabel(keyBenefit) : rec.fundingRange || "See official source"}
          </span>
        </div>

        {rec.eligibilityStatus === "unknown" && (
          <div className="flex items-start gap-1.5 text-[11px] text-zinc-500 font-sans">
            <ShieldAlert size={11} className="mt-0.5 shrink-0" />
            <span>No verified rules yet — confirm eligibility on the official source.</span>
          </div>
        )}

        {rec.okf?.staleAfter && new Date(rec.okf.staleAfter).getTime() < Date.now() && (
          <div className="flex items-center gap-1.5 text-[9px] text-amber-600 font-sans bg-amber-50/60 border border-amber-100 rounded-lg px-2 py-1">
            <ShieldAlert size={10} className="shrink-0" />
            <span>Scheduled for re-verification — confirm on the official source.</span>
          </div>
        )}
      </div>
    </div>
  );
}
