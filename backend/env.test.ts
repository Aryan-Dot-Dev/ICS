import { describe, expect, test, beforeEach, afterEach } from "bun:test";
import { loadEnv } from "./env";

/**
 * loadEnv reads process.env directly; tests snapshot and restore the relevant
 * keys so nothing leaks between tests or into other suites.
 */
const SENSITIVE_KEYS = [
  "PORT",
  "NODE_ENV",
  "LEAD_SHEETS_URL",
  "LEADS_EXPORT_TOKEN",
  "OPENAI_API_KEY",
  "ANTHROPIC_API_KEY",
  "GROQ_API_KEY",
  "GROQ_MODEL",
  "GROQ_BASE_URL",
] as const;

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

describe("env contract gate", () => {
  test("refuses to start without LEAD_SHEETS_URL", () => {
    process.env.LEADS_EXPORT_TOKEN = "x".repeat(32);
    expect(() => loadEnv()).toThrow(/LEAD_SHEETS_URL/);
  });

  test("refuses to start without LEADS_EXPORT_TOKEN", () => {
    process.env.LEAD_SHEETS_URL = "https://script.google.com/macros/s/abc/exec";
    expect(() => loadEnv()).toThrow(/LEADS_EXPORT_TOKEN/);
  });

  test("refuses non-URL LEAD_SHEETS_URL", () => {
    process.env.LEAD_SHEETS_URL = "not-a-url";
    process.env.LEADS_EXPORT_TOKEN = "x".repeat(32);
    expect(() => loadEnv()).toThrow(/must be a valid http\(s\) URL/);
  });

  test("refuses short LEADS_EXPORT_TOKEN", () => {
    process.env.LEAD_SHEETS_URL = "https://script.google.com/macros/s/abc/exec";
    process.env.LEADS_EXPORT_TOKEN = "short";
    expect(() => loadEnv()).toThrow(/at least 16 characters/);
  });

  test("valid config loads and normalizes (trims whitespace)", () => {
    process.env.LEAD_SHEETS_URL = "  https://script.google.com/macros/s/abc/exec  ";
    process.env.LEADS_EXPORT_TOKEN = `  ${"t".repeat(32)}  `;
    const env = loadEnv();
    expect(env.leadSheetsUrl).toBe("https://script.google.com/macros/s/abc/exec");
    expect(env.leadsExportToken).toBe("t".repeat(32));
    expect(env.port).toBe(8000); // default
    expect(env.nodeEnv).toBe("production"); // default
    expect(env.llmConfigured).toBe(false);
  });

  test("LLM detection still works alongside the required vars", () => {
    process.env.LEAD_SHEETS_URL = "https://script.google.com/macros/s/abc/exec";
    process.env.LEADS_EXPORT_TOKEN = "x".repeat(32);
    process.env.OPENAI_API_KEY = "sk-test";
    expect(loadEnv().llmConfigured).toBe(true);
  });
});
