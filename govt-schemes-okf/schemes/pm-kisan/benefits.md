---
type: Government Scheme Benefits
title: PM-KISAN — Benefits
description: Benefit objects for PM-KISAN income support.
scheme_id: PM-KISAN
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
    resource: https://pmkisan.gov.in/
    title: PM Kisan Samman Nidhi — Official Portal
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S3
    resource: https://www.pmindia.gov.in/en/news_updates/cabinet-approves-continuation-of-the-pm-kisan-scheme-from-2026-27-to-2030-31-with-a-financial-outlay-of-rs-3-15-lakh-crore/
    title: Cabinet approves continuation of PM-KISAN 2026-27 to 2030-31
    author: PIB / Prime Minister's Office
    last_modified: 2026-07-31
---

# PM-KISAN — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: cash_transfer
    name: Annual income support
    amount:
      value: 6000
      currency: INR
      frequency: annual
    installments:
      count: 3
      per_installment:
        value: 2000
        currency: INR
      cadence: every_four_months
      windows:
        - April–July
        - August–November
        - December–March
    duration: continuing (scheme approved till FY 2030-31)
    delivery: dbt_to_aadhaar_seeded_bank_account
    contribution: none
    conditions:
      - beneficiary is an eligible landholding farmer family (see eligibility.md)
      - eKYC completed and bank account Aadhaar-seeded
    source: S1
    confidence: high
```

## Notes

- The amount is **per family per year**, not per member.
- No max/min tiers exist; the amount is uniform for all eligible
  families.
- The number of the "current installment" changes over time — the engine
  must never state it; refer users to the PM-KISAN portal beneficiary
  status page for live installment status (staleness-prone, deliberately
  not stored).
- Continuation till 2030-31 with outlay ₹3,15,000 crore is a Cabinet
  decision recorded 31 July 2026 [S3]; the per-family rate for future
  financial years remains ₹6,000 in these sources.
