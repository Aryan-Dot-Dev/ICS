---
type: "Government Scheme Exclusions"
title: "WE-Hub Women Entrepreneurship Program — Exclusions"
description: "Structured disqualifiers for ROW-122."
scheme_id: "ROW-122"
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
    resource: "https://wehub.telangana.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://wehub.telangana.gov.in/sie/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://wehub.telangana.gov.in/contact-us/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://wehub.telangana.gov.in/contact/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://wehub.telangana.gov.in/about-us/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://wehub.telangana.gov.in/about/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://wehub.telangana.gov.in/urban-innovation/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://wehub.telangana.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# WE-Hub Women Entrepreneurship Program — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Part-time engagement in the enterprise may disqualify applicants for incubation and acceleration programs"
    effect: ineligible
    source: S1
    confidence: medium
```