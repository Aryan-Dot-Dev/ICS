---
type: Government Scheme Eligibility
title: PM Vishwakarma — Eligibility
description: Deterministic eligibility dimensions and rules for PM Vishwakarma.
scheme_id: PM-VISHWAKARMA
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
    resource: https://pmvishwakarma.gov.in/
    title: PM Vishwakarma official portal (eligibility)
    author: MoMSME
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=1959098
    title: PIB — salient features
    author: PIB
    last_modified: 2023-09-20
---

# PM Vishwakarma — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | 18+ (hard) [S1] |
| gender | no | not a filter |
| citizenship/residency | yes | Indian citizen (hard) [S1] |
| state | no | nationwide via CSCs and implementing structure |
| district | no | not a filter |
| rural/urban | no | both |
| income | no | no income criterion |
| occupation | yes | self-employed artisan in one of 18 notified trades (hard) [S1] |
| employment status | yes | NOT salaried/government employee (hard) [S1] |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | conditional | self-employed in the trade on registration date |
| business type | conditional | artisan enterprise in notified trade |
| student status | no | not a filter |
| educational level | no | not a filter (formal education not required) |
| social category | no | not a filter |
| disability status | no | not a filter |
| marital/family status | conditional | only one member per family eligible [S1] |
| pregnancy/maternity | no | not applicable |
| household status | no | individual scheme |
| beneficiary under another scheme | yes | no similar credit-linked subsidy loan (PMEGP/PM SVANidhi/PMega etc.) in past 5 years (hard) [S1] |
| previous benefit | conditional | loan tranche 2 requires tranche-1 repayment (hard) |
| bank account | yes | Aadhaar-linked bank account (hard) |
| Aadhaar | yes | mandatory for registration (hard) |
| scheme-specific | yes | trade verification at CSC/district level |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 18
      type: hard
      source: S1
      confidence: high

    - rule_id: OCC-001
      field: applicant.occupation
      operator: in
      value: [carpenter, blacksmith, potter, cobbler_shoemaker, mason, sculptor_sthapak, stone_breaker, goldsmith, tailor, barber, boat_maker, armourer, hammer_toolkit_maker, locksmith, fishing_net_maker, doll_toy_maker, broom_maker, basket_maker, washerfolk_dhobi]
      type: hard
      source: S1
      confidence: high
      note: the authoritative trade list is maintained on pmvishwakarma.gov.in — verify at review time

    - rule_id: EMP-001
      field: applicant.employment_status
      operator: not_in
      value: [salaried, government_employee]
      type: hard
      source: S1
      confidence: high

    - rule_id: CTZ-001
      field: applicant.citizenship
      operator: equals
      value: IN
      type: hard
      source: S1
      confidence: high

    - rule_id: FAM-001
      field: applicant.family.already_registered_member
      operator: is_false
      value: false
      type: hard
      source: S1
      confidence: high
      note: only one member per family may register

    - rule_id: HIS-001
      field: applicant.prior_similar_credit_linked_subsidy_loan
      operator: is_false
      value: false
      type: hard
      source: S1
      confidence: high
      note: loans under similar credit-linked subsidy schemes (e.g., PMEGP, PM SVANidhi, PM MUDRA-subsidy combos) in the last 5 years bar eligibility — check current guideline wording

    - rule_id: BNK-001
      field: applicant.bank_account_aadhaar_linked
      operator: is_true
      value: true
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

  any: []
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.occupation
  - applicant.employment_status
  - applicant.prior_similar_credit_linked_subsidy_loan
  - applicant.family.already_registered_member
```

## Notes

- The 18-trade list above follows the PIB/portal framing; the portal's
  registration flow enumerates trades authoritatively — the engine must
  match against that list, not synonyms.
- "Self-employed in the trade on the date of registration" is a hard
  attestation at enrolment.
