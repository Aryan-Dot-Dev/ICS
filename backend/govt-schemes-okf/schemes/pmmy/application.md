---
type: Government Scheme Application
title: PMMY — Application
description: Channels and process for obtaining a Mudra loan.
scheme_id: PMMY
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
    resource: https://www.mudra.org.in/
    title: MUDRA — Official website
    author: MUDRA Ltd
    last_modified: not_verified
  - id: S3
    resource: https://www.jansamarth.in/business-loan-pradhan-mantri-mudra-yojana-scheme
    title: JanSamarth — PMMY business loan
    author: Department of Financial Services / NeGD
    last_modified: not_verified
---

# PMMY — Application

## Channels

```yaml
application:
  mode:
    - offline_at_lending_institution
    - online_via_jansamarth
  info_portal: https://www.mudra.org.in/
  facilitation_portal: https://www.jansamarth.in/
  ministry: Department of Financial Services, Ministry of Finance
  implementing_agency: Banks, NBFCs and Micro Finance Institutions (MUDRA Ltd coordinates/refinances)
  other_channels:
    - Any scheduled commercial bank branch (public/private/RGB)
    - Regional Rural Banks, Cooperative Banks
    - NBFCs and MFIs registered with RBI
    - UMANG app (scheme information)
  deadline: none (rolling applications)
```

## Process

1. **Define the activity** — Identify the non-farm income-generating
   activity and required amount; choose category (Shishu/Kishore/Tarun/
   Tarun Plus) [S1].
2. **Choose channel** — Apply at any lending institution branch, or
   through the Government's
   [JanSamarth](https://www.jansamarth.in/business-loan-pradhan-mantri-mudra-yojana-scheme)
   portal for guided application [S3].
3. **Submit KYC + documents** — Per [documents.md](documents.md).
4. **Credit assessment** — Lending institution evaluates and sanctions;
   collateral-free per scheme design [S1].
5. **Disbursement** — Into the borrower's bank account; repayment per
   agreed schedule.
6. **Tarun Plus** — Evidence of prior Tarun loan repayment is produced
   to the lending institution [S3].

## Verification & approval

- Sanction and pricing are lending-institution decisions under RBI
  regulation; MUDRA does not sanction individual loans.

## Deadlines

- None — rolling. No application deadline exists under PMMY.
