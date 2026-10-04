---
type: "Government Scheme Documents"
title: "Atmanirbhar Bharat Defence Production Policy — Documents"
description: "Document requirements for ROW-215."
scheme_id: "ROW-215"
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
    resource: "https://mod.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://mod.gov.in/sites/default/files/DFPDS-2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.mod.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Atmanirbhar Bharat Defence Production Policy — Documents

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
  - id: gst-registration-certificate
    name: "GST Registration Certificate"
    required: always
    source: S1
    confidence: medium
  - id: udyam-registration-for-msmes
    name: "UDYAM Registration (for MSMEs)"
    required: always
    source: S1
    confidence: medium
  - id: product-specifications-and-technical-bro
    name: "Product specifications and technical brochures"
    required: always
    source: S1
    confidence: medium
  - id: manufacturing-licence-or-industrial-lice
    name: "Manufacturing licence or industrial licence (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: past-performance-certificates-or-supply
    name: "Past performance certificates or supply orders"
    required: always
    source: S1
    confidence: medium
  - id: bank-details-and-cancelled-cheque
    name: "Bank details and cancelled cheque"
    required: always
    source: S1
    confidence: medium
  - id: authorised-signatory-letter
    name: "Authorised signatory letter"
    required: always
    source: S1
    confidence: medium
  - id: declaration-of-compliance-with-defence-s
    name: "Declaration of compliance with defence standards"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.