---
type: Government Scheme Benefits
title: NSAP — Benefits
description: Component-wise central-assistance benefit objects for NSAP.
scheme_id: NSAP
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
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2187327
    title: PIB — NSAP
    author: PIB
    last_modified: 2025-11-07
  - id: S3
    resource: https://sansad.in/getFile/annex/268/AU2384_qLzV6d.pdf?source=pqars
    title: Lok Sabha annexure — NSAP details
    author: Parliament of India / MoRD
    last_modified: 2025-08-08
---

# NSAP — Benefits

## Benefit objects (central assistance)

```yaml
benefits:
  - benefit_id: PEN-OAP
    type: pension
    name: IGNOAPS — old age pension (central share)
    amount:
      value: 200
      currency: INR
      frequency: monthly
      condition_tier:
        - age_80_plus_value: 500
    conditions: BPL elderly 60+; 80+ receive ₹500 central share [S2]
    delivery: dbt
    note: most States add a top-up; total varies by State (state_topup: varies)
    source: S2
    confidence: high

  - benefit_id: PEN-WID
    type: pension
    name: IGNWPS — widow pension (central share)
    amount:
      value: 300
      currency: INR
      frequency: monthly
    conditions: BPL widows 40–79 [S2]
    delivery: dbt
    note: state top-ups common
    source: S2
    confidence: high

  - benefit_id: PEN-DIS
    type: pension
    name: IGNDPS — disability pension (central share)
    amount:
      value: 300
      currency: INR
      frequency: monthly
    conditions: BPL persons with severe/multiple disabilities, 18–79 [S2]
    delivery: dbt
    note: state top-ups common
    source: S2
    confidence: high

  - benefit_id: GR-NFB
    type: cash_transfer
    name: NFBS — family benefit (one-time)
    amount:
      value: 20000
      currency: INR
      frequency: one_time
    conditions: death of primary breadwinner in a BPL household [S2]
    delivery: dbt_to_bereaved_household_head
    source: S2
    confidence: high

  - benefit_id: IKN-ANN
    type: in_kind
    name: Annapurna — foodgrains
    amount:
      value: 10
      unit: kg_per_month
      commodity: foodgrain
    conditions: eligible senior citizens not receiving IGNOAPS [S3]
    delivery: through_public_distribution_system
    source: S3
    confidence: medium
```

## Notes

- All amounts above are **central shares**. The engine must display
  "central share" explicitly and state that State top-ups typically
  raise the total.
- Central rates have been stable for years, but remain subject to
  revision — `stale_after` governs re-verification.
