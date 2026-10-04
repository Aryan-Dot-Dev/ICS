---
type: "Government Scheme Eligibility"
title: "Design Registration Facilitation for Startups — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-76."
scheme_id: "ROW-76"
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
    resource: "https://ipindia.gov.in/application-workflow/design-application-workflow"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ipindia.gov.in/application-workflow/design-workflow-process"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ipindia.gov.in/designs-before-you-apply-forms-official-fees"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ipindia.gov.in/storage/uploads/docs-operator/bf10437e-a59f-4cfe-bc09-e1ee3e15602d.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://ipindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Design Registration Facilitation for Startups — Eligibility

_Machine-imported from runs/row-76/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
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
| business ownership | yes | The applicant must be a recognized startup by DPIIT, incorporated as a private limited company, registered… |
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
| scheme-specific | yes | Startups, as defined under the Startup India initiative, are eligible to apply for design registration. |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: TRN-001
      field: applicant.business.annual_turnover
      operator: less_than_or_equal
      value: 1000000000
      type: hard
      source: S1
      confidence: high
      detail: "The applicant must be a recognized startup by DPIIT, incorporated as a private limited company, registered partnership, or limited liability partnership, with turnover less than INR 100 Crore and not older than 10 years from incorporation."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.annual_turnover
  - applicant.business.ownership
```

Rule/concept references: [business-type](../../rules/business-type.md)
