---
type: "Government Scheme Eligibility"
title: "National Digital Health Mission (NDHM) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-199."
scheme_id: "ROW-199"
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
    resource: "https://abdm.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://abdm.gov.in/citizens"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://abdm.gov.in/health-facilities"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://abdm.gov.in/healthcare-professionals"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://abdm.gov.in/health-tech-companies"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://abdm.gov.in/for-states"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://abdm.gov.in/HMIS-lite"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://abdm.gov.in/abdm-components"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://abha.abdm.gov.in/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://abdm.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Digital Health Mission (NDHM) — Eligibility

_Machine-imported from runs/row-199/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | Citizens or individuals can generate a unique health identifier called the Ayushman Bharat Health Account or… |
| state | yes | State governments and health authorities can adopt ABDM to improve healthcare services. |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Healthcare professionals (doctors, nurses, paramedics, allied health workers) across all systems of medicine… |
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
  - applicant.citizenship
  - applicant.state
```