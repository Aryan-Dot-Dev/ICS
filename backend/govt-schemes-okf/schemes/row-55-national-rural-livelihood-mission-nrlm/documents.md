---
type: "Government Scheme Documents"
title: "National Rural Livelihood Mission (NRLM) — Documents"
description: "Document requirements for ROW-55."
scheme_id: "ROW-55"
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
    resource: "https://aajeevika.gov.in/nrlm"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://aajeevika.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Rural Livelihood Mission (NRLM) — Documents

```yaml
documents:
  - id: identity-proof-aadhaar-voter-id-pan
    name: "Identity proof (Aadhaar/Voter ID/PAN)"
    required: always
    source: S1
    confidence: medium
  - id: address-proof
    name: "Address proof"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-passbook-copy
    name: "Bank account details (passbook copy)"
    required: always
    source: S1
    confidence: medium
  - id: secc-2011-or-pip-verification-document
    name: "SECC 2011 or PIP verification document"
    required: always
    source: S1
    confidence: medium
  - id: group-formation-resolution
    name: "Group formation resolution"
    required: always
    source: S1
    confidence: medium
  - id: savings-and-internal-lending-records
    name: "Savings and internal lending records"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-opening-documents
    name: "Bank account opening documents"
    required: always
    source: S1
    confidence: medium
  - id: business-plan-for-livelihood-activity-fo
    name: "Business plan for livelihood activity (for CIF/RF)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.