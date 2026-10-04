---
type: "Government Scheme Exclusions"
title: "DPIIT Recognition for Startups — Exclusions"
description: "Structured disqualifiers for ROW-22."
scheme_id: "ROW-22"
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
    resource: "https://startupindia.gov.in/content/sih/en/startup-scheme.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupindia.gov.in/content/sih/en/profile.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupindia.gov.in/content/dam/invest-india/Templates/public/Action%20Plan.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startupindia.gov.in/content/dam/invest-india/HomePage/Startup-Playbook-Exclusive-Benefits-for-DPIIT-Recognised-Startups-in-India-April-2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://www.startupindia.gov.in/content/sih/en/recognition.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# DPIIT Recognition for Startups — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "An entity formed by splitting up or reconstruction of an existing business shall not be considered a 'Startup'."
    effect: ineligible
    source: S1
    confidence: medium
```