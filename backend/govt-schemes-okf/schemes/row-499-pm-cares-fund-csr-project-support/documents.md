---
type: "Government Scheme Documents"
title: "PM CARES Fund CSR Project Support — Documents"
description: "Document requirements for ROW-499."
scheme_id: "ROW-499"
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
    resource: "https://pmcares.gov.in/en/web/page/about_us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmcares.gov.in/en/web/page/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmcares.gov.in/en/web/contact_us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmcares.gov.in/assets/donation/pdf/Receipt_Download_User_Manual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.pmcares.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://pmcares.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM CARES Fund CSR Project Support — Documents

```yaml
documents:
  - id: mobile-number
    name: "Mobile number"
    required: always
    source: S1
    confidence: medium
  - id: transaction-order-number-merchant-order
    name: "Transaction Order Number / Merchant Order Number (for website/UPI donations)"
    required: always
    source: S1
    confidence: medium
  - id: bank-reference-number-for-direct-bank-tr
    name: "Bank Reference Number (for direct bank transactions)"
    required: always
    source: S1
    confidence: medium
  - id: utr-dd-cheque-bank-reference-number-for
    name: "UTR/DD/Cheque/Bank Reference Number (for NEFT/RTGS/IMPS/DD/Cheque/Cash)"
    required: always
    source: S1
    confidence: medium
  - id: donor-s-bank-account-number
    name: "Donor's Bank Account Number"
    required: always
    source: S1
    confidence: medium
  - id: donor-s-bank-ifsc-code-not-mandatory
    name: "Donor's Bank IFSC Code (not mandatory)"
    required: always
    source: S1
    confidence: medium
  - id: amount-donated
    name: "Amount donated"
    required: always
    source: S1
    confidence: medium
  - id: payment-date
    name: "Payment Date"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.