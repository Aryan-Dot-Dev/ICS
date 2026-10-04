---
type: "Government Scheme Benefits"
title: "Goa Startup Policy — Benefits"
description: "Benefit objects for ROW-260."
scheme_id: "ROW-260"
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
    resource: "https://startup.goa.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startup.goa.gov.in/StartupIncentives"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startup.goa.gov.in/Notification/Goa-Startup-Policy-2025.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startup.goa.gov.in/Notification/StartUp-Policy-2021-(amended).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startup.goa.gov.in/AboutUs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startup.goa.gov.in/ContactUs"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://startup.goa.gov.in/Notification/Goa-Nodal Department-Nodal Officer (Govt. Order).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://startup.goa.gov.in/Notification/Goa-Dedicated Team (Govt. Order).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://startup.goa.gov.in/Notification/Goa-Grievance Redressal Order (Govt. Order).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Goa Startup Policy — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: reimbursement
    name: "include reimbursement for co-working spaces/incubators/accelerators"
    amount:
      value: 6000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Benefits include reimbursement for co-working spaces/incubators/accelerators (up to INR 6000 per seat for accelerators, INR 5000 for incubators, INR 3000 for co-working spaces, max 8 seats), salary reimbursement (50% of fresher salary up to INR 15,000/month per recruit, max 25 people for 3 years), lease rental subsidy (up to INR 20/- per sq ft per month for local startups in rented premises, cap…"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: grant
    name: "support varies by scheme"
    amount:
      value: 1000000
      currency: INR
      frequency: one_time
      is_maximum: true
    detail: "Financial support varies by scheme: Seed Capital Scheme offers a one-time grant of up to INR 10 lakh"
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: reimbursement
    name: "Salary Reimbursement Scheme provides 50% of fresher salary capped"
    amount:
      value: 15000
      currency: INR
      frequency: monthly
      is_maximum: true
    detail: "Salary Reimbursement Scheme provides 50% of fresher salary capped at INR 15,000/month per recruit for up to 25 people over 3 years"
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: reimbursement
    name: "Co-Working Spaces/Incubators/Accelerators Subsidy Scheme reimburses 50% of seat"
    amount:
      value: 3000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Co-Working Spaces/Incubators/Accelerators Subsidy Scheme reimburses 50% of seat cost with caps of INR 3000 (co-working), INR 5000 (incubator), INR 6000 (accelerator) per seat, max 8 seats"
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: reimbursement
    name: "IPR Reimbursement Scheme covers up to 100% of IP"
    amount:
      value: 200000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "IPR Reimbursement Scheme covers up to 100% of IP registration fees (INR 2 lakh national, INR 5 lakh international)"
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: reimbursement
    name: "Trademark Reimbursement Scheme reimburses 50% of trademark registration cost"
    amount:
      value: 25000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Trademark Reimbursement Scheme reimburses 50% of trademark registration cost up to INR 25,000"
    source: S1
    confidence: medium
  - benefit_id: BEN-007
    type: reimbursement
    name: "R&D Reimbursement Scheme cove"
    amount:
      value: 50
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "R&D Reimbursement Scheme covers 50% of R&D expenses including PhD/Master salaries, capped at INR 5 lakh per annum with salary component not exceeding INR 2 lakh"
    source: S1
    confidence: medium
  - benefit_id: BEN-008
    type: grant
    name: "Grant for Incubation Centers provides up to"
    amount:
      value: 1000000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Grant for Incubation Centers provides up to INR 10 lakh for capital expenses and INR 3 lakh per year for operational expenses over 3 years."
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **Up to INR 10 lakh (Seed Capital Scheme), INR 25,000 (Trademark), INR 2 lakh (national IPR), INR 5 lakh (international IPR), INR 5 lakh per annum (R&D), INR 10 lakh capital + INR 3 lakh/year operational (Incubation Grant)**
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.