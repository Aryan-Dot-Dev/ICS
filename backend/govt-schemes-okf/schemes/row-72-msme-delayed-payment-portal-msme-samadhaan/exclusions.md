---
type: "Government Scheme Exclusions"
title: "MSME Delayed Payment Portal (MSME SAMADHAAN) — Exclusions"
description: "Structured disqualifiers for ROW-72."
scheme_id: "ROW-72"
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
    resource: "https://samadhaan.msme.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MSME Delayed Payment Portal (MSME SAMADHAAN) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "advance payments or future dues are not eligible"
    effect: ineligible
    source: S1
    confidence: medium
```