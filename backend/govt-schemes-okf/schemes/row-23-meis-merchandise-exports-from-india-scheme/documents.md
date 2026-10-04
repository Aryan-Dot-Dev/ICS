---
type: "Government Scheme Documents"
title: "MEIS (Merchandise Exports from India Scheme) — Documents"
description: "Document requirements for ROW-23."
scheme_id: "ROW-23"
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
---
# MEIS (Merchandise Exports from India Scheme) — Documents

```yaml
documents:
  - id: shipping-bill
    name: "Shipping Bill"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-realization-of-export-proceeds
    name: "Proof of realization of export proceeds"
    required: always
    source: S1
    confidence: medium
  - id: importer-exporter-code-iec-certificate
    name: "Importer Exporter Code (IEC) certificate"
    required: always
    source: S1
    confidence: medium
  - id: bank-realization-certificate
    name: "Bank realization certificate"
    required: always
    source: S1
    confidence: medium
  - id: packing-list
    name: "Packing list"
    required: always
    source: S1
    confidence: medium
  - id: invoice
    name: "Invoice"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.