---
type: "Government Scheme Exclusions"
title: "NE Development Finance Corporation (NEDFi) — Exclusions"
description: "Structured disqualifiers for ROW-92."
scheme_id: "ROW-92"
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
    resource: "https://nedfi.com"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nedfi.com/loan-apply-form/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nedfi.com/short-term-loan-against-central-subsidy/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nedfi.com/loan-for-project-finance/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nedfi.com/loan-for-existing-and-new-business/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://nedfi.com/working-capital-loan/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://nedfi.com/loan-for-women-entrepreneurs/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://nedfi.com/loan-for-doctors/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://nedfi.com/loan-for-professional/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://nedfi.com/loan-for-speciality-tea-industry/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://nedfi.com/loan-for-artisans/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://nedfi.com/loan-against-liquid-security/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://nedfi.com/loan-for-micro-finance-institute/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://nedfi.com/wp-content/uploads/2021/09/NEDFi-MANDATORY-DISCLOSURE-UNDER-RTI-ACT.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://nedfi.com/wp-content/uploads/2024/12/NEDFi-Charges-Details.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NE Development Finance Corporation (NEDFi) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Subsidy must not be lien-marked with any other bank/institution;"
    effect: ineligible
    source: S1
    confidence: medium
```