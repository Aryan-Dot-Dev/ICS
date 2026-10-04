---
type: "Government Scheme Eligibility"
title: "EESL Energy Efficiency Innovation Support — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-467."
scheme_id: "ROW-467"
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
    resource: "https://eeslindia.org/wp-content/uploads/2026/02/Expression of Interest for Technical Solution Provider1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://eeslindia.org/wp-content/uploads/2026/01/EOI - Registration of Channel Partners - Pradhan Mantri Surya Ghar Muft Bijli Yojana in the State of Odisha.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://eeslindia.org/wp-content/uploads/2025/12/EOI_Strategic Partnership_UBS_EESL.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://eeslindia.org/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://eeslindia.org/hi/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://eeslindia.org/en/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://eeslindia.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# EESL Energy Efficiency Innovation Support — Eligibility

_Machine-imported from runs/row-467/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | no | no criterion recorded in source data |
| state | yes | Applicants must not have been blacklisted by any Central/State Government or Public Sector Undertaking. |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
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
| scheme-specific | yes | Interested parties must register via the EESL website, submit a filled registration form along with… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.pan_held
      operator: is_true
      value: true
      type: soft
      source: S1
      confidence: medium
      detail: "Interested parties must register via the EESL website, submit a filled registration form along with requisite documents including GST Certificate, PAN Card, Demand Draft/NEFT/RTGS of Rupees One Lakh Only as refundable security deposit, To Whom It May Concern letter, Self-Declaration for Blacklisting, Contract Agreement copies, Non-Disclosure Agreement, PPP MII and Land Border Sharing Certificate, Compliance Matrix, EFT form, and Cancelled Cheque."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.pan_held
  - applicant.state
```