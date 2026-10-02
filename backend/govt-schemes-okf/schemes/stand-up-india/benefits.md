---
type: Government Scheme Benefits
title: Stand-Up India — Benefits
description: Loan and support benefit objects for Stand-Up India.
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

# Stand-Up India — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: LOAN-001
    type: loan
    name: Composite bank loan (term loan + working capital)
    amount:
      min_value: 1000000
      max_value: 10000000
      currency: INR
      frequency: one_time_sanction_with_working_capital_limit
    collateral_required: false_for_scheme_cover
    note: primary security/mortgage of project assets may be required by bank as per its lending norms
    interest_rate: as per bank policy (not fixed by scheme)
    duration: as per bank policy
    contribution:
      margin_money: up to 15 percent
      margin_money_sources: central/state government schemes or beneficiary's own contribution (per scheme norms on Standup Mitra)
    conditions:
      - greenfield venture only
      - borrower is SC/ST or woman
      - not a defaulter to any bank/financial institution
    source: S1
    confidence: high

  - benefit_id: SVC-001
    type: service
    name: Handholding support
    delivery: via_standup_mitra_portal
    includes:
      - mentoring and business-plan guidance
      - connection to banks and support agencies
      - training and market linkages (as facilitated)
    conditions: registration on Standup Mitra
    source: S1
    confidence: high

  - benefit_id: SVC-002
    type: service
    name: RuPay debit card for working capital withdrawal
    conditions: sanctioned loan with working-capital component
    source: S1
    confidence: medium
```

## Notes

- Stand-Up India does not pay a **subsidy**; margin money support may be
  routed from other government programmes. The 15% margin figure reflects
  the scheme's support norms published on Standup Mitra; the absolute
  amount is project-dependent (not stored as rupees).
- Interest rates are bank-specific — deliberately not stored.
