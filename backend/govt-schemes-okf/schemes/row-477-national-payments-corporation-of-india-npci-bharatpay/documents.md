---
type: "Government Scheme Documents"
title: "National Payments Corporation of India (NPCI) BharatPay — Documents"
description: "Document requirements for ROW-477."
scheme_id: "ROW-477"
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
    resource: "https://npci.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://npci.org.in/purpose-value"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://npci.org.in/digisaathi"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://npci.org.in/product/upi/use-npci"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://npci.org.in/product/nach/all-members"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.npci.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Payments Corporation of India (NPCI) BharatPay — Documents

```yaml
documents:
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: mobile-number-linked-to-bank-account
    name: "Mobile number linked to bank account"
    required: always
    source: S1
    confidence: medium
  - id: kyc-documents-aadhaar-pan-etc-as-per-ban
    name: "KYC documents (Aadhaar, PAN, etc.) as per bank requirements"
    required: always
    source: S1
    confidence: medium
  - id: for-merchants-business-registration-proo
    name: "For merchants: Business registration proof, bank account, PAN"
    required: always
    source: S1
    confidence: medium
  - id: for-nach-corporate-registration-authoriz
    name: "For NACH: Corporate registration, authorized signatory details, mandate template"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.