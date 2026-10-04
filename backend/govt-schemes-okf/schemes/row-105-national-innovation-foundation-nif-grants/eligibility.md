---
type: "Government Scheme Eligibility"
title: "National Innovation Foundation (NIF) Grants — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-105."
scheme_id: "ROW-105"
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
    resource: "https://nif.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Innovation Foundation (NIF) Grants — Eligibility

_Machine-imported from runs/row-105/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | unknown | source data empty — eligibility text not_verified |
| gender | unknown | source data empty — eligibility text not_verified |
| citizenship/residency | unknown | source data empty — eligibility text not_verified |
| state | yes | INSPIRE - MANAK Scheme: Students from all government or private schools across the country, irrespective of educational boards… |
| district | unknown | source data empty — eligibility text not_verified |
| rural/urban | yes | Internship Programme for Scouting and Documentation of Grassroots Innovations (GRIs): Students doing Graduation or Master Degree in Science, Engineering, Social Science, Development studies… |
| income | unknown | source data empty — eligibility text not_verified |
| occupation | unknown | source data empty — eligibility text not_verified |
| employment status | unknown | source data empty — eligibility text not_verified |
| farmer status | unknown | source data empty — eligibility text not_verified |
| landholding | unknown | source data empty — eligibility text not_verified |
| business ownership | unknown | source data empty — eligibility text not_verified |
| business type | unknown | source data empty — eligibility text not_verified |
| student status | yes | Internship Programme for Scouting and Documentation of Grassroots Innovations (GRIs): Students doing Graduation or Master Degree in Science, Engineering, Social Science, Development studies… |
| educational level | yes | Internship Programme for Scouting and Documentation of Grassroots Innovations (GRIs): Students doing Graduation or Master Degree in Science, Engineering, Social Science, Development studies… |
| social category | unknown | source data empty — eligibility text not_verified |
| disability status | unknown | source data empty — eligibility text not_verified |
| marital/family status | yes | INSPIRE - MANAK Scheme: Students from all government or private schools across the country, irrespective of educational boards… |
| pregnancy/maternity | unknown | source data empty — eligibility text not_verified |
| household status | yes | INSPIRE - MANAK Scheme: Students from all government or private schools across the country, irrespective of educational boards… |
| beneficiary under another scheme | unknown | source data empty — eligibility text not_verified |
| previous benefit | unknown | source data empty — eligibility text not_verified |
| bank account | unknown | source data empty — eligibility text not_verified |
| Aadhaar | unknown | source data empty — eligibility text not_verified |
| scheme-specific | unknown | source data empty — eligibility text not_verified |

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
  - applicant.student_status
```