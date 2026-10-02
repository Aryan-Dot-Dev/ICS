---
type: Government Scheme Exclusions
title: AB PM-JAY — Exclusions
description: Cases and care types not covered by AB PM-JAY.
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
---

# AB PM-JAY — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.household.in_pmjay_eligibility_database
    operator: is_false
    condition: applicant.age < 70
    detail: families not found in the SECC/state eligibility database and with no member aged 70+ are not covered
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: treatment.setting
    operator: equals
    value: non_empanelled_hospital
    detail: treatment at hospitals not empanelled with PM-JAY is not covered
    effect: no_cover
    source: S1
    confidence: high

  - id: EX-003
    field: treatment.type
    operator: equals
    value: outpatient_only
    detail: OPD consultations/medicines outside package definitions are not covered (packages define inclusions)
    effect: no_cover
    source: S1
    confidence: medium

  - id: EX-004
    field: treatment.procedure
    operator: not_in
    value: pmjay_package_list
    detail: procedures outside the NHA package list are not payable
    effect: no_cover
    source: S1
    confidence: high

  - id: EX-005
    field: treatment.category
    operator: in
    value: [cosmetic_or_aesthetic_procedures]
    detail: procedures of predominantly cosmetic/aesthetic nature and other categories excluded by NHA package policy
    effect: no_cover
    source: S1
    confidence: medium
```

## Notes

- The engine must treat EX-002/003/004 as **coverage exclusions** (the
  person may be eligible but a specific treatment may not be payable).
- State-specific exclusions/additions exist where States integrate their
  own top-up schemes; verify per State.
