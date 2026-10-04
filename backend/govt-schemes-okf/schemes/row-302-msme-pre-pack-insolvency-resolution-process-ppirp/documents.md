---
type: "Government Scheme Documents"
title: "MSME Pre-Pack Insolvency Resolution Process (PPIRP) — Documents"
description: "Document requirements for ROW-302."
scheme_id: "ROW-302"
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
    resource: "https://ibbi.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://ibbi.gov.in/intimation-applications/apply-iaaa"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://ibbi.gov.in/uploads/whatsnew/f25dea596c4daa58ae8eff7d3ab701eb.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://ibbi.gov.in/uploads/whatsnew/81700dc80ec2b6c873809b3a747eb932.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# MSME Pre-Pack Insolvency Resolution Process (PPIRP) — Documents

```yaml
documents:
  - id: resolution-plan
    name: "Resolution Plan"
    required: always
    source: S1
    confidence: medium
  - id: information-memorandum
    name: "Information Memorandum"
    required: always
    source: S1
    confidence: medium
  - id: evaluation-matrix
    name: "Evaluation Matrix"
    required: always
    source: S1
    confidence: medium
  - id: declaration-under-section-29a-of-the-ins
    name: "Declaration under Section 29A of the Insolvency and Bankruptcy Code, 2016"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-consent-of-financial-creditors
    name: "Proof of consent of financial creditors (not less than 66% by value)"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-of-the-corp
    name: "Certificate of incorporation of the corporate debtor"
    required: always
    source: S1
    confidence: medium
  - id: latest-audited-financial-statements
    name: "Latest audited financial statements"
    required: always
    source: S1
    confidence: medium
  - id: details-of-claims-of-financial-and-opera
    name: "Details of claims of financial and operational creditors"
    required: always
    source: S1
    confidence: medium
  - id: valuation-reports-if-any
    name: "Valuation reports (if any)"
    required: conditional
    source: S1
    confidence: medium
  - id: performance-guarantee-as-per-regulation
    name: "Performance guarantee (as per regulation 36B(4A) of CIRP Regulations)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.