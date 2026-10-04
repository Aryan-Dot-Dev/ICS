---
type: "Government Scheme Eligibility"
title: "Aquaculture Development Scheme (MPEDA) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-160."
scheme_id: "ROW-160"
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
    resource: "https://mpeda.gov.in/wp-content/uploads/2025/02/Evaluation_Impact_Assessment_Final_Report_05-Oct-2023.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mpeda.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mpeda.gov.in/?page_id=546"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mpeda.gov.in/?page_id=526"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://mpeda.gov.in/?page_id=1000"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://mpeda.gov.in/?page_id=638"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://mpeda.gov.in/wp-content/uploads/2026/06/Syllabus_1906.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://mpeda.gov.in/wp-content/uploads/2025/03/REVISED_TESTING_FEE_14March2025.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://mpeda.gov.in/wp-content/uploads/2026/05/HACCP_training_calendar_2026-27.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://mpeda.gov.in/wp-content/uploads/2025/05/Post-Budget-report.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://e-mpeda.nic.in/registration/Reg_login.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://mpeda.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Aquaculture Development Scheme (MPEDA) — Eligibility

_Machine-imported from runs/row-160/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Eligible beneficiaries include aquaculture farmers, exporters, fisheries cooperatives, and MSMEs engaged in… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Eligible beneficiaries include aquaculture farmers, exporters, fisheries cooperatives, and MSMEs engaged in… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Eligible beneficiaries include aquaculture farmers, exporters, fisheries cooperatives, and MSMEs engaged in… |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | Eligible beneficiaries include aquaculture farmers, exporters, fisheries cooperatives, and MSMEs engaged in… |
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
  - applicant.farmer_status
  - applicant.business.type
```