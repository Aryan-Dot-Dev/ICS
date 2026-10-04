---
type: "Government Scheme Eligibility"
title: "Food Testing Infrastructure – NABL Accreditation Support — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-568."
scheme_id: "ROW-568"
okf_version: "0.2"
generated:
  by: "process:runs-okf-generator"
  at: 2026-10-02
verified:
  - by: "process:runs-import-check"
    at: 2026-10-02
    note: "field presence and citations re-checked against the source ai_summary.json; content not re-verified against the live portal"
status: draft
stale_after: 2026-12-31
sources:
  - id: S1
    resource: "https://nabl-india.org/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nabl-india.org/about-nabl/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nabl-india.org/introduction/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nabl-india.org/nabl-accreditation-process-scope/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nabl-india.org/assessors-training-course-eligibility-selection-criteria/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://nabl-india.org/assessors-training-course-apply-for-training/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://nabl-india.org/benefits-of-accreditation/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://nabl-india.org/wp-content/uploads/2023/11/write-up_testing_09-01-20.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://nabl-india.org/wp-content/uploads/2025/09/Disciplines-of-Calibration-Laboratories-.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://nabl-india.org/wp-content/uploads/2025/09/Medical-Testing.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://nabl-india.org/wp-content/uploads/2025/09/Proficiency-Testing.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://nabl-india.org/wp-content/uploads/2025/09/Reference-Material-Producers.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://nabl-india.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://www.nabl-india.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Food Testing Infrastructure – NABL Accreditation Support — Eligibility

_Machine-imported from runs/row-568/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Assessors for training must be aged 38-55 years, hold a Bachelor’s in Engineering/Technology or Master’s in… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | no | no criterion recorded in source data |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.iec_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Eligibility varies by CAB type: Testing laboratories must comply with ISO/IEC 17025, calibration laboratories with ISO/IEC 17025, medical testing laboratories with ISO 15189, proficiency testing providers with ISO/IEC 17043, reference material producers with ISO 17034, and biobanks with ISO 20387."
    - rule_id: AGE-001
      field: applicant.age
      operator: between
      value: [38, 55]
      type: hard
      source: S1
      confidence: high
      detail: "Assessors for training must be aged 38-55 years, hold a Bachelor’s in Engineering/Technology or Master’s in Science (or relevant postgraduate/Ph.D."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.iec_registered
  - applicant.age
```

Rule/concept references: [age](../../rules/age.md)
