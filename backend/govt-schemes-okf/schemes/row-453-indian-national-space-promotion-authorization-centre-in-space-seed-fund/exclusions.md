---
type: "Government Scheme Exclusions"
title: "Indian National Space Promotion & Authorization Centre (IN-SPACe) Seed Fund — Exclusions"
description: "Structured disqualifiers for ROW-453."
scheme_id: "ROW-453"
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
    resource: "https://www.inspaceindia.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.inspaceindia.org/seed-fund"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Indian National Space Promotion & Authorization Centre (IN-SPACe) Seed Fund — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The grant is non-transferable and cannot be used for land acquisition or construction of permanent structures"
    effect: ineligible
    source: S1
    confidence: medium
```