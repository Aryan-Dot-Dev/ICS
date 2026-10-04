---
type: "Government Scheme Documents"
title: "Indian Oil Startup Scheme — Documents"
description: "Document requirements for ROW-322."
scheme_id: "ROW-322"
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
    resource: "https://iocl.com/startup"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Indian Oil Startup Scheme — Documents

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
  - id: business-proposal-or-pitch-deck
    name: "Business proposal or pitch deck"
    required: always
    source: S1
    confidence: medium
  - id: details-of-funding-received-if-any
    name: "Details of funding received (if any)"
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