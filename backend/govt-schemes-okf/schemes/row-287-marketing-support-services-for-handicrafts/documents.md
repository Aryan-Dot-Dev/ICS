---
type: "Government Scheme Documents"
title: "Marketing Support & Services for Handicrafts — Documents"
description: "Document requirements for ROW-287."
scheme_id: "ROW-287"
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
    resource: "https://handicrafts.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Marketing Support & Services for Handicrafts — Documents

```yaml
documents:
  - id: application-form
    name: "Application form"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-identity-and-address-of-the-app
    name: "Proof of identity and address of the applicant"
    required: always
    source: S1
    confidence: medium
  - id: registration-certificate-if-applicable-a
    name: "Registration certificate (if applicable) as handicraft producer/artisan"
    required: conditional
    source: S1
    confidence: medium
  - id: details-of-the-handicraft-products-to-be
    name: "Details of the handicraft products to be showcased"
    required: always
    source: S1
    confidence: medium
  - id: quotation-or-invoice-for-stall-rent-and
    name: "Quotation or invoice for stall rent and other expenses"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-reimbursement
    name: "Bank account details for reimbursement"
    required: always
    source: S1
    confidence: medium
  - id: any-other-document-as-specified-by-the-i
    name: "Any other document as specified by the implementing agency"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.