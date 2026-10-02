---
type: Government Scheme Documents
title: APY — Documents
description: Document requirements for APY enrolment.
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
---

# APY — Documents

```yaml
documents:
  - id: savings-bank-account
    name: Savings bank account (with mandate for auto-debit)
    required: always
    condition: contributions auto-debited [S1]
    source: S1
    confidence: high

  - id: apy-form
    name: APY enrolment form
    required: always
    condition: enrolment
    source: S1
    confidence: high

  - id: aadhaar
    name: Aadhaar card
    required: conditional
    condition: KYC/identity as per bank practice
    source: S1
    confidence: high

  - id: nominee-details
    name: Nominee/spouse details (with proof where bank requires)
    required: always
    condition: benefit nomination [S1]
    source: S1
    confidence: high

  - id: mobile-number
    name: Mobile number
    required: conditional
    condition: account statements/alerts
    source: S1
    confidence: medium
```

## Notes

- No income certificate is required at enrolment; the income-tax-payer
  exclusion operates on self-declaration in the form (banks may verify).
