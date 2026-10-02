import { useEffect, useState } from "react";

/**
 * Simulated submit progress for the premium loading experience.
 *
 * Ramps to 95% while `active` is true, driven by the consumer to jump to 100
 * on completion (setProgress(100) via the returned setter). Extracted so the
 * page and the edit-modal share one implementation.
 */
export function useSubmitProgress(active: boolean): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (active) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            if (interval) clearInterval(interval);
            return 95;
          }
          const increment = prev < 30 ? 3 : prev < 70 ? 2 : prev < 90 ? 1 : 0.5;
          return Math.min(prev + increment, 95);
        });
      }, 50);
    } else {
      setProgress(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [active]);

  return [progress, setProgress];
}

const STAGES = [
  { until: 30, title: "Initializing Profile Analysis", body: "Setting up diagnostics environment..." },
  { until: 60, title: "Scanning Ministry Databases", body: "Checking verified OKF knowledge base rules..." },
  { until: 85, title: "Checking Policy Criteria", body: "Validating operational rules and corporate compliance..." },
  { until: 100, title: "Compiling Match Report", body: "Filtering recommendations for the best enterprise fits..." },
];

function stageFor(progress: number): { title: string; body: string } {
  const done = { title: "Matched Successfully!", body: "Preparing recommendations report..." };
  const stage = STAGES.find((s) => progress < s.until);
  return stage ? { title: stage.title, body: stage.body } : done;
}

/**
 * The circular progress + stage-message display shown while the engine runs.
 * Shared by the assessment page and the edit-parameters modal.
 */
export function SubmitProgressDisplay({ progress }: { progress: number }) {
  const { title, body } = stageFor(progress);
  return (
    <div className="py-12 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in duration-300">
      <div className="relative flex items-center justify-center">
        <svg className="w-20 h-20 transform -rotate-90">
          <circle cx="40" cy="40" r="34" stroke="#f4f4f5" strokeWidth="6" fill="transparent" />
          <circle
            cx="40"
            cy="40"
            r="34"
            stroke="#ea580c"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 34}
            strokeDashoffset={2 * Math.PI * 34 * (1 - Math.round(progress) / 100)}
            strokeLinecap="round"
            className="transition-all duration-75 ease-out"
          />
        </svg>
        <span className="absolute text-base font-extrabold text-black tracking-tighter">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="space-y-2 max-w-xs">
        <h3 className="font-sans text-base font-extrabold text-[#1c1d1a] uppercase tracking-wider">{title}</h3>
        <p className="text-zinc-500 font-sans text-xs leading-relaxed">{body}</p>
      </div>

      <div className="w-full max-w-xs bg-zinc-100 h-1.5 rounded-full overflow-hidden border border-zinc-200/50">
        <div
          className="bg-primary h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_8px_rgba(255,90,54,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
