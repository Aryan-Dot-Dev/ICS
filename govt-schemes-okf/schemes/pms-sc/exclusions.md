---
type: Government Scheme Exclusions
title: PMS-SC — Exclusions
description: Structured disqualifiers for PMS-SC.
scheme_id: PMS-SC
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
    resource: https://socialjustice.gov.in/
    title: MoSJE — PMS-SC pages
    author: Ministry of Social Justice and Empowerment
    last_modified: not_verified
---

# PMS-SC — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.social_category
    operator: not_equals
    value: sc
    detail: scheme is for SC students (OBC/EBC/DNT students have PM-YASASVI routes; ST students have a separate PMS-ST)
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.household_income
    operator: greater_than
    value: 250000
    detail: parental income above Rs.2.5 lakh per annum
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.other_overlapping_scholarship
    operator: is_true
    value: true
    detail: holders of another overlapping central/state scholarship (including another post-matric scholarship) are barred
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-004
    field: applicant.course_status
    operator: in
    value: [discontinued, distance_mode_where_barred]
    detail: students who discontinued, or courses excluded by guidelines (distance/part-time where the guidelines bar them)
    effect: ineligible
    source: S1
    confidence: medium

  - id: EX-005
    field: applicant.attendance_below_threshold
    operator: is_true
    value: true
    detail: renewal conditions require prescribed attendance/progress per State implementation
    effect: ineligible_for_renewal
    source: S1
    confidence: medium
```

## Notes

- EX-004/EX-005 depend on State-level operationalisation; keep
  `confidence: medium` and defer to State notifications.
