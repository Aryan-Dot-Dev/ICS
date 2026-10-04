---
type: "Government Scheme Benefits"
title: "Haryana State Start-ups Scheme — Benefits"
description: "Benefit objects for ROW-1."
scheme_id: "ROW-1"
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
    resource: "https://startupharyana.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupharyana.gov.in/front/startup-registration"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupharyana.gov.in/pages/eligibility-for-startups"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupharyana.gov.in/pages/fiscal-benefits"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupharyana.gov.in/assets/images/pdf/Startup_registration_Manual_V2.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startupharyana.gov.in/pages/about-startup-haryana"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://startupharyana.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Haryana State Start-ups Scheme — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: grant
    name: "Seed Grant"
    amount:
      value: 1000000
      currency: INR
      frequency: quarterly
      is_maximum: true
    detail: "Financial support for idea validation, prototype development, proof of concept, and initial activities"
    duration: "Up to INR 10 Lakh per startup Disbursed in tranches; applications evaluated quarterly (received in a quarter considered in subsequent quarter)"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: reimbursement
    name: "Lease Rental Subsidy"
    amount:
      value: 500000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Reimbursement of lease rental for general startups (30%) and women-led startups (45%)"
    duration: "Max INR 5 Lakh for 1 year Available for maximum 1 year only; requires 3-5 photographs of leased space, proof of monthly payment, CA certificate for rent paid"
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: reimbursement
    name: "Patent Cost Reimbursement"
    amount:
      value: 2500000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "100% reimbursement of actual expenses (filing, consultancy, search, maintenance, publishing fees)"
    duration: "Up to INR 25 Lakh for domestic and international patents Requires CA-certified Utilization Certificate, invoices, tickets/boarding passes (if travel), progress reports"
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: reimbursement
    name: "Cloud Storage Reimbursement"
    amount:
      value: 250000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "75% reimbursement of expenses"
    duration: "Max INR 2.5 Lakh per annum for 5 years Limited to Haryana-based Data Centres only"
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: reimbursement
    name: "Acceleration Programs Reimbursement"
    amount:
      value: 250000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Reimbursement for participation in acceleration programs"
    duration: "Up to INR 2.5 Lakh per year —"
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: reimbursement
    name: "Net SGST Reimbursement"
    amount: not_verified
    detail: "50% reimbursement of Net SGST"
    duration: "Capped at 100% of Fixed Capital Investment Available for 7 years"
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **INR 10 Lakh**
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.