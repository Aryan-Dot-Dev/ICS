---
type: "Government Scheme Documents"
title: "Invest Punjab – Business First Portal — Documents"
description: "Document requirements for ROW-248."
scheme_id: "ROW-248"
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
    resource: "https://investpunjab.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://investpunjab.gov.in/bureau;Key=OV"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://investpunjab.gov.in/bureau;Key=OSV"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://investpunjab.gov.in/bureau;Key=OT"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://investpunjab.gov.in/sector/ReengineeringPortal"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://investpunjab.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Invest Punjab – Business First Portal — Documents

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
  - id: business-description-or-project-report
    name: "Business description or project report"
    required: always
    source: S1
    confidence: medium
  - id: details-of-investment-and-employment-gen
    name: "Details of investment and employment generation"
    required: always
    source: S1
    confidence: medium
  - id: land-documents-or-site-plan
    name: "Land documents or site plan"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-from-authorized-sig
    name: "Authorization letter from authorized signatory"
    required: always
    source: S1
    confidence: medium
  - id: any-sector-specific-clearances-as-applic
    name: "Any sector-specific clearances as applicable"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.