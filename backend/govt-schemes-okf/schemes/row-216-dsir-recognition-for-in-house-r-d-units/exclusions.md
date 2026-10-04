---
type: "Government Scheme Exclusions"
title: "DSIR Recognition for In-house R&D Units — Exclusions"
description: "Structured disqualifiers for ROW-216."
scheme_id: "ROW-216"
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
    resource: "https://dsir.gov.in/offerings/schemes-and-services/details/recognition-of-in-house-rd-units-rdi-AjM0ETMtQWa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dsir.gov.in/static/uploads/2026/01/05d514e07138bda3a342a1837dfde57d.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://dsir.gov.in/offerings/schemes-and-services/details/online-application-submission-cjNzITMtQWa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.dsir.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# DSIR Recognition for In-house R&D Units — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The R&D unit(s) should not be located in residential areas but should operate in premises authorized by relevant Central/State Government."
    effect: ineligible
    source: S1
    confidence: medium
```