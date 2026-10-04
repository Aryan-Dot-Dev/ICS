---
type: "Government Scheme Exclusions"
title: "KSUM Special Grants for Deep Tech — Exclusions"
description: "Structured disqualifiers for ROW-357."
scheme_id: "ROW-357"
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
    resource: "https://startupmission.kerala.gov.in/schemes/early-stage-funding"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://grants.startupmission.in/img/guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupmission.kerala.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# KSUM Special Grants for Deep Tech — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Startups shall not have any other pending dues with any of the Government agencies, KSUM, Other incubators in the state and shall not be blacklisted by any Govt."
    effect: ineligible
    source: S1
    confidence: medium
```