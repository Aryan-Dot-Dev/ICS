---
type: Government Scheme Documents
title: PMJJBY — Documents
description: Document requirements for PMJJBY enrolment and claims.
scheme_id: PMJJBY
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
    resource: https://financialservices.gov.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby
    title: DFS — PMJJBY
    author: Department of Financial Services
    last_modified: not_verified
---

# PMJJBY — Documents

```yaml
documents:
  - id: consent-form
    name: PMJJBY consent-cum-declaration form (bank format, with health declaration)
    required: always
    condition: enrolment with auto-debit consent
    source: S1
    confidence: high

  - id: bank-account
    name: Operative bank account
    required: always
    condition: premium auto-debit and claim credit
    source: S1
    confidence: high

  - id: nominee-details
    name: Nominee details (and proof where bank requires)
    required: always
    condition: claim designation
    source: S1
    confidence: high

  - id: aadhaar-kyc
    name: Aadhaar/KYC (as per bank)
    required: conditional
    condition: identity verification
    source: S1
    confidence: medium

  - id: claim-documents
    name: Claim documents (death certificate, ID proof of nominee, claim forms per insurer)
    required: conditional
    condition: claim settlement
    source: S1
    confidence: high
```

## Notes

- Enrolment requires no medical examination — the health declaration in
  the consent form is the basis (subject to policy terms).
