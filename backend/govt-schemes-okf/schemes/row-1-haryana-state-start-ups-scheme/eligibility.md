---
type: "Government Scheme Eligibility"
title: "Haryana State Start-ups Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-1."
scheme_id: "ROW-1"
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
    resource: "https://startupharyana.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupharyana.gov.in/front/startup-registration"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupharyana.gov.in/pages/eligibility-for-startups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupharyana.gov.in/pages/fiscal-benefits"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupharyana.gov.in/assets/images/pdf/Startup_registration_Manual_V2.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startupharyana.gov.in/pages/about-startup-haryana"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://startupharyana.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Haryana State Start-ups Scheme — Eligibility

_Machine-imported from runs/row-1/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Company Age: Period of existence and operations should not exceed 10 years from the Date of Incorporation |
| gender | yes | Target Beneficiaries: Startups; incubators; women entrepreneurs |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | yes | Innovative & Scalable: Must work towards development or improvement of a product, process, or service with a scalable business… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Company Type: Incorporated as a Private Limited Company, Registered Partnership Firm, or Limited Liability Partnership |
| business type | yes | Company Type: Incorporated as a Private Limited Company, Registered Partnership Firm, or Limited Liability Partnership |
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
| scheme-specific | yes | DPIIT Recognition: Must be DPIIT-registered (mandatory for all applicants) |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: AGE-001
      field: applicant.business.age_years
      operator: less_than_or_equal
      value: 10
      type: hard
      source: S1
      confidence: high
      detail: "Period of existence and operations should not exceed 10 years from the Date of Incorporation"
    - rule_id: TRN-001
      field: applicant.business.annual_turnover
      operator: less_than_or_equal
      value: 1000000000
      type: hard
      source: S1
      confidence: high
      detail: "Should not exceed ₹100 crores for any financial year since incorporation"
    - rule_id: REG-001
      field: applicant.dpiit_recognized
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Must be DPIIT-registered (mandatory for all applicants)"
    - rule_id: ST-001
      field: applicant.business.registered_state
      operator: equals
      value: "IN-HR"
      type: hard
      source: S1
      confidence: medium
      detail: "Must be DPIIT-registered and have a registered office in Haryana"
    - rule_id: REG-002
      field: applicant.dpiit_recognized
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Must be DPIIT-registered, have a registered office outside Haryana, but operate through government-owned or supported operational incubators located in Haryana"
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.age_years
  - applicant.business.annual_turnover
  - applicant.dpiit_recognized
  - applicant.business.registered_state
  - applicant.age
  - applicant.gender
  - applicant.employment_status
  - applicant.business.ownership
  - applicant.business.type
```

Rule/concept references: [business-type](../../rules/business-type.md)
