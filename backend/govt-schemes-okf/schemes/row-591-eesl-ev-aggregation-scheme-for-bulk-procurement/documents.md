---
type: "Government Scheme Documents"
title: "EESL EV Aggregation Scheme for Bulk Procurement — Documents"
description: "Document requirements for ROW-591."
scheme_id: "ROW-591"
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
    resource: "https://eeslindia.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://eeslindia.org/hi/electric-vehicles-2/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# EESL EV Aggregation Scheme for Bulk Procurement — Documents

```yaml
documents:
  - id: memorandum-of-understanding-mou-or-agree
    name: "Memorandum of Understanding (MoU) or agreement with EESL"
    required: always
    source: S1
    confidence: medium
  - id: details-of-vehicle-and-charging-infrastr
    name: "Details of vehicle and charging infrastructure requirements"
    required: always
    source: S1
    confidence: medium
  - id: authorization-from-competent-authority-f
    name: "Authorization from competent authority for participation"
    required: always
    source: S1
    confidence: medium
  - id: bank-details-for-payment-processing
    name: "Bank details for payment processing"
    required: always
    source: S1
    confidence: medium
  - id: gst-registration-documents-if-applicable
    name: "GST registration documents (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.