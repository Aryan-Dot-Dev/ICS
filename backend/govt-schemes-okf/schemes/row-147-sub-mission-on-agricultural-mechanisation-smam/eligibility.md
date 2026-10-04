---
type: "Government Scheme Eligibility"
title: "Sub-Mission on Agricultural Mechanisation (SMAM) — Eligibility"
description: "Deterministic eligibility dimensions and rules for ROW-147."
scheme_id: "ROW-147"
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
    resource: "https://agrimachinery.nic.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://agrimachinery.nic.in/Index/Index"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://agrimachinery.nic.in/Files/FAQFMDBT.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://agrimachinery.nic.in/Files/CHC.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://agrimachinery.nic.in/Files/Product/Initial Preparatory.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://agrimachinery.nic.in/Files/Product/DBT-FarmerManual----PDF.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://agrimachinery.nic.in/Files/Product/ManufacturerAndDealer-Mannual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://agrimachinery.nic.in/Files/Product/DBT-Govt. Officer Manual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://agrimachinery.nic.in/Files/CHCAPP.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://agrimachinery.nic.in/Files/Guidelines/GuidelineOnlineDataShare_New.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://agrimachinery.nic.in/FMTTI_Doc/UserManual/FMTTIUserManual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://agrimachinery.nic.in/index/ContactUsHome"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://agrimachinery.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Sub-Mission on Agricultural Mechanisation (SMAM) — Eligibility

_Machine-imported from runs/row-147/ai_summary.json; evidence quotes below are verbatim source text and have not been re-verified against the official portal._


## Eligibility dimensions examined

| Dimension | Applies | Evidence |
|---|---|---|
| age | no | no criterion recorded in source data |
| gender | no | no criterion recorded in source data |
| citizenship/residency | yes | For CHC projects, additional requirements include agriculture graduate certificate, domicile, and date of… |
| state | yes | For CHC projects, additional requirements include agriculture graduate certificate, domicile, and date of… |
| district | yes | All applicants must select correct state, district, block, and village during registration, and furnish… |
| rural/urban | no | no criterion recorded in source data |
| income | no | no criterion recorded in source data |
| occupation | yes | Eligible beneficiaries include individual farmers, entrepreneurs, societies/SHGs/FPOs, and manufacturers who… |
| employment status | no | no criterion recorded in source data |
| farmer status | yes | Eligible beneficiaries include individual farmers, entrepreneurs, societies/SHGs/FPOs, and manufacturers who… |
| landholding | yes | Farmers must provide Aadhaar number, land records, bank details, and identity proof. |
| business ownership | no | no criterion recorded in source data |
| business type | yes | Eligible beneficiaries include individual farmers, entrepreneurs, societies/SHGs/FPOs, and manufacturers who… |
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
| Aadhaar | yes | Farmers must provide Aadhaar number, land records, bank details, and identity proof. |
| scheme-specific | yes | Farmers must provide Aadhaar number, land records, bank details, and identity proof. |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: AAD-001
      field: applicant.aadhaar_held
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: medium
      detail: "Farmers must provide Aadhaar number, land records, bank details, and identity proof."
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.aadhaar_held
  - applicant.citizenship
  - applicant.state
  - applicant.farmer_status
  - applicant.land_ownership
  - applicant.business.type
```