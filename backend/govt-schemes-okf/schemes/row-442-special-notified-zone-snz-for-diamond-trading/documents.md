---
type: "Government Scheme Documents"
title: "Special Notified Zone (SNZ) for Diamond Trading — Documents"
description: "Document requirements for ROW-442."
scheme_id: "ROW-442"
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
    resource: "https://dgft.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://content.dgft.gov.in/Website/dgftprod/f79c64e4-4aa0-461d-82a2-833d33444641/Trade Notice No.09 2026- Amendment to TRACE Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://content.dgft.gov.in/Website/dgftprod/8c0d25b8-b12d-4b0d-b0ca-c77424a0892f/Trade Notice No.08 2026 dated 01.07.2026- Amendment to MAS Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.dgft.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Special Notified Zone (SNZ) for Diamond Trading — Documents

```yaml
documents:
  - id: importer-exporter-code-iec-certificate
    name: "Importer Exporter Code (IEC) certificate"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-or-registra
    name: "Certificate of Incorporation or Registration"
    required: always
    source: S1
    confidence: medium
  - id: details-of-the-diamond-consignment-invoi
    name: "Details of the diamond consignment (invoice, packing list, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-location-or-operation-within-th
    name: "Proof of location or operation within the Special Notified Zone"
    required: always
    source: S1
    confidence: medium
  - id: any-additional-documents-as-specified-by
    name: "Any additional documents as specified by customs or DGFT for diamond trade"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.