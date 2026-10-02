---
type: Government Scheme Exclusions
title: NSAP — Exclusions
description: Structured disqualifiers for NSAP components.
scheme_id: NSAP
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
  - id: S2
    resource: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2187327
    title: PIB — NSAP
    author: PIB
    last_modified: 2025-11-07
---

# NSAP — Exclusions

```yaml
exclusions:
  - id: EX-001
    field: applicant.household.bpl_status
    operator: is_false
    value: false
    detail: non-BPL households are outside NSAP (per State BPL determination)
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-002
    field: applicant.existing_nsap_or_equivalent_pension
    operator: is_true
    value: true
    detail: persons already receiving an NSAP component or an equivalent statutory pension cannot take another component
    effect: ineligible
    source: S2
    confidence: high

  - id: EX-003
    field: applicant.age
    operator: not_between
    value: [60, 120]
    condition: component = ignoaps
    detail: IGNOAPS requires 60+ (80+ tier exists within IGNOAPS itself)
    effect: ineligible_for_ignoaps
    source: S2
    confidence: high

  - id: EX-004
    field: applicant.age
    operator: not_between
    value: [40, 79]
    condition: component = ignwps
    detail: IGNWPS covers widows aged 40–79
    effect: ineligible_for_ignwps
    source: S2
    confidence: high

  - id: EX-005
    field: applicant.marital_status
    operator: not_equals
    value: widow
    condition: component = ignwps
    detail: IGNWPS is only for widows
    effect: ineligible_for_ignwps
    source: S2
    confidence: high

  - id: EX-006
    field: applicant.disability_status
    operator: not_equals
    value: severe_or_multiple_certified
    condition: component = igndps
    detail: IGNDPS requires certified severe/multiple disability
    effect: ineligible_for_igndps
    source: S2
    confidence: high
```

## Notes

- Component-scoped exclusions (EX-003..006) mean "ineligible for that
  component" — the engine must re-evaluate other components before
  declaring overall ineligibility.
