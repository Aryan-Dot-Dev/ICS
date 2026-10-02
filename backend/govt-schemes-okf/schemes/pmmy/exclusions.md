---
type: Government Scheme Exclusions
title: PMMY — Exclusions
description: Activities and cases not covered by PMMY Mudra loans.
scheme_id: PMMY
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
    resource: https://www.mudra.org.in/offerings
    title: MUDRA — Offerings
    author: MUDRA Ltd
    last_modified: not_verified
  - id: S3
    resource: https://www.jansamarth.in/business-loan-pradhan-mantri-mudra-yojana-scheme
    title: JanSamarth — PMMY business loan
    author: Department of Financial Services / NeGD
    last_modified: not_verified
---

# PMMY — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.business.activity_type
    operator: equals
    value: farm_cultivation
    detail: Mudra loans are for non-farm income-generating activity; pure farm-sector cultivation credit is covered by other products (e.g. KCC), not PMMY
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: loan.purpose
    operator: equals
    value: personal_consumption
    detail: PMMY funds income-generating activity, not personal consumption
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.prior_mudra_tarun_repaid
    operator: is_false
    value: false
    detail: Tarun Plus category is unavailable to borrowers without a successfully repaid Tarun loan (other categories remain available)
    effect: ineligible_for_tarun_plus_only
    source: S3
    confidence: high

  - id: EX-004
    field: applicant.business.size_class
    operator: in
    value: [medium, large]
    detail: PMMY targets micro and small units; medium/large enterprises are outside scheme scope
    effect: ineligible
    source: S1
    confidence: high
```

## Notes

- PMMY is collateral-free; lack of collateral is NOT an exclusion.
- There is no age, gender, caste or religion exclusion in the scheme
  documents reviewed; creditworthiness assessment by the lending
  institution is a process step, not an exclusion of the scheme.
