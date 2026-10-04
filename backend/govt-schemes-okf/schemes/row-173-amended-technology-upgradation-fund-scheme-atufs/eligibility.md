---
type: "Government Scheme Eligibility"
title: "Amended Technology Upgradation Fund Scheme (ATUFS) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-173."
scheme_id: "ROW-173"
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
    resource: "https://tufs.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Amended Technology Upgradation Fund Scheme (ATUFS) — Eligibility

_Machine-imported from runs/row-173/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Existing and new textile units engaged in activities such as spinning, weaving, processing, garmenting,… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | The project must involve technology upgradation through indigenous, state-of-the-art, and energy-efficient… |
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
| Aadhaar | yes | The unit must be registered under the Companies Act, 1956/2013, or any other relevant statute, and must have… |
| scheme-specific | yes | The unit must be registered under the Companies Act, 1956/2013, or any other relevant statute, and must have… |

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
      detail: "The unit must be registered under the Companies Act, 1956/2013, or any other relevant statute, and must have a valid Udyog Aadhaar Memorandum (UAM) or Udyam Registration."
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
  - applicant.state
  - applicant.aadhaar_held
```