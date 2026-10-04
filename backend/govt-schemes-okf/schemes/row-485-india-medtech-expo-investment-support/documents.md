---
type: "Government Scheme Documents"
title: "India MedTech Expo & Investment Support — Documents"
description: "Document requirements for ROW-485."
scheme_id: "ROW-485"
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
    resource: "https://pharmaceuticals.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# India MedTech Expo & Investment Support — Documents

```yaml
documents:
  - id: company-profile-or-brochure
    name: "Company profile or brochure"
    required: always
    source: S1
    confidence: medium
  - id: product-details-and-specifications
    name: "Product details and specifications"
    required: always
    source: S1
    confidence: medium
  - id: innovation-summary-or-pitch-deck
    name: "Innovation summary or pitch deck"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-or-registra
    name: "Certificate of incorporation or registration"
    required: always
    source: S1
    confidence: medium
  - id: details-of-funding-or-investment-sought
    name: "Details of funding or investment sought (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.