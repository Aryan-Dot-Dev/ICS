---
type: "Government Scheme Exclusions"
title: "National Livestock Mission (NLM) — Exclusions"
description: "Structured disqualifiers for ROW-312."
scheme_id: "ROW-312"
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
    resource: "https://dahd.nic.in/nlm"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Livestock Mission (NLM) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Beneficiaries must not have availed similar benefits for the same component from other central or state schemes"
    effect: ineligible
    source: S1
    confidence: medium
```