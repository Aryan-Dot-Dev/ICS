---
type: "Government Scheme Eligibility"
title: "Udyam Registration Portal — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-18."
scheme_id: "ROW-18"
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
    resource: "https://udyamregistration.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://udyamregistration.gov.in/docs/Udyam_Metadata.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://udyamregistration.gov.in/docs/Buletin-I-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://udyamregistration.gov.in/docs/Buletin-II-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://udyamregistration.gov.in/docs/Buletin-III-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://udyamregistration.gov.in/docs/Buletin-IV-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://udyamregistration.gov.in/docs/Buletin-V-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://udyamregistration.gov.in/docs/Buletin-VI-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://udyamregistration.gov.in/docs/Buletin-VII-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://udyamregistration.gov.in/docs/Buletin-VIII-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://udyamregistration.gov.in/docs/Udyam_Clarification_28092022.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://udyamregistration.gov.in/docs/261838_220191.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://udyamregistration.gov.in/docs/225669.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://rbidocs.rbi.org.in/rdocs/notification/PDFs/NT272F8F1407DB8840F28E9300336B910E44.PDF"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://udyamregistration.gov.in/docs/SO1296.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://udyamregistration.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Udyam Registration Portal — Eligibility

_Machine-imported from runs/row-18/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| business ownership | no | no criterion recorded in source data |
| business type | yes | An enterprise is classified as micro, small, or medium based on investment in plant and machinery or… |
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
  - applicant.business.type
```