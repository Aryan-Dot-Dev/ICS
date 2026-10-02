---
type: Government Scheme Exclusions
title: NMMSS — Exclusions
description: Structured disqualifiers for NMMSS.
scheme_id: NMMSS
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
    resource: https://scholarships.gov.in/public/FAQ/NMSSS_FAQ.pdf
    title: NMMSS FAQ (NSP)
    author: Department of School Education & Literacy
    last_modified: not_verified
---

# NMMSS — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.institution_type
    operator: in
    value: [private_unaided, residential_central_schools_per_norms]
    detail: students of private unaided schools (and specified residential schools like KVS/NVS per scheme norms) are not eligible
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.household_income
    operator: greater_than
    value: 350000
    detail: parental income above Rs.3.5 lakh per annum
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.class8_marks_percent
    operator: less_than
    value: 55
    detail: below-threshold Class VIII marks (relaxations for SC/ST/PwD per norms)
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-004
    field: applicant.nmmss_exam_qualified
    operator: is_false
    value: false
    detail: non-qualification in the state NMMSS exam
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-005
    field: applicant.other_overlapping_scholarship
    operator: is_true
    value: true
    detail: overlapping scholarship holders are barred
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-006
    field: applicant.continuation_marks_percent
    operator: less_than
    value: 55
    condition: scholarship_stage = renewal
    detail: below 55% in the prior year breaks continuation (relaxations apply)
    effect: ineligible_for_renewal
    source: S1
    confidence: high
```

## Notes

- EX-001's residential-school scope follows scheme norms as summarised
  in the FAQ; state notifications govern specifics.
