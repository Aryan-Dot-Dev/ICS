---
type: "Government Scheme Benefits"
title: "Pradhan Mantri Rozgar Protsahan Yojana (PMRPY) — Benefits"
description: "Benefit objects for ROW-44."
scheme_id: "ROW-44"
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
    resource: "https://pmrpy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.epfindia.gov.in/site_en/Employer.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Pradhan Mantri Rozgar Protsahan Yojana (PMRPY) — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: service
    name: "government pays the employer's full contribution"
    amount:
      value: 15000
      currency: INR
      frequency: annual
    detail: "The government pays the employer's full contribution (12% towards EPF and ESI) for a period of three years for new employees earning less than INR 15,000 per month."
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: service
    name: "This reduces the employer's cost of hiring and encourages"
    amount: not_verified
    detail: "This reduces the employer's cost of hiring and encourages formal employment generation."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: insurance
    name: "Under PMRPY, the Government of India pays the employer's"
    amount: not_verified
    detail: "Under PMRPY, the Government of India pays the employer's contribution of 12% towards the Employees' Provident Fund (EPF) and Employees' State Insurance (ESI) for new employees for a duration of three years from the date of registration."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: service
    name: "support is provided directly to EPFO and ESIC"
    amount: not_verified
    detail: "The support is provided directly to EPFO and ESIC on behalf of the employer."
    source: S1
    confidence: medium
```
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.