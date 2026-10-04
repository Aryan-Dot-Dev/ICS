---
type: "Government Scheme Documents"
title: "Soil Health Card Scheme — Documents"
description: "Document requirements for ROW-421."
scheme_id: "ROW-421"
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
    resource: "https://soilhealth.dac.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://soilhealth.dac.gov.in/aboutus"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://soilhealth.dac.gov.in/scheme-progress"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://soilhealth.dac.gov.in/home"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://soilhealth.dac.gov.in/dashboard"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://soilhealth.dac.gov.in/GeneralResources"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://soilhealth.dac.gov.in/assets/PM-%20RKVY%20Guidelines%20as%20on%2014.11.2024.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Soil Health Card Scheme — Documents

```yaml
documents:
  - id: farmer-s-name-and-address
    name: "Farmer's name and address"
    required: always
    source: S1
    confidence: medium
  - id: land-details-survey-number-location
    name: "Land details (survey number, location)"
    required: always
    source: S1
    confidence: medium
  - id: crop-details
    name: "Crop details"
    required: always
    source: S1
    confidence: medium
  - id: details-of-fertilizers-previously-applie
    name: "Details of fertilizers previously applied (if available)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.