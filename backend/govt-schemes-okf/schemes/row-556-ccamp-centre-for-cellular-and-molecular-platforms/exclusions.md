---
type: "Government Scheme Exclusions"
title: "CCAMP (Centre for Cellular and Molecular Platforms) — Exclusions"
description: "Structured disqualifiers for ROW-556."
scheme_id: "ROW-556"
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
    resource: "https://ccamp.res.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ccamp.res.in/seed-funding"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ccamp.res.in/seed-funding-siip"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ccamp.res.in/seed-funding-leap"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ccamp.res.in/seed-funding-aim"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://ccamp.res.in/seed-funding-seed-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://ccamp.res.in/seed-funding-big-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://ccamp.res.in/seed-funding-sisfs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://ccamp.res.in/seed-funding-NIDHI-SSS"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://ccamp.res.in/about"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://ccamp.res.in/incubation"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://ccamp.res.in/dia"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://ccamp.res.in/nidhi-accelerator"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://ccamp.res.in/brec"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://ccamp.res.in/kar-startup-advancement"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://ccamp.res.in/we-escalate"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S17
    resource: "https://www.ccamp.res.in/funding/content/application-form-seed-funding-schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# CCAMP (Centre for Cellular and Molecular Platforms) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Startups must not have received excessive prior government support (e.g., SISFS bars those with >INR 10 lakh from other Central/State schemes)"
    effect: ineligible
    source: S1
    confidence: medium
```