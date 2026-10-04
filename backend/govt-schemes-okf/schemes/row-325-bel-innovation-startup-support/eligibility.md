---
type: "Government Scheme Eligibility"
title: "BEL Innovation & Startup Support — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-325."
scheme_id: "ROW-325"
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
    resource: "https://bel-india.in/collaborative-rd/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://bel-india.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://bel-india.in/vision-mission-objectives/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://bel-india.in/history/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://bel-india.in/leadership/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://bel-india.in/resources-and-investments/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://bel-india.in/areas-of-rd-activity/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://bel-india.in/research-development/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://bel-india.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# BEL Innovation & Startup Support — Eligibility

_Machine-imported from runs/row-325/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | BEL collaborates with MSMEs and start-ups through its R&D and outsourcing policies, particularly via the… |
| student status | no | no criterion recorded in source data |
| educational level | yes | Empanelment is based on qualifications, demonstrated experience, patents granted, papers, papers, awards,… |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | for individual experts/consultants, and for R&D institutions and companies: Type of institution, number of… |

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
  - applicant.business.type
```