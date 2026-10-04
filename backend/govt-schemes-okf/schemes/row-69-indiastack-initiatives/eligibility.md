---
type: "Government Scheme Eligibility"
title: "IndiaStack Initiatives — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-69."
scheme_id: "ROW-69"
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
    resource: "https://indiastack.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://indiastack.org/index.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://indiastack.org/identity.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://indiastack.org/payments.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://indiastack.org/data.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://indiastack.org/open-networks.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://indiastack.org/faq.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://uidai.gov.in/images/aadhaar_ekyc_api_2_0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://cca.gov.in/sites/files/pdf/esign/CCA-ASP.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://niti.gov.in/sites/default/files/2020-09/DEPA-Book_0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# IndiaStack Initiatives — Eligibility

_Machine-imported from runs/row-69/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | For eSign ASP onboarding, eligible entities include Central/State Government ministries, authorities under… |
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
| Aadhaar | yes | Eligibility varies by component: Aadhaar-based services (e-auth, e-KYC) are available to banks, licensed… |
| scheme-specific | yes | Eligibility varies by component: Aadhaar-based services (e-auth, e-KYC) are available to banks, licensed… |

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
      detail: "Eligibility varies by component: Aadhaar-based services (e-auth, e-KYC) are available to banks, licensed NBFCs, telecom companies, and government bodies;"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.aadhaar_held
  - applicant.state
```