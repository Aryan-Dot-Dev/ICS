---
type: "Government Scheme Exclusions"
title: "PADMA Scheme — Exclusions"
description: "Structured disqualifiers for ROW-2."
scheme_id: "ROW-2"
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
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240312190873903.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240319174690753.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240319496043408.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/202403191896519405.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/202403191898945670.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/2024031932498004.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://msme.haryana.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://msme.haryana.gov.in/padma-schemes/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PADMA Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The unit should be in regular production at the time of disbursement and the subsidy shall not be released to closed unit."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "The grant shall not be used for procurement/purchase of land under PADMA Cluster Infrastructure Development Scheme."
    effect: ineligible
    source: S1
    confidence: medium
```