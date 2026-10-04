---
type: "Government Scheme Exclusions"
title: "CG Startup Policy & Nava Raipur Innovation City — Exclusions"
description: "Structured disqualifiers for ROW-259."
scheme_id: "ROW-259"
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
    resource: "https://cgstartup.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# CG Startup Policy & Nava Raipur Innovation City — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Startups must be working on technology-driven or socially impactful solutions and should not have exceeded a specified turnover or age limit as defined under the policy."
    effect: ineligible
    source: S1
    confidence: medium
```