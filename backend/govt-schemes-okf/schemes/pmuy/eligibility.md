---
type: Government Scheme Eligibility
title: PMUY — Eligibility
description: Deterministic eligibility dimensions and rules for PMUY.
scheme_id: PMUY
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
  - id: S2
    resource: https://www.pmuy.gov.in/ujjwala2.html
    title: PMUY 2.0 eligibility page
    author: MoPNG / OMCs
    last_modified: not_verified
  - id: S3
    resource: https://www.pmuy.gov.in/faq.html
    title: PMUY FAQ
    author: MoPNG / OMCs
    last_modified: not_verified
---

# PMUY — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | woman applicant must have attained 18 years (hard) [S2] |
| gender | yes | applicant must be a woman (hard) [S2] |
| citizenship/residency | implied | resident of India (connection delivered domestically) |
| state | no | nationwide via OMCs |
| district | no | not a filter |
| rural/urban | no | both (Ujjwala 2.0 covers all geographies) |
| income | conditional | poor-household status via category or deprivation declaration [S3] (hard) |
| occupation | no | not a filter |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | conditional | several target categories are category-based (SC/ST/AAY etc.) [S3] |
| disability status | no | not a filter |
| marital/family status | no | woman of the household; marital status not required to be married |
| pregnancy/maternity | no | not applicable |
| household status | yes | no other LPG connection in the household (hard) [S2] |
| beneficiary under another scheme | conditional | prior PMUY beneficiary of same/another OMC barred |
| previous benefit | conditional | same |
| bank account | yes | required for subsidy (hard prerequisite) |
| Aadhaar | yes | required for KYC (hard prerequisite) |
| scheme-specific | yes | declaration formats per OMC |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: GEN-001
      field: applicant.gender
      operator: equals
      value: female
      type: hard
      source: S2
      confidence: high

    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 18
      type: hard
      source: S2
      confidence: high

    - rule_id: LPG-001
      field: applicant.household.has_other_omc_lpg_connection
      operator: is_false
      value: false
      type: hard
      source: S2
      confidence: high

    - rule_id: KYC-001
      field: applicant.aadhaar_kyc_complete
      operator: is_true
      value: true
      type: hard
      source: S2
      confidence: high

    - rule_id: BNK-001
      field: applicant.bank_account
      operator: exists
      value: true
      type: hard
      source: S2
      confidence: high

  any:
    - rule_id: CAT-001
      field: applicant.household.eligible_category
      operator: in
      value: [sc, st, aay, pmay_beneficiary, forest_dweller, tea_garden, island_household, secc_deprived, other_poor_declaration]
      type: hard
      source: S3
      confidence: high
      note: category list per PMUY guidelines/FAQ; 'other poor' via deprivation declaration (Ujjwala 2.0)
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.gender
  - applicant.age
  - applicant.household.has_other_omc_lpg_connection
  - applicant.household.eligible_category
```

## Notes

- The 'other poor' route (Ujjwala 2.0) relies on a **deprivation
  declaration** in the prescribed format [S3] — an income-figure test is
  NOT required.
- The engine must ask about any existing LPG connection in the
  household (any OMC), not just the applicant's own.
