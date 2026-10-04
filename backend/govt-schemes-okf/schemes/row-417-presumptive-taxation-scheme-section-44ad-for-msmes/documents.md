---
type: "Government Scheme Documents"
title: "Presumptive Taxation Scheme (Section 44AD) for MSMEs — Documents"
description: "Document requirements for ROW-417."
scheme_id: "ROW-417"
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
    resource: "https://www.incometaxindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://incometaxindia.gov.in/web/guest/notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://incometaxindia.gov.in/notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Presumptive Taxation Scheme (Section 44AD) for MSMEs — Documents

```yaml
documents:
  - id: pan-of-the-taxpayer
    name: "PAN of the taxpayer"
    required: always
    source: S1
    confidence: medium
  - id: aadhaar-number-for-individuals
    name: "Aadhaar number (for individuals)"
    required: always
    source: S1
    confidence: medium
  - id: bank-statement-or-proof-of-turnover
    name: "Bank statement or proof of turnover"
    required: always
    source: S1
    confidence: medium
  - id: details-of-digital-receipts-if-claiming
    name: "Details of digital receipts (if claiming 6% rate)"
    required: always
    source: S1
    confidence: medium
  - id: books-of-account-are-not-required-but-tu
    name: "Books of account are not required but turnover records should be retained"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.