---
type: Government Scheme Benefits
title: PMUY — Benefits
description: Benefit objects for PMUY connection and refill support.
scheme_id: PMUY
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
    resource: https://www.pmuy.gov.in/ujjwala2.html
    title: PMUY 2.0 page
    author: MoPNG / OMCs
    last_modified: not_verified
  - id: S3
    resource: https://www.pmuy.gov.in/faq.html
    title: PMUY FAQ
    author: MoPNG / OMCs
    last_modified: not_verified
---

# PMUY — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: CON-001
    type: in_kind
    name: Deposit-free LPG connection
    amount:
      value: security_deposit_waived
      currency: INR
      note: deposit-free connection (14.2 kg / 5 kg cylinder option per availability); no initial deposit or connection charges [S2]
    delivery: through_oil_marketing_company_distributor
    conditions: eligibility per eligibility.md
    source: S2
    confidence: high

  - benefit_id: KIT-001
    type: in_kind
    name: Free hotplate/stove and first refill (Ujjwala 2.0)
    amount:
      value: first_refill_and_hotplate_free
      currency: INR
      note: provided free of cost along with the deposit-free connection [S2]
    delivery: through_oil_marketing_company_distributor
    source: S2
    confidence: high

  - benefit_id: SUB-001
    type: subsidy
    name: Targeted LPG refill support for PMUY consumers
    amount:
      value: not_verified_current_rate
      currency: INR
      frequency: per_refill
      note: refill-support mechanism for PMUY consumers is notified by Government from time to time; per-refill rupee amounts and the number of subsidised refills are revised periodically — DO NOT hard-code. Verify from official MoPNG/OMC announcements at query time.
    conditions: PMUY beneficiary with an active connection
    source: S3
    confidence: low
    stale_after: 2026-10-01
```

## Notes

- Structural benefits (deposit-free connection, free stove + first
  refill) are stable and well-attested [S2].
- Refill-subsidy rupee values change with notifications — the engine
  must fetch/verify current rates rather than rely on stored values.
