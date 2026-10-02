---
type: Government Scheme Exclusions
title: NSP / PM-USP CSSS — Exclusions
description: Structured disqualifiers for PM-USP CSSS.
scheme_id: NSP-CSSS
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
    resource: https://scholarships.gov.in/public/schemeGuidelines/Guidelines_DOHE_CSSS.pdf
    title: PM-USP CSSS Guidelines
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
  - id: S3
    resource: https://scholarships.gov.in/public/schemeGuidelines/FAQ_DOHE_CSSS.pdf
    title: PM-USP CSSS FAQ
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
---

# NSP / PM-USP CSSS — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.household_income
    operator: greater_than
    value: 450000
    detail: gross parental/family income above Rs.4.5 lakh per annum [S2]
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-002
    field: applicant.class12_percentile_rank
    operator: less_than
    value: 80
    detail: below the 80th percentile of the Board stream [S3]
    effect: ineligible
    source: S3
    confidence: high

  - id: EX-003
    field: applicant.course_mode
    operator: in
    value: [distance_learning, part_time, correspondence]
    detail: scholarship is for regular, full-time courses [S2]
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-004
    field: applicant.other_overlapping_scholarship
    operator: is_true
    value: true
    detail: cannot hold another scholarship with overlapping coverage (double-dipping rule) [S2]
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-005
    field: applicant.previous_year_marks_percent
    operator: less_than
    value: 50
    condition: scholarship_stage = renewal
    detail: renewal requires at least 50% in the prior annual examination [S3]
    effect: ineligible_for_renewal
    source: S3
    confidence: high

  - id: EX-006
    field: applicant.educational_level
    operator: in
    value: [diploma_only, school_stage]
    detail: diploma-only and school-stage students are outside CSSS (school-stage schemes like NMMSS exist separately)
    effect: ineligible
    source: S2
    confidence: high
```

## Notes

- EX-004's scope ("overlapping") is defined in the guidelines —
  category-scheme overlaps (e.g., PMS-SC) are the common case; the
  engine must surface this question during application season.
