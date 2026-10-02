import { X, Phone } from "lucide-react";
import ClickSpark from "../ui/ClickSpark";

/**
 * Shared "Submission Error" view for the assessment modal. Shows the API
 * error, a direct-call CTA and back-to-form action.
 */
export function SubmissionErrorView({
  apiError,
  onRetry,
}: {
  apiError: string;
  onRetry: () => void;
}) {
  return (
    <div className="p-6 md:p-8 pt-10 pb-8 bg-white border border-zinc-200 rounded-2xl shadow-xl text-center space-y-6 max-h-[90vh] overflow-y-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-red-50 text-red-500 border border-red-100 flex items-center justify-center rounded-full mb-3 shadow-xs">
          <X size={24} strokeWidth={2.5} />
        </div>
        <h3 className="font-sans text-lg font-extrabold text-black uppercase tracking-wider">
          Submission Error
        </h3>
        <p className="text-zinc-500 font-sans text-xs max-w-sm mt-2 leading-relaxed">
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

      <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
        <ClickSpark sparkColor="#000" sparkRadius={18} sparkCount={6} duration={300}>
          <button
            type="button"
            onClick={onRetry}
            className="border border-zinc-200 text-black px-8 py-3 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-50 transition-colors active:scale-95 duration-100 cursor-pointer w-full sm:w-auto"
          >
            Back to Form
          </button>
        </ClickSpark>
      </div>
    </div>
  );
}
