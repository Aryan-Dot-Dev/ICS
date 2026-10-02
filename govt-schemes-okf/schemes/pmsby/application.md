---
type: Government Scheme Application
title: PMSBY — Application
description: Enrolment channels and claim process for PMSBY.
scheme_id: PMSBY
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
    resource: https://financialservices.gov.in/pradhan-mantri-suraksha-bima-yojana-pmsby
    title: DFS — PMSBY
    author: Department of Financial Services
    last_modified: not_verified
  - id: S2
    resource: https://jansuraksha.gov.in/
    title: Jansuraksha portal
    author: Government of India
    last_modified: not_verified
---

# PMSBY — Application

## Channels

```yaml
application:
  mode:
    - offline_at_bank_branch
    - online_via_bank
  official_info: https://financialservices.gov.in/pradhan-mantri-suraksha-bima-yojana-pmsby
  ministry: Department of Financial Services, Ministry of Finance
  implementing_agency: participating general insurance companies through banks
  other_channels:
    - Common Service Centres (CSC)
    - Bank net-banking/mobile apps
    - Insurer portals/apps
  deadline: annual enrolment cycle with mid-year join options per policy terms (verify current cycle on official pages)
```

## Enrolment process

1. **Hold a bank account** (any participating bank) [S1].
2. **Submit consent form** — at branch, or via net-banking/mobile/CSC;
   consent to ₹20 annual auto-debit [S1].
3. **Auto-debit** — premium debited around the annual cycle date [S1].
4. **Confirmation** — enrolment confirmation from bank/insurer; policy
   certificate (digital).

## Claim process

1. **Intimate** — nominee/insured informs the bank/insurer promptly.
2. **Submit claim documents** — per insurer checklist (death/disability
   certificate etc.).
3. **Settlement** — insurer settles to the nominee's/insured's account
   per policy terms [S1].

## Deadlines

- Annual auto-debit cycle; mid-year enrolments covered per policy
  provisions. Claim intimation timelines per policy — treat as
  `informational`, verify with insurer.
