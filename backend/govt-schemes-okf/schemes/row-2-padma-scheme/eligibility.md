---
type: "Government Scheme Eligibility"
title: "PADMA Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-2."
scheme_id: "ROW-2"
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
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240312190873903.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240319174690753.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240319496043408.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/202403191896519405.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/202403191898945670.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/2024031932498004.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://msme.haryana.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://msme.haryana.gov.in/padma-schemes/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PADMA Scheme — Eligibility

_Machine-imported from runs/row-2/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | The unit should be engaged in manufacturing/processing of the approved product category of that cluster. |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | The unit availing incentive under this scheme will not be eligible to obtain incentives under any capital… |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | The micro and small enterprises inside/outside the approved PADMA cluster shall be eligible under the scheme. |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | yes | The unit availing incentive under this scheme will not be eligible to obtain incentives under any capital… |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | The MSEs shall also comply with the following conditions: The unit should have filed Udyam Registration… |

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
      detail: "The MSEs shall also comply with the following conditions: The unit should have filed Udyam Registration Certificate (URC) and Haryana Udhyam Memorandum (HUM)."
    - rule_id: BUS-001
      field: applicant.business.commercial_production
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "The unit should be in commercial production."
    - rule_id: BUS-002
      field: applicant.business.commercial_production
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "The unit shall remain in regular production for a period of 05 years from date of commercial production."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.udyam_registered
  - applicant.business.commercial_production
  - applicant.age
  - applicant.state
  - applicant.business.type
```

Rule/concept references: [business-type](../../rules/business-type.md)
