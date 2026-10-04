---
type: "Government Scheme Documents"
title: "Meity's Data Centre Policy — Documents"
description: "Document requirements for ROW-404."
scheme_id: "ROW-404"
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
    resource: "https://meity.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://meity.gov.in/offerings"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://meity.gov.in/documents/act-and-policies"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.meity.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Meity's Data Centre Policy — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: detailed-project-report-dpr
    name: "Detailed Project Report (DPR)"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-or-lease-documents
    name: "Land ownership or lease documents"
    required: always
    source: S1
    confidence: medium
  - id: power-availability-assurance-from-utilit
    name: "Power availability assurance from utility"
    required: always
    source: S1
    confidence: medium
  - id: connectivity-plan-fibre-bandwidth-redund
    name: "Connectivity plan (fibre, bandwidth, redundancy)"
    required: always
    source: S1
    confidence: medium
  - id: environmental-clearance-certificate
    name: "Environmental clearance certificate"
    required: always
    source: S1
    confidence: medium
  - id: fire-safety-and-structural-stability-app
    name: "Fire safety and structural stability approvals"
    required: always
    source: S1
    confidence: medium
  - id: board-resolution-authorizing-the-project
    name: "Board resolution authorizing the project"
    required: always
    source: S1
    confidence: medium
  - id: promoter-s-kyc-and-financial-statements
    name: "Promoter's KYC and financial statements"
    required: always
    source: S1
    confidence: medium
  - id: fdi-approval-if-applicable
    name: "FDI approval (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.