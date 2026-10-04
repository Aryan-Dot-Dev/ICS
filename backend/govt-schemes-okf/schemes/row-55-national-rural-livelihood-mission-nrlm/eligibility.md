---
type: "Government Scheme Eligibility"
title: "National Rural Livelihood Mission (NRLM) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-55."
scheme_id: "ROW-55"
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
    resource: "https://aajeevika.gov.in/nrlm"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://aajeevika.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Rural Livelihood Mission (NRLM) — Eligibility

_Machine-imported from runs/row-55/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | yes | Eligibility is based on poverty and social vulnerability criteria, with priority given to women, SC/ST,… |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | yes | The program targets rural poor households, particularly those identified through the Socio Economic and… |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Eligibility is based on poverty and social vulnerability criteria, with priority given to women, SC/ST,… |
| disability status | yes | Eligibility is based on poverty and social vulnerability criteria, with priority given to women, SC/ST,… |
| marital/family status | yes | The program targets rural poor households, particularly those identified through the Socio Economic and… |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | yes | The program targets rural poor households, particularly those identified through the Socio Economic and… |
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
      type: soft
      source: S1
      confidence: medium
      detail: "Eligibility is based on poverty and social vulnerability criteria, with priority given to women, SC/ST, persons with disabilities, and other marginalized groups."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.gender
  - applicant.disability_status
```

Rule/concept references: [social-category](../../concepts/social-category.md)
