---
type: Government Scheme Benefits
title: PMMY — Benefits
description: Loan category benefit objects for PMMY.
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
    title: MUDRA — Offerings
    author: MUDRA Ltd
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2069170
    title: PIB — PMMY loan limit raised to ₹20 lakh; Tarun Plus category
    author: Press Information Bureau
    last_modified: 2024-10-29
  - id: S3
    resource: https://www.jansamarth.in/business-loan-pradhan-mantri-mudra-yojana-scheme
    title: JanSamarth — PMMY business loan
    author: Department of Financial Services / NeGD
    last_modified: not_verified
---

# PMMY — Benefits

## Loan objects

```yaml
benefits:
  - benefit_id: LOAN-SHISHU
    type: loan
    name: Shishu
    amount:
      min_value: 1
      max_value: 50000
      currency: INR
      frequency: one_time_disbursement
    collateral_required: false
    interest_rate: as per lending institution policy (not fixed by scheme)
    duration: as per lending institution policy
    contribution: none (no scheme-level margin)
    conditions:
      - non-farm income-generating activity
      - credit assessment by lending institution
    source: S1
    confidence: high

  - benefit_id: LOAN-KISHORE
    type: loan
    name: Kishore
    amount:
      min_value: 50001
      max_value: 500000
      currency: INR
      frequency: one_time_disbursement
    collateral_required: false
    interest_rate: as per lending institution policy
    duration: as per lending institution policy
    conditions: as Shishu
    source: S1
    confidence: high

  - benefit_id: LOAN-TARUN
    type: loan
    name: Tarun
    amount:
      min_value: 500001
      max_value: 1000000
      currency: INR
      frequency: one_time_disbursement
    collateral_required: false
    interest_rate: as per lending institution policy
    duration: as per lending institution policy
    conditions: as Shishu
    source: S1
    confidence: high

  - benefit_id: LOAN-TARUN-PLUS
    type: loan
    name: Tarun Plus
    amount:
      min_value: 1000001
      max_value: 2000000
      currency: INR
      frequency: one_time_disbursement
    collateral_required: false
    interest_rate: as per lending institution policy
    duration: as per lending institution policy
    conditions:
      - borrower availed and successfully repaid a previous Tarun loan [S3]
    source: S2
    confidence: high
```

## Notes

- PMMY itself grants **no subsidy, interest subvention or grant**; the
  benefit is access to collateral-free credit [S1].
- Interest rates are lending-institution-specific and change with
  market conditions — deliberately not stored (staleness by design).
- Government subsidy-based alternatives: see
  [PMEGP](../pmegp/benefits.md) (margin-money subsidy) and
  [PM Vishwakarma](../pm-vishwakarma/benefits.md) (concessional credit).
