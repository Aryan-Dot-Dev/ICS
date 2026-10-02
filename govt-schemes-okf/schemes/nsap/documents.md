---
type: Government Scheme Documents
title: NSAP — Documents
description: Document requirements across NSAP components.
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
  - id: S1
    resource: https://nsap.dord.gov.in/
    title: NSAP portal
    author: MoRD / NIC
    last_modified: not_verified
---

# NSAP — Documents

```yaml
documents:
  - id: age-proof
    name: Age proof (Aadhaar / birth certificate / school certificate)
    required: always
    condition: IGNOAPS/IGNWPS/IGNDPS age bands
    source: S1
    confidence: high

  - id: bpl-proof
    name: BPL / SECC / ration documentation as per State criteria
    required: always
    condition: poverty-status verification (State-operated)
    source: S1
    confidence: high

  - id: aadhaar
    name: Aadhaar card
    required: always
    condition: identity + DBT
    source: S1
    confidence: high

  - id: bank-account
    name: Bank account (beneficiary)
    required: always
    condition: DBT of pension
    source: S1
    confidence: high

  - id: widow-certificate
    name: Widow certificate / death certificate of husband
    required: conditional
    condition: IGNWPS
    source: S1
    confidence: high

  - id: disability-certificate
    name: Disability certificate (severe/multiple)
    required: conditional
    condition: IGNDPS
    source: S1
    confidence: high

  - id: death-certificate
    name: Death certificate of primary breadwinner
    required: conditional
    condition: NFBS
    source: S1
    confidence: high

  - id: residence-proof
    name: Residence/domicile proof
    required: conditional
    condition: State verification
    source: S1
    confidence: medium
```

## Notes

- Exact checklists are State-specific (State NSAP portals publish
  them); treat extras as `state_variant: true`.
