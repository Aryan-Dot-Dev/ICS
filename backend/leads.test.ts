import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  LeadStore,
  computeLeadScore,
  leadsToCsv,
  normalizeEmail,
  normalizePhone,
  sheetsSafeCell,
  CSV_COLUMNS,
} from "./leads";
import type { LeadSubmission } from "./leads";

/** Fresh temp dir per store: tests never touch the real data/ directory. */
function makeStore(): LeadStore {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "ics-leads-test-"));
  return new LeadStore(undefined, undefined, dir);
}

describe("identity normalization", () => {
  test("phone normalization produces stable dedupe keys", () => {
    expect(normalizePhone("+91 98765 43210")).toBe("919876543210");
    expect(normalizePhone("09876543210")).toBe("919876543210");
    expect(normalizePhone("98765-43210")).toBe("919876543210");
    expect(normalizePhone("12345")).toBeUndefined();
    expect(normalizePhone("not-a-phone")).toBeUndefined();
  });

  test("email normalization is lowercase and validated", () => {
    expect(normalizeEmail("  Foo@Example.COM ")).toBe("foo@example.com");
    expect(normalizeEmail("not-an-email")).toBeUndefined();
    expect(normalizeEmail("missing@tld")).toBeUndefined();
  });
});

describe("sheets value safety", () => {
  test("formula-triggering values are apostrophe-escaped", () => {
    expect(sheetsSafeCell("+91 90000 99999")).toBe("'+91 90000 99999");
    expect(sheetsSafeCell("=SUM(A1:B2)")).toBe("'=SUM(A1:B2)");
    expect(sheetsSafeCell("-leading dash")).toBe("'-leading dash");
    expect(sheetsSafeCell("@handle")).toBe("'@handle");
  });

  test("normal values pass through untouched", () => {
    expect(sheetsSafeCell("Vikram Sharma")).toBe("Vikram Sharma");
    expect(sheetsSafeCell("vikram@example.com")).toBe("vikram@example.com");
    expect(sheetsSafeCell("09876512345")).toBe("09876512345");
    expect(sheetsSafeCell("$1,200 profit")).toBe("$1,200 profit");
    expect(sheetsSafeCell("")).toBe("");
  });
});

describe("lead scoring", () => {
  test("empty lead scores 0", () => {
    const { score } = computeLeadScore({
      topSchemes: [],
      assessmentCount: 0,
      chatMessages: 0,
      profile: {},
      stage: "lead",
    });
    expect(score).toBe(0);
  });

  test("a fully engaged, eligible lead scores high", () => {
    const { score, reasons } = computeLeadScore({
      topSchemes: [
        { schemeId: "PMMY", schemeName: "PMMY", eligibilityStatus: "eligible" },
        { schemeId: "SUI", schemeName: "SUI", eligibilityStatus: "eligible" },
      ],
      assessmentCount: 1,
      chatMessages: 6,
      phone: "+91 98765 43210",
      email: "a@b.co",
      name: "Test User",
      profile: { age: 32, state: "Haryana", annualIncome: 300000 },
      stage: "callback_requested",
    });
    expect(score).toBeGreaterThanOrEqual(90);
    expect(score).toBeLessThanOrEqual(100);
    expect(reasons.some((r) => r.includes("verified-eligible"))).toBe(true);
    expect(reasons.some((r) => r.includes("callback"))).toBe(true);
  });

  test("only-potentially-eligible scores below verified-eligible", () => {
    const potential = computeLeadScore({
      topSchemes: [{ schemeId: "X", schemeName: "X", eligibilityStatus: "potentially_eligible" }],
      assessmentCount: 0,
      chatMessages: 0,
      profile: {},
      stage: "lead",
    });
    const eligible = computeLeadScore({
      topSchemes: [{ schemeId: "X", schemeName: "X", eligibilityStatus: "eligible" }],
      assessmentCount: 0,
      chatMessages: 0,
      profile: {},
      stage: "lead",
    });
    expect(potential.score).toBeLessThan(eligible.score);
  });

  test("score never exceeds 100", () => {
    const { score } = computeLeadScore({
      topSchemes: Array.from({ length: 6 }, (_, i) => ({
        schemeId: `S${i}`,
        schemeName: `S${i}`,
        eligibilityStatus: "eligible",
      })),
      assessmentCount: 5,
      chatMessages: 50,
      phone: "9876543210",
      email: "a@b.co",
      name: "Max",
      profile: { age: 1, state: "X", income: 2, occupation: "y", education: "z" },
      stage: "callback_requested",
    });
    expect(score).toBe(100);
  });
});

describe("lead store dedupe and merge", () => {
  test("first submission creates a lead", () => {
    const store = makeStore();
    const lead = store.upsert({
      source: "assessment_page",
      name: "Vikram",
      email: "vikram@example.com",
      phone: "+91 98765 43210",
      businessName: "Vikram Dairy",
      businessType: "dairy",
      businessDescription: "dairy farm in Haryana",
    });
    expect(store.size).toBe(1);
    expect(lead.leadId).toMatch(/^LEAD-/);
    expect(lead.stage).toBe("assessed");
    expect(lead.assessmentCount).toBe(1);
  });

  test("same phone via chatbot merges into the same lead (enrichment preserved)", () => {
    const store = makeStore();
    store.upsert({
      source: "assessment_page",
      name: "Vikram",
      email: "vikram@example.com",
      phone: "+91 98765 43210",
      businessType: "dairy",
    });
    const merged = store.upsert({
      source: "chatbot",
      name: "Vikram",
      phone: "098765 43210", // different formatting, same person
      profile: { age: 32, state: "Haryana" },
      topSchemes: [{ schemeId: "PMMY", schemeName: "PMMY", eligibilityStatus: "eligible" }],
      chat: { messageCount: 4, sessionSummary: "wants dairy loan" },
    });
    expect(store.size).toBe(1);
    expect(merged.assessmentCount).toBe(1);
    expect(merged.chatMessages).toBe(4);
    expect(merged.chatSessionSummary).toBe("wants dairy loan");
    expect(merged.profile.state).toBe("Haryana");
    expect(merged.topSchemes[0]!.schemeId).toBe("PMMY");
    expect(merged.sources).toContain("chatbot");
    expect(merged.sources).toContain("assessment_page");
    // Stage must not regress from assessed to chat_engaged
    expect(merged.stage).toBe("assessed");
    // Merged lead scores higher than the first fragment would alone
    expect(merged.score).toBeGreaterThan(15);
  });

  test("same email (no phone) also dedupes", () => {
    const store = makeStore();
    store.upsert({ source: "assessment_modal", email: "A@Example.com", name: "A" });
    const merged = store.upsert({ source: "callback_form", email: "a@example.com", company: "A & Co" });
    expect(store.size).toBe(1);
    expect(merged.stage).toBe("callback_requested");
    // company falls back into businessName
    expect(merged.businessName).toBe("A & Co");
  });

  test("different identities create separate leads", () => {
    const store = makeStore();
    store.upsert({ source: "chatbot", phone: "9876543210", name: "A" });
    store.upsert({ source: "chatbot", phone: "8123456789", name: "B" });
    expect(store.size).toBe(2);
  });

  test("touchpoints increment on merge and merged lead is returned", () => {
    const store = makeStore();
    const first = store.upsert({ source: "chatbot", phone: "9876500000" });
    const second = store.upsert({ source: "chatbot", phone: "+91 98765 00000" });
    expect(first.leadId).toBe(second.leadId);
    expect(second.touchpoints).toBe(2);
  });

  test("profile merge keeps existing facts and adds new ones", () => {
    const store = makeStore();
    store.upsert({ source: "chatbot", phone: "9111100000", profile: { age: 40 } });
    const merged = store.upsert({ source: "chatbot", phone: "9111100000", profile: { state: "Punjab" } });
    expect(merged.profile.age).toBe(40);
    expect(merged.profile.state).toBe("Punjab");
  });
});

describe("CSV export", () => {
  test("header row matches the stable column contract", () => {
    const csv = leadsToCsv([]);
    expect(csv.split("\r\n")[0]).toBe(CSV_COLUMNS.join(","));
  });

  test("cells with commas/quotes/newlines are properly escaped", () => {
    const store = makeStore();
    store.upsert({
      source: "assessment_page",
      name: 'Ramesh "Babu" Rao',
      email: "r@x.co",
      phone: "9999900000",
      businessDescription: "sells, repairs and leases",
      topSchemes: [
        { schemeId: "A", schemeName: "Scheme A", eligibilityStatus: "eligible" },
        { schemeId: "B", schemeName: "Scheme B", eligibilityStatus: "potentially_eligible" },
      ],
    });
    const csv = leadsToCsv(store.listLeads());
    const lines = csv.trim().split("\r\n");
    expect(lines.length).toBe(2);
    const dataRow = lines[1]!;
    expect(dataRow).toContain('"Ramesh ""Babu"" Rao"');
    expect(dataRow).toContain('"sells, repairs and leases"');
    // top_schemes has no commas so it stays unquoted — but intact.
    expect(dataRow).toContain("Scheme A (eligible); Scheme B (potentially_eligible)");
    // Column count stays stable even with quoted commas
    const parsed = parseCsvLine(dataRow);
    expect(parsed.length).toBe(CSV_COLUMNS.length);
  });

  test("empty fields export as empty cells", () => {
    const store = makeStore();
    store.upsert({ source: "chatbot", email: "minimal@x.co" });
    const csv = leadsToCsv(store.listLeads());
    const parsed = parseCsvLine(csv.trim().split("\r\n")[1]!);
    expect(parsed[CSV_COLUMNS.indexOf("email")]).toBe("minimal@x.co");
    expect(parsed[CSV_COLUMNS.indexOf("phone")]).toBe("");
    expect(parsed[CSV_COLUMNS.indexOf("chat_messages")]).toBe("0");
  });
});

/** Minimal CSV line parser handling quoted cells (for assertions). */
function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]!;
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else inQuotes = false;
      } else cur += ch;
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

// Type-level check: LeadSubmission stays assignable from sanitizer output.
const _typeCheck: LeadSubmission = {
  source: "chatbot",
  name: "x",
  chat: { messageCount: 1 },
};
void _typeCheck;
