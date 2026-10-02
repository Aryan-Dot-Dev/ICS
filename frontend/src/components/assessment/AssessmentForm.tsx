import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {
  BUSINESS_TYPES,
  STATES,
  GENDERS,
  SOCIAL_CATEGORIES,
  RURAL_URBAN,
  EMPLOYMENT_STATUSES,
  BUSINESS_STAGES,
  MARITAL_STATUSES,
  EDUCATION_LEVELS,
  countProfileValues,
  hasAnyProfileValue,
} from "./assessmentModel";
import type { AssessmentFormValues } from "./assessmentModel";

/**
 * Controlled assessment form fields (identity + business context + optional
 * eligibility profile). Pure presentation: values and callbacks come from the
 * page-level state hook.
 */
export function AssessmentFormFields({
  values,
  errors,
  requirementText,
  showRequirement,
  onFieldChange,
  onRequirementChange,
}: {
  values: AssessmentFormValues;
  errors: Record<string, string>;
  requirementText: string;
  showRequirement: boolean;
  onFieldChange: (name: keyof AssessmentFormValues, value: string) => void;
  onRequirementChange: (value: string) => void;
}) {
  const inputClass = (field: keyof AssessmentFormValues) =>
    `h-10 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg text-sm ${errors[field] ? "border-red-500 focus-visible:ring-red-100" : ""}`;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1 text-left">
          <Label htmlFor="name" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-500">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="e.g. Vikram Sharma"
            value={values.name}
            onChange={(e) => onFieldChange("name", e.target.value)}
            className={inputClass("name")}
          />
          {errors.name && <span className="text-[10px] font-semibold text-red-500">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="space-y-1 text-left">
          <Label htmlFor="email" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-500">
            Corporate Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. v.sharma@company.in"
            value={values.email}
            onChange={(e) => onFieldChange("email", e.target.value)}
            className={inputClass("email")}
          />
          {errors.email && <span className="text-[10px] font-semibold text-red-500">{errors.email}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="space-y-1 text-left">
          <Label htmlFor="phone" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-500">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="e.g. +91 98765 43210"
            value={values.phone}
            onChange={(e) => onFieldChange("phone", e.target.value)}
            className={inputClass("phone")}
          />
          {errors.phone && <span className="text-[10px] font-semibold text-red-500">{errors.phone}</span>}
        </div>

        {/* Business Name */}
        <div className="space-y-1 text-left">
          <Label htmlFor="businessName" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-500">
            Business Name
          </Label>
          <Input
            id="businessName"
            name="businessName"
            placeholder="e.g. Infotech Systems Ltd"
            value={values.businessName}
            onChange={(e) => onFieldChange("businessName", e.target.value)}
            className={inputClass("businessName")}
          />
          {errors.businessName && (
            <span className="text-[10px] font-semibold text-red-500">{errors.businessName}</span>
          )}
        </div>
      </div>

      {/* Business Type Selector */}
      <div className="space-y-1 text-left">
        <Label htmlFor="businessType" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-500">
          Business Vertical
        </Label>
        <Select
          value={values.businessType}
          onValueChange={(val) => onFieldChange("businessType", val)}
        >
          <SelectTrigger
            id="businessType"
            className={`w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-black shadow-xs outline-none focus:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 h-10 cursor-pointer ${errors.businessType ? "border-red-500" : ""}`}
          >
            <SelectValue placeholder="Select business sector" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-zinc-250 text-black">
            {BUSINESS_TYPES.map((bt) => (
              <SelectItem key={bt.value} value={bt.value}>
                {bt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.businessType && (
          <span className="text-[10px] font-semibold text-red-500 block">{errors.businessType}</span>
        )}
      </div>

      {/* Business Description */}
      <div className="space-y-1 text-left">
        <Label htmlFor="businessDescription" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-500">
          Business & Funding Goals Description
        </Label>
        <Textarea
          id="businessDescription"
          name="businessDescription"
          rows={3}
          placeholder="Describe your business, your situation and what you are looking for (e.g. 'I run a small tailoring unit in Haryana and need a loan to buy machines')."
          value={values.businessDescription}
          onChange={(e) => onFieldChange("businessDescription", e.target.value)}
          className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black text-sm min-h-[90px] resize-none ${errors.businessDescription ? "border-red-500 focus-visible:ring-red-100" : ""}`}
        />
        {errors.businessDescription && (
          <span className="text-[10px] font-semibold text-red-500">{errors.businessDescription}</span>
        )}
      </div>

      {/* Optional eligibility profile — feeds the recommendation engine directly */}
      <ProfileFieldsSection values={values} errors={errors} onFieldChange={onFieldChange} />

      {/* Natural-language requirements (progressive profile collection) */}
      {showRequirement && (
        <div className="space-y-1 text-left">
          <Label htmlFor="requirementText" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-500">
            Your Requirements <span className="text-zinc-300 font-bold normal-case tracking-normal">(optional — write naturally)</span>
          </Label>
          <Textarea
            id="requirementText"
            name="requirementText"
            rows={2}
            placeholder={"e.g. I am 32 years old, live in Haryana, earn about 3 lakh a year and want to start a dairy business."}
            value={requirementText}
            onChange={(e) => onRequirementChange(e.target.value)}
            className="rounded-lg border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black text-sm min-h-[60px] resize-none"
          />
          <span className="text-[10px] text-zinc-400 font-sans">
            Anything you mention here is extracted automatically — you don't need to repeat fields from above.
          </span>
        </div>
      )}
    </>
  );
}

/**
 * Expandable optional profile block. Every filled field is sent to the
 * engine as a structured fact, which converts "pending / more information
 * needed" verdicts into concrete eligible / not-eligible decisions on the
 * first run instead of after follow-up rounds.
 *
 * `forceOpen` keeps the fields always visible (used inside the edit modal,
 * where hiding them behind a toggle made them undiscoverable).
 */
export function ProfileFieldsSection({
  values,
  errors,
  onFieldChange,
  forceOpen = false,
}: {
  values: AssessmentFormValues;
  errors: Record<string, string>;
  onFieldChange: (name: keyof AssessmentFormValues, value: string) => void;
  forceOpen?: boolean;
}) {
  const [open, setOpen] = useState(forceOpen);
  const filled = countProfileValues(values);

  const inputClass = (field: keyof AssessmentFormValues) =>
    `h-10 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg text-sm ${errors[field] ? "border-red-500 focus-visible:ring-red-100" : ""}`;

  const selectClass = (field: keyof AssessmentFormValues) =>
    `w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-black shadow-xs outline-none focus:border-zinc-400 h-10 cursor-pointer ${errors[field] ? "border-red-500" : ""}`;

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left cursor-pointer hover:bg-zinc-50 transition-colors"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 min-w-0">
          <Sparkles size={14} className="text-primary shrink-0" />
          <span className="min-w-0">
            <span className="block font-sans text-xs font-extrabold text-black tracking-tight">
              About you <span className="text-zinc-400 font-semibold normal-case">(optional — improves accuracy)</span>
            </span>
            <span className="block text-[10px] text-zinc-400 font-sans mt-0.5">
              {filled > 0
                ? `${filled} detail${filled === 1 ? "" : "s"} added — these turn "more info needed" into firm answers`
                : "Age, state, income and category decide most scheme eligibility"}
            </span>
          </span>
        </span>
        <span className="flex items-center gap-2 shrink-0">
          {filled > 0 && (
            <span className="text-[9px] font-extrabold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5">
              {filled}
            </span>
          )}
          <ChevronDown
            size={16}
            className={`text-zinc-400 transition-transform duration-200 ${(forceOpen || open) ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {(forceOpen || open || hasAnyProfileValue(values)) && (
        <div className="px-4 pb-4 pt-1 space-y-4 border-t border-zinc-100 bg-white">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
            {/* Age */}
            <div className="space-y-1">
              <Label htmlFor="age" className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Age</Label>
              <Input
                id="age" name="age" type="number" inputMode="numeric" min={1} max={120}
                placeholder="e.g. 32"
                value={values.age}
                onChange={(e) => onFieldChange("age", e.target.value)}
                className={inputClass("age")}
              />
              {errors.age && <span className="text-[9px] font-semibold text-red-500">{errors.age}</span>}
            </div>

            {/* Gender */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Gender</Label>
              <Select value={values.gender} onValueChange={(v) => onFieldChange("gender", v)}>
                <SelectTrigger id="gender" className={selectClass("gender")}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black">
                  {GENDERS.map((g) => (
                    <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* State */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">State</Label>
              <Select value={values.state} onValueChange={(v) => onFieldChange("state", v)}>
                <SelectTrigger id="state" className={selectClass("state")}>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black max-h-64">
                  {STATES.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* Rural / Urban */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Area</Label>
              <Select value={values.ruralUrban} onValueChange={(v) => onFieldChange("ruralUrban", v)}>
                <SelectTrigger id="ruralUrban" className={selectClass("ruralUrban")}>
                  <SelectValue placeholder="Rural / Urban" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black">
                  {RURAL_URBAN.map((r) => (
                    <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Social category */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Category</Label>
              <Select value={values.socialCategory} onValueChange={(v) => onFieldChange("socialCategory", v)}>
                <SelectTrigger id="socialCategory" className={selectClass("socialCategory")}>
                  <SelectValue placeholder="General / OBC / SC / ST" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black">
                  {SOCIAL_CATEGORIES.map((c) => (
                    <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Annual household income */}
            <div className="space-y-1">
              <Label htmlFor="annualIncome" className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">
                Household income <span className="normal-case tracking-normal text-zinc-300">₹/yr</span>
              </Label>
              <Input
                id="annualIncome" name="annualIncome" inputMode="numeric"
                placeholder="e.g. 300000"
                value={values.annualIncome}
                onChange={(e) => onFieldChange("annualIncome", e.target.value)}
                className={inputClass("annualIncome")}
              />
              {errors.annualIncome && <span className="text-[9px] font-semibold text-red-500">{errors.annualIncome}</span>}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* Employment status */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Employment</Label>
              <Select value={values.employmentStatus} onValueChange={(v) => onFieldChange("employmentStatus", v)}>
                <SelectTrigger id="employmentStatus" className={selectClass("employmentStatus")}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black">
                  {EMPLOYMENT_STATUSES.map((e) => (
                    <SelectItem key={e.value} value={e.value}>{e.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Business stage */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Business stage</Label>
              <Select value={values.businessStage} onValueChange={(v) => onFieldChange("businessStage", v)}>
                <SelectTrigger id="businessStage" className={selectClass("businessStage")}>
                  <SelectValue placeholder="New / existing" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black">
                  {BUSINESS_STAGES.map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Project cost */}
            <div className="space-y-1">
              <Label htmlFor="projectCost" className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">
                Project cost <span className="normal-case tracking-normal text-zinc-300">₹</span>
              </Label>
              <Input
                id="projectCost" name="projectCost" inputMode="numeric"
                placeholder="e.g. 2000000"
                value={values.projectCost}
                onChange={(e) => onFieldChange("projectCost", e.target.value)}
                className={inputClass("projectCost")}
              />
              {errors.projectCost && <span className="text-[9px] font-semibold text-red-500">{errors.projectCost}</span>}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Marital status */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Marital status</Label>
              <Select value={values.maritalStatus} onValueChange={(v) => onFieldChange("maritalStatus", v)}>
                <SelectTrigger id="maritalStatus" className={selectClass("maritalStatus")}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black">
                  {MARITAL_STATUSES.map((m) => (
                    <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Education */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Education</Label>
              <Select value={values.educationLevel} onValueChange={(v) => onFieldChange("educationLevel", v)}>
                <SelectTrigger id="educationLevel" className={selectClass("educationLevel")}>
                  <SelectValue placeholder="Highest level" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black max-h-64">
                  {EDUCATION_LEVELS.map((e) => (
                    <SelectItem key={e.value} value={e.value}>{e.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Income tax payer */}
            <div className="space-y-1">
              <Label className="text-[9px] font-extrabold tracking-widest uppercase text-zinc-500">Pays income tax?</Label>
              <Select value={values.incomeTaxPayer} onValueChange={(v) => onFieldChange("incomeTaxPayer", v)}>
                <SelectTrigger id="incomeTaxPayer" className={selectClass("incomeTaxPayer")}>
                  <SelectValue placeholder="Yes / No" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-zinc-250 text-black">
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
