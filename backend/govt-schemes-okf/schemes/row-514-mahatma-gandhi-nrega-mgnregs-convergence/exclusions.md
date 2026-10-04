---
type: "Government Scheme Exclusions"
title: "Mahatma Gandhi NREGA (MGNREGS) Convergence — Exclusions"
description: "Structured disqualifiers for ROW-514."
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
# Mahatma Gandhi NREGA (MGNREGS) Convergence — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Only rural households are eligible — urban areas with 100% urban population are excluded"
    effect: ineligible
    source: S1
    confidence: medium
```