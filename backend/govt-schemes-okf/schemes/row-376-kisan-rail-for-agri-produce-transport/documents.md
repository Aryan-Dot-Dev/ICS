---
type: "Government Scheme Documents"
title: "Kisan Rail for Agri Produce Transport — Documents"
description: "Document requirements for ROW-376."
scheme_id: "ROW-376"
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
    resource: "http://indianrailways.gov.in/railwayboard/view_section.jsp?id=0%2C1%2C304%2C366%2C523%2C2505&lang=0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://indianrailways.gov.in/railwayboard/view_section.jsp?id=0%2C1%2C304%2C366%2C530%2C566&lang=0"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://indianrailways.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Kisan Rail for Agri Produce Transport — Documents

```yaml
documents:
  - id: proof-of-ownership-or-authorization-for
    name: "Proof of ownership or authorization for the agricultural produce"
    required: always
    source: S1
    confidence: medium
  - id: details-of-the-consignment-type-quantity
    name: "Details of the consignment (type, quantity, origin, destination)"
    required: always
    source: S1
    confidence: medium
  - id: farmer-id-or-fpo-registration-document-i
    name: "Farmer ID or FPO registration document (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: vehicle-or-loading-details-for-first-las
    name: "Vehicle or loading details for first/last mile connectivity"
    required: always
    source: S1
    confidence: medium
  - id: government-issued-id-proof-of-the-consig
    name: "Government-issued ID proof of the consignor"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.