---
type: Government Scheme Application
title: PMMVY — Application
description: Claim flow for PMMVY via PMMVY-CAS.
scheme_id: PMMVY
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
    resource: https://pmmvy.wcd.gov.in/
    title: PMMVY portal
    author: Ministry of Women and Child Development
    last_modified: not_verified
---

# PMMVY — Application

## Channels

```yaml
application:
  mode:
    - assisted_at_anganwadi_health_facility
    - online_via_pmmvy_cas
  official_portal: https://pmmvy.wcd.gov.in/
  ministry: Ministry of Women and Child Development
  implementing_agency: Anganwadi workers/ASHAs/ANMs and health facilities enter claims; States/UTs implement; MoWCD runs the CAS
  other_channels:
    - Public health facilities (ANC/delivery points)
    - Anganwadi centres (ICDS)
    - UMANG app (scheme services where integrated)
  deadline: claims within scheme-defined windows tied to pregnancy registration and birth (verify current windows in guidelines)
```

## Process

1. **Register the pregnancy** — early registration at the health
   facility/Anganwadi; MCP card issued [S1].
2. **Claim instalment 1** — worker/facility enters the claim on PMMVY-
   CAS with declaration + bank details; DBT after approval [S1].
3. **Birth registration + immunisation** — records updated post-birth.
4. **Claim instalment 2** — entered on CAS with birth/immunisation
   records; DBT after approval [S1].
5. **Second girl child** — file under the girl-child branch (₹6,000)
   [S2].

## Verification & approval

- Block/district WCD/health officials verify claims on CAS; payments
  routed through PFMS/DBT.

## Deadlines

- Claim windows are guideline-defined and health-event-linked — always
  verify the current window; do not hard-code day counts.
