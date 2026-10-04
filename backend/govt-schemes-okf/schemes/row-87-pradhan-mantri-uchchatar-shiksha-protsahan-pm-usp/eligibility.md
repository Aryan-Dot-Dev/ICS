---
type: "Government Scheme Eligibility"
title: "Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-87."
scheme_id: "ROW-87"
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
    resource: "https://scholarship.up.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://scholarship.up.gov.in/index-hi.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://scholarship.up.gov.in/RegisterInstitute.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://scholarship.up.gov.in/RegistrationNew.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://scholarship.up.gov.in/Student2425/RegistrationNew.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) — Eligibility

_Machine-imported from runs/row-87/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | For post-matric (classes 11-12 and beyond), eligibility extends to SC, ST, General, Minority, and OBC… |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | yes | Students belonging to SC, ST, General, Minority, and OBC categories studying in recognized educational… |
| educational level | yes | Students belonging to SC, ST, General, Minority, and OBC categories studying in recognized educational… |
| social category | yes | Students belonging to SC, ST, General, Minority, and OBC categories studying in recognized educational… |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | yes | Applicants must have a bank account linked with Aadhaar and complete One Time Registration (OTR) before… |
| Aadhaar | yes | Applicants must have a bank account linked with Aadhaar and complete One Time Registration (OTR) before… |
| scheme-specific | yes | Applicants must have a bank account linked with Aadhaar and complete One Time Registration (OTR) before… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: ST-001
      field: applicant.state
      operator: equals
      value: "IN-UP"
      type: hard
      source: S1
      confidence: medium
      detail: "Students belonging to SC, ST, General, Minority, and OBC categories studying in recognized educational institutions in Uttar Pradesh are eligible."
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST, OBC, minority]
      type: hard
      source: S1
      confidence: medium
      detail: "For post-matric (classes 11-12 and beyond), eligibility extends to SC, ST, General, Minority, and OBC students pursuing intermediate, graduation, post-graduation, or professional courses."
    - rule_id: AAD-001
      field: applicant.aadhaar_held
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Applicants must have a bank account linked with Aadhaar and complete One Time Registration (OTR) before applying."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.state
  - applicant.social_category
  - applicant.aadhaar_held
  - applicant.student_status
  - applicant.bank_account_exists
```

Rule/concept references: [state](../../rules/state.md) · [social-category](../../concepts/social-category.md)
