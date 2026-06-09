import { describe, expect, test } from "bun:test";
import { landingServiceHighlights } from "./landing_services";

describe("landing service highlights", () => {
  test("summarizes the five primary service channels for the landing page", () => {
    expect(landingServiceHighlights).toHaveLength(5);
    expect(landingServiceHighlights.map((service) => service.title)).toEqual([
      "Government Grants",
      "Startup Schemes",
      "Bank Financing",
      "Incubation Connect",
      "Investor Connect",
    ]);
    expect(new Set(landingServiceHighlights.map((service) => service.code)).size).toBe(5);
  });
});
