---
type: "Government Scheme Documents"
title: "National Livestock Mission (NLM) — Documents"
description: "Document requirements for ROW-312."
scheme_id: "ROW-312"
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
    resource: "https://dahd.nic.in/nlm"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Livestock Mission (NLM) — Documents

```yaml
documents:
  - id: application-form-as-prescribed-by-state
    name: "Application form (as prescribed by State Implementing Agency)"
    required: always
    source: S1
    confidence: medium
  - id: detailed-project-report-dpr
    name: "Detailed Project Report (DPR)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-identity-aadhaar-voter-id-etc
    name: "Proof of identity (Aadhaar, Voter ID, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-address
    name: "Proof of address"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-documents-or-lease-agreem
    name: "Land ownership documents or lease agreement"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-passbook-or-cancell
    name: "Bank account details (passbook or cancelled cheque)"
    required: always
    source: S1
    confidence: medium
  - id: category-certificate-sc-st-obc-if-applic
    name: "Category certificate (SC/ST/OBC, if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: passport-sized-photographs
    name: "Passport-sized photographs"
    required: always
    source: S1
    confidence: medium
  - id: no-objection-certificate-noc-from-pollut
    name: "No Objection Certificate (NOC) from Pollution Control Board (if required)"
    required: conditional
    source: S1
    confidence: medium
  - id: affidavit-regarding-correctness-of-infor
    name: "Affidavit regarding correctness of information"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.