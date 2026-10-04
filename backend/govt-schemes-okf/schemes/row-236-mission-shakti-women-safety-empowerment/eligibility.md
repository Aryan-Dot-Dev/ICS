---
type: "Government Scheme Eligibility"
title: "Mission Shakti – Women Safety & Empowerment — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-236."
scheme_id: "ROW-236"
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
    resource: "https://wcd.nic.in/mission-shakti"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mission Shakti – Women Safety & Empowerment — Eligibility

_Machine-imported from runs/row-236/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | yes | The scheme targets all women and girls in India, with special focus on vulnerable and marginalized groups… |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Implementation is carried out through State Governments and UT Administrations based on need assessment and… |
| district | no | no criterion recorded in source data |
| rural/urban | yes | The scheme targets all women and girls in India, with special focus on vulnerable and marginalized groups… |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | The scheme targets all women and girls in India, with special focus on vulnerable and marginalized groups… |
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
  - applicant.gender
  - applicant.state
  - applicant.social_category
```