---
type: "Government Scheme Documents"
title: "Karnataka Digital Economy Mission (KDEM) — Documents"
description: "Document requirements for ROW-536."
scheme_id: "ROW-536"
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
    resource: "https://startup.karnataka.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Karnataka Digital Economy Mission (KDEM) — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: gst-registration-certificate-if-applicab
    name: "GST registration certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: aadhaar-and-pan-of-authorized-signatory
    name: "Aadhaar and PAN of authorized signatory"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: business-plan-or-pitch-deck
    name: "Business plan or pitch deck"
    required: always
    source: S1
    confidence: medium
  - id: details-of-technology-or-innovation-bein
    name: "Details of technology or innovation being developed"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-presence-or-operations-in-karna
    name: "Proof of presence or operations in Karnataka"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.