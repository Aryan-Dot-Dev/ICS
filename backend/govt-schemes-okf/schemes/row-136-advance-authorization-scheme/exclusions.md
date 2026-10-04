---
type: "Government Scheme Exclusions"
title: "Advance Authorization Scheme — Exclusions"
description: "Structured disqualifiers for ROW-136."
scheme_id: "ROW-136"
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
    resource: "https://dgft.gov.in/CP/?opt=advance-authorization"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://content.dgft.gov.in/Website/dgftprod/39108932-5da7-4496-b3a6-d8d9c1c0865b/sugar notification.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.dgft.gov.in/CP/?opt=advance-authorization"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Advance Authorization Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Authorization is specific to a particular export product and cannot be transferred"
    effect: ineligible
    source: S1
    confidence: medium
```