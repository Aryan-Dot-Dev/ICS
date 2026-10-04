---
type: "Government Scheme Documents"
title: "National Digital Health Mission (NDHM) — Documents"
description: "Document requirements for ROW-199."
scheme_id: "ROW-199"
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
    resource: "https://abdm.gov.in/HMIS-lite"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://abdm.gov.in/abdm-components"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://abha.abdm.gov.in/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://abdm.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Digital Health Mission (NDHM) — Documents

```yaml
documents:
  - id: aadhaar-id-for-abha-hpr-hfr-registration
    name: "Aadhaar ID (for ABHA, HPR, HFR registration)"
    required: always
    source: S1
    confidence: medium
  - id: mobile-number-linked-to-aadhaar-for-otp
    name: "Mobile number linked to Aadhaar (for OTP verification)"
    required: always
    source: S1
    confidence: medium
  - id: personal-details-name-year-of-birth-gend
    name: "Personal details: Name, Year of Birth, Gender, State, District, Email (for ABHA registration)"
    required: always
    source: S1
    confidence: medium
  - id: facility-name-location-operational-statu
    name: "Facility name, location, operational status, services offered, ownership details (for HFR registration)"
    required: always
    source: S1
    confidence: medium
  - id: healthcare-professional-details-for-hpr
    name: "Healthcare professional details (for HPR registration)"
    required: always
    source: S1
    confidence: medium
  - id: credentials-to-create-an-account-on-e-su
    name: "Credentials to create an account on e-Sushrut Clinic"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.