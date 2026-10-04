---
type: "Government Scheme Eligibility"
title: "Cooperative Societies Credit Support Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-317."
scheme_id: "ROW-317"
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
    resource: "https://ncdc.in/documents/whats-new/3011200126NCDC-Circular-Dated-04.11.2025-(1).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ncdc.in/index.jsp?page=common-application%3Den"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.ncdc.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Cooperative Societies Credit Support Scheme — Eligibility

_Machine-imported from runs/row-317/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | NCDC loan shall be provided to eligible Credit Cooperatives either through the concerned State Government/UT… |
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
    - rule_id: BUS-001
      field: applicant.business.min_operation_years
      operator: greater_than_or_equal
      value: 3
      type: hard
      source: S1
      confidence: medium
      detail: "NCDC loan shall be provided to eligible Credit Cooperatives either through the concerned State Government/UT administration or directly to the co-operatives which fulfill the following criteria: (a) The cooperative should have been in operation for not less than 3 years;"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.min_operation_years
  - applicant.state
```

Rule/concept references: [business-type](../../rules/business-type.md)
