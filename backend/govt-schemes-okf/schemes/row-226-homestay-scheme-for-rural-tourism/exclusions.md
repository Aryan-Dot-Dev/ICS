---
type: "Government Scheme Exclusions"
title: "Homestay Scheme for Rural Tourism — Exclusions"
description: "Structured disqualifiers for ROW-226."
scheme_id: "ROW-226"
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
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/09/6ecba54d3deb9df940126d5b97afc115.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "sd2.tourism.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://tourism.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Homestay Scheme for Rural Tourism — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Funding under the scheme cannot be utilized for land acquisition, resettlement and rehabilitation, relocation, dredging/development of bunds of a water body (man-made & natural both)"
    effect: ineligible
    source: S1
    confidence: medium
```