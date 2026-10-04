---
type: "Government Scheme Exclusions"
title: "Gujarat Startup Policy — Exclusions"
description: "Structured disqualifiers for ROW-116."
scheme_id: "ROW-116"
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
    resource: "https://ic.gujarat.gov.in/documents/commondoc/2020/Industrial-Policy2020.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ic.gujarat.gov.in/documents/commondoc/2018/Startup_Ranking_Winning_Note.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ic.gujarat.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Gujarat Startup Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Misrepresentation of facts may lead to rejection and blacklisting"
    effect: ineligible
    source: S1
    confidence: medium
```