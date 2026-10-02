---
type: Government Scheme Application
title: NSAP — Application
description: Application channels and process for NSAP components.
scheme_id: NSAP
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
    resource: https://nsap.dord.gov.in/
    title: NSAP portal
    author: MoRD / NIC
    last_modified: not_verified
---

# NSAP — Application

## Channels

```yaml
application:
  mode:
    - offline_through_state_machinery
    - online_state_portals
  official_portal: https://nsap.dord.gov.in/ (central tracking/payments; sanctions happen in State systems)
  ministry: Ministry of Rural Development
  implementing_agency: States/UTs rural development / social welfare departments; Panchayats & ULBs at field level
  other_channels:
    - State NSAP portals (e.g., state-specific pension portals)
    - Gram Panchayat / Block office / ULB welfare offices
    - Common Service Centres (State-dependent)
    - UMANG app (scheme services, State-dependent)
  deadline: none (ongoing; sanctions in State cycles)
```

## Process

1. **Approach the local office** — Gram Panchayat/Block/ULB welfare
   office or State NSAP portal with documents [S1].
2. **Verification** — field verification of age, BPL status and
   component-specific status (widow/disability/death).
3. **Sanction** — by the State sanctioning authority; entry into NSAP
   database [S1].
4. **DBT** — monthly pension credited to the beneficiary's Aadhaar-
   linked account [S1].
5. **Life certificate / continuation** — periodic continuation
   verification per State practice.

## Verification & approval

- Entirely State-administered sanction; MoRD provides the central DBT
  framework and portal tracking.

## Deadlines

- None; NFBS applications should follow local timelines after the
  bereavement (State-defined).
