---
type: "Government Scheme Eligibility"
title: "Jan Shikshan Sansthan (JSS) Vocational Training — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-489."
scheme_id: "ROW-489"
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
    resource: "https://jss.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Jan Shikshan Sansthan (JSS) Vocational Training — Eligibility

_Machine-imported from runs/row-489/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Beneficiaries must be non-literate, neo-literate, or persons with education level up to 8th standard, with… |
| gender | yes | Beneficiaries must be non-literate, neo-literate, or persons with education level up to 8th standard, with… |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Training is conducted through registered Jan Shikshan Sansthans (JSSs) which are NGOs or voluntary… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | yes | There is no upper age limit, but the focus is on adults and out-of-school youth. |
| educational level | yes | Beneficiaries must be non-literate, neo-literate, or persons with education level up to 8th standard, with… |
| social category | yes | Beneficiaries must be non-literate, neo-literate, or persons with education level up to 8th standard, with… |
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
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST, minority]
      type: soft
      source: S1
      confidence: medium
      detail: "Beneficiaries must be non-literate, neo-literate, or persons with education level up to 8th standard, with priority given to women, SC, ST, minorities, and other disadvantaged groups."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.age
  - applicant.gender
  - applicant.state
  - applicant.student_status
```

Rule/concept references: [social-category](../../concepts/social-category.md)
