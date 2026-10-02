---
type: Government Scheme Eligibility
title: PMAY-G — Eligibility
description: Deterministic eligibility dimensions and rules for PMAY-G.
scheme_id: PMAY-G
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
    resource: https://pmayg.dord.gov.in/netiayHome/home.aspx
    title: PMAY-G official portal
    author: MoRD
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2074713
    title: PIB PMAY-R release
    author: PIB
    last_modified: 2024-11-19
---

# PMAY-G — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | adult (18+) household head applies (hard prerequisite) |
| gender | soft | female ownership/registration preference per guidelines |
| citizenship/residency | implied | rural resident household in India |
| state | yes | any State/UT |
| district | yes | rural areas of the district |
| rural/urban | yes | rural only (hard) |
| income | conditional | no rupee ceiling; SECC deprivation/house-status base + state verification |
| occupation | no | not a filter |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | conditional | own plot or government/allotted land needed to construct |
| business ownership | no | not a filter |
| business type | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | soft | priority categories in selection |
| disability status | soft | priority in selection |
| marital/family status | no | household is the unit |
| pregnancy/maternity | no | not applicable |
| household status | yes | houseless OR kutcha/dilapidated house (hard) |
| beneficiary under another scheme | yes | not assisted earlier under IAY/PMAY-G (hard) |
| previous benefit | yes | same |
| bank account | yes | DBT prerequisite (hard) |
| Aadhaar | yes | required (hard) |
| scheme-specific | yes | presence on verified permanent waitlist (hard) |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: GEO-001
      field: applicant.rural_urban_status
      operator: equals
      value: rural
      type: hard
      source: S1
      confidence: high

    - rule_id: HOU-001
      field: applicant.household.housing_condition
      operator: in
      value: [houseless, kutcha_house, dilapidated_house]
      type: hard
      source: S1
      confidence: high

    - rule_id: WAI-001
      field: applicant.household.on_pmayg_waitlist
      operator: is_true
      value: true
      type: hard
      source: Awaas+ survey / Gram Sabha verification (state machinery)
      confidence: high

    - rule_id: ONE-001
      field: applicant.household.prior_iay_pmayg_assistance
      operator: is_false
      value: false
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
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.rural_urban_status
  - applicant.household.housing_condition
  - applicant.household.on_pmayg_waitlist
  - applicant.household.prior_iay_pmayg_assistance
```

## Notes

- PMAY-G selection is **list-driven**, not application-driven. An
  individual application cannot create eligibility — it can only
  register the household for survey/verification. The engine must
  explain this to users.
- The waitlist derives from SECC-2011/Awaas+ with Gram Sabha
  verification; states may run fresh surveys (Awaas+ 2.0). Confirm
  current survey status with the State Rural Development department.
