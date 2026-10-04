---
type: "Government Scheme Eligibility"
title: "EV Charging Infrastructure Development Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-589."
scheme_id: "ROW-589"
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
    resource: "https://beeindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://beeindia.gov.in/show_content.php?lang=1&level=0&lid=1&ls_id=49"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://beeindia.gov.in/show_content.php?lang=1&level=1&lid=2&ls_id=158"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://beeindia.gov.in/show_content.php?lang=1&level=1&lid=3&ls_id=159"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://beeindia.gov.in/WriteReadData/L45218/7425111601251321.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://beeindia.gov.in/WriteReadData/L45218/0391943254953922.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://beeindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# EV Charging Infrastructure Development Scheme — Eligibility

_Machine-imported from runs/row-589/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | General eligibility for BEE programmes includes industries, commercial establishments, MSMEs, and government… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | For EV charging infrastructure, states must designate State Nodal Agencies (SNAs) to coordinate deployment. |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | General eligibility for BEE programmes includes industries, commercial establishments, MSMEs, and government… |
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
  - applicant.state
  - applicant.business.type
```