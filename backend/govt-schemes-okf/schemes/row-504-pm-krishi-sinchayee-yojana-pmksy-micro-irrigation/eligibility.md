---
type: "Government Scheme Eligibility"
title: "PM Krishi Sinchayee Yojana (PMKSY) – Micro Irrigation — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-504."
scheme_id: "ROW-504"
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
    resource: "https://pmksy.gov.in/pdfLinks/FAQ.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmksy.gov.in/pdfLinks/FAQ-Hindi.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmksy.gov.in/pdflinks/Guidelines_English.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmksy.gov.in/pdflinks/Guidelines_Hindi.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://pmksy.gov.in/pdfLinks/PMKSY_UserManual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://pmksy.gov.in/pdfLinks/PMKSYMI_UserManual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://pmksy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM Krishi Sinchayee Yojana (PMKSY) – Micro Irrigation — Eligibility

_Machine-imported from runs/row-504/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| occupation | yes | Farmers can apply for the scheme either in MIS system (online) or in offline mode. |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Farmers can apply for the scheme either in MIS system (online) or in offline mode. |
| landholding | yes | The subsidy payable to the beneficiary will be limited to an overall ceiling of 5 hectare per beneficiary. |
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
| Aadhaar | yes | Aadhaar details of the beneficiary are required to access the benefit of the programme. |
| scheme-specific | yes | Aadhaar details need to be linked through a web based registration process. |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: AAD-001
      field: applicant.aadhaar_held
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Aadhaar details of the beneficiary are required to access the benefit of the programme."
    - rule_id: AAD-002
      field: applicant.aadhaar_held
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Aadhaar details need to be linked through a web based registration process."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.aadhaar_held
  - applicant.farmer_status
  - applicant.land_ownership
```