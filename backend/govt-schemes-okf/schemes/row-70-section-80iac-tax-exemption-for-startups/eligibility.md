---
type: "Government Scheme Eligibility"
title: "Section 80IAC – Tax Exemption for Startups — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-70."
scheme_id: "ROW-70"
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
    resource: "https://www.incometax.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Section 80IAC – Tax Exemption for Startups — Eligibility

_Machine-imported from runs/row-70/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| employment status | yes | The startup must be working towards innovation, development or improvement of products or processes or… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | The startup must be a private limited company or a limited liability partnership (LLP) registered under the… |
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
| scheme-specific | yes | The startup must obtain DPIIT recognition and subsequently secure approval from the Inter-Ministerial Board… |

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
      detail: "The turnover of the startup must not exceed INR 100 crore in any of the financial years since incorporation."
    - rule_id: REG-001
      field: applicant.dpiit_recognized
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "The startup must obtain DPIIT recognition and subsequently secure approval from the Inter-Ministerial Board (IMB) set up by DPIIT."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.annual_turnover
  - applicant.dpiit_recognized
  - applicant.employment_status
  - applicant.business.ownership
```

Rule/concept references: [business-type](../../rules/business-type.md)
