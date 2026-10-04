---
type: "Government Scheme Documents"
title: "Swadesh Darshan Scheme 2.0 — Documents"
description: "Document requirements for ROW-223."
scheme_id: "ROW-223"
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
    resource: "https://swadesha-darshan.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Swadesh Darshan Scheme 2.0 — Documents

```yaml
documents:
  - id: detailed-project-report-dpr
    name: "Detailed Project Report (DPR)"
    required: always
    source: S1
    confidence: medium
  - id: land-availability-certificate
    name: "Land availability certificate"
    required: always
    source: S1
    confidence: medium
  - id: environmental-clearance-if-applicable
    name: "Environmental clearance (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: undertaking-for-operation-and-maintenanc
    name: "Undertaking for operation and maintenance"
    required: always
    source: S1
    confidence: medium
  - id: convergence-plan-with-other-schemes
    name: "Convergence plan with other schemes"
    required: always
    source: S1
    confidence: medium
  - id: circuit-map-and-thematic-justification
    name: "Circuit map and thematic justification"
    required: always
    source: S1
    confidence: medium
  - id: state-level-empowered-committee-slec-cle
    name: "State Level Empowered Committee (SLEC) clearance"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.