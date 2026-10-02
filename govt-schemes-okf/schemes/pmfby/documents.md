---
type: Government Scheme Documents
title: PMFBY — Documents
description: Document requirements for PMFBY enrolment and claims.
scheme_id: PMFBY
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
    resource: https://pmfby.gov.in/
    title: PMFBY — Official Crop Insurance Portal
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S2
    resource: https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf
    title: PMFBY Revised Operational Guidelines
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PMFBY — Documents

```yaml
documents:
  - id: aadhaar-kyc
    name: Aadhaar / KYC
    required: always
    condition: identity verification at enrolment
    source: S1
    confidence: high

  - id: bank-account
    name: Bank account details (claim DBT)
    required: always
    condition: claim and premium transactions
    source: S2
    confidence: high

  - id: land-record
    name: Land record / land certificate (record of rights, tenancy or cultivation document)
    required: conditional
    condition: non-loanee farmers — proof of cultivation rights over insured land
    source: S2
    confidence: high

  - id: tenancy-agreement
    name: Tenancy / sharecropping agreement (or State-prescribed certificate)
    required: conditional
    condition: sharecroppers and tenant farmers, where State provides
    source: S2
    confidence: high

  - id: sowing-proof
    name: Crop-sowing proof (e.g. G-4/G-5 certificate or State-prescribed sowing certificate)
    required: conditional
    condition: non-loanee enrolment for sowing-based cover
    source: S2
    confidence: medium

  - id: crop-loan-document
    name: Crop-loan / KCC sanction document
    required: conditional
    condition: loanee farmers enrolled through the lending institution
    source: S2
    confidence: high

  - id: intimation-proof
    name: Loss intimation (photographs of affected field via portal/app, intimation reference)
    required: conditional
    condition: localised perils / post-harvest loss claims, within the prescribed window
    source: S2
    confidence: high
```

## Notes

- Exact state-level document lists vary; treat extras as
  `potentially_requested` with `state_variant: true`.
- Photographic loss evidence through the PMFBY app/portal is part of the
  modern claim flow (per portal guidance).
