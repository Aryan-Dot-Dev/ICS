---
type: "Government Scheme Documents"
title: "DRDO CEPTAM Scheme — Documents"
description: "Document requirements for ROW-79."
scheme_id: "ROW-79"
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
    resource: "https://drdo.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://drdo.gov.in/drdo/en"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://drdo.gov.in/drdo/hi"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtARDE10062026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://drdo.gov.in/drdo/sites/default/files/vacancy/advtCABS16062026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://www.drdo.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# DRDO CEPTAM Scheme — Documents

```yaml
documents:
  - id: educational-certificates-marksheets-degr
    name: "Educational certificates (marksheets, degree/provisional certificate)"
    required: always
    source: S1
    confidence: medium
  - id: age-proof-birth-certificate-ssc-certific
    name: "Age proof (birth certificate, SSC certificate, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: category-certificate-sc-st-obc-ews-if-cl
    name: "Category certificate (SC/ST/OBC/EWS) if claiming reservation"
    required: always
    source: S1
    confidence: medium
  - id: photo-id-proof-aadhaar-pan-passport-etc
    name: "Photo ID proof (Aadhaar, PAN, passport, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: recent-passport-sized-photograph
    name: "Recent passport-sized photograph"
    required: always
    source: S1
    confidence: medium
  - id: signature
    name: "Signature"
    required: always
    source: S1
    confidence: medium
  - id: any-other-document-as-specified-in-the-a
    name: "Any other document as specified in the advertisement (e.g., experience certificate, NOC)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.