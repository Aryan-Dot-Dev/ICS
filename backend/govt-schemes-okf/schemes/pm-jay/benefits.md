---
type: Government Scheme Benefits
title: AB PM-JAY — Benefits
description: Health-cover benefit objects for AB PM-JAY.
scheme_id: PM-JAY
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
status: stable
stale_after: 2026-12-31
sources:
  - id: S1
    resource: https://pmjay.gov.in/
    title: AB PM-JAY official website
    author: National Health Authority
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2053883
    title: PIB — 70+ expansion
    author: PIB
    last_modified: 2024-10-14
---

# AB PM-JAY — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: HLT-001
    type: insurance
    name: Family health cover
    amount:
      value: 500000
      currency: INR
      frequency: annual
      unit: per_family_per_year_floating
    covers:
      - secondary and tertiary care hospitalisation
      - medical examination, treatment and consultation
      - pre-hospitalisation (up to 3 days) and post-hospitalisation (up to 15 days) expenses, per NHA package terms
      - non-time intensive procedures and intensive care
      - diagnostic services / lab tests as per package
      - pre-existing conditions covered from day one
    no_restrictions:
      - family size
      - age
      - gender
    delivery: cashless at empanelled hospitals via Ayushman Card
    contribution: none (no premium for beneficiary)
    conditions:
      - treatment at empanelled hospitals for covered packages
      - verification/eligibility as per database or 70+ branch
    source: S1
    confidence: high

  - benefit_id: HLT-002
    type: insurance
    name: Ayushman Vay Vandana cover for senior citizens 70+
    amount:
      value: 500000
      currency: INR
      frequency: annual
      unit: per_family_for_senior_member
    conditions:
      - individual age 70+ (any socio-economic status) [S2]
      - families already under AB PM-JAY receive an additional top-up cover up to Rs.5 lakh for the 70+ member(s) [S2]
    delivery: cashless via Ayushman Vay Vandana card
    source: S2
    confidence: high
```

## Notes

- Package/procedure rates are periodically revised by NHA (major
  revisions announced 2025) — absolute package prices are **not stored**
  (staleness by design); the engine links to pmjay.gov.in package
  search.
- The cover is a family-floating pool under HLT-001; HLT-002 adds
  individual senior-citizen cover/top-up per the 2024 expansion.
