---
type: Government Scheme Application
title: SSY — Application
description: Where and how to open a Sukanya Samriddhi Account.
scheme_id: SSY
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
    resource: https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=171
    title: Sukanya Samriddhi Account Scheme, 2019 (rules)
    author: National Savings Institute
    last_modified: not_verified
  - id: S2
    resource: https://www.indiapost.gov.in/
    title: India Post — SSY operational page
    author: Department of Posts
    last_modified: not_verified
---

# SSY — Application

## Channels

```yaml
application:
  mode:
    - offline_at_post_office
    - offline_at_authorized_bank
  official_info: https://www.indiapost.gov.in/ (India Post) and authorised bank portals
  ministry: Ministry of Finance (Department of Financial Services)
  implementing_agency: Department of Posts; authorised scheduled banks (public sector + select private banks)
  other_channels:
    - India Post Payments Bank (IPPB) assisted services at doorstep (varies)
  deadline: none (child-age window is the only constraint: open before the girl turns 10)
```

## Process

1. **Obtain Form-1** — from a post office or authorised bank branch (or
   official downloads) [S1].
2. **Submit** — with the girl's birth certificate, guardian KYC, photos
   and the initial deposit [S1].
3. **Account opening** — passbook issued; account number allotted.
4. **Deposits** — maintain ≥ ₹250/year (max ₹1.5 lakh/year) for 15
   years; deposits by cash/cheque/online transfer per operator.
5. **Servicing** — deposits, withdrawals (education), closure processed
   at the operating branch/bank; portability between offices/banks per
   rules.

## Verification & approval

- Operator (post office/bank) verifies documents and opens the account;
  no separate government approval step.

## Deadlines

- None; the operative constraint is the **age-10 opening window** [S1].
