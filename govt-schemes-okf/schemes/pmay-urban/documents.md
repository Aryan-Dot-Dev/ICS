---
type: Government Scheme Documents
title: PMAY-U 2.0 — Documents
description: Document requirements for PMAY-U 2.0 application and ISS.
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
  - id: S1
    resource: https://pmay-urban.gov.in/
    title: PMAY-Urban official website
    author: MoHUA
    last_modified: not_verified
  - id: S3
    resource: https://pmaymis.gov.in/PMAYMIS2_2024/PmayISS.aspx
    title: PMAY-U 2.0 ISS page
    author: MoHUA / PMAY MIS
    last_modified: not_verified
---

# PMAY-U 2.0 — Documents

```yaml
documents:
  - id: aadhaar
    name: Aadhaar card (all family members as applicable)
    required: always
    condition: identity + de-duplication across verticals [S1]
    source: S1
    confidence: high

  - id: address-proof
    name: Address proof of urban residence
    required: conditional
    condition: ULB survey / demand-survey verification
    source: S1
    confidence: medium

  - id: income-declaration
    name: Income declaration / certificate (EWS/LIG/MIG category)
    required: conditional
    condition: income-category-based benefits and ISS; self-declaration/certificate per State practice
    source: S1
    confidence: medium

  - id: no-pucca-house-declaration
    name: Declaration of not owning a pucca house anywhere in India
    required: always
    condition: core eligibility attestation
    source: S1
    confidence: high

  - id: bank-account
    name: Bank account details
    required: always
    condition: DBT of assistance / loan operations
    source: S1
    confidence: high

  - id: land-documents
    name: Land/plot documents (khasra, sale deed, mutation, etc.)
    required: conditional
    condition: BLC construction on own plot
    source: S1
    confidence: medium

  - id: loan-documents
    name: Home-loan sanction/agreement from PLI
    required: conditional
    condition: ISS subsidy through banks/HFCs [S3]
    source: S3
    confidence: high
```

## Notes

- State/ULB checklists vary; treat additional items as
  `potentially_requested` with `state_variant: true`.
- ISS verification is performed by the Primary Lending Institution and
  MoHUA systems (CLAP-type validation) [S3].
