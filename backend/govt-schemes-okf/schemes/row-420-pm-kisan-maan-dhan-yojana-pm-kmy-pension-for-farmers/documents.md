---
type: "Government Scheme Documents"
title: "PM Kisan Maan Dhan Yojana (PM-KMY) Pension for Farmers — Documents"
description: "Document requirements for ROW-420."
scheme_id: "ROW-420"
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
    resource: "https://pmkmy.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmkmy.gov.in/scheme/pmkmy"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmkmy.gov.in/page/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmkmy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM Kisan Maan Dhan Yojana (PM-KMY) Pension for Farmers — Documents

```yaml
documents:
  - id: aadhaar-card
    name: "Aadhaar Card"
    required: always
    source: S1
    confidence: medium
  - id: savings-bank-account-number
    name: "Savings Bank Account Number"
    required: always
    source: S1
    confidence: medium
  - id: ifsc-code
    name: "IFSC Code"
    required: always
    source: S1
    confidence: medium
  - id: bank-passbook-or-cheque-leave-book-or-co
    name: "Bank Passbook or Cheque Leave/book or copy of bank statement as evidence of bank account"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.