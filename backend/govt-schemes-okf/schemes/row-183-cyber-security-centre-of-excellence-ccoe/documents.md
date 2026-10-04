---
type: "Government Scheme Documents"
title: "Cyber Security Centre of Excellence (CCoE) — Documents"
description: "Document requirements for ROW-183."
scheme_id: "ROW-183"
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
    resource: "https://meity.gov.in/ccoe"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://meity.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://meity.gov.in/connect"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.meity.gov.in/ccoe"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Cyber Security Centre of Excellence (CCoE) — Documents

```yaml
documents:
  - id: project-proposal-detailing-objectives-me
    name: "Project proposal detailing objectives, methodology, and expected outcomes"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-or-registra
    name: "Certificate of Incorporation or Registration of the entity"
    required: always
    source: S1
    confidence: medium
  - id: pan-and-gst-details-of-the-applicant
    name: "PAN and GST details of the applicant"
    required: always
    source: S1
    confidence: medium
  - id: technical-specifications-or-proof-of-con
    name: "Technical specifications or proof of concept (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: bank-account-details-for-financial-trans
    name: "Bank account details for financial transactions"
    required: always
    source: S1
    confidence: medium
  - id: authorized-signatory-letter
    name: "Authorized signatory letter"
    required: always
    source: S1
    confidence: medium
  - id: details-of-existing-funding-or-partnersh
    name: "Details of existing funding or partnerships (if any)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.