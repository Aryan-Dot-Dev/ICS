---
type: Government Scheme Documents
title: SSY — Documents
description: Document requirements for opening a Sukanya Samriddhi Account.
scheme_id: SSY
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
    resource: https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=171
    title: Sukanya Samriddhi Account Scheme, 2019 (rules)
    author: National Savings Institute
    last_modified: not_verified
  - id: S2
    resource: https://www.indiapost.gov.in/
    title: India Post — SSY operational page
    author: Department of Posts
    last_modified: not_verified
---

# SSY — Documents

```yaml
documents:
  - id: ssy-form
    name: Account-opening form (Form-1 under the 2019 Rules)
    required: always
    condition: application
    source: S1
    confidence: high

  - id: girl-birth-certificate
    name: Birth certificate of the girl child
    required: always
    condition: proof of age (< 10) and identity [S1]
    source: S1
    confidence: high

  - id: guardian-kyc
    name: Guardian identity proof (Aadhaar/PAN) and address proof
    required: always
    condition: KYC of the natural/legal guardian [S1]
    source: S1
    confidence: high

  - id: guardian-photos
    name: Photographs of the guardian and the child
    required: always
    condition: account records
    source: S1
    confidence: medium

  - id: guardianship-proof
    name: Legal guardianship proof (where guardian is not a natural parent)
    required: conditional
    condition: legal guardian cases
    source: S1
    confidence: high

  - id: initial-deposit
    name: Initial deposit (minimum Rs.250)
    required: always
    condition: account activation
    source: S1
    confidence: high
```

## Notes

- No income or caste documents are required.
- Bank-specific forms may mirror Form-1; both post office and
  authorised-bank channels accept the rule-prescribed application [S2].
