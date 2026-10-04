---
type: "Government Scheme Eligibility"
title: "Maha Startup Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-113."
scheme_id: "ROW-113"
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
    resource: "https://startup.maharashtra.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Maha Startup Scheme — Eligibility

_Machine-imported from runs/row-113/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Incorporation Age: Not more than 5 years ago |
| gender | yes | Target Beneficiaries: Startups; women entrepreneurs; SC/ST; MSME (preference given) |
| citizenship/residency | yes | Founder Residency: At least one founder must be a resident of Maharashtra |
| state | yes | Founder Residency: At least one founder must be a resident of Maharashtra |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Legal Structure: Private Limited Company, LLP, or Partnership Firm under Companies Act, 2013 or LLP Act, 2008 |
| business type | yes | Legal Structure: Private Limited Company, LLP, or Partnership Firm under Companies Act, 2013 or LLP Act, 2008 |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Target Beneficiaries: Startups; women entrepreneurs; SC/ST; MSME (preference given) |
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
      value: 250000000
      type: hard
      source: S1
      confidence: high
      detail: "Must not exceed INR 25 Crore in any preceding financial year"
    - rule_id: ST-001
      field: applicant.state
      operator: equals
      value: "IN-MH"
      type: hard
      source: S1
      confidence: medium
      detail: "At least one founder must be a resident of Maharashtra"
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST]
      type: soft
      source: S1
      confidence: medium
      detail: "Startups; women entrepreneurs; SC/ST; MSME (preference given)"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.annual_turnover
  - applicant.state
  - applicant.social_category
  - applicant.age
  - applicant.gender
  - applicant.citizenship
  - applicant.business.ownership
  - applicant.business.type
```

Rule/concept references: [business-type](../../rules/business-type.md) · [state](../../rules/state.md) · [social-category](../../concepts/social-category.md)
