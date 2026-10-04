---
type: "Government Scheme Benefits"
title: "Maha Startup Scheme — Benefits"
description: "Benefit objects for ROW-113."
scheme_id: "ROW-113"
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
    resource: "https://startup.maharashtra.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Maha Startup Scheme — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: grant
    name: "Financial Grant"
    amount:
      value: 2000000
      currency: INR
      frequency: one_time
      is_maximum: true
    detail: "One-time grant of up to INR 20 Lakhs per eligible startup"
    duration: "Max Per Entity: INR 20 Lakhs; Financial Support section"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "Disbursement Mode"
    amount: not_verified
    detail: "Released in tranches based on milestone achievement; directly to startup’s bank account after due diligence and approval of utilization reports"
    duration: "Financial Support section"
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: equity
    name: "Equity Stake"
    amount: not_verified
    detail: "No equity taken by the government"
    duration: "Financial Support section"
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: service
    name: "Incubation Support"
    amount: not_verified
    detail: "Access to state-approved incubation centers with infrastructure, mentorship, and networking opportunities"
    duration: "Benefits section"
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: service
    name: "IPR & Legal Assistance"
    amount: not_verified
    detail: "Assistance in intellectual property rights (IPR) filing and legal compliance"
    duration: "Benefits section"
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: service
    name: "Event Participation"
    amount: not_verified
    detail: "Support for participation in national and international startup events and exhibitions"
    duration: "Benefits section"
    source: S1
    confidence: medium
  - benefit_id: BEN-007
    type: service
    name: "Funding Readiness"
    amount: not_verified
    detail: "Guidance on funding readiness and investor connect"
    duration: "Benefits section"
    source: S1
    confidence: medium
  - benefit_id: BEN-008
    type: service
    name: "Technical Facilities"
    amount: not_verified
    detail: "Access to shared labs, prototyping facilities, and technical guidance through empanelled knowledge partners"
    duration: "Benefits section"
    source: S1
    confidence: medium
  - benefit_id: BEN-009
    type: service
    name: "Fund Size"
    amount:
      value: 2000000000
      currency: INR
      frequency: not_verified
    detail: "Total scheme fund: INR 200 Crore"
    duration: "Fund Size (Cr): 200"
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **INR 20 Lakhs**
- Fund size recorded in source data: ₹200 crore
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.