---
type: "Government Scheme Documents"
title: "ECGC MSME Export Scheme — Documents"
description: "Document requirements for ROW-142."
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
# ECGC MSME Export Scheme — Documents

```yaml
documents:
  - id: export-invoice
    name: "Export invoice"
    required: always
    source: S1
    confidence: medium
  - id: shipping-bill
    name: "Shipping bill"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-export-bill-of-lading-airway-bi
    name: "Proof of export (bill of lading, airway bill)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-non-payment-by-buyer
    name: "Proof of non-payment by buyer"
    required: always
    source: S1
    confidence: medium
  - id: buyer-insolvency-or-bankruptcy-certifica
    name: "Buyer insolvency or bankruptcy certificate"
    required: always
    source: S1
    confidence: medium
  - id: ecgc-policy-copy
    name: "ECGC policy copy"
    required: always
    source: S1
    confidence: medium
  - id: claim-form-as-per-relief-scheme
    name: "Claim form as per RELIEF scheme"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-settlement
    name: "Bank account details for settlement"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-from-exporter
    name: "Authorization letter from exporter"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.