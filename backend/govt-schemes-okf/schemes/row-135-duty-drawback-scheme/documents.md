---
type: "Government Scheme Documents"
title: "Duty Drawback Scheme — Documents"
description: "Document requirements for ROW-135."
scheme_id: "ROW-135"
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
    resource: "https://cbic.gov.in/resources//htdocs-cbec/customs/cs-act/formatted-htmls/drawback"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://cbic.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.icegate.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.cbic.gov.in/resources//htdocs-cbec/customs/cs-act/formatted-htmls/drawback"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Duty Drawback Scheme — Documents

```yaml
documents:
  - id: shipping-bill
    name: "Shipping Bill"
    required: always
    source: S1
    confidence: medium
  - id: bill-of-entry-for-imported-inputs
    name: "Bill of Entry for imported inputs"
    required: always
    source: S1
    confidence: medium
  - id: bank-realization-certificate-brc-or-fore
    name: "Bank Realization Certificate (BRC) or Foreign Inward Remittance Certificate (FIRC)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-payment-of-customs-duty
    name: "Proof of payment of customs duty"
    required: always
    source: S1
    confidence: medium
  - id: consent-letter-from-the-manufacturer-if
    name: "Consent letter from the manufacturer (if exporter is not the manufacturer)"
    required: always
    source: S1
    confidence: medium
  - id: declaration-regarding-non-availment-of-c
    name: "Declaration regarding non-availment of CENVAT credit or other exemptions"
    required: always
    source: S1
    confidence: medium
  - id: copy-of-iec-importer-exporter-code
    name: "Copy of IEC (Importer Exporter Code)"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-refund-credit
    name: "Bank account details for refund credit"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.