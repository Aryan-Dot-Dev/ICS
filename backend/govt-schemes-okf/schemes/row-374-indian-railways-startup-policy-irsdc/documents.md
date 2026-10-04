---
type: "Government Scheme Documents"
title: "Indian Railways Startup Policy (IRSDC) — Documents"
description: "Document requirements for ROW-374."
scheme_id: "ROW-374"
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
    resource: "https://irsdc.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Indian Railways Startup Policy (IRSDC) — Documents

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
  - id: gst-registration-certificate-if-applicab
    name: "GST registration certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: detailed-project-proposal-or-pitch-deck
    name: "Detailed project proposal or pitch deck or business plan"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-concept-or-prototype-details-if
    name: "Proof of concept or prototype details (if available)"
    required: conditional
    source: S1
    confidence: medium
  - id: authorization-letter-from-authorized-sig
    name: "Authorization letter from authorized signatory"
    required: always
    source: S1
    confidence: medium
  - id: details-of-any-prior-funding-or-partners
    name: "Details of any prior funding or partnerships"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.