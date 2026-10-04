---
type: "Government Scheme Documents"
title: "Synd Mahila Shakti Scheme (Syndicate Bank) — Documents"
description: "Document requirements for ROW-339."
scheme_id: "ROW-339"
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
    resource: "https://www.canarabank.com"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://canarabank.com/priority-portal"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Synd Mahila Shakti Scheme (Syndicate Bank) — Documents

```yaml
documents:
  - id: proof-of-identity-aadhaar-pan-voter-id-p
    name: "Proof of identity (Aadhaar, PAN, Voter ID, Passport)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-address-aadhaar-utility-bill-pa
    name: "Proof of address (Aadhaar, utility bill, passport)"
    required: always
    source: S1
    confidence: medium
  - id: business-plan-or-project-report
    name: "Business plan or project report"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-business-ownership-partnership
    name: "Proof of business ownership/partnership/directorship"
    required: always
    source: S1
    confidence: medium
  - id: bank-statements-if-existing-account
    name: "Bank statements (if existing account)"
    required: always
    source: S1
    confidence: medium
  - id: quotations-for-machinery-equipment-if-ap
    name: "Quotations for machinery/equipment (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: licenses-and-permits-related-to-business
    name: "Licenses and permits related to business activity"
    required: always
    source: S1
    confidence: medium
  - id: income-tax-returns-if-applicable
    name: "Income tax returns (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: collateral-documents-if-loan-amount-exce
    name: "Collateral documents (if loan amount exceeds collateral-free limit)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.