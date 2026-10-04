---
type: "Government Scheme Exclusions"
title: "DRDO CEPTAM Scheme — Exclusions"
description: "Structured disqualifiers for ROW-79."
scheme_id: "ROW-79"
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
    resource: "https://drdo.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://drdo.gov.in/drdo/en"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://drdo.gov.in/drdo/hi"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtARDE10062026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtCABS16062026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.drdo.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# DRDO CEPTAM Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Incomplete or late applications are rejected"
    effect: ineligible
    source: S1
    confidence: medium
```