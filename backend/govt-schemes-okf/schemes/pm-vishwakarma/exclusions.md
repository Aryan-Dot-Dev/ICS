---
type: Government Scheme Exclusions
title: PM Vishwakarma — Exclusions
description: Structured disqualifiers for PM Vishwakarma.
scheme_id: PM-VISHWAKARMA
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
    resource: https://pmvishwakarma.gov.in/
    title: PM Vishwakarma official portal (eligibility)
    author: MoMSME
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=1959098
    title: PIB — salient features
    author: PIB
    last_modified: 2023-09-20
---

# PM Vishwakarma — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.age
    operator: less_than
    value: 18
    detail: minors are not eligible
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.employment_status
    operator: in
    value: [salaried, government_employee]
    detail: salaried and government employees are excluded (scheme is for self-employed artisans)
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.occupation
    operator: not_in
    value: [notified_trades_list]
    detail: occupations outside the 18 notified trades are not covered
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-004
    field: applicant.prior_similar_credit_linked_subsidy_loan
    operator: is_true
    value: true
    detail: beneficiaries of similar credit-linked subsidy-scheme loans (central/state) in the last 5 years are excluded (verify current guideline wording)
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-005
    field: applicant.family.already_registered_member
    operator: is_true
    value: true
    detail: only one member per family can register
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-006
    field: applicant.income_tax_payer_last_5_years
    operator: is_true
    value: true
    detail: persons who filed income-tax returns in the last 5 years are excluded per portal eligibility (verify current wording)
    effect: ineligible
    source: S1
    confidence: medium
```

## Notes

- EX-004/EX-006 horizons ("last 5 years") come from the portal's
  eligibility framing; the engine must verify the exact current wording
  before final denial responses.
