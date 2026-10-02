---
type: Government Scheme Application
title: PMFBY — Application
description: Enrolment channels, process and claim mechanism for PMFBY.
scheme_id: PMFBY
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
    resource: https://pmfby.gov.in/
    title: PMFBY — Official Crop Insurance Portal
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S2
    resource: https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf
    title: PMFBY Revised Operational Guidelines
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PMFBY — Application

## Channels

```yaml
application:
  mode:
    - online
    - through_bank
    - through_csc
    - through_insurance_company
  official_portal: https://pmfby.gov.in/
  self_registration: https://pmfby.gov.in/selfRegistration
  ministry: Ministry of Agriculture and Farmers Welfare
  implementing_agency: empanelled insurance companies (cluster approach) with States/UTs and MoA&FW
  other_channels:
    - Common Service Centres (CSC login on portal)
    - Lending banks (loanee farmers against crop loans)
    - Enrollment partners / insurance intermediaries
    - PMFBY mobile application
  grievance: Krishi Rakshak Portal & Helpline 14447
  deadline: season-specific cut-off dates declared each season on the portal (dynamic — not stored)
```

## Enrolment process

1. **Check notification** — Confirm the crop/area/season is notified in
   the State notification for the season (portal/state agriculture
   department) [S1].
2. **Register** — Self-registration on
   [pmfby.gov.in](https://pmfby.gov.in/selfRegistration) with KYC; or via
   CSC, bank (loanee), or insurance company [S1].
3. **Declare land & crop** — Provide land/tenancy details and sowing
   proof (non-loanee) [S2].
4. **Pay premium** — Farmer share (2% / 1.5% / 5% of Sum Insured) paid
   online or debited via the loan account [S2].
5. **Confirmation** — Enrolment receipt generated; cover attaches for
   the season [S1].
6. **Loss intimation** — Intimate localised/post-harvest losses within
   the prescribed window, with photographs via portal/app [S2].
7. **Claim** — Claims assessed (YES-TECH / CCEs / weather data) and paid
   by DBT (DigiClaim) to the registered bank account [S1].

## Verification & approval

- Insurance company validates enrolment and claims; yield/loss assessment
  uses government-prescribed technology and CCE data [S2].
- State Governments issue the notifications and oversee implementation.

## Deadlines

- Seasonal cut-off dates (e.g., after sowing windows) are declared each
  season and differ by State/season; they are **not hard-coded here**.
  Always direct the user to pmfby.gov.in for the current cut-off.
