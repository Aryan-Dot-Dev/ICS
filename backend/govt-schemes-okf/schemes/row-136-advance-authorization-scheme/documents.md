---
type: "Government Scheme Documents"
title: "Advance Authorization Scheme — Documents"
description: "Document requirements for ROW-136."
scheme_id: "ROW-136"
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
    resource: "https://dgft.gov.in/CP/?opt=advance-authorization"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://content.dgft.gov.in/Website/dgftprod/39108932-5da7-4496-b3a6-d8d9c1c0865b/sugar notification.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.dgft.gov.in/CP/?opt=advance-authorization"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Advance Authorization Scheme — Documents

```yaml
documents:
  - id: pan-card-of-the-applicant
    name: "PAN card of the applicant"
    required: always
    source: S1
    confidence: medium
  - id: importer-exporter-code-iec-certificate
    name: "Importer Exporter Code (IEC) certificate"
    required: always
    source: S1
    confidence: medium
  - id: gst-registration-certificate
    name: "GST registration certificate"
    required: always
    source: S1
    confidence: medium
  - id: bank-certificate-or-cancelled-cheque
    name: "Bank certificate or cancelled cheque"
    required: always
    source: S1
    confidence: medium
  - id: details-of-the-export-product-and-its-hs
    name: "Details of the export product and its HS code"
    required: always
    source: S1
    confidence: medium
  - id: list-of-inputs-required-with-their-hs-co
    name: "List of inputs required with their HS codes and quantities"
    required: always
    source: S1
    confidence: medium
  - id: export-order-or-self-declaration-of-expo
    name: "Export order or self-declaration of export capability"
    required: always
    source: S1
    confidence: medium
  - id: undertaking-to-fulfill-export-obligation
    name: "Undertaking to fulfill export obligation"
    required: always
    source: S1
    confidence: medium
  - id: copy-of-iec-holder-s-digital-signature-c
    name: "Copy of IEC holder's digital signature certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.