---
type: Government Scheme Application
title: Stand-Up India — Application
description: Channels and process for Stand-Up India loans.
scheme_id: SUI
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
    resource: https://www.standupmitra.in/
    title: Standup Mitra — Official portal
    author: SIDBI
    last_modified: not_verified
  - id: S2
    resource: https://financialservices.gov.in/
    title: Department of Financial Services — Stand-Up India
    author: DFS, Ministry of Finance
    last_modified: not_verified
---

# Stand-Up India — Application

## Channels

```yaml
application:
  mode:
    - online_via_standup_mitra
    - offline_at_bank_branch
  official_portal: https://www.standupmitra.in/
  ministry: Department of Financial Services, Ministry of Finance (facilitation by SIDBI)
  implementing_agency: all scheduled bank branches (RBL/RRB/Cooperative) with SIDBI as scheme facilitator
  other_channels:
    - Udyami helpline (facilitation, listed on Standup Mitra)
    - Lead district managers / bank branches
  deadline: none (rolling)
```

## Process

1. **Register** on [Standup Mitra](https://www.standupmitra.in/) and
   describe the proposed greenfield activity [S1].
2. **Get handholding support** — mentoring, business-plan development,
   connection to training/market support agencies [S1].
3. **Select a bank** — application routed to a chosen bank branch
   [S1].
4. **Submit documents** — per [documents.md](documents.md) (KYC, caste
   certificate if SC/ST branch, project report, declarations).
5. **Bank appraisal & sanction** — the bank appraises and sanctions the
   composite loan (term + working capital) [S2].
6. **Disbursement & utilisation** — as per sanction terms; RuPay card
   for working-capital draws where provided.

## Verification & approval

- Sanction authority is the lending bank; SIDBI/DFS oversee scheme
  functioning; no separate government approval step for individuals.

## Deadlines

- None — rolling applications at any bank branch or via the portal.
