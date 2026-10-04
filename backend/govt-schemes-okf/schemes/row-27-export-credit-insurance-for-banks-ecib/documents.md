---
type: "Government Scheme Documents"
title: "Export Credit Insurance for Banks (ECIB) — Documents"
description: "Document requirements for ROW-27."
scheme_id: "ROW-27"
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
    resource: "https://ecgc.in/ecib"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.ecgcltd.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.ecgc.in/ecib"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Export Credit Insurance for Banks (ECIB) — Documents

```yaml
documents:
  - id: loan-sanction-letter
    name: "Loan sanction letter"
    required: always
    source: S1
    confidence: medium
  - id: export-order-or-contract
    name: "Export order or contract"
    required: always
    source: S1
    confidence: medium
  - id: invoice-and-shipping-documents
    name: "Invoice and shipping documents"
    required: always
    source: S1
    confidence: medium
  - id: buyer-s-creditworthiness-details
    name: "Buyer’s creditworthiness details"
    required: always
    source: S1
    confidence: medium
  - id: bank-s-due-diligence-report
    name: "Bank’s due diligence report"
    required: always
    source: S1
    confidence: medium
  - id: policy-application-form
    name: "Policy application form"
    required: always
    source: S1
    confidence: medium
  - id: details-of-security-offered
    name: "Details of security offered"
    required: always
    source: S1
    confidence: medium
  - id: rbi-approval-if-applicable
    name: "RBI approval if applicable"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.