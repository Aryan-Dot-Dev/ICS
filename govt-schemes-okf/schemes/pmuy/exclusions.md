---
type: Government Scheme Exclusions
title: PMUY — Exclusions
description: Structured disqualifiers for PMUY.
scheme_id: PMUY
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
  - id: S2
    resource: https://www.pmuy.gov.in/ujjwala2.html
    title: PMUY 2.0 eligibility page
    author: MoPNG / OMCs
    last_modified: not_verified
  - id: S3
    resource: https://www.pmuy.gov.in/faq.html
    title: PMUY FAQ
    author: MoPNG / OMCs
    last_modified: not_verified
---

# PMUY — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.gender
    operator: not_equals
    value: female
    detail: PMUY connections are issued only to women applicants
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-002
    field: applicant.age
    operator: less_than
    value: 18
    detail: applicant must have attained 18 years
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-003
    field: applicant.household.has_other_omc_lpg_connection
    operator: is_true
    value: true
    detail: any existing LPG connection from any OMC in the same household bars a new PMUY connection
    effect: ineligible
    source: OMC de-duplication per S2
    confidence: high

  - id: EX-004
    field: applicant.already_pmuy_beneficiary
    operator: is_true
    value: true
    detail: one connection per beneficiary/household
    effect: ineligible
    source: S3
    confidence: high

  - id: EX-005
    field: applicant.household.eligible_category
    operator: not_in
    value: [sc, st, aay, pmay_beneficiary, forest_dweller, tea_garden, island_household, secc_deprived, other_poor_declaration]
    detail: households not covered by any target category or valid deprivation declaration
    effect: ineligible
    source: S3
    confidence: high
```

## Notes

- EX-003 is the highest-value exclusion — many applications fail on the
  "existing connection in household" test; the engine must ask this
  explicitly.
- A household member (not the woman herself) holding a connection still
  triggers EX-003.
