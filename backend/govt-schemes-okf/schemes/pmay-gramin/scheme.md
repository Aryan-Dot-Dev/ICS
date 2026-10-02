---
type: Government Scheme
title: PMAY-G (Pradhan Mantri Awas Yojana – Gramin)
description: Pucca houses with basic amenities for rural houseless households and those in kutcha/dilapidated houses, with unit assistance of Rs.1.20-1.30 lakh.
scheme_id: PMAY-G
official_name: Pradhan Mantri Awaas Yojana – Gramin (PMAY-G)
government_level: central
ministry: Ministry of Rural Development (MoRD), Government of India
status: stable
categories:
  - housing
  - rural-development
benefit_types:
  - cash-transfer
  - loan
  - service
target_groups:
  - rural_houseless_household
  - rural_households_in_dilapidated_houses
  - secc_rural_households
geographies:
  - IN
applicant_types:
  - household
eligibility_version: "2026-09"
effective_from: 2016-11-20
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
    resource: https://pmayg.dord.gov.in/netiayHome/home.aspx
    title: PMAY-G — Official portal (National Rural Housing Awaas portal)
    author: MoRD, Government of India / DoRD
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2074713
    title: PIB — The Pradhan Mantri Awaas Yojana – Rural (19 Nov 2024)
    author: Press Information Bureau
    last_modified: 2024-11-19
---

# PMAY-G — Pradhan Mantri Awaas Yojana (Gramin)

## Overview

PMAY-G (restructuring the earlier rural housing scheme from 20.11.2016)
aims at a "Housing for All" rural mission: a pucca house with basic
amenities for all houseless households and households living in
kutcha/dilapidated houses. Unit assistance is **₹1.20 lakh in plain
areas** and **₹1.30 lakh in hilly states, difficult areas and
Integrated Action Plan (IAP) districts**, paid in installments directly
to beneficiary accounts (DBT, PFMS) tied to geo-tagged construction
stages via AwaasSoft [S1][S2].

## Objective

To provide pucca houses with basic amenities to rural households that are
houseless or living in kutcha/dilapidated houses.

## Target Beneficiaries

Rural households selected from the SECC 2011-based permanent waitlists
(houseless and houses with 0/1/2 rooms and kutcha walls/roofs), verified
by Gram Sabhas. (Note: SECC-2011 data forms the selection base; current
selection follows State verification and Awaas+ surveys.)

Concept links: [low-income-household](../../concepts/low-income-household.md) ·
[household](../../concepts/household.md) ·
[person-with-disability](../../concepts/person-with-disability.md)

## Key Features

- ₹1.20 lakh (plains) / ₹1.30 lakh (hilly/difficult/IAP areas) unit
  assistance [S2]
- 90 days of unskilled wage component from MGNREGS convergence [S2]
- ₹12,000 for toilet construction in convergence with Swachh Bharat
  Mission – Grameen [S2]
- Institutional loan up to ₹70,000 at reduced interest (3% reduced
  rate, per PIB description) for eligible beneficiaries [S2]
- House design flexibility, Locally available materials, quality via
  AwaasSoft + geo-tagging (AwaasApp)
- DBT to beneficiary's account; installments tied to construction stages

## Eligibility

Summary — see [eligibility.md](eligibility.md): rural household, on the
permanent waitlist derived from SECC/verification, houseless or in
kutcha/dilapidated house, not previously assisted.

## Benefits

Unit assistance + convergence benefits. Details:
[benefits.md](benefits.md).

## Documents

Job card/beneficiary verification, Aadhaar, bank account, land
documents. Details: [documents.md](documents.md).

## Application

Beneficiaries are **identified via Awaas+ survey / permanent waitlist
through Gram Sabha and State machinery** — not a walk-in individual
application; states add households via Awaas+ 2.0 survey processes.
Details: [application.md](application.md).

## Important Conditions

- Selection is waitlist-based; individual applications register interest
  for future surveys/verification
- Construction must follow approved designs and geo-tagged stage
  verification for installments

## Exclusions

Households already assisted, those owning pucca houses, excluded
categories (government employees, income-tax payers, motorised vehicle
ownership etc. per SECC-based verification rules). Structured list:
[exclusions.md](exclusions.md).

## Related Schemes

- [PMAY-U](../pmay-urban/scheme.md) — urban counterpart
- MGNREGS wage convergence — referenced under benefits; MGNREGS itself is not one of the 20 schemes in this bundle
- [NSAP](../nsap/scheme.md) — rural social pensions

## Official Sources

1. [PMAY-G portal](https://pmayg.dord.gov.in/netiayHome/home.aspx) [S1]
2. [PIB PMAY-R release (19 Nov 2024)](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2074713) [S2]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - build_village_house
    - get_rural_housing_assistance
    - replace_kutcha_house
  keywords:
    - pmay g
    - rural housing
    - awaas yojana
    - gramin awas
    - 1.2 lakh house assistance
  semantic_topics:
    - rural housing
    - village development
    - housing for poor
```
