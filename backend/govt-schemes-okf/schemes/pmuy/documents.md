---
type: Government Scheme Documents
title: PMUY — Documents
description: Document requirements for PMUY application.
scheme_id: PMUY
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
    resource: https://www.pmuy.gov.in/ujjwala2.html
    title: PMUY 2.0 page
    author: MoPNG / OMCs
    last_modified: not_verified
  - id: S3
    resource: https://www.pmuy.gov.in/faq.html
    title: PMUY FAQ
    author: MoPNG / OMCs
    last_modified: not_verified
---

# PMUY — Documents

```yaml
documents:
  - id: aadhaar
    name: Aadhaar card (applicant woman)
    required: always
    condition: KYC and de-duplication
    source: S2
    confidence: high

  - id: aadhaar-family
    name: Aadhaar of household members (as applicable per OMC process)
    required: conditional
    condition: KYC/de-duplication per OMC
    source: S2
    confidence: medium

  - id: bank-passbook
    name: Bank account/passbook (applicant)
    required: always
    condition: subsidy delivery
    source: S2
    confidence: high

  - id: no-lpg-declaration
    name: Self-declaration of no existing LPG connection in the household (as per standard format)
    required: always
    condition: eligibility attestation [S3]
    source: S3
    confidence: high

  - id: category-proof
    name: Category proof (SC/ST/AAY ration etc.), or deprivation declaration for 'other poor'
    required: conditional
    condition: category-based eligibility route [S3]
    source: S3
    confidence: high

  - id: address-proof
    name: Address proof / ration card
    required: conditional
    condition: distributor-level verification
    source: S2
    confidence: medium
```

## Notes

- The connection is issued in the **woman applicant's** name; documents
  must match her identity.
- Ujjwala 2.0 eased requirements (e.g., self-declaration replacing some
  proofs; mobile number as sufficient contact) [S2].
