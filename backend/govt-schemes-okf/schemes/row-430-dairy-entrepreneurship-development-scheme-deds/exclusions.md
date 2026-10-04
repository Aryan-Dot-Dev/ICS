---
type: "Government Scheme Exclusions"
title: "Dairy Entrepreneurship Development Scheme (DEDS) — Exclusions"
description: "Structured disqualifiers for ROW-430."
scheme_id: "ROW-430"
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
    resource: "https://dahd.nic.in/deds"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Dairy Entrepreneurship Development Scheme (DEDS) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The unit must be located in a rural or peri-urban area and must not have availed similar benefits under any other central or state government scheme for the same component."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Beneficiaries who have availed benefits under any other central or state government scheme for the same component are not eligible"
    effect: ineligible
    source: S1
    confidence: medium
```