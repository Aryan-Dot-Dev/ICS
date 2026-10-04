---
type: "Government Scheme Documents"
title: "National Beekeeping & Honey Mission (NBHM) — Documents"
description: "Document requirements for ROW-148."
scheme_id: "ROW-148"
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
    resource: "https://nbhm.dac.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Beekeeping & Honey Mission (NBHM) — Documents

```yaml
documents:
  - id: application-form-available-at-nacfed-off
    name: "Application form (available at NACFED offices or website)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-identity-aadhaar-voter-id-pan
    name: "Proof of identity (Aadhaar/Voter ID/PAN)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-address
    name: "Proof of address"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-passbook-cancelled
    name: "Bank account details (passbook/cancelled cheque)"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-lease-document-if-applica
    name: "Land ownership/lease document (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: project-report-detailing-beekeeping-acti
    name: "Project report detailing beekeeping activity plan"
    required: always
    source: S1
    confidence: medium
  - id: quotations-from-empaneled-suppliers-for
    name: "Quotations from empaneled suppliers for equipment/colonies"
    required: always
    source: S1
    confidence: medium
  - id: training-completion-certificate-if-train
    name: "Training completion certificate (if training was attended)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.