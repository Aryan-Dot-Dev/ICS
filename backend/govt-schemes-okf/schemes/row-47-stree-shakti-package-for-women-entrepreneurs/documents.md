---
type: "Government Scheme Documents"
title: "Stree Shakti Package for Women Entrepreneurs — Documents"
description: "Document requirements for ROW-47."
scheme_id: "ROW-47"
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
    resource: "https://sbi.co.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sbi.co.in/web/yono/blog/how-to-get-a-personal-loan-using-yono-sbi-app"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://sbi.co.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Stree Shakti Package for Women Entrepreneurs — Documents

```yaml
documents:
  - id: application-form
    name: "Application form"
    required: always
    source: S1
    confidence: medium
  - id: identity-proof-aadhaar-pan-passport-vote
    name: "Identity proof (Aadhaar, PAN, Passport, Voter ID)"
    required: always
    source: S1
    confidence: medium
  - id: address-proof-aadhaar-passport-utility-b
    name: "Address proof (Aadhaar, Passport, Utility bill, Driving license)"
    required: always
    source: S1
    confidence: medium
  - id: business-plan-or-project-report
    name: "Business plan or project report"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-business-address-rent-agreement
    name: "Proof of business address (rent agreement, ownership documents)"
    required: always
    source: S1
    confidence: medium
  - id: bank-statements-of-the-applicant-if-exis
    name: "Bank statements of the applicant (if existing account)"
    required: always
    source: S1
    confidence: medium
  - id: partnership-deed-or-incorporation-certif
    name: "Partnership deed or incorporation certificate (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: income-proof-it-returns-salary-slips-or
    name: "Income proof (IT returns, salary slips, or business income proof)"
    required: always
    source: S1
    confidence: medium
  - id: photographs-of-the-applicant
    name: "Photographs of the applicant"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.