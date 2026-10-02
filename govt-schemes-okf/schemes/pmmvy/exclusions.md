---
type: Government Scheme Exclusions
title: PMMVY — Exclusions
description: Structured disqualifiers for PMMVY.
scheme_id: PMMVY
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
    resource: https://pmmvy.wcd.gov.in/
    title: PMMVY portal
    author: Ministry of Women and Child Development
    last_modified: not_verified
---

# PMMVY — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.household.income_tax_payer_member
    operator: is_true
    value: true
    detail: households where any member paid income tax are excluded
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.household.government_employee_member
    operator: is_true
    value: true
    detail: government employees (who receive statutory maternity leave benefits) are excluded per guidelines
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.age
    operator: less_than
    value: 19
    condition: benefit.branch = first_living_child
    detail: below-19 mothers are outside the first-living-child benefit per PMMVY 1.0 guidelines
    effect: ineligible_for_branch
    source: S1
    confidence: medium
    note: verify current guideline wording for age condition and branches

  - id: EX-004
    field: applicant.live_births_prior_count
    operator: greater_than_or_equal
    value: 1
    condition: NOT applicant.second_child_is_girl
    detail: benefit is for the first living child; second-child claims allowed only when the second child is a girl
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-005
    field: applicant.similar_government_maternity_benefit_received
    operator: is_true
    value: true
    detail: women already availing similar maternity benefits from Government (per guidelines) are excluded
    effect: ineligible
    source: S1
    confidence: medium
    note: JSY interaction is a design feature, not a disqualifier — see benefits.md note
```

## Notes

- EX-003/EX-005 carry `confidence: medium` pending exact current
  guideline wording; the engine should present them as likely
  disqualifiers needing confirmation.
