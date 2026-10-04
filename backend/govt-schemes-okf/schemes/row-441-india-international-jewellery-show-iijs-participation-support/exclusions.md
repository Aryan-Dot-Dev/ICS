---
type: "Government Scheme Exclusions"
title: "India International Jewellery Show (IIJS) Participation Support — Exclusions"
description: "Structured disqualifiers for ROW-441."
scheme_id: "ROW-441"
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
    resource: "https://gjepc.org/emailer_gjepc/11-04-2026/index.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://gjepc.org/emailer_gjepc/5-4-2026/index.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://registration.gjepc.org/login.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.gjepc.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# India International Jewellery Show (IIJS) Participation Support — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Exhibitors who cancel participation during the Prime Assure period (2026–28) or are not allotted space will not be considered Prime Assure Exhibitors for remaining shows and will not be eligible for any Prime Assure benefits."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "violators may be debarred from participating in current and future exhibitions organized by GJEPC."
    effect: ineligible
    source: S1
    confidence: medium
```