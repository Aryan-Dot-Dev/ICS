import { useState } from "react";
import { Input } from "../ui/input";

/**
 * One follow-up question rendered as an inline card. Answers are appended to
 * the user's requirement text so the same extraction + recommendation flow
 * re-runs with richer input (progressive profile completion).
 */
export function FollowUpCard({
  question,
  disabled,
  onAnswer,
}: {
  question: { field: string; question: string; reason: string; options?: string[] };
  disabled: boolean;
  onAnswer: (answer: string) => void;
}) {
  const [value, setValue] = useState("");
  const submit = (answer: string) => {
    if (!answer.trim() || disabled) return;
    onAnswer(answer);
    setValue("");
  };

  return (
    <div className="bg-zinc-50/60 border border-zinc-200 rounded-xl p-4 space-y-2.5">
      <div>
        <p className="font-sans text-xs font-bold text-zinc-800 leading-snug">{question.question}</p>
        <p className="text-[10px] text-zinc-400 font-sans mt-0.5">{question.reason}</p>
      </div>
      {question.options ? (
        <div className="flex flex-wrap gap-1.5">
          {question.options.map((opt) => (
            <button
              key={opt}
              type="button"
              disabled={disabled}
              onClick={() => submit(opt)}
              className="text-[10px] font-bold uppercase tracking-wide border border-zinc-200 bg-white text-zinc-600 hover:border-black hover:text-black rounded-full px-3 py-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              {opt.replace(/_/g, " ")}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex gap-2">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submit(value);
              }
            }}
            placeholder="Type your answer..."
            disabled={disabled}
            className="h-8 text-xs rounded-lg border-zinc-200 focus-visible:ring-black/10 bg-white"
          />
          <button
            type="button"
            onClick={() => submit(value)}
            disabled={disabled || !value.trim()}
            className="shrink-0 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-lg px-3 hover:bg-zinc-800 transition-colors cursor-pointer disabled:opacity-40"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
