---
type: "Government Scheme Documents"
title: "National Hydrology Project (NHP) Data Access for Startups — Documents"
description: "Document requirements for ROW-505."
scheme_id: "ROW-505"
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
    resource: "https://nhp.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Hydrology Project (NHP) Data Access for Startups — Documents

```yaml
documents:
  - id: certificate-of-incorporation-or-registra
    name: "Certificate of Incorporation or Registration of the startup"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-of-the-entity
    name: "PAN card of the entity"
    required: always
    source: S1
    confidence: medium
  - id: description-of-the-startup-s-work-in-wat
    name: "Description of the startup's work in water technology or hydrology"
    required: always
    source: S1
    confidence: medium
  - id: details-of-intended-use-of-the-requested
    name: "Details of intended use of the requested data"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-from-the-authorized
    name: "Authorization letter from the authorized signatory"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.