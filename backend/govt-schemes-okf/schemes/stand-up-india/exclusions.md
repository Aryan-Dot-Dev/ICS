---
type: Government Scheme Exclusions
title: Stand-Up India — Exclusions
description: Cases excluded from Stand-Up India.
scheme_id: SUI
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
    resource: https://www.standupmitra.in/
    title: Standup Mitra — Official portal
    author: SIDBI
    last_modified: not_verified
---

# Stand-Up India — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.business.stage
    operator: not_equals
    value: greenfield
    detail: existing-business expansion is not covered — scheme funds first-time (greenfield) ventures only
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.bank_defaulter
    operator: is_true
    value: true
    detail: defaulters to any bank or financial institution are not eligible
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.eligible_branch
    operator: equals
    value: none
    detail: applicants who are neither SC/ST nor women fall outside the scheme's target branches
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-004
    field: loan.amount_requested
    operator: not_between
    value: [1000000, 10000000]
    detail: loans below Rs.10 lakh or above Rs.1 crore are outside Stand-Up India's band (other schemes such as PMMY/PSB loans cover other bands)
    effect: ineligible
    source: S1
    confidence: high
```

## Notes

- EX-003 must be evaluated with the `any:` branch from
  [eligibility.md](eligibility.md) — an applicant satisfying either
  branch is not excluded.
- There is no income-based or age-based exclusion beyond the 18+ entry
  age.
