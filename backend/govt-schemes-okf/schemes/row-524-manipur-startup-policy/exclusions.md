---
type: "Government Scheme Exclusions"
title: "Manipur Startup Policy — Exclusions"
description: "Structured disqualifiers for ROW-524."
scheme_id: "ROW-524"
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
    resource: "https://manipur.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://manipur.gov.in/?page_id=15784"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://manipur.gov.in/?page_id=920"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Manipur Startup Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Misuse of funds may lead to recovery and blacklisting"
    effect: ineligible
    source: S1
    confidence: medium
```