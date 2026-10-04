---
type: "Government Scheme Eligibility"
title: "Mahila Udyam Nidhi Scheme (SIDBI) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-14."
scheme_id: "ROW-14"
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
    resource: "https://sidbi.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sidbi.in/en/government-programmes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.sidbi.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mahila Udyam Nidhi Scheme (SIDBI) — Eligibility

_Machine-imported from runs/row-14/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Business Activity: Engaged in manufacturing, service, or agro-processing |
| gender | yes | Applicant Type: Women entrepreneurs who are sole proprietors, partners in a partnership firm, or directors of women-owned… |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Applicant Type: Women entrepreneurs who are sole proprietors, partners in a partnership firm, or directors of women-owned… |
| business type | yes | Applicant Type: Women entrepreneurs who are sole proprietors, partners in a partnership firm, or directors of women-owned… |
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
| scheme-specific | yes | Registration: Must have Udyam Registration Certificate |

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
      detail: "Must have Udyam Registration Certificate"
    - rule_id: REG-002
      field: applicant.pan_held
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Pan-India"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.udyam_registered
  - applicant.pan_held
  - applicant.age
  - applicant.gender
  - applicant.business.ownership
  - applicant.business.type
```