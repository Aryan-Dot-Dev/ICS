---
type: "Government Scheme Eligibility"
title: "Metro Rail Policy – Private Participation — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-393."
scheme_id: "ROW-393"
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
    resource: "https://mohua.gov.in/static/uploads/2026/03/7e86f0b0917a72b22c772abe580b6fab.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mohua.gov.in/static/uploads/2026/03/848bf3d477f6a73f2dd84381819d4a90.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mohua.gov.in/static/uploads/2026/02/7e86f0b0917a72b22c772abe580b6fab.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mohua.gov.in/documents/acts-and-policies/policies-guidelines-of-urban-transport-UDNxUzMtQWa?pageTitle=Policies%2FGuidelines-of-Urban-Transport"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://mohua.gov.in/offerings/schemes-and-services/details/pm-ebus-sewa-gzM4cTMtQWa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://mohua.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Metro Rail Policy – Private Participation — Eligibility

_Machine-imported from runs/row-393/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Eligible entities include central and state government-owned Special Purpose Vehicles (SPVs) in 50:50 joint… |
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
  - applicant.state
```