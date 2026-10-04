---
type: "Government Scheme Documents"
title: "Aadhaar-Based Startup Authentication Services — Documents"
description: "Document requirements for ROW-410."
scheme_id: "ROW-410"
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
    resource: "https://uidai.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://uidai.gov.in/section/developer-portal"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Aadhaar-Based Startup Authentication Services — Documents

```yaml
documents:
  - id: certificate-of-incorporation-or-registra
    name: "Certificate of Incorporation or Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: board-resolution-authorizing-aua-registr
    name: "Board resolution authorizing AUA registration"
    required: always
    source: S1
    confidence: medium
  - id: information-security-management-system-i
    name: "Information Security Management System (ISMS) compliance details"
    required: always
    source: S1
    confidence: medium
  - id: details-of-the-proposed-use-case-for-aad
    name: "Details of the proposed use case for Aadhaar authentication"
    required: always
    source: S1
    confidence: medium
  - id: authorized-signatory-details-and-authori
    name: "Authorized signatory details and authorization letter"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.