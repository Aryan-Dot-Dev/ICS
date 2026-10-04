---
type: "Government Scheme Documents"
title: "Startup GST Exemption & Composition Scheme — Documents"
description: "Document requirements for ROW-413."
scheme_id: "ROW-413"
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
    resource: "https://www.gst.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://gst.gov.in/help/refund"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://gst.gov.in/help/enrollmentwithgst"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Startup GST Exemption & Composition Scheme — Documents

```yaml
documents:
  - id: gst-registration-certificate
    name: "GST Registration Certificate"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-business-entity
    name: "PAN of the business entity"
    required: always
    source: S1
    confidence: medium
  - id: details-of-aggregate-annual-turnover
    name: "Details of aggregate annual turnover"
    required: always
    source: S1
    confidence: medium
  - id: declaration-of-eligibility-for-compositi
    name: "Declaration of eligibility for Composition Scheme"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-linked-to-gstin
    name: "Bank account details linked to GSTIN"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.