---
type: "Government Scheme Eligibility"
title: "Central Silk Board – Bivoltine Silk Development Programme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-436."
scheme_id: "ROW-436"
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
    resource: "https://csb.gov.in/schemes/centrally-sponsored/bivoltine-promotion"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://csb.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Central Silk Board – Bivoltine Silk Development Programme — Eligibility

_Machine-imported from runs/row-436/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Specific eligibility criteria are not explicitly detailed in the evidence, but the scheme is implemented… |
| district | no | no criterion recorded in source data |
| rural/urban | yes | The programme targets stakeholders in the sericulture sector, including farmers and reelers, particularly… |
| income | no | no criterion recorded in source data |
| occupation | yes | The programme targets stakeholders in the sericulture sector, including farmers and reelers, particularly… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | The programme targets stakeholders in the sericulture sector, including farmers and reelers, particularly… |
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