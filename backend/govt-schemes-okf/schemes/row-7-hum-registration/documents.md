---
type: "Government Scheme Documents"
title: "HUM Registration — Documents"
description: "Document requirements for ROW-7."
scheme_id: "ROW-7"
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
    resource: "https://haryana.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://haryana.gov.in/schemes-programmes/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://haryana.gov.in/documents/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# HUM Registration — Documents

```yaml
documents:
  - id: identity-proof-aadhaar-pan-voter-id
    name: "Identity Proof (Aadhaar/PAN/Voter ID)"
    required: always
    source: S1
    confidence: medium
  - id: address-proof-utility-bill-rental-agreem
    name: "Address Proof (Utility bill, rental agreement, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: business-registration-certificate-if-app
    name: "Business Registration Certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: pan-of-the-entity-or-proprietor
    name: "PAN of the entity or proprietor"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: photograph-of-the-applicant
    name: "Photograph of the applicant"
    required: always
    source: S1
    confidence: medium
  - id: details-of-business-activity-or-project
    name: "Details of business activity or project proposal"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.