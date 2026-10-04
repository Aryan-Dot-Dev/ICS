---
type: "Government Scheme Eligibility"
title: "SIDBI Direct Credit Scheme — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-15."
scheme_id: "ROW-15"
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
    resource: "https://sidbi.in/home-product"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sidbi.in/project-funding"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://sidbi.in/machinery-loan"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://sidbi.in/head/uploads/other_loans_document/Cash Defence.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://sidbi.in/head/uploads/other_loans_document/Venture Debt Financing to MSMEs.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://sidbi.in/head/uploads/other_loans_document/Seed funding through Incubators.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://sidbi.in/head/uploads/other_loans_document/GST Sahay Invoice based financing to SIDBI Customers.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://sidbi.in/head/uploads/other_loans_document/SIDBI Gig Flexi Loans.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://sidbi.in/head/uploads/other_loans_document/FPS Sahay - Fair Price Shops Sahay.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://sidbi.in/head/uploads/other_loans_document/GST Sahay Jan Aushadhi Kendras (JAKs).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://sidbi.in/en/government-programmes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://www.sidbi.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# SIDBI Direct Credit Scheme — Eligibility

_Machine-imported from runs/row-15/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


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
| business type | yes | Eligibility varies by product but generally includes MSME units in operation for a minimum period (e.g., 2… |
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
| scheme-specific | yes | Eligibility varies by product but generally includes MSME units in operation for a minimum period (e.g., 2… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.udyam_registered
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Eligibility varies by product but generally includes MSME units in operation for a minimum period (e.g., 2 years for project funding, 3 years for machinery loan), mandatory Udyam & GST registration, no defaults to banks/FIs, audited accounts, and cash profit in recent financial years."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.udyam_registered
  - applicant.business.type
```