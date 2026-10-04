---
type: "Government Scheme Exclusions"
title: "PM Kisan Maan Dhan Yojana (PM-KMY) Pension for Farmers — Exclusions"
description: "Structured disqualifiers for ROW-420."
scheme_id: "ROW-420"
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
    resource: "https://pmkmy.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://pmkmy.gov.in/scheme/pmkmy"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://pmkmy.gov.in/page/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://pmkmy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM Kisan Maan Dhan Yojana (PM-KMY) Pension for Farmers — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "However, the following are ineligible: SMFs covered under any other statutory social security schemes such as National Pension Scheme (NPS), Employees’ State Insurance Corporation scheme, Employees’ Provident Fund Organization Scheme;"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Should not be SMFs covered under any other statutory social security schemes such as National Pension Scheme (NPS), Employees’ State Insurance Corporation scheme, Employees’ Provident Fund Organization Scheme etc."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "Farmers who have opted for Pradhan Mantri Shram Yogi Maandhan Yojana and Pradhan Mantri Vyapari Maandhan administered by the Ministry of Labour & Employment are not eligible."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-004
    detail: "All Institutional Land holders, former and present holders of constitutional posts, former and present Ministers/State Ministers and former/present Members of Lok Sabha/Rajya Sabha/State Legislative Assemblies/State Legislative Councils, former and present Mayors of Municipal Corporations, former and present Chairpersons of District Panchayats are not eligible."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-005
    detail: "All serving or retired officers and employees of Central/State Government Ministries/Offices/Departments and their field units, Central or State PSEs and Attached offices/Autonomous Institutions under Government as well as regular employees of the Local Bodies (Excluding Multi Tasking Staff / Class IV/Group D employees) are not eligible."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-006
    detail: "All Persons who paid Income Tax in last assessment year are not eligible."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-007
    detail: "Professionals like Doctors, Engineers, Lawyers, Chartered Accountants, and Architects registered with Professional bodies and carrying out profession by undertaking practice are not eligible."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-008
    detail: "individuals without land holding in their name are not eligible."
    effect: ineligible
    source: S1
    confidence: medium
```