---
type: Government Scheme Application
title: PMS-SC — Application
description: Application flow for PMS-SC via NSP or State portals.
scheme_id: PMS-SC
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
status: stable
stale_after: 2026-12-31
sources:
  - id: S2
    resource: https://scholarships.gov.in/
    title: National Scholarship Portal
    author: Government of India
    last_modified: not_verified
  - id: S1
    resource: https://socialjustice.gov.in/
    title: MoSJE scheme pages
    author: Ministry of Social Justice and Empowerment
    last_modified: not_verified
---

# PMS-SC — Application

## Channels

```yaml
application:
  mode:
    - online_nsp
    - online_state_portal
  official_portal: https://scholarships.gov.in/
  ministry: Ministry of Social Justice and Empowerment
  implementing_agency: States/UTs social-welfare departments (nodal) with institutions verifying
  other_channels:
    - State scholarship portals (for States running their own flow)
    - Institutional scholarship cells
    - Common Service Centres
  deadline: annual window as notified on NSP/State portal (dynamic — verify current dates)
```

## Process

1. **NSP OTR** — register with Aadhaar on
   [scholarships.gov.in](https://scholarships.gov.in/) [S2].
2. **Select PMS-SC** — under Ministry of Social Justice & Empowerment
   schemes [S2].
3. **Fill + upload** — caste, income, academic, institution, bank
   details [S2].
4. **Verification chain** — institution → district/state nodal →
   Ministry [S2].
5. **Disbursement** — fee reimbursement to the institution; maintenance
   allowance DBT to the student [S1].
6. **Renewal** — annual renewal with progress/attendance compliance.

## Verification & approval

- Institutional + State nodal verification is decisive; deficiencies
  must be rectified in the notified rectification window.

## Deadlines

- Portal-defined each year (dynamic); always fetch current dates.
