---
type: Government Scheme Benefits
title: PMS-SC — Benefits
description: Maintenance allowance and fee-reimbursement benefit objects for PMS-SC.
scheme_id: PMS-SC
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
    resource: https://socialjustice.gov.in/
    title: MoSJE — PMS-SC pages and guidelines
    author: Ministry of Social Justice and Empowerment
    last_modified: not_verified
---

# PMS-SC — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: MNT-001
    type: scholarship
    name: Maintenance allowance (day scholar / hosteller)
    amount:
      value: varies_by_course_group
      currency: INR
      frequency: monthly_academic_year
      note: allowance rates differ by course group (e.g., Group I professional degrees vs school stages) and hosteller/day-scholar status; exact rupee slabs are set in the scheme annexure and State notifications — NOT hard-coded here. Verify current annexure before quoting a rupee figure.
    delivery: dbt_to_student_account
    conditions: eligible SC student per eligibility.md
    source: S1
    confidence: medium

  - benefit_id: FEE-001
    type: reimbursement
    name: Course fee reimbursement
    amount:
      value: full_reimbursable_course_fee
      currency: INR
      cap: per_institution_cap_in_guidelines
      note: reimbursed to the INSTITUTION for eligible students per revised (2020) guidelines; covers non-refundable charges within caps — exact caps per current annexure
    delivery: to_institution
    conditions: recognised institution; eligible course; within cap
    source: S1
    confidence: medium

  - benefit_id: DIS-001
    type: grant
    name: Disabled-SC-student provisions (book grant / escort etc. where notified)
    amount:
      value: per_annexure
      currency: INR
      note: reader/escort/book-grant type provisions exist for eligible PwD students per guidelines — verify current annexure
    conditions: SC student with disability per certification
    source: S1
    confidence: low
```

## Notes

- The 2020 revised guidelines changed the delivery architecture (fees
  to institutions, allowances by DBT). The engine must not quote
  pre-2020 rates.
- Rupee slabs for maintenance groups are intentionally not stored —
  they are annexure-driven and revision-prone (staleness by design);
  fetch from MoSJE/NSP scheme pages at query time.
