---
type: "Government Scheme Eligibility"
title: "MSME Assistance Programme Gujarat — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-534."
scheme_id: "ROW-534"
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
    resource: "https://ic.gujarat.gov.in/documents/commondoc/2025/MSME%20Special%20category%20award%20form.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ic.gujarat.gov.in/documents/commondoc/2025/MSME%20Special%20category%20award%20Checklist.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ic.gujarat.gov.in/documents/commondoc/2025/MSME%20Special%20Category%20GM%20Certificate.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ic.gujarat.gov.in/msme-facilitation-desk.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ic.gujarat.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MSME Assistance Programme Gujarat — Eligibility

_Machine-imported from runs/row-534/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Applicants must be MSMEs registered under Udyam (Micro/Small/Medium) with valid registration, engaged in… |
| gender | yes | Applicants must be first-generation entrepreneurs (if applying under Young Entrepreneur category), belong to… |
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
| business type | yes | Applicants must be MSMEs registered under Udyam (Micro/Small/Medium) with valid registration, engaged in… |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Applicants must be first-generation entrepreneurs (if applying under Young Entrepreneur category), belong to… |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | Applicants must be MSMEs registered under Udyam (Micro/Small/Medium) with valid registration, engaged in… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.udyam_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Applicants must be MSMEs registered under Udyam (Micro/Small/Medium) with valid registration, engaged in manufacturing or service activities, and have been in continuous production for the previous three years."
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST]
      type: hard
      source: S1
      confidence: medium
      detail: "Applicants must be first-generation entrepreneurs (if applying under Young Entrepreneur category), belong to SC/ST/women/general category as applicable, and submit audited financials for 2021-22 to 2024-25."
    - rule_id: GEN-001
      field: applicant.gender
      operator: equals
      value: "female"
      type: hard
      source: S1
      confidence: medium
      detail: "The unit must be owned by 51% or more women for Women Entrepreneur category, and applicants must be under 35 years for Young Entrepreneur category."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.udyam_registered
  - applicant.social_category
  - applicant.gender
  - applicant.age
  - applicant.business.type
```

Rule/concept references: [social-category](../../concepts/social-category.md) · [gender](../../rules/gender.md)
