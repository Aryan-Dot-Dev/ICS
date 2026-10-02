---
type: Government Scheme Eligibility
title: PM SVANidhi — Eligibility
description: Deterministic eligibility dimensions and rules for PM SVANidhi.
scheme_id: PM-SVANIDHI
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
    resource: https://pmsvanidhi.mohua.gov.in/
    title: PM SVANidhi official portal
    author: MoHUA
    last_modified: not_verified
  - id: S4
    resource: https://mohua.gov.in/static/uploads/2026/01/a3a17370145e0870a79df74bfbab766f.pdf
    title: PM SVANidhi Loan Operational Guidelines
    author: MoHUA
    last_modified: 2026-01-01
---

# PM SVANidhi — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | soft | 18+ per lending-institution norms (verify current guidelines) |
| gender | no | not a filter (women vendors are a priority focus in communication) |
| citizenship/residency | implied | vendors operating in Indian urban areas |
| state | no | nationwide urban areas |
| district | yes | ULB jurisdiction governs vending documents (hard) |
| rural/urban | yes | urban vending areas (hard) |
| income | no | no income ceiling |
| occupation | yes | street vending activity (hard) |
| employment status | no | self-employment implied |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | conditional | existing vending activity required |
| business type | conditional | vending of goods/services in streets/urban spaces |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | no | not a filter |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | no | individual scheme |
| beneficiary under another scheme | no | other scheme membership does not bar SVANidhi (but overlaps with similar loans governed by guidelines) |
| previous benefit | conditional | tranche progression requires full repayment (hard) |
| bank account | yes | required for loan + subsidies (hard) |
| Aadhaar | yes | required for application (hard) |
| scheme-specific | yes | CoV / LoR / survey identification (hard) [S4] |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: OCC-001
      field: applicant.occupation
      operator: equals
      value: street_vendor
      type: hard
      source: S1
      confidence: high

    - rule_id: GEO-001
      field: applicant.rural_urban_status
      operator: equals
      value: urban
      type: hard
      source: S1
      confidence: high

    - rule_id: VEN-001
      field: applicant.vending_recognition
      operator: in
      value: [certificate_of_vending, letter_of_recommendation, ulb_survey_identification]
      type: hard
      source: S4
      confidence: high
      note: LoR route also covers vendors left out of surveys; ULB issues per guidelines

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

    - rule_id: AGE-001
      field: applicant.age
      operator: greater_than_or_equal
      value: 18
      type: soft
      source: S4
      confidence: medium
      note: standard lending norm; verify codified value in current guidelines

  any: []
```

## Tranche progression (conditional rules)

```yaml
progression_rules:
  - rule_id: TRN-001
    field: applicant.prior_svanidhi_loan_repaid
    operator: is_true
    value: true
    type: hard
    condition: loan.tranche = second_or_third
    source: S4
    confidence: high
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.occupation
  - applicant.vending_recognition
  - applicant.rural_urban_status
```

## Notes

- The vending-documentation test (VEN-001) is the decisive one — the
  engine must ask for CoV/LoR/survey status explicitly.
- Vendors who returned to rural areas or stopped vending must be
  re-validated by the ULB per guidelines.
