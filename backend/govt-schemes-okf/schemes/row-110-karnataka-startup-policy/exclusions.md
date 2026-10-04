---
type: "Government Scheme Exclusions"
title: "Karnataka Startup Policy — Exclusions"
description: "Structured disqualifiers for ROW-110."
scheme_id: "ROW-110"
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
    resource: "https://startup.karnataka.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Karnataka Startup Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Benefits under the policy cannot be combined with similar state-level incentives for the same expenditure"
    effect: ineligible
    source: S1
    confidence: medium
```