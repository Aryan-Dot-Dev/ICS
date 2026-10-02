---
type: Government Scheme
title: PMSBY (Pradhan Mantri Suraksha Bima Yojana)
description: One-year renewable accidental death and disability cover of Rs.2 lakh for an annual premium of Rs.20.
scheme_id: PMSBY
official_name: Pradhan Mantri Suraksha Bima Yojana (PMSBY)
government_level: central
ministry: Department of Financial Services, Ministry of Finance; implemented through general insurance companies and banks
status: stable
categories:
  - insurance
  - social-security
  - financial-inclusion
benefit_types:
  - insurance
target_groups:
  - bank_account_holders_18_70
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
    resource: https://financialservices.gov.in/pradhan-mantri-suraksha-bima-yojana-pmsby
    title: DFS — Pradhan Mantri Suraksha Bima Yojana
    author: Department of Financial Services, Ministry of Finance
    last_modified: not_verified
  - id: S2
    resource: https://jansuraksha.gov.in/
    title: Jansuraksha — PMSBY/PMJJBY official portal
    author: Government of India
    last_modified: not_verified
---

# PMSBY — Pradhan Mantri Suraksha Bima Yojana

## Overview

PMSBY is a one-year personal accident insurance scheme, renewable
annually, offering **₹2 lakh** for accidental death or permanent total
disability and **₹1 lakh** for permanent partial disability, for an
annual premium of **₹20** auto-debited from the member's bank account.
Available to bank-account holders aged **18–70** who consent to
auto-debit [S1]. (Premium revisions — e.g., historical changes to ₹12 —
are recorded in the historical section; the operative premium is the
one on the official DFS page.)

## Objective

To provide affordable accident insurance to the masses, especially the
poor and underprivileged, through simple bank-channel enrolment.

## Target Beneficiaries

Bank-account holders aged 18–70 (individuals) who join with auto-debit
consent; one policy per individual [S1].

Concept links: [senior-citizen](../../concepts/senior-citizen.md) ·
[low-income-household](../../concepts/low-income-household.md)

## Key Features

- ₹2 lakh cover: accidental death / permanent total disability; ₹1
  lakh: permanent partial disability [S1]
- Annual premium ₹20 (auto-debit on/around 1 June) [S1]
- Renewal by annual auto-debit; withdrawal permitted
- Enrolment via bank (form/branch/net-banking), CSCs and insurer apps
- Claims through the participating insurance company via bank

## Eligibility

Summary — see [eligibility.md](eligibility.md): bank account + age
18–70 + consent.

## Benefits

Accident insurance as above. Details: [benefits.md](benefits.md).

## Documents

Bank account, consent form, Aadhaar/KYC (claim documentation per
insurer). Details: [documents.md](documents.md).

## Application

Through the bank branch / net-banking / CSC / insurer channel.
Details: [application.md](application.md).

## Important Conditions

- Cover attaches for the policy year following enrolment/auto-debit
- Claims subject to policy terms (accident definition, exclusions
  including suicide etc. per master policy)
- Multiple accounts: enrol via one bank account only

## Exclusions

Non-accidental death, self-inflicted injury, war-peril losses etc. per
master policy; persons outside 18–70; those without bank accounts.
Structured list: [exclusions.md](exclusions.md).

## Related Schemes

- [PMJJBY](../pmjjby/scheme.md) — life cover companion scheme
- [APY](../apy/scheme.md) — pension for the same bank-account population
- [PM-JAY](../pm-jay/scheme.md) — hospitalisation cover (distinct)

## Official Sources

1. [DFS PMSBY page](https://financialservices.gov.in/pradhan-mantri-suraksha-bima-yojana-pmsby) [S1]
2. [Jansuraksha portal](https://jansuraksha.gov.in/) [S2]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_accident_insurance
    - protect_family_income_from_accidents
    - low_cost_insurance
  keywords:
    - pmsby
    - accident insurance 20 rupees
    - 2 lakh accident cover
    - suraksha bima
  semantic_topics:
    - personal accident insurance
    - financial protection
    - financial inclusion
```
