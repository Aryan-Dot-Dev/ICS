---
type: "Government Scheme Exclusions"
title: "Small Hydro Power Programme — Exclusions"
description: "Structured disqualifiers for ROW-192."
scheme_id: "ROW-192"
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
    resource: "https://mnre.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mnre.gov.in/en/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mnre.gov.in/about-department/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%b8%e0%a5%8d%0%a4%a4%e0%a4%be%0%a4%b5%e0%a4%a8%e0%a4%be/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mnre.gov.in/vartman-suchana/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://cdnbbsr.s3waas.gov.in/s3716e1b8c6cd17b771da77391355749f3/uploads/2026/05/202605131556091014.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://mnre.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Small Hydro Power Programme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Projects exceeding 25 MW capacity are not eligible under SHP"
    effect: ineligible
    source: S1
    confidence: medium
```