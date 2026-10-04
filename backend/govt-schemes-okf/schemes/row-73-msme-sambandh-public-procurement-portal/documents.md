---
type: "Government Scheme Documents"
title: "MSME SAMBANDH (Public Procurement Portal) — Documents"
description: "Document requirements for ROW-73."
scheme_id: "ROW-73"
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
    resource: "https://msme.gov.in/sambandh"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MSME SAMBANDH (Public Procurement Portal) — Documents

```yaml
documents:
  - id: udyam-registration-certificate
    name: "Udyam Registration Certificate"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-enterprise
    name: "PAN of the enterprise"
    required: always
    source: S1
    confidence: medium
  - id: gst-registration-certificate
    name: "GST Registration Certificate"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-for-bid-submission
    name: "Authorization letter for bid submission"
    required: always
    source: S1
    confidence: medium
  - id: technical-and-financial-bid-documents-as
    name: "Technical and financial bid documents as per tender requirements"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.