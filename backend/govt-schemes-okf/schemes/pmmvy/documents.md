---
type: Government Scheme Documents
title: PMMVY — Documents
description: Document requirements for PMMVY claims.
scheme_id: PMMVY
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
    resource: https://pmmvy.wcd.gov.in/
    title: PMMVY portal
    author: Ministry of Women and Child Development
    last_modified: not_verified
---

# PMMVY — Documents

```yaml
documents:
  - id: mcp-card
    name: Mother-Child Protection (MCP) card
    required: always
    condition: pregnancy registration and ANC tracking
    source: S1
    confidence: high

  - id: aadhaar
    name: Aadhaar card (mother)
    required: always
    condition: identity + DBT
    source: S1
    confidence: high

  - id: bank-account
    name: Bank account details of the mother
    required: always
    condition: DBT
    source: S1
    confidence: high

  - id: pregnancy-registration-proof
    name: Pregnancy registration / ANC record (MCP/health-facility record)
    required: always
    condition: instalment-1 trigger
    source: S1
    confidence: high

  - id: birth-certificate
    name: Birth certificate / birth registration proof
    required: conditional
    condition: instalment-2 trigger (first child); girl-child branch
    source: S1
    confidence: high

  - id: immunisation-record
    name: Child immunisation record
    required: conditional
    condition: instalment-2 trigger per guidelines
    source: S1
    confidence: high

  - id: declaration
    name: Self-declaration (first living child / no income-tax payer / not government employee)
    required: always
    condition: eligibility attestation in the prescribed format
    source: S1
    confidence: high

  - id: consent
    name: Consent form (as per PMMVY-CAS)
    required: always
    condition: data processing and payment
    source: S1
    confidence: medium
```

## Notes

- No income certificate is demanded — the income test operates via the
  declaration of no income-tax payer in the household.
