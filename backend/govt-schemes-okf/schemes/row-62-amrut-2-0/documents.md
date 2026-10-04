---
type: "Government Scheme Documents"
title: "AMRUT 2.0 — Documents"
description: "Document requirements for ROW-62."
scheme_id: "ROW-62"
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
    resource: "https://amrut.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# AMRUT 2.0 — Documents

```yaml
documents:
  - id: state-annual-action-plan-saap
    name: "State Annual Action Plan (SAAP)"
    required: always
    source: S1
    confidence: medium
  - id: detailed-project-reports-dprs
    name: "Detailed Project Reports (DPRs)"
    required: always
    source: S1
    confidence: medium
  - id: utilization-certificates
    name: "Utilization Certificates"
    required: always
    source: S1
    confidence: medium
  - id: progress-reports-with-geo-tagged-photogr
    name: "Progress Reports with geo-tagged photographs"
    required: always
    source: S1
    confidence: medium
  - id: reform-implementation-reports
    name: "Reform implementation reports"
    required: always
    source: S1
    confidence: medium
  - id: financial-statements-and-audit-reports
    name: "Financial statements and audit reports"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.