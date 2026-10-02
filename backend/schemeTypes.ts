/**
 * Shared types for the OKF-backed government-scheme recommendation engine.
 *
 * This module is intentionally dependency-free so it can be imported from
 * both server code (server/*) and browser code (src/components/*).
 */

// ---------------------------------------------------------------------------
// User profile
// ---------------------------------------------------------------------------

/** A structured, canonical user profile for scheme recommendation. */
export interface SchemeUserProfile {
  age?: number;
  gender?: string;
  state?: string;
  district?: string;

  /** Annual household income in INR. */
  annualIncome?: number;
  incomeCurrency?: "INR";

  occupation?: string;
  employmentStatus?: string;

  farmerStatus?: boolean;
  landholding?: {
    value: number;
    unit: "acre" | "hectare" | "bigha";
  };

  studentStatus?: boolean;
  educationLevel?: string;

  socialCategory?: string;
  disabilityStatus?: boolean;

  ruralUrban?: "rural" | "urban";

  businessStatus?: string;
  businessType?: string;

  /**
   * Rule-aligned business stage: "greenfield" (not yet started) or
   * "existing" (already operational). Mirrors applicant.business.stage.
   */
  businessStage?: "greenfield" | "existing";
  /** Estimated project cost in INR (machinery, construction, working capital). */
  projectCost?: number;
  maritalStatus?: string;
  /** Whether the user (or household) pays income tax — engine passthrough. */
  incomeTaxPayer?: boolean;

  familySize?: number;

  /** What the user wants to achieve, e.g. "start_business", "obtain_credit". */
  goals: string[];
  /** What the user needs, e.g. "loan", "subsidy", "insurance". */
  needs: string[];
}

/** Extra facts users may volunteer that the OKF rules reference. */
export interface SchemeUserProfileExtras {
  /** true when the user (or their household) pays income tax. */
  incomeTaxPayer?: boolean;
  /** true when the user owns cultivable agricultural land (per land records). */
  landOwnership?: boolean;
  /** Whether the user already has a bank account. */
  hasBankAccount?: boolean;
  /** Whether Aadhaar eKYC has been completed. */
  aadhaarEkyc?: boolean;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// OKF rule structures (mirrors the Government Scheme Profile extension)
// ---------------------------------------------------------------------------

export type RuleOperator =
  | "equals"
  | "not_equals"
  | "greater_than"
  | "greater_than_or_equal"
  | "less_than"
  | "less_than_or_equal"
  | "greater_than_semiqualitative"
  | "in"
  | "not_in"
  | "exists"
  | "not_exists"
  | "contains"
  | "between"
  | "not_between"
  | "is_true"
  | "is_false";

export type RuleType = "hard" | "soft" | "informational" | "conditional" | "unknown";

export interface RuleCondition {
  rule_id: string;
  field: string;
  operator: RuleOperator;
  value: unknown;
  type?: RuleType;
  source?: string;
  confidence?: "high" | "medium" | "low";
  note?: string;
  /** Inline condition string from OKF, e.g. "applicant.business.sector = manufacturing". */
  condition?: string;
}

export interface RuleGroup {
  all?: RuleElement[];
  any?: RuleElement[];
  not?: RuleElement[];
}

export type RuleElement = RuleCondition | RuleGroup;

export interface OkfExclusion {
  id: string;
  field: string;
  operator: RuleOperator;
  value?: unknown;
  detail?: string;
  effect?: string;
  source?: string;
  confidence?: string;
  condition?: string;
}

export interface OkfSource {
  id: string;
  resource: string;
  resourceUrl?: string;
  title: string;
  author?: string;
  last_modified?: string;
}

export interface OkfBenefit {
  benefit_id?: string;
  id?: string;
  type?: string;
  name?: string;
  amount?: {
    min_value?: number;
    max_value?: number;
    value?: number;
    currency?: string;
    frequency?: string;
  };
  [key: string]: unknown;
}

export interface OkfDocument {
  id?: string;
  name: string;
  required?: "always" | "conditional" | "potentially_requested" | "never";
  condition?: string;
}

export interface OkfApplication {
  channels?: string[];
  mode?: string[];
  info_portal?: string;
  facilitation_portal?: string;
  deadline?: string;
  [key: string]: unknown;
}

export interface OkfDiscovery {
  user_goals?: string[];
  keywords?: string[];
  semantic_topics?: string[];
}

// ---------------------------------------------------------------------------
// Normalized scheme knowledge (derived from OKF ingestion)
// ---------------------------------------------------------------------------

export interface NormalizedScheme {
  schemeId: string;
  slug: string;
  schemeName: string;
  officialName?: string;
  description: string;
  objective?: string;
  ministry?: string;
  governmentLevel?: string;
  categories: string[];
  benefitTypes: string[];
  targetGroups: string[];
  geographies: string[];
  applicantTypes: string[];
  discovery: OkfDiscovery;

  eligibilityRules: RuleGroup;
  exclusions: OkfExclusion[];
  benefits: OkfBenefit[];
  documents: OkfDocument[];
  application: OkfApplication;

  sources: OkfSource[];
  /** Preferred official portal for the "View official source" link. */
  primarySourceUrl?: string;
  primarySourceTitle?: string;

  status: string;
  staleAfter?: string;
  verifiedAt?: string;
  generatedAt?: string;
  eligibilityVersion?: string;
  effectiveFrom?: string;
  effectiveUntil?: string | null;
  okfVersion?: string;

  /** Source file path (provenance) of the scheme.md object, relative to repo root. */
  sourceFile: string;
}

export interface OkfKnowledgeBase {
  okfVersion: string;
  bundleVersion: string;
  generatedAt?: string;
  status?: string;
  schemes: NormalizedScheme[];
  /** schemeId -> scheme for O(1) lookup. */
  byId: Map<string, NormalizedScheme>;
}

// ---------------------------------------------------------------------------
// Eligibility evaluation
// ---------------------------------------------------------------------------

export type EligibilityStatus =
  | "eligible"
  | "potentially_eligible"
  | "needs_information"
  | "ineligible"
  | "unknown";

export interface RuleEvaluation {
  ruleId: string;
  field: string;
  operator: RuleOperator;
  /** "passed" | "failed" | "missing" (user attribute unknown) | "not_applicable" */
  result: "passed" | "failed" | "missing" | "not_applicable";
  ruleType: RuleType;
  userValue?: unknown;
  expectedValue?: unknown;
  reason?: string;
  /**
   * True when the pass relied on an ambiguous activity mapping (e.g. dairy →
   * agri_allied OR manufacturing OR trading). Such passes are provisional and
   * force the overall status down to potentially_eligible.
   */
  assumed?: boolean;
}

export interface MissingInfo {
  field: string;
  reason: string;
  /** Canonical user-profile field the user can provide, when mapped. */
  profileField?: string;
  question?: string;
  sourceId?: string;
}

export interface EligibilityResult {
  status: EligibilityStatus;
  matchedRules: RuleEvaluation[];
  failedRules: RuleEvaluation[];
  missingInformation: MissingInfo[];
  matchedExclusions: {
    id: string;
    detail?: string;
  }[];
  /** true when the OKF object itself lacked a machine-readable rule block. */
  unverified: boolean;
}

// ---------------------------------------------------------------------------
// Recommendation output
// ---------------------------------------------------------------------------

export interface RecommendationRelevance {
  score: number;
  reasons: string[];
}

export interface SchemeRecommendation {
  schemeId: string;
  schemeName: string;
  /** Backwards-compatible fields consumed by the existing frontend. */
  schemeDescription: string;
  ministry?: string;
  fundingRange?: string;
  expectedTimeline?: string;
  matchedSignals?: string[];
  recommendedNextStep?: string;

  eligibilityStatus: EligibilityStatus;

  relevance: RecommendationRelevance;

  eligibility: {
    matchedRules: RuleEvaluation[];
    failedRules: RuleEvaluation[];
    missingInformation: MissingInfo[];
  };

  benefits: OkfBenefit[];
  documents: OkfDocument[];
  application: OkfApplication;

  sources: OkfSource[];

  okf: {
    file: string;
    verifiedAt?: string;
    staleAfter?: string;
    status?: string;
    eligibilityVersion?: string;
  };
}

export interface FollowUpQuestion {
  field: string;
  question: string;
  reason: string;
  /** Optional controlled options to render as quick-reply chips. */
  options?: string[];
}

export interface KnowledgeBaseMeta {
  okfVersion: string;
  version: string;
  schemeCount: number;
  generatedAt?: string;
}

export interface RecommendSchemesResponse {
  recommendations: SchemeRecommendation[];
  followUpQuestions: FollowUpQuestion[];
  knowledgeBase: KnowledgeBaseMeta;
  /** Present when natural-language extraction produced a profile. */
  extractedProfile?: SchemeUserProfile;
  extractionSource?: "llm" | "heuristic" | "none";
}
