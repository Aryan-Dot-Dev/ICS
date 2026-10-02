import { describe, test, expect } from "bun:test";
import {
  sanitizeProfile,
  sanitizeString,
  sanitizeNumber,
  sanitizeBoolean,
} from "./profileSanitize";

describe("sanitizeString", () => {
  test("trims and bounds length", () => {
    expect(sanitizeString("  hi  ", 3)).toBe("hi");
    expect(sanitizeString("abcdef", 3)).toBe("abc");
    expect(sanitizeString("   ")).toBeUndefined();
    expect(sanitizeString(42)).toBeUndefined();
  });
});

describe("sanitizeNumber", () => {
  test("coerces numeric strings and clamps", () => {
    expect(sanitizeNumber("42", 0, 100)).toBe(42);
    expect(sanitizeNumber(150, 0, 100)).toBe(100);
    expect(sanitizeNumber("abc", 0, 100)).toBeUndefined();
    expect(sanitizeNumber(null, 0, 100)).toBeUndefined();
  });
});

describe("sanitizeBoolean", () => {
  test("accepts booleans and string forms", () => {
    expect(sanitizeBoolean(true)).toBe(true);
    expect(sanitizeBoolean("false")).toBe(false);
    expect(sanitizeBoolean("yes")).toBeUndefined();
  });
});

describe("sanitizeProfile", () => {
  test("keeps known fields and drops unknown ones", () => {
    const out = sanitizeProfile({
      age: 32,
      state: "Haryana",
      hackerField: "<script>",
    });
    expect(out).toEqual({ age: 32, state: "Haryana" });
  });

  test("normalizes gender, rural/urban and income", () => {
    const out = sanitizeProfile({
      gender: "Female",
      ruralUrban: "RURAL",
      annualIncome: "300000",
    });
    expect(out.gender).toBe("female");
    expect(out.ruralUrban).toBe("rural");
    expect(out.annualIncome).toBe(300000);
  });

  test("accepts canonical businessStage greenfield/existing", () => {
    expect(sanitizeProfile({ businessStage: "Existing" }).businessStage).toBe("existing");
    expect(sanitizeProfile({ businessStage: "greenfield" }).businessStage).toBe("greenfield");
    expect(sanitizeProfile({ businessStage: "maybe" }).businessStage).toBeUndefined();
  });

  test("accepts projectCost within bounds", () => {
    expect(sanitizeProfile({ projectCost: "2500000" }).projectCost).toBe(2500000);
    expect(sanitizeProfile({ projectCost: -5 }).projectCost).toBe(0);
  });

  test("accepts maritalStatus vocabulary only", () => {
    expect(sanitizeProfile({ maritalStatus: "Widow" }).maritalStatus).toBe("widow");
    expect(sanitizeProfile({ maritalStatus: "complicated" }).maritalStatus).toBeUndefined();
  });

  test("accepts incomeTaxPayer boolean", () => {
    expect(sanitizeProfile({ incomeTaxPayer: "true" }).incomeTaxPayer).toBe(true);
    expect(sanitizeProfile({ incomeTaxPayer: false }).incomeTaxPayer).toBe(false);
  });

  test("enforces employmentStatus vocabulary", () => {
    expect(sanitizeProfile({ employmentStatus: "Salaried" }).employmentStatus).toBe("salaried");
    expect(sanitizeProfile({ employmentStatus: "self employed" }).employmentStatus).toBe("self_employed");
    expect(sanitizeProfile({ employmentStatus: "banana" }).employmentStatus).toBeUndefined();
  });

  test("enforces socialCategory vocabulary", () => {
    expect(sanitizeProfile({ socialCategory: "OBC" }).socialCategory).toBe("obc");
    expect(sanitizeProfile({ socialCategory: "rich" }).socialCategory).toBeUndefined();
  });

  test("rejects non-object input", () => {
    expect(sanitizeProfile(null)).toEqual({});
    expect(sanitizeProfile("hairy potato")).toEqual({});
  });
});
