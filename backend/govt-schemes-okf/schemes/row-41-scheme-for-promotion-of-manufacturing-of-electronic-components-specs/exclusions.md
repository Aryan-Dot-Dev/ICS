---
type: "Government Scheme Exclusions"
title: "Scheme for Promotion of Manufacturing of Electronic Components (SPECS) — Exclusions"
description: "Structured disqualifiers for ROW-41."
scheme_id: "ROW-41"
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
    resource: "https://meity.gov.in/specs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://meity.gov.in/documents/guidelines"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://meity.gov.in/documents/gazettes-notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nsws.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.meity.gov.in/specs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Scheme for Promotion of Manufacturing of Electronic Components (SPECS) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The applicant must have a minimum net worth as specified in the scheme guidelines and must not have availed benefits under any other central or state government scheme for the same investment."
    effect: ineligible
    source: S1
    confidence: medium
```