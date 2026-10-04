---
type: "Government Scheme Eligibility"
title: "Blue Revolution – Neela Kranti — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-127."
scheme_id: "ROW-127"
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
    resource: "https://dof.gov.in/department"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dof.gov.in/offerings"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://dof.gov.in/static/uploads/2026/04/c57e8c28f900b35084f955fa8548bb3d.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://dof.gov.in/static/uploads/2026/04/4c8414e2082f1e1f156e305b3113f288.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://dof.gov.in/blue-revolution"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Blue Revolution – Neela Kranti — Eligibility

_Machine-imported from runs/row-127/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | State Governments: Submit project proposals through State Fisheries Departments |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Fish Farmers: Must submit project proposals via State Fisheries Departments |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Fish Farmers: Must submit project proposals via State Fisheries Departments |
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
  - applicant.farmer_status
```