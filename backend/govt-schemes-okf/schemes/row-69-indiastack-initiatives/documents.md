---
type: "Government Scheme Documents"
title: "IndiaStack Initiatives — Documents"
description: "Document requirements for ROW-69."
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
# IndiaStack Initiatives — Documents

```yaml
documents:
  - id: application-form-specific-to-esp
    name: "Application form (specific to ESP)"
    required: always
    source: S1
    confidence: medium
  - id: supporting-documents-for-kyc-verificatio
    name: "Supporting documents for KYC verification"
    required: always
    source: S1
    confidence: medium
  - id: digital-signature-certificate-public-key
    name: "Digital Signature Certificate (public key)"
    required: always
    source: S1
    confidence: medium
  - id: audit-report
    name: "Audit report"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-from-authorized-sig
    name: "Authorization letter from authorized signatory"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.