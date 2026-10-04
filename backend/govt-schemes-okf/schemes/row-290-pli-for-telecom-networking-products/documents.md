---
type: "Government Scheme Documents"
title: "PLI for Telecom & Networking Products — Documents"
description: "Document requirements for ROW-290."
scheme_id: "ROW-290"
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
    resource: "https://dot.gov.in/pli-telecom"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://dot.gov.in/offerings"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PLI for Telecom & Networking Products — Documents

```yaml
documents:
  - id: certificate-of-incorporation
    name: "Certificate of Incorporation"
    required: always
    source: S1
    confidence: medium
  - id: details-of-manufacturing-facility
    name: "Details of manufacturing facility"
    required: always
    source: S1
    confidence: medium
  - id: investment-plan-and-capital-expenditure
    name: "Investment plan and capital expenditure details"
    required: always
    source: S1
    confidence: medium
  - id: product-specifications-and-bis-certifica
    name: "Product specifications and BIS certification (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: gst-registration-and-pan
    name: "GST registration and PAN"
    required: always
    source: S1
    confidence: medium
  - id: undertaking-on-compliance-with-make-in-i
    name: "Undertaking on compliance with Make in India guidelines"
    required: always
    source: S1
    confidence: medium
  - id: base-year-sales-and-projected-incrementa
    name: "Base year sales and projected incremental sales details"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.