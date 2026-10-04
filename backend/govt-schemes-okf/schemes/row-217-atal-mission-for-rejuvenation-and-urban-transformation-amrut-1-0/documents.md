---
type: "Government Scheme Documents"
title: "Atal Mission for Rejuvenation and Urban Transformation (AMRUT 1.0) — Documents"
description: "Document requirements for ROW-217."
scheme_id: "ROW-217"
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
# Atal Mission for Rejuvenation and Urban Transformation (AMRUT 1.0) — Documents

```yaml
documents:
  - id: state-annual-action-plan-saap
    name: "State Annual Action Plan (SAAP)"
    required: always
    source: S1
    confidence: medium
  - id: utilization-certificates-ucs
    name: "Utilization Certificates (UCs)"
    required: always
    source: S1
    confidence: medium
  - id: progress-reports-physical-and-financial
    name: "Progress Reports (Physical and Financial)"
    required: always
    source: S1
    confidence: medium
  - id: project-detailed-project-reports-dprs
    name: "Project Detailed Project Reports (DPRs)"
    required: always
    source: S1
    confidence: medium
  - id: land-availability-and-ownership-document
    name: "Land availability and ownership documents"
    required: always
    source: S1
    confidence: medium
  - id: environmental-and-social-clearances-if-a
    name: "Environmental and social clearances (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: approval-from-state-level-sanctioning-co
    name: "Approval from State Level Sanctioning Committee (SLSC)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.