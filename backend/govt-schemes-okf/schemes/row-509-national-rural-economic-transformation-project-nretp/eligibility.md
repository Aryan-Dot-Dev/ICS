---
type: "Government Scheme Eligibility"
title: "National Rural Economic Transformation Project (NRETP) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-509."
scheme_id: "ROW-509"
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
    resource: "https://aajeevika.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Rural Economic Transformation Project (NRETP) — Eligibility

_Machine-imported from runs/row-509/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Benefits are extended to producer enterprises and collectives engaged in agricultural, livestock,… |
| gender | yes | The project targets rural poor households, particularly women, belonging to Self-Help Groups (SHGs) and… |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | yes | The project targets rural poor households, particularly women, belonging to Self-Help Groups (SHGs) and… |
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
| marital/family status | yes | The project targets rural poor households, particularly women, belonging to Self-Help Groups (SHGs) and… |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | yes | The project targets rural poor households, particularly women, belonging to Self-Help Groups (SHGs) and… |
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
```