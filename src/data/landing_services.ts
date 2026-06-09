export interface LandingServiceHighlight {
  code: "GRANTS" | "START" | "DEBT" | "HUBS" | "VC";
  title: string;
  signal: string;
  description: string;
}

export const landingServiceHighlights: LandingServiceHighlight[] = [
  {
    code: "GRANTS",
    title: "Government Grants",
    signal: "Central + state subsidies",
    description: "Map projects against capital subsidies, PLI routes, and non-dilutive public funding windows.",
  },
  {
    code: "START",
    title: "Startup Schemes",
    signal: "DPIIT + seed support",
    description: "Structure recognitions, tax holiday claims, seed funds, and state startup policy benefits.",
  },
  {
    code: "DEBT",
    title: "Bank Financing",
    signal: "Collateral-free credit",
    description: "Prepare bankable dossiers for CGTMSE, term loans, working capital, and interest subvention.",
  },
  {
    code: "HUBS",
    title: "Incubation Connect",
    signal: "Labs + mentor networks",
    description: "Match ventures with incubators, TBIs, sandbox programs, and infrastructure access.",
  },
  {
    code: "VC",
    title: "Investor Connect",
    signal: "Angel to Series A",
    description: "Sharpen readiness, financial models, and warm investor introductions for growth rounds.",
  },
];
