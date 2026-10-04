---
type: "Government Scheme Eligibility"
title: "NE Development Finance Corporation (NEDFi) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-92."
scheme_id: "ROW-92"
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
    resource: "https://nedfi.com"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nedfi.com/loan-apply-form/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nedfi.com/short-term-loan-against-central-subsidy/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nedfi.com/loan-for-project-finance/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nedfi.com/loan-for-existing-and-new-business/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://nedfi.com/working-capital-loan/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://nedfi.com/loan-for-women-entrepreneurs/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://nedfi.com/loan-for-doctors/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://nedfi.com/loan-for-professional/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://nedfi.com/loan-for-speciality-tea-industry/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://nedfi.com/loan-for-artisans/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://nedfi.com/loan-against-liquid-security/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://nedfi.com/loan-for-micro-finance-institute/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://nedfi.com/wp-content/uploads/2021/09/NEDFi-MANDATORY-DISCLOSURE-UNDER-RTI-ACT.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://nedfi.com/wp-content/uploads/2024/12/NEDFi-Charges-Details.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NE Development Finance Corporation (NEDFi) — Eligibility

_Machine-imported from runs/row-92/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | for specific loans: women entrepreneurs (aged 18-50, skilled, in manufacturing/services), doctors (qualified… |
| gender | yes | for specific loans: women entrepreneurs (aged 18-50, skilled, in manufacturing/services), doctors (qualified… |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | for specific loans: women entrepreneurs (aged 18-50, skilled, in manufacturing/services), doctors (qualified… |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Eligibility varies by loan product but generally includes: entities such as sole proprietors, partnership… |
| business type | yes | for specific loans: women entrepreneurs (aged 18-50, skilled, in manufacturing/services), doctors (qualified… |
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

_No deterministic rule could be extracted from the source text with sufficient confidence._ `eligibility_rules.all: []` — the engine must not infer rules; evaluate against the dimension evidence above and request the missing fields below.

```yaml
eligibility_rules:
  all: []
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.age
  - applicant.gender
  - applicant.business.ownership
  - applicant.business.type
```