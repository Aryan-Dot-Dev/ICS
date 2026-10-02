---
type: Government Scheme Documents
title: PMS-SC — Documents
description: Document requirements for PMS-SC application.
scheme_id: PMS-SC
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
    resource: https://socialjustice.gov.in/
    title: MoSJE — PMS-SC pages
    author: Ministry of Social Justice and Empowerment
    last_modified: not_verified
  - id: S2
    resource: https://scholarships.gov.in/
    title: National Scholarship Portal
    author: Government of India
    last_modified: not_verified
---

# PMS-SC — Documents

```yaml
documents:
  - id: caste-certificate
    name: SC caste certificate (competent authority)
    required: always
    condition: category eligibility
    source: S1
    confidence: high

  - id: income-certificate
    name: Income certificate (parental income ≤ Rs.2.5 lakh)
    required: always
    condition: income ceiling verification
    source: S1
    confidence: high

  - id: marksheets
    name: Previous qualifying examination marksheets
    required: always
    condition: academic verification and renewal
    source: S1
    confidence: high

  - id: admission-proof
    name: Admission/bonafide certificate from institution
    required: always
    condition: enrolment verification
    source: S1
    confidence: high

  - id: bank-account
    name: Student's own Aadhaar-linked bank account details
    required: always
    condition: DBT of maintenance allowance
    source: S2
    confidence: high

  - id: aadhaar
    name: Aadhaar card (student)
    required: always
    condition: NSP OTR/identity
    source: S2
    confidence: high

  - id: fee-receipt
    name: Fee receipt/structure from institution
    required: conditional
    condition: fee-reimbursement processing
    source: S1
    confidence: high

  - id: disability-certificate
    name: Disability certificate (where claiming PwD provisions)
    required: conditional
    condition: PwD-linked benefits
    source: S1
    confidence: medium

  - id: domicile-proof
    name: Domicile/residence proof (State-specific)
    required: conditional
    condition: State implementation verification
    source: S1
    confidence: medium
```

## Notes

- Some States accept self-declared income undertakings for lower slabs;
  certificate rules are State-specific — mark extras as
  `state_variant: true`.
