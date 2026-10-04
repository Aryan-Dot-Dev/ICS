---
type: "Government Scheme Documents"
title: "National Drone Policy 2021 — Documents"
description: "Document requirements for ROW-581."
scheme_id: "ROW-581"
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
    resource: "https://dgca.gov.in/digigov-portal"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dgca.gov.in/digigov-portal/jsp/dgca/topHeader/aZIndex/AtoZindex.jsp"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://dgca.gov.in/digigov-portal/jsp/dgca/footerLink/WebsitePolicy.jsp"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://dgca.gov.in/digigov-portal/jsp/dgca/footerLink/PrivacyPolicy.jsp"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://www.dgca.gov.in/digigov-portal"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Drone Policy 2021 — Documents

```yaml
documents:
  - id: proof-of-identity-aadhaar-pan-passport
    name: "Proof of identity (Aadhaar, PAN, passport)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-address
    name: "Proof of address"
    required: always
    source: S1
    confidence: medium
  - id: drone-specifications-make-model-serial-n
    name: "Drone specifications (make, model, serial number, weight, dimensions)"
    required: always
    source: S1
    confidence: medium
  - id: manufacturer-s-invoice-or-self-declarati
    name: "Manufacturer’s invoice or self-declaration for indigenous drones"
    required: always
    source: S1
    confidence: medium
  - id: details-of-remote-pilot-s-including-trai
    name: "Details of remote pilot(s) including training certificates"
    required: always
    source: S1
    confidence: medium
  - id: insurance-certificate-if-applicable
    name: "Insurance certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: security-clearance-for-certain-categorie
    name: "Security clearance (for certain categories or operations)"
    required: always
    source: S1
    confidence: medium
  - id: undertaking-of-compliance-with-operation
    name: "Undertaking of compliance with operational safety procedures"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.