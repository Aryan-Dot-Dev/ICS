---
type: "Government Scheme Documents"
title: "Gujarat Startup Policy — Documents"
description: "Document requirements for ROW-116."
scheme_id: "ROW-116"
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
    resource: "https://ic.gujarat.gov.in/documents/commondoc/2020/Industrial-Policy2020.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ic.gujarat.gov.in/documents/commondoc/2018/Startup_Ranking_Winning_Note.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ic.gujarat.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Gujarat Startup Policy — Documents

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
  - id: dpiit-recognition-certificate
    name: "DPIIT recognition certificate"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-innovation-or-prototype
    name: "Proof of innovation or prototype"
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