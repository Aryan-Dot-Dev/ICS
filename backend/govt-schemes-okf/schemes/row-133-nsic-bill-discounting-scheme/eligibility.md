---
type: "Government Scheme Eligibility"
title: "NSIC Bill Discounting Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-133."
scheme_id: "ROW-133"
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
    resource: "https://nsic.co.in/Schemes/BillDiscountingAgainstBG"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.nsic.co.in/scheme/bill-discounting"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NSIC Bill Discounting Scheme — Eligibility

_Machine-imported from runs/row-133/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Enterprise Type: Micro, Small & Medium Enterprises (MSMEs) engaged in manufacturing/service activities |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Counterparty: Supplies must be made to reputed Public Limited Companies / State and Central Govt. Departments /… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Counterparty: Supplies must be made to reputed Public Limited Companies / State and Central Govt. Departments /… |
| business type | yes | Enterprise Type: Micro, Small & Medium Enterprises (MSMEs) engaged in manufacturing/service activities |
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
| scheme-specific | yes | Registration: Mandatory Udyam Registration |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.udyam_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Mandatory Udyam Registration"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.udyam_registered
  - applicant.age
  - applicant.state
  - applicant.business.ownership
  - applicant.business.type
```