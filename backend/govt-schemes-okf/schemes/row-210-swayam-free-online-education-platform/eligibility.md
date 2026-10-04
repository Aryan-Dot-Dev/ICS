---
type: "Government Scheme Eligibility"
title: "SWAYAM Free Online Education Platform — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-210."
scheme_id: "ROW-210"
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
    resource: "https://swayam.gov.in/about"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://swayam.gov.in/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://swayam.gov.in/nc_details/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://swayam.gov.in/explorer"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://swayam.gov.in/honor_code"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://swayam.gov.in/terms_of_use"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://storage.googleapis.com/swayam2_central/swayam1/UGC_Gazette-Credit_Framework_for_Online_Courses_through_SWAYAM.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://storage.googleapis.com/swayam2_central/swayam1/wqimgtest_f8b95943-b963-49b9-85ed-416f2e15d1b4.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://storage.googleapis.com/swayam2_central/assets/pdf/Framework%20for%20Universities%20to%20conduct%20Examinations%20for%20SWAYAM%20Courses%2C%20with%20FAQs.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://storage.googleapis.com/swayam2_central/assets/pdf/University%20Dashboard%20User%20Guide%20-%20v1.0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://storage.googleapis.com/swayam2_central/assets/pdf/SWAYAM%20Steps%20for%20Credit%20Transfer%20for%20univColl21%20August%202024.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://nta.ac.in/Download/Notice/Notice_202601083306.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://swayam.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# SWAYAM Free Online Education Platform — Eligibility

_Machine-imported from runs/row-210/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | There is no specific eligibility or age criterion for joining any online course on SWAYAM. |
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
```