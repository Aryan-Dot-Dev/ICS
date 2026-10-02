import { useEffect, useState } from "react";

/**
 * Auto-popup scheduler — extracted from App.tsx so the routing shell stops
 * owning assessment-modal popup policy.
 *
 * Behavior (unchanged): while the user hasn't completed the assessment, the
 * modal isn't already open, the user isn't on the assessment route, and fewer
 * than MAX_POPUPS popups have fired, open the modal every POPUP_DELAY_MS.
 * Popup count persists in sessionStorage.
 */

const POPUP_DELAY_MS = 15_000;
const MAX_POPUPS = 3;
const POPUP_COUNT_KEY = "infou_popup_count";

export type AssessmentSource = "manual_click" | "random_popup";

interface UseAssessmentPopupSchedulerOptions {
  /** Whether the user has completed the assessment (blocks scheduling). */
  hasSubmitted: boolean;
  /** Whether the assessment modal is currently open (blocks scheduling). */
  isAssessmentOpen: boolean;
  /** Current route (blocks scheduling on the assessment route). */
  route: string;
  /** Open the assessment modal with the given source attribution. */
  onOpen: (source: AssessmentSource) => void;
}

export function useAssessmentPopupScheduler({
  hasSubmitted,
  isAssessmentOpen,
  route,
  onOpen,
}: UseAssessmentPopupSchedulerOptions): void {
  const [popupCount, setPopupCount] = useState(() => {
    return typeof window !== "undefined"
      ? parseInt(sessionStorage.getItem(POPUP_COUNT_KEY) || "0", 10)
      : 0;
  });

  useEffect(() => {
    if (hasSubmitted || isAssessmentOpen || route === "assessment" || popupCount >= MAX_POPUPS) {
      return;
    }

    const timer = setTimeout(() => {
      const nextCount = popupCount + 1;
      setPopupCount(nextCount);
      sessionStorage.setItem(POPUP_COUNT_KEY, String(nextCount));
      onOpen("random_popup");
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, [hasSubmitted, isAssessmentOpen, route, popupCount, onOpen]);
}
