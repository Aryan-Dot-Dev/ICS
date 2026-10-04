---
type: "Government Scheme Eligibility"
title: "Agristack – Federated Farmers Database — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-424."
scheme_id: "ROW-424"
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
    resource: "https://agristack.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://agristack.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://agristack.gov.in/assets/registries/farmerRegistry/farmer_registry_faqs.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Agristack – Federated Farmers Database — Eligibility

_Machine-imported from runs/row-424/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| occupation | yes | the Farmer Registry is compiled by States according to common standards, and each farmer is assigned a… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | the Farmer Registry is compiled by States according to common standards, and each farmer is assigned a… |
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
| beneficiary under another scheme | yes | the Farmer Registry is compiled by States according to common standards, and each farmer is assigned a… |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | yes | the Farmer Registry is compiled by States according to common standards, and each farmer is assigned a… |
| scheme-specific | no | no criterion recorded in source data |

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
      detail: "the Farmer Registry is compiled by States according to common standards, and each farmer is assigned a unique FarmerID based on Aadhaar as per IndEA 2.0, with minimal demographic details to enable identification and eligibility determination for availing government scheme benefits."
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
```