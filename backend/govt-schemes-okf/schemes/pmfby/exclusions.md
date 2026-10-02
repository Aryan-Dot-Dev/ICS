---
type: Government Scheme Exclusions
title: PMFBY — Exclusions
description: Risks and situations not covered under PMFBY.
scheme_id: PMFBY
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
    resource: https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf
    title: PMFBY Revised Operational Guidelines
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PMFBY — Exclusions

Losses attributable to the following are **excluded** from cover (per
operational guidelines) [S2]. The general exclusion effect for all rows is
`no_cover` (claim not payable); for structural exclusions (non-notified
crop/area) the effect is `ineligible`.

```yaml
exclusions:
  - id: EX-001
    field: applicant.crop_notified_in_area
    operator: is_false
    value: false
    detail: crop not notified by the State for that season/area
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-002
    field: risk.war_nuclear_risks
    operator: is_true
    value: true
    detail: losses from war, nuclear risks, malicious damage, other preventable risks
    effect: no_cover
    source: S2
    confidence: high

  - id: EX-003
    field: risk.theft_or_act_of_omission_by_insured
    operator: is_true
    value: true
    detail: theft, arson, or acts of omission/commission by the insured
    effect: no_cover
    source: S2
    confidence: high

  - id: EX-004
    field: risk.controllable_pest_disease
    operator: is_true
    value: true
    detail: preventable and controllable pest/disease incidence not arising from insured perils
    effect: no_cover
    source: S2
    confidence: high

  - id: EX-005
    field: risk.poor_storage_packaging
    operator: is_true
    value: true
    detail: losses due to poor packaging/transport/storage after prescribed post-harvest window
    effect: no_cover
    source: S2
    confidence: high

  - id: EX-006
    field: applicant.enrolment_before_cutoff
    operator: is_false
    value: false
    detail: enrolment after the season cut-off date — no cover attaches
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-007
    field: applicant.premium_paid
    operator: is_false
    value: false
    detail: farmer premium share not paid before cut-off
    effect: no_cover
    source: S2
    confidence: high
```

## Notes

- The engine must not present PMFBY as a guarantee against all farm
  losses; only notified perils on notified crops/areas are covered.
- State add-on perils (where adopted) are positive extensions, not
  defaults — do not include them as covered risks unless the State
  notification says so.
