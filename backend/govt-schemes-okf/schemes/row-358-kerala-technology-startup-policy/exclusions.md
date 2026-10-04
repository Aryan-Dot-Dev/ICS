---
type: "Government Scheme Exclusions"
title: "Kerala Technology Startup Policy — Exclusions"
description: "Structured disqualifiers for ROW-358."
scheme_id: "ROW-358"
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
    resource: "https://startupmission.kerala.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupmission.kerala.gov.in/schemes/early-stage-funding"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupmission.kerala.gov.in/schemes/seed-fund"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupmission.kerala.gov.in/schemes/scaleup-seed-fund"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupmission.kerala.gov.in/schemes/women-soft-loan"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startupmission.kerala.gov.in/schemes/nidhi-seed-support-program"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://startupmission.kerala.gov.in/schemes/innovation-grant"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://grants.startupmission.in/img/guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://startupmission.kerala.gov.in/storage/reports/8a5c6df4-6f88-4ac1-92b6-ce91506c9703.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://startupmission.kerala.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Kerala Technology Startup Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Startups must not have any other pending dues with government agencies, KSUM, or other incubators"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "pure software projects are not eligible"
    effect: ineligible
    source: S1
    confidence: medium
```