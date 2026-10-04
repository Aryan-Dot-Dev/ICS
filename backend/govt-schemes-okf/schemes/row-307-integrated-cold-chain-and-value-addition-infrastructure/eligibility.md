---
type: "Government Scheme Eligibility"
title: "Integrated Cold Chain and Value Addition Infrastructure — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-307."
scheme_id: "ROW-307"
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
    resource: "https://mofpi.gov.in/en/Schemes/about-pmksy-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mofpi.gov.in/Schemes/cold-chain/download-guidelines-0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mofpi.gov.in/Schemes/cold-chain/download-circulars-0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mofpi.gov.in/Schemes/food-safety-quality-assurance-infrastructure/setting-gradation-quality-control-food-testing-laboratory/release-funds"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://mofpi.gov.in/en/Schemes/about-mega-food-park-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://mofpi.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Integrated Cold Chain and Value Addition Infrastructure — Eligibility

_Machine-imported from runs/row-307/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | All Universities, IITs, Central/State Government Institutions, Government funded Organizations, R&D… |
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
| social category | yes | For the Integrated Cold Chain and Value Addition Infrastructure component, eligibility criteria are… |
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
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST]
      type: hard
      source: S1
      confidence: medium
      detail: "For the Integrated Cold Chain and Value Addition Infrastructure component, eligibility criteria are specified in the scheme guidelines and include prospective entrepreneurs, SC/ST category applicants, and NER region applicants as per EOI notices."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.state
```

Rule/concept references: [social-category](../../concepts/social-category.md)
