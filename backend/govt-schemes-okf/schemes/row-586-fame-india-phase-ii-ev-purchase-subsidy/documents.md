---
type: "Government Scheme Documents"
title: "FAME India Phase II – EV Purchase Subsidy — Documents"
description: "Document requirements for ROW-586."
scheme_id: "ROW-586"
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
    resource: "https://fame2.heavyindustries.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# FAME India Phase II – EV Purchase Subsidy — Documents

```yaml
documents:
  - id: vehicle-invoice
    name: "Vehicle invoice"
    required: always
    source: S1
    confidence: medium
  - id: registration-certificate
    name: "Registration certificate"
    required: always
    source: S1
    confidence: medium
  - id: battery-specification-sheet
    name: "Battery specification sheet"
    required: always
    source: S1
    confidence: medium
  - id: oem-approval-certificate-under-fame-ii
    name: "OEM approval certificate under FAME II"
    required: always
    source: S1
    confidence: medium
  - id: customer-and-vehicle-details-for-subsidy
    name: "Customer and vehicle details for subsidy claim"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.