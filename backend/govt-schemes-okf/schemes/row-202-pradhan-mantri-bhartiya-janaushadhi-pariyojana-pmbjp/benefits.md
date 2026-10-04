---
type: "Government Scheme Benefits"
title: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) — Benefits"
description: "Benefit objects for ROW-202."
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
# Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: service
    name: "Operating margin of 20% on MRP"
    amount: not_verified
    detail: "Operating margin of 20% on MRP (excluding taxes) of each drug"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "normal incentive of 20% of monthly purchases from PMBI"
    amount:
      value: 20000
      currency: INR
      frequency: monthly
      is_maximum: true
    detail: "normal incentive of 20% of monthly purchases from PMBI, capped at Rs. 20,000 per month (disbursed 50:50 based on purchase and stocking mandate)"
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: service
    name: "special one-time incentive of"
    amount:
      value: 200000
      currency: INR
      frequency: one_time
    detail: "special one-time incentive of Rs. 2.00 lakhs (Rs."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: service
    name: "1.50 lakh for furniture/fixtures"
    amount:
      value: 50000
      currency: INR
      frequency: not_verified
    detail: "1.50 lakh for furniture/fixtures, Rs. 0.50 lakh for computer/internet/printer/scanner) for women entrepreneurs, Divyang, SC/ST, ex-servicemen, and those in aspirational districts (NITI Aayog-notified), Himalayan, Island, or North-Eastern territories"
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: tax-exemption
    name: "exemption from"
    amount:
      value: 5000
      currency: INR
      frequency: not_verified
    detail: "exemption from Rs. 5,000 application fee for eligible categories"
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: service
    name: "access to PMBI's supply chain for WHO-GMP certified, NABL-tested"
    amount: not_verified
    detail: "access to PMBI's supply chain for WHO-GMP certified, NABL-tested generic medicines"
    source: S1
    confidence: medium
  - benefit_id: BEN-007
    type: service
    name: "authorization to sell allied medical products not supplied by"
    amount: not_verified
    detail: "authorization to sell allied medical products not supplied by PMBI"
    source: S1
    confidence: medium
  - benefit_id: BEN-008
    type: service
    name: "use of PMBI's software for billing and inventory"
    amount: not_verified
    detail: "use of PMBI's software for billing and inventory"
    source: S1
    confidence: medium
  - benefit_id: BEN-009
    type: service
    name: "training and support via POS system and helpline"
    amount: not_verified
    detail: "training and support via POS system and helpline."
    source: S1
    confidence: medium
  - benefit_id: BEN-010
    type: service
    name: "support includes a 20% operating margin on MRP"
    amount: not_verified
    detail: "Financial support includes a 20% operating margin on MRP (excluding taxes) of each drug sold."
    source: S1
    confidence: medium
  - benefit_id: BEN-011
    type: service
    name: "Normal incentive is 20% of monthly purchases from PMBI"
    amount:
      value: 20000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Normal incentive is 20% of monthly purchases from PMBI, subject to a monthly ceiling of Rs. 20,000, disbursed on a 50:50 basis: 50% based on actual purchase (up to Rs. 10,000) and 50% based on stocking mandate (maintaining 180-200 medicines for full payment)."
    source: S1
    confidence: medium
  - benefit_id: BEN-012
    type: reimbursement
    name: "Special one-time incentive of"
    amount:
      value: 200000
      currency: INR
      frequency: one_time
    detail: "Special one-time incentive of Rs. 2.00 lakhs is provided for eligible categories (women entrepreneurs, Divyang, SC/ST, ex-servicemen, aspirational districts, Himalayan, Island, North-Eastern states), comprising Rs. 1.50 lakh for furniture/fixtures and Rs. 0.50 lakh for computer/internet/printer/scanner, reimbursed against original bills within 90 days of opening, restricted to actual expenditure."
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **Rs. 2.00 lakhs (one-time special incentive for eligible categories)**
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.