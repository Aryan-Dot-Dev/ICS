---
type: "Government Scheme Documents"
title: "PM SVANidhi Plus (Micro Credit for Street Vendors) — Documents"
description: "Document requirements for ROW-392."
scheme_id: "ROW-392"
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
    resource: "https://pmsvanidhi.mohua.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmsvanidhi.mohua.gov.in/Home/PreApplication"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmsvanidhi.mohua.gov.in/Home/States"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM SVANidhi Plus (Micro Credit for Street Vendors) — Documents

```yaml
documents:
  - id: certificate-of-vending-cov-or-identity-c
    name: "Certificate of Vending (CoV) or Identity Card (ID Card) issued by ULB or Town Vending Committee"
    required: always
    source: S1
    confidence: medium
  - id: survey-reference-number-srn-from-ulb-led
    name: "Survey Reference Number (SRN) from ULB-led survey"
    required: always
    source: S1
    confidence: medium
  - id: letter-of-recommendation-lor-from-ulb-to
    name: "Letter of Recommendation (LoR) from ULB/Town Vending Committee (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: declaration-of-one-time-assistance-durin
    name: "Declaration of One Time assistance during Covid lockdown (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: proof-of-membership-in-vending-hawkers-a
    name: "Proof of membership in vending/Hawkers association (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: aadhaar-linked-mobile-number-for-e-kyc
    name: "Aadhaar-linked mobile number for e-KYC"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.