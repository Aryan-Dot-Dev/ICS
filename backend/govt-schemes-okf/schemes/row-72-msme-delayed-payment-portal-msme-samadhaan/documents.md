---
type: "Government Scheme Documents"
title: "MSME Delayed Payment Portal (MSME SAMADHAAN) — Documents"
description: "Document requirements for ROW-72."
scheme_id: "ROW-72"
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
    resource: "https://samadhaan.msme.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MSME Delayed Payment Portal (MSME SAMADHAAN) — Documents

```yaml
documents:
  - id: udyam-registration-certificate
    name: "Udyam Registration Certificate"
    required: always
    source: S1
    confidence: medium
  - id: copy-of-invoice-s-for-goods-services-sup
    name: "Copy of invoice(s) for goods/services supplied"
    required: always
    source: S1
    confidence: medium
  - id: delivery-challan-or-proof-of-completion
    name: "Delivery challan or proof of completion of service"
    required: always
    source: S1
    confidence: medium
  - id: correspondence-related-to-payment-remind
    name: "Correspondence related to payment reminder or dispute"
    required: always
    source: S1
    confidence: medium
  - id: any-contract-or-purchase-order-reference
    name: "Any contract or purchase order reference"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.