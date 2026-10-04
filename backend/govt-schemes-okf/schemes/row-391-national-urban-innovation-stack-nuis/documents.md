---
type: "Government Scheme Documents"
title: "National Urban Innovation Stack (NUIS) — Documents"
description: "Document requirements for ROW-391."
scheme_id: "ROW-391"
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
    resource: "https://nuisnet.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Urban Innovation Stack (NUIS) — Documents

```yaml
documents:
  - id: entity-incorporation-or-registration-cer
    name: "Entity incorporation or registration certificate"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-organization
    name: "PAN of the organization"
    required: always
    source: S1
    confidence: medium
  - id: description-of-the-urban-innovation-solu
    name: "Description of the urban innovation solution"
    required: always
    source: S1
    confidence: medium
  - id: technical-architecture-or-api-integratio
    name: "Technical architecture or API integration plan"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-concept-or-pilot-results-if-ava
    name: "Proof of concept or pilot results (if available)"
    required: conditional
    source: S1
    confidence: medium
  - id: authorization-letter-from-authorized-sig
    name: "Authorization letter from authorized signatory"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.