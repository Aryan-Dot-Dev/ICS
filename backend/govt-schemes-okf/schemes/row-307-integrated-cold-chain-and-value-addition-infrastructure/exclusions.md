---
type: "Government Scheme Exclusions"
title: "Integrated Cold Chain and Value Addition Infrastructure — Exclusions"
description: "Structured disqualifiers for ROW-307."
scheme_id: "ROW-307"
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
    resource: "https://mofpi.gov.in/en/Schemes/about-pmksy-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mofpi.gov.in/Schemes/cold-chain/download-guidelines-0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mofpi.gov.in/Schemes/cold-chain/download-circulars-0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mofpi.gov.in/Schemes/food-safety-quality-assurance-infrastructure/setting-gradation-quality-control-food-testing-laboratory/release-funds"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://mofpi.gov.in/en/Schemes/about-mega-food-park-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://mofpi.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Integrated Cold Chain and Value Addition Infrastructure — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "In case of registered leasehold land, duration of lease should not be less than 15 years."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Blacklisting/debarring may occur for misuse of grant-in-aid (e.g., M/s Paras Spices, M/s Vision Fresh and Frozen)."
    effect: ineligible
    source: S1
    confidence: medium
```