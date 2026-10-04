---
type: "Government Scheme Documents"
title: "Mahatma Gandhi NREGA (MGNREGS) Convergence — Documents"
description: "Document requirements for ROW-514."
scheme_id: "ROW-514"
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
    resource: "https://nrega.nic.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nregaplus.nic.in/netnrega/WriteReaddata/Circulars/AMC_2024-25-English.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nregaplus.nic.in/Netnrega/Data/SoP_TimelypaymentMGNREGA.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nrega.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mahatma Gandhi NREGA (MGNREGS) Convergence — Documents

```yaml
documents:
  - id: proof-of-residence-no-specific-documents
    name: "Proof of residence (No specific documents listed for application beyond self-declaration for Job Card)"
    required: always
    source: S1
    confidence: medium
  - id: for-job-card-household-details-names-age
    name: "For Job Card: Household details, names, ages, addresses of adult members"
    required: always
    source: S1
    confidence: medium
  - id: for-work-demand-no-documents-required-ca
    name: "For work demand: No documents required — can be oral or written application"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.