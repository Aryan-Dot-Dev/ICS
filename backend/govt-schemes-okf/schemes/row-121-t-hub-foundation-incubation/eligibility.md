---
type: "Government Scheme Eligibility"
title: "T-Hub Foundation Incubation — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-121."
scheme_id: "ROW-121"
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
    resource: "https://t-hub.co/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://t-hub.co/about-us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://t-hub.co/programs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://t-hub.co/foundation"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://t-hub.co/aic-semiconductors"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://t-hub.co/spacetech"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://t-hub.co/healthcare"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://t-hub.co/aic-mobility-program"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://t-hub.co/google-for-startups-hub"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://t-hub.co/government"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://t-hub.co/startups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://t-hub.co/t-edge"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://t-hub.co/value-partner"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://t-hub.co/co-working"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://t-hub.co"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# T-Hub Foundation Incubation — Eligibility

_Machine-imported from runs/row-121/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Age Limit: Incorporated ≤ 10 years |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
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
| scheme-specific | yes | DPIIT Recognition: Recognised as DPIIT-registered startup or eligible for such recognition |

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
      detail: "Recognised as DPIIT-registered startup or eligible for such recognition"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.dpiit_recognized
  - applicant.age
```