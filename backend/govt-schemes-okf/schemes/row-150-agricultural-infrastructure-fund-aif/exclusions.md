---
type: "Government Scheme Exclusions"
title: "Agricultural Infrastructure Fund (AIF) — Exclusions"
description: "Structured disqualifiers for ROW-150."
scheme_id: "ROW-150"
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
    resource: "https://agriinfra.dac.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://agriinfra.dac.gov.in/Home/SchemeOverview"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://agriinfra.dac.gov.in/Home/Objectives"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://agriinfra.dac.gov.in/Home/FundAllocation"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://agriinfra.dac.gov.in/Home/WhoCanApply"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/FINALSchemeGuidelinesAIF.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/91EE46A50D3941908F192725717E431B.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/DPR_TEMPLATE_HINDI.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/DPR Template for projects under Agriculture Infrastructure Fund1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://agriinfra.dac.gov.in/Home/CheckList"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://agriinfra.dac.gov.in/Home/MainFeatures"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://agriinfra.dac.gov.in/Home/InterestRate"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://agriinfra.dac.gov.in/Documents/Circular/B7373CFD15264E7AAD3CDC984E8D0F20.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://agriinfra.dac.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Agricultural Infrastructure Fund (AIF) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Standalone secondary processing infrastructures are not eligible"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Not eligible for individuals/farmers for certain infrastructure components (Note 4)"
    effect: ineligible
    source: S1
    confidence: medium
```