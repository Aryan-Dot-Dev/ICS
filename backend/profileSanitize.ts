/**
 * Whitelist-based sanitization of untrusted client payloads.
 *
 * Extracted from server.ts so the recommend-schemes handler, the chat
 * handler and tests share one profile contract: unknown/extra client
 * fields are dropped, known fields are length/range-bounded and
 * normalized to the engine's canonical vocabulary.
 */

import type { SchemeUserProfile } from "../src/lib/schemeTypes";

export function sanitizeString(value: unknown, maxLen = 2000): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed.slice(0, maxLen) : undefined;
}

export function sanitizeNumber(value: unknown, min: number, max: number): number | undefined {
  const n = typeof value === "string" ? Number(value) : value;
  if (typeof n !== "number" || !Number.isFinite(n)) return undefined;
  const clamped = Math.min(max, Math.max(min, n));
  return clamped;
}

export function sanitizeBoolean(value: unknown): boolean | undefined {
  if (typeof value === "boolean") return value;
  if (value === "true") return true;
  if (value === "false") return false;
  return undefined;
}

export function sanitizeStringArray(value: unknown, maxItems = 12): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const items = value
    .filter((x): x is string => typeof x === "string" && x.trim().length > 0)
    .map((x) => x.trim().slice(0, 64))
    .slice(0, maxItems);
  return items.length > 0 ? items : undefined;
}

const EMPLOYMENT_VALUES = new Set([
  "salaried",
  "self_employed",
  "unemployed",
  "student",
  "homemaker",
  "retired",
  "government_employee",
]);

/**
 * Canonical profile sanitizer used by /api/recommend-schemes and /api/chat.
 * Every engine-resolvable field is accepted here so structured form input
 * and chat-collected facts travel through one contract.
 */
export function sanitizeProfile(raw: unknown): Partial<SchemeUserProfile> {
  if (!raw || typeof raw !== "object") return {};
  const p = raw as Record<string, unknown>;
  const out: Partial<SchemeUserProfile> = {};

  const age = sanitizeNumber(p.age, 0, 120);
  if (age != null) out.age = Math.round(age);
  const gender = sanitizeString(p.gender, 20);
  if (gender) out.gender = gender.toLowerCase();
  const state = sanitizeString(p.state, 60);
  if (state) out.state = state;
  const district = sanitizeString(p.district, 60);
  if (district) out.district = district;
  const annualIncome = sanitizeNumber(p.annualIncome, 0, 1e12);
  if (annualIncome != null) out.annualIncome = Math.round(annualIncome);
  const occupation = sanitizeString(p.occupation, 60);
  if (occupation) out.occupation = occupation.toLowerCase().replace(/\s+/g, "_");
  const employmentStatus = sanitizeString(p.employmentStatus, 60);
  if (employmentStatus) {
    const normalized = employmentStatus.toLowerCase().replace(/\s+/g, "_");
    if (EMPLOYMENT_VALUES.has(normalized)) out.employmentStatus = normalized;
  }
  const farmerStatus = sanitizeBoolean(p.farmerStatus);
  if (farmerStatus != null) out.farmerStatus = farmerStatus;
  if (p.landholding && typeof p.landholding === "object") {
    const lh = p.landholding as Record<string, unknown>;
    const v = sanitizeNumber(lh.value, 0, 1e6);
    const unit = sanitizeString(lh.unit, 10);
    if (v != null && unit && ["acre", "hectare", "bigha"].includes(unit)) {
      out.landholding = { value: v, unit: unit as "acre" | "hectare" | "bigha" };
    }
  }
  const studentStatus = sanitizeBoolean(p.studentStatus);
  if (studentStatus != null) out.studentStatus = studentStatus;
  const educationLevel = sanitizeString(p.educationLevel, 40);
  if (educationLevel) out.educationLevel = educationLevel.toLowerCase().replace(/\s+/g, "_");
  const socialCategory = sanitizeString(p.socialCategory, 30);
  if (socialCategory && ["general", "obc", "sc", "st"].includes(socialCategory.toLowerCase())) {
    out.socialCategory = socialCategory.toLowerCase();
  }
  const disabilityStatus = sanitizeBoolean(p.disabilityStatus);
  if (disabilityStatus != null) out.disabilityStatus = disabilityStatus;
  const ruralUrban = sanitizeString(p.ruralUrban, 10);
  if (ruralUrban && ["rural", "urban"].includes(ruralUrban.toLowerCase())) {
    out.ruralUrban = ruralUrban.toLowerCase() as "rural" | "urban";
  }
  const businessStatus = sanitizeString(p.businessStatus, 60);
  if (businessStatus) out.businessStatus = businessStatus;
  const businessType = sanitizeString(p.businessType, 80);
  if (businessType) out.businessType = businessType;
  const businessStage = sanitizeString(p.businessStage, 20);
  if (businessStage && ["greenfield", "existing"].includes(businessStage.toLowerCase())) {
    out.businessStage = businessStage.toLowerCase() as "greenfield" | "existing";
  }
  const projectCost = sanitizeNumber(p.projectCost, 0, 1e12);
  if (projectCost != null) out.projectCost = Math.round(projectCost);
  const maritalStatus = sanitizeString(p.maritalStatus, 30);
  if (maritalStatus && ["single", "married", "widow", "divorced"].includes(maritalStatus.toLowerCase())) {
    out.maritalStatus = maritalStatus.toLowerCase();
  }
  const incomeTaxPayer = sanitizeBoolean(p.incomeTaxPayer);
  if (incomeTaxPayer != null) out.incomeTaxPayer = incomeTaxPayer;
  const familySize = sanitizeNumber(p.familySize, 1, 30);
  if (familySize != null) out.familySize = Math.round(familySize);

  const goals = sanitizeStringArray(p.goals);
  if (goals) out.goals = goals;
  const needs = sanitizeStringArray(p.needs);
  if (needs) out.needs = needs;

  return out;
}
