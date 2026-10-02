---
type: Government Scheme Eligibility
title: PMMVY — Eligibility
description: Deterministic eligibility dimensions and rules for PMMVY.
scheme_id: PMMVY
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
    resource: https://pmmvy.wcd.gov.in/
    title: PMMVY portal
    author: Ministry of Women and Child Development
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2270668
    title: PIB — PMMVY
    author: PIB
    last_modified: 2026-06-09
---

# PMMVY — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | 19+ for the first-living-child benefit (hard) [S1] |
| gender | yes | applicant must be a woman (hard) |
| citizenship/residency | implied | resident of India (States/UTs implement) |
| state | no | nationwide (State implementation) |
| district | no | not a filter |
| rural/urban | no | both |
| income | conditional | households with an income-tax-paying member are excluded (hard); no rupee ceiling otherwise |
| occupation | no | not a filter (wage-loss compensation intent covers both) |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | no | not a filter |
| marital/family status | no | marital status not an eligibility test per guidelines |
| pregnancy/maternity | yes | PWLM status — pregnancy/lactation (hard) |
| household status | conditional | income-tax-payer exclusion is a household test |
| beneficiary under another scheme | conditional | availing similar maternity benefit from Government bars PMMVY (per guidelines); JSY interaction noted in benefits |
| previous benefit | yes | first-living-child rule; second-child claim only via girl-child branch (hard) |
| bank account | yes | mother's own bank account (hard) |
| Aadhaar | yes | mandatory for DBT (hard) |
| scheme-specific | yes | claim timelines; ANC/immunisation conditions |

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
      source: S1
      confidence: high

    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 19
      type: hard
      condition: benefit.branch = first_living_child
      source: S1
      confidence: high

    - rule_id: PBM-001
      field: applicant.pregnancy_or_lactation_status
      operator: in
      value: [pregnant, lactating]
      type: hard
      source: S1
      confidence: high

    - rule_id: TAX-001
      field: applicant.household.income_tax_payer_member
      operator: is_false
      value: false
      type: hard
      source: S1
      confidence: high

    - rule_id: EMP-001
      field: applicant.household.government_employee_member
      operator: is_false
      value: false
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

    - rule_id: AAD-001
      field: applicant.aadhaar
      operator: exists
      value: true
      type: hard
      source: S1
      confidence: high

  any:
    - rule_id: CHD-001
      field: applicant.live_births_prior_count
      operator: equals
      value: 0
      type: hard
      source: S1
      confidence: high
      note: first living child branch

    - rule_id: CHD-002
      field: applicant.second_child_is_girl
      operator: is_true
      value: true
      type: hard
      source: S2
      confidence: high
      note: second-living-child branch (girl child) per Mission Shakti-era guidelines
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.age
  - applicant.pregnancy_or_lactation_status
  - applicant.live_births_prior_count
  - applicant.household.income_tax_payer_member
```

## Notes

- The 19+ age condition attaches to the first-living-child benefit;
  state implementations historically varied (some accepted 19+ for
  PMMVY 1.0 uniformly). Verify current guideline wording at review.
- The engine must ask about **prior live births** — the most common
  screening question — before promising the ₹5,000 benefit.
