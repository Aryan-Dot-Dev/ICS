---
type: "Government Scheme Documents"
title: "Interest Equalization Scheme on Export Credit — Documents"
description: "Document requirements for ROW-25."
scheme_id: "ROW-25"
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
    resource: "https://rbidocs.rbi.org.in/rdocs/PressRelease/PDFs/PR48D7FCFA63429D439E9D1D89508B2AD104.PDF"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://rbidocs.rbi.org.in/rdocs/PressRelease/PDFs/PR541A7327933D2064CB9890D2DCC498C05CC.PDF"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://rbidocs.rbi.org.in/rdocs/PressRelease/PDFs/PR545C6123CF54F644562B1EF463F869DA788.PDF"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://rbi.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Interest Equalization Scheme on Export Credit — Documents

```yaml
documents:
  - id: export-order-or-contract
    name: "Export order or contract"
    required: always
    source: S1
    confidence: medium
  - id: shipping-bill-or-bill-of-export
    name: "Shipping bill or bill of export"
    required: always
    source: S1
    confidence: medium
  - id: bank-certificate-of-export-credit-availe
    name: "Bank certificate of export credit availed"
    required: always
    source: S1
    confidence: medium
  - id: bank-statement-showing-interest-charged
    name: "Bank statement showing interest charged"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-realization-of-export-proceeds
    name: "Proof of realization of export proceeds"
    required: always
    source: S1
    confidence: medium
  - id: msme-certificate-if-applicable-for-addit
    name: "MSME certificate (if applicable for additional benefit)"
    required: conditional
    source: S1
    confidence: medium
  - id: bank-reconciliation-statement
    name: "Bank reconciliation statement"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.