---
type: Government Scheme
title: NSAP (National Social Assistance Programme)
description: Umbrella of social pensions — IGNOAPS, IGNWPS, IGNDPS, NFBS and Annapurna — for BPL households, with central shares of Rs.200-500/month.
scheme_id: NSAP
official_name: National Social Assistance Programme (NSAP)
government_level: central
ministry: Ministry of Rural Development (MoRD), Government of India
status: stable
categories:
  - social-security
  - pension
  - rural-development
benefit_types:
  - pension
  - cash-transfer
  - in-kind
target_groups:
  - bpl_elderly
  - bpl_widows
  - bpl_persons_with_disabilities
  - bereaved_bpl_families
geographies:
  - IN
applicant_types:
  - individual
  - senior-citizen
  - widow
eligibility_version: "2026-09"
effective_from: 1995-08-15
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
    resource: https://nsap.dord.gov.in/
    title: NSAP — Official portal (MoRD)
    author: Ministry of Rural Development / NIC
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2187327
    title: PIB — National Social Assistance Programme (7 Nov 2025)
    author: Press Information Bureau
    last_modified: 2025-11-07
  - id: S3
    resource: https://sansad.in/getFile/annex/268/AU2384_qLzV6d.pdf?source=pqars
    title: Lok Sabha annexure — NSAP details incl. Annapurna (Aug 2025)
    author: Parliament of India / MoRD
    last_modified: 2025-08-08
---

# NSAP — National Social Assistance Programme

## Overview

NSAP (launched 15.08.1995) is MoRD's umbrella programme of social
assistance for poor households, delivered through States/UTs with DBT.
Components and central-assistance rates [S2][S3]:

- **IGNOAPS** (Indira Gandhi National Old Age Pension): ₹200/month
  (60–79 years), ₹500/month (80+), for BPL elderly
- **IGNWPS** (Indira Gandhi National Widow Pension): ₹300/month for BPL
  widows aged 40–79 (80+ shift to old-age rate per guidelines)
- **IGNDPS** (Indira Gandhi National Disability Pension): ₹300/month for
  BPL persons with severe/multiple disabilities, 18–79
- **NFBS** (National Family Benefit Scheme): ₹20,000 one-time to the
  bereaved household on the death of the primary breadwinner
- **Annapurna**: 10 kg foodgrains/month free for eligible senior
  citizens not receiving IGNOAPS

**Important:** central amounts have been unchanged for years; most
States **top up** the pension substantially. The engine must quote the
central share and mark state top-ups as variable.

## Objective

To ensure minimum national standards of social assistance — old-age,
widow and disability pensions and family-benefit support — to
households below the poverty line.

## Target Beneficiaries

BPL/SECC-identified households' members by age/status: elderly (60+),
widows (40–79), persons with severe/multiple disabilities (18–79),
bereaved households (NFBS), and eligible non-pensioned seniors
(Annapurna).

Concept links: [senior-citizen](../../concepts/senior-citizen.md) ·
[person-with-disability](../../concepts/person-with-disability.md) ·
[woman](../../concepts/woman.md) ·
[low-income-household](../../concepts/low-income-household.md)

## Key Features

- Five components as above; DBT to beneficiaries' accounts [S1]
- BPL determination per State criteria (SECC/rank-list based, State-
  operated) [S2]
- State top-ups common — total pension varies by State (informational)
- Application through State machinery (Block/Panchayat/ULB) and State
  NSAP portals; central portal tracks payments
- Eligibility verification and sanction by State Governments

## Eligibility

Summary — see [eligibility.md](eligibility.md): BPL + age/status
conditions per component; NFBS is household-bereavement based.

## Benefits

Component-wise amounts as above. Details: [benefits.md](benefits.md).

## Documents

BPL/ration documentation, age proof, status certificates (widow/
disability), bank account, death certificate (NFBS). Details:
[documents.md](documents.md).

## Application

Via State/UT machinery (Panchayat/Block/ULB or State NSAP portals);
sanction by State. Details: [application.md](application.md).

## Important Conditions

- One pension component per person at a time
- IGNOAPS/IGNWPS/IGNDPS require continued BPL status and residence
- State-specific implementation rules and top-ups apply

## Exclusions

Non-BPL households; persons already receiving another NSAP component
or equivalent pension; age/status outside component bands. Structured
list: [exclusions.md](exclusions.md).

## Related Schemes

- [APY](../apy/scheme.md) — contributory pension (non-BPL inclusive)
- [PM-JAY](../pm-jay/scheme.md) — health cover for the same population (incl. 70+ universal)
- [PMAY-G](../pmay-gramin/scheme.md) — housing for rural poor households

## Official Sources

1. [NSAP portal](https://nsap.dord.gov.in/) [S1]
2. [PIB NSAP release (Nov 2025)](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2187327) [S2]
3. [Lok Sabha annexure on NSAP](https://sansad.in/getFile/annex/268/AU2384_qLzV6d.pdf?source=pqars) [S3]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_old_age_pension
    - get_widow_pension
    - get_disability_pension
    - family_death_benefit
  keywords:
    - old age pension
    - widow pension
    - disability pension
    - nsap
    - ignoaps
    - family benefit scheme 20000
  semantic_topics:
    - social security
    - non-contributory pensions
    - poverty alleviation
```
