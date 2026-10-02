---
type: Government Scheme Application
title: AB PM-JAY — Application
description: How beneficiaries check eligibility and obtain the Ayushman Card.
scheme_id: PM-JAY
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
    resource: https://pmjay.gov.in/
    title: AB PM-JAY official website
    author: National Health Authority
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2053883
    title: PIB — 70+ expansion
    author: PIB
    last_modified: 2024-10-14
---

# AB PM-JAY — Application

## Channels

```yaml
application:
  mode:
    - online_eligibility_check_and_ekyc
    - assisted_at_csc_ayushman_mitra
  official_portal: https://pmjay.gov.in/
  ministry: Ministry of Health and Family Welfare via National Health Authority
  implementing_agency: State Health Agencies (SHAs) and NHA; empanelled hospitals
  other_channels:
    - Ayushman App (eligibility check, e-KYC, card download)
    - Common Service Centres (CSC)
    - Ayushman Mitra help desks at empanelled hospitals
    - State SHA offices / camps
  deadline: none (ongoing)
```

## Process

1. **Eligibility check** — Search name/mobile/ration/Aadhaar details on
   [pmjay.gov.in](https://pmjay.gov.in/) or the Ayushman App to find the
   family in the eligibility database [S1].
2. **e-KYC** — Aadhaar-based e-KYC (OTP/biometric) for members [S1].
3. **Card issuance** — Ayushman Card (or Ayushman Vay Vandana card for
   70+) generated/downloaded via portal, app, CSC or hospital desk
   [S1][S2].
4. **Avail treatment** — At any empanelled hospital for covered
   packages, cashless [S1].
5. **Grievance** — Via NHA/SHA grievance channels (portal/app).

## Verification & approval

- Name-to-database matching is the core verification; SHAs approve;
  hospitals adjudicate treatment under package rules.
- 70+ applicants are verified by age (Aadhaar) even if not in the SECC
  database [S2].

## Deadlines

- None — the scheme is ongoing; cards can be made at any time.
