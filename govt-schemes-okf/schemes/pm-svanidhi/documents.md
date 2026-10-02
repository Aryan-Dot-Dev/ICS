---
type: Government Scheme Documents
title: PM SVANidhi — Documents
description: Document requirements for PM SVANidhi application.
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

# PM SVANidhi — Documents

```yaml
documents:
  - id: vending-document
    name: Certificate of Vending (CoV) / Letter of Recommendation (LoR) from ULB / survey acknowledgement
    required: always
    condition: vending recognition — the core eligibility document [S4]
    source: S4
    confidence: high

  - id: aadhaar
    name: Aadhaar card
    required: always
    condition: identity and e-KYC
    source: S1
    confidence: high

  - id: bank-account
    name: Bank account details
    required: always
    condition: loan disbursement, interest subsidy and cashback routing
    source: S1
    confidence: high

  - id: photograph
    name: Photograph of applicant (and vending activity where asked)
    required: conditional
    condition: application/ULB verification
    source: S1
    confidence: medium

  - id: repayment-record
    name: Prior-loan repayment record (for tranche 2/3)
    required: conditional
    condition: progression applications
    source: S4
    confidence: high
```

## Notes

- The LoR route makes the scheme accessible to vendors left out of
  surveys — the ULB issues LoRs per guidelines [S4].
- No income certificate or collateral documents exist in the scheme.
