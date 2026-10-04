---
type: "Government Scheme Exclusions"
title: "Pradhan Mantri Research Fellows (PMRF) Scheme — Exclusions"
description: "Structured disqualifiers for ROW-211."
scheme_id: "ROW-211"
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
    resource: "https://pmrf.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmrf.in/guidelines.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmrf.in/fellowship.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmrf.in/documents/Overall-Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://pmrf.in/documents/16_01_2026_Guidelines for PMRF 1.0 (1).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://pmrf.in/documents/14_01_2025_Guidelines-for-PMRF.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://pmrf.in/documents/Pay-Matrix.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://pmrf.in/documents/TAship-Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://pmrf.in/documents/Review_Process-Instructions-to-Fellows.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://pmrf.in/documents/Dec-24_Slides_Published.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://pmrf.in/documents/May25-review_Website.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://pmrf.in/documents/Statistics-PDF-Dec-2025.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://www.pmrf.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://www.pmrf.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Pradhan Mantri Research Fellows (PMRF) Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "are not eligible for Direct Entry"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Integrated PhD students are not eligible for Direct Entry at the time of completion of Masters requirement"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "A candidate who defers admission in a PhD programme cannot be considered for Direct Entry at the time of joining"
    effect: ineligible
    source: S1
    confidence: medium
```