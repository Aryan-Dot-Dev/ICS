---
type: "Government Scheme Documents"
title: "Domestic Steel Procurement Preference Policy — Documents"
description: "Document requirements for ROW-380."
scheme_id: "ROW-380"
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
    resource: "https://steel.gov.in/policy-providing-preference-domestically"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://steel.gov.in/sites/default/files/2025-12/Citizens-Charter-2025.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://steel.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Domestic Steel Procurement Preference Policy — Documents

```yaml
documents:
  - id: procurement-tender-documents
    name: "Procurement tender documents"
    required: always
    source: S1
    confidence: medium
  - id: technical-specifications-of-required-ste
    name: "Technical specifications of required steel products"
    required: always
    source: S1
    confidence: medium
  - id: value-addition-calculation-sheet-15
    name: "Value addition calculation sheet (≥15%)"
    required: always
    source: S1
    confidence: medium
  - id: domestic-availability-assessment-report
    name: "Domestic availability assessment report"
    required: always
    source: S1
    confidence: medium
  - id: exemption-request-form-if-applicable
    name: "Exemption request form (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: supplier-declarations-on-domestic-manufa
    name: "Supplier declarations on domestic manufacturing"
    required: always
    source: S1
    confidence: medium
  - id: mill-test-certificates
    name: "Mill test certificates"
    required: always
    source: S1
    confidence: medium
  - id: bill-of-lading-shipping-documents-for-im
    name: "Bill of lading / shipping documents (for imported items, if any)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.