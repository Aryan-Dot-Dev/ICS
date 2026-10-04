---
type: "Government Scheme Exclusions"
title: "ICAR – Agri Startup Grants — Exclusions"
description: "Structured disqualifiers for ROW-332."
scheme_id: "ROW-332"
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
    resource: "https://icar.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.icar.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# ICAR – Agri Startup Grants — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    field: applicant.dpiit_recognized
    operator: is_true
    value: true
    detail: "The startup must be recognized by DPIIT or recommended by an ICAR institute, and should not have received more than a specified limit of funding from other government sources."
    effect: ineligible
    source: S1
    confidence: medium
```