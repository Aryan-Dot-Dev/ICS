---
type: Government Scheme Exclusions
title: PMSBY — Exclusions
description: Events and persons excluded from PMSBY cover.
scheme_id: PMSBY
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
    resource: https://financialservices.gov.in/pradhan-mantri-suraksha-bima-yojana-pmsby
    title: DFS — PMSBY
    author: Department of Financial Services
    last_modified: not_verified
---

# PMSBY — Exclusions

Per the master policy terms published via DFS/insurers [S1]:

```yaml
exclusions:
  - id: EX-001
    field: applicant.age
    operator: not_between
    value: [18, 70]
    detail: only persons aged 18–70 can join
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: risk.event
    operator: equals
    value: non_accidental_death
    detail: death from non-accidental causes (illness/natural death) is not covered
    effect: no_cover
    source: S1
    confidence: high

  - id: EX-003
    field: risk.event
    operator: in
    value: [suicide_attempt_self_inflicted_injury, war_perils, criminal_act_by_insured, drug_alcohol_influence]
    detail: suicide/self-inflicted injury, war and war-peril losses, criminal acts, intoxication-related accidents per master policy exclusions
    effect: no_cover
    source: S1
    confidence: high

  - id: EX-004
    field: applicant.existing_pmsby_policies
    operator: greater_than_or_equal
    value: 1
    detail: one policy per individual across all banks
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-005
    field: applicant.auto_debit_consent
    operator: is_false
    value: false
    detail: without auto-debit consent (or failed premium debit) cover does not attach
    effect: no_cover
    source: S1
    confidence: high
```

## Notes

- The engine must distinguish **eligibility exclusions** (EX-001,
  EX-004) from **claim exclusions** (EX-002/003/005).
- Exact master-policy exclusion wording varies by insurer within the
  scheme framework; insurer policy documents govern claims.
