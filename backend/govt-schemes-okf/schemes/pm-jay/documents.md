---
type: Government Scheme Documents
title: AB PM-JAY — Documents
description: Document/verification requirements for Ayushman Card issuance.
scheme_id: PM-JAY
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
    resource: https://pmjay.gov.in/
    title: AB PM-JAY official website
    author: National Health Authority
    last_modified: not_verified
---

# AB PM-JAY — Documents

```yaml
documents:
  - id: aadhaar
    name: Aadhaar card
    required: always
    condition: e-KYC and identity for card issuance
    source: S1
    confidence: high

  - id: mobile-number
    name: Mobile number (for OTP)
    required: always
    condition: e-KYC authentication
    source: S1
    confidence: high

  - id: ration-card
    name: Ration card / family identity documents
    required: conditional
    condition: helps locate family in the SECC database during verification (not a legal eligibility test)
    source: S1
    confidence: medium

  - id: age-proof-70plus
    name: Age proof (Aadhaar generally suffices)
    required: conditional
    condition: 70+ branch (Ayushman Vay Vandana) verification
    source: S2
    confidence: high

  - id: pmjay-card
    name: Ayushman Card (issued post-verification)
    required: always
    condition: availing cashless treatment at empanelled hospitals
    source: S1
    confidence: high
```

## Notes

- No income certificate or caste certificate is prescribed — eligibility
  is database-verified, not document-asserted.
- Cards can be generated via Ayushman App, CSCs, and Ayushman Mitra
  desks at empanelled hospitals [S1].
