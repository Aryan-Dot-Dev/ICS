---
type: Government Scheme Documents
title: NSP / PM-USP CSSS — Documents
description: Document requirements for CSSS application on NSP.
scheme_id: NSP-CSSS
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
    resource: https://scholarships.gov.in/
    title: National Scholarship Portal
    author: Government of India
    last_modified: not_verified
  - id: S2
    resource: https://scholarships.gov.in/public/schemeGuidelines/Guidelines_DOHE_CSSS.pdf
    title: PM-USP CSSS Guidelines
    author: Department of Higher Education, Ministry of Education
    last_modified: not_verified
---

# NSP / PM-USP CSSS — Documents

```yaml
documents:
  - id: aadhaar
    name: Aadhaar card (student)
    required: always
    condition: NSP OTR / identity and DBT
    source: S1
    confidence: high

  - id: income-certificate
    name: Income certificate (gross parental/family income)
    required: always
    condition: income ceiling verification (issued by competent authority per State norms)
    source: S2
    confidence: high

  - id: class12-marksheet
    name: Class-XII marksheet (qualifying exam)
    required: always
    condition: merit/percentile verification
    source: S2
    confidence: high

  - id: previous-year-marksheet
    name: Previous year marksheet
    required: conditional
    condition: renewal applications (≥50% criterion)
    source: S3
    confidence: high

  - id: bonafide-certificate
    name: Institution bonafide / admission proof
    required: always
    condition: enrolment verification by institution
    source: S1
    confidence: high

  - id: bank-account
    name: Student's own Aadhaar-linked bank account / passbook
    required: always
    condition: DBT disbursement
    source: S1
    confidence: high

  - id: fee-receipt
    name: Fee receipt (as demanded by institution/state node)
    required: potentially_requested
    condition: varies by verification practice
    source: S1
    confidence: low
```

## Notes

- Caste certificate is **not** required for CSSS (it is not
  category-based); it IS required for category scholarships (e.g.,
  [PMS-SC](../pms-sc/documents.md)).
