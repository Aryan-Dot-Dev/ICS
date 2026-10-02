---
type: Government Scheme Documents
title: PMSBY — Documents
description: Document requirements for PMSBY enrolment and claims.
scheme_id: PMSBY
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
    resource: https://financialservices.gov.in/pradhan-mantri-suraksha-bima-yojana-pmsby
    title: DFS — PMSBY
    author: Department of Financial Services
    last_modified: not_verified
---

# PMSBY — Documents

```yaml
documents:
  - id: consent-form
    name: PMSBY consent-cum-declaration form (bank format)
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

  - id: aadhaar-kyc
    name: Aadhaar/KYC (as per bank)
    required: conditional
    condition: identity verification
    source: S1
    confidence: medium

  - id: claim-documents
    name: Claim documents (death certificate / disability certificate, FIR/police report where applicable, discharge summary)
    required: conditional
    condition: claim settlement, as per insurer checklist
    source: S1
    confidence: high
```

## Notes

- Enrolment is intentionally lightweight — the bank-account linkage is
  the primary credential.
- Claim checklists are insurer-specific; treat insurer-specific extras
  as `potentially_requested`.
