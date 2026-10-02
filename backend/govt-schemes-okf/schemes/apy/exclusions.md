---
type: Government Scheme Exclusions
title: APY — Exclusions
description: Structured disqualifiers for APY.
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

# APY — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.income_tax_payer
    operator: is_true
    value: true
    detail: income-tax payers are not eligible to enrol under APY [S1]
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.age
    operator: not_between
    value: [18, 40]
    detail: entry only between 18 and 40 years of age
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.existing_apy_accounts
    operator: greater_than_or_equal
    value: 1
    detail: one APY account per subscriber
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-004
    field: applicant.bank_account
    operator: exists
    value: false
    detail: no savings bank account for auto-debit — enrolment not possible
    effect: ineligible
    source: S1
    confidence: high
```

## Notes

- Existing NPS subscribers are governed by PFRDA transition rules
  (movement between NPS/APY is restricted per regulator rules) — treat
  as `conditional` with reference to CRA guidance.
