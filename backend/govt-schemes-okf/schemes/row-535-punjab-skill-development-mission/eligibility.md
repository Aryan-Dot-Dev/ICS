---
type: "Government Scheme Eligibility"
title: "Punjab Skill Development Mission — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-535."
scheme_id: "ROW-535"
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
    resource: "https://pbskills.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Punjab Skill Development Mission — Eligibility

_Machine-imported from runs/row-535/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Eligibility varies by course but generally includes Punjab residents aged 18–35 years, with preference given… |
| gender | yes | Eligibility varies by course but generally includes Punjab residents aged 18–35 years, with preference given… |
| citizenship/residency | yes | Eligibility varies by course but generally includes Punjab residents aged 18–35 years, with preference given… |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | yes | Eligibility varies by course but generally includes Punjab residents aged 18–35 years, with preference given… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | yes | Eligibility varies by course but generally includes Punjab residents aged 18–35 years, with preference given… |
| educational level | yes | Specific educational qualifications depend on the trade or course selected. |
| social category | yes | Eligibility varies by course but generally includes Punjab residents aged 18–35 years, with preference given… |
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
      value: [SC, ST]
      type: soft
      source: S1
      confidence: medium
      detail: "Eligibility varies by course but generally includes Punjab residents aged 18–35 years, with preference given to unemployed youth, school dropouts, and individuals from SC/ST, women, and economically weaker sections."
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
  - applicant.gender
  - applicant.citizenship
  - applicant.employment_status
  - applicant.student_status
```

Rule/concept references: [social-category](../../concepts/social-category.md)
