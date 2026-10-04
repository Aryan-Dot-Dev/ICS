---
type: "Government Scheme Eligibility"
title: "TANSIDCO MSME Support Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-341."
scheme_id: "ROW-341"
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
    resource: "https://tansidco.org/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://tansidco.org/Applications/index"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://tansidco.org/Home/show_breakup_outright/RzMyNTI2NjUxMjU1MjU1MjIrZGRramRra2Qkc3Nzc3Nzc3NzK3Nzc3Nzc3NzXzEzMg==/plugplayout"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://tansidco.org/Home/show_breakup_outright/RzMyNTI2NjUxMjU1MjU1MjIrZGRramRra2Qkc3Nzc3Nzc3NzK3Nzc3Nzc3NzXzEzMQ==/plugplayout"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://tansidco.org/Home/vacant_type_details/outright"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://tansidco.org/Home/show_detail_report/RzMyNTI2NjUxMjU1MjU1MjIrZGRramRra2Qkc3Nzc3Nzc3NzK3Nzc3Nzc3NzXzgz"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://tansidco.org/Home/show_detail_report/RzMyNTI2NjUxMjU1MjU1MjIrZGRramRra2Qkc3Nzc3Nzc3NzK3Nzc3Nzc3NzXzEwMQ=="
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://tansidco.org/Home/show_detail_report/RzMyNTI2NjUxMjU1MjU1MjIrZGRramRra2Qkc3Nzc3Nzc3NzK3Nzc3Nzc3NzXzEwOA=="
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://tansidco.org/Home/show_detail_report/RzMyNTI2NjUxMjU1MjU1MjIrZGRramRra2Qkc3Nzc3Nzc3NzK3Nzc3Nzc3NzXzEzNA=="
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://tansidco.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# TANSIDCO MSME Support Scheme — Eligibility

_Machine-imported from runs/row-341/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Udyam/UAM registration is encouraged but not explicitly mandatory for application initiation. |
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
| business type | yes | Any individual, entrepreneur, MSME, or industrial unit seeking to establish or expand operations in Tamil… |
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
| scheme-specific | yes | Udyam/UAM registration is encouraged but not explicitly mandatory for application initiation. |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.udyam_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Udyam/UAM registration is encouraged but not explicitly mandatory for application initiation."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.udyam_registered
  - applicant.age
  - applicant.business.type
```