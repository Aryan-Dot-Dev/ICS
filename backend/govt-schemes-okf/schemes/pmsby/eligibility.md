---
type: Government Scheme Eligibility
title: PMSBY — Eligibility
description: Deterministic eligibility dimensions and rules for PMSBY.
scheme_id: PMSBY
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
    resource: https://financialservices.gov.in/pradhan-mantri-suraksha-bima-yojana-pmsby
    title: DFS — PMSBY
    author: Department of Financial Services
    last_modified: not_verified
---

# PMSBY — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | 18–70 at enrolment (hard) [S1] |
| gender | no | not a filter |
| citizenship/residency | implied | resident individuals with Indian bank accounts |
| state | no | nationwide via banks |
| district | no | not a filter |
| rural/urban | no | both |
| income | no | no income criterion |
| occupation | no | not a filter |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | conditional | existing disabilities affect cover terms per policy; enrolment is not barred |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | no | individual policy |
| beneficiary under another scheme | conditional | one PMSBY policy per individual (hard) |
| previous benefit | conditional | prior claims do not bar renewal (subject to policy terms) |
| bank account | yes | savings bank account with auto-debit consent (hard) [S1] |
| Aadhaar | conditional | KYC per bank |
| scheme-specific | yes | auto-debit consent (hard) |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: AGE-001
      field: applicant.age
      operator: between
      value: [18, 70]
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

    - rule_id: CON-001
      field: applicant.auto_debit_consent
      operator: is_true
      value: true
      type: hard
      source: S1
      confidence: high

    - rule_id: ONE-001
      field: applicant.existing_pmsby_policies
      operator: equals
      value: 0
      type: hard
      source: S1
      confidence: high
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.age
  - applicant.bank_account
```

## Notes

- No income/caste/occupation criteria. Minors are not eligible;
  individuals over 70 cannot join.
- Existing disability does not block enrolment but governs claim
  assessment per the master policy terms.
