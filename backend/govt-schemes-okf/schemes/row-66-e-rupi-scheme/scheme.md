---
type: "Government Scheme"
title: "e-RUPI Scheme"
description: "The e-RUPI scheme is a digital payment solution launched by the National Payments Corporation of India (NPCI) to enable contactless, cashless transactions through a QR code or SMS-based string."
scheme_id: "ROW-66"
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
    resource: "https://npci.org.in/what-we-do/erupi"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.npci.org.in/what-we-do/erupi"
    title: not_verified
    author: not_verified
    last_modified: not_verified
official_name: "e-RUPI Scheme"
government_level: central
ministry: "National Payments Corporation of India (NPCI)"
categories:
  - "digital-public-infrastructure"
  - "social-security"
  - "financial-inclusion"
benefit_types:
  - "subsidy"
target_groups:
  - "general-public"
  - "beneficiaries-of-government-welfare-schemes"
geographies:
  - "IN"
applicant_types:
  - "business"
eligibility_version: "2026-10"
confidence: "medium"
source_data_last_updated: "not_verified"
runs_source: "runs/row-66/ai_summary.json"
---
# e-RUPI Scheme

## Overview

The e-RUPI scheme is a digital payment solution launched by the National Payments Corporation of India (NPCI) to enable contactless, cashless transactions through a QR code or SMS-based string. It is designed as a pre-paid, purpose-specific voucher system that ensures targeted delivery of benefits without the need for a bank account, digital wallet, or app. The scheme supports financial inclusion by allowing beneficiaries to redeem services at mapped merchant locations using a unique e-RUPI code.

## Objective

- Enable contactless and cashless digital transactions
- Ensure targeted delivery of welfare services without leakage
- Promote financial inclusion for unbanked populations
- Reduce dependency on physical vouchers or cash
- Support seamless redemption at merchant locations
- Strengthen the digital payments ecosystem in India


## Target Beneficiaries

**general public**, **beneficiaries of government welfare schemes**


## Key Features

- Geographic scope: Pan-India (central-level)
- Deadline: Rolling basis — issued as per sponsor requirement
- Import confidence (source): medium


## Eligibility

Beneficiaries identified by government or corporate sponsors for specific welfare or promotional schemes; no bank account, smartphone, or internet required to receive or use e-RUPI.


Deterministic rules: [eligibility.md](eligibility.md).


## Benefits

Contactless redemption via QR code or SMS; no need for bank account, digital wallet, or app; ensures purpose-specific usage; real-time tracking by sponsors; zero transaction cost to beneficiary; supports offline redemption at mapped merchant locations.


Structured benefit objects: [benefits.md](benefits.md).


## Documents

_No document list in source data (not_verified). See [documents.md](documents.md).


## Application

Portal: not_verified. Steps, channels and deadlines: [application.md](application.md).


## Important Conditions

- e-RUPI is valid only for the specific purpose and merchant(s) mapped by the sponsor
- Voucher expires if not redeemed within the validity period set by the sponsor
- Cannot be transferred to another person or used for cash withdrawal
- Requires merchant to be onboarded with a participating acquirer bank or PSP


## Exclusions

1 explicit disqualifier(s) recorded. Structured list: [exclusions.md](exclusions.md).


## Related Schemes

- [DigiLocker](../row-65-digilocker/scheme.md)
- [ONDC (Open Network for Digital Commerce)](../row-67-ondc-open-network-for-digital-commerce/scheme.md)
- [Account Aggregator Framework](../row-68-account-aggregator-framework/scheme.md)


## Official Sources

1. [https://npci.org.in/what-we-do/erupi](https://npci.org.in/what-we-do/erupi) [S1]
2. [https://www.npci.org.in/what-we-do/erupi](https://www.npci.org.in/what-we-do/erupi) [S2]


## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_financial_subsidy
    - digital_service_access
    - banking_access
  keywords:
    - "e"
    - "rupi"
    - "scheme"
    - "general public"
    - "beneficiaries of government welfare schemes"
    - "digital india"
  semantic_topics:
    - digital-public-infrastructure
    - social-security
    - financial-inclusion
```
