---
type: "Government Scheme Exclusions"
title: "Export Credit Insurance for Banks (ECIB) — Exclusions"
description: "Structured disqualifiers for ROW-27."
scheme_id: "ROW-27"
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
    resource: "https://ecgc.in/ecib"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.ecgcltd.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.ecgc.in/ecib"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Export Credit Insurance for Banks (ECIB) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Fraudulent or misrepresented transactions are excluded"
    effect: ineligible
    source: S1
    confidence: medium
```