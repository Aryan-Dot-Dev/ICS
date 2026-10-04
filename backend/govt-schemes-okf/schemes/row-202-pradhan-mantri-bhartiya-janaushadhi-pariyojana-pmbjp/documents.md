---
type: "Government Scheme Documents"
title: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) — Documents"
description: "Document requirements for ROW-202."
scheme_id: "ROW-202"
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
    resource: "https://janaushadhi.gov.in/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://janaushadhi.gov.in/about-pmbjb"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://janaushadhi.gov.in/pdf/Guidelines_for_PMBJK_Opening.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://janaushadhi.gov.in/pdf/Procedure_for_PACS_Application.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://janaushadhi.gov.in/pdf/Procedure_for_Reimbursement_of_Special_Incentive.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://janaushadhi.gov.in/pdf/Copy_of_Agreement_for_PMBJK_Opening.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://janaushadhi.gov.in/pdf/Copy_of_Tripartite_Agreement_for_PMBJK_Opening.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://janaushadhi.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) — Documents

```yaml
documents:
  - id: aadhaar-card
    name: "Aadhaar Card"
    required: always
    source: S1
    confidence: medium
  - id: pan-card
    name: "PAN Card"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-sc-st-or-divyang-pwd-or-g
    name: "Certificate of SC/ST or Divyang (PWD) or General category Registration certificate"
    required: always
    source: S1
    confidence: medium
  - id: pharmacist-registration-certification
    name: "Pharmacist Registration Certification"
    required: always
    source: S1
    confidence: medium
  - id: itr-for-last-two-years
    name: "ITR for last two years"
    required: always
    source: S1
    confidence: medium
  - id: bank-statement-for-last-6-months
    name: "Bank statement for last 6 months"
    required: always
    source: S1
    confidence: medium
  - id: declaration-for-gst-registration-once-th
    name: "Declaration for GST registration once threshold limit is achieved"
    required: always
    source: S1
    confidence: medium
  - id: undertaking-of-distance-policy-as-per-gu
    name: "Undertaking of distance policy as per guideline"
    required: always
    source: S1
    confidence: medium
  - id: self-undertaking-of-pmbjp-kendra-for-ava
    name: "Self-Undertaking of PMBJP Kendra for availing one-time special incentive (if applicable under woman entrepreneur/divyaang/SC/ST/ex-serviceman/aspirational…"
    required: conditional
    source: S1
    confidence: medium
  - id: three-cheques-from-indian-nationalized-b
    name: "Three cheques from Indian Nationalized Banks in favor of PMBI"
    required: always
    source: S1
    confidence: medium
  - id: one-cancelled-cheque-from-indian-nationa
    name: "One cancelled cheque from Indian Nationalized Banks to PMBI"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-space-ownership-or-lease-agreem
    name: "Proof of space ownership or lease agreement (minimum 120 sq. ft.)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-securing-a-pharmacist-name-stat
    name: "Proof of securing a pharmacist (name, State Council registration)"
    required: always
    source: S1
    confidence: medium
  - id: drug-license-in-the-name-of-pradhan-mant
    name: "Drug License in the name of 'Pradhan Mantri Janaushadhi Kendra'"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.