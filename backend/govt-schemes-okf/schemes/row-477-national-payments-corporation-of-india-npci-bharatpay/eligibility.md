---
type: "Government Scheme Eligibility"
title: "National Payments Corporation of India (NPCI) BharatPay — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-477."
scheme_id: "ROW-477"
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
    resource: "https://npci.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://npci.org.in/purpose-value"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://npci.org.in/digisaathi"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://npci.org.in/product/upi/use-npci"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://npci.org.in/product/nach/all-members"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.npci.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Payments Corporation of India (NPCI) BharatPay — Eligibility

_Machine-imported from runs/row-477/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| bank account | yes | Eligibility varies by product: For UPI, any individual with a bank account linked to a UPI-enabled app can… |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | no | no criterion recorded in source data |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: BNK-001
      field: applicant.bank_account_exists
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Eligibility varies by product: For UPI, any individual with a bank account linked to a UPI-enabled app can participate;"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.bank_account_exists
```