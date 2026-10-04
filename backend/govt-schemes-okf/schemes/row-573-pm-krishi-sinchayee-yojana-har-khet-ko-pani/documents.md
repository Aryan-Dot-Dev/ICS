---
type: "Government Scheme Documents"
title: "PM Krishi Sinchayee Yojana – Har Khet Ko Pani — Documents"
description: "Document requirements for ROW-573."
scheme_id: "ROW-573"
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
    resource: "https://pmksy.gov.in/pdfLinks/FAQ.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmksy.gov.in/pdflinks/Guidelines_English.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmksy.gov.in/pdfLinks/PMKSY_UserManual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmksy.gov.in/pdfLinks/PMKSYMI_UserManual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://pmksy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM Krishi Sinchayee Yojana – Har Khet Ko Pani — Documents

```yaml
documents:
  - id: aadhaar-details-of-the-beneficiary
    name: "Aadhaar details of the beneficiary"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-or-cultivation-proof
    name: "Land ownership or cultivation proof"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-linked-with-aadhaar
    name: "Bank account details linked with Aadhaar"
    required: always
    source: S1
    confidence: medium
  - id: crop-details-and-area-under-cultivation
    name: "Crop details and area under cultivation"
    required: always
    source: S1
    confidence: medium
  - id: irrigation-source-details
    name: "Irrigation source details"
    required: always
    source: S1
    confidence: medium
  - id: cost-estimate-of-the-proposed-micro-irri
    name: "Cost estimate of the proposed micro irrigation system"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.