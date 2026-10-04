---
type: "Government Scheme Exclusions"
title: "MSME Pre-Pack Insolvency Resolution Process (PPIRP) — Exclusions"
description: "Structured disqualifiers for ROW-302."
scheme_id: "ROW-302"
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
    resource: "https://ibbi.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ibbi.gov.in/intimation-applications/apply-iaaa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ibbi.gov.in/uploads/whatsnew/f25dea596c4daa58ae8eff7d3ab701eb.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ibbi.gov.in/uploads/whatsnew/81700dc80ec2b6c873809b3a747eb932.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MSME Pre-Pack Insolvency Resolution Process (PPIRP) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The corporate debtor must not have undergone a PPIRP in the last three years."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "The process cannot be used if an order for liquidation has been passed"
    effect: ineligible
    source: S1
    confidence: medium
```