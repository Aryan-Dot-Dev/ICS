---
type: "Government Scheme Exclusions"
title: "Atal Tinkering Labs (ATL) — Exclusions"
description: "Structured disqualifiers for ROW-102."
scheme_id: "ROW-102"
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
    resource: "https://aim.gov.in/atl"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Atal Tinkering Labs (ATL) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Failure to utilize funds or operate the lab may lead to withdrawal of grant and blacklisting"
    effect: ineligible
    source: S1
    confidence: medium
```