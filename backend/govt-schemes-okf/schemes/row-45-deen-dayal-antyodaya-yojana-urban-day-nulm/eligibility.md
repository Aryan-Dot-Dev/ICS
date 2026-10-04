---
type: "Government Scheme Eligibility"
title: "Deen Dayal Antyodaya Yojana - Urban (DAY-NULM) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-45."
scheme_id: "ROW-45"
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
    resource: "https://nulm.gov.in/PDF/NULM_Mission/NULM_mission_document.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nulm.gov.in/PDF/NULM_Mission/SEP_Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nulm.gov.in/PDF/User_Manual/SEP_user_manual_new.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nulm.gov.in/PDF/NULM_Mission/Amendment_dated_20_August18_SEP.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nulm.gov.in/PDF/NULM_Mission/PMFME_SOP.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://nulm.gov.in/PDF/NULM_Mission/Guidelines_PMFME_NULM.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://nulm.gov.in/PDF/NULM_Mission/NULM-SUSV-Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://nulm.gov.in/PDF/NULM_Mission/NULM-SUH-Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://nulm.gov.in/PDF/NULM_Mission/NULM-SMID_Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://nulm.gov.in/PDF/NULM_Mission/ESTPCompildPDF_final.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://nulm.gov.in/PDF/NULM_Mission/CBT-Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://nulm.gov.in/PDF/NULM_Mission/ISP_Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://nulm.gov.in/PDF/User_Manual/Final_SMID_Training_Module.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://nulm.gov.in/PDF/User_Manual/Final_SEP_Training_Module.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://nulm.gov.in/PDF/User_Manual/Final_ESTP_Training_Module.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://nulm.gov.in/PDF/User_Manual/ESTP_user_manual-new.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S17
    resource: "https://nulm.gov.in/PDF/NULM_Mission/MoF_guidelines_23-03-2031.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S18
    resource: "https://nulm.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Deen Dayal Antyodaya Yojana - Urban (DAY-NULM) — Eligibility

_Machine-imported from runs/row-45/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Coverage may be broadened to include families of disadvantaged groups like SCs, STs, women, minorities,… |
| gender | yes | Coverage may be broadened to include families of disadvantaged groups like SCs, STs, women, minorities,… |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | yes | The primary target of DAY-NULM is the urban poor, including the urban homeless. |
| income | yes | As an interim measure, the target is the urban population identified as below poverty line by States/UTs. |
| occupation | no | no criterion recorded in source data |
| employment status | yes | For the Self-Employment Programme (SEP), the percentage of women beneficiaries shall not be less than 30… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | no | no criterion recorded in source data |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Coverage may be broadened to include families of disadvantaged groups like SCs, STs, women, minorities,… |
| disability status | yes | Coverage may be broadened to include families of disadvantaged groups like SCs, STs, women, minorities,… |
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
    - rule_id: SOC-001
      field: applicant.social_category
      operator: in
      value: [minority]
      type: hard
      source: S1
      confidence: medium
      detail: "At least 15 percent of physical and financial targets under SEP shall be earmarked for minority communities."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.social_category
  - applicant.age
  - applicant.gender
  - applicant.annual_income
  - applicant.employment_status
  - applicant.disability_status
```

Rule/concept references: [social-category](../../concepts/social-category.md)
