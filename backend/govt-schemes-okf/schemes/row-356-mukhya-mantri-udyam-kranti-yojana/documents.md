---
type: "Government Scheme Documents"
title: "Mukhya Mantri Udyam Kranti Yojana — Documents"
description: "Document requirements for ROW-356."
scheme_id: "ROW-356"
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
    resource: "https://samast.mponline.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://samast.mponline.gov.in/portal/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://samast.mponline.gov.in/portal/SamagraRegister"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://samast.mponline.gov.in/portal/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://samast.mponline.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mukhya Mantri Udyam Kranti Yojana — Documents

```yaml
documents:
  - id: aadhaar-number
    name: "Aadhaar number"
    required: always
    source: S1
    confidence: medium
  - id: updated-date-of-birth-documents-if-requi
    name: "Updated date of birth documents (if required by UIDAI)"
    required: conditional
    source: S1
    confidence: medium
  - id: active-mobile-number-linked-to-samagra-i
    name: "Active mobile number linked to Samagra ID"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-scheme-specific
    name: "Bank account details (for scheme-specific applications)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.