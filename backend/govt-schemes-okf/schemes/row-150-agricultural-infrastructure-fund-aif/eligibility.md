---
type: "Government Scheme Eligibility"
title: "Agricultural Infrastructure Fund (AIF) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-150."
scheme_id: "ROW-150"
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
    resource: "https://agriinfra.dac.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://agriinfra.dac.gov.in/Home/SchemeOverview"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://agriinfra.dac.gov.in/Home/Objectives"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://agriinfra.dac.gov.in/Home/FundAllocation"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://agriinfra.dac.gov.in/Home/WhoCanApply"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/FINALSchemeGuidelinesAIF.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/91EE46A50D3941908F192725717E431B.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/DPR_TEMPLATE_HINDI.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/DPR Template for projects under Agriculture Infrastructure Fund1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://agriinfra.dac.gov.in/Home/CheckList"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://agriinfra.dac.gov.in/Home/MainFeatures"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://agriinfra.dac.gov.in/Home/InterestRate"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/B7373CFD15264E7AAD3CDC984E8D0F20.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://agriinfra.dac.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Agricultural Infrastructure Fund (AIF) — Eligibility

_Machine-imported from runs/row-150/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Eligible beneficiaries include Primary Agricultural Credit Societies (PACS), Marketing Cooperative… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Eligible beneficiaries include Primary Agricultural Credit Societies (PACS), Marketing Cooperative… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Eligible beneficiaries include Primary Agricultural Credit Societies (PACS), Marketing Cooperative… |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Eligible beneficiaries include Primary Agricultural Credit Societies (PACS), Marketing Cooperative… |
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
  - applicant.business.ownership
```