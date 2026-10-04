---
type: "Government Scheme Documents"
title: "IRCTC Startup Innovation Fund — Documents"
description: "Document requirements for ROW-326."
scheme_id: "ROW-326"
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
    resource: "https://irctc.co.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "http://contents.irctc.co.in/en/Advertisment_Disclaimer.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.irctc.co.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# IRCTC Startup Innovation Fund — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: pitch-deck-or-business-description
    name: "Pitch deck or business description"
    required: always
    source: S1
    confidence: medium
  - id: details-of-funding-received-if-any
    name: "Details of funding received (if any)"
    required: conditional
    source: S1
    confidence: medium
  - id: technical-prototype-or-mvp-details-if-ap
    name: "Technical prototype or MVP details (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: founder-profiles-and-kyc-documents
    name: "Founder profiles and KYC documents"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.