---
type: "Government Scheme Eligibility"
title: "MSME Development Policy Odisha — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-252."
scheme_id: "ROW-252"
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
    resource: "https://msme.odisha.gov.in/sites/default/files/2020-05/FINALbyDI%28O%29-Odisha_MSME_Dev._Policy1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://msme.odisha.gov.in/sites/default/files/2020-05/FINALbyDI%28O%29-Odisha_MSME_Dev_Policy.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://msme.odisha.gov.in/sites/default/files/2023-02/1292_0_0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://msme.odisha.gov.in/sites/default/files/2023-02/1287_compressed.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://msme.odisha.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MSME Development Policy Odisha — Eligibility

_Machine-imported from runs/row-252/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | yes | new Micro & Small Enterprises owned by women are eligible @30% subject to Rs.1.25 crore. |
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
| business type | yes | For Capital Investment Subsidy, new Micro & Small Enterprises are eligible @25% of capital investment in… |
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
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [SC, ST]
      type: hard
      source: S1
      confidence: medium
      detail: "new Micro & Small Enterprises owned by SC, ST are eligible @33% subject to Rs.1.5 crore;"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.gender
  - applicant.business.type
```

Rule/concept references: [social-category](../../concepts/social-category.md)
