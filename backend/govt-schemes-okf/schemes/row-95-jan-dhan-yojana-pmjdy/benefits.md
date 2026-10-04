---
type: "Government Scheme Benefits"
title: "Jan Dhan Yojana (PMJDY) — Benefits"
description: "Benefit objects for ROW-95."
scheme_id: "ROW-95"
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
    resource: "https://pmjdy.gov.in/files/E-Documents/Continuation_of_PMJDY.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmjdy.gov.in/files/E-Documents/PMJDY_BROCHURE_ENG.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmjdy.gov.in/files/QuickLinks/IMPORTANT-INFORMATION-UNDER-PMJDY.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmjdy.gov.in/files/PMJDY_Metadata.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://pmjdy.gov.in/files/financial-Literacy/literacy/guide.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://pmjdy.gov.in/files/financial-Literacy/literacy/diary.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://pmjdy.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://pmjdy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Jan Dhan Yojana (PMJDY) — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: insurance
    name: "Beneficiaries receive a RuPay Debit card with inbuilt accident"
    amount:
      value: 100000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Beneficiaries receive a RuPay Debit card with inbuilt accident insurance cover of Rs. 1 lakh (raised to Rs. 2 lakh for new accounts opened after 28.8.18), access to credit through overdraft facility of up to Rs. 10,000 after six months of satisfactory account operation, access to micro-insurance and pension schemes like Pradhan Mantri Suraksha Bima Yojana (PMSBY), Pradhan Mantri Jeevan Jyoti…"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "Accounts have no minimum balance requirement and earn interest"
    amount: not_verified
    detail: "Accounts have no minimum balance requirement and earn interest at prevailing savings bank rates."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: loan
    name: "Under PMJDY, account holders are eligible for an overdraft"
    amount:
      value: 10000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Under PMJDY, account holders are eligible for an overdraft (OD) facility of up to Rs. 10,000 after six months of satisfactory operation of the account."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: service
    name: "For OD up to"
    amount:
      value: 2000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "For OD up to Rs. 2,000, no conditions are attached."
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: service
    name: "age limit for availing OD facility has been"
    amount: not_verified
    detail: "The age limit for availing OD facility has been revised from 18-60 years to 18-65 years."
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: service
    name: "OD facility is subject to the account holder"
    amount: not_verified
    detail: "The OD facility is subject to the account holder maintaining satisfactory transaction history and having an Aadhaar number linked to the account (declaration required if Aadhaar is not available)."
    source: S1
    confidence: medium
  - benefit_id: BEN-007
    type: service
    name: "Interest on OD is charged at the base rate"
    amount: not_verified
    detail: "Interest on OD is charged at the base rate + 2% or 12%, whichever is lower."
    source: S1
    confidence: medium
```
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.