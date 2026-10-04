---
type: "Government Scheme Documents"
title: "Working Capital Loan Scheme (SIDBI) — Documents"
description: "Document requirements for ROW-17."
scheme_id: "ROW-17"
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
    resource: "https://sidbi.in/head/uploads/other_loans_document/GST Sahay Invoice based financing to SIDBI Customers.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sidbi.in/home-product"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://sidbi.in/en/home-product"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.sidbi.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Working Capital Loan Scheme (SIDBI) — Documents

```yaml
documents:
  - id: gst-registration
    name: "GST Registration"
    required: always
    source: S1
    confidence: medium
  - id: udyam-registration
    name: "Udyam Registration"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-2-years-of-business-operations
    name: "Proof of 2 years of business operations"
    required: always
    source: S1
    confidence: medium
  - id: last-audited-financial-statement-showing
    name: "Last audited financial statement showing cash accruals"
    required: always
    source: S1
    confidence: medium
  - id: purchase-or-sales-invoice-as-applicable
    name: "Purchase or Sales Invoice (as applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: kyc-documents
    name: "KYC documents"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-nach-mandate
    name: "Bank account details for NACH mandate"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.