---
type: Government Scheme Benefits
title: PMFBY — Benefits
description: Premium structure and insurance-cover benefit objects for PMFBY.
scheme_id: PMFBY
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

# PMFBY — Benefits

## Premium shares (farmer cost)

```yaml
benefits:
  - benefit_id: PRE-001
    type: insurance
    name: Farmer premium share — Kharif
    amount:
      value: 2
      unit: percent_of_sum_insured
      currency: INR
      frequency: seasonal
      season: kharif
    applies_to: food crops and oilseeds
    source: S1
    confidence: high

  - benefit_id: PRE-002
    type: insurance
    name: Farmer premium share — Rabi
    amount:
      value: 1.5
      unit: percent_of_sum_insured
      currency: INR
      frequency: seasonal
      season: rabi
    applies_to: food crops and oilseeds
    source: S1
    confidence: high

  - benefit_id: PRE-003
    type: insurance
    name: Farmer premium share — Annual commercial / horticultural crops
    amount:
      value: 5
      unit: percent_of_sum_insured
      currency: INR
      frequency: annual
    applies_to: annual commercial and horticultural crops
    source: S1
    confidence: high
```

The **balance of the actuarial premium** above the farmer share is
subsidised by Government (Centre and State sharing as per State
notification) — i.e., the scheme embeds a `subsidy` component whose
absolute value varies by crop, area and actuarial rate, and is therefore
**not** stored as a rupee amount [S2].

## Insurance cover

```yaml
  - benefit_id: COV-001
    type: insurance
    name: Crop-loss cover up to Sum Insured
    amount:
      value: sum_insured_of_notified_crop_area
      currency: INR
      cap: per area-approach Sum Insured defined in State notification
      frequency: per_season
    covered_risks:
      - prevented sowing/planting risk
      - mid-season adversities
      - localised calamities (hailstorm, landslide, inundation, cloudburst, natural fire)
      - widespread yield loss (area approach)
      - post-harvest losses (for specified perils and duration per guidelines)
      - loss due to occurrence of natural fire
    delivery: dbt_to_bank_account (DigiClaim)
    contribution: farmer premium share per PRE-001..003
    conditions:
      - crop and area notified for the season
      - enrolment before season cut-off
      - timely intimation of localised perils within the prescribed window
    source: S2
    confidence: high
```

## Notes

- Absolute Sum Insured values depend on the State's crop/area
  notification for the season and are **not stored** here (staleness by
  design). The engine links to pmfby.gov.in for live values.
- Add-on perils vary by State; treat as `state_variant: true`.
- Claim timelines and DigiClaim details: see [application.md](application.md).
