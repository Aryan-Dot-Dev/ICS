---
type: Rule Concept
title: Age
description: Semantic meaning of applicant.age and its scheme-specific thresholds.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.age`

## Semantics

Age in completed years as on the date of application/enrolment. For SSY,
age is that of the **girl child** at account opening; for PMMVY it is the
mother's age at pregnancy registration; for PM-JAY (70+) age as on
enrolment.

## Scheme usages in this bundle

| Scheme | Rule | Type | Source basis |
|---|---|---|---|
| [pmuy](../schemes/pmuy/eligibility.md) | applicant.age >= 18 (woman applicant) | hard | pmuy.gov.in eligibility |
| [ssy](../schemes/ssy/eligibility.md) | child.age < 10 at account opening | hard | SS Rules 2019 (nsiindia.gov.in) |
| [apy](../schemes/apy/eligibility.md) | applicant.age between 18 and 40 at entry | hard | jansuraksha.gov.in APY brochure |
| [pmsby](../schemes/pmsby/eligibility.md) | applicant.age between 18 and 70 | hard | financialservices.gov.in/pmsby |
| [pmjjby](../schemes/pmjjby/eligibility.md) | applicant.age between 18 and 50 | hard | financialservices.gov.in/pmjjby |
| [nsap](../schemes/nsap/eligibility.md) | 60–79 (₹200), 80+ (₹500) IGNOAPS; 40–79 IGNWPS; 18–79 IGNDPS | hard | PIB Nov-2025 / NSAP |
| [pm-jay](../schemes/pm-jay/eligibility.md) | applicant.age >= 70 → universal cover branch | conditional | PIB Oct-2024 |
| [pmegp](../schemes/pmegp/eligibility.md) | applicant.age >= 18 | hard | KVIC e-portal eligibility |
| [pm-vishwakarma](../schemes/pm-vishwakarma/eligibility.md) | applicant.age >= 18 | hard | pmvishwakarma.gov.in |
| [pmmy](../schemes/pmmy/eligibility.md) | applicant.age >= 18 (per lending institutions) | soft | mudra.org.in / ULBs |
| [stand-up-india](../schemes/stand-up-india/eligibility.md) | applicant.age >= 18 | hard | standupmitra.in |
| [pmmvy](../schemes/pmmvy/eligibility.md) | applicant.age >= 19 (first-living-child benefit) | hard | PMMVY 1.0 FAQ/MBMW guidelines |
| [nmmss](../schemes/nmmss/eligibility.md) | class-based ( IX entry) rather than age | informational | NSP NMMSS FAQ |

## Engine notes

Age is the most common hard dimension. When age is missing, always emit
`needs_information: [applicant.age]` — never infer from other facts.
