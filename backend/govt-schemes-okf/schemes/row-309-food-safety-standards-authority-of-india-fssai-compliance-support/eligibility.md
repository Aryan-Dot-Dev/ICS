---
type: "Government Scheme Eligibility"
title: "Food Safety & Standards Authority of India (FSSAI) Compliance Support — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-309."
scheme_id: "ROW-309"
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
    resource: "https://fssai.gov.in/upload/6a4373a9408c6citizen_charter_2025-26.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://fssai.gov.in/upload/uploadfiles/files/order_training at NTCFSS.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://fssai.gov.in/upload/advisories/2026/06/6a3d03f3c8fefEDFSR_Flyer.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://fssai.gov.in/upload/notifications/2026/06/6a436f6496adbNotification dt 23.06.2026-CAC.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://fssai.gov.in/upload/media/FSSAIcracksdownonviolationsinDelhi,advocatesbio-pesticidesforsafeteaproduction_FoodSafetyAfrica.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://fssai.gov.in/upload/media/Mandaviyainauguratesfirsthealthy&hygienicfoodstreetatNeelkanthVan_fnb.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://fssai.gov.in/upload/media/DrMansukhMandaviyainauguratesHealthy&HygienicFoodStreet,'PRASADAM,'atNeelkanthVan,MahakalLok,inUjjain_FoodTechBiz.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://fssai.gov.in/upload/media/CEO,FSSAI,visitsKardnurinTelanganaaspartofViksitBharatSankalpYatra_FNB.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://fssai.gov.in/upload/advisories/2025/01/679388013b4f9Beware of Fraudulent Job Offers Impersonating FSSAI.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://fssai.gov.in/upload/uploadfiles/files/FAQs on Rice Fortification.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://fssai.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://www.fssai.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Food Safety & Standards Authority of India (FSSAI) Compliance Support — Eligibility

_Machine-imported from runs/row-309/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | For RTI, only citizens of India are eligible. |
| state | no | no criterion recorded in source data |
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
| educational level | yes | For Food Analyst examination, candidates must possess essential educational qualifications… |
| social category | no | no criterion recorded in source data |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | For NSF & FI approval, food products/ingredients covered under FSS (NSF & FI) Regulation, 2017 are eligible. |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: REG-001
      field: applicant.fssai_licensed
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "For food laboratory recognition, laboratory must have accreditation under FSSAI-NABL Integrated Assessment."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.fssai_licensed
  - applicant.citizenship
```