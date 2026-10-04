---
type: "Government Scheme Documents"
title: "Udyam Registration Portal — Documents"
description: "Document requirements for ROW-18."
scheme_id: "ROW-18"
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
    resource: "https://udyamregistration.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://udyamregistration.gov.in/docs/Udyam_Metadata.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://udyamregistration.gov.in/docs/Buletin-I-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://udyamregistration.gov.in/docs/Buletin-II-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://udyamregistration.gov.in/docs/Buletin-III-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://udyamregistration.gov.in/docs/Buletin-IV-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://udyamregistration.gov.in/docs/Buletin-V-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://udyamregistration.gov.in/docs/Buletin-VI-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://udyamregistration.gov.in/docs/Buletin-VII-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://udyamregistration.gov.in/docs/Buletin-VIII-Analysis-of-Udyam-Registration-Data.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://udyamregistration.gov.in/docs/Udyam_Clarification_28092022.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://udyamregistration.gov.in/docs/261838_220191.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S13
    resource: "https://udyamregistration.gov.in/docs/225669.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S14
    resource: "https://rbidocs.rbi.org.in/rdocs/notification/PDFs/NT272F8F1407DB8840F28E9300336B910E44.PDF"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S15
    resource: "https://udyamregistration.gov.in/docs/SO1296.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S16
    resource: "https://udyamregistration.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Udyam Registration Portal — Documents

```yaml
documents:
  - id: aadhaar-number
    name: "Aadhaar number"
    required: always
    source: S1
    confidence: medium
  - id: pan-for-all-enterprises-except-proprieto
    name: "PAN (for all enterprises except proprietorships not registered under any Act)"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: details-of-investment-in-plant-and-machi
    name: "Details of investment in plant and machinery or equipment"
    required: always
    source: S1
    confidence: medium
  - id: turnover-details
    name: "Turnover details"
    required: always
    source: S1
    confidence: medium
  - id: social-category-and-gender-of-entreprene
    name: "Social category and gender of entrepreneur"
    required: always
    source: S1
    confidence: medium
  - id: nic-code-for-economic-activity
    name: "NIC code for economic activity"
    required: always
    source: S1
    confidence: medium
  - id: enterprise-type-proprietorship-partnersh
    name: "Enterprise type (proprietorship, partnership, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: geographic-location-and-contact-details
    name: "Geographic location and contact details"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.