---
type: "Government Scheme Exclusions"
title: "Self Employment Scheme for Rehabilitation of Manual Scavengers (SRMS) — Exclusions"
description: "Structured disqualifiers for ROW-52."
scheme_id: "ROW-52"
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
    resource: "https://nskfdc.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Self Employment Scheme for Rehabilitation of Manual Scavengers (SRMS) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Beneficiaries must not have availed benefits under any other central/state government self-employment scheme for the same activity"
    effect: ineligible
    source: S1
    confidence: medium
```