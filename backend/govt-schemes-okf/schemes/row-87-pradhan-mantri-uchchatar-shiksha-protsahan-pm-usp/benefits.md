---
type: "Government Scheme Benefits"
title: "Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) — Benefits"
description: "Benefit objects for ROW-87."
scheme_id: "ROW-87"
okf_version: "0.2"
generated:
  by: "process:runs-okf-generator"
  at: 2026-10-02
verified:
  - by: "process:runs-import-check"
    at: 2026-10-02
    note: "field presence and citations re-checked against the source ai_summary.json; content not re-verified against the live portal"
status: draft
stale_after: 2026-12-31
sources:
  - id: S1
    resource: "https://scholarship.up.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://scholarship.up.gov.in/index-hi.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://scholarship.up.gov.in/RegisterInstitute.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://scholarship.up.gov.in/RegistrationNew.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://scholarship.up.gov.in/Student2425/RegistrationNew.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: scholarship
    name: "benefits include maintenance allowance, tuition fee reimbursement, and"
    amount: not_verified
    detail: "Financial benefits include maintenance allowance, tuition fee reimbursement, and other educational expenses."
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "Non-financial benefits include access to education for disadvantaged groups"
    amount: not_verified
    detail: "Non-financial benefits include access to education for disadvantaged groups, reduced dropout rates, and empowerment through educational support."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: scholarship
    name: "Specific amounts vary by category and course"
    amount:
      value: 150
      currency: INR
      frequency: monthly
      is_maximum: true
    detail: "Specific amounts vary by category and course: pre-matric scholarship provides up to ₹150 per month for 10 months, while post-matric includes fee reimbursement and maintenance allowance as per government norms."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: cash-transfer
    name: "support is provided through Direct Benefit Transfer"
    amount: not_verified
    detail: "Financial support is provided through Direct Benefit Transfer (DBT) to students' Aadhaar-linked bank accounts."
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: scholarship
    name: "scheme covers maintenance allowance, tuition fees, and other"
    amount: not_verified
    detail: "The scheme covers maintenance allowance, tuition fees, and other educational charges."
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: service
    name: "For pre-matric"
    amount:
      value: 150
      currency: INR
      frequency: monthly
    detail: "For pre-matric (classes 9-10), the rate is ₹150 per month for 10 months."
    source: S1
    confidence: medium
  - benefit_id: BEN-007
    type: scholarship
    name: "For post-matric, it includes full tuition fee reimbursement and"
    amount: not_verified
    detail: "For post-matric, it includes full tuition fee reimbursement and maintenance allowance as per government norms, with disbursement tracked via the Public Financial Management System (PFMS)."
    source: S1
    confidence: medium
```
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.