---
type: "Government Scheme Benefits"
title: "PADMA Scheme — Benefits"
description: "Benefit objects for ROW-2."
scheme_id: "ROW-2"
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
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240312190873903.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240319174690753.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/20240319496043408.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/202403191896519405.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/202403191898945670.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://cdnbbsr.s3waas.gov.in/s3f48c04ffab49ff0e5d1176244fdfb65c/uploads/2024/03/2024031932498004.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://msme.haryana.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://msme.haryana.gov.in/padma-schemes/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PADMA Scheme — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: subsidy
    name: "assistance includes capital investment subsidy"
    amount:
      value: 3000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Financial assistance includes capital investment subsidy (up to 30% of eligible investment, max Rs. 30 lakh for women/SC/SHG units and Rs. 25 lakh for others inside PADMA cluster"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: reimbursement
    name: "half for outside), interest subsidy"
    amount: not_verified
    detail: "half for outside), interest subsidy (reimbursement of interest @6% p.a."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: grant
    name: "or actual rate, max"
    amount:
      value: 2000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "or actual rate, max Rs. 20 lakh/year inside and Rs. 10 lakh/year outside), entrepreneurship acceleration grant (Rs."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: reimbursement
    name: "20 lakh inside and"
    amount:
      value: 1000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "20 lakh inside and Rs. 10 lakh outside per startup for proof of concept), and designing/branding/marketing support (50% reimbursement, max Rs. 10 lakh/year inside and Rs. 5 lakh/year outside)."
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: loan
    name: "Non-financial benefits include access to Common Facility Centres"
    amount: not_verified
    detail: "Non-financial benefits include access to Common Facility Centres (CFCs), Business Development Centres (BDCs), plug-and-play facilities, skill development, market linkages, credit facilitation, mentorship, and strategic linkages with BDS providers and OEMs."
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: subsidy
    name: "support varies by sub-scheme"
    amount:
      value: 3000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Financial support varies by sub-scheme: Under PADMA Capital Investment Subsidy Scheme, 30% subsidy on eligible capital investment (max Rs. 30 lakh for women/SC/SHG units, Rs. 25 lakh for others) inside PADMA cluster"
    source: S1
    confidence: medium
  - benefit_id: BEN-007
    type: service
    name: "half for units outside"
    amount: not_verified
    detail: "half for units outside."
    source: S1
    confidence: medium
  - benefit_id: BEN-008
    type: reimbursement
    name: "Under PADMA Interest Subsidy Scheme, reimbursement of interest @6%"
    amount: not_verified
    detail: "Under PADMA Interest Subsidy Scheme, reimbursement of interest @6% p.a."
    source: S1
    confidence: medium
  - benefit_id: BEN-009
    type: service
    name: "or actual rate paid, whichever is less, up to"
    amount:
      value: 2000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "or actual rate paid, whichever is less, up to Rs. 20 lakh per financial year inside and Rs. 10 lakh outside."
    source: S1
    confidence: medium
  - benefit_id: BEN-010
    type: grant
    name: "Under PADMA Entrepreneurship Acceleration Scheme, financial assistance of"
    amount:
      value: 2000000
      currency: INR
      frequency: annual
    detail: "Under PADMA Entrepreneurship Acceleration Scheme, financial assistance of Rs. 20 lakh for startups inside and Rs. 10 lakh outside per innovative idea for proof of concept."
    source: S1
    confidence: medium
  - benefit_id: BEN-011
    type: reimbursement
    name: "Under PADMA Designing, Branding, Marketing & Exports Promotion Scheme"
    amount:
      value: 1000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Under PADMA Designing, Branding, Marketing & Exports Promotion Scheme, 50% reimbursement of expenses, max Rs. 10 lakh/year inside and Rs. 5 lakh/year outside."
    source: S1
    confidence: medium
  - benefit_id: BEN-012
    type: grant
    name: "Under PADMA Cluster Infrastructure Development Scheme"
    amount:
      value: 350000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Under PADMA Cluster Infrastructure Development Scheme (PCIDS), 50% to 85% financial assistance, max Rs. 35 Crore for up to 50 acres and Rs. 45 Crore for more than 50 acres, based on block category (B: 50%, C: 75%, D: 85%)."
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **Up to Rs. 30 lakh for women/SC/SHG owned micro and small units inside PADMA cluster; Rs. 25 lakh for other units inside; Rs. 15 lakh for women/SC/SHG and Rs. 12.50 lakh for others outside PADMA cluster**
- Fund size recorded in source data: ₹1000 crore
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.