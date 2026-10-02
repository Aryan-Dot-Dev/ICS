---
type: Government Scheme Exclusions
title: PMJJBY — Exclusions
description: Persons and events excluded from PMJJBY cover.
scheme_id: PMJJBY
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
    resource: https://financialservices.gov.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby
    title: DFS — PMJJBY
    author: Department of Financial Services
    last_modified: not_verified
---

# PMJJBY — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.age
    operator: not_between
    value: [18, 50]
    detail: entry only between 18 and 50 years of age
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.existing_pmjjby_policies
    operator: greater_than_or_equal
    value: 1
    detail: one policy per individual across all banks
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: risk.event
    operator: equals
    value: death_within_initial_waiting_period_from_preexisting_condition
    detail: master-policy condition — deaths in the initial policy period attributable to pre-existing conditions may be excluded per current policy wording (verify insurer terms)
    effect: no_cover
    source: S1
    confidence: medium

  - id: EX-004
    field: applicant.auto_debit_consent
    operator: is_false
    value: false
    detail: cover does not attach without premium debit (consent lapse)
    effect: no_cover
    source: S1
    confidence: high
```

## Notes

- EX-003 is policy-wording dependent and changes with master-policy
  revisions — confidence `medium`, verify at review time.
- War/nuclear/criminal-act style exclusions from the master policy
  apply as in standard group life terms; insurer documents govern.
