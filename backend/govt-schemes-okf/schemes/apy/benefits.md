---
type: Government Scheme Benefits
title: APY — Benefits
description: Pension benefit objects and contribution reference points for APY.
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
  - id: S2
    resource: https://npscra.nsdl.co.in/scheme-details.php
    title: NSDL CRA — APY scheme details
    author: NSDL CRA
    last_modified: not_verified
---

# APY — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: PEN-001
    type: pension
    name: Guaranteed monthly pension from age 60
    amount:
      value: 1000
      min_value: 1000
      max_value: 5000
      currency: INR
      frequency: monthly
      slabs: [1000, 2000, 3000, 4000, 5000]
    duration: for_life_of_subscriber_then_spouse
    conditions:
      - contributions paid per schedule from entry to age 60
      - pension slab chosen at entry
    guarantee: Government of India guarantee of pension amount [S1]
    source: S1
    confidence: high

  - benefit_id: PEN-002
    type: pension
    name: Spouse pension on subscriber's death
    amount:
      value: same_slab_as_subscriber
      currency: INR
      frequency: monthly
    conditions: continues to spouse for life [S1]
    source: S1
    confidence: high

  - benefit_id: SUR-001
    type: grant
    name: Corpus to nominee on both deaths
    amount:
      value: purchase_price_of_pension
      currency: INR
      note: the accumulated corpus (purchase price) is returned to the nominee [S1]
    conditions: death of subscriber and spouse
    source: S1
    confidence: high

  - benefit_id: CON-001
    type: service
    name: Contribution reference points (subscriber cost)
    amount:
      currency: INR
      frequency: monthly
      examples:
        - entry_age_18_slab_1000: 42
        - entry_age_18_slab_5000: 210
        - entry_age_40_slab_5000: 1454
      note: full age × slab contribution chart is published by CRA/Government; store reference points only, link to chart for exact figures [S1][S2]
    source: S1
    confidence: high
```

## Notes

- The engine must never compute "expected returns" — APY is a defined-
  benefit guarantee, not a market product.
- Tax treatment references are outside this bundle's scope; direct
  users to official tax guidance.
