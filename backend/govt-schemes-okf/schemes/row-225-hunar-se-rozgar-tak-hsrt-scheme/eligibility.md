---
type: "Government Scheme Eligibility"
title: "Hunar Se Rozgar Tak (HSRT) Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-225."
scheme_id: "ROW-225"
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
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/06/4339f22795be4fe87a7b9c2ebe87761a.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/06/5def192bc5408131df03d7c1fa59bc86.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/06/219fa7fc3427c09fd97ea61faab24a83.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/06/090a0b6418f4eff50f520e1fb7b3993b.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://tourism.gov.in/hsrt"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Hunar Se Rozgar Tak (HSRT) Scheme — Eligibility

_Machine-imported from runs/row-225/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | For re-skilling or skill up-gradation of persons already engaged in an occupation, training programmes must… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | For re-skilling or skill up-gradation of persons already engaged in an occupation, training programmes must… |
| employment status | yes | The scheme targets persons with not much means and in need to acquire skills facilitative to employment. |
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
| scheme-specific | yes | Persons who have acquired skill through informal, non-formal or experiential training in any vocational… |

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
  - applicant.employment_status
```