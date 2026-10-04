---
type: "Government Scheme Documents"
title: "Plastic Parks Scheme — Documents"
description: "Document requirements for ROW-385."
scheme_id: "ROW-385"
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
    resource: "https://chemicals.nic.in/plastic-parks"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Plastic Parks Scheme — Documents

```yaml
documents:
  - id: detailed-project-report-dpr
    name: "Detailed Project Report (DPR)"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-or-lease-documents
    name: "Land ownership or lease documents"
    required: always
    source: S1
    confidence: medium
  - id: infrastructure-development-plan
    name: "Infrastructure development plan"
    required: always
    source: S1
    confidence: medium
  - id: financial-viability-and-funding-plan
    name: "Financial viability and funding plan"
    required: always
    source: S1
    confidence: medium
  - id: clearances-from-relevant-authorities-if
    name: "Clearances from relevant authorities (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: undertaking-from-state-government-regard
    name: "Undertaking from State Government regarding 50% contribution"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.