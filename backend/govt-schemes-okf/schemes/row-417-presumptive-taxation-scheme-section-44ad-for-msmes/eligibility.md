---
type: "Government Scheme Eligibility"
title: "Presumptive Taxation Scheme (Section 44AD) for MSMEs — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-417."
scheme_id: "ROW-417"
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
    resource: "https://www.incometaxindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://incometaxindia.gov.in/web/guest/notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://incometaxindia.gov.in/notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Presumptive Taxation Scheme (Section 44AD) for MSMEs — Eligibility

_Machine-imported from runs/row-417/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | The scheme is available to resident individuals, Hindu Undivided Families (HUFs), and partnership firms… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | The scheme is available to resident individuals, Hindu Undivided Families (HUFs), and partnership firms… |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Professionals (as defined under Section 44AA) are not eligible. |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | The scheme is available to resident individuals, Hindu Undivided Families (HUFs), and partnership firms… |
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
    - rule_id: TRN-001
      field: applicant.business.annual_turnover
      operator: less_than_or_equal
      value: 20000000
      type: hard
      source: S1
      confidence: high
      detail: "The total turnover or gross receipts from the business must not exceed INR 2 crores in the financial year."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.annual_turnover
  - applicant.age
  - applicant.citizenship
  - applicant.business.ownership
```

Rule/concept references: [business-type](../../rules/business-type.md)
