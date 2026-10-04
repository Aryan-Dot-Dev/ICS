---
type: "Government Scheme Documents"
title: "Paramparagat Krishi Vikas Yojana (PKVY) – Organic Farming — Documents"
description: "Document requirements for ROW-146."
scheme_id: "ROW-146"
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
    resource: "https://pgsindia-ncof.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pgsindia-ncof.gov.in/about-us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pgsindia-ncof.gov.in/pgs-india"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pgsindia-ncof.gov.in/operational-structure"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://pgsindia-ncof.gov.in/Default/assets/front/PDF/Revised_PGS_India_Guidlines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://pgsindia-ncof.gov.in/PKVY"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Paramparagat Krishi Vikas Yojana (PKVY) – Organic Farming — Documents

```yaml
documents:
  - id: application-form
    name: "Application form"
    required: always
    source: S1
    confidence: medium
  - id: farm-history-sheet
    name: "Farm history sheet"
    required: always
    source: S1
    confidence: medium
  - id: farmers-pledge
    name: "Farmers pledge"
    required: always
    source: S1
    confidence: medium
  - id: mobile-number
    name: "Mobile number"
    required: always
    source: S1
    confidence: medium
  - id: aadhar-number
    name: "Aadhar number"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-optional
    name: "Bank account details (optional)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.