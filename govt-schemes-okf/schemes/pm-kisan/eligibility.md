---
type: Government Scheme Eligibility
title: PM-KISAN — Eligibility
description: Deterministic eligibility dimensions and rules for PM-KISAN.
scheme_id: PM-KISAN
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
    resource: https://fw.pmkisan.gov.in/Documents/Revised%20Operational%20Guidelines%20-%20PM-Kisan%20Scheme.pdf
    title: Revised Operational Guidelines — PM-KISAN
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S4
    resource: https://pmkisan.gov.in/Documents/RevisedFAQ.pdf
    title: PM-KISAN Revised FAQ
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PM-KISAN — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | no | no age criterion in guidelines |
| gender | no | benefit to family head (male, else female per family definition) |
| citizenship/residency | yes | Indian citizen; NRI not eligible [S2] |
| state | yes | any State/UT; land defined by respective State/UT land records |
| district | no | not a filter |
| rural/urban | no | both rural and urban landholding farmer families eligible |
| income | partial | no income ceiling; income-tax payer exclusion applies (hard) |
| occupation | implied | farmer family (via landholding) |
| employment status | yes | exclusion of government/PSU employees (hard) |
| farmer status | yes | landholding farmer family (hard) |
| landholding | yes | owns cultivable land per land records; any size (hard) |
| business ownership | no | not a filter |
| business type | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | no | not a filter |
| marital/family status | implied | benefit unit is the family |
| pregnancy/maternity | no | not applicable |
| household status | yes | benefit per family |
| beneficiary under another scheme | no | PM-KISAN receipt does not depend on other schemes |
| previous benefit | no | continuing installments subject to continuing eligibility |
| bank account | yes | Aadhaar-seeded bank account required (delivery, hard prerequisite) |
| Aadhaar | yes | mandatory, with eKYC (hard prerequisite) |
| scheme-specific | yes | eKYC completion; state land-record verification |

## Structured eligibility rules

The rule block below is a domain-specific extension of this bundle, not a
claim that OKF v0.2 defines it.

```yaml
eligibility_rules:
  all:
    - rule_id: CTZ-001
      field: applicant.citizenship
      operator: equals
      value: IN
      type: hard
      source: S2
      confidence: high

    - rule_id: LND-001
      field: applicant.land_ownership
      operator: is_true
      value: true
      type: hard
      source: S2
      confidence: high

    - rule_id: LND-002
      field: applicant.landholder_type
      operator: not_equals
      value: institutional
      type: hard
      source: S2
      confidence: high

    - rule_id: TAX-001
      field: applicant.household.income_tax_payer_member
      operator: is_false
      value: false
      type: hard
      source: S2
      confidence: high

    - rule_id: EMP-001
      field: applicant.household.government_or_psu_employee_member
      operator: is_false
      value: false
      type: hard
      source: S2
      confidence: high

    - rule_id: PEN-001
      field: applicant.household.pensioner_member_above_10000_month
      operator: is_false
      value: false
      type: hard
      source: S2
      confidence: high

    - rule_id: PRO-001
      field: applicant.household.registered_professional_member
      operator: is_false
      value: false
      type: hard
      source: S2
      confidence: high

    - rule_id: AAD-001
      field: applicant.aadhaar_ekyc_completed
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high

    - rule_id: BNK-001
      field: applicant.bank_account_aadhaar_seeded
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high
```

## Missing information handling

If the engine cannot establish the following, emit
`status: needs_information` and request exactly these fields — do not
infer:

```yaml
status: needs_information
missing_fields:
  - applicant.land_ownership
  - applicant.landholder_type
  - applicant.household.income_tax_payer_member
  - applicant.household.government_or_psu_employee_member
  - applicant.aadhaar_ekyc_completed
```

## Notes

- No age, gender, education, caste, religion or rural/urban filter
  exists in the official guidelines [S2].
- The family (not the individual) is the beneficiary unit; a second
  application by another family member is a duplicate, not a second
  benefit.
- Land size is **not** a filter (see superseded 2-ha limit in
  [scheme.md](scheme.md#historical-superseded)).
