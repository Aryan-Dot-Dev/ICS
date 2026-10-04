---
type: "Government Scheme Exclusions"
title: "Deen Dayal Antyodaya Yojana - Urban (DAY-NULM) — Exclusions"
description: "Structured disqualifiers for ROW-45."
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
# Deen Dayal Antyodaya Yojana - Urban (DAY-NULM) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "For the Self-Employment Programme (SEP), the percentage of women beneficiaries shall not be less than 30 percent, SCs and STs must be benefited at least to the extent of their proportion in the urban poor population, and a special provision of 3 percent reservation is made for the differently-abled."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    field: applicant.bank_account_exists
    operator: is_true
    value: true
    detail: "Scheme-related funds must not be diverted to other bank accounts except for actual payments under the scheme"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "SULM may reject applications citing reasons, and rejected applications may be reconsidered at ULB level"
    effect: ineligible
    source: S1
    confidence: medium
```