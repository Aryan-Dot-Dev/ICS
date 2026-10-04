---
type: "Government Scheme Documents"
title: "Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) — Documents"
description: "Document requirements for ROW-87."
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
# Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) — Documents

```yaml
documents:
  - id: caste-certificate
    name: "Caste certificate"
    required: always
    source: S1
    confidence: medium
  - id: income-certificate
    name: "Income certificate"
    required: always
    source: S1
    confidence: medium
  - id: mark-sheets-of-previous-qualifying-exami
    name: "Mark sheets of previous qualifying examination"
    required: always
    source: S1
    confidence: medium
  - id: bank-passbook-showing-aadhaar-seeding
    name: "Bank passbook showing Aadhaar seeding"
    required: always
    source: S1
    confidence: medium
  - id: aadhaar-card
    name: "Aadhaar card"
    required: always
    source: S1
    confidence: medium
  - id: admission-proof-from-educational-institu
    name: "Admission proof from educational institution"
    required: always
    source: S1
    confidence: medium
  - id: fee-receipt-if-applicable
    name: "Fee receipt (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: domicile-certificate
    name: "Domicile certificate"
    required: always
    source: S1
    confidence: medium
  - id: passport-size-photograph
    name: "Passport size photograph"
    required: always
    source: S1
    confidence: medium
  - id: declaration-form
    name: "Declaration form"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.