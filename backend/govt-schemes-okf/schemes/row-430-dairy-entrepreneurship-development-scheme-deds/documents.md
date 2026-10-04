---
type: "Government Scheme Documents"
title: "Dairy Entrepreneurship Development Scheme (DEDS) — Documents"
description: "Document requirements for ROW-430."
scheme_id: "ROW-430"
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
    resource: "https://dahd.nic.in/deds"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Dairy Entrepreneurship Development Scheme (DEDS) — Documents

```yaml
documents:
  - id: project-report-with-cost-estimates
    name: "Project report with cost estimates"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-land-ownership-or-lease-agreeme
    name: "Proof of land ownership or lease agreement"
    required: always
    source: S1
    confidence: medium
  - id: beneficiary-identity-proof-aadhaar-pan-e
    name: "Beneficiary identity proof (Aadhaar, PAN, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: quotations-for-equipment-and-civil-works
    name: "Quotations for equipment and civil works"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-training-if-applicable
    name: "Certificate of training (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: no-objection-certificate-from-local-auth
    name: "No Objection Certificate from local authorities (if required)"
    required: conditional
    source: S1
    confidence: medium
  - id: details-of-existing-livestock-for-expans
    name: "Details of existing livestock (for expansion units)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.