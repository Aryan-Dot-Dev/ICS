---
type: "Government Scheme Documents"
title: "Cent Kalyani Scheme (Central Bank) — Documents"
description: "Document requirements for ROW-48."
scheme_id: "ROW-48"
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
    resource: "https://centralbankofindia.co.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://centralbankofindia.co.in/en/Apply_Online"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.centralbankofindia.co.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Cent Kalyani Scheme (Central Bank) — Documents

```yaml
documents:
  - id: kyc-documents-identity-and-address-proof
    name: "KYC documents (Identity and Address proof)"
    required: always
    source: S1
    confidence: medium
  - id: pan-card
    name: "PAN card"
    required: always
    source: S1
    confidence: medium
  - id: business-plan-project-report
    name: "Business plan/project report"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-statement-if-existing-custo
    name: "Bank account statement (if existing customer)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-business-address
    name: "Proof of business address"
    required: always
    source: S1
    confidence: medium
  - id: financial-projections
    name: "Financial projections"
    required: always
    source: S1
    confidence: medium
  - id: any-licenses-registrations-related-to-th
    name: "Any licenses/registrations related to the business"
    required: always
    source: S1
    confidence: medium
  - id: details-of-collateral-security-if-applic
    name: "Details of collateral/security (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.