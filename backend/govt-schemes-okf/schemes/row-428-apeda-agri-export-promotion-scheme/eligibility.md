---
type: "Government Scheme Eligibility"
title: "APEDA Agri Export Promotion Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-428."
scheme_id: "ROW-428"
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
    resource: "https://apeda.gov.in/FinancialAssistanceSchemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://apeda.gov.in/bharati/How_to_Apply.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://apeda.gov.in/annual-reports"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://apeda.gov.in/annual-account-reports"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://apeda.gov.in/annual-administrative-reports"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://apeda.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# APEDA Agri Export Promotion Scheme — Eligibility

_Machine-imported from runs/row-428/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| business ownership | no | no criterion recorded in source data |
| business type | yes | Applicants must submit a detailed project proposal along with supporting documents including IEC code, MSME… |
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
| scheme-specific | yes | Exporters of APEDA-scheduled products who are registered with APEDA and possess a valid… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.msme_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Applicants must submit a detailed project proposal along with supporting documents including IEC code, MSME registration (if applicable), GST and PAN details, audited financials, and other category-specific documentation as outlined in the application guidelines."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.msme_registered
  - applicant.business.type
```