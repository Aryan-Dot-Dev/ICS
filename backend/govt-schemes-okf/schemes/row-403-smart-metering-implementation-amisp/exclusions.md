---
type: "Government Scheme Exclusions"
title: "Smart Metering Implementation (AMISP) — Exclusions"
description: "Structured disqualifiers for ROW-403."
scheme_id: "ROW-403"
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
    resource: "https://powermin.gov.in/offerings/schemes-and-services/details/revamped-distribution-scheme-IDO4MTMtQWa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://powermin.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Smart Metering Implementation (AMISP) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Private discoms are excluded from the scheme's benefits"
    effect: ineligible
    source: S1
    confidence: medium
```