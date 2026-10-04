---
type: "Government Scheme Documents"
title: "Exploration Licence for Private Players — Documents"
description: "Document requirements for ROW-387."
scheme_id: "ROW-387"
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
    resource: "https://mines.gov.in/admin/download/685a87f126d2b1750763505.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mines.gov.in/admin/download/685a862b2519d1750763051.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mines.gov.in/admin/download/685a874e549cd1750763342.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://mines.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Exploration Licence for Private Players — Documents

```yaml
documents:
  - id: technical-bid
    name: "Technical Bid"
    required: always
    source: S1
    confidence: medium
  - id: initial-price-offer-ipo
    name: "Initial Price Offer (IPO)"
    required: always
    source: S1
    confidence: medium
  - id: final-price-offer-fpo
    name: "Final Price Offer (FPO)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-indian-nationality
    name: "Proof of Indian Nationality"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-under-compa
    name: "Certificate of Incorporation under Companies Act, 1956"
    required: always
    source: S1
    confidence: medium
  - id: net-worth-certificate-rs-25-crore
    name: "Net worth certificate (≥ Rs. 25 Crore)"
    required: always
    source: S1
    confidence: medium
  - id: geo-scientific-data-for-the-area-if-avai
    name: "Geo-scientific data for the area (if available)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.