---
type: "Government Scheme Eligibility"
title: "Jharkhand MSME Policy 2015 (Revised) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-545."
scheme_id: "ROW-545"
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
    resource: "https://jharkhand.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://jharkhand.gov.in/Home/DocumentList?doctype=45c48cce2e2d7fbdea1afc51c7c6ad26&subdoctype=02e74f10e0327ad868d138f2b4fdd6f0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://jharkhand.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Jharkhand MSME Policy 2015 (Revised) — Eligibility

_Machine-imported from runs/row-545/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Enterprises must be engaged in manufacturing or service activities and have valid registration to avail… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | yes | The policy applies to all Micro, Small, and Medium Enterprises as defined under the MSMED Act, 2006, that… |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | The policy applies to all Micro, Small, and Medium Enterprises as defined under the MSMED Act, 2006, that… |
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
| Aadhaar | yes | The policy applies to all Micro, Small, and Medium Enterprises as defined under the MSMED Act, 2006, that… |
| scheme-specific | yes | The policy applies to all Micro, Small, and Medium Enterprises as defined under the MSMED Act, 2006, that… |

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
  - applicant.business.type
  - applicant.aadhaar_held
```