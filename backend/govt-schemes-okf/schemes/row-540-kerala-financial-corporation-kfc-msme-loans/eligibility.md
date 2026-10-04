---
type: "Government Scheme Eligibility"
title: "Kerala Financial Corporation (KFC) MSME Loans — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-540."
scheme_id: "ROW-540"
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
    resource: "https://kfc.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://kfc.org/page/loan-schemes/letter-of-guarantee-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://kfc.org/page/loan-schemes/scheme-for-assisting-traditional-fisherman"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://kfc.org/page/loan-schemes/kfc-cub-arrangement"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://kfc.org/page/loan-schemes/kfc-agro-based-msme-loan-scheme-kams"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://kfc.org/page/loan-schemes/loc-scheme-for-msmes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://kfc.org/page/loan-schemes/startup-kerala-comprehensive-scheme-by-kfc-for-financing-startups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://kfc.org/page/loan-schemes/chief-ministers-entrepreneurship-development-programme-cmedp-edition-ii"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://kfc.org/page/loan-schemes/major/contractor-loan-products"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://kfc.org/page/loan-schemes/modernisation-upgradation-expansion-and-diversification"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://kfc.org/page/loan-schemes/short-term-loan"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://kfc.org/page/loan-schemes/financing-construction-activities-and-housing-projects"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://kfc.org/page/loan-schemes/working-capital-loans"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://kfc.org/page/loan-schemes/term-loan-for-industrial-activities"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://kfc.org/menu/interest-rate/69"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://kfc.org/public/assets/common/uploads/form_download/2020-12-04-5fca193c418d4-KFC_Application_Form_new.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S17
    resource: "https://kfc.org/public/assets/common/uploads/form_download/2021-12-08-61b06ea2bbd60-Check list Revised - Revised 2021 12 06.docx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S18
    resource: "https://www.kfc.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Kerala Financial Corporation (KFC) MSME Loans — Eligibility

_Machine-imported from runs/row-540/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | yes | Eligibility varies by scheme but generally requires MSME-Udyam Registration, GST registration (exempt for… |
| gender | yes | Eligibility varies by scheme but generally requires MSME-Udyam Registration, GST registration (exempt for… |
| citizenship/residency | no | no criterion recorded in source data |
| state | no | no criterion recorded in source data |
| district | no | no criterion recorded in source data |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | no | no criterion recorded in source data |
| employment status | yes | Eligibility varies by scheme but generally requires MSME-Udyam Registration, GST registration (exempt for… |
| farmer status | no | no criterion recorded in source data |
| landholding | no | no criterion recorded in source data |
| business ownership | no | no criterion recorded in source data |
| business type | yes | Eligibility varies by scheme but generally requires MSME-Udyam Registration, GST registration (exempt for… |
| student status | no | no criterion recorded in source data |
| educational level | no | no criterion recorded in source data |
| social category | yes | Eligibility varies by scheme but generally requires MSME-Udyam Registration, GST registration (exempt for… |
| disability status | no | no criterion recorded in source data |
| marital/family status | no | no criterion recorded in source data |
| pregnancy/maternity | no | no criterion recorded in source data |
| household status | no | no criterion recorded in source data |
| beneficiary under another scheme | no | no criterion recorded in source data |
| previous benefit | no | no criterion recorded in source data |
| bank account | no | no criterion recorded in source data |
| Aadhaar | no | no criterion recorded in source data |
| scheme-specific | yes | Eligibility varies by scheme but generally requires MSME-Udyam Registration, GST registration (exempt for… |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: TRN-001
      field: applicant.business.annual_turnover
      operator: less_than_or_equal
      value: 4000000
      type: hard
      source: S1
      confidence: high
      detail: "Eligibility varies by scheme but generally requires MSME-Udyam Registration, GST registration (exempt for turnover up to Rs.40 lakh manufacturing/Rs.20 lakh service), audited financial statements, work order in hand, satisfactory CIBIL score (minimum 650 for some schemes), promoter age limits (up to 50 years general, up to 55 years for SC/ST/women/NRK), and no permanent employment of promoters."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.business.annual_turnover
  - applicant.age
  - applicant.gender
  - applicant.employment_status
  - applicant.business.type
  - applicant.social_category
```

Rule/concept references: [business-type](../../rules/business-type.md)
