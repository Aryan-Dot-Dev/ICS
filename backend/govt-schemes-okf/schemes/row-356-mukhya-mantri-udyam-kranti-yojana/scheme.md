---
type: "Government Scheme"
title: "Mukhya Mantri Udyam Kranti Yojana"
description: "SAMAST is a single-window online system initiated by the Government of Madhya Pradesh to facilitate access to bank-financed government schemes."
scheme_id: "ROW-356"
okf_version: "0.2"
generated:
  by: "process:runs-okf-generator"
  at: 2026-10-02
verified:
  - by: "process:runs-import-check"
    at: 2026-10-02
    note: "field presence and citations re-checked against the source ai_summary.json; content not re-verified against the live portal"
status: draft
stale_after: 2026-12-31
sources:
  - id: S1
    resource: "https://samast.mponline.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://samast.mponline.gov.in/portal/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://samast.mponline.gov.in/portal/SamagraRegister"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://samast.mponline.gov.in/portal/register"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://samast.mponline.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
official_name: "Mukhya Mantri Udyam Kranti Yojana"
government_level: state
ministry: "Government of Madhya Pradesh"
categories:
  - "entrepreneurship"
  - "financial-inclusion"
  - "digital-public-infrastructure"
benefit_types:
  - "loan"
  - "subsidy"
  - "grant"
  - "service"
target_groups:
  - "citizens"
  - "entrepreneurs"
  - "msme"
  - "startups"
geographies:
  - "IN-MP"
applicant_types:
  - "entrepreneur"
  - "business"
  - "individual"
eligibility_version: "2026-10"
confidence: "medium"
source_data_last_updated: "22/05/2026"
runs_source: "runs/row-356/ai_summary.json"
---
# Mukhya Mantri Udyam Kranti Yojana

## Overview

SAMAST is a single-window online system initiated by the Government of Madhya Pradesh to facilitate access to bank-financed government schemes. It enables citizens to apply for various state-level schemes through a unified portal after completing eKYC and profile registration. The platform supports multiple departments and banks, providing application tracking and technical support services.

## Objective

- Provide a single-window online system for bank-financed government schemes
- Enable citizens to view and apply for schemes based on eligibility
- Facilitate eKYC and profile registration for scheme access
- Allow application status tracking and technical grievance redressal
- Integrate multiple departments and banks under one platform


## Target Beneficiaries

**citizens**, **entrepreneurs**, **MSME**, **startups**


Concept links: [entrepreneur](../../concepts/entrepreneur.md)


## Key Features

- Geographic scope: Madhya Pradesh only (state-level)
- Deadline: Rolling basis — applications can be submitted year-round after profile completion.
- Portal: https://samast.mponline.gov.in/portal/
- Source data last updated: 22/05/2026
- Import confidence (source): medium


## Eligibility

Citizens must have a valid Samagra ID with active and available registered mobile number. Aadhaar e-KYC must be completed on the Samagra portal (https://samagra.gov.in). Applicants must fully fill all sections of their profile on the SAMAST portal before submitting for any scheme benefit.


Deterministic rules: [eligibility.md](eligibility.md).


## Benefits

Access to apply for multiple bank-financed government schemes through a single online system. Enables eKYC verification, profile management, application submission, status tracking, and technical grievance redressal. Integrates services from 13 departments, 35 banks, and 6,530 bank branches across Madhya Pradesh.


Structured benefit objects: [benefits.md](benefits.md).


## Documents

4 document(s) recorded in source data. Full list: [documents.md](documents.md).


## Application

Portal: https://samast.mponline.gov.in/portal/. Steps, channels and deadlines: [application.md](application.md).


## Important Conditions

- Aadhaar e-KYC must be completed on Samagra portal before SAMAST registration
- Profile must be fully filled and submitted before applying for any scheme
- Status update after e-KYC may take up to 24 hours
- Only bank-financed government schemes of Madhya Pradesh are accessible
- Technical issues must be reported via the helpdesk


## Exclusions

_No explicit disqualifier recorded in source data — this is NOT evidence that none exist. See [exclusions.md](exclusions.md).


## Related Schemes

- [MP Startup Policy & Yuva Udyami Yojana](../row-249-mp-startup-policy-yuva-udyami-yojana/scheme.md)
- [MP MSME Development Policy](../row-250-mp-msme-development-policy/scheme.md)
- [MP Trade & Investment Facilitation Corporation (TRIFAC)](../row-541-mp-trade-investment-facilitation-corporation-trifac/scheme.md)


## Official Sources

1. [https://samast.mponline.gov.in/](https://samast.mponline.gov.in/) [S1]
2. [https://samast.mponline.gov.in/portal/](https://samast.mponline.gov.in/portal/) [S2]
3. [https://samast.mponline.gov.in/portal/SamagraRegister](https://samast.mponline.gov.in/portal/SamagraRegister) [S3]
4. [https://samast.mponline.gov.in/portal/register](https://samast.mponline.gov.in/portal/register) [S4]
5. [https://samast.mponline.gov.in](https://samast.mponline.gov.in) [S5]


## Discovery metadata

```yaml
discovery:
  user_goals:
    - grow_my_business
    - banking_access
    - digital_service_access
  keywords:
    - "mukhya"
    - "mantri"
    - "udyam"
    - "kranti"
    - "yojana"
    - "citizens"
    - "entrepreneurs"
    - "msme"
    - "startups"
    - "state level (madhya pradesh)"
  semantic_topics:
    - entrepreneurship
    - financial-inclusion
    - digital-public-infrastructure
```
