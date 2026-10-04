---
type: "Government Scheme Documents"
title: "BIS Certification Scheme — Documents"
description: "Document requirements for ROW-20."
scheme_id: "ROW-20"
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
    resource: "https://bis.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://bis.gov.in/index.php/apply-for-a-license"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://bis.gov.in/wp-content/uploads/2022/03/EC-Notification-16.03.2022.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://bis.gov.in/wp-content/uploads/2021/03/Review_Statement_2019-20.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://bis.gov.in/wp-content/uploads/2020/03/ReviewStatementofBISAR201819.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "www.manakonline.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# BIS Certification Scheme — Documents

```yaml
documents:
  - id: application-form
    name: "Application form"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-factory-address
    name: "Proof of factory address"
    required: always
    source: S1
    confidence: medium
  - id: product-details-and-specifications
    name: "Product details and specifications"
    required: always
    source: S1
    confidence: medium
  - id: quality-control-arrangements
    name: "Quality control arrangements"
    required: always
    source: S1
    confidence: medium
  - id: test-reports-from-bis-or-recognized-labs
    name: "Test reports from BIS or recognized labs"
    required: always
    source: S1
    confidence: medium
  - id: fee-payment-proof
    name: "Fee payment proof"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.