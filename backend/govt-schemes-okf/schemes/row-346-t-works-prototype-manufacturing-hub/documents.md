---
type: "Government Scheme Documents"
title: "T-Works Prototype Manufacturing Hub — Documents"
description: "Document requirements for ROW-346."
scheme_id: "ROW-346"
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
    resource: "https://t-works.telangana.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# T-Works Prototype Manufacturing Hub — Documents

```yaml
documents:
  - id: project-proposal-or-concept-note
    name: "Project proposal or concept note"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-identity-aadhaar-pan-etc
    name: "Proof of identity (Aadhaar, PAN, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-address-or-telangana-domicile-i
    name: "Proof of address or Telangana domicile (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: details-of-the-prototype-to-be-developed
    name: "Details of the prototype to be developed"
    required: always
    source: S1
    confidence: medium
  - id: any-relevant-design-files-or-specificati
    name: "Any relevant design files or specifications"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.