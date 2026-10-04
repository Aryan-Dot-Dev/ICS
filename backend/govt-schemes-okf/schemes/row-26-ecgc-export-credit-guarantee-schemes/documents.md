---
type: "Government Scheme Documents"
title: "ECGC Export Credit Guarantee Schemes — Documents"
description: "Document requirements for ROW-26."
scheme_id: "ROW-26"
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
    resource: "https://ecgc.in/claim-paid-details-by-ecgc"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ecgc.in/national-export-insurance-account-neia"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.ecgc.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# ECGC Export Credit Guarantee Schemes — Documents

```yaml
documents:
  - id: export-order-or-contract
    name: "Export order or contract"
    required: always
    source: S1
    confidence: medium
  - id: commercial-invoice
    name: "Commercial invoice"
    required: always
    source: S1
    confidence: medium
  - id: bill-of-lading-or-airway-bill
    name: "Bill of lading or airway bill"
    required: always
    source: S1
    confidence: medium
  - id: buyer-details-and-creditworthiness-infor
    name: "Buyer details and creditworthiness information"
    required: always
    source: S1
    confidence: medium
  - id: bank-sanction-letter-if-seeking-finance
    name: "Bank sanction letter (if seeking finance)"
    required: always
    source: S1
    confidence: medium
  - id: export-credit-guarantee-application-form
    name: "Export credit guarantee application form"
    required: always
    source: S1
    confidence: medium
  - id: rcmc-or-iec-certificate
    name: "RCMC or IEC certificate"
    required: always
    source: S1
    confidence: medium
  - id: gst-registration-certificate
    name: "GST registration certificate"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.