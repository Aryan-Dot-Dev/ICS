---
type: "Government Scheme Eligibility"
title: "Gem & Jewellery Export Promotion Council (GJEPC) Schemes — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-443."
scheme_id: "ROW-443"
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
    resource: "https://gjepc.org/the-organisation.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://gjepc.org/benefits.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://gjepc.org/process-&-documentation-of-new-membership.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://gjepc.org/registration.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://gjepc.org/process-of-renewal-membership.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.gjepc.org/registration.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://www.gjepc.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Gem & Jewellery Export Promotion Council (GJEPC) Schemes — Eligibility

_Machine-imported from runs/row-443/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Any individual, partnership, company, trust, society, or HUF engaged in the gems and jewellery sector can… |
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
| business ownership | yes | Any individual, partnership, company, trust, society, or HUF engaged in the gems and jewellery sector can… |
| business type | yes | For Associate Micro Membership, domestic turnover must be up to Rs. 40 lakhs. |
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
    - rule_id: REG-001
      field: applicant.iec_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Eligibility is based on declaring turnover of products (diamonds, gold jewellery, etc.) and having a valid Import Export Code (IEC)."
    - rule_id: TRN-001
      field: applicant.business.annual_turnover
      operator: less_than_or_equal
      value: 4000000
      type: hard
      source: S1
      confidence: high
      detail: "For Associate Micro Membership, domestic turnover must be up to Rs. 40 lakhs."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.iec_registered
  - applicant.business.annual_turnover
  - applicant.age
  - applicant.business.ownership
  - applicant.business.type
```

Rule/concept references: [business-type](../../rules/business-type.md)
