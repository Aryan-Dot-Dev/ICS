---
type: "Government Scheme Eligibility"
title: "Government e-Marketplace (GeM) Seller Onboarding — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-406."
scheme_id: "ROW-406"
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
    resource: "https://gem.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://gem.gov.in/gem-advantages"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://gem.gov.in/gem-exclusive"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://gem.gov.in/support/government_oms_circulars"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/revised_caution_money_withdrawal_1772100284.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/sop-gem_treds_integration_1780478660.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/om-no_1758539509.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Government e-Marketplace (GeM) Seller Onboarding — Eligibility

_Machine-imported from runs/row-406/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | yes | Specific eligibility for preferential treatment includes MSMEs (as per Udyam registration), startups (able… |
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
| business type | yes | Specific eligibility for preferential treatment includes MSMEs (as per Udyam registration), startups (able… |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Specific eligibility for preferential treatment includes MSMEs (as per Udyam registration), startups (able… |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | Sellers and service providers can register on GeM by providing required documents and completing the online… |

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
      detail: "Specific eligibility for preferential treatment includes MSMEs (as per Udyam registration), startups (able to list products under Startup Runway 2.0), women entrepreneurs (under Womaniya initiative), and SC/ST entrepreneurs (under MSME SC/ST initiative)."
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
