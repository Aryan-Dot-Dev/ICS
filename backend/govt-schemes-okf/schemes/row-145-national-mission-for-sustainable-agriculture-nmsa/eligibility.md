---
type: "Government Scheme Eligibility"
title: "National Mission for Sustainable Agriculture (NMSA) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-145."
scheme_id: "ROW-145"
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
    resource: "https://nmsa.dac.gov.in/pdfdoc/NMSA_Guidelines_English.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nmsa.dac.gov.in/pdfDoc/circulers/SMAFrevalidationorder2021-22.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nmsa.dac.gov.in/pdfDoc/circulers/State-wiseallocationoffundsunderSMAFduring2021-22reg.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nmsa.dac.gov.in/pdfDoc/circulers/Brief_introduction_about_the_SMAF_scheme.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nmsa.dac.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Mission for Sustainable Agriculture (NMSA) — Eligibility

_Machine-imported from runs/row-145/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Eligible implementing agencies include State Departments of Agriculture, State Agricultural Universities… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | The scheme is implemented through State Governments and their subordinate offices/institutions. |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Beneficiaries are primarily farmers, especially small and marginal farmers in rainfed areas, who participate… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Beneficiaries are primarily farmers, especially small and marginal farmers in rainfed areas, who participate… |
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
  - applicant.age
  - applicant.state
  - applicant.farmer_status
```