---
type: Government Scheme
title: APY (Atal Pension Yojana)
description: Government co-contribution-backed guaranteed pension of Rs.1,000-5,000 per month from age 60 for subscribers joining at 18-40.
scheme_id: APY
official_name: Atal Pension Yojana (APY)
government_level: central
ministry: Ministry of Finance (PFRDA is the pension regulator; banks are enrollment and collection agents)
status: stable
categories:
  - pension
  - social-security
  - financial-inclusion
benefit_types:
  - pension
target_groups:
  - unorganised_sector_workers
  - any_citizen_18_40
geographies:
  - IN
applicant_types:
  - individual
  - worker
eligibility_version: "2026-09"
effective_from: 2015-06-01
effective_until: null
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
stale_after: 2026-12-31
sources:
  - id: S1
    resource: https://jansuraksha.gov.in/Files/APY/ENGLISH/APY.pdf
    title: Atal Pension Yojana — Details of the Scheme (official brochure)
    author: Government of India (Jansuraksha portal)
    last_modified: not_verified
  - id: S2
    resource: https://npscra.nsdl.co.in/scheme-details.php
    title: NPSCR A (NSDL CRA) — Atal Pension Yojana scheme details
    author: NSDL CRA (PFRDA-registered)
    last_modified: not_verified
---

# APY — Atal Pension Yojana

## Overview

APY (launched 01.06.2015) is a guaranteed-pension scheme administered by
PFRDA through the NSDL CRA, focused on the unorganised sector. Any
citizen aged **18–40** with a bank account can join and choose a
guaranteed pension of **₹1,000 / ₹2,000 / ₹3,000 / ₹4,000 / ₹5,000 per
month** from age 60; contributions vary by entry age and pension slab.
On the subscriber's death the spouse receives the same pension; on both
deaths the purchase price is returned to the nominee. The Government
guarantees the pension level [S1][S2].

## Objective

To provide old-age income security to unorganised-sector workers and
other citizens through guaranteed pensions with government co-
contribution guarantee support.

## Target Beneficiaries

Any Indian citizen aged 18–40 with a bank account — primarily
unorganised-sector workers. Not available to income-tax payers
(statutory exclusion for new enrolments) [S1].

Concept links: [senior-citizen](../../concepts/senior-citizen.md) ·
[low-income-household](../../concepts/low-income-household.md)

## Key Features

- Entry age 18–40; pension starts at 60 [S1]
- Five pension slabs: ₹1,000–₹5,000/month; contribution depends on
  entry age and slab (e.g., ₹42/month at 18 for ₹1,000 slab) [S1]
- Government guarantee of the pension amount; co-contribution for
  eligible years as per scheme terms
- Spouse pension on subscriber's death; corpus to nominee on both
  deaths [S1]
- Monthly/quarterly/half-yearly auto-debit from savings account
- Enrolment through any bank branch or on modular platforms (APY &
  NPS-lite ecosystem)

## Eligibility

Summary — see [eligibility.md](eligibility.md): 18–40, bank account,
not an income-tax payer.

## Benefits

Guaranteed pension ₹1,000–₹5,000/month for life from 60. Details:
[benefits.md](benefits.md).

## Documents

Savings bank account, Aadhaar, KYC, nominee details. Details:
[documents.md](documents.md).

## Application

Through any bank branch (APY form) or digital channels of banks.
Details: [application.md](application.md).

## Important Conditions

- Contribution auto-debit must continue; account must be funded —
  default/discontinuation rules apply (account freezing, not exit with
  refund until 60 or specific conditions)
- One APY account per subscriber
- Pension slab choice fixed at entry (escalation via specific
  procedures per CRA rules)

## Exclusions

Income-tax payers (for new enrolment); under-18/over-40; non-account
holders. Structured list: [exclusions.md](exclusions.md).

## Related Schemes

- [NSAP](../nsap/scheme.md) — non-contributory pensions for BPL elderly
- [PMSBY/PMJJBY](../pmsby/scheme.md) — insurance add-ons for the same population
- [SSY](../ssy/scheme.md) — girl-child savings (family financial planning)

## Official Sources

1. [APY official brochure (Jansuraksha)](https://jansuraksha.gov.in/Files/APY/ENGLISH/APY.pdf) [S1]
2. [NSDL CRA APY page](https://npscra.nsdl.co.in/scheme-details.php) [S2]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - secure_old_age_income
    - guaranteed_pension
    - retirement_planning
  keywords:
    - atal pension
    - apy
    - pension 5000
    - old age pension scheme
    - retirement scheme unorganised
  semantic_topics:
    - retirement planning
    - contributory pension
    - old age security
```
