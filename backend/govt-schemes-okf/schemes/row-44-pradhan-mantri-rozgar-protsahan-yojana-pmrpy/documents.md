---
type: "Government Scheme Documents"
title: "Pradhan Mantri Rozgar Protsahan Yojana (PMRPY) — Documents"
description: "Document requirements for ROW-44."
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
# Pradhan Mantri Rozgar Protsahan Yojana (PMRPY) — Documents

```yaml
documents:
  - id: employer-registration-with-epfo-esic
    name: "Employer registration with EPFO/ESIC"
    required: always
    source: S1
    confidence: medium
  - id: employee-universal-account-number-uan
    name: "Employee Universal Account Number (UAN)"
    required: always
    source: S1
    confidence: medium
  - id: wage-records-showing-monthly-salary-inr
    name: "Wage records showing monthly salary < INR 15,000"
    required: always
    source: S1
    confidence: medium
  - id: date-of-joining-of-the-employee
    name: "Date of joining of the employee"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-first-time-employment-no-prior
    name: "Proof of first-time employment (no prior EPF/EPS membership)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.