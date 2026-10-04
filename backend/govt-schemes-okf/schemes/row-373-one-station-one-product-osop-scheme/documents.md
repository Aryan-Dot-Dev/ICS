---
type: "Government Scheme Documents"
title: "One Station One Product (OSOP) Scheme — Documents"
description: "Document requirements for ROW-373."
scheme_id: "ROW-373"
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
    resource: "https://indianrailways.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://indianrailways.gov.in/contactUs.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://indianrailways.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# One Station One Product (OSOP) Scheme — Documents

```yaml
documents:
  - id: business-registration-certificate-if-app
    name: "Business registration certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: gst-registration-certificate
    name: "GST registration certificate"
    required: always
    source: S1
    confidence: medium
  - id: product-samples-and-photographs
    name: "Product samples and photographs"
    required: always
    source: S1
    confidence: medium
  - id: details-of-production-process-and-raw-ma
    name: "Details of production process and raw materials"
    required: always
    source: S1
    confidence: medium
  - id: identity-and-address-proof-of-the-applic
    name: "Identity and address proof of the applicant"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-revenue-settlem
    name: "Bank account details for revenue settlement"
    required: always
    source: S1
    confidence: medium
  - id: any-certifications-related-to-product-qu
    name: "Any certifications related to product quality or origin (e.g., GI tag, FSSAI)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.