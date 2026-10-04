---
type: "Government Scheme Eligibility"
title: "ESOP Tax Deferment for Startup Employees — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-414."
scheme_id: "ROW-414"
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
    resource: "https://startupindia.gov.in/content/dam/invest-india/HomePage/Startup-Playbook-Exclusive-Benefits-for-DPIIT-Recognised-Startups-in-India-April-2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "http://startupindia.gov.in/content/dam/startupindia/Tax-Playbook-for-Startup-Ecosystem-May-2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.startupindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# ESOP Tax Deferment for Startup Employees — Eligibility

_Machine-imported from runs/row-414/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | The employer must be a DPIIT-recognised startup under Section 140 of the Income Tax Act, 2025, incorporated… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | yes | The employer must be a DPIIT-recognised startup under Section 140 of the Income Tax Act, 2025, incorporated… |
| occupation | no | no criterion recorded in source data |
| employment status | yes | The employer must be a DPIIT-recognised startup under Section 140 of the Income Tax Act, 2025, incorporated… |
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
    - rule_id: TRN-001
      field: applicant.business.annual_turnover
      operator: less_than_or_equal
      value: 3000000000
      type: hard
      source: S1
      confidence: high
      detail: "The employer must be a DPIIT-recognised startup under Section 140 of the Income Tax Act, 2025, incorporated on or after 1st April 2016 and before 1st April 2030, with turnover not exceeding ₹300 crore in the relevant tax year, and engaged in innovation, development, or improvement of products, processes, or services, or having a scalable business model with high potential for employment generation or wealth creation."
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
  - applicant.annual_income
  - applicant.employment_status
```

Rule/concept references: [business-type](../../rules/business-type.md)
