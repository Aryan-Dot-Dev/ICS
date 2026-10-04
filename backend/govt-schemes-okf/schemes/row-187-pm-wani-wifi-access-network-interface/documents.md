---
type: "Government Scheme Documents"
title: "PM-WANI (WiFi Access Network Interface) — Documents"
description: "Document requirements for ROW-187."
scheme_id: "ROW-187"
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
    resource: "https://dot.gov.in/pm-wani"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dot.gov.in/offerings"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM-WANI (WiFi Access Network Interface) — Documents

```yaml
documents:
  - id: proof-of-identity-aadhaar-pan-etc
    name: "Proof of identity (Aadhaar, PAN, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-address
    name: "Proof of address"
    required: always
    source: S1
    confidence: medium
  - id: business-registration-certificate
    name: "Business registration certificate"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: technical-details-of-wi-fi-equipment-to
    name: "Technical details of Wi-Fi equipment to be deployed"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.