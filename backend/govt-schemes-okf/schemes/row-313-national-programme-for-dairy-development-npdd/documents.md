---
type: "Government Scheme Documents"
title: "National Programme for Dairy Development (NPDD) — Documents"
description: "Document requirements for ROW-313."
scheme_id: "ROW-313"
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
    resource: "https://dahd.nic.in/npdd"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Programme for Dairy Development (NPDD) — Documents

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
  - id: no-objection-certificate-noc-from-concer
    name: "No Objection Certificate (NOC) from concerned authorities"
    required: always
    source: S1
    confidence: medium
  - id: financial-appraisal-report-from-bank-fin
    name: "Financial appraisal report from bank/financial institution"
    required: always
    source: S1
    confidence: medium
  - id: environmental-clearance-if-applicable
    name: "Environmental clearance (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: undertaking-on-compliance-with-scheme-gu
    name: "Undertaking on compliance with scheme guidelines"
    required: always
    source: S1
    confidence: medium
  - id: utilization-certificates-and-progress-re
    name: "Utilization certificates and progress reports (for installment release)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.