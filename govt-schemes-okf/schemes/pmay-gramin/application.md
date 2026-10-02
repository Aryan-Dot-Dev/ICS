---
type: Government Scheme Application
title: PMAY-G — Application
description: How PMAY-G beneficiaries are identified and onboarded.
scheme_id: PMAY-G
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
    resource: https://pmayg.dord.gov.in/netiayHome/home.aspx
    title: PMAY-G official portal
    author: MoRD
    last_modified: not_verified
---

# PMAY-G — Application

## Channels

```yaml
application:
  mode:
    - survey_based_identification
    - panchayat_block_assisted_registration
  official_portal: https://pmayg.dord.gov.in/netiayHome/home.aspx
  ministry: Ministry of Rural Development
  implementing_agency: States/UTs Rural Development departments; Gram Panchayats; blocks; AwaasSoft MIS
  other_channels:
    - Awaas+/AwaasSoft survey by functionaries
    - Citizen portal features (e.g., PMAY-G status services) as offered by States
  deadline: none (ongoing programme; survey rounds announced by States)
```

## Process

1. **Survey inclusion** — Household data captured in Awaas+/AwaasSoft
   survey by government functionaries; Gram Sabha verification of
   housing status [S1].
2. **Waitlist** — Verified households form the permanent waitlist in
   AwaasSoft [S1].
3. **Sanction** — Households sanctioned as targets are allocated;
   sanction orders generated in AwaasSoft.
4. **Installments** — Funds released by DBT at verified construction
   stages (geo-tagged photographs via AwaasApp) [S1].
5. **Convergence** — MGNREGS wage days and SBM-G toilet support
   activated alongside construction [S1].

## Verification & approval

- District/Block/Panchayat machinery verifies eligibility; State-level
  sanctions; MoRD monitors via AwaasSoft dashboard.

## Deadlines

- None for individuals; construction completion timelines per sanction
  terms apply to sanctioned beneficiaries.
