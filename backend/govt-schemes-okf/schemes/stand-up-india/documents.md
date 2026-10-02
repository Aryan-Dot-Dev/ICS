---
type: Government Scheme Documents
title: Stand-Up India — Documents
description: Document requirements for Stand-Up India applications.
scheme_id: SUI
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
    resource: https://www.standupmitra.in/
    title: Standup Mitra — Official portal
    author: SIDBI
    last_modified: not_verified
---

# Stand-Up India — Documents

```yaml
documents:
  - id: identity-kyc
    name: KYC documents (Aadhaar, PAN, etc.)
    required: always
    condition: identity verification
    source: S1
    confidence: high

  - id: caste-certificate
    name: Caste certificate (SC/ST)
    required: conditional
    condition: applicants claiming the SC/ST eligibility branch
    source: S1
    confidence: high

  - id: project-report
    name: Project report / business plan
    required: always
    condition: bank appraisal of the greenfield venture
    source: S1
    confidence: high

  - id: bank-statements
    name: Bank statements (personal/business)
    required: conditional
    condition: bank credit appraisal
    source: S1
    confidence: medium

  - id: defaulter-declaration
    name: Declaration of not being a defaulter to any bank/financial institution
    required: always
    condition: eligibility confirmation
    source: S1
    confidence: high

  - id: licenses-registrations
    name: Trade licences / registrations as applicable to the activity
    required: potentially_requested
    condition: activity-specific regulatory needs
    source: S1
    confidence: medium

  - id: training-proof
    name: Skill/training certificate (where relevant to the activity)
    required: potentially_requested
    condition: bank's appraisal discretion
    source: S1
    confidence: low
```

## Notes

- Exact checklists vary by bank; the list above covers scheme-level
  requirements from Standup Mitra [S1].
- Women applicants do not need any additional document beyond KYC (the
  woman branch is identity-based, not document-intensive).
