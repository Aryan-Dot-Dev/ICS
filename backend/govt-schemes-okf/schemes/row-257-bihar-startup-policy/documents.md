---
type: "Government Scheme Documents"
title: "Bihar Startup Policy — Documents"
description: "Document requirements for ROW-257."
scheme_id: "ROW-257"
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
    resource: "https://startup.bihar.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startup.bihar.gov.in/about-us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startup.bihar.gov.in/PublicDashboard"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://firebasestorage.googleapis.com/v0/b/gatishaktibihar.firebasestorage.app/o/startup_bihar%2FNotification%2FEvaluation%20Test%20_01-06-2026%20%26%2002-06-2026%20for%20April'26.pdf?alt=media&token=1d261200-75d8-4143-8881-b7d4817fbd22"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startup.bihar.gov.in/startupregistration"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startup.bihar.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Bihar Startup Policy — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: aadhaar-of-founders
    name: "Aadhaar of founders"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: pitch-deck-or-business-description
    name: "Pitch deck or business description"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-from-authorized-sig
    name: "Authorization letter from authorized signatory"
    required: always
    source: S1
    confidence: medium
  - id: details-of-funding-received-if-any
    name: "Details of funding received (if any)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.