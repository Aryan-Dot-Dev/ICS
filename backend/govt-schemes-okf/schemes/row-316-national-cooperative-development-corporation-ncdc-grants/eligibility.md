---
type: "Government Scheme Eligibility"
title: "National Cooperative Development Corporation (NCDC) Grants — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-316."
scheme_id: "ROW-316"
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
    resource: "https://ncdc.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ncdc.in/index.jsp?page=common-application%3Dhi"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ncdc.in/index.jsp?page=common-application%3Den"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ncdc.in/documents/other/CitizenCharter.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ncdc.in/documents/other/4822131219Activities-Assisted-and-Pattern-of-Assistance.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://ncdc.in/documents/other/0713090725POA-2024-25.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://ncdc.in/documents/other/3908071119Yuva.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://ncdc.in/documents/schemes/5414180419Revised_CSR_Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://ncdc.in/documents/other/Nandini-Sahakar-Scheme-Hindi-01.11.2021.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://ncdc.in/documents/other/आयुष्मान सहकार20102020.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://www.ncdc.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Cooperative Development Corporation (NCDC) Grants — Eligibility

_Machine-imported from runs/row-316/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Cooperatives registered or deemed to be registered under the Cooperative Societies Act, 1912 or under the… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Cooperatives registered or deemed to be registered under the Cooperative Societies Act, 1912 or under the… |
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
    - rule_id: BUS-001
      field: applicant.business.min_operation_years
      operator: greater_than_or_equal
      value: 3
      type: hard
      source: S1
      confidence: medium
      detail: "For direct funding, the cooperative should have been in operation for not less than 3 years and should have positive net worth, not less than 100% paid up share capital, i.e. there should be no erosion in the paid-up share capital."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.min_operation_years
  - applicant.age
  - applicant.state
```

Rule/concept references: [business-type](../../rules/business-type.md)
