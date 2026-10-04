---
type: "Government Scheme Documents"
title: "National Horticulture Mission (NHM) — Documents"
description: "Document requirements for ROW-162."
scheme_id: "ROW-162"
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
    resource: "https://nhm.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Horticulture Mission (NHM) — Documents

```yaml
documents:
  - id: application-form
    name: "Application form"
    required: always
    source: S1
    confidence: medium
  - id: project-proposal
    name: "Project proposal"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-lease-documents
    name: "Land ownership/lease documents"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: aadhaar-card
    name: "Aadhaar card"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-if-applicable
    name: "PAN card (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: quotations-for-inputs-equipment
    name: "Quotations for inputs/equipment"
    required: always
    source: S1
    confidence: medium
  - id: training-certificates-if-required
    name: "Training certificates (if required)"
    required: conditional
    source: S1
    confidence: medium
  - id: other-documents-as-specified-by-shm
    name: "Other documents as specified by SHM"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.