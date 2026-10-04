---
type: "Government Scheme Documents"
title: "Shram Suvidha Portal – Labour Compliance — Documents"
description: "Document requirements for ROW-304."
scheme_id: "ROW-304"
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
    resource: "https://shramsuvidha.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://shramsuvidha.gov.in/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://shramsuvidha.gov.in/startup-schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://shramsuvidha.gov.in/faqs-registration"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://shramsuvidha.gov.in/login-user-account"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://shramsuvidha.gov.in/contact-us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://shramsuvidha.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Shram Suvidha Portal – Labour Compliance — Documents

```yaml
documents:
  - id: proof-of-identity-of-the-employer
    name: "Proof of identity of the employer"
    required: always
    source: S1
    confidence: medium
  - id: pan-tan-of-the-employer
    name: "PAN/TAN of the employer"
    required: always
    source: S1
    confidence: medium
  - id: address-of-the-employer
    name: "Address of the employer"
    required: always
    source: S1
    confidence: medium
  - id: information-relating-to-employment-of-in
    name: "Information relating to employment of Inter-State migrant workers"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-or-registra
    name: "Certificate of Incorporation or Registration (for new establishments)"
    required: always
    source: S1
    confidence: medium
  - id: existing-registration-details-for-establ
    name: "Existing registration details (for establishments updating registration)"
    required: always
    source: S1
    confidence: medium
  - id: any-other-supporting-documents-as-specif
    name: "Any other supporting documents as specified in Form-I"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.