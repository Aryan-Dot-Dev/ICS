---
type: Rule Concept
title: Student Status
description: Enrolment, institution type, class/level and academic thresholds used by scholarship rules.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.student_status`

## Semantics

- `applicant.student_status` — `enrolled` | `not_enrolled`
- `applicant.educational_level` — `class_9` … `class_12` | `undergraduate`
  | `postgraduate` | `diploma` | `phd`
- `applicant.institution_type` — `government` | `government_aided` |
  `local_body` | `private` | `central_university` | other recognised
  categories
- `applicant.academic_score` — marks/percentile with scheme-specific metric

## Scheme-specific uses

| Scheme | Key student rules |
|---|---|
| [nsp-csss](../schemes/nsp/eligibility.md) | UG/PG regular course; top-merit Class-XII entry; ≥50% marks in prior annual exams for renewal |
| [pms-sc](../schemes/pms-sc/eligibility.md) | SC category; post-matric recognised course; full-time study (conditions per guidelines) |
| [nmmss](../schemes/nmmss/eligibility.md) | entry at Class 9; government/aided/local-body school at Class 8; ≥55% (relaxations for SC/ST/PwD); EXAM-based selection (MAT+SAT) |

## Engine notes

Selection-based schemes (NMMSS exam, CSSS merit cutoff) cannot be
eligibility-determined from profile data alone — mark such dimensions
`type: conditional` with `status: needs_information` for
`applicant.selection_result`. Gap-year/admission-year rules (CSSS
first-year entry) are hard per guidelines.
