---
type: "Government Scheme Exclusions"
title: "Angel Tax Exemption for DPIIT Startups — Exclusions"
description: "Structured disqualifiers for ROW-71."
scheme_id: "ROW-71"
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
    resource: "https://startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupindia.gov.in/content/sih/en/startupgov/imb.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupindia.gov.in/content/sih/en/about-startup-india-initiative.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupindia.gov.in/content/dam/invest-india/Templates/public/Action%20Plan.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.startupindia.gov.in/content/sih/en/government-schemes/angel-tax-exemption.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Angel Tax Exemption for DPIIT Startups — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The entity should not have been formed by splitting up or reconstructing an existing business."
    effect: ineligible
    source: S1
    confidence: medium
```