---
type: Government Scheme Documents
title: PMMY — Documents
description: Document requirements typically demanded by lending institutions for PMMY loans.
scheme_id: PMMY
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
  - id: S3
    resource: https://www.jansamarth.in/business-loan-pradhan-mantri-mudra-yojana-scheme
    title: JanSamarth — PMMY business loan
    author: Department of Financial Services / NeGD
    last_modified: not_verified
---

# PMMY — Documents

Document lists under PMMY are set by **lending institutions** (RBI-
regulated), guided by scheme norms. Classification below reflects that:
items are `always` (KYC/account) or `conditional`/`potentially_requested`
(as per LI policy and loan size).

```yaml
documents:
  - id: identity-kyc
    name: KYC documents (Aadhaar, PAN, Voter ID, etc.)
    required: always
    condition: identity verification
    source: S3
    confidence: high

  - id: bank-account
    name: Bank account statement / passbook
    required: always
    condition: disbursement and repayment tracking
    source: S3
    confidence: high

  - id: business-address-proof
    name: Business address proof (rent agreement, utility bill, licence)
    required: conditional
    condition: existing business premises
    source: S3
    confidence: medium

  - id: project-report
    name: Project report / activity details (plan, machinery quotation)
    required: conditional
    condition: larger loans (Kishore/Tarun/Tarun Plus) and new units
    source: S3
    confidence: medium

  - id: itr
    name: Income Tax Return / financial statements
    required: conditional
    condition: existing enterprises with turnover; Tarun/Tarun Plus typically
    source: S3
    confidence: medium

  - id: registration-licence
    name: Trade licence / GST / Udyam registration
    required: potentially_requested
    condition: where the activity requires registration
    source: S3
    confidence: medium
    not_verified: specific list varies by lending institution

  - id: caste-docs
    name: (not required under PMMY)
    required: never
    condition: no caste/category documents for PMMY
    source: S1
    confidence: high
```

## Notes

- No caste certificate or income certificate is prescribed by the scheme
  itself; do not present them as required.
- For exact LI-specific checklists, users are directed to their chosen
  lending institution or JanSamarth [S3].
