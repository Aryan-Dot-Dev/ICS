---
type: Government Scheme Documents
title: PM-KISAN — Documents
description: Document requirements for PM-KISAN registration and verification.
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
  - id: S1
    resource: https://pmkisan.gov.in/
    title: PM Kisan Samman Nidhi — Official Portal
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S2
    resource: https://fw.pmkisan.gov.in/Documents/Revised%20Operational%20Guidelines%20-%20PM-Kisan%20Scheme.pdf
    title: Revised Operational Guidelines — PM-KISAN
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PM-KISAN — Documents

```yaml
documents:
  - id: aadhaar-card
    name: Aadhaar Card
    required: always
    condition: identity verification and mandatory eKYC
    source: S1
    confidence: high

  - id: bank-passbook
    name: Aadhaar-seeded bank account / passbook
    required: always
    condition: DBT delivery; account must be Aadhaar-seeded
    source: S1
    confidence: high

  - id: land-records
    name: Land ownership records (State record-of-rights, e.g. patta/khatauni/7-12 extract)
    required: always
    condition: land-ownership verification by State/UT
    source: S2
    confidence: high

  - id: mobile-number
    name: Mobile number registered to the applicant
    required: always
    condition: OTP / portal registration
    source: S1
    confidence: medium

  - id: citizenship-declaration
    name: Citizenship/self-declaration as per State format
    required: conditional
    condition: as prescribed by the State/UT implementing machinery
    source: S2
    confidence: medium
    not_verified: state-specific formats vary

  - id: ekyc-credential
    name: eKYC (Aadhaar OTP, biometric or face authentication via portal/CSC)
    required: always
    condition: mandatory for beneficiaries to receive installments
    source: S1
    confidence: high
```

## Notes

- Requirements for **documents not in the list** (e.g. caste
  certificate, income certificate) are not required by the central
  guidelines; do not request them.
- State portals may ask for state-specific declarations; treat those as
  `conditional` with `state_variant: true`.
