---
type: "Government Scheme Exclusions"
title: "Export Promotion for Handicrafts (EPCH) — Exclusions"
description: "Structured disqualifiers for ROW-288."
scheme_id: "ROW-288"
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
    resource: "https://epch.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://epch.in/about-epch"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://epch.in/membership-registration"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://epch.in/apply-new-membership"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.epch.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Export Promotion for Handicrafts (EPCH) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Similar or duplicate names are not allowed;"
    effect: ineligible
    source: S1
    confidence: medium
```