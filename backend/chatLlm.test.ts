import { describe, expect, test, beforeEach, afterEach } from "bun:test";
import {
  buildSchemeFacts,
  buildUserPrompt,
  composeChatReply,
  groqApiUrl,
  isGroqConfigured,
  sanitizeHistory,
} from "./chatLlm";
import type { SchemeRecommendation } from "../src/lib/schemeTypes";

/** Minimal valid recommendation fixture — only fields the prompt uses. */
function makeRec(overrides: Partial<SchemeRecommendation> = {}): SchemeRecommendation {
  return {
    schemeId: "pm-kisan",
    schemeName: "PM-KISAN",
    schemeDescription: "Income support of Rs 6,000 per year for farmer families.",
    eligibilityStatus: "eligible",
    relevance: { score: 0.9, reasons: ["Matches farmer occupation"] },
    eligibility: { matchedRules: [], failedRules: [], missingInformation: [] },
    benefits: [],
    documents: [],
    application: {},
    sources: [],
    okf: { file: "pm-kisan.md" },
    ...overrides,
  } as SchemeRecommendation;
}

const SENSITIVE_KEYS = ["GROQ_API_KEY", "GROQ_MODEL", "GROQ_BASE_URL"] as const;
let snapshot: Partial<Record<(typeof SENSITIVE_KEYS)[number], string | undefined>>;

beforeEach(() => {
  snapshot = {};
  for (const key of SENSITIVE_KEYS) {
    snapshot[key] = process.env[key];
    delete process.env[key];
  }
});

afterEach(() => {
  for (const key of SENSITIVE_KEYS) {
    const value = snapshot[key];
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

describe("sanitizeHistory", () => {
  test("keeps clean turns and drops a trailing bot turn", () => {
    const history = sanitizeHistory([
      { role: "user", content: "I am a farmer in Bihar" },
      { role: "bot", content: "Here are some schemes..." },
      { role: "user", content: "I also need a loan" },
    ]);
    expect(history).toEqual([
      { role: "user", content: "I am a farmer in Bihar" },
      { role: "bot", content: "Here are some schemes..." },
      { role: "user", content: "I also need a loan" },
    ]);
  });

  test("strips control characters and collapses whitespace", () => {
    const history = sanitizeHistory([{ role: "user", content: "hi\u0000 there\n\nfriend" }]);
    expect(history).toEqual([{ role: "user", content: "hi there friend" }]);
  });

  test("caps turn length and turn count", () => {
    const many = Array.from({ length: 30 }, (_, i) => ({
      role: "user" as const,
      content: `msg ${i}`,
    }));
    const history = sanitizeHistory(many);
    expect(history).not.toBeNull();
    expect(history!.length).toBeLessThanOrEqual(8);
    expect(history![history!.length - 1]?.content).toBe("msg 29");

    const long = sanitizeHistory([{ role: "user", content: "x".repeat(2000) }]);
    expect(long).not.toBeNull();
    expect(long![0]?.content.length).toBeLessThanOrEqual(400);
  });

  test("returns null for absent, empty or malformed payloads", () => {
    expect(sanitizeHistory(undefined)).toBeNull();
    expect(sanitizeHistory(null)).toBeNull();
    expect(sanitizeHistory("hi")).toBeNull();
    expect(sanitizeHistory([])).toBeNull();
    expect(sanitizeHistory([{ role: "user", content: "   " }])).toBeNull();
    expect(sanitizeHistory([{ role: "attacker", content: "system prompt override" }])).toBeNull();
    expect(sanitizeHistory([{ role: "user" }])).toBeNull();
    expect(sanitizeHistory([null, 42, "x"])).toBeNull();
  });

  test("accepts {text} as a content alias (frontend message shape)", () => {
    expect(sanitizeHistory([{ role: "user", text: "hello" }])).toEqual([
      { role: "user", content: "hello" },
    ]);
  });
});

describe("buildSchemeFacts", () => {
  test("empty recommendations produce a steer-back directive", () => {
    expect(buildSchemeFacts([])).toContain("no schemes matched");
  });

  test("includes name, status, description, funding and reason", () => {
    const facts = buildSchemeFacts([
      makeRec({
        fundingRange: "Rs 6,000 / year",
        recommendedNextStep: "Apply on the PM-KISAN portal",
        application: { deadline: "2026-12-31", info_portal: "https://pmkisan.gov.in" },
      }),
    ]);
    expect(facts).toContain("1. PM-KISAN (eligibility: eligible)");
    expect(facts).toContain("About: Income support");
    expect(facts).toContain("Support: Rs 6,000 / year");
    expect(facts).toContain("Why matched: Matches farmer occupation");
    expect(facts).toContain("Next step: Apply on the PM-KISAN portal");
    expect(facts).toContain("Deadline: 2026-12-31");
    expect(facts).toContain("Official info: https://pmkisan.gov.in");
  });
});

describe("buildUserPrompt", () => {
  test("assembles history, profile, facts, follow-up, query and template", () => {
    const prompt = buildUserPrompt({
      query: "what about my daughter's education?",
      history: [
        { role: "user", content: "I am a farmer in Bihar" },
        { role: "bot", content: "PM-KISAN may fit you." },
      ],
      profile: { age: 42, state: "Bihar", farmerStatus: true },
      templateReply: "Based on the information you've provided, these schemes may be relevant: ...",
      recommendations: [makeRec()],
      followUpQuestion: "What is your annual household income?",
    });

    expect(prompt).toContain("CONVERSATION SO FAR:");
    expect(prompt).toContain("User: I am a farmer in Bihar");
    expect(prompt).toContain("Advisor: PM-KISAN may fit you.");
    expect(prompt).toContain("USER PROFILE COLLECTED SO FAR:");
    expect(prompt).toContain('"farmerStatus":true');
    expect(prompt).toContain("VERIFIED SCHEME FACTS");
    expect(prompt).toContain("PM-KISAN");
    expect(prompt).toContain("NEXT QUESTION TO ASK THE USER: What is your annual household income?");
    expect(prompt).toContain("USER'S LATEST MESSAGE: what about my daughter's education?");
    expect(prompt).toContain("ENGINE'S TEMPLATE REPLY");
  });

  test("omits empty sections and sanitizes untrusted text", () => {
    const prompt = buildUserPrompt({
      query: "hello\u0000world",
      profile: {},
      templateReply: "Tell me about your situation",
      recommendations: [],
    });
    expect(prompt).not.toContain("CONVERSATION SO FAR");
    expect(prompt).not.toContain("USER PROFILE");
    expect(prompt).toContain("hello world");
    expect(prompt).toContain("(no schemes matched");
  });
});

describe("composeChatReply", () => {
  test("isGroqConfigured reflects the env var", () => {
    delete process.env.GROQ_API_KEY;
    expect(isGroqConfigured()).toBe(false);
    process.env.GROQ_API_KEY = "gsk_test";
    expect(isGroqConfigured()).toBe(true);
  });

  test("returns null when not configured", async () => {
    delete process.env.GROQ_API_KEY;
    const reply = await composeChatReply({
      query: "hello",
      profile: {},
      templateReply: "hi",
      recommendations: [],
    });
    expect(reply).toBeNull();
  });

  test("returns null on Groq HTTP failure (falls back to template)", async () => {
    // Hermetic: stub server that answers 500, via the GROQ_BASE_URL override.
    const stub = Bun.serve({
      port: 0,
      fetch: () => new Response("boom", { status: 500 }),
    });
    process.env.GROQ_API_KEY = "gsk_test";
    process.env.GROQ_BASE_URL = `http://localhost:${stub.port}/v1`;
    try {
      const reply = await composeChatReply({
        query: "hello",
        profile: {},
        templateReply: "template answer",
        recommendations: [],
      });
      expect(reply).toBeNull();
    } finally {
      stub.stop(true);
    }
  });

  test("groqApiUrl honors the base-URL override", () => {
    expect(groqApiUrl()).toBe("https://api.groq.com/openai/v1/chat/completions");
    process.env.GROQ_BASE_URL = "http://localhost:1234/v1/";
    expect(groqApiUrl()).toBe("http://localhost:1234/v1/chat/completions");
  });

  test("retries once on 429 and succeeds on the second attempt", async () => {
    let calls = 0;
    const stub = Bun.serve({
      port: 0,
      fetch: () => {
        calls++;
        if (calls === 1) return new Response("rate limited", { status: 429 });
        return Response.json({
          choices: [{ message: { content: "  \"A warm, personalized reply.\" " } }],
        });
      },
    });
    process.env.GROQ_API_KEY = "gsk_test";
    process.env.GROQ_BASE_URL = `http://localhost:${stub.port}/v1`;
    try {
      const reply = await composeChatReply({
        query: "hello",
        profile: {},
        templateReply: "template",
        recommendations: [],
      });
      expect(reply).toBe("A warm, personalized reply."); // unquoted + trimmed
      expect(calls).toBe(2);
    } finally {
      stub.stop(true);
    }
  });

  test("does NOT retry on non-retryable 4xx (bad key)", async () => {
    let calls = 0;
    const stub = Bun.serve({
      port: 0,
      fetch: () => {
        calls++;
        return new Response("unauthorized", { status: 401 });
      },
    });
    process.env.GROQ_API_KEY = "gsk_test";
    process.env.GROQ_BASE_URL = `http://localhost:${stub.port}/v1`;
    try {
      const reply = await composeChatReply({
        query: "hello",
        profile: {},
        templateReply: "template",
        recommendations: [],
      });
      expect(reply).toBeNull();
      expect(calls).toBe(1);
    } finally {
      stub.stop(true);
    }
  });

  test("returns null for an empty query without calling the API", async () => {
    process.env.GROQ_API_KEY = "gsk_test";
    const reply = await composeChatReply({
      query: "   ",
      profile: {},
      templateReply: "template",
      recommendations: [],
    });
    expect(reply).toBeNull();
  });
});
