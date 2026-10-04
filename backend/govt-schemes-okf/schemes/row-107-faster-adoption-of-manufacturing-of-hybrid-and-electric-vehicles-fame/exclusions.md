---
type: "Government Scheme Exclusions"
title: "Faster Adoption of Manufacturing of Hybrid and Electric Vehicles (FAME) — Exclusions"
description: "Structured disqualifiers for ROW-107."
scheme_id: "ROW-107"
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
    resource: "https://fame2.heavyindustries.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Faster Adoption of Manufacturing of Hybrid and Electric Vehicles (FAME) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Subsidy is passed on to the consumer and cannot be claimed directly by end users"
    effect: ineligible
    source: S1
    confidence: medium
```