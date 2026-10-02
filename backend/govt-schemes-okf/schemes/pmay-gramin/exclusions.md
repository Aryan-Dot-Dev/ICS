---
type: Government Scheme Exclusions
title: PMAY-G — Exclusions
description: Structured disqualifiers for PMAY-G.
scheme_id: PMAY-G
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
    resource: https://pmayg.dord.gov.in/netiayHome/home.aspx
    title: PMAY-G official portal
    author: MoRD
    last_modified: not_verified
---

# PMAY-G — Exclusions

Per PMAY-G framework (SECC-based exclusion/inclusion logic operated by
States), typical exclusions include [S1]:

```yaml
exclusions:
  - id: EX-001
    field: applicant.rural_urban_status
    operator: equals
    value: urban
    detail: urban households fall under PMAY-U, not PMAY-G
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-002
    field: applicant.household.prior_iay_pmayg_assistance
    operator: is_true
    value: true
    detail: households already assisted under IAY/PMAY-G for a house are excluded
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-003
    field: applicant.household.owns_pucca_house
    operator: is_true
    value: true
    detail: households owning a pucca house (not kutcha/dilapidated) are outside the target group
    effect: ineligible
    source: S1
    confidence: high

  - id: EX-004
    field: applicant.household.government_employee_member
    operator: is_true
    value: true
    detail: government/PSU employee households are excluded per SECC-based exclusion logic
    effect: ineligible
    source: S1
    confidence: medium

  - id: EX-005
    field: applicant.household.income_tax_payer_member
    operator: is_true
    value: true
    detail: income-tax payer households are excluded per SECC-based exclusion logic
    effect: ineligible
    source: S1
    confidence: medium

  - id: EX-006
    field: applicant.household.owns_motorised_vehicle
    operator: is_true
    value: true
    detail: ownership of motorised two/three/four-wheelers is an exclusion indicator per SECC-based logic (state-operated verification)
    effect: ineligible
    source: S1
    confidence: medium
```

## Notes

- EX-004/005/006 reflect the SECC-based exclusion framework operated by
  States with Gram Sabha verification; the operative rulebook is
  State-specific — the engine must mark these `confidence: medium` and
  defer to State verification.
- Beneficiary selection also uses priority/inclusion criteria (roofless,
  SC/ST, minorities, PwD, widows etc.) — these affect **order**, not
  eligibility (soft).
