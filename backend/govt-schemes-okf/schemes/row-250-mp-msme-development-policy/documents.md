---
type: "Government Scheme Documents"
title: "MP MSME Development Policy — Documents"
description: "Document requirements for ROW-250."
scheme_id: "ROW-250"
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
    resource: "https://mpmsme.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mpmsme.gov.in/website/how-to-apply"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mpmsme.gov.in/mpmsmecms/Uploaded%20Document/Documents/MP%20MSME%20Incentive%20Scheme%202025.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mpmsme.gov.in/mpmsmecms/Uploaded%20Document/Documents/Application%20Proforma%20and%20Affidavit.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MP MSME Development Policy — Documents

```yaml
documents:
  - id: udyam-registration-certificate
    name: "Udyam Registration Certificate"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: aadhaar-of-the-authorized-signatory
    name: "Aadhaar of the authorized signatory"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-cancelled-cheque-or
    name: "Bank account details (cancelled cheque or passbook)"
    required: always
    source: S1
    confidence: medium
  - id: project-report-or-business-plan
    name: "Project report or business plan"
    required: always
    source: S1
    confidence: medium
  - id: quotations-for-machinery-equipment
    name: "Quotations for machinery/equipment"
    required: always
    source: S1
    confidence: medium
  - id: land-allotment-order-or-lease-agreement
    name: "Land allotment order or lease agreement (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: caste-certificate-for-sc-st-beneficiarie
    name: "Caste certificate (for SC/ST beneficiaries)"
    required: always
    source: S1
    confidence: medium
  - id: gender-certificate-for-women-entrepreneu
    name: "Gender certificate (for women entrepreneurs)"
    required: always
    source: S1
    confidence: medium
  - id: affidavit-as-per-prescribed-format
    name: "Affidavit as per prescribed format"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.