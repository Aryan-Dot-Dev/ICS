---
type: "Government Scheme Eligibility"
title: "Three-Year Tax Holiday for DPIIT Startups (80IAC) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-416."
scheme_id: "ROW-416"
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
    resource: "https://incometaxindia.gov.in/"
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
  - id: S4
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.incometaxindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Three-Year Tax Holiday for DPIIT Startups (80IAC) — Eligibility

_Machine-imported from runs/row-416/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| business ownership | yes | To be eligible for deduction under section 80-IAC, an entity must be a startup certified by the… |
| business type | yes | To be eligible for deduction under section 80-IAC, an entity must be a startup certified by the… |
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
      value: 1000000000
      type: hard
      source: S1
      confidence: high
      detail: "To be eligible for deduction under section 80-IAC, an entity must be a startup certified by the Inter-Ministerial Board (IMB), incorporated as a private limited company or a limited liability partnership (LLP) or a registered partnership firm, have been incorporated on or after 1st April, 2016 but before 1st April, 2025, and have an annual turnover not exceeding INR 100 crore in any of the financial years preceding the year in which deduction is claimed."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.annual_turnover
  - applicant.business.ownership
  - applicant.business.type
```

Rule/concept references: [business-type](../../rules/business-type.md)
