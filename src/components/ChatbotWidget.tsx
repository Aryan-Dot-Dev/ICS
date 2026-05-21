import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, ArrowRight, Sparkles } from "lucide-react";
import { Input } from "./ui/input";
import ClickSpark from "./ui/ClickSpark";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  isActionable?: boolean;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Welcome to Infou Consultancy. I am your automated sovereign policy assistant. I can help analyze your corporate structure for state and central subsidy eligibility. Which sector represents your business?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Suggestion chips
  const suggestions = [
    "PLI Subsidies",
    "MSME Grants",
    "Tax Exemptions",
    "State Policy Audit"
  ];

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user_${Math.random().toString(36).substring(2, 9)}`,
      sender: "user",
      text: text.trim(),
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and replying
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 1200);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const triggerAssessment = () => {
    // Dispatch global custom event to open the assessment modal
    window.dispatchEvent(
      new CustomEvent("open-assessment", { detail: { source: "manual_click" } })
    );
    // Auto-close chat window to focus on form
    setIsOpen(false);
  };

  const generateBotResponse = (input: string): Message => {
    const cleanInput = input.toLowerCase();
    const id = `bot_${Math.random().toString(36).substring(2, 9)}`;
    const timestamp = new Date();

    if (cleanInput.includes("pli") || cleanInput.includes("manufacture") || cleanInput.includes("production")) {
      return {
        id,
        sender: "bot",
        text: "The Production Linked Incentive (PLI) scheme offers 4% to 6% incremental sales cashbacks on target segments. Infou has mapped PLI criteria across 14 primary manufacturing verticals. Would you like to launch our eligibility assessment form to package your applications?",
        timestamp,
        isActionable: true
      };
    }

    if (cleanInput.includes("msme") || cleanInput.includes("grant") || cleanInput.includes("subsidy")) {
      return {
        id,
        sender: "bot",
        text: "MSMEs qualify for central initiatives like CLCSS (Credit Linked Capital Subsidy up to ₹15 Lakhs) and state-level infrastructure subsidies ranging from 15% to 25% of fixed asset capital. I recommend compiling your corporate parameters in our diagnostic form to pinpoint your specific allocation.",
        timestamp,
        isActionable: true
      };
    }

    if (cleanInput.includes("tax") || cleanInput.includes("relief") || cleanInput.includes("exemption")) {
      return {
        id,
        sender: "bot",
        text: "Under Section 80-IAC, eligible Indian start-ups receive 100% tax exemption for 3 consecutive assessment blocks. Infou handles regulatory mapping for Startup India and DPIIT approvals. Fill out our assessment to verify if your corporation fits the eligibility schema.",
        timestamp,
        isActionable: true
      };
    }

    if (cleanInput.includes("state") || cleanInput.includes("policy") || cleanInput.includes("audit")) {
      return {
        id,
        sender: "bot",
        text: "Sovereign policy diagnostic audits evaluate your corporate expansion layout against state-specific IT policies, capital grants, and power tariffs. Let's start a Free Eligibility Assessment to generate a serialized PDF diagnostics folder.",
        timestamp,
        isActionable: true
      };
    }

    // Default response
    return {
      id,
      sender: "bot",
      text: "Fascinating parameters. Infou's real-time geospatial incentive database evaluates 130+ central and state policies. To unlock active capital allocations, we highly recommend initializing our structured Free Assessment diagnostic.",
      timestamp,
      isActionable: true
    };
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans text-left">
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[340px] sm:w-[380px] h-[480px] bg-white border border-zinc-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-5 duration-200 origin-bottom-right">
          
          {/* Chat Header */}
          <div className="bg-zinc-50 border-b border-zinc-150 px-4 py-3.5 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black text-white rounded-lg flex items-center justify-center">
                <Sparkles size={12} className="animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-black uppercase tracking-wider">
                  Infou AI Advisor
                </h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-[9px] text-zinc-400 font-semibold tracking-wider uppercase">
                    Active / Policy Model v2.8
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg border border-zinc-200 text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors"
              title="Minimize Chat"
            >
              <X size={14} />
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-zinc-50/50">
            {messages.map((msg) => {
              const isBot = msg.sender === "bot";
              return (
                <div key={msg.id} className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed ${
                      isBot
                        ? "bg-white border border-zinc-200 text-zinc-800 rounded-tl-xs shadow-xs"
                        : "bg-black text-white rounded-tr-xs shadow-sm"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    
                    {/* Diagnostic Link Shortcut inside bot reply */}
                    {isBot && msg.isActionable && (
                      <div className="mt-3 pt-2.5 border-t border-zinc-100 flex justify-end">
                        <button
                          onClick={triggerAssessment}
                          className="text-[10px] font-bold text-black hover:text-zinc-600 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                        >
                          Launch Free Form
                          <ArrowRight size={10} />
                        </button>
                      </div>
                    )}
                  </div>
                  <span className="text-[8px] text-zinc-400 font-semibold uppercase tracking-widest mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              );
            })}

            {/* Simulated Typing Indicator */}
            {isTyping && (
              <div className="flex flex-col items-start animate-pulse">
                <div className="bg-white border border-zinc-200 text-zinc-400 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce duration-300" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce duration-300" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce duration-300" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Chat Quick suggestions */}
          <div className="px-4 py-2 border-t border-zinc-100 bg-white overflow-x-auto flex gap-1.5 no-scrollbar scroll-smooth">
            {suggestions.map((sug) => (
              <button
                key={sug}
                onClick={() => handleSuggestionClick(sug)}
                className="shrink-0 px-2.5 py-1 text-[10px] font-semibold text-zinc-500 hover:text-black border border-zinc-200 hover:border-black bg-white rounded-full transition-all cursor-pointer whitespace-nowrap"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Chat input box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 border-t border-zinc-150 bg-white flex gap-2 items-center"
          >
            <Input
              required
              placeholder="Query government funding..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow rounded-lg text-xs h-9 border-zinc-200 focus-visible:ring-black/10 placeholder:text-zinc-300 text-black bg-zinc-50/50"
            />
            <ClickSpark sparkColor="#fff" sparkRadius={15} sparkCount={6} duration={350}>
              <button
                type="submit"
                className="w-9 h-9 bg-black text-white hover:bg-zinc-800 rounded-lg flex items-center justify-center transition-colors active:scale-95 duration-100 shrink-0 cursor-pointer"
                title="Send Message"
              >
                <Send size={12} />
              </button>
            </ClickSpark>
          </form>
        </div>
      )}

      {/* Floating Toggle Button Bubble */}
      <ClickSpark sparkColor="#fff" sparkRadius={24} sparkCount={8} duration={400}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-black hover:bg-zinc-800 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-zinc-800 relative group animate-bounce-slow"
          title="Consult AI Policy Advisor"
        >
          {isOpen ? (
            <X size={20} className="animate-in spin-in-90 duration-200" />
          ) : (
            <>
              <MessageSquare size={20} className="animate-in zoom-in-50 duration-200" />
              {/* Visual unread notification dot */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-black"></span>
              </span>
            </>
          )}
        </button>
      </ClickSpark>
    </div>
  );
}
