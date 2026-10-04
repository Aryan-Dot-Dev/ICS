---
type: "Government Scheme Documents"
title: "Sagarmala Programme — Documents"
description: "Document requirements for ROW-60."
scheme_id: "ROW-60"
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
    resource: "https://sagarmala.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Sagarmala Programme — Documents

```yaml
documents:
  - id: detailed-project-report-dpr
    name: "Detailed Project Report (DPR)"
    required: always
    source: S1
    confidence: medium
  - id: land-acquisition-and-clearance-documents
    name: "Land acquisition and clearance documents"
    required: always
    source: S1
    confidence: medium
  - id: environmental-and-crz-clearances-if-appl
    name: "Environmental and CRZ clearances (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: statutory-clearances-from-relevant-autho
    name: "Statutory clearances from relevant authorities"
    required: always
    source: S1
    confidence: medium
  - id: financial-closure-documents
    name: "Financial closure documents"
    required: always
    source: S1
    confidence: medium
  - id: ppp-concession-agreement-if-applicable
    name: "PPP concession agreement (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: board-resolution-or-authorization-from-t
    name: "Board resolution or authorization from the sponsoring entity"
    required: always
    source: S1
    confidence: medium
  - id: incorporation-documents-of-the-project-s
    name: "Incorporation documents of the project SPV (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.