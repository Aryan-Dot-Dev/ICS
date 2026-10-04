---
type: "Government Scheme Eligibility"
title: "HP Mukhya Mantri Swavalamban Yojana — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-530."
scheme_id: "ROW-530"
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
    resource: "https://mmsy.hp.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://emerginghimachal.hp.gov.in/themes/backend/uploads/notification/Notification/Operational-Guidelines-for-Mukhya-Mantri-Swawlamban-Yojna-2019.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mmsy.hp.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# HP Mukhya Mantri Swavalamban Yojana — Eligibility

_Machine-imported from runs/row-530/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Applicants must be between 18 and 45 years of age at the time of application. |
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
| educational level | yes | They must possess a minimum level of education and have a viable business proposal. |
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
    - rule_id: AGE-001
      field: applicant.age
      operator: between
      value: [18, 45]
      type: hard
      source: S1
      confidence: high
      detail: "Applicants must be between 18 and 45 years of age at the time of application."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.age
```

Rule/concept references: [age](../../rules/age.md)
