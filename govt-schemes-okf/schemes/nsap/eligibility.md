---
type: Government Scheme Eligibility
title: NSAP — Eligibility
description: Deterministic eligibility dimensions and rules for NSAP components.
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
  - id: S3
    resource: https://sansad.in/getFile/annex/268/AU2384_qLzV6d.pdf?source=pqars
    title: Lok Sabha annexure — NSAP details
    author: Parliament of India / MoRD
    last_modified: 2025-08-08
---

# NSAP — Eligibility

## Eligibility dimensions examined

| Dimension | Applies | Outcome |
|---|---|---|
| age | yes | IGNOAPS 60+; IGNWPS 40–79; IGNDPS 18–79 (hard) [S2] |
| gender | conditional | IGNWPS is for widows (women) |
| citizenship/residency | yes | Indian resident (hard) |
| state | yes | State implements and sanctions; BPL lists are State-operated |
| district | no | not a filter |
| rural/urban | no | both (rural+urban poor) |
| income | yes | BPL status (SECC/State criteria) — hard; no rupee ceiling at central level |
| occupation | no | not a filter |
| employment status | no | not a filter |
| farmer status | no | not a filter |
| landholding | no | not a filter |
| business ownership | no | not a filter |
| student status | no | not a filter |
| educational level | no | not a filter |
| social category | no | not a filter |
| disability status | conditional | IGNDPS requires severe/multiple disability certification |
| marital/family status | conditional | IGNWPS requires widowhood; NFBS requires breadwinner death |
| pregnancy/maternity | no | not applicable |
| household status | yes | BPL household membership (hard) |
| beneficiary under another scheme | yes | one NSAP pension component per person; exclusion if receiving an equivalent statutory pension (hard) |
| previous benefit | conditional | NFBS once per household event |
| bank account | yes | DBT prerequisite (hard) |
| Aadhaar | yes | DBT/verification requirement (hard) |
| scheme-specific | yes | State verification of BPL and status certificates |

## Structured eligibility rules (per component)

Domain-specific extension (not part of universal OKF v0.2 schema).

```yaml
eligibility_rules:
  # IGNOAPS — old age pension
  ignoaps:
    all:
      - rule_id: OAP-AGE-001
        field: applicant.age
        operator: greater_than_or_equal
        value: 60
        type: hard
        source: S2
        confidence: high

      - rule_id: OAP-BPL-001
        field: applicant.household.bpl_status
        operator: is_true
        value: true
        type: hard
        source: S2
        confidence: high

      - rule_id: OAP-ONE-001
        field: applicant.existing_nsap_or_equivalent_pension
        operator: is_false
        value: false
        type: hard
        source: S2
        confidence: high

  # IGNWPS — widow pension
  ignwps:
    all:
      - rule_id: WID-GEN-001
        field: applicant.gender
        operator: equals
        value: female
        type: hard
        source: S2
        confidence: high

      - rule_id: WID-STA-001
        field: applicant.marital_status
        operator: equals
        value: widow
        type: hard
        source: S2
        confidence: high

      - rule_id: WID-AGE-001
        field: applicant.age
        operator: between
        value: [40, 79]
        type: hard
        source: S2
        confidence: high
        note: 80+ widows shift to IGNOAPS rate per guidelines

      - rule_id: WID-BPL-001
        field: applicant.household.bpl_status
        operator: is_true
        value: true
        type: hard
        source: S2
        confidence: high

  # IGNDPS — disability pension
  igndps:
    all:
      - rule_id: DIS-AGE-001
        field: applicant.age
        operator: between
        value: [18, 79]
        type: hard
        source: S2
        confidence: high

      - rule_id: DIS-CER-001
        field: applicant.disability_status
        operator: equals
        value: severe_or_multiple_certified
        type: hard
        source: S2
        confidence: high

      - rule_id: DIS-BPL-001
        field: applicant.household.bpl_status
        operator: is_true
        value: true
        type: hard
        source: S2
        confidence: high

  # NFBS — family benefit
  nfbs:
    all:
      - rule_id: NFB-001
        field: household.primary_breadwinner_deceased
        operator: is_true
        value: true
        type: hard
        source: S2
        confidence: high

      - rule_id: NFB-002
        field: household.bpl_status
        operator: is_true
        value: true
        type: hard
        source: S2
        confidence: high

      - rule_id: NFB-003
        field: household.breadwinner_age_at_death
        operator: between
        value: [18, 59]
        type: hard
        source: S3
        confidence: high
        note: breadwinner age band per guidelines; verify State notification

      - rule_id: NFB-004
        field: household.prior_nfbs_received
        operator: is_false
        value: false
        type: hard
        source: S2
        confidence: high

  # Annapurna
  annapurna:
    all:
      - rule_id: ANN-001
        field: applicant.age
        operator: greater_than_or_equal
        value: 65
        type: hard
        source: S3
        confidence: medium
        note: Annapurna targets senior citizens eligible for IGNOAPS but not receiving it; current age band per guidelines — verify (historically 65+)

      - rule_id: ANN-002
        field: applicant.existing_nsap_or_equivalent_pension
        operator: is_false
        value: false
        type: hard
        source: S3
        confidence: high

  common:
    all:
      - rule_id: CMN-RES-001
        field: applicant.citizenship
        operator: equals
        value: IN
        type: hard
        source: S2
        confidence: high

      - rule_id: CMN-BNK-001
        field: applicant.bank_account
        operator: exists
        value: true
        type: hard
        source: S1
        confidence: high

      - rule_id: CMN-AAD-001
        field: applicant.aadhaar
        operator: exists
        value: true
        type: hard
        source: S1
        confidence: high
```

## Missing information handling

```yaml
status: needs_information
missing_fields:
  - applicant.household.bpl_status
  - applicant.age
  - applicant.marital_status        # for IGNWPS
  - applicant.disability_status     # for IGNDPS
```

## Notes

- BPL status is State-verified (SECC rank lists and State criteria);
  the engine cannot determine it from profile data — direct users to
  the State machinery.
- The Annapurna age band and details carry `confidence: medium` — the
  component is small and its current operational guidance should be
  re-verified at review.
