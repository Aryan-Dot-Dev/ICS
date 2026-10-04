---
type: "Government Scheme Documents"
title: "Technology Centre Systems Programme (TCSP) — Documents"
description: "Document requirements for ROW-517."
scheme_id: "ROW-517"
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
    resource: "https://tcsp.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Technology Centre Systems Programme (TCSP) — Documents

```yaml
documents:
  - id: msme-registration-certificate-udyam
    name: "MSME Registration Certificate (Udyam)"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-of-the-entity
    name: "PAN Card of the entity"
    required: always
    source: S1
    confidence: medium
  - id: gst-registration-certificate
    name: "GST Registration Certificate"
    required: always
    source: S1
    confidence: medium
  - id: service-request-form-as-per-tc
    name: "Service Request Form (as per TC)"
    required: always
    source: S1
    confidence: medium
  - id: technical-specifications-or-drawings-if
    name: "Technical specifications or drawings (if applicable)"
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