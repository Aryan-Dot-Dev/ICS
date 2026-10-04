---
type: "Government Scheme Exclusions"
title: "Mission Shakti – Women Safety & Empowerment — Exclusions"
description: "Structured disqualifiers for ROW-236."
scheme_id: "ROW-236"
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
    resource: "https://wcd.nic.in/mission-shakti"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mission Shakti – Women Safety & Empowerment — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Funds cannot be diverted to other schemes or purposes"
    effect: ineligible
    source: S1
    confidence: medium
```