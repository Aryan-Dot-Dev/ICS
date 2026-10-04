---
type: "Government Scheme Exclusions"
title: "National Payments Corporation of India (NPCI) BharatPay — Exclusions"
description: "Structured disqualifiers for ROW-477."
scheme_id: "ROW-477"
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
    resource: "https://npci.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://npci.org.in/purpose-value"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://npci.org.in/digisaathi"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://npci.org.in/product/upi/use-npci"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://npci.org.in/product/nach/all-members"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.npci.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Payments Corporation of India (NPCI) BharatPay — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "UPI PIN must not be shared;"
    effect: ineligible
    source: S1
    confidence: medium
```