---
type: "Government Scheme Exclusions"
title: "Hunar Se Rozgar Tak (HSRT) Scheme — Exclusions"
description: "Structured disqualifiers for ROW-225."
scheme_id: "ROW-225"
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
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/06/4339f22795be4fe87a7b9c2ebe87761a.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/06/5def192bc5408131df03d7c1fa59bc86.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/06/219fa7fc3427c09fd97ea61faab24a83.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://master-tourism.digifootprint.gov.in/static/uploads/2025/06/090a0b6418f4eff50f520e1fb7b3993b.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://tourism.gov.in/hsrt"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Hunar Se Rozgar Tak (HSRT) Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Blacklisted entities from MSDE, NSDA, or MoT are ineligible to apply"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Re-inspection fee of Rs.10,000/- applies if rejected due to lack of infrastructure"
    effect: ineligible
    source: S1
    confidence: medium
```