---
type: "Government Scheme Documents"
title: "Government e-Marketplace (GeM) Seller Onboarding — Documents"
description: "Document requirements for ROW-406."
scheme_id: "ROW-406"
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
    resource: "https://gem.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://gem.gov.in/gem-advantages"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://gem.gov.in/gem-exclusive"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://gem.gov.in/support/government_oms_circulars"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/revised_caution_money_withdrawal_1772100284.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/sop-gem_treds_integration_1780478660.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://assets-bg.gem.gov.in/resources/upload/shared_doc/om-no_1758539509.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Government e-Marketplace (GeM) Seller Onboarding — Documents

```yaml
documents:
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-with-pfms-verificat
    name: "Bank account details (with PFMS verification)"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: authorization-letter-from-authorized-sig
    name: "Authorization letter from authorized signatory"
    required: always
    source: S1
    confidence: medium
  - id: details-of-beneficial-ownership-if-appli
    name: "Details of beneficial ownership (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: udyam-registration-certificate-for-msme
    name: "Udyam Registration certificate (for MSME benefits)"
    required: always
    source: S1
    confidence: medium
  - id: gstin-if-registered
    name: "GSTIN (if registered)"
    required: always
    source: S1
    confidence: medium
  - id: address-proof-of-the-business
    name: "Address proof of the business"
    required: always
    source: S1
    confidence: medium
  - id: cancelled-cheque-or-bank-statement-for-b
    name: "Cancelled cheque or bank statement for bank verification"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.