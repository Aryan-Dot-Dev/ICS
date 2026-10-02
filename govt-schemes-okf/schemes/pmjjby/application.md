---
type: Government Scheme Application
title: PMJJBY — Application
description: Enrolment channels and claim process for PMJJBY.
scheme_id: PMJJBY
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
    resource: https://financialservices.gov.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby
    title: DFS — PMJJBY
    author: Department of Financial Services
    last_modified: not_verified
  - id: S2
    resource: https://jansuraksha.gov.in/
    title: Jansuraksha portal
    author: Government of India
    last_modified: not_verified
---

# PMJJBY — Application

## Channels

```yaml
application:
  mode:
    - offline_at_bank_branch
    - online_via_bank
  official_info: https://financialservices.gov.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby
  ministry: Department of Financial Services, Ministry of Finance
  implementing_agency: participating life insurance companies through banks
  other_channels:
    - Common Service Centres (CSC)
    - Bank net-banking/mobile apps
    - Insurer portals/apps
  deadline: annual enrolment/renewal cycle with mid-year join options per policy terms
```

## Enrolment process

1. **Hold a bank account** with a participating bank [S1].
2. **Submit consent form** — branch, net-banking, mobile or CSC; consent
   to ₹436 annual auto-debit + health declaration [S1].
3. **Auto-debit & confirmation** — premium debited on the annual cycle;
   enrolment confirmation issued.
4. **Maintain renewal** — annual auto-debit continues cover.

## Claim process

1. **Nominee intimates** the bank/insurer with death information.
2. **Submit claim documents** — death certificate, nominee KYC, claim
   forms per insurer checklist.
3. **Settlement** — insurer pays ₹2 lakh to the nominee's account per
   policy terms [S1].

## Deadlines

- Annual auto-debit cycle; mid-year enrolment covered per policy
  provisions. Claim intimation timelines per policy — verify with
  insurer.
