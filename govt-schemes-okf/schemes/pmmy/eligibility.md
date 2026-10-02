---
type: Government Scheme Eligibility
title: PMMY — Eligibility
description: Deterministic eligibility dimensions and rules for PMMY (Mudra).
scheme_id: PMMY
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
    resource: https://www.mudra.org.in/offerings
    title: MUDRA — Offerings (loan categories)
    author: MUDRA Ltd
    last_modified: not_verified
  - id: S3
    resource: https://www.jansamarth.in/business-loan-pradhan-mantri-mudra-yojana-scheme
    title: JanSamarth — PMMY business loan
    author: Department of Financial Services / NeGD
    last_modified: not_verified
---

# PMMY — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | soft | lending institutions require 18+; no scheme-level codified age in sources reviewed |
| gender | no | not a filter |
| citizenship/residency | implied | resident individuals / Indian enterprises |
| state | no | nationwide through LIs |
| district | no | not a filter |
| rural/urban | no | both |
| income | no | no income ceiling in scheme |
| occupation | conditional | non-farm income-generating activity (hard via activity, not occupation label) |
| employment status | no | self-employment is the outcome, not a filter |
| farmer status | no | farm-sector cultivation activity excluded (see exclusions) |
| landholding | no | not a filter |
| business ownership | conditional | stage matters for Tarun Plus (repaid Tarun) |
| business type | yes | manufacturing / trading / services, micro & small (hard) |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | no | not a filter |
| marital/family status | no | not a filter |
| pregnancy/maternity | no | not applicable |
| household status | no | not a filter |
| beneficiary under another scheme | no | other-scheme credit must not be double-financed (LIs verify) |
| previous benefit | conditional | Tarun Plus needs prior repaid Tarun loan (hard for that category) |
| bank account | yes | required (hard prerequisite for disbursement) |
| Aadhaar | yes | KYC requirement |
| scheme-specific | yes | credit assessment by lending institution (soft) |

## Structured eligibility rules

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  all:
    - rule_id: ACT-001
      field: applicant.business.activity_type
      operator: equals
      value: non_farm_income_generating
      type: hard
      source: S1
      confidence: high

    - rule_id: BIZ-001
      field: applicant.business.size_class
      operator: in
      value: [micro, small]
      type: hard
      source: S1
      confidence: high

    - rule_id: SEC-001
      field: applicant.business.sector
      operator: in
      value: [manufacturing, services, trading]
      type: hard
      source: S1
      confidence: high

    - rule_id: KYC-001
      field: applicant.kyc_complete
      operator: is_true
      value: true
      type: hard
      source: S3
      confidence: high

    - rule_id: BNK-001
      field: applicant.bank_account
      operator: exists
      value: true
      type: hard
      source: S3
      confidence: high

  any:
    - rule_id: CAT-001
      field: loan.category
      operator: in
      value: [shishu, kishore, tarun]
      type: conditional
      source: S1
      confidence: high
      note: no prior-repayment precondition

    - rule_id: TPL-001
      field: applicant.prior_mudra_tarun_repaid
      operator: is_true
      value: true
      type: hard
      source: S3
      confidence: high
      condition: loan.category = tarun_plus
      note: Tarun Plus only for entrepreneurs who availed and successfully repaid a Tarun loan
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.business.activity_type
  - applicant.business.sector
  - applicant.prior_mudra_tarun_repaid   # only if user asks for Tarun Plus
```

## Notes

- PMMY imposes **no income, caste, gender or education** criteria; the
  gate is the nature of the activity [S1].
- Final sanction is the lending institution's credit decision (soft
  condition `informational` — not an eligibility rule of the scheme).
- Age 18+ is a near-universal lending-institution requirement; recorded
  as `soft` / `medium` confidence because the scheme documents reviewed
  do not codify it.
