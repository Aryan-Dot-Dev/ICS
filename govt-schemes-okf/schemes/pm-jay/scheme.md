---
type: Government Scheme
title: AB PM-JAY (Ayushman Bharat Pradhan Mantri Jan Arogya Yojana)
description: World's largest health assurance scheme — Rs.5 lakh per family per year free secondary and tertiary hospitalisation, extended universally to senior citizens aged 70+.
scheme_id: PM-JAY
official_name: Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)
government_level: central
ministry: Ministry of Health and Family Welfare (MoHFW), Government of India; implemented by National Health Authority (NHA)
status: stable
categories:
  - healthcare
  - insurance
  - social-security
benefit_types:
  - insurance
  - service
target_groups:
  - poor_and_deprived_families
  - senior_citizens_70_plus
geographies:
  - IN
applicant_types:
  - household
  - senior-citizen
eligibility_version: "2026-09"
effective_from: 2018-09-23
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
    resource: https://pmjay.gov.in/
    title: AB PM-JAY — Official website
    author: National Health Authority, MoHFW
    last_modified: not_verified
  - id: S2
    resource: https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2053883
    title: PIB — Extension of AB PM-JAY to all senior citizens aged 70 years and above (Oct 2024)
    author: Press Information Bureau
    last_modified: 2024-10-14
---

# AB PM-JAY — Ayushman Bharat Pradhan Mantri Jan Arogya Yojana

## Overview

AB PM-JAY, launched 23.09.2018, provides a health cover of **₹5 lakh per
family per year** for secondary and tertiary-care hospitalisation through
a network of empanelled public and private hospitals, on a cashless and
paperless basis. There is **no cap on family size, age or gender**; all
pre-existing conditions are covered from day one. On 29.10.2024, the
Cabinet extended coverage to **all senior citizens aged 70 years and
above, irrespective of income** — the *Ayushman Vay Vandana* expansion —
with families already covered receiving an additional **top-up cover of
up to ₹5 lakh** for the 70+ members [S2].

## Objective

To reduce catastrophic health expenditure and improve access to
quality secondary and tertiary hospitalisation care for poor and
deprived families, and (from 2024) for all citizens aged 70+.

## Target Beneficiaries

- Poor and deprived families identified per SECC 2011 criteria and
  other state-specified categories (automatic inclusion), plus
  occupational categories (e.g., ragpickers, domestic workers etc. per
  NHA criteria)
- **All senior citizens aged 70+** regardless of socio-economic status
  (from October 2024) [S2]

Concept links: [low-income-household](../../concepts/low-income-household.md) ·
[senior-citizen](../../concepts/senior-citizen.md) ·
[household](../../concepts/household.md)

## Key Features

- ₹5 lakh per family per year (floating — usable by any member) [S1]
- Cashless treatment at empanelled hospitals (public & private)
- No restriction on family size, age, gender; pre-existing conditions
  covered
- ~2,000+ treatment procedures package-based pricing (rates revised by
  NHA; not stored here)
- Ayushman Card issued after verification (via Ayushman App, CSC,
  Ayushman Mitra desks, State agencies)
- 70+ expansion: Ayushman Vay Vandana card; top-up for covered families;
  standalone ₹5 lakh for uncovered families [S2]

## Eligibility

Summary — see [eligibility.md](eligibility.md): either (a) family listed
in the SECC/state eligibility database, or (b) individual aged 70+
[conditional branch]. Verification against the NHA database is
mandatory.

## Benefits

Free hospitalisation cover up to ₹5 lakh/family/year at package rates.
Details: [benefits.md](benefits.md).

## Documents

Aadhaar (for e-KYC), ration/identity details for family verification,
mobile number. Details: [documents.md](documents.md).

## Application

Check eligibility on pmjay.gov.in / Ayushman App; e-KYC; card issuance
via CSC/Ayushman Mitra/empanelled hospital desks. Details:
[application.md](application.md).

## Important Conditions

- Cover applies **only at empanelled hospitals** for covered procedures
- Eligibility base is the NHA/State database — individual "applications"
  trigger verification, not open enrolment
- 70+ top-up interacts with existing family cover (additional cover for
  the senior member) [S2]

## Exclusions

Families/individuals not in the eligibility database and not 70+;
outpatient-only care; certain excluded procedures per NHA package
lists. Structured list: [exclusions.md](exclusions.md).

## Related Schemes

- [NSAP](../nsap/scheme.md) — income security for BPL elderly
- [PMMVY](../pmmvy/scheme.md) — maternal cash support (complements institutional delivery care)
- [PMSBY](../pmsby/scheme.md) — accident cover (distinct from health cover)

## Official Sources

1. [PM-JAY official site](https://pmjay.gov.in/) [S1]
2. [PIB release on 70+ expansion](https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2053883) [S2]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_free_hospital_treatment
    - cover_medical_emergency_costs
    - senior_citizen_health_cover
  keywords:
    - ayushman bharat
    - ayushman card
    - pmjay
    - 5 lakh health cover
    - free hospital treatment
    - vay vandana card
  semantic_topics:
    - health insurance
    - hospitalisation cover
    - healthcare access for poor
```
