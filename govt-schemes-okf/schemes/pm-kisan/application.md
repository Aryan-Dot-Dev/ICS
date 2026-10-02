---
type: Government Scheme Application
title: PM-KISAN — Application
description: Application channels, process and verification for PM-KISAN.
scheme_id: PM-KISAN
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
    resource: https://pmkisan.gov.in/
    title: PM Kisan Samman Nidhi — Official Portal
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PM-KISAN — Application

## Channels

```yaml
application:
  mode:
    - online
    - offline_through_state_machinery
  official_portal: https://pmkisan.gov.in/
  ministry: Ministry of Agriculture and Farmers Welfare
  implementing_agency: States/UTs (data capture & verification) with MoA&FW at the centre
  other_channels:
    - Common Service Centres (CSCs) — new farmer registration and eKYC
    - State Nodal Officers / Gram Panchayats — beneficiary identification and upload
    - UMANG mobile app — scheme services
    - PM-KISAN Farmers Corner — self-registration and eKYC
  channel_note: Farmers Corner / CSC flow for self-registration; most beneficiaries are entered by States from land-record surveys.
  deadline: rolling (no application deadline; installments follow eligibility confirmation)
```

## Process

1. **Registration** — Farmer registers via Farmers Corner (New Farmer
   Registration) on [pmkisan.gov.in](https://pmkisan.gov.in/) or at a
   CSC, providing Aadhaar, bank account and land-record details [S1].
2. **eKYC** — Mandatory Aadhaar eKYC (OTP/biometric/face auth) online
   or at a CSC [S1].
3. **State verification** — State/UT verifies land records and
   eligibility, then uploads/approves the beneficiary in the PM-KISAN
   system [S2].
4. **Approval** — Beneficiary appears in the PM-KISAN beneficiary list
   after State approval.
5. **Payment** — Installments are released in the national DBT cycle
   (April–July, August–November, December–March) into the Aadhaar-seeded
   account [S1].
6. **Status tracking** — Beneficiary status / installment status via the
   portal's beneficiary pages or UMANG.

## Verification & grievance

- Verification of eligibility is a **State/UT responsibility** (land
  records) [S2].
- Portal provides beneficiary-status, eKYC and grievance/contact
  facilities (links change; navigate from the homepage).

## Deadlines

- None for registration; installments are periodic. No application
  deadline is published in the sources reviewed.
