---
type: Government Scheme Documents
title: PMAY-G — Documents
description: Document/verification requirements for PMAY-G.
scheme_id: PMAY-G
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
    resource: https://pmayg.dord.gov.in/netiayHome/home.aspx
    title: PMAY-G official portal
    author: MoRD
    last_modified: not_verified
---

# PMAY-G — Documents

```yaml
documents:
  - id: aadhaar
    name: Aadhaar card (beneficiary)
    required: always
    condition: identity, DBT and de-duplication
    source: S1
    confidence: high

  - id: bank-account
    name: Bank account (beneficiary-operated)
    required: always
    condition: installments by DBT (account in beneficiary's name)
    source: S1
    confidence: high

  - id: job-card
    name: MGNREGS job card (household)
    required: conditional
    condition: for MGNREGS wage convergence during construction
    source: S1
    confidence: medium

  - id: land-documents
    name: Land document (patta/record of rights) or allotment of plot
    required: conditional
    condition: construction on own/allotted land
    source: S1
    confidence: medium

  - id: housing-status-verification
    name: Housing-status verification (Gram Sabha / Awaas+ survey record)
    required: always
    condition: establishes houseless/kutcha/dilapidated status
    source: S1
    confidence: high

  - id: consent-form
    name: Consent/registration on AwaasSoft (by functionary)
    required: always
    condition: entry into PMAY-G waitlist
    source: S1
    confidence: medium
```

## Notes

- Individual walk-in "applications" do not exist; documents are
  collected by functionaries during survey/verification. Users should
  approach the Gram Panchayat/Block office for survey inclusion.
