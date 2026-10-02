---
type: Government Scheme Exclusions
title: PMEGP — Exclusions
description: Structured disqualifiers for PMEGP.
scheme_id: PMEGP
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
    resource: https://www.kviconline.gov.in/pmegpeportal/jsp/eligibility_criteria.jsp
    title: PMEGP Eligibility Criteria (KVIC e-portal)
    author: KVIC
    last_modified: not_verified
---

# PMEGP — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.business.stage
    operator: not_equals
    value: greenfield
    detail: only new units are eligible; existing units and units already assisted by other government schemes are excluded
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-002
    field: applicant.business.sector
    operator: equals
    value: trading
    detail: trading is not covered under PMEGP
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-003
    field: applicant.income_tax_payer
    operator: is_true
    value: true
    detail: income-tax payers are excluded per the eligibility criteria
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-004
    field: applicant.prior_similar_govt_subsidy_beneficiary
    operator: is_true
    value: true
    detail: beneficiaries of earlier similar central/state government subsidy schemes are not eligible
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-005
    field: applicant.business.units_promoted
    operator: greater_than
    value: 0
    detail: one unit per beneficiary rule
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-006
    field: applicant.educational_level
    operator: less_than
    value: class_8
    condition: applicant.business.sector = services AND applicant.business.project_cost > 1000000
    detail: VIII-pass education required only for service projects above Rs.10 lakh — conditional, not a blanket exclusion
    effect: ineligible_if_condition_holds
    source: S2
    confidence: high

  - id: EX-007
    field: applicant.educational_level
    operator: less_than
    value: class_10
    condition: applicant.business.sector = manufacturing AND applicant.business.project_cost > 2500000
    detail: X-pass education required only for manufacturing projects above Rs.25 lakh — conditional, not a blanket exclusion
    effect: ineligible_if_condition_holds
    source: S2
    confidence: high
```

## Notes

- EX-006/EX-007 are conditional — they apply only when their
  project-cost conditions hold; below those thresholds no formal
  education is required.
- The engine must pair these exclusion objects with the
  [eligibility.md](eligibility.md) rules; both layers carry the same
  factual basis and sources.
