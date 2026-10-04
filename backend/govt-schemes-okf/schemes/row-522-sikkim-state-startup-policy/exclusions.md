---
type: "Government Scheme Exclusions"
title: "Sikkim State Startup Policy — Exclusions"
description: "Structured disqualifiers for ROW-522."
scheme_id: "ROW-522"
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
    resource: "https://sikkim.gov.in/departments/commerce-and-industries-department"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sikkim.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Sikkim State Startup Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Misrepresentation of facts may lead to disqualification and recovery of benefits"
    effect: ineligible
    source: S1
    confidence: medium
```