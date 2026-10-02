/**
 * Semantic retrieval, ranking and follow-up-question selection.
 *
 * Retrieval combines the user's free-text description + goals + needs +
 * occupation + business type into a weighted query and scores OKF scheme
 * documents by token overlap across their indexed fields (descriptions,
 * objectives, target groups, benefits, discovery metadata). This is a
 * deterministic lexical-semantic index over the OKF content — no vectors,
 * no network. Retrieval is CANDIDATE SELECTION ONLY; eligibility is decided
 * separately by the deterministic engine.
 */

import type {
  FollowUpQuestion,
  NormalizedScheme,
  OkfKnowledgeBase,
  SchemeUserProfile,
} from "./schemeTypes";

// ---------------------------------------------------------------------------
// Tokenization
// ---------------------------------------------------------------------------

const STOP_WORDS = new Set([
  "i", "me", "my", "we", "our", "you", "your", "the", "a", "an", "and", "or",
  "to", "for", "of", "in", "on", "at", "is", "am", "are", "was", "were", "be",
  "want", "wanted", "need", "needs", "looking", "get", "getting", "have",
  "has", "do", "does", "can", "will", "would", "like", "about", "with",
  "this", "that", "it", "as", "by", "from", "some", "any", "please", "help",
  "also", "there", "their", "they", "them", "he", "she", "his", "her",
]);

/** Domain synonyms expand the query beyond exact keyword matching. */
const SYNONYMS: Record<string, string[]> = {
  dairy: ["dairy", "cattle", "livestock", "milk", "animal_husbandry", "animal husbandry"],
  loan: ["credit", "financing", "finance", "collateral_free", "collateral free"],
  subsidy: ["subsidy", "margin_money", "margin money", "grant"],
  insurance: ["insurance", "cover", "policy"],
  pension: ["pension", "old_age", "old age", "retirement"],
  scholarship: ["scholarship", "education", "student", "stipend"],
  housing: ["house", "housing", "home", "pucca", "residence"],
  health: ["health", "medical", "hospital", "treatment", "hospitalisation"],
  farming: ["agriculture", "agricultural", "farmer", "crop", "cultivation", "kisan"],
  business: ["enterprise", "entrepreneurship", "self_employment", "self employment", "micro_enterprise", "micro enterprise", "msme"],
  startup: ["startup", "start_up", "start up", "incubation", "innovation"],
  tailoring: ["tailor", "tailoring", "sewing", "stitching", "garment", "artisan"],
  vendor: ["vendor", "vending", "hawker", "street_vendor", "street vendor"],
  cooking: ["cooking", "lpg", "gas", "fuel", "clean_cooking"],
  girl: ["girl", "daughter", "girl_child"],
  woman: ["woman", "women", "female", "mahila"],
  accident: ["accident", "disability", "death cover"],
  life: ["life_cover", "life cover", "life insurance"],
  tools: ["toolkit", "tools", "equipment", "machinery"],
  skill: ["skill", "training", "skilling", "upskilling"],
  maternity: ["maternity", "pregnancy", "pregnant", "mother"],
  "old": ["senior", "elderly", "old_age", "aged"],
};

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));
}

function expandTokens(tokens: string[]): Set<string> {
  const expanded = new Set(tokens);
  for (const t of tokens) {
    const syn = SYNONYMS[t];
    if (syn) for (const s of syn) for (const st of tokenize(s)) expanded.add(st);
  }
  return expanded;
}

// ---------------------------------------------------------------------------
// Scheme index (built once per server process)
// ---------------------------------------------------------------------------

interface IndexedField {
  name: string;
  weight: number;
  tokens: Set<string>;
}

interface IndexedScheme {
  scheme: NormalizedScheme;
  fields: IndexedField[];
}

export class SchemeIndex {
  private entries: IndexedScheme[] = [];
  private _knowledgeBase: OkfKnowledgeBase;

  constructor(kb: OkfKnowledgeBase) {
    this._knowledgeBase = kb;
    for (const scheme of kb.schemes) {
      this.entries.push({ scheme, fields: this.buildFields(scheme) });
    }
  }

  get size(): number {
    return this.entries.length;
  }

  get knowledgeBase(): OkfKnowledgeBase {
    return this._knowledgeBase;
  }

  private buildFields(scheme: NormalizedScheme): IndexedField[] {
    const fields: IndexedField[] = [];

    const add = (name: string, weight: number, text: string) => {
      const tokens = expandTokens(tokenize(text));
      if (tokens.size > 0) fields.push({ name, weight, tokens });
    };

    add("discovery.keywords", 4.0, (scheme.discovery.keywords ?? []).join(" "));
    add("discovery.user_goals", 3.5, (scheme.discovery.user_goals ?? []).join(" "));
    add("scheme_name", 3.0, `${scheme.schemeName} ${scheme.officialName ?? ""}`);
    add("description", 2.5, scheme.description);
    add("discovery.semantic_topics", 2.5, (scheme.discovery.semantic_topics ?? []).join(" "));
    add("objective", 2.0, scheme.objective ?? "");
    add("target_groups", 2.0, scheme.targetGroups.join(" "));
    add("categories", 1.8, scheme.categories.join(" "));
    add("benefit_types", 1.6, scheme.benefitTypes.join(" "));
    add("benefits", 1.2, scheme.benefits.map((b) => `${b.name ?? ""} ${b.type ?? ""}`).join(" "));
    add("eligibility_summary", 0.8, scheme.exclusions.map((e) => e.detail ?? "").join(" "));

    return fields;
  }

  /**
   * Build the retrieval query from the user's inputs. The query combines the
   * business description, goals, needs, occupation and business type.
   */
  buildQueryTokens(profile: Partial<SchemeUserProfile>, description?: string): Set<string> {
    const parts: string[] = [];
    if (description) parts.push(description);
    if (profile.goals?.length) parts.push(profile.goals.join(" "));
    if (profile.needs?.length) parts.push(profile.needs.join(" "));
    if (profile.occupation) parts.push(profile.occupation);
    if (profile.businessType) parts.push(profile.businessType);
    return expandTokens(tokenize(parts.join(" ")));
  }

  /**
   * Retrieve candidate schemes ranked by lexical-semantic overlap.
   * Returns all schemes with score >= 0, sorted descending (deterministic;
   * ties broken by schemeId for stable ordering).
   */
  retrieve(queryTokens: Set<string>, limit = 20): { scheme: NormalizedScheme; score: number; matchedFields: string[] }[] {
    const scored = this.entries.map(({ scheme, fields }) => {
      let score = 0;
      const matchedFields: string[] = [];
      for (const field of fields) {
        let fieldHits = 0;
        for (const token of queryTokens) {
          if (field.tokens.has(token)) fieldHits++;
        }
        if (fieldHits > 0) {
          score += fieldHits * field.weight;
          matchedFields.push(field.name);
        }
      }
      return { scheme, score, matchedFields };
    });

    scored.sort((a, b) => b.score - a.score || a.scheme.schemeId.localeCompare(b.scheme.schemeId));

    return scored.filter((s) => s.score > 0).slice(0, limit);
  }
}

// ---------------------------------------------------------------------------
// Ranking (configurable weights)
// ---------------------------------------------------------------------------

export interface RankingWeights {
  goalMatch: number;
  benefitMatch: number;
  userAttributeMatch: number;
  geographicMatch: number;
  freshness: number;
}

export const DEFAULT_RANKING_WEIGHTS: RankingWeights = {
  goalMatch: 0.35,
  benefitMatch: 0.25,
  userAttributeMatch: 0.15,
  geographicMatch: 0.15,
  freshness: 0.10,
};

export interface RankingConfig {
  weights: RankingWeights;
}

function benefitMatchScore(scheme: NormalizedScheme, profile: Partial<SchemeUserProfile>): number {
  const needs = new Set((profile.needs ?? []).map((n) => n.toLowerCase()));
  if (needs.size === 0) return 0.5; // neutral when no needs stated
  const benefitTokens = new Set<string>();
  for (const bt of scheme.benefitTypes) benefitTokens.add(bt.toLowerCase());
  for (const b of scheme.benefits) {
    if (typeof b.type === "string") benefitTokens.add(b.type.toLowerCase());
  }
  const alias: Record<string, string[]> = {
    loan: ["loan", "credit"],
    subsidy: ["subsidy", "cash-transfer", "grant", "margin-money"],
    insurance: ["insurance", "crop-insurance", "accident-insurance", "life-insurance", "health-insurance"],
    pension: ["pension", "cash-transfer"],
    scholarship: ["scholarship", "cash-transfer"],
    cash: ["cash-transfer"],
    housing: ["housing", "subsidy"],
  };
  let hits = 0;
  for (const need of needs) {
    const aliases = alias[need] ?? [need];
    if (aliases.some((a) => benefitTokens.has(a))) hits++;
  }
  return hits / needs.size;
}

function userAttributeMatchScore(scheme: NormalizedScheme, profile: Partial<SchemeUserProfile>): number {
  const targets = new Set(scheme.targetGroups.map((t) => t.toLowerCase()));
  if (targets.size === 0) return 0.5;
  let hits = 0;
  let checks = 0;
  const check = (cond: boolean, group: string) => {
    checks++;
    if (cond && targets.has(group)) hits++;
  };
  check(profile.gender === "female", "women");
  check(profile.gender === "female", "pregnant_women_and_lactating_mothers");
  check(profile.farmerStatus === true, "farmer");
  check(profile.studentStatus === true, "student");
  check(profile.age != null && profile.age >= 60, "senior_citizen");
  check(profile.disabilityStatus === true, "person_with_disability");
  check(profile.occupation === "artisan" || profile.occupation === "tailor", "artisan");
  check(profile.occupation === "street_vendor", "street_vendor");
  check(profile.socialCategory === "sc" || profile.socialCategory === "st", "sc_st");
  check(profile.ruralUrban === "rural", "rural_household");
  check(profile.socialCategory != null, "low_income_household");
  if (checks === 0) return 0.5;
  return Math.min(1, hits / Math.min(3, Math.max(1, checks / 2)));
}

function geographicMatchScore(scheme: NormalizedScheme, profile: Partial<SchemeUserProfile>): number {
  const geos = scheme.geographies.map((g) => g.toLowerCase());
  if (geos.includes("in")) return 1; // nationwide
  if (profile.state && geos.includes(profile.state.toLowerCase())) return 1;
  return 0.4;
}

function freshnessScore(scheme: NormalizedScheme, now = new Date()): number {
  if (!scheme.staleAfter) return 0.5;
  const stale = new Date(scheme.staleAfter);
  if (Number.isNaN(stale.getTime())) return 0.5;
  return stale.getTime() >= now.getTime() ? 1 : 0;
}

export function rankSchemes(
  candidates: { scheme: NormalizedScheme; score: number; matchedFields: string[] }[],
  profile: Partial<SchemeUserProfile>,
  config: RankingConfig = { weights: DEFAULT_RANKING_WEIGHTS },
): { scheme: NormalizedScheme; score: number; matchedFields: string[]; reasons: string[] }[] {
  const { weights } = config;
  const maxSemantic = Math.max(1, ...candidates.map((c) => c.score));

  const ranked = candidates.map((c) => {
    const semantic = c.score / maxSemantic;
    const goal = goalMatchScore(c.scheme, profile);
    const benefit = benefitMatchScore(c.scheme, profile);
    const attr = userAttributeMatchScore(c.scheme, profile);
    const geo = geographicMatchScore(c.scheme, profile);
    const fresh = freshnessScore(c.scheme);

    const total =
      semantic * (weights.goalMatch + weights.benefitMatch) +
      goal * weights.goalMatch +
      benefit * weights.benefitMatch +
      attr * weights.userAttributeMatch +
      geo * weights.geographicMatch +
      fresh * weights.freshness;

    return { ...c, score: total, reasons: buildReasons(c.scheme, profile, c.matchedFields) };
  });

  ranked.sort((a, b) => b.score - a.score || a.scheme.schemeId.localeCompare(b.scheme.schemeId));
  return ranked;
}

function goalMatchScore(scheme: NormalizedScheme, profile: Partial<SchemeUserProfile>): number {
  const goals = new Set((profile.goals ?? []).map((g) => g.toLowerCase()));
  if (goals.size === 0) return 0.5;
  const schemeGoals = new Set((scheme.discovery.user_goals ?? []).map((g) => g.toLowerCase()));
  let hits = 0;
  for (const g of goals) if (schemeGoals.has(g)) hits++;
  return hits / goals.size;
}

function buildReasons(
  scheme: NormalizedScheme,
  profile: Partial<SchemeUserProfile>,
  matchedFields: string[],
): string[] {
  const reasons: string[] = [];
  const goals = new Set((profile.goals ?? []).map((g) => g.toLowerCase()));
  const matchedGoals = (scheme.discovery.user_goals ?? []).filter((g) => goals.has(g.toLowerCase()));
  for (const g of matchedGoals.slice(0, 2)) {
    reasons.push(`Matches your goal: ${humanize(g)}`);
  }
  const needs = new Set((profile.needs ?? []).map((n) => n.toLowerCase()));
  if (needs.size > 0 && scheme.benefitTypes.some((bt) => needs.has(bt.toLowerCase()))) {
    reasons.push(`Provides ${scheme.benefitTypes.filter((bt) => needs.has(bt.toLowerCase())).join(" and ")} support`);
  }
  if (profile.occupation && scheme.targetGroups.some((t) => t.includes("artisan")) && /artisan|tailor|craft/.test(profile.occupation)) {
    reasons.push("Targeted at traditional artisans and craft workers");
  }
  if (profile.farmerStatus === true && scheme.categories.includes("agriculture")) {
    reasons.push("Designed for farming households");
  }
  if (profile.gender === "female" && scheme.categories.includes("women-and-child")) {
    reasons.push("Includes dedicated provisions for women");
  }
  if (reasons.length === 0) {
    // Fall back to the strongest matched index fields
    const fieldLabel: Record<string, string> = {
      "discovery.keywords": "Matches key terms from your requirement",
      "discovery.user_goals": "Aligned with your stated goals",
      scheme_name: "Directly relevant scheme",
      description: "Relevant to your described requirement",
      "discovery.semantic_topics": "Covers related topics from your requirement",
      objective: "Objective overlaps with your requirement",
      target_groups: "Designed for people in your situation",
      categories: "Belongs to a relevant scheme category",
      benefit_types: "Provides the type of support you seek",
      benefits: "Offers comparable benefits",
      eligibility_summary: "Related eligibility considerations",
    };
    for (const f of matchedFields.slice(0, 2)) {
      if (fieldLabel[f]) reasons.push(fieldLabel[f]);
    }
  }
  return reasons.slice(0, 4);
}

function humanize(token: string): string {
  return token.replace(/_/g, " ");
}

// ---------------------------------------------------------------------------
// Follow-up question engine
// ---------------------------------------------------------------------------

interface QuestionImpact {
  field: string;
  question: string;
  options?: string[];
  /** Rough count of candidate schemes whose evaluation this field unlocks. */
  impact: number;
  reason: string;
}

const QUESTION_LIBRARY: Record<string, Omit<QuestionImpact, "impact">> = {
  businessType: {
    field: "businessType",
    question: "What type of business or occupation are you involved in?",
    reason: "This information affects eligibility for several matching schemes.",
  },
  gender: {
    field: "gender",
    question: "What is your gender?",
    options: ["female", "male", "other"],
    reason: "Several matching schemes have gender-specific eligibility.",
  },
  age: {
    field: "age",
    question: "What is your age?",
    reason: "Age determines eligibility for several matching schemes.",
  },
  state: {
    field: "state",
    question: "Which state do you live in?",
    reason: "Your state affects how some schemes are implemented.",
  },
  annualIncome: {
    field: "annualIncome",
    question: "What is your approximate annual household income?",
    reason: "Income ceilings apply to some matching schemes.",
  },
  ruralUrban: {
    field: "ruralUrban",
    question: "Do you live in a rural or urban area?",
    options: ["rural", "urban"],
    reason: "Some matching schemes are area-specific.",
  },
  farmerStatus: {
    field: "farmerStatus",
    question: "Do you own or cultivate agricultural land?",
    options: ["yes", "no"],
    reason: "This determines eligibility for agricultural schemes.",
  },
  studentStatus: {
    field: "studentStatus",
    question: "Are you currently a student?",
    options: ["yes", "no"],
    reason: "Scholarship schemes require student status.",
  },
  socialCategory: {
    field: "socialCategory",
    question: "Which social category do you belong to?",
    options: ["general", "obc", "sc", "st"],
    reason: "Some matching schemes have category-specific provisions.",
  },
  businessStage: {
    field: "businessStage",
    question: "Is this a new business (not yet started) or an existing one?",
    options: ["new business", "existing business"],
    reason: "Several schemes only fund businesses that have not started yet.",
  },
  projectCost: {
    field: "projectCost",
    question: "What is your approximate total project cost (machinery, construction, working capital)?",
    reason: "Funding limits differ per scheme — this sizes your matches correctly.",
  },
  employmentStatus: {
    field: "employmentStatus",
    question: "What is your current employment status?",
    options: ["salaried", "self employed", "unemployed", "student", "homemaker", "retired"],
    reason: "Employment status decides eligibility for several schemes.",
  },
  incomeTaxPayer: {
    field: "incomeTaxPayer",
    question: "Do you or your household pay income tax?",
    options: ["yes", "no"],
    reason: "Tax status is a hard condition for a few matching schemes.",
  },
  maritalStatus: {
    field: "maritalStatus",
    question: "What is your marital status?",
    options: ["single", "married", "widow", "divorced"],
    reason: "A few matching schemes have marital-status provisions.",
  },
  educationLevel: {
    field: "educationLevel",
    question: "What is your highest level of education?",
    options: ["below class 5", "class 8", "class 10", "class 12", "undergraduate", "postgraduate"],
    reason: "Education level unlocks or restricts some schemes.",
  },
};

/**
 * Select up to `max` follow-up questions. Prioritises questions that:
 * 1. affect multiple candidate schemes,
 * 2. determine hard eligibility,
 * 3. significantly reduce uncertainty,
 * 4. are easy for the user to answer.
 */
export function selectFollowUpQuestions(
  needsInformation: { scheme: NormalizedScheme; missingFields: string[] }[],
  profile: Partial<SchemeUserProfile>,
  max = 2,
): FollowUpQuestion[] {
  const impact = new Map<string, number>();
  for (const { missingFields } of needsInformation) {
    for (const field of missingFields) {
      const qm = FIELD_TO_QUESTION.get(field);
      if (!qm) continue;
      // Only ask about fields the user hasn't already provided
      if (profileFieldKnown(qm, profile)) continue;
      impact.set(qm, (impact.get(qm) ?? 0) + 1);
    }
  }

  const sorted = [...impact.entries()]
    .map(([field, count]) => ({ ...QUESTION_LIBRARY[field], impact: count }))
    .filter((q) => q && q.question)
    .sort((a, b) => b.impact - a.impact)
    .slice(0, max);

  return sorted.map((q) => ({
    field: q.field ?? "",
    question: q.question ?? "",
    reason: q.reason ?? "",
    ...(q.options ? { options: q.options } : {}),
  }));
}

const FIELD_TO_QUESTION = new Map<string, string>([
  ["applicant.business.sector", "businessType"],
  ["applicant.business.activity_type", "businessType"],
  ["applicant.business.stage", "businessStage"],
  ["applicant.business.project_cost", "projectCost"],
  ["applicant.gender", "gender"],
  ["applicant.age", "age"],
  ["applicant.state", "state"],
  ["applicant.state_domicile", "state"],
  ["applicant.household_income", "annualIncome"],
  ["applicant.rural_urban_status", "ruralUrban"],
  ["applicant.land_ownership", "farmerStatus"],
  ["applicant.farmer_status", "farmerStatus"],
  ["applicant.student_status", "studentStatus"],
  ["applicant.social_category", "socialCategory"],
  ["applicant.occupation", "businessType"],
  ["applicant.employment_status", "employmentStatus"],
  ["applicant.income_tax_payer", "incomeTaxPayer"],
  ["applicant.household.income_tax_payer_member", "incomeTaxPayer"],
  ["applicant.income_tax_payer_last_5_years", "incomeTaxPayer"],
  ["applicant.marital_status", "maritalStatus"],
  ["applicant.educational_level", "educationLevel"],
]);

function profileFieldKnown(field: string, profile: Partial<SchemeUserProfile>): boolean {
  switch (field) {
    // The "business/occupation" question also covers applicant.occupation:
    // a user who said "dairy farmer" already answered it.
    case "businessType":
      return (profile.businessType != null && profile.businessType !== "") || profile.occupation != null;
    case "gender": return profile.gender != null;
    case "age": return profile.age != null;
    case "state": return profile.state != null;
    case "annualIncome": return profile.annualIncome != null;
    case "ruralUrban": return profile.ruralUrban != null;
    case "farmerStatus": return profile.farmerStatus != null || (profile as Record<string, unknown>).landOwnership != null;
    case "studentStatus": return profile.studentStatus != null;
    case "socialCategory": return profile.socialCategory != null;
    case "businessStage": return profile.businessStage != null;
    case "projectCost": return profile.projectCost != null;
    case "employmentStatus": return profile.employmentStatus != null;
    case "incomeTaxPayer": return (profile as Record<string, unknown>).incomeTaxPayer != null;
    case "maritalStatus": return profile.maritalStatus != null;
    case "educationLevel": return profile.educationLevel != null;
    default: return false;
  }
}