/**
 * Conversational small-talk handling for the chat endpoints.
 *
 * Previously every chat message flowed straight into the recommendation
 * engine — including bare greetings like "hi". With no lexical signal,
 * retrieval fell back to the whole scheme corpus and the user received an
 * arbitrary "top 3" scheme dump for a greeting. Pure small talk is now
 * short-circuited with a conversational reply that steers the user toward
 * describing their situation (which is what the engine actually needs).
 *
 * Only PURE small talk matches (anchored regexes + a length cap): messages
 * that contain real content ("hi i need a loan") still reach the engine.
 */

const CAPABILITY_HINT =
  'Tell me about your situation — for example: "I am a 32-year-old dairy farmer in Haryana and I need a loan" — and I\'ll check which government schemes you may be eligible for.';

interface SmallTalkRule {
  re: RegExp;
  reply: string;
}

const RULES: SmallTalkRule[] = [
  {
    // Greetings: hi, hiiii, hey, hello there, namaste, good morning...
    re: /^(hi+|hey+|hello+|heya|yo+|namaste|namaskar|salaam|good\s*(?:morning|afternoon|evening|day))(?:\s+(?:there|dear|sir|madam))?[\s!,.]*$/i,
    reply: `Hello! I'm the ICS scheme advisor. ${CAPABILITY_HINT}`,
  },
  {
    re: /^(thanks?|thank\s*you+|thx|ty|dhanyavaad|shukriya)[\s!,.]*$/i,
    reply: `You're welcome! ${CAPABILITY_HINT}`,
  },
  {
    re: /^(bye+|goodbye|see\s*(?:ya|you)|alvida)[\s!,.]*$/i,
    reply: "Goodbye! Whenever you're ready, describe your situation and I'll find matching government schemes for you.",
  },
  {
    re: /^(?:how\s*(?:are|r)\s*(?:you|u)|what'?s\s*up|kaise\s*ho|kya\s*haal)[\s?!,.]*$/i,
    reply: `I'm doing well, thank you! ${CAPABILITY_HINT}`,
  },
  {
    // Acknowledgements: keep it short and re-invite the real question.
    re: /^(?:ok(?:ay)?|kk+|k|hmm+|nice|great|cool|good)[\s!,.]*$/i,
    reply: CAPABILITY_HINT,
  },
  {
    re: /^(?:help|what\s*can\s*you\s*do|who\s*are\s*you)[\s?!,.]*$/i,
    reply: `I'm the ICS AI assistant for government scheme discovery. I can check your eligibility for loans, pensions, scholarships, insurance and subsidies, and explain how to apply. ${CAPABILITY_HINT}`,
  },
];

/**
 * Conversational reply for pure small talk, or null when the message has
 * real content and should be processed by the recommendation engine.
 */
export function matchSmallTalkReply(query: string): string | null {
  const trimmed = query.trim();
  // Long messages are never small talk; the length cap keeps the anchored
  // regexes cheap and prevents weird edge matches on pasted text.
  if (trimmed.length === 0 || trimmed.length > 40) return null;
  for (const rule of RULES) {
    if (rule.re.test(trimmed)) return rule.reply;
  }
  return null;
}
