---
type: Government Scheme Application
title: PMAY-U 2.0 — Application
description: Application channels for PMAY-U 2.0 (survey, applicant portal, ISS via PLIs).
scheme_id: PMAY-U
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
    resource: https://pmay-urban.gov.in/
    title: PMAY-Urban official website
    author: MoHUA
    last_modified: not_verified
  - id: S3
    resource: https://pmaymis.gov.in/PMAYMIS2_2024/PmayISS.aspx
    title: PMAY-U 2.0 ISS page
    author: MoHUA / PMAY MIS
    last_modified: not_verified
  - id: S4
    resource: https://pmaymis.gov.in/pmaymis2_2024/PMAY_SURVEY/Applicant_Login.aspx
    title: PMAY-U 2.0 applicant login
    author: MoHUA
    last_modified: not_verified
---

# PMAY-U 2.0 — Application

## Channels

```yaml
application:
  mode:
    - online_applicant_portal
    - ulb_demand_survey
    - through_lending_institution_for_iss
  official_portal: https://pmay-urban.gov.in/
  applicant_login: https://pmaymis.gov.in/pmaymis2_2024/PMAY_SURVEY/Applicant_Login.aspx
  iss_page: https://pmaymis.gov.in/PMAYMIS2_2024/PmayISS.aspx
  ministry: Ministry of Housing and Urban Affairs
  implementing_agency: States/UTs and Urban Local Bodies (projects & surveys); PLIs for ISS
  other_channels:
    - Common Service Centres (assistance)
    - PMAY-U mobile app
    - UMANG app
  deadline: per State/UT demand-survey and project cycles (dynamic — verify with ULB)
```

## Process

1. **Check vertical fit** — BLC (own construction), AHP (approved
   project purchase), ARH (rental), ISS (home-loan subsidy) [S1][S2].
2. **Demand survey / applicant registration** — through ULB survey or
   the applicant portal [S4], with Aadhaar and family details.
3. **Verification** — ULB/State validates eligibility (no pucca house,
   income category), de-duplication (incl. PMAY-G cross-check) [S1].
4. **Allotment / sanction** — vertical-specific: project allotment (AHP/
   ARH) or construction approval (BLC) or loan sanction (ISS) [S3].
5. **Assistance** — BLC via DBT at geo-tagged construction stages; ISS
   subsidy credited to the loan account by the PLI [S3].

## Verification & approval

- States/UTs appraise and approve projects at State level; MoHUA
  monitors centrally (dashboard/MIS) [S1].
- ISS validation involves UIDAI-Aadhaar validation and de-duplication
  with other verticals [S1].

## Deadlines

- No single national deadline; State demand-survey windows and project
  cycles apply. ISS applies to loans sanctioned/disbursed on/after
  01.09.2024 [S3] within the PMAY-U 2.0 period.
