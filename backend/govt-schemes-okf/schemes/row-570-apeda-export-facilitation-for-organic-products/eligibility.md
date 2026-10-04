---
type: "Government Scheme Eligibility"
title: "APEDA Export Facilitation for Organic Products — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-570."
scheme_id: "ROW-570"
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
    resource: "https://apeda.gov.in/Registration-Procedure"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://apeda.gov.in/bharati/How_to_Apply.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://apeda.gov.in/sites/default/files/announcements/The_Saudi_Food_Show_Saudi_Arabia_2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://apeda.gov.in/sites/default/files/press_release/2233856.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://apeda.gov.in/sites/default/files/press_release/2216372.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://apeda.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# APEDA Export Facilitation for Organic Products — Eligibility

_Machine-imported from runs/row-570/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Farmers, Farmer Producer Organizations (FPOs), MSMEs, and agri-startups engaged in organic production and… |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Farmers, Farmer Producer Organizations (FPOs), MSMEs, and agri-startups engaged in organic production and… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Farmers, Farmer Producer Organizations (FPOs), MSMEs, and agri-startups engaged in organic production and… |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | Farmers, Farmer Producer Organizations (FPOs), MSMEs, and agri-startups engaged in organic production and… |
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
| scheme-specific | yes | Exporters of APEDA-scheduled organic products with valid Import-Export Code (IEC) and… |

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
      detail: "Exporters of APEDA-scheduled organic products with valid Import-Export Code (IEC) and Registration-cum-Membership Certificate (RCMC) from APEDA are eligible."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.iec_registered
  - applicant.age
  - applicant.farmer_status
  - applicant.business.type
```