---
type: Government Scheme Benefits
title: PMAY-G — Benefits
description: Unit assistance and convergence benefit objects for PMAY-G.
scheme_id: PMAY-G
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
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2074713
    title: PIB PMAY-R release
    author: PIB
    last_modified: 2024-11-19
  - id: S1
    resource: https://pmayg.dord.gov.in/netiayHome/home.aspx
    title: PMAY-G official portal
    author: MoRD
    last_modified: not_verified
---

# PMAY-G — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: AST-001
    type: cash_transfer
    name: Unit assistance — plains
    amount:
      value: 120000
      currency: INR
      frequency: one_time_in_stages
    conditions: house in plain areas; geo-tagged construction stages verified
    delivery: dbt_to_beneficiary_account
    source: S2
    confidence: high

  - benefit_id: AST-002
    type: cash_transfer
    name: Unit assistance — hilly/difficult/IAP areas
    amount:
      value: 130000
      currency: INR
      frequency: one_time_in_stages
    conditions: house in hilly states, difficult areas, or IAP districts
    delivery: dbt
    source: S2
    confidence: high

  - benefit_id: CON-001
    type: cash_transfer
    name: Toilet construction support (SBM-G convergence)
    amount:
      value: 12000
      currency: INR
      frequency: one_time
    conditions: in convergence with Swachh Bharat Mission – Grameen [S2]
    delivery: dbt
    source: S2
    confidence: high

  - benefit_id: CON-002
    type: service
    name: MGNREGS wage support
    amount:
      value: 90
      unit: days_of_unskilled_wages
      currency: INR
      note: wage value at MGNREGS state-specific daily rate
    conditions: convergence with MGNREGS for construction labour [S2]
    source: S2
    confidence: high

  - benefit_id: LON-001
    type: loan
    name: Institutional loan for construction
    amount:
      max_value: 70000
      currency: INR
    conditions: eligible beneficiaries; interest reduced (3% reduced rate described in PIB release [S2])
    source: S2
    confidence: medium
```

## Notes

- The ₹1.20L/₹1.30L unit assistance split is consistently described in
  the PIB release and portal materials [S1][S2].
- Wage support (90 days) is delivered through MGNREGS, not through
  PMAY-G funds — the engine must not describe it as a cash component of
  the housing grant.
