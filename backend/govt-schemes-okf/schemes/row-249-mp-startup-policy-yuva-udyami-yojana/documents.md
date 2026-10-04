---
type: "Government Scheme Documents"
title: "MP Startup Policy & Yuva Udyami Yojana — Documents"
description: "Document requirements for ROW-249."
scheme_id: "ROW-249"
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
    resource: "https://mpedistrict.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mpedistrict.gov.in/UI/document/e-districtMP%20v2.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mpedistrict.gov.in/static/docs/MPeDistrict_UserManual.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mpedistrict.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MP Startup Policy & Yuva Udyami Yojana — Documents

```yaml
documents:
  - id: identity-proof-aadhaar-card-voter-id-pan
    name: "Identity Proof (Aadhaar Card, Voter ID, PAN)"
    required: always
    source: S1
    confidence: medium
  - id: address-proof-electricity-bill-rent-agre
    name: "Address Proof (Electricity Bill, Rent Agreement, Aadhaar)"
    required: always
    source: S1
    confidence: medium
  - id: educational-qualification-certificates
    name: "Educational Qualification Certificates"
    required: always
    source: S1
    confidence: medium
  - id: business-plan-project-report
    name: "Business Plan / Project Report"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-cancelled-cheque-or
    name: "Bank Account Details (Cancelled Cheque or Passbook Copy)"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: partnership-deed-or-llp-agreement-if-app
    name: "Partnership Deed or LLP Agreement (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: passport-sized-photographs
    name: "Passport-sized Photographs"
    required: always
    source: S1
    confidence: medium
  - id: declaration-of-no-prior-benefit-from-sim
    name: "Declaration of No Prior Benefit from Similar State Scheme"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-residency-in-madhya-pradesh
    name: "Proof of Residency in Madhya Pradesh"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.