---
type: Government Scheme Benefits
title: PMSBY — Benefits
description: Cover benefit objects for PMSBY.
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
  - id: S2
    resource: https://jansuraksha.gov.in/
    title: Jansuraksha portal
    author: Government of India
    last_modified: not_verified
---

# PMSBY — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: INS-001
    type: insurance
    name: Accidental death / permanent total disability cover
    amount:
      value: 200000
      currency: INR
      frequency: per_policy_year
    conditions: death or permanent total disability due to accident per policy terms
    delivery: claim_paid_by_insurer_to_nominee_or_insured
    contribution:
      premium: 20
      currency: INR
      frequency: annual
      note: auto-debited from bank account
    source: S1
    confidence: high

  - benefit_id: INS-002
    type: insurance
    name: Permanent partial disability cover
    amount:
      value: 100000
      currency: INR
      frequency: per_policy_year
    conditions: permanent partial disability due to accident per policy terms
    contribution: as INS-001
    source: S1
    confidence: high
```

## Notes

- The premium (₹20/year) is the member's only cost; the difference
  between premium and actuarial cost is Government-supported via
  participating insurers.
- Cover period runs per the annual cycle (1 June–31 May by default);
  mid-year enrolment has prorated provisions per policy terms.
