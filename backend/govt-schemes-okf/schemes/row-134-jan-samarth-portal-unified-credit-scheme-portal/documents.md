---
type: "Government Scheme Documents"
title: "Jan Samarth Portal – Unified Credit Scheme Portal — Documents"
description: "Document requirements for ROW-134."
scheme_id: "ROW-134"
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
    resource: "https://www.jansamarth.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://jansamarth.in/grievances"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://jansamarth.in/our-partners"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://jansamarth.in/government-of-india-schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://jansamarth.in/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://jansamarth.in/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://jansamarth.in/home"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://jansamarth.in/checkEligibility?id=eDNJcFlWOUtWWDZJL2hFQ2pBdFBTbjg9OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://jansamarth.in/checkEligibility?id=elZEUStyejlCbVY4Ukp6NGttd2hCbEE9OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://jansamarth.in/checkEligibility?id=d29KVnJLNlIvUE55bzFmL2d6ajRiR2c9OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://jansamarth.in/checkEligibility?id=d0lobmZzNUs3QXU4TG9FeWV0bE9lc3M9OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://jansamarth.in/checkEligibility?id=d1d4K0YvNG5aSGZiYUdwVWhpbVZjWm89OjowNi0wNy0yMDI2IDAxOjU3"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Jan Samarth Portal – Unified Credit Scheme Portal — Documents

```yaml
documents:
  - id: aadhaar-number
    name: "Aadhaar Number"
    required: always
    source: S1
    confidence: medium
  - id: voter-id
    name: "Voter Id"
    required: always
    source: S1
    confidence: medium
  - id: pan
    name: "PAN"
    required: always
    source: S1
    confidence: medium
  - id: bank-statements
    name: "Bank Statements"
    required: always
    source: S1
    confidence: medium
  - id: basic-details-on-the-portal
    name: "Basic details on the portal"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.