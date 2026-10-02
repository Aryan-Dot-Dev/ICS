---
type: Government Scheme Eligibility
title: PMFBY — Eligibility
description: Deterministic eligibility dimensions and rules for PMFBY.
scheme_id: PMFBY
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
status: stable
stale_after: 2026-12-31
sources:
  - id: S1
    resource: https://pmfby.gov.in/
    title: PMFBY — Official Crop Insurance Portal
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S2
    resource: https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf
    title: PMFBY Revised Operational Guidelines
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PMFBY — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | no | no age criterion in guidelines |
| gender | no | not a filter |
| citizenship/residency | implied | cultivator in India (citizenship not separately codified) |
| state | yes | State notifies crops, areas, seasons (hard, conditional) |
| district | yes | notified area defined at district/sub-district level |
| rural/urban | implied | crop cultivation location governs |
| income | no | no income criterion |
| occupation | yes | farmer / cultivator (incl. sharecroppers, tenants where provided) |
| employment status | no | not a filter |
| farmer status | yes | cultivating farmer of notified crop (hard) |
| landholding | conditional | non-loanee farmers need land/tenancy documentation |
| business ownership | no | not a filter |
| business type | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | no | not a filter |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | no | individual farmer enrolment |
| beneficiary under another scheme | no | PM-KISAN receipt does not block PMFBY |
| previous benefit | no | prior claims do not block enrolment |
| bank account | yes | required for premium auto-debit and claim DBT (hard) |
| Aadhaar | yes | KYC requirement for enrolment |
| scheme-specific | yes | crop/area/season notification; cut-off-date compliance |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: CRP-001
      field: applicant.crop_notified_in_area
      operator: is_true
      value: true
      type: hard
      source: S2
      confidence: high

    - rule_id: CRP-002
      field: applicant.cultivation_area_notified
      operator: is_true
      value: true
      type: hard
      source: S2
      confidence: high

    - rule_id: FST-001
      field: applicant.farmer_status
      operator: in
      value: [landholding_farmer, cultivating_farmer, sharecropper, tenant_farmer]
      type: hard
      source: S2
      confidence: high
      note: sharecropper/tenant inclusion subject to State notification

    - rule_id: SEA-001
      field: applicant.enrolment_before_cutoff
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high
      note: season-specific cut-off dates are declared each season on the portal

    - rule_id: BNK-001
      field: applicant.bank_account
      operator: exists
      value: true
      type: hard
      source: S2
      confidence: high

  any:
    - rule_id: LOA-001
      field: applicant.is_loanee_farmer
      operator: is_true
      value: true
      type: conditional
      source: S2
      confidence: high
      note: enrolment via lending institution against crop loan, subject to consent

    - rule_id: NLO-001
      field: applicant.non_loanee_documentation_complete
      operator: is_true
      value: true
      type: conditional
      source: S2
      confidence: high
      note: land record / tenancy or sharecropping agreement + sowing proof
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.crop_notified_in_area
  - applicant.cultivation_area_notified
  - applicant.farmer_status
  - applicant.enrolment_before_cutoff
```

The engine cannot determine season notification from user profile data —
it must check the State notification or ask the user, and must never
assume a crop is notified.

## Notes

- Enrolment is **voluntary** for loanee and non-loanee farmers (Kharif
  2020 reform) [S2].
- No income, age, caste or gender criteria exist.
- Cut-off dates are seasonal and portal-declared: represent as
  `informational` with a link, never as a stored date.
