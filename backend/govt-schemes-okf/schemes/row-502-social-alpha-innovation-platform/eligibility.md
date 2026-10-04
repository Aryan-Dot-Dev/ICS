---
type: "Government Scheme Eligibility"
title: "Social Alpha Innovation Platform — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-502."
scheme_id: "ROW-502"
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
    resource: "https://socialalpha.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://socialalpha.org/nidhi-sss/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://socialalpha.org/techtonic-innovations-for-sustainability/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://socialalpha.org/entrepreneur-in-residence/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://socialalpha.org/namma-bengaluru-challenge-26/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://socialalpha.org/spin/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://socialalpha.org/our-approach/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://socialalpha.org/incubation-labs/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://socialalpha.org/investment-model/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://socialalpha.org/platforms/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://socialalpha.org/aic-2/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://socialalpha.org/ceibic/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://socialalpha.org/techtonic/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://socialalpha.org/programs-accelerators/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://socialalpha.org/get-involved/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2024/02/NIDHI-SeedSupportSchemeunderthe-DST.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Social Alpha Innovation Platform — Eligibility

_Machine-imported from runs/row-502/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | An applying start-up should be a registered company in India, preferably be a DPIIT registered/applied… |
| state | yes | Preference will be given to start-ups who have not availed any funding from any Government of India /State… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | no | no criterion recorded in source data |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.dpiit_recognized
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "An applying start-up should be a registered company in India, preferably be a DPIIT registered/applied start-up and should have completed a minimum of three months of association with Social Alpha in its resident or virtual incubation program."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.dpiit_recognized
  - applicant.citizenship
  - applicant.state
```