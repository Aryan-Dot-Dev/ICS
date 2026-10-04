---
type: "Government Scheme Eligibility"
title: "DSIR Recognition for In-house R&D Units — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-216."
scheme_id: "ROW-216"
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
    resource: "https://dsir.gov.in/offerings/schemes-and-services/details/recognition-of-in-house-rd-units-rdi-AjM0ETMtQWa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dsir.gov.in/static/uploads/2026/01/05d514e07138bda3a342a1837dfde57d.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://dsir.gov.in/offerings/schemes-and-services/details/online-application-submission-cjNzITMtQWa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.dsir.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# DSIR Recognition for In-house R&D Units — Eligibility

_Machine-imported from runs/row-216/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Companies seeking recognition should be engaged in manufacture or production or rendering technical services. |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | The R&D unit(s) should not be located in residential areas but should operate in premises authorized by… |
| state | yes | The R&D unit(s) should not be located in residential areas but should operate in premises authorized by… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | yes | The applicant should have regular source of income at least during the last two years to sustain the business. |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | Companies seeking recognition should be engaged in manufacture or production or rendering technical services. |
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
| scheme-specific | yes | Companies seeking recognition should be engaged in manufacture or production or rendering technical services. |

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
  - applicant.citizenship
  - applicant.state
  - applicant.annual_income
  - applicant.business.type
```