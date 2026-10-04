---
type: "Government Scheme Documents"
title: "Mahila Udyam Nidhi Scheme (SIDBI) — Documents"
description: "Document requirements for ROW-14."
scheme_id: "ROW-14"
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
    resource: "https://sidbi.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sidbi.in/en/government-programmes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.sidbi.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mahila Udyam Nidhi Scheme (SIDBI) — Documents

```yaml
documents:
  - id: project-report
    name: "Project Report"
    required: always
    source: S1
    confidence: medium
  - id: kyc-documents-of-the-woman-entrepreneur
    name: "KYC documents of the woman entrepreneur (PAN, Aadhaar, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-business-registration-proprieto
    name: "Proof of business registration/proprietorship/partnership deed/incorporation certificate"
    required: always
    source: S1
    confidence: medium
  - id: udyam-registration-certificate
    name: "Udyam Registration Certificate"
    required: always
    source: S1
    confidence: medium
  - id: land-and-building-documents-ownership-le
    name: "Land and building documents (ownership/lease agreement)"
    required: always
    source: S1
    confidence: medium
  - id: machinery-equipment-quotations-and-invoi
    name: "Machinery/equipment quotations and invoices"
    required: always
    source: S1
    confidence: medium
  - id: last-two-years-audited-financial-stateme
    name: "Last two years' audited financial statements (for existing units)"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-statement
    name: "Bank account statement"
    required: always
    source: S1
    confidence: medium
  - id: income-tax-returns-if-applicable
    name: "Income tax returns (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: no-dues-certificate-from-existing-banker
    name: "No dues certificate from existing bankers (if any)"
    required: conditional
    source: S1
    confidence: medium
  - id: details-of-promoters-and-their-backgroun
    name: "Details of promoters and their background"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.