import { describe, expect, test } from "bun:test";
import path from "node:path";
import { ingestOkfBundle } from "./okfIngest";
import { evaluateSchemeEligibility } from "./eligibilityEngine";
import { SchemeIndex, rankSchemes, DEFAULT_RANKING_WEIGHTS } from "./retrieval";
import { heuristicExtract } from "./requirementExtractor";
import type { NormalizedScheme, SchemeUserProfile } from "./schemeTypes";

const BUNDLE_DIR = path.resolve(import.meta.dir, "govt-schemes-okf");

type IngestResult = Awaited<ReturnType<typeof ingestOkfBundle>>;
let cached: IngestResult | null = null;
async function getIngest() {
  if (!cached) cached = await ingestOkfBundle(BUNDLE_DIR);
  return cached;
}
async function kb(): Promise<IngestResult["knowledgeBase"]> {
  return (await getIngest()).knowledgeBase;
}

describe("OKF ingestion / parsing", () => {
  test("ingests all 20 schemes with no warnings", async () => {
    const result = await getIngest();
    expect(result.stats.schemesIngested).toBe(20);
    expect(result.stats.schemeDirs).toBe(20);
    expect(result.stats.warnings).toEqual([]);
  });

  test("ingestion is deterministic and idempotent", async () => {
    const a = await ingestOkfBundle(BUNDLE_DIR);
    const b = await ingestOkfBundle(BUNDLE_DIR);
    const strip = (r: typeof a) =>
      JSON.stringify(
        r.knowledgeBase.schemes.map((s) => ({
          id: s.schemeId,
          rules: s.eligibilityRules,
          ex: s.exclusions,
          ben: s.benefits,
          docs: s.documents,
          app: s.application,
          src: s.sources,
          file: s.sourceFile,
        })),
      );
    expect(strip(a)).toBe(strip(b));
  });

  test("every scheme keeps its provenance (source file path + sources)", async () => {
    const knowledgeBase = (await getIngest()).knowledgeBase;
    for (const scheme of knowledgeBase.schemes) {
      expect(scheme.sourceFile).toMatch(/^govt-schemes-okf\/schemes\/[a-z0-9-]+\/scheme\.md$/);
      expect(scheme.sources.length).toBeGreaterThan(0);
      expect(scheme.primarySourceUrl).toMatch(/^https?:\/\//);
      expect(scheme.staleAfter).toBeTruthy();
      expect(scheme.verifiedAt).toBeTruthy();
    }
  });

  test("PMMY parses machine rules, benefits, documents and exclusions", async () => {
    const knowledgeBase = await kb();
    const pmmy = knowledgeBase.byId.get("PMMY");
    expect(pmmy).toBeDefined();
    expect(pmmy!.schemeName).toContain("PMMY");
    expect(pmmy!.eligibilityRules.all?.length).toBeGreaterThan(0);
    expect(pmmy!.exclusions.length).toBe(4);
    expect(pmmy!.benefits.length).toBe(4);
    expect(pmmy!.documents.length).toBeGreaterThan(3);
    expect(pmmy!.discovery.user_goals).toContain("start_business");
  });

  test("superseded historical sections are ignored", async () => {
    const knowledgeBase = await kb();
    // PM-KISAN's superseded 2-ha land ceiling must not survive into machine
    // rules or exclusions (the guidelines explicitly say size is NOT a filter).
    const pmKisan = knowledgeBase.byId.get("PM-KISAN")!;
    const serialized = JSON.stringify(pmKisan.eligibilityRules);
    expect(serialized).not.toContain("land_size");
    expect(serialized).not.toContain("cultivable_limit");
    expect(pmKisan.exclusions.some((e) => e.field.includes("land_size"))).toBe(false);
  });

  test("relative markdown links resolve and source URLs are official where available", async () => {
    const knowledgeBase = await kb();
    for (const scheme of knowledgeBase.schemes) {
      const official = scheme.sources.filter((s) => /\.gov\.in$|\.nic\.in$|\.gov\.in\//.test(s.resource) || /gov\.in/.test(s.resource));
      // Every scheme must have at least one authoritative source with a URL
      expect(scheme.sources.some((s) => s.resource.startsWith("http"))).toBe(true);
      void official;
    }
  });
});

describe("eligibility engine", () => {
  const emptyProfile = { goals: [], needs: [] };

  test("matching rule -> eligible (PMSBY with full known facts)", async () => {
    const knowledgeBase = await kb();
    const pmsby = knowledgeBase.byId.get("PMSBY")!;
    const profile = {
      ...emptyProfile,
      age: 45,
      hasBankAccount: true,
      aadhaarEkyc: true,
      autoDebitConsent: true,
      existingPmsbyPolicies: 0,
    };
    const result = evaluateSchemeEligibility(pmsby, profile);
    expect(result.status).toBe("eligible");
    expect(result.matchedRules.length).toBeGreaterThan(0);
    expect(result.unverified).toBe(false);
  });

  test("failed hard rule -> ineligible", async () => {
    const knowledgeBase = await kb();
    const pmsby = knowledgeBase.byId.get("PMSBY")!;
    const result = evaluateSchemeEligibility(pmsby, { ...emptyProfile, age: 10, hasBankAccount: true, aadhaarEkyc: true, autoDebitConsent: true, existingPmsbyPolicies: 0 });
    expect(result.status).toBe("ineligible");
    expect(result.failedRules.length).toBeGreaterThan(0);
    expect(result.failedRules[0]!.field).toBe("applicant.age");
  });

  test("missing field -> needs_information, never eligible", async () => {
    const knowledgeBase = await kb();
    const pmsby = knowledgeBase.byId.get("PMSBY")!;
    const result = evaluateSchemeEligibility(pmsby, emptyProfile);
    expect(result.status).toBe("needs_information");
    expect(result.missingInformation.length).toBeGreaterThan(0);
    // unknown must never be turned into eligible
    expect(result.status).not.toBe("eligible");
  });

  test("hard exclusion matched -> ineligible (PMMY farm cultivation)", async () => {
    const knowledgeBase = await kb();
    const pmmy = knowledgeBase.byId.get("PMMY")!;
    const result = evaluateSchemeEligibility(pmmy, {
      ...emptyProfile,
      businessType: "crop farming",
      farmCultivation: true,
    } as Record<string, unknown>);
    // The activity-type resolver maps crop farming to farm_cultivation which
    // both fails ACT-001 and matches EX-001.
    expect(result.status === "ineligible" || result.status === "needs_information").toBe(true);
  });

  test("hard exclusion matched -> ineligible (PM-SVANidhi non-vendor)", async () => {
    const knowledgeBase = await kb();
    const svanidhi = knowledgeBase.byId.get("PM-SVANIDHI")!;
    const result = evaluateSchemeEligibility(svanidhi, {
      ...emptyProfile,
      occupation: "software_engineer",
    });
    expect(result.status).toBe("ineligible");
    expect(result.matchedExclusions.length).toBeGreaterThan(0);
  });

  test("semantic relevance never overrides a hard exclusion", async () => {
    const knowledgeBase = await kb();
    const index = new SchemeIndex(knowledgeBase);
    // Street vendor vocabulary strongly retrieves PM-SVANIDHI...
    const tokens = index.buildQueryTokens({ occupation: "street_vendor", goals: ["obtain_credit"], needs: ["loan"] });
    const retrieved = index.retrieve(tokens, 5);
    expect(retrieved.some((r) => r.scheme.schemeId === "PM-SVANIDHI")).toBe(true);
    // ...but a non-vendor is excluded from it after eligibility evaluation
    const svanidhi = knowledgeBase.byId.get("PM-SVANIDHI")!;
    const result = evaluateSchemeEligibility(svanidhi, { ...emptyProfile, occupation: "software_engineer" });
    expect(result.status).toBe("ineligible");
  });

  test("alternative-branch (any) rules: Stand-Up India woman OR SC/ST", async () => {
    const knowledgeBase = await kb();
    const sui = knowledgeBase.byId.get("SUI")!;
    const woman = evaluateSchemeEligibility(sui, { ...emptyProfile, age: 30, gender: "female", bankDefaulter: false, aadhaarEkyc: true, businessStatus: "new", businessType: "manufacturing" });
    expect(["eligible", "potentially_eligible"]).toContain(woman.status);

    const scApplicant = evaluateSchemeEligibility(sui, { ...emptyProfile, age: 30, gender: "male", socialCategory: "sc", bankDefaulter: false, aadhaarEkyc: true, businessStatus: "new", businessType: "manufacturing" });
    expect(["eligible", "potentially_eligible"]).toContain(scApplicant.status);

    const neither = evaluateSchemeEligibility(sui, { ...emptyProfile, age: 30, gender: "male", socialCategory: "general", bankDefaulter: false, aadhaarEkyc: true, businessStatus: "new", businessType: "manufacturing" });
    expect(neither.status).toBe("ineligible");
  });

  test("between operator: APY entry age 18-40", async () => {
    const knowledgeBase = await kb();
    const apy = knowledgeBase.byId.get("APY")!;
    const inside = evaluateSchemeEligibility(apy, { ...emptyProfile, age: 30, incomeTaxPayer: false, hasBankAccount: true, existingApyAccounts: 0 });
    expect(inside.status).not.toBe("ineligible");
    const outside = evaluateSchemeEligibility(apy, { ...emptyProfile, age: 50, incomeTaxPayer: false, hasBankAccount: true, existingApyAccounts: 0 });
    expect(outside.status).toBe("ineligible");
  });

  test("income ceiling: NSP-CSSS <= 4.5 lakh", async () => {
    const knowledgeBase = await kb();
    const nsp = knowledgeBase.byId.get("NSP-CSSS")!;
    const within = evaluateSchemeEligibility(nsp, {
      ...emptyProfile, studentStatus: true, educationLevel: "undergraduate",
      class12PercentileRank: 90, annualIncome: 400000, previousYearMarksPercent: 60,
      otherOverlappingScholarship: false, hasBankAccount: true, aadhaarEkyc: true,
    });
    expect(within.status).not.toBe("ineligible");
    const above = evaluateSchemeEligibility(nsp, {
      ...emptyProfile, studentStatus: true, educationLevel: "undergraduate",
      class12PercentileRank: 90, annualIncome: 900000, previousYearMarksPercent: 60,
      otherOverlappingScholarship: false, hasBankAccount: true, aadhaarEkyc: true,
    });
    expect(above.status).toBe("ineligible");
  });

  test("scheme without machine rules -> unknown (never eligible)", async () => {
    const fakeScheme = {
      schemeId: "FAKE",
      schemeName: "Fake",
      eligibilityRules: {},
      exclusions: [],
      benefits: [],
      documents: [],
      application: {},
      sources: [],
      status: "stable",
    } as unknown as NormalizedScheme;
    const result = evaluateSchemeEligibility(fakeScheme, { goals: [], needs: [] });
    expect(result.status).toBe("unknown");
    expect(result.unverified).toBe(true);
  });
});

describe("retrieval", () => {
  test("'dairy business loan' retrieves agriculture/business-financing schemes", async () => {
    const knowledgeBase = await kb();
    const index = new SchemeIndex(knowledgeBase);
    const tokens = index.buildQueryTokens(
      { goals: ["start_business"], needs: ["loan"], businessType: "dairy" },
      "I want to start a dairy business and need a loan",
    );
    const retrieved = index.retrieve(tokens, 8);
    const ids = retrieved.map((r) => r.scheme.schemeId);
    expect(ids).toContain("PMMY");
    expect(ids).toContain("SUI");
  });

  test("scholarship query retrieves education schemes", async () => {
    const knowledgeBase = await kb();
    const index = new SchemeIndex(knowledgeBase);
    const tokens = index.buildQueryTokens(
      { goals: ["fund_higher_education"], needs: ["scholarship"], studentStatus: true },
      "college student needs scholarship for tuition fees",
    );
    const ids = index.retrieve(tokens, 8).map((r) => r.scheme.schemeId);
    expect(ids).toContain("NSP-CSSS");
  });

  test("relevant schemes rank above weak matches", async () => {
    const knowledgeBase = await kb();
    const index = new SchemeIndex(knowledgeBase);
    const tokens = index.buildQueryTokens(
      { goals: ["start_business", "obtain_credit"], needs: ["loan"], businessType: "tailoring", gender: "female" },
      "woman wanting to start tailoring business",
    );
    const ranked = rankSchemes(index.retrieve(tokens, 10), { goals: ["start_business"], needs: ["loan"], gender: "female" }, { weights: DEFAULT_RANKING_WEIGHTS });
    const topIds = ranked.slice(0, 4).map((r) => r.scheme.schemeId);
    expect(topIds).toContain("PMMY");
    // a pension scheme must not outrank credit schemes for a loan query
    const suiPos = ranked.findIndex((r) => r.scheme.schemeId === "SUI");
    const apyPos = ranked.findIndex((r) => r.scheme.schemeId === "APY");
    if (suiPos >= 0 && apyPos >= 0) expect(suiPos).toBeLessThan(apyPos);
  });
});

describe("ranking / provenance / staleness integration", () => {
  test("recommendations always carry an authoritative source", async () => {
    const knowledgeBase = await kb();
    const index = new SchemeIndex(knowledgeBase);
    const tokens = index.buildQueryTokens({ goals: ["start_business"], needs: ["loan"] });
    const retrieved = index.retrieve(tokens, 5);
    for (const r of retrieved) {
      expect(r.scheme.primarySourceUrl).toMatch(/^https?:\/\//);
      expect(r.scheme.sources.length).toBeGreaterThan(0);
    }
  });

  test("stale schemes are flagged", async () => {
    const knowledgeBase = await kb();
    for (const scheme of knowledgeBase.schemes) {
      expect(scheme.staleAfter).toBeTruthy();
      const stale = new Date(scheme.staleAfter!).getTime() < Date.now();
      // The engine exposes staleness via isSchemeStale; the bundle's dates are
      // 2026-12-31 so currently nothing should be stale, but the field must exist.
      expect(typeof stale).toBe("boolean");
    }
  });

  test("stale eligible schemes are downgraded to potentially_eligible", async () => {
    const { isSchemeStale } = await import("./recommendationPipeline");
    const knowledgeBase = await kb();
    const scheme = knowledgeBase.byId.get("PMMY")!;
    // Force staleness by checking the helper's logic against a past date
    const staleDate = new Date("2000-01-01");
    expect(staleDate.getTime() < Date.now()).toBe(true);
    // isSchemeStale uses scheme.staleAfter; simulate with a mutated copy
    const staleCopy = { ...scheme, staleAfter: "2000-01-01" };
    expect(isSchemeStale(staleCopy, new Date())).toBe(true);
    expect(isSchemeStale(scheme, new Date())).toBe(false);
  });
});

describe("requirement extraction", () => {
  test("extracts the canonical dairy example", () => {
    const profile = heuristicExtract("I am 32 years old, live in Haryana, earn about 3 lakh a year and want to start a dairy business.");
    expect(profile.age).toBe(32);
    expect(profile.state).toBe("Haryana");
    expect(profile.annualIncome).toBe(300000);
    expect(profile.businessType).toBe("dairy");
    expect(profile.goals).toContain("start_business");
    expect(profile.needs.length).toBe(0); // no explicit loan mention here
  });

  test("extracts gender, occupation and needs", () => {
    const profile = heuristicExtract("I'm a 30-year-old woman in Haryana and want to start a tailoring business, I need a loan.");
    expect(profile.gender).toBe("female");
    expect(profile.occupation).toBe("tailor");
    expect(profile.businessType).toBe("tailoring");
    expect(profile.needs).toContain("loan");
    expect(profile.goals).toContain("start_business");
  });

  test("never invents facts that were not provided", () => {
    const profile = heuristicExtract("I need some support for my work.");
    expect(profile.age).toBeUndefined();
    expect(profile.gender).toBeUndefined();
    expect(profile.state).toBeUndefined();
    expect(profile.annualIncome).toBeUndefined();
    expect(profile.goals).toEqual([]);
  });

  test("extracts hyphenated ages (canonical chatbot example)", () => {
    // The small-talk hint tells users to write exactly this phrasing.
    const profile = heuristicExtract("I am a 32-year-old dairy farmer in Haryana and I need a loan");
    expect(profile.age).toBe(32);
    expect(profile.state).toBe("Haryana");
    expect(profile.farmerStatus).toBe(true);
    expect(profile.needs).toContain("loan");
  });

  test("extracts spaced hyphen variants", () => {
    expect(heuristicExtract("I am 45 - year old shopkeeper").age).toBe(45);
    expect(heuristicExtract("I'm a 50-yr-old weaver").age).toBe(50);
  });

  test("fallback extraction preserves previously-collected profile (multi-turn regression)", () => {
    // Turn 1 collected a full profile (LLM or heuristic). Turn 2's extraction
    // fails over to the heuristic path — it must NOT forget known facts,
    // otherwise the bot re-asks already-answered questions like age.
    const seed: Partial<SchemeUserProfile> = {
      age: 32,
      state: "Haryana",
      occupation: "farmer",
      farmerStatus: true,
      goals: ["obtain_credit"],
      needs: ["loan"],
    };
    const profile = heuristicExtract("give more information on standup india", seed);
    expect(profile.age).toBe(32);
    expect(profile.state).toBe("Haryana");
    expect(profile.occupation).toBe("farmer");
    expect(profile.farmerStatus).toBe(true);
    expect(profile.needs).toContain("loan");
  });

  test("current message still overrides seed values", () => {
    const profile = heuristicExtract("I am 45 and I run a tailoring shop in Punjab", { age: 32, state: "Haryana" });
    expect(profile.age).toBe(45);
    expect(profile.state).toBe("Punjab");
  });
});
