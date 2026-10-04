---
type: "Government Scheme Documents"
title: "Kisan Credit Card for Fisheries & Animal Husbandry — Documents"
description: "Document requirements for ROW-158."
scheme_id: "ROW-158"
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
    resource: "https://dof.gov.in/offerings"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dof.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Kisan Credit Card for Fisheries & Animal Husbandry — Documents

```yaml
documents:
  - id: application-form
    name: "Application form"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-identity
    name: "Proof of identity"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-address
    name: "Proof of address"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-or-lease-documents-for-cr
    name: "Land ownership or lease documents (for crop farmers)"
    required: always
    source: S1
    confidence: medium
  - id: details-of-fisheries-or-animal-husbandry
    name: "Details of fisheries or animal husbandry activities"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.