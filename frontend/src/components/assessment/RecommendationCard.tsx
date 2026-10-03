import { Landmark, Phone, ShieldAlert } from "lucide-react";
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

/** A scheme result card focused on identity, benefit and eligibility state. */
export function RecommendationCard({ rec }: { rec: SchemeRecommendation }) {
  const keyBenefit =
    rec.benefits?.find((b) => (b as { amount?: unknown }).amount != null) ?? rec.benefits?.[0];
  const showStatus = rec.eligibilityStatus !== "needs_information";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-zinc-200 bg-white p-6 text-left shadow-[0_8px_28px_rgba(24,24,27,0.04)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_36px_rgba(24,24,27,0.09)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />

      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
          <Landmark size={20} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1 pr-10">
          <span className="mb-1 block font-sans text-[9px] font-extrabold uppercase tracking-[0.16em] text-zinc-400">
            Government scheme
          </span>
          <h4 className="font-sans text-[17px] font-extrabold leading-[1.15] tracking-tight text-zinc-950">
            {rec.schemeName}
          </h4>
        </div>

        <a
          href="tel:+91 8447198483"
          aria-label="Call for more details"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-[background-color,color,transform] duration-150 hover:scale-[0.96] hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Phone size={15} strokeWidth={2} />
        </a>
      </div>

      <p className="mt-5 line-clamp-3 font-sans text-[13px] leading-6 text-zinc-500">
        {rec.schemeDescription}
      </p>

      <div className="mt-5 rounded-2xl border border-primary/15 bg-[#fff8f4] p-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <span className="block font-sans text-[9px] font-extrabold uppercase tracking-[0.16em] text-zinc-500">
              You can get
            </span>
            <span className="mt-1 block font-sans text-2xl font-extrabold tracking-tight text-primary">
              {keyBenefit ? benefitLabel(keyBenefit) : rec.fundingRange || "See official source"}
            </span>
          </div>
          <Landmark size={22} className="mb-1 text-primary/35" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">
          Eligibility status
        </span>
        {showStatus && (
          <span
            className={`inline-flex w-fit rounded-full border px-2.5 py-1 font-sans text-[9px] font-extrabold uppercase tracking-wider ${STATUS_STYLES[rec.eligibilityStatus] ?? STATUS_STYLES.unknown}`}
          >
            {STATUS_LABELS[rec.eligibilityStatus] ?? rec.eligibilityStatus}
          </span>
        )}
        {!showStatus && (
          <span className="font-sans text-[10px] font-semibold text-zinc-500">
            More details may be needed
          </span>
        )}
      </div>

      {rec.eligibilityStatus === "unknown" && (
        <div className="mt-3 flex items-start gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 font-sans text-[11px] leading-4 text-zinc-500">
          <ShieldAlert size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>No verified rules yet — confirm eligibility on the official source.</span>
        </div>
      )}

      {rec.okf?.staleAfter && new Date(rec.okf.staleAfter).getTime() < Date.now() && (
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-amber-100 bg-amber-50/60 px-3 py-2 font-sans text-[10px] leading-4 text-amber-700">
          <ShieldAlert size={12} className="shrink-0" aria-hidden="true" />
          <span>Scheduled for re-verification — confirm on the official source.</span>
        </div>
      )}
    </article>
  );
}
