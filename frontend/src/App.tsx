import React, { useState, useEffect, useCallback, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./lib/i18n";
import { useAssessmentPopupScheduler } from "./lib/useAssessmentPopupScheduler";
import { LandingPageFallback } from "./components/landing/LandingPageFallback";
import { createLogger } from "./lib/logger";

const log = createLogger("App");

const ServicesPage = React.lazy(() => import("./components/ServicesPage").then(module => ({ default: module.ServicesPage })));
// const BlogPage = React.lazy(() => import("./components/BlogPage").then(module => ({ default: module.BlogPage })));
const AssessmentModal = React.lazy(() => import("./components/AssessmentModal").then(module => ({ default: module.AssessmentModal })));
const ChatbotWidget = React.lazy(() => import("./components/ChatbotWidget").then(module => ({ default: module.ChatbotWidget })));
import { usePathLocation, navigateTo } from "./lib/router";
const AssessmentPage = React.lazy(() => import("./components/AssessmentPage").then(module => ({ default: module.AssessmentPage })));
import "./index.css";

const LandingPage = React.lazy(() => import("./components/LandingPage").then(module => ({ default: module.LandingPage })));

/** Minimal shape of the assessment submit payload consumed by the shell. */
interface AssessmentSubmitPayload {
  data?: unknown;
  [key: string]: unknown;
}

export function App() {
  const route = usePathLocation();
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [assessmentSource, setAssessmentSource] = useState<"manual_click" | "random_popup">("manual_click");
  const [hasSubmitted, setHasSubmitted] = useState(() => {
    return typeof window !== "undefined" && sessionStorage.getItem("infou_assessment_submitted") === "true";
  });

  const openAssessment = useCallback((source: "manual_click" | "random_popup") => {
    setAssessmentSource(source);
    setIsAssessmentOpen(true);
  }, []);

  // Custom Event Listener to open assessment modal
  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      openAssessment(customEvent.detail?.source || "manual_click");
    };

    window.addEventListener("open-assessment", handleOpenModal);
    return () => window.removeEventListener("open-assessment", handleOpenModal);
  }, [openAssessment]);

  // Auto-popup policy (extracted to its own hook)
  useAssessmentPopupScheduler({
    hasSubmitted,
    isAssessmentOpen,
    route,
    onOpen: openAssessment,
  });

  // Redirect from hidden blog page to landing page
  useEffect(() => {
    if (route === "blog") {
      navigateTo("landing");
    }
  }, [route]);

  const handleAssessmentSubmit = (_payload: AssessmentSubmitPayload) => {
    setHasSubmitted(true);
    sessionStorage.setItem("infou_assessment_submitted", "true");
    log.debug("assessment submitted — auto-popup scheduler silenced");
  };

  const renderPage = () => {
    switch (route) {
      case "services":
        return (
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="animate-pulse text-zinc-400 font-sans text-sm tracking-widest uppercase">Loading Services...</div></div>}>
            <ServicesPage />
          </Suspense>
        );
      // case "blog":
      //     return <BlogPage />;
      case "assessment":
        return (
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="animate-pulse text-zinc-400 font-sans text-sm tracking-widest uppercase">Loading Assessment...</div></div>}>
            <AssessmentPage />
          </Suspense>
        );
      case "landing":
      default:
        return (
          <Suspense fallback={<LandingPageFallback />}>
            <LandingPage />
          </Suspense>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-zinc-50 font-sans selection:bg-black selection:text-white antialiased relative">
        {/* Dynamic Shell Navigation */}
        <Navbar currentRoute={route} />

        {/* Main Content Area */}
        <main className="flex-grow w-full">
          {renderPage()}
        </main>

        {/* Structured Footer */}
        <Footer />

        {/* Global Interactive Elements */}
        <Suspense fallback={null}>
          <AssessmentModal
            isOpen={isAssessmentOpen}
            onClose={() => setIsAssessmentOpen(false)}
            source={assessmentSource}
            onSubmitSuccess={handleAssessmentSubmit}
          />
        </Suspense>

        <Suspense fallback={null}>
          <ChatbotWidget />
        </Suspense>

      </div>
    </LanguageProvider>
  );
}

export default App;
