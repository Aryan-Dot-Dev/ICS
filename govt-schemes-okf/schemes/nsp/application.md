---
type: Government Scheme Application
title: NSP / PM-USP CSSS — Application
description: Application flow on the National Scholarship Portal.
scheme_id: NSP-CSSS
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
  - id: S1
    resource: https://scholarships.gov.in/
    title: National Scholarship Portal
    author: Government of India
    last_modified: not_verified
---

# NSP / PM-USP CSSS — Application

## Channels

```yaml
application:
  mode:
    - online_only
  official_portal: https://scholarships.gov.in/
  ministry: Ministry of Education (CSSS); NSP operated as a Government of India platform (NeGD/MeitY)
  implementing_agency: State nodal departments + institutions verify; Ministries approve and disburse via DBT
  other_channels:
    - Common Service Centres (assistance)
    - Institutional scholarship cells
  deadline: annual window notified on the portal each year (typically opens around August–December); treat as dynamic — verify current dates on the portal
```

## Process

1. **One Time Registration (OTR)** — create NSP OTR with Aadhaar
   (NSP 2.2 flow) [S1].
2. **Login and choose scheme** — select PM-USP CSSS (Department of
   Higher Education) [S1].
3. **Fill application** — academic, income, institution, bank details;
   upload documents [S1].
4. **Institution verification** — college/institute verifies Level 1
   [S1].
5. **State/District/Ministry verification** — nodal verification chain
   [S1].
6. **Approval & DBT** — scholarship credited to the student's Aadhaar-
   linked account [S1].
7. **Renewal** — renew annually via NSP with previous-year marks [S1].

## Verification & approval

- Multi-level: institution → district/state nodal → ministry. Deficiency
  rectification windows are portal-notified.

## Deadlines

- Portal-defined each academic year (dynamic). The engine must always
  fetch the current window; do not store fixed dates.
