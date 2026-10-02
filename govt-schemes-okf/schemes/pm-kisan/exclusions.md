---
type: Government Scheme Exclusions
title: PM-KISAN — Exclusions
description: Structured disqualifiers for PM-KISAN.
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
  - id: S2
    resource: https://fw.pmkisan.gov.in/Documents/Revised%20Operational%20Guidelines%20-%20PM-Kisan%20Scheme.pdf
    title: Revised Operational Guidelines — PM-KISAN
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PM-KISAN — Exclusions

Per the revised operational guidelines, the following are **excluded**
from PM-KISAN benefits [S2]. Each is a structured disqualifier; effect is
`ineligible` in all cases.

```yaml
exclusions:
  - id: EX-001
    field: applicant.landholder_type
    operator: equals
    value: institutional
    detail: All institutional landholders (government bodies, companies, cooperatives, trusts, etc.)
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-002
    field: applicant.household.member_holding_constitutional_post
    operator: is_true
    value: true
    detail: Present or former holder of constitutional posts
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-003
    field: applicant.household.serving_or_retired_government_employee
    operator: is_true
    value: true
    detail: Serving or retired employees of Central/State Government ministries/offices, PSUs, autonomous bodies, local bodies (excluding Multi-Tasking Staff / Class IV / Group D employees for the pension component below)
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-004
    field: applicant.household.member_pension_monthly_above
    operator: greater_than
    value: 10000
    detail: Superannuated/retired pensioners with monthly pension above Rs.10,000 (excluding MTS/Class IV/Group D employees)
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-005
    field: applicant.household.income_tax_payer_member
    operator: is_true
    value: true
    detail: Individuals who paid income tax in the last assessment year
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-006
    field: applicant.household.registered_professional_member
    operator: is_true
    value: true
    detail: Professionals such as doctors, engineers, lawyers, chartered accountants, architects registered with professional bodies
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-007
    field: applicant.citizenship
    operator: not_equals
    value: IN
    detail: NRIs / non-Indian citizens are not eligible
    effect: ineligible
    source: S2
    confidence: high
```

## Notes

- Exclusion tests are evaluated **at family level** — one excluded member
  disqualifies the family.
- The engine must surface EX-005/EX-006/EX-003 as questions when the user
  profile is silent on them (`needs_information`), never assume absence.
