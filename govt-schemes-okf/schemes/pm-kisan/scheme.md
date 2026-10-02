---
type: Government Scheme
title: PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)
description: Income support of Rs.6,000 per year in three equal installments to all landholding farmer families, paid via DBT.
scheme_id: PM-KISAN
official_name: Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)
government_level: central
ministry: Ministry of Agriculture and Farmers Welfare, Government of India
status: stable
categories:
  - agriculture
  - social-security
benefit_types:
  - cash-transfer
target_groups:
  - landholding_farmer_family
  - farmer
geographies:
  - IN
applicant_types:
  - household
  - farmer
eligibility_version: "2026-09"
effective_from: 2019-06-01
effective_until: 2031-03-31
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
verified:
  - by: process:official-source-check
    at: 2026-09-18
stale_after: 2026-12-31
sources:
  - id: S1
    resource: https://pmkisan.gov.in/
    title: PM Kisan Samman Nidhi — Official Portal
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S2
    resource: https://fw.pmkisan.gov.in/Documents/Revised%20Operational%20Guidelines%20-%20PM-Kisan%20Scheme.pdf
    title: Revised Operational Guidelines — PM-KISAN Scheme
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
  - id: S3
    resource: https://www.pmindia.gov.in/en/news_updates/cabinet-approves-continuation-of-the-pm-kisan-scheme-from-2026-27-to-2030-31-with-a-financial-outlay-of-rs-3-15-lakh-crore/
    title: Cabinet approves continuation of the PM-KISAN Scheme from 2026-27 to 2030-31 with a financial outlay of Rs 3,15,000 crore
    author: Press Information Bureau / Prime Minister's Office
    last_modified: 2026-07-31
  - id: S4
    resource: https://pmkisan.gov.in/Documents/RevisedFAQ.pdf
    title: PM-KISAN Revised FAQ
    author: Ministry of Agriculture and Farmers Welfare
    last_modified: not_verified
---

# PM-KISAN — Pradhan Mantri Kisan Samman Nidhi

## Overview

PM-KISAN is a central sector scheme (100% centrally funded) launched on
24.02.2019 that provides income support to all landholding farmer
families across India. Under the scheme, an income support of ₹6,000 per
year is provided in three equal installments of ₹2,000 each, every four
months, transferred directly into the bank accounts of beneficiary
farmer families through Direct Benefit Transfer (DBT) to Aadhaar-seeded
accounts. The Union Cabinet has approved continuation of the scheme from
2026-27 to 2030-31 with a financial outlay of ₹3,15,000 crore [S3].

**Version note (recorded change):** the scheme originally targeted small
and marginal farmer families (collective landholding up to 2 hectares);
this was superseded in June 2019 by extension to **all** landholding
farmer families irrespective of landholding size. See
[Historical (superseded)](#historical-superseded).

## Objective

To augment the income of landholding farmer families and provide
supplemental financial support for procurement of agricultural inputs
(seeds, fertiliser, equipment) and other farm- and domestic-related
needs.

## Target Beneficiaries

Landholding farmer families — a family as defined by the State/UT that
owns cultivable land as per State/UT land records — irrespective of the
size of landholding. The benefit is payable per family (to the head, male
head in the absence of which the female head is covered, per operational
guidelines [S2]). Exclusions apply — see
[exclusions.md](exclusions.md).

Concept links: [farmer](../../concepts/farmer.md) ·
[agriculture](../../concepts/agriculture.md) ·
[landholding rule](../../rules/landholding.md) ·
[farmer-status rule](../../rules/farmer-status.md)

## Key Features

- ₹6,000 per year per landholding farmer family [S1][S2]
- Three equal installments of ₹2,000 at 4-month intervals: April–July,
  August–November, December–March [S1]
- 100% Direct Benefit Transfer to Aadhaar-seeded bank accounts
- Central sector scheme — fully funded by Government of India
- Mandatory Aadhaar eKYC for beneficiaries (via portal/CSC)
- Continuation approved for FY 2026-27 to 2030-31, outlay ₹3,15,000
  crore [S3]

## Eligibility

Summary — see [eligibility.md](eligibility.md) for the deterministic rule
set:

- Farmer family that owns cultivable land per State/UT land records
  (any size)
- Institutional landholders and families whose members fall in the
  exclusion categories (income-tax payers, government/PSU employees,
  pensioners above ₹10,000/month, registered professionals, constitutional
  post-holders) are **not** eligible
- No age criterion; Indian citizens only (NRIs excluded)

## Benefits

₹6,000/year per family in three DBT installments of ₹2,000. Details:
[benefits.md](benefits.md).

## Documents

Aadhaar, Aadhaar-seeded bank account, land records (state-specific
record-of-rights), mobile number. Details: [documents.md](documents.md).

## Application

Online registration on the PM-KISAN portal Farmers Corner, through Common
Service Centres (CSCs), or via State machinery; mandatory eKYC;
State/UT verification of land records. Details: [application.md](application.md).

## Important Conditions

- Benefit is **per family**, not per individual
- Land ownership is verified against State/UT land records [S2]
- Beneficiary must complete eKYC to continue receiving installments
- Death of the beneficiary: subject to state guidelines, support may be
  availed by the surviving spouse (per operational guidelines; verify
  state-specific implementation)

## Exclusions

Institutional landholders and several employee/pensioner/professional
categories are excluded. Structured list: [exclusions.md](exclusions.md).

## Related Schemes

- [PMFBY](../pmfby/scheme.md) — crop insurance for the same population
- [PMAY-G](../pmay-gramin/scheme.md) — rural housing for rural households
- [NSAP](../nsap/scheme.md) — old-age/widow/disability pensions (BPL)

## Official Sources

1. [PM-KISAN portal](https://pmkisan.gov.in/) [S1]
2. [Revised Operational Guidelines (PDF)](https://fw.pmkisan.gov.in/Documents/Revised%20Operational%20Guidelines%20-%20PM-Kisan%20Scheme.pdf) [S2]
3. [Cabinet approval for continuation 2026-31 (PIB)](https://www.pmindia.gov.in/en/news_updates/cabinet-approves-continuation-of-the-pm-kisan-scheme-from-2026-27-to-2030-31-with-a-financial-outlay-of-rs-3-15-lakh-crore/) [S3]
4. [Revised FAQ (PDF)](https://pmkisan.gov.in/Documents/RevisedFAQ.pdf) [S4]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - receive_farm_income_support
    - buy_agricultural_inputs
    - farming_support
  keywords:
    - PM Kisan
    - kisan nidhi
    - farmer income support
    - 6000 rupees farmer
    - kisan yojana
  semantic_topics:
    - agriculture
    - farm income security
    - direct benefit transfer
```

## Historical (superseded)

- Launch (24.02.2019): restricted to small & marginal farmer families
  with collective landholding up to 2 hectares. **Superseded June 2019**
  — now all landholding farmer families irrespective of size [S1][S2].
  Engine must not apply the 2-hectare filter.
