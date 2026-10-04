---
type: "Government Scheme Eligibility"
title: "ECGC MSME Export Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-142."
scheme_id: "ROW-142"
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
    resource: "https://ecgc.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ecgc.in/claim-of-rs-65-00-lakhs-was-settled-by-ecgc-kochi-bo-to-m-s-ht-foods-pvt-ltd-on-account-of-non-payment-by-a-bahraini-buyer"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ecgc.in/ecgc-bangalore-branch-officials-handing-over-claim-cheque-of-rs-50-00-lakh-to-goodwill-fabrics"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ecgc.in/claim-payment-of-rs-13-5-lakh-by-ecgc-bangalore-branch-to-its-policyholder-s-s-groups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ecgc.in/policy-claim-cheque-of-rs-42-64-lakhs-was-handed-over-to-m-s-t-c-terrytex-ltd-the-claim-was-settled-on-account-of-the-default-by-a-buyer-m-s-la-compagnie-safdie-inc-canada"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://ecgc.in/disbursement-of-claim-cheque-for-amount-107269146-00-to-m-s-matrix-clothing-pvt-ltd-on-account-of-loss-due-to-insolvency-of-buyer-m-s-express-llc-usa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://www.ecgcltd.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://www.ecgc.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# ECGC MSME Export Scheme — Eligibility

_Machine-imported from runs/row-142/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| business type | yes | Target Beneficiaries: Indian exporters, particularly MSMEs |
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

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.pan_held
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Pan-India (exporters based in India)"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.pan_held
  - applicant.business.type
```