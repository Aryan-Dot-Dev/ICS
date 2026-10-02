---
type: Government Scheme Benefits
title: PMMVY — Benefits
description: Instalment benefit objects for PMMVY.
scheme_id: PMMVY
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
    resource: https://pmmvy.wcd.gov.in/
    title: PMMVY portal
    author: Ministry of Women and Child Development
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2270668
    title: PIB — PMMVY
    author: PIB
    last_modified: 2026-06-09
  - id: S3
    resource: https://en.vikaspedia.in/viewcontent/social-welfare/women-and-child-development/women-development-1/pradhan-mantri-matru-vandana-yojana
    title: Vikaspedia — PMMVY instalment structure
    author: Government of India initiative (vikaspedia)
    last_modified: not_verified
---

# PMMVY — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: CSH-001
    type: cash_transfer
    name: First living child — total benefit
    amount:
      value: 5000
      currency: INR
      frequency: one_time_in_two_instalments
      instalments:
        - instalment_1: 1000
          trigger: early registration of pregnancy / first ANC
        - instalment_2: 4000
          trigger: live birth registration + first immunisation cycle (per guidelines)
    conditions:
      - first living child
      - PWLM status; household exclusions per eligibility.md
    delivery: dbt_to_mother_account_via_pmmvy_cas
    note: instalment split per scheme structure [S1][S3]; ₹6,000 JSY interaction — see note below
    source: S1
    confidence: high

  - benefit_id: CSH-002
    type: cash_transfer
    name: Second living child (girl) — benefit
    amount:
      value: 6000
      currency: INR
      frequency: one_time_instalment
    conditions:
      - second living child is a girl child [S2]
      - PWLM status; household exclusions
    delivery: dbt_to_mother_account
    source: S2
    confidence: high
```

## Notes

- **JSY interaction:** the scheme design references the ₹6,000 JSY
  benefit in LPS/other low-performing states such that total maternity
  support can reach ₹6,000 for the first child (PMMVY ₹5,000 + JSY
  ₹1,000 or equivalent structure per guidelines) — the engine must
  present PMMVY's own ₹5,000 and describe JSY separately rather than
  merging them.
- Claim windows and immunisation-trigger details follow current PMMVY
  2.0/CAS guidance — verify before quoting specific deadline days.
