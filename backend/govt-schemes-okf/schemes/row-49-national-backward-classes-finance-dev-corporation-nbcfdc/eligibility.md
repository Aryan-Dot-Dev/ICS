---
type: "Government Scheme Eligibility"
title: "National Backward Classes Finance & Dev Corporation (NBCFDC) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-49."
scheme_id: "ROW-49"
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
    resource: "https://nbcfdc.gov.in/nbcfdc/web/group-loan-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nbcfdc.gov.in/nbcfdc/web/individual-loan-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nbcfdc.gov.in/nbcfdc/web/loan-flyer"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nbcfdc.gov.in/nbcfdc/web/howapply"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nbcfdc.gov.in/nbcfdc/web/loans-pattern-of-finance"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://nbcfdc.gov.in/nbcfdc/web/about"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://nbcfdc.gov.in/nbcfdc/web/objective"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://nbcfdc.gov.in/nbcfdc/web/vision"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://nbcfdc.gov.in/nbcfdc/web/other-schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://nbcfdc.gov.in/nbcfdc/web/sites/default/files/other-scheme/PLGIA%20Scheme-Feb2021_4.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://nbcfdc.gov.in/nbcfdc/web/sites/default/files/other-scheme/TechUpgradation-08.03.2022.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://nbcfdc.gov.in/nbcfdc/web/sites/default/files/2023-09/Awarness%20Camp_0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://nbcfdc.gov.in/nbcfdc/web/nfobc"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://www.nbcfdc.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Backward Classes Finance & Dev Corporation (NBCFDC) — Eligibility

_Machine-imported from runs/row-49/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Members of Backward Classes as notified by Central/State Govt. |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | yes | Applicant's annual family income should be upto Rs.5.00 Lakh. |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Members of Backward Classes as notified by Central/State Govt. |
| disability status | no | no criterion recorded in source data |
| marital/family status | yes | Applicant's annual family income should be upto Rs.5.00 Lakh. |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | yes | Applicant's annual family income should be upto Rs.5.00 Lakh. |
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
      value: [SC, ST, minority]
      type: hard
      source: S1
      confidence: medium
      detail: "For Group Loan Scheme, at least 60% members of SHG must belong to Backward Classes, with other members from weaker sections including SC/ST/Minorities/PwD."
    - rule_id: SOC-002
      field: applicant.social_category
      operator: in
      value: [OBC]
      type: hard
      source: S1
      confidence: medium
      detail: "For skill training under PM DAKSH, eligibility is based on OBC/EBC status and income criteria."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.state
  - applicant.annual_income
```

Rule/concept references: [social-category](../../concepts/social-category.md)
