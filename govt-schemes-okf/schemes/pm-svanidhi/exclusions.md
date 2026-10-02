---
type: Government Scheme Exclusions
title: PM SVANidhi — Exclusions
description: Structured disqualifiers for PM SVANidhi.
scheme_id: PM-SVANIDHI
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
    resource: https://pmsvanidhi.mohua.gov.in/
    title: PM SVANidhi official portal
    author: MoHUA
    last_modified: not_verified
  - id: S4
    resource: https://mohua.gov.in/static/uploads/2026/01/a3a17370145e0870a79df74bfbab766f.pdf
    title: PM SVANidhi Loan Operational Guidelines
    author: MoHUA
    last_modified: 2026-01-01
---

# PM SVANidhi — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.occupation
    operator: not_equals
    value: street_vendor
    detail: non-street-vendors (other informal workers, fixed-shop retailers) are outside the scheme
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.vending_recognition
    operator: not_in
    value: [certificate_of_vending, letter_of_recommendation, ulb_survey_identification]
    detail: vendors without any ULB recognition/documentation are not eligible until documented
    effect: ineligible
    source: S4
    confidence: high

  - id: EX-003
    field: applicant.rural_urban_status
    operator: equals
    value: rural
    detail: the scheme covers urban street vending areas
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-004
    field: applicant.prior_svanidhi_loan_repaid
    operator: is_false
    value: false
    condition: loan.tranche = second_or_third
    detail: tranche progression blocked without full repayment of the previous loan
    effect: ineligible_for_next_tranche
    source: S4
    confidence: high
```

## Notes

- EX-002 is the common failure point: the engine should guide users to
  obtain an LoR from their ULB rather than simply deny.
- Lenders' standard credit assessments apply but are process steps, not
  scheme exclusions.
