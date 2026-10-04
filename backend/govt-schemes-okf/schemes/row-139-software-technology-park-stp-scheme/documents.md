---
type: "Government Scheme Documents"
title: "Software Technology Park (STP) Scheme — Documents"
description: "Document requirements for ROW-139."
scheme_id: "ROW-139"
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
    resource: "https://stpi.in/en/stp-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://stpi.in/en/statutory-services"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://stpi.in/en/citizens-charter"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.stpi.in/en-in/about-stpi/stp-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Software Technology Park (STP) Scheme — Documents

```yaml
documents:
  - id: letter-of-permission-application
    name: "Letter of Permission application"
    required: always
    source: S1
    confidence: medium
  - id: legal-undertaking-cum-endorsement-of-cap
    name: "Legal Undertaking-cum-endorsement of Capital Goods (CG)"
    required: always
    source: S1
    confidence: medium
  - id: green-card-application
    name: "Green Card application"
    required: always
    source: S1
    confidence: medium
  - id: project-details-for-clearance-if-cost-rs
    name: "Project details for clearance (if cost < Rs.100 million with Indian Investment)"
    required: always
    source: S1
    confidence: medium
  - id: details-of-foreign-equity-if-applicable
    name: "Details of foreign equity (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: import-export-documentation-for-hardware
    name: "Import/export documentation for hardware and software"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-donation-eligibility-for-comput
    name: "Proof of donation eligibility for computers after two years (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.