---
type: "Government Scheme Eligibility"
title: "HP Startup Yojana & HIMSTART — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-258."
scheme_id: "ROW-258"
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
    resource: "https://hpkvn.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# HP Startup Yojana & HIMSTART — Eligibility

_Machine-imported from runs/row-258/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Women, SC/ST, and differently-abled entrepreneurs are encouraged to apply. |
| gender | yes | Women, SC/ST, and differently-abled entrepreneurs are encouraged to apply. |
| citizenship/residency | yes | The applicant must be a resident of Himachal Pradesh. |
| state | yes | The applicant must be a resident of Himachal Pradesh. |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | yes | The startup should be working on an innovative product, service, or process with potential for scalability… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | The startup should be registered as a Private Limited Company, LLP, Partnership Firm, or Proprietorship… |
| business type | yes | The startup should be registered as a Private Limited Company, LLP, Partnership Firm, or Proprietorship… |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Women, SC/ST, and differently-abled entrepreneurs are encouraged to apply. |
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
    - rule_id: ST-001
      field: applicant.state
      operator: equals
      value: "IN-HP"
      type: hard
      source: S1
      confidence: medium
      detail: "The applicant must be a resident of Himachal Pradesh."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.state
  - applicant.age
  - applicant.gender
  - applicant.citizenship
  - applicant.employment_status
  - applicant.business.ownership
  - applicant.business.type
  - applicant.social_category
```

Rule/concept references: [state](../../rules/state.md)
