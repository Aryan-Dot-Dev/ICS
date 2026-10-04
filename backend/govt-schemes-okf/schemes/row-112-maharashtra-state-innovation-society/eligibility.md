---
type: "Government Scheme Eligibility"
title: "Maharashtra State Innovation Society — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-112."
scheme_id: "ROW-112"
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
    resource: "https://maha-innovation.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Maharashtra State Innovation Society — Eligibility

_Machine-imported from runs/row-112/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Industry Partners: Must be engaged in innovative activities and registered in Maharashtra |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | Individual Innovators: Must be domiciled in Maharashtra |
| state | yes | Individual Innovators: Must be domiciled in Maharashtra |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | MSMEs: Must be registered as MSME in Maharashtra |
| student status | yes | Academic Institutions: Must be located in Maharashtra (universities, colleges, research centers) |
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
    - rule_id: ST-001
      field: applicant.state
      operator: equals
      value: "IN-MH"
      type: hard
      source: S1
      confidence: medium
      detail: "Must be domiciled in Maharashtra"
    - rule_id: ST-002
      field: applicant.state
      operator: equals
      value: "IN-MH"
      type: hard
      source: S1
      confidence: medium
      detail: "Must be registered or domiciled in Maharashtra"
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
  - applicant.citizenship
  - applicant.business.type
  - applicant.student_status
```

Rule/concept references: [state](../../rules/state.md)
