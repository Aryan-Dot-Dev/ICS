---
type: "Government Scheme Documents"
title: "Ayushman Bharat Digital Mission (ABDM) — Documents"
description: "Document requirements for ROW-82."
scheme_id: "ROW-82"
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
    resource: "https://abdm.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://abdm.gov.in/citizens"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://abdm.gov.in/health-facilities"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://abdm.gov.in/healthcare-professionals"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://abdm.gov.in/health-tech-companies"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://abdm.gov.in/for-states"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://abdm.gov.in/strapicms/uploads/health_management_policy_bac9429a79.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://abdm.gov.in/strapicms/uploads/health_data_management_policy_77208f0d26.pdf?updated_at=2022-05-27T13%3A27%3A06.812Z"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://abdm.gov.in/strapicms/uploads/e_Sushrut_Clinic_Brochure_Design_v3_ad23af76fd.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://abdm.gov.in/HMIS-lite"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://ehmis-lite.in/AHIMSG5/hissso/Login"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://abdm.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Ayushman Bharat Digital Mission (ABDM) — Documents

```yaml
documents:
  - id: aadhaar-id
    name: "Aadhaar ID"
    required: always
    source: S1
    confidence: medium
  - id: aadhaar-linked-mobile-number
    name: "Aadhaar-linked mobile number"
    required: always
    source: S1
    confidence: medium
  - id: hpr-linked-mobile-number
    name: "HPR-linked mobile number"
    required: always
    source: S1
    confidence: medium
  - id: facility-name
    name: "Facility name"
    required: always
    source: S1
    confidence: medium
  - id: location
    name: "Location"
    required: always
    source: S1
    confidence: medium
  - id: operational-status
    name: "Operational status"
    required: always
    source: S1
    confidence: medium
  - id: services-offered
    name: "Services offered"
    required: always
    source: S1
    confidence: medium
  - id: ownership-details
    name: "Ownership details"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.