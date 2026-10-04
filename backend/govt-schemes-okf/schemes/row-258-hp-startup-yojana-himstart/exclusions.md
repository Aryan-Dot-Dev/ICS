---
type: "Government Scheme Exclusions"
title: "HP Startup Yojana & HIMSTART — Exclusions"
description: "Structured disqualifiers for ROW-258."
scheme_id: "ROW-258"
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
    resource: "https://hpkvn.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# HP Startup Yojana & HIMSTART — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Startup must not have received similar grant from any other central or state government scheme for the same purpose"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Misrepresentation of facts or misuse of funds may lead to recovery of grant and blacklisting"
    effect: ineligible
    source: S1
    confidence: medium
```