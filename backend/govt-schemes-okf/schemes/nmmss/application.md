---
type: Government Scheme Application
title: NMMSS — Application
description: Exam + NSP application flow for NMMSS.
scheme_id: NMMSS
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
    resource: https://scholarships.gov.in/public/FAQ/NMSSS_FAQ.pdf
    title: NMMSS FAQ (NSP)
    author: Department of School Education & Literacy
    last_modified: not_verified
---

# NMMSS — Application

## Channels

```yaml
application:
  mode:
    - online_nsp
    - state_exam_registration
  official_portal: https://scholarships.gov.in/
  ministry: Department of School Education & Literacy, Ministry of Education
  implementing_agency: States/UTs (exam conduction + nodal verification); NSP for application/DBT
  other_channels:
    - School authorities (assisted applications)
    - Common Service Centres
  deadline: two-stage calendar — State exam registration (State-declared) then NSP scholarship window (portal-declared); both dynamic
```

## Process

1. **State exam registration** — via school/State authority for the
   NMMSS exam (MAT + SAT) in Class 9 entry year [S1].
2. **Exam qualification** — merit list per State quota [S1].
3. **NSP application** — OTR, fill NMMSS application, upload documents
   [S1].
4. **Verification** — school → State nodal [S1].
5. **DBT** — scholarship credited to the student's Aadhaar-linked
   account [S1].
6. **Renewal** — annual continuation on NSP with marks compliance.

## Verification & approval

- State exam authority + school + State nodal; Ministry approves
  centrally.

## Deadlines

- State exam dates and NSP window are announced each year (dynamic) —
  always fetch current dates.
