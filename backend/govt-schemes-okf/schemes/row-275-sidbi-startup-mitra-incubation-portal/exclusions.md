---
type: "Government Scheme Exclusions"
title: "SIDBI Startup Mitra – Incubation Portal — Exclusions"
description: "Structured disqualifiers for ROW-275."
scheme_id: "ROW-275"
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
    resource: "https://startupindia.gov.in/content/sih/en/startupgov/startup-mitra.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupindia.gov.in/content/dam/invest-india/Templates/public/Action%20Plan.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupindia.gov.in/content/dam/invest-india/Templates/public/Startup%20India_Logo%20Application%20Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.startupindia.gov.in/content/sih/en/startupgov/startup-mitra.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# SIDBI Startup Mitra – Incubation Portal — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The startup should not have been formed by splitting up or reconstructing an existing business."
    effect: ineligible
    source: S1
    confidence: medium
```