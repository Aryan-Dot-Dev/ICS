---
type: "Government Scheme Documents"
title: "SIDBI SMILE Scheme — Documents"
description: "Document requirements for ROW-10."
scheme_id: "ROW-10"
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
    resource: "https://sidbi.in/prayaas"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sidbi.in/en/prayaas"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.sidbi.in/smile"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# SIDBI SMILE Scheme — Documents

```yaml
documents:
  - id: application-form
    name: "Application form"
    required: always
    source: S1
    confidence: medium
  - id: kyc-documents-identity-and-address-proof
    name: "KYC documents (Identity and Address proof)"
    required: always
    source: S1
    confidence: medium
  - id: business-proof-enterprise-details
    name: "Business proof / enterprise details"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details
    name: "Bank account details"
    required: always
    source: S1
    confidence: medium
  - id: any-additional-documents-as-required-by
    name: "Any additional documents as required by the Partner Institution"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.