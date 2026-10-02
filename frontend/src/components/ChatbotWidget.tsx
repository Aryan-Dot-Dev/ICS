import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Send,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Trash2,
  Loader2,
} from "lucide-react";
import { Input } from "./ui/input";
import logoMark from "../assets/logo/logo-mark.png";
import { navigateToContactSection } from "../lib/router";
import { apiUrl } from "../lib/api";
import { STATUS_LABELS, STATUS_STYLES } from "../lib/schemeClient";
import { submitLead } from "../lib/leadCapture";
import { trackMetaPixelEvent } from "../lib/metaPixel";
import type { SchemeRecommendation, FollowUpQuestion, SchemeUserProfile } from "../lib/schemeTypes";
import { createLogger, IS_DEV_BUILD } from "../lib/logger";

const log = createLogger("ChatbotWidget");

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  isActionable?: boolean;
  type?: "assessment" | "contact";
  /** Structured recommendations attached to a bot message. */
  recommendations?: SchemeRecommendation[];
  /** Follow-up questions the engine asked with this reply. */
  followUps?: FollowUpQuestion[];
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  sender: "bot",
  text: "Welcome to ICS. I am your AI assistant. Please type your query.",
  timestamp: new Date()
};

const SESSION_KEY = "infou_chat_history";

const loadMessages = (): Message[] => {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Message[];
      return parsed.map((m) => ({ ...m, timestamp: new Date(m.timestamp) }));
    }
  } catch {
    // ignore parse errors
  }
  return [WELCOME_MESSAGE];
};

interface ChatApiResponse {
  answer?: string;
  actionable?: boolean;
  recommendations?: SchemeRecommendation[];
  followUpQuestions?: FollowUpQuestion[];
  collected?: SchemeUserProfile;
}

/** Recent turns sent with each request so backend LLM personalization sees the conversation. */
const buildHistoryPayload = (msgs: Message[]): Array<{ role: "user" | "bot"; content: string }> =>
  msgs
    .filter((m) => m.sender === "user" || (m.sender === "bot" && m.text !== WELCOME_MESSAGE.text))
    .slice(-8)
    .map((m) => ({ role: m.sender as "user" | "bot", content: m.text.slice(0, 400) }));

// ---------------------------------------------------------------------------
// Soft-ask lead card — shown after the user is engaged (3+ messages or a
// response containing scheme recommendations). Non-blocking: the user can
// dismiss it and keep chatting.
// ---------------------------------------------------------------------------

const LEAD_CARD_KEY = "infou_chat_lead_submitted";

interface ChatLeadForm {
  name: string;
  phone: string;
}

// ---------------------------------------------------------------------------
// Motion tokens — project uses framer-motion; constants per better-ui skill
// ---------------------------------------------------------------------------

const EASE_OUT = [0.2, 0, 0, 1] as const;

/** Enter: opacity + 12px rise + blur clear (400ms). */
const enterVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
} as const;

/** Exit: softer than enter — small fixed rise, 150ms ease-out. */
const exitVariants = {
  opacity: 0,
  y: -12,
  filter: "blur(4px)",
  transition: { duration: 0.15, ease: "easeOut" as const },
};

/** Contextual icon cross-fade values (exact, per skill). */
const iconTransition = { type: "spring" as const, duration: 0.3, bounce: 0 };

/**
 * Typing indicator — soft pulsing dots (no bounce; a high-frequency loop
 * should not charge attention cost every trigger). Keyframes live in the
 * project theme (`animate-chat-typing`).
 */
function TypingIndicator() {
  return (
    <motion.div
      variants={enterVariants}
      initial="hidden"
      animate="visible"
      exit={exitVariants}
      className="flex flex-col items-start"
      aria-live="polite"
    >
      <div className="max-w-[85%] rounded-2xl rounded-tl-md px-3.5 py-3 bg-white shadow-[0_0_0_1px_oklch(0_0_0/0.06),0_1px_2px_-1px_oklch(0_0_0/0.06),0_2px_4px_oklch(0_0_0/0.04)]">
        <div className="flex items-center gap-1.5" role="status" aria-label="Advisor is typing">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-chat-typing" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-chat-typing [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-chat-typing [animation-delay:300ms]" />
        </div>
      </div>
      <p className="text-[10px] text-zinc-400 mt-1 ml-1 select-none">Advisor is typing…</p>
    </motion.div>
  );
}

/** Bot avatar — the ICS infinity mark beside advisor bubbles. */
function BotAvatar() {
  return (
    <span className="h-5 w-5 shrink-0 rounded-md bg-primary/10 flex items-center justify-center">
      <img src={logoMark} alt="" aria-hidden="true" className="h-3.5 w-3.5" />
    </span>
  );
}

/** User avatar — neutral mark beside user bubbles. */
function UserAvatar() {
  return (
    <span className="h-5 w-5 shrink-0 rounded-md bg-zinc-100 text-zinc-500 flex items-center justify-center">
      <span className="h-2 w-2 rounded-full bg-current opacity-60" aria-hidden="true" />
    </span>
  );
}

/** Status badge for scheme cards — 1px outline keeps it a crisp structure cue. */
function StatusBadge({ status }: { status: SchemeRecommendation["eligibilityStatus"] }) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.unknown;
  const label = STATUS_LABELS[status] ?? status;
  return (
    <span
      className={`shrink-0 inline-flex items-center rounded-md border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider leading-none ${style}`}
    >
      {label}
    </span>
  );
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(loadMessages);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [collectedProfile, setCollectedProfile] = useState<Partial<SchemeUserProfile>>({});
  const chatEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Soft-ask lead card state ---
  const [showLeadCard, setShowLeadCard] = useState(false);
  const [leadDismissed, setLeadDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(LEAD_CARD_KEY) === "dismissed";
    } catch {
      return false;
    }
  });
  const [leadForm, setLeadForm] = useState<ChatLeadForm>({ name: "", phone: "" });
  const [leadState, setLeadState] = useState<"idle" | "sending" | "done">("idle");
  const [leadConfirmVisible, setLeadConfirmVisible] = useState(false);
  const lastMessage = messages[messages.length - 1];
  const userMessageCount = messages.filter((m) => m.sender === "user").length;
  const lastBotHadRecommendations =
    lastMessage?.sender === "bot" && (lastMessage.recommendations?.length ?? 0) > 0;
  const shouldShowLeadCard =
    isOpen &&
    !leadDismissed &&
    (userMessageCount >= 3 || lastBotHadRecommendations);

  // Reveal the card with a small delay once the trigger condition is met so
  // it doesn't compete with the bot's answer.
  useEffect(() => {
    if (!shouldShowLeadCard) {
      setShowLeadCard(false);
      return;
    }
    const t = setTimeout(() => setShowLeadCard(true), 1200);
    return () => clearTimeout(t);
  }, [shouldShowLeadCard]);

  const dismissLeadCard = () => {
    setLeadDismissed(true);
    setShowLeadCard(false);
    try {
      sessionStorage.setItem(LEAD_CARD_KEY, "dismissed");
    } catch {
      // ignore
    }
  };

  /** Dev-only: wipe messages, profile and lead-card state to restart the flow. */
  const clearConversation = () => {
    setMessages([{ ...WELCOME_MESSAGE, id: `welcome_${Date.now()}`, timestamp: new Date() }]);
    setCollectedProfile({});
    setShowLeadCard(false);
    setLeadConfirmVisible(false);
    setLeadState("idle");
    setLeadForm({ name: "", phone: "" });
    setLeadDismissed(false);
    try {
      sessionStorage.removeItem(SESSION_KEY);
      sessionStorage.removeItem(LEAD_CARD_KEY);
    } catch {
      // ignore
    }
    log.info("conversation cleared (dev)");
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name.trim() || leadForm.phone.trim().length < 8) return;
    setLeadState("sending");

    const sessionSummary = messages
      .filter((m) => m.sender === "user")
      .slice(-5)
      .map((m) => m.text.slice(0, 120))
      .join(" | ");

    submitLead({
      source: "chatbot",
      name: leadForm.name.trim(),
      phone: leadForm.phone.trim(),
      profile: collectedProfile as Record<string, unknown>,
      topSchemes: (lastMessage?.recommendations ?? []).slice(0, 5).map((r) => ({
        schemeId: r.schemeId,
        schemeName: r.schemeName,
        eligibilityStatus: r.eligibilityStatus,
      })),
      chat: {
        messageCount: messages.filter((m) => m.sender === "user").length,
        sessionSummary,
      },
    });

    // Fire Meta Pixel Lead event for conversion tracking
    trackMetaPixelEvent("Lead", {
      content_name: "Chatbot Lead Card",
    });

    setLeadState("done");
    setLeadConfirmVisible(true);
    setLeadDismissed(true); // never re-trigger the ask this session
    setTimeout(() => setLeadConfirmVisible(false), 6000);
    try {
      sessionStorage.setItem(LEAD_CARD_KEY, "dismissed");
    } catch {
      // ignore
    }
  };

  // Persist messages to sessionStorage whenever they change
  useEffect(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages));
    } catch {
      // ignore quota errors
    }
  }, [messages]);

  // Close chat when clicking outside the widget
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Scroll to bottom on new message or when the typing indicator appears/disappears
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  const getResponse = async (query: string): Promise<{ text: string; isActionable: boolean; type?: "assessment" | "contact"; recommendations?: SchemeRecommendation[]; followUps?: FollowUpQuestion[] }> => {
    // Same backend recommendation engine as the AssessmentPage: the server
    // wraps POST /api/recommend-schemes and adds conversational state.
    const response = await fetch(apiUrl(`/api/chat-restricted`), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query, collected: collectedProfile, history: buildHistoryPayload(messages) })
    });

    if (response.status === 429) {
      // Server-side per-IP limiter: show the server's friendly wait message
      // as a bot bubble instead of the generic failure bubble.
      let waitMessage = "You're sending messages very quickly. Please wait a few seconds and try again.";
      try {
        const data = (await response.json()) as { answer?: string };
        if (data.answer) waitMessage = data.answer;
      } catch {
        // keep default message
      }
      return { text: waitMessage, isActionable: true, type: "assessment" as const };
    }

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const data = await response.json() as ChatApiResponse;
    const answer = data.answer?.trim();
    if (data.collected) {
      setCollectedProfile(data.collected);
    }
    return {
      text: answer || "I do not have information on this.",
      isActionable: true,
      type: "assessment",
      recommendations: data.recommendations,
      followUps: data.followUpQuestions,
    };
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user_${Math.random().toString(36).substring(2, 9)}`,
      sender: "user",
      text: text.trim(),
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsSending(true);

    try {
      const replyData = await getResponse(text);
      const botMsg: Message = {
        id: `bot_${Math.random().toString(36).substring(2, 9)}`,
        sender: "bot",
        text: replyData.text,
        timestamp: new Date(),
        isActionable: replyData.isActionable,
        type: replyData.type,
        recommendations: replyData.recommendations,
        followUps: replyData.followUps,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg: Message = {
        id: `bot_${Math.random().toString(36).substring(2, 9)}`,
        sender: "bot",
        text: "I’m unable to reach the policy assistant right now. Please try again in a moment.",
        timestamp: new Date(),
        isActionable: true,
        type: "assessment"
      };

      setMessages((prev) => [...prev, botMsg]);
      log.error("chat request failed", error);
    } finally {
      setIsSending(false);
    }
  };

  const triggerAction = (type?: "assessment" | "contact") => {
    if (type === "contact") {
      navigateToContactSection(200);
    } else {
      window.dispatchEvent(
        new CustomEvent("open-assessment", { detail: { source: "manual_click" } })
      );
    }
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 font-sans text-left">
      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(4px)", transition: { duration: 0.15, ease: "easeOut" } }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="absolute bottom-14 sm:bottom-16 right-0 w-[calc(100vw-24px)] sm:w-[460px] h-[65vh] sm:h-120 max-h-[calc(100dvh-100px)] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-[0_0_0_1px_oklch(0_0_0/0.06),0_8px_24px_-4px_oklch(0_0_0/0.12),0_2px_8px_oklch(0_0_0/0.06)] flex flex-col overflow-hidden z-50 origin-bottom-right will-change-transform"
          >
            {/* Chat Header */}
            <div className="px-4 py-3.5 flex items-center justify-between select-none bg-zinc-50/80 border-b border-zinc-100">
              <div className="flex items-center gap-2.5">
                <span className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <img src={logoMark} alt="" aria-hidden="true" className="h-5 w-5" />
                </span>
                <h4 className="text-[13px] font-bold text-black tracking-tight">
                  ICS AI Assistant
                </h4>
              </div>
              <div className="flex items-center gap-0.5">
                {IS_DEV_BUILD && (
                  <button
                    onClick={clearConversation}
                    className="p-1.5 text-zinc-400 hover:text-black transition-[color,background-color] duration-150 rounded-lg hover:bg-zinc-200/60"
                    title="Clear conversation (dev only) — resets messages, profile and lead card"
                  >
                    <Trash2 size={13} strokeWidth={1.5} />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-black transition-[color,background-color] duration-150 rounded-lg hover:bg-zinc-200/60"
                  title="Close Chat"
                >
                  <X size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Chat Messages Log */}
            <div className="grow overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <motion.div
                    key={msg.id}
                    variants={enterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                    className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}
                  >
                    {/* Bubble row with optically aligned avatar */}
                    <div className={`flex items-end gap-1.5 max-w-full ${isBot ? "" : "flex-row-reverse"}`}>
                      {isBot ? <BotAvatar /> : <UserAvatar />}
                      <div
                        className={`max-w-[85%] sm:max-w-[340px] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed shadow-[0_0_0_1px_oklch(0_0_0/0.04),0_1px_2px_oklch(0_0_0/0.05)] ${isBot
                          ? "bg-white text-zinc-800 rounded-tl-md"
                          : "bg-primary text-white rounded-tr-md"
                          }`}
                      >
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      </div>
                    </div>

                  {/* Scheme recommendation mini-cards (same engine as Assessment) */}
                  {isBot && msg.recommendations && msg.recommendations.length > 0 && (
                    <div className="mt-2 space-y-2 max-w-[95%]">
                      {msg.recommendations.slice(0, 3).map((rec) => (
                        <a
                          key={rec.schemeId}
                          href={rec.sources?.[0]?.resource ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-white rounded-xl p-3 shadow-[0_0_0_1px_oklch(0_0_0/0.06),0_1px_2px_-1px_oklch(0_0_0/0.06),0_2px_4px_oklch(0_0_0/0.04)] hover:shadow-[0_0_0_1px_oklch(0.62_0.21_47/0.35),0_2px_6px_-1px_oklch(0_0_0/0.08),0_3px_8px_oklch(0_0_0/0.05)] transition-[box-shadow] duration-150 ease-out group/rec"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-sans text-[11px] font-bold text-black tracking-tight truncate">
                              {rec.schemeName}
                            </span>
                            <StatusBadge status={rec.eligibilityStatus} />
                          </div>
                          {rec.relevance?.reasons?.[0] && (
                            <p className="text-[10px] text-zinc-500 font-sans mt-1.5 leading-snug flex items-start gap-1">
                              <Sparkles size={10} strokeWidth={1.5} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                              <span>{rec.relevance.reasons[0]}</span>
                            </p>
                          )}
                          {rec.fundingRange && (
                            <p className="text-[10px] font-bold text-primary font-sans mt-1">
                              {rec.fundingRange}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Follow-up quick replies */}
                  {isBot && msg.followUps && msg.followUps.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                      {msg.followUps[0]?.options?.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          disabled={isSending}
                          onClick={() => handleSendMessage(opt)}
                          className="text-[10px] font-semibold tracking-wide bg-white text-zinc-600 hover:text-black hover:shadow-[0_0_0_1px_oklch(0_0_0/0.12)] rounded-full px-2.5 py-1 shadow-[0_0_0_1px_oklch(0_0_0/0.06)] transition-[box-shadow,color] duration-150 ease-out cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                        >
                          {opt.replace(/_/g, " ")}
                        </button>
                      ))}
                    </div>
                  )}
                  </motion.div>
                );
              })}

              <AnimatePresence>
                {isSending && <TypingIndicator />}
              </AnimatePresence>

              <div ref={chatEndRef} />
            </div>

            {/* Soft-ask lead card — capture contact details once engaged */}
            <AnimatePresence>
              {showLeadCard && leadState !== "done" && (
                <motion.form
                  onSubmit={handleLeadSubmit}
                  variants={enterVariants}
                  initial="hidden"
                  animate="visible"
                  exit={exitVariants}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="mx-3 mb-2 rounded-xl bg-white p-3 space-y-2 shadow-[0_0_0_1px_oklch(0.62_0.21_47/0.2),0_2px_8px_-2px_oklch(0.62_0.21_47/0.15)]"
                >
                  {leadState === "sending" ? (
                    <div className="flex items-center gap-2 py-1 text-[11px] font-bold text-zinc-600">
                      <Loader2 size={12} className="animate-spin text-primary" />
                      Sending your details...
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[11px] font-bold text-black tracking-tight flex items-center gap-1.5">
                            <PhoneCall size={11} strokeWidth={2} className="text-primary" aria-hidden="true" />
                            Want a free advisor callback?
                          </p>
                          <p className="text-[10px] text-zinc-500 leading-snug mt-0.5">
                            An ICS funding advisor will call you about the schemes above.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={dismissLeadCard}
                          className="p-1 text-zinc-400 hover:text-black transition-[color,background-color] duration-150 rounded-md hover:bg-zinc-100 shrink-0"
                          title="Dismiss"
                        >
                          <X size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <Input
                          required
                          placeholder="Your name"
                          value={leadForm.name}
                          onChange={(e) => setLeadForm((p) => ({ ...p, name: e.target.value }))}
                          className="grow h-8 rounded-lg text-[11px] border-zinc-200 bg-zinc-50/50 focus-visible:ring-black/10 placeholder:text-zinc-300 text-black"
                        />
                        <Input
                          required
                          type="tel"
                          placeholder="Phone number"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm((p) => ({ ...p, phone: e.target.value }))}
                          className="grow h-8 rounded-lg text-[11px] border-zinc-200 bg-zinc-50/50 focus-visible:ring-black/10 placeholder:text-zinc-300 text-black"
                        />
                        <button
                          type="submit"
                          className="h-8 ps-3 pe-2.5 bg-primary text-white hover:bg-primary/90 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-[background-color,scale] duration-150 ease-out hover:scale-[1.02] active:scale-[0.96] shrink-0 cursor-pointer"
                          title="Request callback"
                        >
                          Call
                          <ArrowRight size={11} strokeWidth={2} aria-hidden="true" />
                        </button>
                      </div>
                      <p className="text-[9px] text-zinc-400">No spam. Only scheme guidance from our advisors.</p>
                    </>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
            {leadConfirmVisible && (
              <div className="mx-3 mb-2 rounded-xl bg-emerald-50 p-3 flex items-center gap-2 shadow-[0_0_0_1px_oklch(0.145_0_0/0.06)] animate-in fade-in duration-300">
                <CheckCircle2 size={14} strokeWidth={2} className="text-emerald-600 shrink-0" aria-hidden="true" />
                <p className="text-[11px] font-bold text-emerald-800">
                  Got it! An advisor will call you shortly.
                </p>
              </div>
            )}

            {/* Chat input box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-zinc-100 bg-white flex gap-2 items-center"
            >
              <Input
                required
                placeholder={isSending ? "Advisor is replying…" : "Query government funding..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isSending}
                aria-disabled={isSending}
                className={`grow rounded-lg text-xs h-9 focus-visible:ring-black/10 placeholder:text-zinc-300 transition-[background-color,color] duration-150 ${
                  isSending
                    ? "border-zinc-200 text-zinc-400 bg-zinc-100 cursor-not-allowed opacity-70"
                    : "border-zinc-200 text-black bg-zinc-50/50"
                }`}
              />
              <button
                type="submit"
                disabled={isSending}
                aria-disabled={isSending}
                title={isSending ? "Waiting for the advisor's reply…" : "Send Message"}
                className={`w-9 h-9 rounded-lg flex items-center justify-center relative transition-[background-color,scale] duration-150 ease-out shrink-0 ${
                  isSending
                    ? "bg-primary/40 text-white cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary/90 active:scale-[0.96] cursor-pointer"
                }`}
              >
                {/* Contextual icon cross-fade — exact values per skill */}
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                    isSending ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[0.25] blur-[4px]"
                  }`}
                >
                  <Loader2 size={12} className="animate-spin" aria-hidden="true" />
                </span>
                <span
                  className={`flex items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                    isSending ? "opacity-0 scale-[0.25] blur-[4px]" : "opacity-100 scale-100 blur-0"
                  }`}
                >
                  <Send size={12} aria-hidden="true" />
                </span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <div className="relative flex flex-col items-end">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)", transition: { duration: 0.15, ease: "easeOut" } }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="hidden md:block absolute bottom-16 right-0 mb-3 bg-white rounded-2xl rounded-br-md ps-3.5 pe-3 py-2.5 shadow-[0_0_0_1px_oklch(0_0_0/0.06),0_4px_12px_-2px_oklch(0_0_0/0.1)] text-xs font-bold text-black tracking-tight select-none whitespace-nowrap pointer-events-none z-10"
            >
              Questions about funding? Ask away
              {/* Tail pointing down-right */}
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 shadow-[1px_1px_0_0_oklch(0_0_0/0.06)]" />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.96 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_0_1px_oklch(0.62_0.21_47/0.3),0_8px_24px_-4px_oklch(0.62_0.21_47/0.5),0_2px_8px_oklch(0_0_0/0.08)] transition-[background-color] duration-150 hover:bg-primary/90 cursor-pointer relative"
          title="Consult AI Policy Advisor"
          aria-expanded={isOpen}
        >
          {/* Contextual icon cross-fade — both in DOM, spring swap */}
          <AnimatePresence mode="popLayout" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                transition={iconTransition}
                className="flex items-center justify-center"
              >
                <X size={20} aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                transition={iconTransition}
                className="flex items-center justify-center"
              >
                {/* White-on-orange: pure-black mark neutralized via brightness-0 + invert. */}
                <img src={logoMark} alt="" aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7 brightness-0 invert" />
              </motion.span>
            )}
          </AnimatePresence>
          {/* Unread notification dot — static, single pulse ring */}
          {!isOpen && (
            <span className="absolute top-0 right-0 h-3 w-3 -mt-0.5 -mr-0.5 rounded-full bg-emerald-500 border-2 border-white" aria-hidden="true" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
