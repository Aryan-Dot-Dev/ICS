---
type: "Government Scheme Benefits"
title: "Meity's Data Centre Policy — Benefits"
description: "Benefit objects for ROW-404."
scheme_id: "ROW-404"
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
    resource: "https://meity.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://meity.gov.in/offerings"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://meity.gov.in/documents/act-and-policies"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.meity.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Meity's Data Centre Policy — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: tax-exemption
    name: "include fiscal incentives such as capital subsidies, interest"
    amount: not_verified
    detail: "Benefits include fiscal incentives such as capital subsidies, interest subvention, and tax exemptions"
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "non-fiscal benefits like single-window clearance, facilitated land allocation, a"
    amount: not_verified
    detail: "non-fiscal benefits like single-window clearance, facilitated land allocation, assured power supply through dedicated feeders, and priority in right-of-way for optical fibre connectivity."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: service
    name: "Additional support includes skill development programmes, access to government"
    amount: not_verified
    detail: "Additional support includes skill development programmes, access to government test beds, and collaboration opportunities with MeitY's R&D institutions."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: subsidy
    name: "support includes a one-time capital subsidy of up"
    amount:
      value: 500000000
      currency: INR
      frequency: one_time
      is_maximum: true
    detail: "Financial support includes a one-time capital subsidy of up to 25% of the investment in plant and machinery, subject to a ceiling of INR 50 crore per project."
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: loan
    name: "Interest subvention on term loans for data centre projects"
    amount: not_verified
    detail: "Interest subvention on term loans for data centre projects is available at 6% per annum for a period of 5 years."
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: service
    name: "is disbursed through designated nodal agencies upon verification"
    amount: not_verified
    detail: "Support is disbursed through designated nodal agencies upon verification of milestones and submission of required documentation."
    source: S1
    confidence: medium
```

- Grant/assistance per entity recorded in source data: **Up to INR 50 crore per project**
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.