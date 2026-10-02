---
type: Government Scheme Documents
title: NMMSS — Documents
description: Document requirements for NMMSS application.
scheme_id: NMMSS
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
    resource: https://scholarships.gov.in/public/FAQ/NMSSS_FAQ.pdf
    title: NMMSS FAQ (NSP)
    author: Department of School Education & Literacy
    last_modified: not_verified
---

# NMMSS — Documents

```yaml
documents:
  - id: income-certificate
    name: Income certificate (parental income ≤ Rs.3.5 lakh)
    required: always
    condition: means test
    source: S1
    confidence: high

  - id: class8-marksheet
    name: Class VIII marksheet
    required: always
    condition: ≥55% criterion (relaxations apply)
    source: S1
    confidence: high

  - id: school-certificate
    name: School certificate / bonafide (government/aided/local-body school)
    required: always
    condition: institution-type eligibility
    source: S1
    confidence: high

  - id: aadhaar
    name: Aadhaar card (student)
    required: always
    condition: NSP OTR/identity
    source: S1
    confidence: high

  - id: bank-account
    name: Student's own Aadhaar-linked bank account
    required: always
    condition: DBT
    source: S1
    confidence: high

  - id: caste-certificate
    name: Caste certificate (SC/ST where claiming relaxation)
    required: conditional
    condition: mark relaxation claims
    source: S1
    confidence: medium

  - id: disability-certificate
    name: Disability certificate (where claiming relaxation)
    required: conditional
    condition: PwD relaxation claims
    source: S1
    confidence: medium

  - id: previous-year-marksheet
    name: Previous year marksheet
    required: conditional
    condition: renewal (Class 10–12 continuation)
    source: S1
    confidence: high
```

## Notes

- Exam-admit-card/qualification records are maintained by the State exam
  authority; NSP verification pulls from state nodal data.
