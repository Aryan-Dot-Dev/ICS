---
type: "Government Scheme Documents"
title: "PM Annadata Aay Sanrakshan Abhiyan (PM-AASHA) — Documents"
description: "Document requirements for ROW-153."
scheme_id: "ROW-153"
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
    resource: "https://agricoop.nic.in/en/pm-aasha"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM Annadata Aay Sanrakshan Abhiyan (PM-AASHA) — Documents

```yaml
documents:
  - id: farmer-s-identity-proof-aadhaar-voter-id
    name: "Farmer’s identity proof (Aadhaar/Voter ID)"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-or-tenancy-documents
    name: "Land ownership or tenancy documents"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-dbt
    name: "Bank account details (for DBT)"
    required: always
    source: S1
    confidence: medium
  - id: sale-receipt-or-procurement-slip
    name: "Sale receipt or procurement slip"
    required: always
    source: S1
    confidence: medium
  - id: crop-details-and-quantity-sold
    name: "Crop details and quantity sold"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.