---
type: "Government Scheme Eligibility"
title: "Mine Developer and Operator (MDO) Policy — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-389."
scheme_id: "ROW-389"
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
    resource: "https://mines.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mines.gov.in/webportal/home"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mines.gov.in/webportal/aboutus"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mines.gov.in/webportal/content/functions"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://mines.gov.in/admin/download/6618d64f21dd11712903759.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mine Developer and Operator (MDO) Policy — Eligibility

_Machine-imported from runs/row-389/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| scheme-specific | yes | The MDO must also meet the net worth requirements as per the Mineral (Auction) Rules, 2015, depending on the… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: CTZ-001
      field: applicant.citizenship
      operator: equals
      value: "IN"
      type: hard
      source: S1
      confidence: medium
      detail: "The MDO must comply with the eligibility conditions specified under Section 5 of the Mines and Minerals (Development and Regulation) Act, 1957, including being an Indian national or a company incorporated in India."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.citizenship
```