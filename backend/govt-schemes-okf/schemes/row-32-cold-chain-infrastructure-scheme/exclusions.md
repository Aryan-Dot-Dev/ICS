---
type: "Government Scheme Exclusions"
title: "Cold Chain Infrastructure Scheme — Exclusions"
description: "Structured disqualifiers for ROW-32."
scheme_id: "ROW-32"
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
    resource: "https://mofpi.gov.in/Schemes/cold-chain/download-circulars-0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mofpi.gov.in/Schemes/cold-chain/download-guidelines-0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mofpi.gov.in/en/Schemes/about-pmksy-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "http://mofpi.gov.in/Schemes/food-safety-quality-assurance-infrastructure/setting-gradation-quality-control-food-testing-laboratory/release-funds"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://mofpi.gov.in/coldchain"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Cold Chain Infrastructure Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Blacklisting/debarring may occur for misuse of grant-in-aid (e.g., M/s Paras Spices, M/s Vision Fresh and Frozen)"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Ineligible lists are published for non-compliant proposals (e.g., Ineligible list of 20 applications under Cold Chain Scheme)"
    effect: ineligible
    source: S1
    confidence: medium
```