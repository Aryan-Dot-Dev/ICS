---
type: "Government Scheme Eligibility"
title: "CGTMSE (Credit Guarantee Fund Trust for MSEs) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-9."
scheme_id: "ROW-9"
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
    resource: "https://cgtmse.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://cgtmse.in/Home"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://cgtmse.in/Home/VS/94"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://cgtmse.in/Home/VS/95"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://cgtmse.in/Home/VS/50"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://cgtmse.in/Home/VS/56"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://cgtmse.in/Home/VS/72"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://cgtmse.in/Home/VS/8"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://cgtmse.in/DocumentRepository/ckfinder/files/Undertaking27072023.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://www.cgtmse.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# CGTMSE (Credit Guarantee Fund Trust for MSEs) — Eligibility

_Machine-imported from runs/row-9/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Eligible borrowers include new and existing Micro and Small Enterprises engaged in manufacturing or service… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Eligible Member Lending Institutions (MLIs) include Scheduled Commercial Banks (PSU, Private, Foreign),… |
| district | no | no criterion recorded in source data |
| rural/urban | yes | Eligible Member Lending Institutions (MLIs) include Scheduled Commercial Banks (PSU, Private, Foreign),… |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | Eligible borrowers include new and existing Micro and Small Enterprises engaged in manufacturing or service… |
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
| scheme-specific | yes | Borrowers must obtain IT PAN (mandatory for loans above ₹5 lakh) and Udyam Registration Number. |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.udyam_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Borrowers must obtain IT PAN (mandatory for loans above ₹5 lakh) and Udyam Registration Number."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.udyam_registered
  - applicant.age
  - applicant.state
  - applicant.business.type
```