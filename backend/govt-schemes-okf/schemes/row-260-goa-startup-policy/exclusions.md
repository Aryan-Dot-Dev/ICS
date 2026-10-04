---
type: "Government Scheme Exclusions"
title: "Goa Startup Policy — Exclusions"
description: "Structured disqualifiers for ROW-260."
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
# Goa Startup Policy — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The entity should not have been formed by splitting up or reconstructing an already existing business."
    effect: ineligible
    source: S1
    confidence: medium
```