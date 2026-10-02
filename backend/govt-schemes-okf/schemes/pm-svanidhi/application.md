---
type: Government Scheme Application
title: PM SVANidhi — Application
description: Application channels and process for PM SVANidhi loans.
scheme_id: PM-SVANIDHI
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
    resource: https://pmsvanidhi.mohua.gov.in/
    title: PM SVANidhi official portal
    author: MoHUA
    last_modified: not_verified
  - id: S4
    resource: https://mohua.gov.in/static/uploads/2026/01/a3a17370145e0870a79df74bfbab766f.pdf
    title: PM SVANidhi Loan Operational Guidelines
    author: MoHUA
    last_modified: 2026-01-01
---

# PM SVANidhi — Application

## Channels

```yaml
application:
  mode:
    - online_portal
    - through_lending_institution
    - assisted_at_ulb
  official_portal: https://pmsvanidhi.mohua.gov.in/
  ministry: Ministry of Housing and Urban Affairs
  implementing_agency: MoHUA with Small Industries Development Bank of India (SIDBI) as technical partner; ULBs; lending institutions
  other_channels:
    - PM SVANidhi mobile app
    - Common Service Centres (CSC)
    - Lending bank branches / BC points / business correspondents
    - Town Vending Committees (TVCs) at ULBs
  deadline: lending period runs to 31.03.2030 (per restructuring) [S4]; no applicant deadline within that window
```

## Process

1. **Obtain vending recognition** — CoV from the ULB/TVC, or apply for
   LoR/survey identification [S4].
2. **Apply** — online via the portal/app, at a lending institution, or
   through ULB/CSC assistance [S1].
3. **Lender appraisal & sanction** — minimal-documentation flow per
   operational guidelines [S4].
4. **Disbursement** — into the vendor's bank account / digital wallet
   linkage.
5. **Repayment** — per schedule; timely/early repayment triggers the 7%
   interest-subsidy DBT [S1].
6. **Progression** — apply for next tranche after full repayment;
   digital-transactions cashback accrues alongside [S1].

## Verification & approval

- ULB validates vending recognition; lending institutions appraise and
  sanction; SIDBI/MoHUA monitor through the SVANidhi MIS.

## Deadlines

- No per-application deadline; the programme's lending window runs to
  31.03.2030 (restructured) [S2][S4].
