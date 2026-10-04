---
type: "Government Scheme Eligibility"
title: "Startup India Innovation Week Challenge — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-267."
scheme_id: "ROW-267"
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
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupindia.gov.in/content/sih/en/startup-scheme.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupindia.gov.in/content/sih/en/about-startup-india-initiative.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupindia.gov.in/content/sih/en/newsletters.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupindia.gov.in/content/sih/en/bloglist/blogs/how-to-use-the-startup-india-portal-from-registration-to-growth.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.startupindia.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Startup India Innovation Week Challenge — Eligibility

_Machine-imported from runs/row-267/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| employment status | yes | Eligibility for DPIIT recognition includes being incorporated as a Private Limited Company, LLP, or… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Eligibility for DPIIT recognition includes being incorporated as a Private Limited Company, LLP, or… |
| business type | yes | Eligibility for DPIIT recognition includes being incorporated as a Private Limited Company, LLP, or… |
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
| scheme-specific | yes | Eligibility for DPIIT recognition includes being incorporated as a Private Limited Company, LLP, or… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.dpiit_recognized
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Startups must be DPIIT recognised to participate in the Innovation Week Challenge."
    - rule_id: TRN-001
      field: applicant.business.annual_turnover
      operator: less_than_or_equal
      value: 2000000000
      type: hard
      source: S1
      confidence: high
      detail: "Eligibility for DPIIT recognition includes being incorporated as a Private Limited Company, LLP, or partnership firm, being within 10 years of incorporation (20 years for DeepTech), having turnover not exceeding INR 200 crore (INR 300 crore for DeepTech), and working towards innovation, development, or improvement of products/services with potential for wealth and employment generation."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.dpiit_recognized
  - applicant.business.annual_turnover
  - applicant.employment_status
  - applicant.business.ownership
  - applicant.business.type
```

Rule/concept references: [business-type](../../rules/business-type.md)
