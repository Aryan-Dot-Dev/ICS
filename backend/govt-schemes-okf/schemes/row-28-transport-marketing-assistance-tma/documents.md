---
type: "Government Scheme Documents"
title: "Transport & Marketing Assistance (TMA) — Documents"
description: "Document requirements for ROW-28."
scheme_id: "ROW-28"
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
    resource: "https://apeda.gov.in/tma"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://apeda.gov.in/bharati/How_to_Apply.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://apeda.gov.in/RCMC"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://apeda.gov.in/sites/default/files/documents/2026-06/Registration_Procedure.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Transport & Marketing Assistance (TMA) — Documents

```yaml
documents:
  - id: import-export-code-iec
    name: "Import Export Code (IEC)"
    required: always
    source: S1
    confidence: medium
  - id: registration-cum-membership-certificate
    name: "Registration-cum-Membership Certificate (RCMC) from APEDA"
    required: always
    source: S1
    confidence: medium
  - id: shipping-bills
    name: "Shipping bills"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-payment-of-international-freigh
    name: "Proof of payment of international freight"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-payment-of-marketing-expenses
    name: "Proof of payment of marketing expenses"
    required: always
    source: S1
    confidence: medium
  - id: bank-details-for-reimbursement
    name: "Bank details for reimbursement"
    required: always
    source: S1
    confidence: medium
  - id: self-declaration-form-as-per-tma-guideli
    name: "Self-declaration form as per TMA guidelines"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.