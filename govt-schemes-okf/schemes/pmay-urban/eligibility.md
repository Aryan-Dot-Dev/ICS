---
type: Government Scheme Eligibility
title: PMAY-U 2.0 — Eligibility
description: Deterministic eligibility dimensions and rules for PMAY-U 2.0.
scheme_id: PMAY-U
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
    resource: https://pmay-urban.gov.in/
    title: PMAY-Urban — Official Mission website
    author: MoHUA
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2043927
    title: Cabinet approves PMAY-U 2.0
    author: PIB
    last_modified: 2024-08-09
  - id: S3
    resource: https://pmaymis.gov.in/PMAYMIS2_2024/PmayISS.aspx
    title: PMAY-U 2.0 Interest Subsidy Scheme page
    author: MoHUA / PMAY MIS
    last_modified: not_verified
---

# PMAY-U 2.0 — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | adult (18+) family member as applicant (hard prerequisite for application) |
| gender | soft | female-head/joint ownership preference; overriding priority to widows in selection [S1] |
| citizenship/residency | implied | urban resident family in India |
| state | yes | any State/UT (urban areas) |
| district | yes | statutory towns / notified areas (hard) |
| rural/urban | yes | urban only (hard) |
| income | yes | EWS/LIG/MIG category (hard for category-linked benefits; ISS per [S3]) |
| occupation | no | not a filter |
| employment status | no | not a filter |
| farmer status | no | not applicable (urban) |
| landholding | conditional | plot/land for BLC construction |
| business ownership | no | not a filter |
| business type | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | soft | preference (SC/ST/OBC/minorities) in selection [S1] |
| disability status | soft | preference in selection [S1] |
| marital/family status | yes | family definition governs the beneficiary unit [S1] |
| pregnancy/maternity | no | not applicable |
| household status | yes | no pucca house anywhere in India (hard) |
| beneficiary under another scheme | yes | one benefit under one vertical only; not availed central housing benefit earlier (hard) |
| previous benefit | yes | prior PMAY benefit received → excluded |
| bank account | yes | DBT/loan channel (hard prerequisite) |
| Aadhaar | yes | mandatory for de-duplication [S1] |
| scheme-specific | yes | vertical-specific conditions (ISS loan/house caps) |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: GEO-001
      field: applicant.rural_urban_status
      operator: equals
      value: urban
      type: hard
      source: S1
      confidence: high

    - rule_id: HOU-001
      field: applicant.household.has_pucca_house_anywhere_in_india
      operator: is_false
      value: false
      type: hard
      source: S1
      confidence: high

    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 18
      type: hard
      source: S1
      confidence: high

    - rule_id: AAD-001
      field: applicant.aadhaar
      operator: exists
      value: true
      type: hard
      source: S1
      confidence: high

    - rule_id: BNK-001
      field: applicant.bank_account
      operator: exists
      value: true
      type: hard
      source: S1
      confidence: high

    - rule_id: ONE-001
      field: applicant.household.prior_pmay_benefit_received
      operator: is_false
      value: false
      type: hard
      source: S1
      confidence: high

  any:
    - rule_id: INC-001
      field: applicant.household.income_category
      operator: in
      value: [ews, lig, mig]
      type: hard
      source: S2
      confidence: high
      note: category definitions/ceilings as adopted by States under PMAY-U 2.0; verify with State/ULB survey

  not:
    - rule_id: ISS-CON
      field: loan.house_value
      operator: greater_than
      value: 3500000
      type: conditional
      condition: benefit.vertical = iss
      detail: ISS applies to loans up to Rs.25 lakh for houses up to Rs.35 lakh value
      source: S3
      confidence: high
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.rural_urban_status
  - applicant.household.has_pucca_house_anywhere_in_india
  - applicant.household.income_category
  - applicant.household.prior_pmay_benefit_received
```

## Notes

- EWS/LIG/MIG income ceilings under PMAY-U 2.0 are operationalised
  through State/UT adoption and survey; where an official central
  ceiling figure is not confirmable in the sources reviewed, the engine
  must ask the ULB/State (needs_information) rather than hard-code a
  number.
- Women/widow/transgender/PwD/minority preferences affect **selection
  order**, not binary eligibility (soft).
