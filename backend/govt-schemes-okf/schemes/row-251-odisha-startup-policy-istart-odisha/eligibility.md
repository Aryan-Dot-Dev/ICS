---
type: "Government Scheme Eligibility"
title: "Odisha Startup Policy & iStart Odisha — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-251."
scheme_id: "ROW-251"
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
    resource: "https://startupodisha.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupodisha.gov.in/startup-guidelines/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupodisha.gov.in/startup-incentives/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupodisha.gov.in/newsite/funds-for-fund/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupodisha.gov.in/wp-content/uploads/2021/04/Startup-Odisha-Profile-Booklet_1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startupodisha.gov.in/wp-content/uploads/2021/04/knowledgepaper.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://startupodisha.gov.in/wp-content/uploads/2021/04/List-of-Startups-Assisted.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://startupodisha.gov.in/wp-content/uploads/2021/04/Women-Led-Startups-Assisted.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://startupodisha.gov.in/wp-content/uploads/2021/04/Incubator-Assisted.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://startupodisha.gov.in/wp-content/uploads/2025/02/startup-odisha-grivance-escalation-matrix.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://startupodisha.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Odisha Startup Policy & iStart Odisha — Eligibility

_Machine-imported from runs/row-251/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | The applicant entity is encouraged to share its business plan along with the note on innovation. |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | OR Sanction Letter of funding/grant to the entity by Government of India or any State Government as part of… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | yes | If not registered in Odisha, the entity employs at least 50% of its total qualified workforce in Odisha. |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | yes | The entity is not an extension of the existing family business; |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | yes | The entity is not an extension of the existing family business; |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | The registration by a startup entity for recognition can be done online by simply filling a Startup… |

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
  - applicant.employment_status
```