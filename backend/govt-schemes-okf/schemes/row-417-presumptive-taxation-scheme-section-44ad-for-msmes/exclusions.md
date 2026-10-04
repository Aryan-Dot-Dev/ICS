---
type: "Government Scheme Exclusions"
title: "Presumptive Taxation Scheme (Section 44AD) for MSMEs — Exclusions"
description: "Structured disqualifiers for ROW-417."
scheme_id: "ROW-417"
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
    resource: "https://www.incometaxindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://incometaxindia.gov.in/web/guest/notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://incometaxindia.gov.in/notifications"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Presumptive Taxation Scheme (Section 44AD) for MSMEs — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Professionals (as defined under Section 44AA) are not eligible."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "The business must not be involved in agency, brokerage, or commission-based activities."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "Professionals covered under Section 44AA(1) (e.g., doctors, lawyers, architects) are ineligible"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-004
    detail: "Businesses earning income from agency, brokerage, or commission are excluded"
    effect: ineligible
    source: S1
    confidence: medium
```