---
type: "Government Scheme Documents"
title: "Atal Tinkering Labs (ATL) — Documents"
description: "Document requirements for ROW-102."
scheme_id: "ROW-102"
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
    resource: "https://aim.gov.in/atl"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Atal Tinkering Labs (ATL) — Documents

```yaml
documents:
  - id: school-registration-certificate
    name: "School registration certificate"
    required: always
    source: S1
    confidence: medium
  - id: udise-code-of-the-school
    name: "UDISE code of the school"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-of-the-school-trust
    name: "PAN card of the school/trust"
    required: always
    source: S1
    confidence: medium
  - id: photographs-of-the-proposed-lab-space
    name: "Photographs of the proposed lab space"
    required: always
    source: S1
    confidence: medium
  - id: details-of-infrastructure-available-comp
    name: "Details of infrastructure available (computers, internet, electricity)"
    required: always
    source: S1
    confidence: medium
  - id: undertaking-to-run-the-lab-for-minimum-3
    name: "Undertaking to run the lab for minimum 3-4 hours per week beyond school hours"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.