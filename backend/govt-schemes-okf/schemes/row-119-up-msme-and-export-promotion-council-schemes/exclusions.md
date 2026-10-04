---
type: "Government Scheme Exclusions"
title: "UP MSME and Export Promotion Council Schemes — Exclusions"
description: "Structured disqualifiers for ROW-119."
scheme_id: "ROW-119"
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
    resource: "https://upmsme.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# UP MSME and Export Promotion Council Schemes — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Beneficiary must not have availed of similar benefits from other government sources for the same purpose"
    effect: ineligible
    source: S1
    confidence: medium
```