---
type: "Government Scheme Eligibility"
title: "Self Employment Scheme for Rehabilitation of Manual Scavengers (SRMS) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-52."
scheme_id: "ROW-52"
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
    resource: "https://nskfdc.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Self Employment Scheme for Rehabilitation of Manual Scavengers (SRMS) — Eligibility

_Machine-imported from runs/row-52/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Eligible individuals include those who have been engaged in manual scavenging, identified through surveys… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | Beneficiaries must be Indian citizens and preferably belong to Scheduled Castes, Scheduled Tribes, or Other… |
| state | yes | Eligible individuals include those who have been engaged in manual scavenging, identified through surveys… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | yes | The scheme covers manual scavengers as defined under the Prohibition of Employment as Manual Scavengers and… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Beneficiaries must be Indian citizens and preferably belong to Scheduled Castes, Scheduled Tribes, or Other… |
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
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST, OBC]
      type: hard
      source: S1
      confidence: medium
      detail: "Beneficiaries must be Indian citizens and preferably belong to Scheduled Castes, Scheduled Tribes, or Other Backward Classes, though the primary criterion is engagement in manual scavenging."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.age
  - applicant.citizenship
  - applicant.state
  - applicant.employment_status
```

Rule/concept references: [social-category](../../concepts/social-category.md)
