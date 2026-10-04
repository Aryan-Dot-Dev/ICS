---
type: "Government Scheme Eligibility"
title: "Animal Husbandry Infrastructure Development Fund (AHIDF) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-310."
scheme_id: "ROW-310"
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
    resource: "https://ahidf.udyamimitra.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ahidf.udyamimitra.in/scheme-instruction.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ahidf.udyamimitra.in/scheme-benefits.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ahidf.udyamimitra.in/scheme-background.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ahidf.udyamimitra.in/scheme-objectives.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://ahidf.udyamimitra.in/faq.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://ahidf.udyamimitra.in/contact-us.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://ahidf.udyamimitra.in/PDF/ANIMAL-HUSBANDRY-INFRASTRUCTURE-DEVELOPMENT-FUND.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://ahidf.udyamimitra.in/PDF/Revised-AHIDF.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://ahidf.udyamimitra.in/PDF/ApplicantUserManual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://ahidf.udyamimitra.in/PDF/AHIDF-FAQs.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://ahidf.udyamimitra.in/Pdf/Revised-SOP-for-AHIDF.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://ahidf.udyamimitra.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Animal Husbandry Infrastructure Development Fund (AHIDF) — Eligibility

_Machine-imported from runs/row-310/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| occupation | yes | Farmer Producer Organization (FPO) b. |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Farmer Producer Organization (FPO) b. |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | Micro Small and Medium Enterprises |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | yes | Following are the eligible entities for availing benefits under the AHIDF Scheme: a. |
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
  - applicant.farmer_status
  - applicant.business.type
```