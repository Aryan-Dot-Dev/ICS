---
type: Government Scheme Application
title: PMUY — Application
description: Channels and process for PMUY connection application.
scheme_id: PMUY
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
    resource: https://www.pmuy.gov.in/
    title: PMUY official portal
    author: MoPNG / OMCs
    last_modified: not_verified
  - id: S2
    resource: https://www.pmuy.gov.in/ujjwala2.html
    title: PMUY 2.0 page
    author: MoPNG / OMCs
    last_modified: not_verified
---

# PMUY — Application

## Channels

```yaml
application:
  mode:
    - online_portal
    - offline_at_distributor
  official_portal: https://www.pmuy.gov.in/
  ministry: Ministry of Petroleum and Natural Gas
  implementing_agency: Oil Marketing Companies (IOCL-Indane, BPCL, HPCL) and their distributors
  other_channels:
    - OMC apps/portals (Indane, HP, Bharat gas booking ecosystems)
    - Distributor office walk-in
    - Common Service Centres (assistance)
    - UMANG app
  deadline: none (ongoing)
```

## Process

1. **Apply online** — on [pmuy.gov.in](https://www.pmuy.gov.in/)
   choosing the OMC; fill KYC and declaration forms [S1].
2. **Upload documents** — Aadhaar, bank passbook, declaration, category
   proof (as applicable) [S2].
3. **Verification** — OMC/distributor verifies KYC, declaration and
   de-duplication (no other household connection) [S2].
4. **Connection issuance** — Deposit-free connection, free hotplate and
   first refill delivered [S2].
5. **Subsidy registration** — Bank account registered for refill support
   (where notified) [S3].

## Verification & approval

- OMCs verify declarations and de-duplicate against their databases;
  false declarations are dealt with per scheme rules.

## Deadlines

- None — rolling applications.
