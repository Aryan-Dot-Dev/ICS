---
type: "Government Scheme Exclusions"
title: "MNRE Off-grid Solar Power Schemes — Exclusions"
description: "Structured disqualifiers for ROW-109."
scheme_id: "ROW-109"
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
    resource: "https://cdnbbsr.s3waas.gov.in/s3716e1b8c6cd17b771da77391355749f3/uploads/2026/03/202603191833866183.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mnre.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MNRE Off-grid Solar Power Schemes — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Beneficiary must not have availed subsidy for the same purpose under any other government scheme"
    effect: ineligible
    source: S1
    confidence: medium
```