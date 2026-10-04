---
type: "Government Scheme Documents"
title: "Design Clinic Scheme for MSMEs — Documents"
description: "Document requirements for ROW-520."
scheme_id: "ROW-520"
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
    resource: "https://designclinic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Design Clinic Scheme for MSMEs — Documents

```yaml
documents:
  - id: msme-registration-certificate-udyam-regi
    name: "MSME Registration Certificate (Udyam Registration)"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-of-the-enterprise
    name: "PAN Card of the Enterprise"
    required: always
    source: S1
    confidence: medium
  - id: gst-registration-certificate-if-applicab
    name: "GST Registration Certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: bank-account-details-of-the-enterprise
    name: "Bank Account Details of the Enterprise"
    required: always
    source: S1
    confidence: medium
  - id: product-details-and-specifications
    name: "Product Details and Specifications"
    required: always
    source: S1
    confidence: medium
  - id: project-proposal-outlining-design-requir
    name: "Project Proposal outlining design requirements and expected benefits"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.