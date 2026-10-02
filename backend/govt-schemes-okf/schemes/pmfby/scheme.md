---
type: Government Scheme
title: PMFBY (Pradhan Mantri Fasal Bima Yojana)
description: Government-sponsored crop insurance covering farmers against non-preventable natural risks at heavily subsidised premiums.
scheme_id: PMFBY
official_name: Pradhan Mantri Fasal Bima Yojana (PMFBY)
government_level: central
ministry: Ministry of Agriculture and Farmers Welfare, Government of India
status: stable
categories:
  - agriculture
  - insurance
benefit_types:
  - insurance
  - subsidy
target_groups:
  - farmer
  - sharecropper
  - tenant_farmer
geographies:
  - IN
applicant_types:
  - farmer
  - individual
eligibility_version: "2026-09"
effective_from: 2016-02-13
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
    resource: https://pmfby.gov.in/
    title: PMFBY — Official Crop Insurance Portal
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S2
    resource: https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf
    title: PMFBY Revised Operational Guidelines
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PMFBY — Pradhan Mantri Fasal Bima Yojana

## Overview

PMFBY is the Government of India's flagship crop-insurance scheme,
integrated on a single platform ([pmfby.gov.in](https://pmfby.gov.in/)).
It provides comprehensive risk cover against non-preventable natural
perils for food crops, oilseeds and annual commercial/horticultural crops
**notified** by State Governments for defined areas and seasons. Farmers
pay a small capped share of the actuarial premium; the balance is
subsidised by the Centre and States. Claims are assessed through
technology (YES-TECH remote sensing, weather data, CCEs) and paid
directly to farmers' bank accounts (DigiClaim). Grievances: Krishi Rakshak
Portal & Helpline 14447.

## Objective

To provide financial support to farmers suffering crop loss/damage due to
non-preventable risks; to stabilise farm income; to encourage investment
in farming; to ensure credit flow to the agriculture sector; and to make
insurance affordable with low farmer premium shares.

## Target Beneficiaries

All farmers — including **sharecroppers and tenant farmers** (where the
State so provides) — growing notified crops in notified areas. Enrolment
is voluntary for both loanee and non-loanee farmers (reform effective
from Kharif 2020). Loanee farmers may be enrolled by the lending
institution against crop loans, subject to consent.

Concept links: [farmer](../../concepts/farmer.md) ·
[agriculture](../../concepts/agriculture.md) ·
[farmer-status rule](../../rules/farmer-status.md)

## Key Features

- Capped farmer premium share: **2%** of sum insured for Kharif food
  crops/oilseeds, **1.5%** for Rabi food crops/oilseeds, **5%** for
  annual commercial and horticultural crops [S1][S2]
- Balance of actuarial premium borne by Government (Centre + State
  sharing as per State notification)
- Sum Insured per the area-approach (level of indemnity × maximum
  average yield of the notified area); State options may vary
- Cover for prevented sowing/planting, mid-season adversity, localised
  calamities, post-harvest losses (for specified perils/duration), and
  widespread yield loss
- Voluntary enrolment for all farmers (from Kharif 2020)
- Claims paid via DBT (DigiClaim); enrolment via portal, CSCs, banks and
  insurance companies

## Eligibility

Summary — see [eligibility.md](eligibility.md):

- Cultivating a **notified crop in a notified area** for the current
  season (hard, conditional on State notification)
- Landholding farmers, sharecroppers, tenants eligible (per State
  notification)
- Non-loanee farmers need land/crop documentation; loanee farmers
  typically enrolled against crop loans

## Benefits

Insurance cover up to the Sum Insured of the notified crop/area against
listed perils, at farmer premium shares of 2% / 1.5% / 5%. Details:
[benefits.md](benefits.md).

## Documents

Aadhaar/KYC, bank account, land record or tenancy/sharecropping
agreement, crop-sowing proof (for non-loanee). Details:
[documents.md](documents.md).

## Application

Online self-registration on pmfby.gov.in, via CSC, lending bank, or
insurance company within season-specific cut-off dates. Details:
[application.md](application.md).

## Important Conditions

- Coverage attaches only to crops/areas/seasons **notified** by the
  State Government for that season
- Premium must be paid (or auto-debited from the loan account) before
  cut-off for cover to attach
- Individual-plot assessment applies mainly to localised perils and
  post-harvest loss; widespread yield loss is assessed on the notified
  area (area approach)
- Seasonal enrolment cut-off dates are declared by Government/States
  each season — treat as dynamic; verify on the portal (deliberately not
  hard-coded here)

## Exclusions

Preventable/controllable losses and non-notified crops/areas are not
covered. Structured list: [exclusions.md](exclusions.md).

## Related Schemes

- [PM-KISAN](../pm-kisan/scheme.md) — income support for the same farming households
- [PMMY](../pmmy/scheme.md) — credit for allied activities (non-farm)
- [APY](../apy/scheme.md) — old-age security for rural workers

## Official Sources

1. [PMFBY portal](https://pmfby.gov.in/) [S1]
2. [Revised Operational Guidelines (PDF)](https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf) [S2]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - insure_crops_against_loss
    - recover_from_drought_or_flood
    - protect_farm_income
  keywords:
    - crop insurance
    - fasal bima
    - drought loss compensation
    - flood crop damage
    - harvest loss
  semantic_topics:
    - agriculture risk management
    - farm insurance
    - natural disaster compensation
```
