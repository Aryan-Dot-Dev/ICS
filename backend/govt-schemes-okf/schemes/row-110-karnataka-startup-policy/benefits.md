---
type: "Government Scheme Benefits"
title: "Karnataka Startup Policy — Benefits"
description: "Benefit objects for ROW-110."
scheme_id: "ROW-110"
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
    resource: "https://startup.karnataka.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Karnataka Startup Policy — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: grant
    name: "Seed Support"
    amount:
      value: 5000000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Up to INR 50 lakhs"
    duration: "Grant or convertible debt Per startup; disbursed in tranches based on milestones"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: reimbursement
    name: "Patent Filing Reimbursement"
    amount:
      value: 200000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Up to INR 2 lakhs"
    duration: "Reimbursement Against valid invoices; requires submission of patent/application details"
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: reimbursement
    name: "Certification Cost Reimbursement"
    amount:
      value: 100000
      currency: INR
      frequency: not_verified
      is_maximum: true
    detail: "Up to INR 1 lakh"
    duration: "Reimbursement For ISO, CE, BIS, or other approved certifications; invoice proof required"
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: reimbursement
    name: "Marketing Assistance"
    amount:
      value: 500000
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Up to INR 5 lakhs"
    duration: "Reimbursement / Support For participation in approved national/international events (e.g., Slush, Web Summit, CES)"
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: service
    name: "Monthly Operational Support"
    amount:
      value: 100000
      currency: INR
      frequency: monthly
      is_maximum: true
    detail: "INR 1 lakh/month"
    duration: "For up to 12 months Only for startups in recognized incubators; subject to incubator recommendation and compliance"
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **Up to INR 50 lakhs as seed support per startup**
- Fund size recorded in source data: ₹2000 crore
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.