/**
 * Recommendation pipeline.
 *
 * Extraction -> retrieval (candidates) -> deterministic eligibility ->
 * ranking -> response with evidence, provenance and follow-up questions.
 * Eligibility always gates ranking: relevance never overrides a hard
 * exclusion.
 */

import type {
  EligibilityResult,
  KnowledgeBaseMeta,
  NormalizedScheme,
  OkfKnowledgeBase,
  RecommendSchemesResponse,
  SchemeRecommendation,
  SchemeUserProfile,
} from "../src/lib/schemeTypes";
import { evaluateSchemeEligibility } from "./eligibilityEngine";
import {
  DEFAULT_RANKING_WEIGHTS,
  SchemeIndex,
  rankSchemes,
  selectFollowUpQuestions,
} from "./retrieval";
import { extractRequirements } from "./requirementExtractor";

export interface RecommendInput {
  /** Existing assessment payload fields (lead flow, preserved). */
  data?: Record<string, unknown>;
  /** Structured profile attributes from the client, when provided. */
  profile?: Partial<SchemeUserProfile>;
  /** Free text from chat or the natural-language requirement field. */
  naturalLanguageInput?: string;
}

export interface PipelineResult {
  response: RecommendSchemesResponse;
  /** Canonical merged profile used for the evaluation (for session storage). */
  profile: SchemeUserProfile;
}

/** Seed a canonical profile from the legacy assessment form fields. */
export function profileFromFormData(data: Record<string, unknown>): Partial<SchemeUserProfile> {
  const profile: Partial<SchemeUserProfile> = {};
  const businessType = typeof data.businessType === "string" ? data.businessType.trim() : "";
  const description = typeof data.businessDescription === "string" ? data.businessDescription : "";
  if (businessType) profile.businessType = businessType;
  if (description) {
    (profile as Record<string, unknown>).businessDescription = description;
  }
  return profile;
}

function formatInr(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(amount % 10000000 === 0 ? 0 : 2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(amount % 100000 === 0 ? 0 : 2)} lakh`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(amount % 1000 === 0 ? 0 : 1)}K`;
  return `₹${amount}`;
}

function describeAmount(benefit: Record<string, unknown>): string | undefined {
  const amount = benefit.amount as {
    min_value?: number;
    max_value?: number;
    value?: number;
    unit?: string;
  } | undefined;
  if (!amount) return undefined;

  // Percentage-based benefits (e.g. PMEGP margin-money subsidy) are not
  // rupee amounts — render them as a share of the project cost.
  const unit = typeof amount.unit === "string" ? amount.unit.toLowerCase() : "";
  if (unit.includes("percent")) {
    const pct = amount.value ?? amount.max_value;
    if (pct != null) {
      const ofWhat = unit.replace(/percent_of_|percent_/g, "").replace(/_/g, " ").trim();
      return `${pct}% of ${ofWhat.length > 0 ? ofWhat : "project cost"}`;
    }
    return undefined;
  }

  if (amount.max_value != null && amount.min_value != null && amount.max_value !== amount.min_value) {
    // A nominal ₹1 minimum adds no information — present as a ceiling.
    if (amount.min_value < 1000) return `up to ${formatInr(amount.max_value)}`;
    return `${formatInr(amount.min_value)} – ${formatInr(amount.max_value)}`;
  }
  if (amount.max_value != null) return `up to ${formatInr(amount.max_value)}`;
  if (amount.value != null) return formatInr(amount.value);
  return undefined;
}

function computeFundingRange(scheme: NormalizedScheme): string | undefined {
  // Aggregate across benefits so multi-tier loan schemes (e.g. PMMY's four
  // Shishu→Tarun-Plus tiers) render one true span instead of the first tier.
  let globalMin: number | undefined;
  let globalMax: number | undefined;
  const percentDescriptions: string[] = [];

  for (const b of scheme.benefits) {
    const amount = (b as Record<string, unknown>).amount as
      | { min_value?: number; max_value?: number; value?: number; unit?: string }
      | undefined;
    if (!amount) continue;

    const unit = typeof amount.unit === "string" ? amount.unit.toLowerCase() : "";
    if (unit.includes("percent")) {
      const described = describeAmount(b as Record<string, unknown>);
      if (described && !percentDescriptions.includes(described)) percentDescriptions.push(described);
      continue;
    }

    const candidates = [amount.min_value, amount.value].filter(
      (v): v is number => typeof v === "number" && Number.isFinite(v),
    );
    for (const v of candidates) {
      globalMin = globalMin === undefined ? v : Math.min(globalMin, v);
    }
    if (typeof amount.max_value === "number" && Number.isFinite(amount.max_value)) {
      globalMax = globalMax === undefined ? amount.max_value : Math.max(globalMax, amount.max_value);
    }
  }

  const parts: string[] = [];
  if (globalMax !== undefined) {
    parts.push(globalMin !== undefined && globalMin >= 1000 && globalMin !== globalMax
      ? `${formatInr(globalMin)} – ${formatInr(globalMax)}`
      : `up to ${formatInr(globalMax)}`);
  }
  parts.push(...percentDescriptions);
  if (parts.length === 0) return undefined;
  return parts.slice(0, 2).join(" · ");
}

function computeExpectedTimeline(scheme: NormalizedScheme): string | undefined {
  const deadline = scheme.application.deadline;
  if (typeof deadline === "string" && deadline.length > 0) {
    return /rolling|none/i.test(deadline) ? "Rolling applications" : deadline;
  }
  return undefined;
}

function computeMatchedSignals(scheme: NormalizedScheme, eligibility: EligibilityResult): string[] {
  const signals: string[] = [];
  for (const rule of eligibility.matchedRules.slice(0, 3)) {
    if (rule.result === "passed") {
      const fieldLabel = rule.field.split(".").pop()?.replace(/_/g, " ") ?? rule.field;
      signals.push(`Eligible: ${fieldLabel}`);
    }
  }
  const goalSignals = scheme.discovery.user_goals?.slice(0, 2).map((g) => g.replace(/_/g, " ")) ?? [];
  signals.push(...goalSignals);
  return signals;
}

function computeNextStep(scheme: NormalizedScheme, eligibility: EligibilityResult): string | undefined {
  if (eligibility.status === "needs_information" && eligibility.missingInformation.length > 0) {
    const first = eligibility.missingInformation[0];
    if (first) {
      return first.question ?? `Provide ${first.field.split(".").pop()?.replace(/_/g, " ")}`;
    }
  }
  const portal = scheme.application.facilitation_portal ?? scheme.application.info_portal;
  if (typeof portal === "string") {
    return "Apply through the official portal listed below";
  }
  const channels = scheme.application.channels ?? scheme.application.mode ?? [];
  const channel = channels[0];
  if (channel) {
    return `Apply via ${channel.replace(/_/g, " ")}`;
  }
  return undefined;
}

export function isSchemeStale(scheme: NormalizedScheme, now = new Date()): boolean {
  if (!scheme.staleAfter) return false;
  const stale = new Date(scheme.staleAfter);
  if (Number.isNaN(stale.getTime())) return false;
  return stale.getTime() < now.getTime();
}

export class RecommendationEngine {
  private index: SchemeIndex;
  private kb: OkfKnowledgeBase;

  constructor(kb: OkfKnowledgeBase) {
    this.kb = kb;
    this.index = new SchemeIndex(kb);
  }

  get knowledgeBase(): OkfKnowledgeBase {
    return this.kb;
  }

  get knowledgeBaseMeta(): KnowledgeBaseMeta {
    return {
      okfVersion: this.kb.okfVersion,
      version: this.kb.bundleVersion || this.kb.generatedAt || "unknown",
      schemeCount: this.kb.schemes.length,
      generatedAt: this.kb.generatedAt,
    };
  }

  async recommend(input: RecommendInput): Promise<PipelineResult> {
    // 1. Build/extract the canonical profile
    const seed = {
      ...(input.profile ?? {}),
      ...profileFromFormData(input.data ?? {}),
    };
    let profile: SchemeUserProfile;
    let extractionSource: "llm" | "heuristic" | "none" = "none";
    let naturalText: string | undefined = input.naturalLanguageInput;

    const dataRecord = (input.data ?? {}) as Record<string, unknown>;
    const description = typeof dataRecord.businessDescription === "string" ? dataRecord.businessDescription : undefined;
    if (!naturalText && description && this.looksLikeRequirements(description)) {
      naturalText = description;
    }

    if (naturalText) {
      const extraction = await extractRequirements(naturalText, seed);
      profile = extraction.profile;
      extractionSource = extraction.source;
    } else {
      profile = {
        ...seed,
        goals: seed.goals ?? [],
        needs: seed.needs ?? [],
      } as SchemeUserProfile;
    }

    // 2. Retrieval — candidates only (never an eligibility decision)
    const queryTokens = this.index.buildQueryTokens(profile, naturalText ?? description);
    let retrieved = this.index.retrieve(queryTokens, 20);
    if (retrieved.length === 0) {
      // Graceful degradation: with no lexical signal, fall back to the whole
      // corpus so the deterministic engine can still filter by eligibility.
      retrieved = this.index.knowledgeBase.schemes.map((scheme) => ({
        scheme,
        score: 0.0001,
        matchedFields: [],
      }));
    }
    for (const r of retrieved) {
      this.retrievalScores.set(r.scheme.schemeId, r.score);
    }

    // 3. Deterministic eligibility for every candidate
    const evaluated = new Map<string, EligibilityResult>();
    for (const { scheme } of retrieved) {
      evaluated.set(
        scheme.schemeId,
        evaluateSchemeEligibility(scheme, profile as unknown as Record<string, unknown>),
      );
    }

    // 4. Remove hard-ineligible schemes from the recommendation list
    const surviving = retrieved.filter((r) => evaluated.get(r.scheme.schemeId)!.status !== "ineligible");
    const rankable = surviving.length > 0 ? surviving : retrieved;

    // 5. Rank the survivors (weights from configuration)
    const ranked = rankSchemes(rankable, profile, { weights: DEFAULT_RANKING_WEIGHTS });

    // 6. Build recommendations with full evidence
    const recommendations: SchemeRecommendation[] = ranked.map(({ scheme, score, reasons }) => {
      const eligibility = evaluated.get(scheme.schemeId)!;
      return this.buildRecommendation(scheme, eligibility, score, reasons);
    });

    // 7. Follow-up questions from unmet information across candidates
    const needsInformation = [...evaluated.entries()]
      .filter(([, e]) => e.status === "needs_information")
      .map(([schemeId, e]) => ({
        scheme: this.kb.byId.get(schemeId)!,
        missingFields: e.missingInformation.map((m) => m.field),
      }))
      .filter((x) => x.scheme);
    const followUpQuestions = selectFollowUpQuestions(needsInformation, profile, 2);

    return {
      response: {
        recommendations,
        followUpQuestions,
        knowledgeBase: this.knowledgeBaseMeta,
        extractedProfile: naturalText ? profile : undefined,
        extractionSource,
      },
      profile,
    };
  }

  private retrievalScores = new Map<string, number>();

  private looksLikeRequirements(text: string): boolean {
    return /(?:i |my |we |want|need|start|plan|look|seek|year|old|income|earn|loan|business|farmer|student)/i.test(text);
  }

  buildRecommendation(
    scheme: NormalizedScheme,
    eligibility: EligibilityResult,
    relevanceScore: number,
    reasons: string[],
  ): SchemeRecommendation {
    return {
      schemeId: scheme.schemeId,
      schemeName: scheme.schemeName,
      schemeDescription: scheme.description,
      ministry: scheme.ministry,
      fundingRange: computeFundingRange(scheme),
      expectedTimeline: computeExpectedTimeline(scheme),
      matchedSignals: computeMatchedSignals(scheme, eligibility),
      recommendedNextStep: computeNextStep(scheme, eligibility),
      eligibilityStatus: isSchemeStale(scheme) && eligibility.status === "eligible"
        ? "potentially_eligible"
        : eligibility.status,
      relevance: {
        score: relevanceScore,
        reasons,
      },
      eligibility: {
        matchedRules: eligibility.matchedRules,
        failedRules: eligibility.failedRules,
        missingInformation: eligibility.missingInformation,
      },
      benefits: scheme.benefits,
      documents: scheme.documents.filter((d) => d.required !== "never"),
      application: scheme.application,
      sources: scheme.sources,
      okf: {
        file: scheme.sourceFile,
        verifiedAt: scheme.verifiedAt,
        staleAfter: scheme.staleAfter,
        status: scheme.status,
        eligibilityVersion: scheme.eligibilityVersion,
      },
    };
  }
}
