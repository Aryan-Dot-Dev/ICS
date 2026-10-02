---
type: Government Scheme Eligibility
title: SSY — Eligibility
description: Deterministic eligibility dimensions and rules for Sukanya Samriddhi Yojana.
scheme_id: SSY
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
    resource: https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=171
    title: Sukanya Samriddhi Account Scheme, 2019 (rules)
    author: National Savings Institute, Ministry of Finance
    last_modified: not_verified
---

# SSY — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | girl child below 10 years at account opening (hard) [S1] |
| gender | yes | account holder must be a girl (hard) [S1] |
| citizenship/residency | yes | account opened by guardian who is resident of India; NRI opening not permitted [S1] |
| state | no | nationwide (post offices, authorised banks) |
| district | no | not a filter |
| rural/urban | no | both |
| income | no | no income ceiling |
| occupation | no | not a filter |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | no | not a filter |
| marital/family status | conditional | guardian-child relationship required; account in child's name |
| pregnancy/maternity | no | not applicable |
| household status | conditional | two-account family cap (rule exceptions) [S1] |
| beneficiary under another scheme | no | other scheme membership does not bar SSY |
| previous benefit | conditional | one account per child (hard) [S1] |
| bank account | conditional | account opened as the SSY account itself; guardian KYC needed |
| Aadhaar | conditional | guardian KYC (Aadhaar/PAN) [S1] |
| scheme-specific | yes | deposit minimums per rules |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: GEN-001
      field: child.gender
      operator: equals
      value: female
      type: hard
      source: S1
      confidence: high

    - rule_id: AGE-001
      field: child.age
      operator: less_than
      value: 10
      type: hard
      source: S1
      confidence: high
      note: age as on date of account opening; relaxed window per rules for shifted-age edge cases

    - rule_id: RES-001
      field: guardian.resident_status
      operator: equals
      value: resident
      type: hard
      source: S1
      confidence: high
      note: NRI guardians cannot open new accounts

    - rule_id: CNT-001
      field: child.existing_ssy_accounts
      operator: equals
      value: 0
      type: hard
      source: S1
      confidence: high

    - rule_id: CNT-002
      field: family.existing_ssy_accounts
      operator: less_than_or_equal
      value: 1
      type: hard
      source: S1
      confidence: high
      note: cap of two accounts per family; exceptions per rules (twins/triplets of the same birth order, etc.)
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - child.gender
  - child.age
  - guardian.resident_status
  - family.existing_ssy_accounts
```

## Notes

- The beneficiary is the **child**; the depositor is the **guardian**.
  Engine fields distinguish `child.*` and `guardian.*`.
- The two-children family cap has official exceptions (multiple births,
  specific orders); the engine should treat edge cases as
  `needs_information` and refer to the 2019 Rules text [S1].
