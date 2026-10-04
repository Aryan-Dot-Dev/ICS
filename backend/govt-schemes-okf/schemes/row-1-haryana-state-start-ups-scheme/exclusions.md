---
type: "Government Scheme Exclusions"
title: "Haryana State Start-ups Scheme — Exclusions"
description: "Structured disqualifiers for ROW-1."
scheme_id: "ROW-1"
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
    resource: "https://startupharyana.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupharyana.gov.in/front/startup-registration"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupharyana.gov.in/pages/eligibility-for-startups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupharyana.gov.in/pages/fiscal-benefits"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupharyana.gov.in/assets/images/pdf/Startup_registration_Manual_V2.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startupharyana.gov.in/pages/about-startup-haryana"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://startupharyana.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Haryana State Start-ups Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Should not have been formed by splitting up or reconstructing an existing business"
    effect: ineligible
    source: S1
    confidence: medium
```