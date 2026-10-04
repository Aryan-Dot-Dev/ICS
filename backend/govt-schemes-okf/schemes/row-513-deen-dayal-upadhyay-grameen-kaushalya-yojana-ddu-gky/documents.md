---
type: "Government Scheme Documents"
title: "Deen Dayal Upadhyay Grameen Kaushalya Yojana (DDU-GKY) — Documents"
description: "Document requirements for ROW-513."
scheme_id: "ROW-513"
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
    resource: "https://ddugky.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Deen Dayal Upadhyay Grameen Kaushalya Yojana (DDU-GKY) — Documents

```yaml
documents:
  - id: aadhaar-card
    name: "Aadhaar Card"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-residence-village-level-certifi
    name: "Proof of residence (village-level certification)"
    required: always
    source: S1
    confidence: medium
  - id: secc-2011-or-nrlm-household-verification
    name: "SECC 2011 or NRLM household verification"
    required: always
    source: S1
    confidence: medium
  - id: age-proof-birth-certificate-or-school-ce
    name: "Age proof (birth certificate or school certificate)"
    required: always
    source: S1
    confidence: medium
  - id: caste-certificate-if-applicable
    name: "Caste certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: disability-certificate-if-applicable
    name: "Disability certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: passport-sized-photographs
    name: "Passport-sized photographs"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.