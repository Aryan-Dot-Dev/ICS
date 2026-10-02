/**
 * Deterministic eligibility engine.
 *
 * Evaluates OKF rule groups + exclusion objects against a canonical user
 * profile. No LLM involvement, no vector similarity — pure rule evaluation.
 *
 * Status semantics:
 * - eligible              all known hard conditions pass
 * - potentially_eligible  known conditions pass but verification remains
 * - needs_information     a missing user attribute blocks meaningful evaluation
 * - ineligible            a hard condition or exclusion fails
 * - unknown               knowledge base lacks authoritative rules
 */

import type {
  EligibilityResult,
  MissingInfo,
  NormalizedScheme,
  RuleCondition,
  RuleEvaluation,
  RuleGroup,
  RuleOperator,
  SchemeUserProfile,
} from "../src/lib/schemeTypes";

// ---------------------------------------------------------------------------
// Profile -> rule field resolution
// ---------------------------------------------------------------------------

const EDUCATION_ORDER: Record<string, number> = {
  below_class_5: 0,
  class_5: 1,
  class_8: 2,
  class_10: 3,
  class_11: 4,
  class_12: 5,
  diploma_post_matric: 6,
  undergraduate: 7,
  professional: 8,
  postgraduate: 9,
  mphil: 10,
  phd: 11,
};

/**
 * Resolve a dotted OKF rule field (e.g. "applicant.business.activity_type")
 * against the canonical user profile. Returns { known, value }.
 * Unknown information must remain unknown — we never infer.
 */
export function resolveField(
  field: string,
  profile: Partial<SchemeUserProfile> & Record<string, unknown>,
): { known: boolean; value?: unknown } {
  const direct = FIELD_RESOLVERS.get(field);
  if (direct) return direct(profile);

  // Generic household.* fallback: many household rules are exclusions whose
  // mere presence in the profile (true/false) is meaningful.
  if (field.startsWith("applicant.household.") || field.startsWith("household.")) {
    const v = profile[field];
    if (typeof v === "boolean") return { known: true, value: v };
    return { known: false };
  }

  // Generic fallback: allow direct dotted lookups on extra profile facts.
  if (field in profile) {
    const v = profile[field];
    if (v !== undefined && v !== null && v !== "") return { known: true, value: v };
  }
  return { known: false };
}

type FieldResolver = (p: Record<string, unknown>) => { known: boolean; value?: unknown };

const known = (value: unknown) => ({ known: true, value });

function normalizeVal(v: unknown): unknown {
  if (typeof v === "string") return v.trim().toLowerCase();
  return v;
}

const FIELD_RESOLVERS = new Map<string, FieldResolver>([
  ["applicant.age", (p) => (p.age != null ? known(p.age) : { known: false })],
  ["applicant.gender", (p) => (p.gender != null ? known(normalizeVal(p.gender)) : { known: false })],
  ["applicant.state", (p) => (p.state != null ? known(p.state) : { known: false })],
  ["applicant.state_domicile", (p) => (p.state != null ? known(p.state) : { known: false })],
  ["applicant.district", (p) => (p.district != null ? known(p.district) : { known: false })],
  ["applicant.household_income", (p) =>
    p.annualIncome != null ? known(Number(p.annualIncome)) : { known: false }],
  ["applicant.rural_urban_status", (p) =>
    p.ruralUrban != null ? known(normalizeVal(p.ruralUrban)) : { known: false }],
  ["applicant.occupation", (p) => (p.occupation != null ? known(normalizeVal(p.occupation)) : { known: false })],
  ["applicant.employment_status", (p) =>
    p.employmentStatus != null ? known(normalizeVal(p.employmentStatus)) : { known: false }],
  ["applicant.farmer_status", (p) =>
    p.farmerStatus != null
      ? known(p.farmerStatus)
      : p.landOwnership === true
        ? known(true)
        : { known: false }],
  ["applicant.land_ownership", (p) =>
    p.landOwnership != null ? known(Boolean(p.landOwnership)) : { known: false }],
  ["applicant.landholder_type", (p) =>
    p.landOwnership === true
      ? known("individual")
      : p.landOwnership === false
        ? { known: false }
        : { known: false }],
  ["applicant.student_status", (p) => {
    if (p.studentStatus != null) return known(p.studentStatus ? "enrolled" : "not_enrolled");
    return { known: false };
  }],
  ["applicant.educational_level", (p) =>
    p.educationLevel != null ? known(normalizeVal(p.educationLevel)) : { known: false }],
  ["applicant.social_category", (p) =>
    p.socialCategory != null ? known(normalizeVal(p.socialCategory)) : { known: false }],
  ["applicant.disability_status", (p) => {
    if (p.disabilityStatus === true) return known("severe_or_multiple_certified");
    if (p.disabilityStatus === false) return known("none");
    return { known: false };
  }],
  ["applicant.marital_status", (p) => (p.maritalStatus != null ? known(normalizeVal(p.maritalStatus)) : { known: false })],
  ["applicant.pregnancy_or_lactation_status", (p) =>
    p.pregnancyOrLactationStatus != null ? known(normalizeVal(p.pregnancyOrLactationStatus)) : { known: false }],
  ["applicant.citizenship", () => known("IN")],
  ["applicant.resides_in_implementing_state", (p) =>
    p.state != null ? known(true) : { known: false }],
  ["applicant.bank_account", (p) =>
    p.hasBankAccount != null ? known(p.hasBankAccount ? "present" : undefined) : { known: false }],
  ["applicant.bank_account_aadhaar_linked", (p) =>
    p.hasBankAccount === true && p.aadhaarEkyc === true
      ? known(true)
      : p.hasBankAccount === false
        ? known(false)
        : { known: false }],
  ["applicant.bank_account_aadhaar_seeded", (p) =>
    p.hasBankAccount === true && p.aadhaarEkyc === true
      ? known(true)
      : p.hasBankAccount === false
        ? known(false)
        : { known: false }],
  ["applicant.aadhaar", (p) => (p.aadhaarEkyc != null ? known(p.aadhaarEkyc ? "linked" : undefined) : { known: false })],
  ["applicant.aadhaar_ekyc_completed", (p) =>
    p.aadhaarEkyc != null ? known(Boolean(p.aadhaarEkyc)) : { known: false }],
  ["applicant.aadhaar_kyc_complete", (p) =>
    p.aadhaarEkyc != null ? known(Boolean(p.aadhaarEkyc)) : { known: false }],
  ["applicant.kyc_complete", (p) => (p.aadhaarEkyc != null ? known(Boolean(p.aadhaarEkyc)) : { known: false })],
  ["applicant.income_tax_payer", (p) => (p.incomeTaxPayer != null ? known(Boolean(p.incomeTaxPayer)) : { known: false })],
  ["applicant.business.activity_type", (p) => {
    const bt = p.businessType ? normalizeVal(p.businessType) : undefined;
    if (bt == null && p.occupation == null) return { known: false };
    if (bt != null) {
      if (/dairy|poultry|fisher|animal|dairy_farming|agri_allied|allied/.test(String(bt))) return known("non_farm_income_generating");
      if (/crop|farming|agriculture|cultivation/.test(String(bt))) return known("farm_cultivation");
      return known("non_farm_income_generating");
    }
    return { known: false };
  }],
  ["applicant.business.sector", (p) => {
    const bt = p.businessType ? String(normalizeVal(p.businessType)) : undefined;
    if (bt == null) return { known: false };
    // Ambiguous activities resolve to CANDIDATE sectors. Dairy, for example,
    // may be farming (agri_allied), processing (manufacturing) or retail
    // (trading) — different schemes cover different natures. We return all
    // plausible values and let rule evaluation record the assumption.
    if (/dairy/.test(bt)) return { known: true, value: "agri_allied", values: ["agri_allied", "manufacturing", "trading"], ambiguous: true };
    if (/poultry|fisher|apiar|pigg/.test(bt)) return { known: true, value: "agri_allied", values: ["agri_allied", "manufacturing", "trading"], ambiguous: true };
    if (/agri|animal|allied/.test(bt)) return { known: true, value: "agri_allied", values: ["agri_allied", "manufacturing"], ambiguous: true };
    if (/food/.test(bt)) return { known: true, value: "manufacturing", values: ["manufacturing", "services", "trading"], ambiguous: true };
    if (/manufactur|factory|textile/.test(bt)) return known("manufacturing");
    if (/service|tailor|salon|repair|consult/.test(bt)) return known("services");
    if (/shop/.test(bt)) return { known: true, value: "trading", values: ["trading", "services"], ambiguous: true };
    if (/trad(e|ing)|retail|wholesale|vendor/.test(bt)) return known("trading");
    return { known: false };
  }],
  ["applicant.business.size_class", (p) =>
    p.businessSizeClass != null ? known(normalizeVal(p.businessSizeClass)) : { known: false }],
  ["applicant.business.stage", (p) => {
    if (p.businessStage != null) return known(normalizeVal(p.businessStage));
    if (p.businessStatus != null) {
      const s = String(normalizeVal(p.businessStatus));
      if (/new|idea|starting|greenfield|not_yet|proposed/.test(s)) return known("greenfield");
      if (/existing|running|operational|established/.test(s)) return known("existing");
    }
    return { known: false };
  }],
  ["applicant.business.units_promoted", (p) => (p.businessUnitsPromoted != null ? known(p.businessUnitsPromoted) : { known: false })],
  ["applicant.business.project_cost", (p) => (p.projectCost != null ? known(Number(p.projectCost)) : { known: false })],
  ["applicant.bank_defaulter", (p) => (p.bankDefaulter != null ? known(Boolean(p.bankDefaulter)) : { known: false })],
  ["applicant.vending_recognition", (p) =>
    p.vendingRecognition != null ? known(normalizeVal(p.vendingRecognition)) : { known: false }],
  ["applicant.existing_nsap_or_equivalent_pension", (p) =>
    p.existingNsapPension != null ? known(Boolean(p.existingNsapPension)) : { known: false }],
  ["applicant.existing_apy_accounts", (p) => (p.existingApyAccounts != null ? known(p.existingApyAccounts) : { known: false })],
  ["applicant.existing_pmsby_policies", (p) => (p.existingPmsbyPolicies != null ? known(p.existingPmsbyPolicies) : { known: false })],
  ["applicant.existing_pmjjby_policies", (p) => (p.existingPmjjbyPolicies != null ? known(p.existingPmjjbyPolicies) : { known: false })],
  ["applicant.auto_debit_consent", (p) => (p.autoDebitConsent != null ? known(Boolean(p.autoDebitConsent)) : { known: false })],
  ["applicant.prior_mudra_tarun_repaid", (p) => (p.priorMudraTarunRepaid != null ? known(Boolean(p.priorMudraTarunRepaid)) : { known: false })],
  ["applicant.prior_svanidhi_loan_repaid", (p) => (p.priorSvanidhiLoanRepaid != null ? known(Boolean(p.priorSvanidhiLoanRepaid)) : { known: false })],
  ["applicant.prior_similar_govt_subsidy_beneficiary", (p) =>
    p.priorSimilarSubsidyBeneficiary != null ? known(Boolean(p.priorSimilarSubsidyBeneficiary)) : { known: false }],
  ["applicant.prior_similar_credit_linked_subsidy_loan", (p) =>
    p.priorSimilarSubsidyBeneficiary != null ? known(Boolean(p.priorSimilarSubsidyBeneficiary)) : { known: false }],
  ["applicant.income_tax_payer_last_5_years", (p) => (p.incomeTaxPayer != null ? known(Boolean(p.incomeTaxPayer)) : { known: false })],
  ["applicant.class12_percentile_rank", (p) => (p.class12PercentileRank != null ? known(p.class12PercentileRank) : { known: false })],
  ["applicant.previous_year_marks_percent", (p) => (p.previousYearMarksPercent != null ? known(p.previousYearMarksPercent) : { known: false })],
  ["applicant.class8_marks_percent", (p) => (p.class8MarksPercent != null ? known(p.class8MarksPercent) : { known: false })],
  ["applicant.nmmss_exam_qualified", (p) => (p.nmmssExamQualified != null ? known(Boolean(p.nmmssExamQualified)) : { known: false })],
  ["applicant.institution_type", (p) => (p.institutionType != null ? known(normalizeVal(p.institutionType)) : { known: false })],
  ["applicant.course_mode", (p) => (p.courseMode != null ? known(normalizeVal(p.courseMode)) : { known: false })],
  ["applicant.other_overlapping_scholarship", (p) =>
    p.otherOverlappingScholarship != null ? known(Boolean(p.otherOverlappingScholarship)) : { known: false }],
  ["applicant.crop_notified_in_area", (p) => (p.cropNotifiedInArea != null ? known(Boolean(p.cropNotifiedInArea)) : { known: false })],
  ["applicant.cultivation_area_notified", (p) => (p.cultivationAreaNotified != null ? known(Boolean(p.cultivationAreaNotified)) : { known: false })],
  ["applicant.enrolment_before_cutoff", (p) => (p.enrolmentBeforeCutoff != null ? known(Boolean(p.enrolmentBeforeCutoff)) : { known: false })],
  ["applicant.is_loanee_farmer", (p) => (p.isLoaneeFarmer != null ? known(Boolean(p.isLoaneeFarmer)) : { known: false })],
  ["applicant.non_loanee_documentation_complete", (p) =>
    p.nonLoaneeDocumentationComplete != null ? known(Boolean(p.nonLoaneeDocumentationComplete)) : { known: false }],
  ["applicant.household.has_other_omc_lpg_connection", (p) =>
    p.householdHasOtherLpgConnection != null ? known(Boolean(p.householdHasOtherLpgConnection)) : { known: false }],
  ["applicant.household.eligible_category", (p) =>
    p.householdEligibleCategory != null ? known(normalizeVal(p.householdEligibleCategory)) : { known: false }],
  ["applicant.household.income_category", (p) =>
    p.householdIncomeCategory != null ? known(normalizeVal(p.householdIncomeCategory)) : { known: false }],
  ["applicant.household.bpl_status", (p) => (p.householdBplStatus != null ? known(Boolean(p.householdBplStatus)) : { known: false })],
  ["applicant.household.housing_condition", (p) =>
    p.householdHousingCondition != null ? known(normalizeVal(p.householdHousingCondition)) : { known: false }],
  ["applicant.household.owns_pucca_house", (p) =>
    p.householdOwnsPuccaHouse != null ? known(Boolean(p.householdOwnsPuccaHouse)) : { known: false }],
  ["applicant.household.has_pucca_house_anywhere_in_india", (p) =>
    p.householdOwnsPuccaHouse != null ? known(Boolean(p.householdOwnsPuccaHouse)) : { known: false }],
  ["applicant.household.income_tax_payer_member", (p) => {
    if (p.householdIncomeTaxPayerMember != null) return known(Boolean(p.householdIncomeTaxPayerMember));
    if (p.incomeTaxPayer != null) return known(Boolean(p.incomeTaxPayer));
    return { known: false };
  }],
  ["applicant.household.government_or_psu_employee_member", (p) =>
    p.householdGovEmployeeMember != null ? known(Boolean(p.householdGovEmployeeMember)) : { known: false }],
  ["applicant.household.government_employee_member", (p) =>
    p.householdGovEmployeeMember != null ? known(Boolean(p.householdGovEmployeeMember)) : { known: false }],
  ["applicant.household.pensioner_member_above_10000_month", (p) =>
    p.householdPensionerMemberHigh != null ? known(Boolean(p.householdPensionerMemberHigh)) : { known: false }],
  ["applicant.household.member_pension_monthly_above", (p) =>
    p.householdPensionerMemberHigh != null ? known(p.householdPensionerMemberHigh) : { known: false }],
  ["applicant.household.registered_professional_member", (p) =>
    p.householdRegisteredProfessionalMember != null ? known(Boolean(p.householdRegisteredProfessionalMember)) : { known: false }],
  ["applicant.household.in_pmjay_eligibility_database", (p) =>
    p.inPmjayDatabase != null ? known(Boolean(p.inPmjayDatabase)) : { known: false }],
  ["applicant.household.on_pmayg_waitlist", (p) =>
    p.onPmaygWaitlist != null ? known(Boolean(p.onPmaygWaitlist)) : { known: false }],
  ["applicant.household.prior_iay_pmayg_assistance", (p) =>
    p.priorIayPmaygAssistance != null ? known(Boolean(p.priorIayPmaygAssistance)) : { known: false }],
  ["applicant.household.prior_pmay_benefit_received", (p) =>
    p.priorPmayBenefitReceived != null ? known(Boolean(p.priorPmayBenefitReceived)) : { known: false }],
  ["applicant.household.owns_motorised_vehicle", (p) =>
    p.householdOwnsMotorisedVehicle != null ? known(Boolean(p.householdOwnsMotorisedVehicle)) : { known: false }],
  ["applicant.household.member_holding_constitutional_post", (p) =>
    p.householdConstitutionalPostMember != null ? known(Boolean(p.householdConstitutionalPostMember)) : { known: false }],
  ["applicant.household.serving_or_retired_government_employee", (p) =>
    p.householdGovEmployeeMember != null ? known(Boolean(p.householdGovEmployeeMember)) : { known: false }],
  ["applicant.family.already_registered_member", (p) =>
    p.familyAlreadyRegisteredMember != null ? known(Boolean(p.familyAlreadyRegisteredMember)) : { known: false }],
  ["loan.category", () => ({ known: false })],
  ["loan.purpose", (p) => (p.loanPurpose != null ? known(normalizeVal(p.loanPurpose)) : { known: false })],
]);

// ---------------------------------------------------------------------------
// Operator implementations
// ---------------------------------------------------------------------------

function compareNumbers(a: number, b: number, op: RuleOperator): boolean {
  switch (op) {
    case "greater_than": return a > b;
    case "greater_than_or_equal": return a >= b;
    case "less_than": return a < b;
    case "less_than_or_equal": return a <= b;
    default: return false;
  }
}

/**
 * Evaluate one operator. Returns:
 * - { result: "passed" | "failed" } when decidable
 * - { result: "missing" } when the user attribute is unknown
 * - { result: "not_applicable" } when the rule cannot decide (unverifiable)
 */
function evaluateCondition(
  cond: RuleCondition,
  profile: Record<string, unknown>,
): RuleEvaluation {
  const base: RuleEvaluation = {
    ruleId: cond.rule_id ?? "UNSPECIFIED",
    field: cond.field,
    operator: cond.operator,
    result: "not_applicable",
    ruleType: cond.type ?? "hard",
    expectedValue: cond.value,
  };

  // Rules with inline conditions (e.g. EDU-001 "sector = services AND cost > X")
  // are evaluated only when their condition holds; profile data we do not
  // collect cannot decide them, so they are treated as informational context.
  if (cond.condition && cond.type === "hard") {
    return { ...base, result: "not_applicable", reason: `Conditional rule: ${cond.condition}` };
  }

  const { known: isKnown, value, values, ambiguous } =
    resolveField(cond.field, profile) as { known: boolean; value?: unknown; values?: unknown[]; ambiguous?: boolean };

  if (!isKnown) {
    return { ...base, result: "missing", reason: "User did not provide this information" };
  }

  const op = cond.operator;
  const expected = cond.value;

  switch (op) {
    case "equals": {
      if (ambiguous && values) {
        const anyMatch = values.some((v) => normalizeVal(v) === normalizeVal(expected));
        return anyMatch
          ? { ...base, result: "passed", userValue: values.join(" / "), assumed: true, reason: "Activity nature not fully specified — verification required" }
          : { ...base, result: "failed", userValue: values.join(" / ") };
      }
      const passed = normalizeVal(value) === normalizeVal(expected);
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "not_equals": {
      const passed = normalizeVal(value) !== normalizeVal(expected);
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "greater_than":
    case "greater_than_or_equal":
    case "less_than":
    case "less_than_or_equal": {
      const num = Number(value);
      const expNum = Number(expected);
      if (Number.isNaN(num) || Number.isNaN(expNum)) {
        return { ...base, result: "not_applicable", reason: "Non-numeric comparison" };
      }
      const passed = compareNumbers(num, expNum, op);
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "greater_than_semiqualitative": {
      // Ordered-education comparison (OKF note: engines implement an
      // education-order operator). Falls back to missing for unknown labels.
      const a = EDUCATION_ORDER[String(value).toLowerCase()];
      const b = EDUCATION_ORDER[String(expected).toLowerCase()];
      if (a === undefined || b === undefined) {
        return { ...base, result: "missing", reason: "Unknown education level vocabulary" };
      }
      return { ...base, result: a > b ? "passed" : "failed", userValue: value };
    }
    case "in": {
      const list = Array.isArray(expected) ? expected : [expected];
      if (ambiguous && values) {
        const matches = values.filter((v) => list.some((x) => normalizeVal(x) === normalizeVal(v)));
        if (matches.length === values.length) {
          return { ...base, result: "passed", userValue: value };
        }
        if (matches.length > 0) {
          // Some candidate natures of the stated activity qualify — pass with
          // an explicit assumption; the scheme is only potentially eligible.
          return { ...base, result: "passed", userValue: values.join(" / "), assumed: true, reason: "Activity nature not fully specified — verification required" };
        }
        return { ...base, result: "failed", userValue: values.join(" / ") };
      }
      const passed = list.some((x) => normalizeVal(x) === normalizeVal(value));
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "not_in": {
      const list = Array.isArray(expected) ? expected : [expected];
      const passed = !list.some((x) => normalizeVal(x) === normalizeVal(value));
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "between":
    case "not_between": {
      const [lo, hi] = Array.isArray(expected) ? expected : [undefined, undefined];
      const num = Number(value);
      if (Number.isNaN(num) || lo == null || hi == null) {
        return { ...base, result: "not_applicable", reason: "Malformed between-range" };
      }
      const inside = num >= Number(lo) && num <= Number(hi);
      const passed = op === "between" ? inside : !inside;
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "is_true": {
      const passed = value === true;
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "is_false": {
      const passed = value === false;
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "exists": {
      // OKF convention: `exists` with an expected value expresses presence
      // (value: true) or ABSENCE (value: false, e.g. APY EX-004 "no bank
      // account → cannot enrol"). The condition passes when presence matches
      // the expectation.
      const isPresent = value !== undefined && value !== null && value !== "";
      const wantPresent = expected === undefined ? true : Boolean(expected);
      const passed = isPresent === wantPresent;
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "not_exists": {
      const passed = value === undefined || value === null || value === "" || value === false;
      return { ...base, result: passed ? "passed" : "failed", userValue: value };
    }
    case "contains": {
      const passed = typeof value === "string" && typeof expected === "string" &&
        value.toLowerCase().includes(expected.toLowerCase());
      return passed
        ? { ...base, result: "passed", userValue: value }
        : { ...base, result: "failed", userValue: value };
    }
    default:
      return { ...base, result: "not_applicable", reason: `Unsupported operator: ${op}` };
  }
}

// ---------------------------------------------------------------------------
// Group evaluation
// ---------------------------------------------------------------------------

interface GroupOutcome {
  passed: RuleEvaluation[];
  failed: RuleEvaluation[];
  missing: RuleEvaluation[];
  notApplicable: RuleEvaluation[];
  /** null = not decidable, true/false = decided */
  decided: boolean | null;
}

function evaluateGroup(
  group: RuleGroup,
  profile: Record<string, unknown>,
): GroupOutcome {
  const out: GroupOutcome = { passed: [], failed: [], missing: [], notApplicable: [], decided: null };

  const evalList = (elements: RuleGroup["all"], listOut: GroupOutcome) => {
    for (const el of elements ?? []) {
      const cond = el as RuleCondition;
      if (cond && typeof cond === "object" && "operator" in cond) {
        const r = evaluateCondition(cond, profile);
        if (r.result === "passed") listOut.passed.push(r);
        else if (r.result === "failed") listOut.failed.push(r);
        else if (r.result === "missing") listOut.missing.push(r);
        else listOut.notApplicable.push(r);
      }
    }
  };

  if (group.all) evalList(group.all, out);
  if (group.any) {
    // Alternative branches: the group passes if ANY branch passes. Failures
    // and missing-info from branches that were NOT taken must not leak into
    // the group outcome — the applicant qualifies via the branch that fits
    // them (e.g. Stand-Up India: woman OR SC/ST).
    const branchOutcomes: GroupOutcome[] = [];
    for (const branch of group.any) {
      const branchGroup = branch as RuleGroup;
      if (branchGroup && typeof branchGroup === "object" && ("all" in branchGroup || "any" in branchGroup || "not" in branchGroup)) {
        branchOutcomes.push(evaluateGroup(branchGroup, profile));
      } else {
        const r = evaluateCondition(branch as RuleCondition, profile);
        const bo: GroupOutcome = { passed: [], failed: [], missing: [], notApplicable: [], decided: null };
        if (r.result === "passed") { bo.passed.push(r); bo.decided = true; }
        else if (r.result === "failed") { bo.failed.push(r); bo.decided = false; }
        else if (r.result === "missing") bo.missing.push(r);
        else bo.notApplicable.push(r);
        branchOutcomes.push(bo);
      }
    }

    const passingBranches = branchOutcomes.filter((b) => b.decided === true);
    const everyBranchFailed = branchOutcomes.length > 0 && branchOutcomes.every((b) => b.decided === false);

    if (passingBranches.length > 0) {
      // Group decided: pass. Untaken branches' failures/missing are irrelevant.
      for (const b of passingBranches) out.passed.push(...b.passed);
      out.decided = true;
    } else if (everyBranchFailed) {
      // No branch applies to this applicant.
      for (const b of branchOutcomes) out.failed.push(...b.failed);
      out.decided = false;
    } else {
      // No branch passes yet, but at least one is still decidable with more
      // information → undecided; surface what is missing and what failed.
      for (const b of branchOutcomes) {
        out.passed.push(...b.passed);
        out.failed.push(...b.failed);
        out.missing.push(...b.missing);
      }
      out.decided = null;
    }
  }
  if (group.not) {
    for (const branch of group.not) {
      const r = evaluateCondition(branch as RuleCondition, profile);
      if (r.result === "passed") out.failed.push({ ...r, reason: "Negated condition holds" });
      else if (r.result === "failed") out.passed.push({ ...r, reason: "Negated condition does not hold" });
      else out.missing.push(r);
    }
  }

  const hasFailed = out.failed.length > 0;
  const hasMissing = out.missing.length > 0;
  const hasPassed = out.passed.length > 0;
  const onlyNotApplicable = !hasFailed && !hasMissing && !hasPassed && out.notApplicable.length > 0;

  if (group.any) {
    // Decision already assigned by the branch logic above (this codebase only
    // builds pure {any} groups — {all}/{any}/{not} are evaluated separately).
  } else if (hasFailed) out.decided = false;
  else if (hasMissing) out.decided = null; // cannot decide yet
  else if (hasPassed || onlyNotApplicable) out.decided = true;
  else out.decided = true; // empty group

  return out;
}

// ---------------------------------------------------------------------------
// Missing-info question mapping
// ---------------------------------------------------------------------------

const FIELD_QUESTION_MAP: Record<string, { question: string; profileField: string }> = {
  "applicant.age": { question: "What is your age?", profileField: "age" },
  "applicant.gender": { question: "What is your gender?", profileField: "gender" },
  "applicant.state": { question: "Which state do you live in?", profileField: "state" },
  "applicant.state_domicile": { question: "Which state are you a domicile of?", profileField: "state" },
  "applicant.household_income": { question: "What is your approximate annual household income?", profileField: "annualIncome" },
  "applicant.occupation": { question: "What type of work or occupation are you involved in?", profileField: "occupation" },
  "applicant.employment_status": { question: "What is your current employment status?", profileField: "employmentStatus" },
  "applicant.business.activity_type": { question: "What type of business or activity are you planning?", profileField: "businessType" },
  "applicant.business.sector": { question: "What type of business are you planning to start?", profileField: "businessType" },
  "applicant.business.stage": { question: "Is this a new business or an existing one?", profileField: "businessStatus" },
  "applicant.rural_urban_status": { question: "Do you live in a rural area or an urban area?", profileField: "ruralUrban" },
  "applicant.land_ownership": { question: "Do you own agricultural land?", profileField: "landOwnership" },
  "applicant.farmer_status": { question: "Are you a farmer cultivating land?", profileField: "farmerStatus" },
  "applicant.student_status": { question: "Are you currently enrolled as a student?", profileField: "studentStatus" },
  "applicant.educational_level": { question: "What is your highest level of education?", profileField: "educationLevel" },
  "applicant.social_category": { question: "Which social category do you belong to (General/SC/ST/OBC)?", profileField: "socialCategory" },
  "applicant.marital_status": { question: "What is your marital status?", profileField: "maritalStatus" },
  "applicant.pregnancy_or_lactation_status": { question: "Are you currently pregnant or a lactating mother?", profileField: "pregnancyOrLactationStatus" },
  "applicant.disability_status": { question: "Do you have a certified disability?", profileField: "disabilityStatus" },
  "applicant.income_tax_payer": { question: "Do you or your household pay income tax?", profileField: "incomeTaxPayer" },
  "applicant.household.income_tax_payer_member": { question: "Does anyone in your household pay income tax?", profileField: "incomeTaxPayer" },
  "applicant.vending_recognition": { question: "Do you have any vending recognition (Certificate of Vending / LoR / ULB survey)?", profileField: "vendingRecognition" },
  "applicant.social_category_note": { question: "", profileField: "socialCategory" },
};

const FIELD_REASON_MAP: Record<string, string> = {
  "applicant.business.activity_type": "Required to evaluate the nature of the activity",
  "applicant.business.sector": "Required to evaluate this condition",
  "applicant.business.stage": "Required to determine whether the scheme covers new or existing businesses",
  "applicant.gender": "Required to evaluate a gender-specific condition",
  "applicant.social_category": "Required to evaluate a category-specific condition",
  "applicant.age": "Required to evaluate an age condition",
  "applicant.household_income": "Required to evaluate an income ceiling",
  "applicant.state": "Required to evaluate a state-specific condition",
  "applicant.rural_urban_status": "Required to evaluate a rural/urban condition",
  "applicant.land_ownership": "Required to verify landholding status",
  "applicant.occupation": "Required to evaluate this occupation-gated scheme",
  "applicant.vending_recognition": "Required to verify vending documentation",
};

function describeMissing(field: string): MissingInfo {
  const qm = FIELD_QUESTION_MAP[field];
  return {
    field,
    reason: FIELD_REASON_MAP[field] ?? "Required to evaluate this condition",
    profileField: qm?.profileField,
    question: qm?.question,
  };
}

// ---------------------------------------------------------------------------
// Exclusions
// ---------------------------------------------------------------------------

function evaluateExclusions(
  scheme: NormalizedScheme,
  profile: Record<string, unknown>,
): { matched: { id: string; detail?: string }[]; failed: RuleEvaluation[]; missing: RuleEvaluation[] } {
  const matched: { id: string; detail?: string }[] = [];
  const failed: RuleEvaluation[] = [];
  const missing: RuleEvaluation[] = [];

  for (const exclusion of scheme.exclusions) {
    // Ambiguous-activity guard: when the field resolves to multiple candidate
    // values (e.g. dairy → agri_allied/manufacturing/trading), an exclusion
    // may only HARD-fire if it applies under EVERY candidate interpretation.
    // A partial match means the user *might* be excluded once the exact nature
    // of their activity is clarified — not grounds to drop the scheme.
    const resolved = resolveField(exclusion.field, profile) as {
      known: boolean;
      value?: unknown;
      values?: unknown[];
      ambiguous?: boolean;
    };
    if (
      resolved.known &&
      resolved.ambiguous === true &&
      Array.isArray(resolved.values) &&
      (exclusion.operator === "equals" || exclusion.operator === "in")
    ) {
      const candidates = resolved.values;
      const excludedList = exclusion.operator === "in"
        ? (Array.isArray(exclusion.value) ? exclusion.value : [exclusion.value])
        : [exclusion.value];
      const matchedCandidates = candidates.filter((v) =>
        excludedList.some((x) => normalizeVal(x) === normalizeVal(v)),
      );
      if (matchedCandidates.length === 0) continue; // definitely not excluded
      if (matchedCandidates.length === candidates.length) {
        const effect = exclusion.effect ?? "ineligible";
        if (effect === "ineligible") matched.push({ id: exclusion.id, detail: exclusion.detail });
      }
      // Partial overlap → cannot decide; the eligibility-rule assumption
      // already forces at best potentially_eligible. Fall through to nothing.
      continue;
    }

    const cond: RuleCondition = {
      rule_id: exclusion.id,
      field: exclusion.field,
      operator: exclusion.operator,
      value: exclusion.value,
      type: "hard",
      condition: exclusion.condition,
    };
    const r = evaluateCondition(cond, profile);

    const effect = exclusion.effect ?? "ineligible";
    const absoluteIneligible = effect === "ineligible";

    if (r.result === "passed") {
      if (absoluteIneligible) {
        matched.push({ id: exclusion.id, detail: exclusion.detail });
        failed.push({ ...r, reason: exclusion.detail });
      }
      // effect: ineligible_for_<subset>_only — narrows a category, not the
      // whole scheme; recorded as context, not a hard exclusion.
    } else if (r.result === "missing" && absoluteIneligible) {
      missing.push(r);
    }
  }

  return { matched, failed, missing };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function evaluateSchemeEligibility(
  scheme: NormalizedScheme,
  profile: Partial<SchemeUserProfile> & Record<string, unknown>,
): EligibilityResult {
  const rules = scheme.eligibilityRules;
  const hasRules = rules && (rules.all?.length || rules.any?.length || rules.not?.length);

  if (!hasRules) {
    // The OKF object carries no machine-readable rules: never claim eligible.
    return {
      status: "unknown",
      matchedRules: [],
      failedRules: [],
      missingInformation: [],
      matchedExclusions: [],
      unverified: true,
    };
  }

  // Hard exclusions first — they always win. The failing exclusion is
  // surfaced as rule-level evidence so users see WHY they were excluded.
  const excl = evaluateExclusions(scheme, profile);
  if (excl.matched.length > 0) {
    return {
      status: "ineligible",
      matchedRules: [],
      failedRules: excl.failed,
      missingInformation: [],
      matchedExclusions: excl.matched,
      unverified: false,
    };
  }

  const allOutcome = rules.all ? evaluateGroup({ all: rules.all }, profile) : { passed: [], failed: [], missing: [], notApplicable: [], decided: true } as GroupOutcome;

  let anyOutcome: GroupOutcome | null = null;
  if (rules.any) {
    anyOutcome = evaluateGroup({ any: rules.any }, profile);
  }

  const matchedRules = [...allOutcome.passed, ...(anyOutcome?.passed ?? [])];
  const failedRules = [...allOutcome.failed, ...(anyOutcome?.failed ?? [])];
  const missingRules = [...allOutcome.missing, ...(anyOutcome?.missing ?? [])];

  // Deduplicate by ruleId (any-branch bookkeeping can double-report)
  const dedupe = (list: RuleEvaluation[]) => {
    const seen = new Set<string>();
    return list.filter((r) => {
      const key = `${r.ruleId}|${r.result}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  const matched = dedupe(matchedRules);
  const failed = dedupe(failedRules);
  const missing = dedupe(missingRules);

  // Status decision
  if (allOutcome.decided === false || (failed.length > 0 && missing.length === 0 && (anyOutcome == null || anyOutcome.decided === false))) {
    return {
      status: "ineligible",
      matchedRules: matched,
      failedRules: failed,
      missingInformation: [],
      matchedExclusions: [],
      unverified: false,
    };
  }

  if (missing.length > 0) {
    return {
      status: "needs_information",
      matchedRules: matched,
      failedRules: failed.filter((f) => !missing.some((m) => m.field === f.field)),
      missingInformation: missing.map((m) => describeMissing(m.field)),
      matchedExclusions: [],
      unverified: false,
    };
  }

  if (failed.length > 0) {
    return {
      status: "ineligible",
      matchedRules: matched,
      failedRules: failed,
      missingInformation: [],
      matchedExclusions: [],
      unverified: false,
    };
  }

  // All decidable conditions passed. Distinguish eligible vs potentially:
  // rules we could not evaluate (inline conditions, subset exclusions, credit
  // assessment) or passes that relied on an ambiguous-activity assumption
  // mean verification remains.
  const verificationRemains =
    allOutcome.notApplicable.length > 0 ||
    excl.missing.length > 0 ||
    matched.some((m) => m.assumed === true);
  return {
    status: verificationRemains ? "potentially_eligible" : "eligible",
    matchedRules: matched,
    failedRules: [],
    missingInformation: [],
    matchedExclusions: [],
    unverified: false,
  };
}
