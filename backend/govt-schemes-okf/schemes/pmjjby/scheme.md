---
type: Government Scheme
title: PMJJBY (Pradhan Mantri Jeevan Jyoti Bima Yojana)
description: One-year renewable term life cover of Rs.2 lakh for an annual premium of Rs.436 for bank account holders aged 18-50.
scheme_id: PMJJBY
official_name: Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)
government_level: central
ministry: Department of Financial Services, Ministry of Finance; implemented through life insurance companies and banks
status: stable
categories:
  - insurance
  - social-security
  - financial-inclusion
benefit_types:
  - insurance
target_groups:
  - bank_account_holders_18_50
geographies:
  - IN
applicant_types:
  - individual
eligibility_version: "2026-09"
effective_from: 2015-05-09
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
    resource: https://financialservices.gov.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby
    title: DFS — Pradhan Mantri Jeevan Jyoti Bima Yojana
    author: Department of Financial Services, Ministry of Finance
    last_modified: not_verified
  - id: S2
    resource: https://jansuraksha.gov.in/
    title: Jansuraksha — official portal for PMJJBY/PMSBY
    author: Government of India
    last_modified: not_verified
---

# PMJJBY — Pradhan Mantri Jeevan Jyoti Bima Yojana

## Overview

PMJJBY is a one-year renewable **term life insurance** scheme offering
**₹2 lakh** on death of the member (any cause), for an annual premium of
**₹436** auto-debited from the member's bank account. Available to bank-
account holders aged **18–50** with consent to auto-debit; one policy
per individual [S1]. (Historical premium change from ₹330 to ₹436 is
recorded in the historical section.)

## Objective

To provide affordable life-insurance protection to the masses through
the banking channel, especially for lower-income households.

## Target Beneficiaries

Bank-account holders aged 18–50 (individuals) consenting to auto-debit.

Concept links: [low-income-household](../../concepts/low-income-household.md) ·
[senior-citizen](../../concepts/senior-citizen.md) (not eligible to join
above 50 — important explanation point)

## Key Features

- ₹2 lakh death cover (all-cause) per policy year [S1]
- Annual premium ₹436 via auto-debit [S1]
- Renewal annually up to age 55 (cover allowed up to 55 for members who
  joined by 50; verify current tenure terms on the official page)
- Enrolment via bank branch/net-banking/CSC/insurer
- Claims via nominee to the participating life insurer through the bank

## Eligibility

Summary — see [eligibility.md](eligibility.md): bank account, 18–50,
consent, one policy.

## Benefits

₹2 lakh term life cover. Details: [benefits.md](benefits.md).

## Documents

Consent form, bank account, KYC, nominee details; claim documents per
insurer. Details: [documents.md](documents.md).

## Application

Via bank branch / net-banking / CSC / insurer channels. Details:
[application.md](application.md).

## Important Conditions

- Self-declaration of good health at entry; first-year claims may be
  scrutinised for pre-existing conditions per policy terms (45-day
  waiting-period style conditions per master policy — verify current
  terms)
- One policy per individual across banks

## Exclusions

Age outside 18–50; no bank account; policy-specific claim exclusions
(e.g., death within waiting period due to pre-existing condition, per
master policy). Structured list: [exclusions.md](exclusions.md).

## Related Schemes

- [PMSBY](../pmsby/scheme.md) — accident-cover companion scheme
- [APY](../apy/scheme.md) — pension for the same population
- [NSAP](../nsap/scheme.md) — non-contributory safety net

## Official Sources

1. [DFS PMJJBY page](https://financialservices.gov.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby) [S1]
2. [Jansuraksha portal](https://jansuraksha.gov.in/) [S2]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_life_insurance
    - protect_family_financially
    - low_cost_life_cover
  keywords:
    - pmjjby
    - life insurance 436
    - 2 lakh life cover
    - jeevan jyoti bima
  semantic_topics:
    - term life insurance
    - family financial protection
    - financial inclusion
```

## Historical (superseded)

- Premium was **₹330/year** at launch (2015); revised to **₹436/year**
  from the 2022 policy year (Government notification). The engine must
  quote ₹436 as operative and treat ₹330 as historical.
