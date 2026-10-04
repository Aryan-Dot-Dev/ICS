---
type: "Government Scheme Eligibility"
title: "iStart Rajasthan — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-354."
scheme_id: "ROW-354"
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
    resource: "https://istart.rajasthan.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://istart.rajasthan.gov.in/registration/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://istart.rajasthan.gov.in/startup-eligibility-criteria"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://istart.rajasthan.gov.in/funding-incentives"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://istart.rajasthan.gov.in/bip"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://istart.rajasthan.gov.in/learn-earn-and-progress"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://istart.rajasthan.gov.in/atal-innovation-studio-and-accelerator"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://istart.rajasthan.gov.in/talentconnect"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://istart.rajasthan.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# iStart Rajasthan — Eligibility

_Machine-imported from runs/row-354/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| business ownership | yes | The startup should be registered as Sole Proprietorship, Private Limited/ OPC, Limited Liable Partnership,… |
| business type | yes | The startup should be registered as Sole Proprietorship, Private Limited/ OPC, Limited Liable Partnership,… |
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
  - applicant.business.ownership
  - applicant.business.type
```