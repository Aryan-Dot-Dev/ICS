---
type: Government Scheme Application
title: PMEGP — Application
description: e-Portal application flow for PMEGP.
scheme_id: PMEGP
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
    resource: https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp
    title: PMEGP e-Portal (KVIC)
    author: KVIC
    last_modified: not_verified
---

# PMEGP — Application

## Channels

```yaml
application:
  mode:
    - online_only
  official_portal: https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp
  ministry: Ministry of MSME via KVIC
  implementing_agency: KVIC (national), KVIBs and District Industries Centres (field)
  other_channels:
    - Common Service Centres (CSCs) may assist with the online application
  deadline: none (rolling; annual physical targets within each financial year)
```

## Process

1. **Register** on the
   [PMEGP e-Portal](https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp)
   using Aadhaar-linked mobile OTP [S1].
2. **Enter applicant and unit details** — location (rural/urban), sector
   (manufacturing/service), project cost, category, banking details.
3. **District Task Force screening** — applications screened for
   authenticity and regional/cluster balance (per guidelines).
4. **Bank appraisal & sanction** — the lending bank appraises and
   sanctions; interviews as per bank norms.
5. **EDP training** — compulsory after sanction; 2/3/6 days by project
   size (per KVIC norms) [S1].
6. **Unit setup & subsidy release** — margin-money subsidy credited to
   the borrower's loan account after the unit is established
   (back-ended).
7. **Track** — application and subsidy status on the e-portal.

## Verification & approval

- District Task Force + lending bank + KVIC/KVIB/DIC jointly implement;
  sanction decision rests with the bank.

## Deadlines

- Rolling applications within each financial year's allocation; no
  published end date for applicants.
