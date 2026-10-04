---
type: "Government Scheme Documents"
title: "National TB Elimination Programme – Digital Initiative — Documents"
description: "Document requirements for ROW-483."
scheme_id: "ROW-483"
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
    resource: "https://nikshay.in/Home/AboutUs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nikshay.in/Home/PrivacyUs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nikshay.in/Home/InformantRegistration"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://nikshay.in/Home/UserFacility"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://nikshay.in/Home/Index"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://nikshay.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National TB Elimination Programme – Digital Initiative — Documents

```yaml
documents:
  - id: state-selection
    name: "State selection"
    required: always
    source: S1
    confidence: medium
  - id: district-selection
    name: "District selection"
    required: always
    source: S1
    confidence: medium
  - id: block-selection
    name: "Block selection"
    required: always
    source: S1
    confidence: medium
  - id: facility-selection
    name: "Facility selection"
    required: always
    source: S1
    confidence: medium
  - id: address-details
    name: "Address details"
    required: always
    source: S1
    confidence: medium
  - id: name
    name: "Name"
    required: always
    source: S1
    confidence: medium
  - id: designation-asha-ngo-volunteer-other-com
    name: "Designation (ASHA, NGO Volunteer, Other Community Volunteer, Private Practitioner, Physician, Nurse, Other Para Medical Staff, Attendant, Citizen, Informal…"
    required: always
    source: S1
    confidence: medium
  - id: primary-contact-number
    name: "Primary contact number"
    required: always
    source: S1
    confidence: medium
  - id: email-address
    name: "Email address"
    required: always
    source: S1
    confidence: medium
  - id: bank-details-ifsc-code-bank-name-account
    name: "Bank details (IFSC Code, Bank Name, Account Number) - if opting for benefits"
    required: always
    source: S1
    confidence: medium
  - id: login-username
    name: "Login username"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.