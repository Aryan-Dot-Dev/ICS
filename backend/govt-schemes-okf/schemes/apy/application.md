---
type: Government Scheme Application
title: APY — Application
description: Channels and process for APY enrolment.
scheme_id: APY
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
    resource: https://jansuraksha.gov.in/Files/APY/ENGLISH/APY.pdf
    title: Atal Pension Yojana — Details of the Scheme
    author: Government of India
    last_modified: not_verified
  - id: S2
    resource: https://npscra.nsdl.co.in/scheme-details.php
    title: NSDL CRA — APY scheme details
    author: NSDL CRA
    last_modified: not_verified
---

# APY — Application

## Channels

```yaml
application:
  mode:
    - offline_at_bank_branch
    - online_via_bank_platforms
  info_portal: https://npscra.nsdl.co.in/scheme-details.php
  ministry: Ministry of Finance (PFRDA regulates; NSDL CRA maintains records)
  implementing_agency: all scheduled banks (enrolment & collection); NSDL CRA recordkeeping
  other_channels:
    - Bank net-banking/mobile apps (APY module)
    - Common Service Centres (assistance)
    - UMANG app (APY services)
  deadline: none (entry gate is the age window, not a date)
```

## Process

1. **Open/hold a savings account** with any APY-enrolling bank [S1].
2. **Fill the APY form** — choose pension slab (₹1,000–₹5,000); provide
   nominee/spouse details [S1].
3. **Auto-debit mandate** — set the contribution schedule
   (monthly/quarterly/half-yearly) [S1].
4. **PRAN issuance** — APY account (PRAN) created; statements begin.
5. **Contribute till 60** — auto-debits continue; pension starts at 60
   per slab [S1].

## Verification & approval

- Bank verifies KYC and mandate; NSDL CRA maintains the account. No
  separate government approval.

## Deadlines

- None; only the 18–40 entry-age window applies [S1].
