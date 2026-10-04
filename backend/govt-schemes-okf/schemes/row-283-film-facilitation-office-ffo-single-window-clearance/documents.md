---
type: "Government Scheme Documents"
title: "Film Facilitation Office (FFO) – Single Window Clearance — Documents"
description: "Document requirements for ROW-283."
scheme_id: "ROW-283"
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
    resource: "https://ffo.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Film Facilitation Office (FFO) – Single Window Clearance — Documents

```yaml
documents:
  - id: script-or-synopsis-of-the-film
    name: "Script or synopsis of the film"
    required: always
    source: S1
    confidence: medium
  - id: production-details-including-dates-and-s
    name: "Production details including dates and schedule"
    required: always
    source: S1
    confidence: medium
  - id: location-details-and-maps
    name: "Location details and maps"
    required: always
    source: S1
    confidence: medium
  - id: drone-uav-details-if-applicable
    name: "Drone/UAV details (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: identification-proof-of-applicant
    name: "Identification proof of applicant"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-for-product
    name: "Certificate of incorporation (for production companies)"
    required: always
    source: S1
    confidence: medium
  - id: details-of-equipment-and-crew
    name: "Details of equipment and crew"
    required: always
    source: S1
    confidence: medium
  - id: any-other-documents-as-required-by-speci
    name: "Any other documents as required by specific agencies"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.