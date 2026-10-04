---
type: "Government Scheme Exclusions"
title: "ECGC Export Credit Guarantee Schemes — Exclusions"
description: "Structured disqualifiers for ROW-26."
scheme_id: "ROW-26"
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
    resource: "https://ecgc.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ecgc.in/claim-paid-details-by-ecgc"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ecgc.in/national-export-insurance-account-neia"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.ecgc.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# ECGC Export Credit Guarantee Schemes — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Certain high-risk countries or buyers may be excluded or require higher premium"
    effect: ineligible
    source: S1
    confidence: medium
```