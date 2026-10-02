---
type: Government Scheme Benefits
title: PMJJBY — Benefits
description: Cover benefit objects for PMJJBY.
scheme_id: PMJJBY
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
    resource: https://financialservices.gov.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby
    title: DFS — PMJJBY
    author: Department of Financial Services
    last_modified: not_verified
---

# PMJJBY — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: INS-001
    type: insurance
    name: Term life cover
    amount:
      value: 200000
      currency: INR
      frequency: per_policy_year
    conditions: death of member during the cover period (all causes, subject to policy terms)
    delivery: claim_paid_to_nominee_by_insurer
    contribution:
      premium: 436
      currency: INR
      frequency: annual
      note: auto-debited from bank account
    source: S1
    confidence: high
```

## Notes

- Single flat cover — no tiers. The premium-to-cover ratio is the
  scheme's core value proposition.
- Master-policy conditions (e.g., waiting-period clauses for pre-
  existing conditions in the initial policy year) govern claim payment;
  see [exclusions.md](exclusions.md).
