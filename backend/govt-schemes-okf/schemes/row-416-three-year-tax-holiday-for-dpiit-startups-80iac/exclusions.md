---
type: "Government Scheme Exclusions"
title: "Three-Year Tax Holiday for DPIIT Startups (80IAC) — Exclusions"
description: "Structured disqualifiers for ROW-416."
scheme_id: "ROW-416"
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
    resource: "https://incometaxindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://incometaxindia.gov.in/web/guest/notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://incometaxindia.gov.in/notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.incometaxindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Three-Year Tax Holiday for DPIIT Startups (80IAC) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The deduction cannot be claimed for more than three consecutive assessment years."
    effect: ineligible
    source: S1
    confidence: medium
```