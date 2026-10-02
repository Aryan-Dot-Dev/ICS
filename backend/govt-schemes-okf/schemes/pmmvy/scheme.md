---
type: Government Scheme
title: PMMVY (Pradhan Mantri Matru Vandana Yojana)
description: Maternity benefit of Rs.5,000 for the first living child (2 instalments) and Rs.6,000 for a second girl child, DBT to the mother.
scheme_id: PMMVY
official_name: Pradhan Mantri Matru Vandana Yojana (PMMVY)
government_level: central
ministry: Ministry of Women and Child Development (MoWCD)
status: stable
categories:
  - women-and-child
  - social-security
benefit_types:
  - cash-transfer
target_groups:
  - pregnant_women_and_lactating_mothers
geographies:
  - IN
applicant_types:
  - pregnant-woman
  - woman
eligibility_version: "2026-09"
effective_from: 2017-01-01
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
    resource: https://pmmvy.wcd.gov.in/
    title: PMMVY — Official portal (MoWCD)
    author: Ministry of Women and Child Development
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2270668
    title: PIB — PMMVY strengthening maternal care (Jun 2026)
    author: Press Information Bureau
    last_modified: 2026-06-09
  - id: S3
    resource: https://en.vikaspedia.in/viewcontent/social-welfare/women-and-child-development/women-development-1/pradhan-mantri-matru-vandana-yojana
    title: Vikaspedia (Govt of India initiative) — PMMVY instalment structure
    author:vikaspedia — Government of India initiative
    last_modified: not_verified
---

# PMMVY — Pradhan Mantri Matru Vandana Yojana

## Overview

PMMVY (launched 01.01.2017) is a maternity-benefit programme of MoWCD:
**₹5,000 for the first living child**, paid in **two instalments**
(after early pregnancy registration / ANC and after birth registration
with childhood immunisation), directly to the mother's bank account via
the PMMVY-CAS (Common Application Software) [S1][S3]. For the **second
living child if it is a girl**, a **₹6,000** incentive applies under the
Mission Shakti framework (per PIB 2026 description) [S2]. The scheme
conditions cash support on health-seeking behaviours (ANC, institutional
birth registration, immunisation) [S1].

## Objective

To provide partial wage compensation to pregnant women, promote health-
seeking behaviour (ANC, institutional delivery-related registration,
immunisation), and support the girl child.

## Target Beneficiaries

Pregnant women and lactating mothers (PWLM), 19+ for the first-living-
child benefit, from households where no member is an income-tax payer,
excepting government employees (per guidelines) [S1].

Concept links: [woman](../../concepts/woman.md) ·
[low-income-household](../../concepts/low-income-household.md)

## Key Features

- ₹5,000 for first living child — two instalments [S1][S3]
- ₹6,000 for second living child if girl (Mission Shakti framework)
  [S2]
- Instalments tied to: early registration of pregnancy/ANC-1; birth
  registration + immunisation cycles
- DBT via PMMVY-CAS portal; Aadhaar-linked payments
- Implemented through Anganwadi/ASHA/ANM networks and health facilities

## Eligibility

Summary — see [eligibility.md](eligibility.md): PWLM 19+ (first child
benefit), income-tax-payer households excluded, first-living-child
condition; second-girl-child branch.

## Benefits

Cash instalments as above. Details: [benefits.md](benefits.md).

## Documents

MotherChild Protection card, MCP/MCW card, Aadhaar, bank account of the
mother, pregnancy registration/ANC records, birth certificate. Details:
[documents.md](documents.md).

## Application

Via health facilities/Anganwadi centres entering claims on PMMVY-CAS,
or online application through the portal. Details:
[application.md](application.md).

## Important Conditions

- Benefit for **first living child** only (second-girl-child exception)
- Claims must be filed within scheme timelines (per guidelines —
  verify current windows)
- The mother's bank account is mandatory (DBT)

## Exclusions

Households with any income-tax-paying member; government employees
(per guidelines); second-child claims other than the girl-child branch.
Structured list: [exclusions.md](exclusions.md).

## Related Schemes

- [PM-JAY](../pm-jay/scheme.md) — covers hospitalisation for delivery complications
- [NSAP-IGNWPS](../nsap/scheme.md) — long-term widow support
- [SSY](../ssy/scheme.md) — girl-child savings post-birth

## Official Sources

1. [PMMVY portal](https://pmmvy.wcd.gov.in/) [S1]
2. [PIB — PMMVY (Jun 2026)](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2270668) [S2]
3. [Vikaspedia — PMMVY instalment structure](https://en.vikaspedia.in/viewcontent/social-welfare/women-and-child-development/women-development-1/pradhan-mantri-matru-vandana-yojana) [S3]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_maternity_benefit
    - wage_support_during_pregnancy
    - support_for_girl_child_birth
  keywords:
    - maternity benefit 5000
    - pmmvy
    - matru vandana
    - first child benefit
    - pregnant women cash scheme
  semantic_topics:
    - maternal welfare
    - conditional cash transfer
    - women and child development
```
