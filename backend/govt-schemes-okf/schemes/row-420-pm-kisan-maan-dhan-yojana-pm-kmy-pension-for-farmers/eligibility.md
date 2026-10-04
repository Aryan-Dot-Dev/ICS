---
type: "Government Scheme Eligibility"
title: "PM Kisan Maan Dhan Yojana (PM-KMY) Pension for Farmers — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-420."
scheme_id: "ROW-420"
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
    resource: "https://pmkmy.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmkmy.gov.in/scheme/pmkmy"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmkmy.gov.in/page/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmkmy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM Kisan Maan Dhan Yojana (PM-KMY) Pension for Farmers — Eligibility

_Machine-imported from runs/row-420/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | All Small and Marginal Farmers having cultivable landholding up to 2 hectares falling in the age group of 18… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | However, the following are ineligible: SMFs covered under any other statutory social security schemes such… |
| district | yes | former and present Mayors of Municipal Corporations and Chairpersons of District Panchayats; |
| rural/urban | no | no criterion recorded in source data |
| income | yes | all persons who paid Income Tax in the last assessment year; |
| occupation | yes | All Small and Marginal Farmers having cultivable landholding up to 2 hectares falling in the age group of 18… |
| employment status | yes | However, the following are ineligible: SMFs covered under any other statutory social security schemes such… |
| farmer status | yes | All Small and Marginal Farmers having cultivable landholding up to 2 hectares falling in the age group of 18… |
| landholding | yes | All Small and Marginal Farmers having cultivable landholding up to 2 hectares falling in the age group of 18… |
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
    - rule_id: AGE-001
      field: applicant.age
      operator: between
      value: [18, 40]
      type: hard
      source: S1
      confidence: high
      detail: "All Small and Marginal Farmers having cultivable landholding up to 2 hectares falling in the age group of 18 to 40 years, whose names appear in the land records of States/UTs as on 01.08.2019 are eligible."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.age
  - applicant.state
  - applicant.annual_income
  - applicant.employment_status
  - applicant.farmer_status
  - applicant.land_ownership
```

Rule/concept references: [age](../../rules/age.md)
