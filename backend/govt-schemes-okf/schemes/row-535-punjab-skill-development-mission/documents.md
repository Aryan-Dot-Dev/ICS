---
type: "Government Scheme Documents"
title: "Punjab Skill Development Mission — Documents"
description: "Document requirements for ROW-535."
scheme_id: "ROW-535"
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
    resource: "https://pbskills.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Punjab Skill Development Mission — Documents

```yaml
documents:
  - id: aadhaar-card
    name: "Aadhaar Card"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-punjab-residence-proof
    name: "Proof of Punjab residence proof"
    required: always
    source: S1
    confidence: medium
  - id: educational-qualification-certificates
    name: "Educational qualification certificates"
    required: always
    source: S1
    confidence: medium
  - id: passport-sized-photographs
    name: "Passport-sized photographs"
    required: always
    source: S1
    confidence: medium
  - id: category-certificate-if-applicable-sc-st
    name: "Category certificate (if applicable: SC/ST/OBC/PWD)"
    required: conditional
    source: S1
    confidence: medium
  - id: bank-account-details-for-stipend-if-appl
    name: "Bank account details (for stipend, if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.