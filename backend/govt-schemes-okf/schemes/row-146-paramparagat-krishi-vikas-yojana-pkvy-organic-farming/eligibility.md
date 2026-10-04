---
type: "Government Scheme Eligibility"
title: "Paramparagat Krishi Vikas Yojana (PKVY) – Organic Farming — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-146."
scheme_id: "ROW-146"
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
    resource: "https://pgsindia-ncof.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pgsindia-ncof.gov.in/about-us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pgsindia-ncof.gov.in/pgs-india"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pgsindia-ncof.gov.in/operational-structure"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://pgsindia-ncof.gov.in/Default/assets/front/PDF/Revised_PGS_India_Guidlines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://pgsindia-ncof.gov.in/PKVY"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Paramparagat Krishi Vikas Yojana (PKVY) – Organic Farming — Eligibility

_Machine-imported from runs/row-146/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Farmer groups, self-help groups, producers, and other collectives engaged in agriculture and willing to… |
| gender | yes | Preference is given to small and marginal farmers, women farmers, and those from SC/ST communities. |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Farmer groups, self-help groups, producers, and other collectives engaged in agriculture and willing to… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Farmer groups, self-help groups, producers, and other collectives engaged in agriculture and willing to… |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Preference is given to small and marginal farmers, women farmers, and those from SC/ST communities. |
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
  - applicant.farmer_status
  - applicant.social_category
```