---
type: "Government Scheme Exclusions"
title: "StartUp J&K Initiative — Exclusions"
description: "Structured disqualifiers for ROW-263."
scheme_id: "ROW-263"
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
    resource: "https://jkstartupsummit.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# StartUp J&K Initiative — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The startup must not have received more than INR 25 lakhs in funding from other government sources prior to application."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Misuse of funds may lead to recovery and blacklisting"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "The grant is non-transferable and cannot be pledged or mortgaged"
    effect: ineligible
    source: S1
    confidence: medium
```