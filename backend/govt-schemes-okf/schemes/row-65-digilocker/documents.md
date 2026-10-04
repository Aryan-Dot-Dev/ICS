---
type: "Government Scheme Documents"
title: "DigiLocker — Documents"
description: "Document requirements for ROW-65."
scheme_id: "ROW-65"
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
    resource: "https://digilocker.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://digilocker.gov.in/web/about/about-digilocker"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://digilocker.gov.in/web/partners/introductions"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://digilocker.gov.in/web/about/tos"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://digilocker.gov.in/web/resources"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://digilocker.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# DigiLocker — Documents

```yaml
documents:
  - id: valid-indian-mobile-number
    name: "Valid Indian mobile number"
    required: always
    source: S1
    confidence: medium
  - id: driving-license
    name: "Driving License"
    required: always
    source: S1
    confidence: medium
  - id: pan
    name: "PAN"
    required: always
    source: S1
    confidence: medium
  - id: aadhaar
    name: "Aadhaar"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.