---
type: "Government Scheme Exclusions"
title: "Social Alpha Innovation Platform — Exclusions"
description: "Structured disqualifiers for ROW-502."
scheme_id: "ROW-502"
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
    resource: "https://socialalpha.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://socialalpha.org/nidhi-sss/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://socialalpha.org/techtonic-innovations-for-sustainability/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://socialalpha.org/entrepreneur-in-residence/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://socialalpha.org/namma-bengaluru-challenge-26/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://socialalpha.org/spin/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://socialalpha.org/our-approach/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://socialalpha.org/incubation-labs/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://socialalpha.org/investment-model/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://socialalpha.org/platforms/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://socialalpha.org/aic-2/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://socialalpha.org/ceibic/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://socialalpha.org/techtonic/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://socialalpha.org/programs-accelerators/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://socialalpha.org/get-involved/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2024/02/NIDHI-SeedSupportSchemeunderthe-DST.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Social Alpha Innovation Platform — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Indian Subsidiaries of MNCs/foreign companies are not eligible for NIDHI Seed Support Scheme"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Financial support under NIDHI-SSS shall not be used for repayment of loans, creation of personal assets, inter-corporate deposits, speculative purposes, or personal benefit of promoters"
    effect: ineligible
    source: S1
    confidence: medium
```