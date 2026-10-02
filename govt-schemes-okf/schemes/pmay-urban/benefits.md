---
type: Government Scheme Benefits
title: PMAY-U 2.0 — Benefits
description: Benefit objects across PMAY-U 2.0 verticals.
scheme_id: PMAY-U
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
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2043927
    title: Cabinet approves PMAY-U 2.0
    author: PIB
    last_modified: 2024-08-09
  - id: S3
    resource: https://pmaymis.gov.in/PMAYMIS2_2024/PmayISS.aspx
    title: PMAY-U 2.0 Interest Subsidy Scheme page
    author: MoHUA / PMAY MIS
    last_modified: not_verified
---

# PMAY-U 2.0 — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BLC-001
    type: cash_transfer
    name: Central assistance — Beneficiary-Led Construction (BLC)
    amount:
      value: not_verified_for_pmay_u_2_0
      currency: INR
      frequency: one_time
      note: PMAY-U 1.0 BLC central assistance was Rs.1.5 lakh; PMAY-U 2.0 per-house BLC assistance as per 2024 guidelines — verify current figure with State/ULB before quoting
    conditions: eligible EWS family constructing/enhancing own house; geo-tagged construction stages; DBT
    source: S2
    confidence: medium

  - benefit_id: AHP-001
    type: subsidy
    name: Central assistance — Affordable Housing in Partnership (AHP)
    amount:
      value: not_verified_for_pmay_u_2_0
      currency: INR
      frequency: per_house_in_approved_project
      note: PMAY-U 1.0 AHP was Rs.1.5 lakh per EWS house; confirm PMAY-U 2.0 rate from scheme guidelines
    conditions: approved AHP project; EWS allottee
    source: S2
    confidence: medium

  - benefit_id: ARH-001
    type: service
    name: Affordable Rental Housing (ARH)
    amount:
      value: subsidised_rental_housing
      currency: INR
      note: rental housing at affordable rates for urban migrants/poor; rent depends on dwelling and State model
    conditions: through public/private entities managing ARH complexes
    source: S2
    confidence: medium

  - benefit_id: ISS-001
    type: subsidy
    name: Interest Subsidy Scheme (ISS)
    amount:
      rate: 4
      unit: percent_interest_subsidy
      base: first 800000 INR of loan
      max_npv_note: subsidy computed on NPV basis; indicative maximum NPV per PIB reporting — verify against ISS terms before quoting an exact rupee cap
      currency: INR
      frequency: one_time_credited_to_loan_account
    conditions:
      - loans sanctioned and disbursed on/after 01.09.2024 [S3]
      - loan amount up to Rs.25 lakh [S2][S3]
      - house value up to Rs.35 lakh [S2][S3]
      - minimum loan tenure 5 years [S3]
      - EWS/LIG/MIG beneficiary; first pucca house
    delivery: through Primary Lending Institutions (banks/HFCs)
    source: S2
    confidence: high
```

## Notes

- The ISS structural parameters (4% on first ₹8 lakh; ₹25L loan; ₹35L
  house; 5-year minimum tenure; 01.09.2024 start) are well-attested in
  the Cabinet release and ISS page [S2][S3].
- Rupee amounts for BLC/AHP under 2.0 are deliberately marked
  `not_verified_for_pmay_u_2_0` rather than carrying 1.0 figures
  forward — the engine must not present 1.0 amounts as current.
