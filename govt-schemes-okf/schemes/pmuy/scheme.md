---
type: Government Scheme
title: PMUY (Pradhan Mantri Ujjwala Yojana)
description: Deposit-free LPG connections to adult women from poor households, with free stove/first refill (2.0) and refill subsidies.
scheme_id: PMUY
official_name: Pradhan Mantri Ujjwala Yojana (PMUY)
government_level: central
ministry: Ministry of Petroleum and Natural Gas (MoPNG), Government of India
status: stable
categories:
  - women-and-child
  - clean-cooking-energy
  - financial-inclusion
benefit_types:
  - in-kind
  - subsidy
target_groups:
  - adult_women_of_poor_households
geographies:
  - IN
applicant_types:
  - woman
  - household
eligibility_version: "2026-09"
effective_from: 2016-05-01
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
    resource: https://www.pmuy.gov.in/
    title: PMUY — Official portal
    author: Ministry of Petroleum and Natural Gas / Oil Marketing Companies
    last_modified: not_verified
  - id: S2
    resource: https://www.pmuy.gov.in/ujjwala2.html
    title: PMUY 2.0 — New connection page (eligibility)
    author: MoPNG / OMCs
    last_modified: not_verified
  - id: S3
    resource: https://www.pmuy.gov.in/faq.html
    title: PMUY FAQ
    author: MoPNG / OMCs
    last_modified: not_verified
---

# PMUY — Pradhan Mantri Ujjwala Yojana

## Overview

PMUY (launched 01.05.2016) provides **deposit-free LPG connections** to
adult women from poor households. Under Ujjwala 2.0 (2021 onwards),
eligibility was widened (migrant rules eased) and beneficiaries receive
**free first refill and hotplate/stove** along with the deposit-free
connection [S2]. PMUY consumers receive targeted refill subsidies on
LPG cylinders (the mechanism and rates are revised by Government —
current per-refill support figures must be verified from official
announcements at query time).

## Objective

To provide clean cooking fuel (LPG) to poor households, protect women's
health from smoky kitchens, empower women, and reduce drudgery and
household pollution.

## Target Beneficiaries

Adult women (18+) from poor/deprived families — originally SC/ST, PMAY,
Antyodaya (AAY), forest dwellers, tea-garden/ex-tea-garden, islands,
SECC households, and (Ujjwala 2.0) other poor households identified via
declaration [S3]. The applicant must be a woman of the household with no
other LPG connection in the same household from any OMC.

Concept links: [woman](../../concepts/woman.md) ·
[low-income-household](../../concepts/low-income-household.md)

## Key Features

- Deposit-free connection (no security deposit / initial charges) [S2]
- Free first refill + hotplate/stove (Ujjwala 2.0) [S2]
- Targeted LPG refill subsidy mechanism for PMUY consumers (rates/timing
  as per Government notifications — verify at query time)
- Online application and tracking via [pmuy.gov.in](https://www.pmuy.gov.in/)
  and OMC apps/portals (HP/Indane/BP)
- One connection per household; connection in the woman's name

## Eligibility

Summary — see [eligibility.md](eligibility.md): woman, 18+, poor-
household category/declaration, no existing LPG connection in the
household.

## Benefits

Connection + stove + first refill + refill subsidies. Details:
[benefits.md](benefits.md).

## Documents

Aadhaar, KYC, bank passbook, self-declaration of no household LPG
connection (formats on portal). Details: [documents.md](documents.md).

## Application

Online on pmuy.gov.in (or OMC portals/apps), or offline at gas agency/
distributor with the form. Details: [application.md](application.md).

## Important Conditions

- The **woman** must be the applicant (connection in her name)
- Only **one connection per household**
- The declaration of no existing LPG connection is a legal attestation;
  false declarations attract consequences per scheme rules

## Exclusions

Households already having an LPG connection; men are not applicants;
already-availed PMUY beneficiaries. Structured list:
[exclusions.md](exclusions.md).

## Related Schemes

- [NSAP](../nsap/scheme.md) — welfare pensions for poor households
- [PMMVY](../pmmvy/scheme.md) — maternal cash support
- [PMAY-G](../pmay-gramin/scheme.md) — rural housing for poor households

## Official Sources

1. [PMUY portal](https://www.pmuy.gov.in/) [S1]
2. [Ujjwala 2.0 page](https://www.pmuy.gov.in/ujjwala2.html) [S2]
3. [PMUY FAQ](https://www.pmuy.gov.in/faq.html) [S3]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_free_gas_connection
    - switch_to_clean_cooking_fuel
    - reduce_cooking_fuel_cost
  keywords:
    - ujjwala yojana
    - free gas connection
    - lpg connection subsidy
    - gas cylinder subsidy
    - ujjwala 2.0
  semantic_topics:
    - clean cooking energy
    - women empowerment
    - household energy access
```
