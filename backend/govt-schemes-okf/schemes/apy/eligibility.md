---
type: Government Scheme Eligibility
title: APY — Eligibility
description: Deterministic eligibility dimensions and rules for APY.
scheme_id: APY
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
    resource: https://jansuraksha.gov.in/Files/APY/ENGLISH/APY.pdf
    title: Atal Pension Yojana — Details of the Scheme
    author: Government of India
    last_modified: not_verified
  - id: S2
    resource: https://npscra.nsdl.co.in/scheme-details.php
    title: NSDL CRA — APY scheme details
    author: NSDL CRA
    last_modified: not_verified
---

# APY — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | 18–40 at entry (hard) [S1] |
| gender | no | not a filter |
| citizenship/residency | yes | Indian citizen (hard) [S1] |
| state | no | nationwide via banks |
| district | no | not a filter |
| rural/urban | no | both |
| income | conditional | income-tax payers not eligible to enrol (hard) [S1] |
| occupation | no | not a filter (unorganised-sector focus is targeting, not a gate) |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | no | not a filter (18+ only) |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | no | not a filter |
| marital/family status | conditional | nominee/spouse details required |
| pregnancy/maternity | no | not applicable |
| household status | no | individual scheme |
| beneficiary under another scheme | no | other pension membership matters only within NPS/APY rules (one APY account) |
| previous benefit | conditional | one APY account per subscriber (hard) |
| bank account | yes | savings bank account with auto-debit (hard) [S1] |
| Aadhaar | conditional | KYC for enrolment |
| scheme-specific | yes | contribution schedule acceptance |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: AGE-001
      field: applicant.age
      operator: between
      value: [18, 40]
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

    - rule_id: TAX-001
      field: applicant.income_tax_payer
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

    - rule_id: ONE-001
      field: applicant.existing_apy_accounts
      operator: equals
      value: 0
      type: hard
      source: S2
      confidence: high
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.age
  - applicant.income_tax_payer
  - applicant.bank_account
```

## Notes

- The income-tax-payer exclusion applies to **new enrolments** (statute
  dates to the 2015/2022 notifications; verify current text at review).
- Contribution amounts by age/slab are stored in
  [benefits.md](benefits.md) reference points only; the CRA charts are
  authoritative.
