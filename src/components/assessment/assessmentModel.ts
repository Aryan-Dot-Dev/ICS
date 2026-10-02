/**
 * Shared form vocabulary and types for the assessment flow
 * (AssessmentPage + AssessmentModal).
 */

import type { SchemeUserProfile } from "../../lib/schemeTypes";

export const BUSINESS_TYPES = [
  { value: "Technology", label: "Technology & SaaS" },
  { value: "Manufacturing", label: "Heavy Manufacturing & PLI" },
  { value: "Renewable Energy", label: "Renewable Energy & Infrastructure" },
  { value: "Healthcare", label: "Healthcare & Biotech" },
  { value: "Agriculture", label: "Agri-tech & Rural Development" },
  { value: "Services", label: "Professional Services & Consulting" },
  { value: "Other", label: "Other Enterprise Sector" },
] as const;

/** Indian states + UTs, title-cased to match engine state rules. */
export const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry",
  "Chandigarh", "Andaman and Nicobar", "Lakshadweep", "Dadra and Nagar Haveli",
] as const;

export const GENDERS = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "other", label: "Other" },
] as const;

export const SOCIAL_CATEGORIES = [
  { value: "general", label: "General" },
  { value: "obc", label: "OBC" },
  { value: "sc", label: "SC" },
  { value: "st", label: "ST" },
] as const;

export const RURAL_URBAN = [
  { value: "rural", label: "Rural" },
  { value: "urban", label: "Urban" },
] as const;

export const EMPLOYMENT_STATUSES = [
  { value: "salaried", label: "Salaried job" },
  { value: "self_employed", label: "Self-employed" },
  { value: "unemployed", label: "Unemployed" },
  { value: "student", label: "Student" },
  { value: "homemaker", label: "Homemaker" },
  { value: "retired", label: "Retired" },
] as const;

export const BUSINESS_STAGES = [
  { value: "greenfield", label: "New — not started yet" },
  { value: "existing", label: "Existing — already running" },
] as const;

export const MARITAL_STATUSES = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "widow", label: "Widowed" },
  { value: "divorced", label: "Divorced" },
] as const;

export const EDUCATION_LEVELS = [
  { value: "below_class_5", label: "Below class 5" },
  { value: "class_8", label: "Up to class 8" },
  { value: "class_10", label: "Class 10" },
  { value: "class_12", label: "Class 12" },
  { value: "diploma_post_matric", label: "Diploma (post-matric)" },
  { value: "undergraduate", label: "Undergraduate" },
  { value: "professional", label: "Professional degree" },
  { value: "postgraduate", label: "Postgraduate" },
] as const;

export interface AssessmentFormValues {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  businessDescription: string;
  // --- Optional profile section (expandable, improves engine accuracy) ---
  age: string;
  gender: string;
  state: string;
  ruralUrban: string;
  socialCategory: string;
  annualIncome: string;
  employmentStatus: string;
  businessStage: string;
  projectCost: string;
  maritalStatus: string;
  educationLevel: string;
  incomeTaxPayer: string; // "" | "yes" | "no"
}

export const EMPTY_ASSESSMENT_FORM: AssessmentFormValues = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  businessType: "",
  businessDescription: "",
  age: "",
  gender: "",
  state: "",
  ruralUrban: "",
  socialCategory: "",
  annualIncome: "",
  employmentStatus: "",
  businessStage: "",
  projectCost: "",
  maritalStatus: "",
  educationLevel: "",
  incomeTaxPayer: "",
};

/** True when any optional profile field has a value (drives the expander). */
export function hasAnyProfileValue(form: AssessmentFormValues): boolean {
  return (
    form.age !== "" ||
    form.gender !== "" ||
    form.state !== "" ||
    form.ruralUrban !== "" ||
    form.socialCategory !== "" ||
    form.annualIncome !== "" ||
    form.employmentStatus !== "" ||
    form.businessStage !== "" ||
    form.projectCost !== "" ||
    form.maritalStatus !== "" ||
    form.educationLevel !== "" ||
    form.incomeTaxPayer !== ""
  );
}

/** Count of filled optional profile fields, for the "n details added" badge. */
export function countProfileValues(form: AssessmentFormValues): number {
  return (
    (form.age !== "" ? 1 : 0) +
    (form.gender !== "" ? 1 : 0) +
    (form.state !== "" ? 1 : 0) +
    (form.ruralUrban !== "" ? 1 : 0) +
    (form.socialCategory !== "" ? 1 : 0) +
    (form.annualIncome !== "" ? 1 : 0) +
    (form.employmentStatus !== "" ? 1 : 0) +
    (form.businessStage !== "" ? 1 : 0) +
    (form.projectCost !== "" ? 1 : 0) +
    (form.maritalStatus !== "" ? 1 : 0) +
    (form.educationLevel !== "" ? 1 : 0) +
    (form.incomeTaxPayer !== "" ? 1 : 0)
  );
}

/** Field-level validation. Returns an error message, or "" when valid. */
export function validateFieldValue(name: string, value: string): string {
  if (name === "name" && !value.trim()) return "Full name is required";
  if (name === "email") {
    if (!value.trim()) return "Corporate email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email address";
  }
  if (name === "phone") {
    if (!value.trim()) return "Contact number is required";
    if (!/^[+0-9\s-]{8,20}$/.test(value)) return "Please enter a valid contact number";
  }
  if (name === "businessName" && !value.trim()) return "Business/Company name is required";
  if (name === "businessDescription" && !value.trim()) return "Business summary is required";
  if (name === "age" && value.trim() !== "") {
    const n = Number(value);
    if (!Number.isInteger(n) || n < 1 || n > 120) return "Enter a valid age (1–120)";
  }
  if (name === "annualIncome" && value.trim() !== "") {
    const n = Number(value.replace(/[\s,]/g, ""));
    if (!Number.isFinite(n) || n < 0) return "Enter a valid annual income";
  }
  if (name === "projectCost" && value.trim() !== "") {
    const n = Number(value.replace(/[\s,]/g, ""));
    if (!Number.isFinite(n) || n < 0) return "Enter a valid project cost";
  }
  return "";
}

/** Whole-form validation. Returns the error map (empty when valid). */
export function validateForm(form: AssessmentFormValues): Record<string, string> {
  const errors: Record<string, string> = {};
  const fields: (keyof AssessmentFormValues)[] = [
    "name",
    "email",
    "phone",
    "businessName",
    "businessType",
    "businessDescription",
    "age",
    "annualIncome",
    "projectCost",
  ];
  for (const field of fields) {
    const msg = validateFieldValue(field, form[field]);
    if (msg) errors[field] = msg;
  }
  if (!form.businessType) errors.businessType = "Please select a business vertical";
  return errors;
}

/**
 * Build the structured engine profile from the optional form section.
 * Only filled fields are included; numbers are parsed from display input
 * (commas/spaces allowed). Values already match the engine's canonical
 * vocabulary, so no transformation is needed beyond casing/numeric parse.
 */
export function buildProfileFromForm(form: AssessmentFormValues): Partial<SchemeUserProfile> {
  const profile: Partial<SchemeUserProfile> = {};
  if (form.businessType) profile.businessType = form.businessType;

  const age = Number(form.age);
  if (form.age.trim() !== "" && Number.isInteger(age) && age >= 1 && age <= 120) profile.age = age;

  if (form.gender) profile.gender = form.gender;
  if (form.state) profile.state = form.state;
  if (form.ruralUrban) profile.ruralUrban = form.ruralUrban as "rural" | "urban";
  if (form.socialCategory) profile.socialCategory = form.socialCategory;

  const income = Number(form.annualIncome.replace(/[\s,]/g, ""));
  if (form.annualIncome.trim() !== "" && Number.isFinite(income) && income >= 0) {
    profile.annualIncome = Math.round(income);
  }

  if (form.employmentStatus) profile.employmentStatus = form.employmentStatus;
  if (form.businessStage) profile.businessStage = form.businessStage as "greenfield" | "existing";

  const cost = Number(form.projectCost.replace(/[\s,]/g, ""));
  if (form.projectCost.trim() !== "" && Number.isFinite(cost) && cost >= 0) {
    profile.projectCost = Math.round(cost);
  }

  if (form.maritalStatus) profile.maritalStatus = form.maritalStatus;
  if (form.educationLevel) profile.educationLevel = form.educationLevel;
  if (form.incomeTaxPayer === "yes") profile.incomeTaxPayer = true;
  if (form.incomeTaxPayer === "no") profile.incomeTaxPayer = false;

  return profile;
}

/**
 * Map a follow-up answer into AssessmentFormValues patches so answers given
 * after the first run persist in the form state (and thus in every later
 * re-run, the results header and the edit modal). Returns {} for questions
 * that have no form field (farmer/student status).
 */
export function formPatchForFollowUp(
  field: string,
  answer: string,
): Partial<AssessmentFormValues> {
  const value = answer.trim();
  if (!value) return {};
  switch (field) {
    case "age": {
      const n = parseInt(value, 10);
      return Number.isNaN(n) ? {} : { age: String(n) };
    }
    case "annualIncome": {
      const n = Number(value.replace(/[\s,]/g, ""));
      return Number.isFinite(n) ? { annualIncome: String(Math.round(n)) } : {};
    }
    case "projectCost": {
      const n = Number(value.replace(/[\s,]/g, ""));
      return Number.isFinite(n) ? { projectCost: String(Math.round(n)) } : {};
    }
    case "gender":
      return { gender: value.toLowerCase() };
    case "state":
      return { state: value };
    case "ruralUrban":
      return { ruralUrban: value.toLowerCase() === "rural" ? "rural" : "urban" };
    case "socialCategory":
      return { socialCategory: value.toLowerCase() };
    case "businessType":
      return { businessType: value };
    case "businessStage":
      return { businessStage: /new|greenfield|not started/i.test(value) ? "greenfield" : "existing" };
    case "employmentStatus":
      return { employmentStatus: value.toLowerCase().replace(/\s+/g, "_") };
    case "incomeTaxPayer":
      return { incomeTaxPayer: /^(yes|y|true)$/i.test(value) ? "yes" : "no" };
    case "maritalStatus":
      return { maritalStatus: value.toLowerCase() };
    case "educationLevel":
      return { educationLevel: value.toLowerCase().replace(/\s+/g, "_") };
    default:
      return {};
  }
}

/**
 * Merge a follow-up answer into the user profile. Pure; mutates only the
 * object passed in. Mirrors the engine's canonical profile fields.
 */
export function applyFollowUpAnswer(
  profile: Record<string, unknown>,
  field: string,
  answer: string,
): void {
  const value = answer.trim();
  switch (field) {
    case "age": {
      const n = parseInt(value, 10);
      if (!Number.isNaN(n)) profile.age = n;
      break;
    }
    case "annualIncome": {
      const n = Number(value.replace(/[\s,]/g, ""));
      if (!Number.isNaN(n)) profile.annualIncome = Math.round(n);
      break;
    }
    case "projectCost": {
      const n = Number(value.replace(/[\s,]/g, ""));
      if (!Number.isNaN(n)) profile.projectCost = Math.round(n);
      break;
    }
    case "gender":
      profile.gender = value.toLowerCase();
      break;
    case "state":
      profile.state = value;
      break;
    case "ruralUrban":
      profile.ruralUrban = value.toLowerCase() === "rural" ? "rural" : "urban";
      break;
    case "farmerStatus":
      profile.farmerStatus = /^(yes|y|true)$/i.test(value);
      if (profile.farmerStatus) profile.landOwnership = true;
      break;
    case "studentStatus":
      profile.studentStatus = /^(yes|y|true)$/i.test(value);
      break;
    case "socialCategory":
      profile.socialCategory = value.toLowerCase();
      break;
    case "businessType":
      profile.businessType = value;
      break;
    case "businessStage":
      profile.businessStage = /new|greenfield|not started/i.test(value) ? "greenfield" : "existing";
      break;
    case "employmentStatus":
      profile.employmentStatus = value.toLowerCase().replace(/\s+/g, "_");
      break;
    case "incomeTaxPayer":
      profile.incomeTaxPayer = /^(yes|y|true)$/i.test(value);
      break;
    case "maritalStatus":
      profile.maritalStatus = value.toLowerCase();
      break;
    case "educationLevel":
      profile.educationLevel = value.toLowerCase().replace(/\s+/g, "_");
      break;
    default:
      break;
  }
}
