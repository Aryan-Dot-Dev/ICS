---
type: "Government Scheme Eligibility"
title: "Support to Training & Employment Programme (STEP) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-235."
scheme_id: "ROW-235"
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
    resource: "https://wcd.nic.in/step-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Support to Training & Employment Programme (STEP) — Eligibility

_Machine-imported from runs/row-235/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Women aged 16 years and above across India are eligible to benefit from the scheme. |
| gender | yes | Women aged 16 years and above across India are eligible to benefit from the scheme. |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | The implementing agencies include Institutions/Organisations set up as Autonomous Bodies under… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | yes | The implementing agencies include Institutions/Organisations set up as Autonomous Bodies under… |
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
    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 16
      type: hard
      source: S1
      confidence: high
      detail: "Women aged 16 years and above across India are eligible to benefit from the scheme."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.age
  - applicant.gender
  - applicant.state
  - applicant.employment_status
```

Rule/concept references: [age](../../rules/age.md)
