---
type: "Government Scheme Eligibility"
title: "Karnataka Startup Policy — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-110."
scheme_id: "ROW-110"
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
    resource: "https://startup.karnataka.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Karnataka Startup Policy — Eligibility

_Machine-imported from runs/row-110/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | yes | Target Beneficiaries (Priority): Startups led by: Women, SC/ST, Differently Abled, Rural Entrepreneurs, Social Enterprises |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Recognition Status: DPIIT recognized OR certified by Karnataka State Startup Committee |
| district | no | no criterion recorded in source data |
| rural/urban | yes | Target Beneficiaries (Priority): Startups led by: Women, SC/ST, Differently Abled, Rural Entrepreneurs, Social Enterprises |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Legal Structure: Private Limited Company, LLP, or Partnership Firm |
| business type | yes | Legal Structure: Private Limited Company, LLP, or Partnership Firm |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Target Beneficiaries (Priority): Startups led by: Women, SC/ST, Differently Abled, Rural Entrepreneurs, Social Enterprises |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | Recognition Status: DPIIT recognized OR certified by Karnataka State Startup Committee |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.dpiit_recognized
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "DPIIT recognized OR certified by Karnataka State Startup Committee"
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST]
      type: soft
      source: S1
      confidence: medium
      detail: "Startups led by: Women, SC/ST, Differently Abled, Rural Entrepreneurs, Social Enterprises"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.dpiit_recognized
  - applicant.social_category
  - applicant.gender
  - applicant.state
  - applicant.business.ownership
  - applicant.business.type
```

Rule/concept references: [social-category](../../concepts/social-category.md)
