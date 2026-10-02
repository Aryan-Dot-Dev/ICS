---
type: Government Scheme Exclusions
title: PMAY-U 2.0 — Exclusions
description: Structured disqualifiers for PMAY-U 2.0.
scheme_id: PMAY-U
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
    resource: https://pmay-urban.gov.in/
    title: PMAY-Urban official website
    author: MoHUA
    last_modified: not_verified
  - id: S3
    resource: https://pmaymis.gov.in/PMAYMIS2_2024/PmayISS.aspx
    title: PMAY-U 2.0 ISS page
    author: MoHUA / PMAY MIS
    last_modified: not_verified
---

# PMAY-U 2.0 — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.household.has_pucca_house_anywhere_in_india
    operator: is_true
    value: true
    detail: family owning a pucca (all-weather dwelling) house anywhere in India is ineligible (exception: built-up area < 21 sq.m may qualify for enhancement up to 30 sq.m per mission norms [S1])
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.household.prior_pmay_benefit_received
    operator: is_true
    value: true
    detail: an eligible beneficiary can take advantage of only one of the Mission's verticals; families that already received central housing assistance under PMAY are excluded
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.rural_urban_status
    operator: equals
    value: rural
    detail: rural households are covered by PMAY-G, not PMAY-U
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-004
    field: loan.house_value
    operator: greater_than
    value: 3500000
    detail: houses valued above Rs.35 lakh are outside ISS (other verticals unaffected)
    effect: ineligible_for_iss_only
    source: S3
    confidence: high

  - id: EX-005
    field: loan.sanction_date
    operator: less_than
    value: "2024-09-01"
    detail: ISS applies only to loans sanctioned and disbursed on/after 01.09.2024
    effect: ineligible_for_iss_only
    source: S3
    confidence: high
```

## Notes

- EX-001's sub-21-sq.m enhancement exception is the one official carve-
  out; the engine must not apply EX-001 mechanically when the existing
  pucca house is below 21 sq.m built-up area [S1].
- Married couples get one house only, subject to joint ownership and
  income eligibility [S1].
