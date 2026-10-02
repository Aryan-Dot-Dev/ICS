---
type: Government Scheme Documents
title: PM Vishwakarma — Documents
description: Document requirements for PM Vishwakarma registration and benefits.
scheme_id: PM-VISHWAKARMA
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
    resource: https://pmvishwakarma.gov.in/
    title: PM Vishwakarma official portal
    author: MoMSME
    last_modified: not_verified
---

# PM Vishwakarma — Documents

```yaml
documents:
  - id: aadhaar
    name: Aadhaar card (Aadhaar-linked mobile)
    required: always
    condition: e-KYC and registration on portal/CSC
    source: S1
    confidence: high

  - id: bank-account
    name: Aadhaar-linked bank account details
    required: always
    condition: stipend/toolkit/loan routing
    source: S1
    confidence: high

  - id: trade-attestation
    name: Self-attestation of trade and self-employment (as per portal format)
    required: always
    condition: trade verification at CSC/district verification
    source: S1
    confidence: high

  - id: trade-evidence
    name: Evidence of trade practice (photos of workshop/tools, where asked by verification team)
    required: conditional
    condition: district-level verification
    source: S1
    confidence: medium

  - id: rupa-card
    name: RUPAY card linkage (issued through bank for transactions)
    required: conditional
    condition: digital-transactions incentive + loan tranche compliance
    source: S1
    confidence: medium
```

## Notes

- Registration is Aadhaar-first; most verification is database +
  attestation-based rather than document-heavy.
- No income or caste documents are required by the scheme.
