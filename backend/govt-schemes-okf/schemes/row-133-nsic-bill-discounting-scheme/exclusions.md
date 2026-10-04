---
type: "Government Scheme Exclusions"
title: "NSIC Bill Discounting Scheme — Exclusions"
description: "Structured disqualifiers for ROW-133."
scheme_id: "ROW-133"
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
    resource: "https://nsic.co.in/Schemes/BillDiscountingAgainstBG"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.nsic.co.in/scheme/bill-discounting"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NSIC Bill Discounting Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Traders are explicitly excluded from the scheme"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Traders are excluded from the scheme."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "Units which have not re-paid dues within usance period shall not be eligible for concessional rate and will be charged the normal rate."
    effect: ineligible
    source: S1
    confidence: medium
```