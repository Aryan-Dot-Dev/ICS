---
type: "Government Scheme Eligibility"
title: "Maharashtra Industrial Development Corporation (MIDC) Schemes — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-349."
scheme_id: "ROW-349"
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
    resource: "https://midcindia.org/guide-to-investing/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://midcindia.org/about-midc/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://midcindia.org/industrial-policies-and-incentives/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://midcindia.org/single-window-clearance/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://midcindia.org/wp-content/uploads/2021/09/CITIZEN_CHARTER_2017.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://services.midcindia.org/services/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://midcindia.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Maharashtra Industrial Development Corporation (MIDC) Schemes — Eligibility

_Machine-imported from runs/row-349/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| employment status | yes | For MSME incentives, refer to Industrial Policy 2019 and Package Scheme of Incentives 2019 which classify… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | For MSME incentives, refer to Industrial Policy 2019 and Package Scheme of Incentives 2019 which classify… |
| business type | yes | For MSME incentives, refer to Industrial Policy 2019 and Package Scheme of Incentives 2019 which classify… |
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
  - applicant.employment_status
  - applicant.business.ownership
  - applicant.business.type
```