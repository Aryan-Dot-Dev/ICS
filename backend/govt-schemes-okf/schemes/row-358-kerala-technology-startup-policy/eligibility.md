---
type: "Government Scheme Eligibility"
title: "Kerala Technology Startup Policy — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-358."
scheme_id: "ROW-358"
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
    resource: "https://startupmission.kerala.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupmission.kerala.gov.in/schemes/early-stage-funding"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupmission.kerala.gov.in/schemes/seed-fund"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupmission.kerala.gov.in/schemes/scaleup-seed-fund"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupmission.kerala.gov.in/schemes/women-soft-loan"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startupmission.kerala.gov.in/schemes/nidhi-seed-support-program"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://startupmission.kerala.gov.in/schemes/innovation-grant"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://grants.startupmission.in/img/guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://startupmission.kerala.gov.in/storage/reports/8a5c6df4-6f88-4ac1-92b6-ce91506c9703.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://startupmission.kerala.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Kerala Technology Startup Policy — Eligibility

_Machine-imported from runs/row-358/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | yes | For women-focused schemes, women/transgender founders must hold ≥51% shareholding. |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | no | no criterion recorded in source data |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | yes | Eligibility varies by scheme but generally requires startup incorporation as Private Limited Company, LLP,… |
| business type | no | no criterion recorded in source data |
| student status | yes | Student innovators may apply without company incorporation but require IEDC association for fund disbursement. |
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
| scheme-specific | yes | Eligibility varies by scheme but generally requires startup incorporation as Private Limited Company, LLP,… |

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
      detail: "Eligibility varies by scheme but generally requires startup incorporation as Private Limited Company, LLP, or OPC with active MCA status, a valid KSUM Unique ID, DPIIT recognition (where applicable), work on innovative technology-based products, and compliance with specific criteria such as revenue thresholds, shareholding by Indian promoters (≥51%), and absence of pending dues with government agencies."
    - rule_id: GEN-001
      field: applicant.gender
      operator: equals
      value: "female"
      type: hard
      source: S1
      confidence: medium
      detail: "For women-focused schemes, women/transgender founders must hold ≥51% shareholding."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.dpiit_recognized
  - applicant.gender
  - applicant.business.ownership
  - applicant.student_status
```

Rule/concept references: [gender](../../rules/gender.md)
