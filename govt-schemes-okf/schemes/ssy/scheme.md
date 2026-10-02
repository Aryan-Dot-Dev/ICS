---
type: Government Scheme
title: SSY (Sukanya Samriddhi Yojana)
description: Small-savings account in the name of a girl child below 10 years with a high government-guaranteed interest rate and tax-free maturity.
scheme_id: SSY
official_name: Sukanya Samriddhi Yojana (Sukanya Samriddhi Account Scheme, 2019)
government_level: central
ministry: Ministry of Finance (Department of Financial Services); operated through post offices and authorised banks
status: stable
categories:
  - financial-inclusion
  - women-and-child
  - social-security
benefit_types:
  - service
target_groups:
  - girl_child
  - guardian_of_girl_child
geographies:
  - IN
applicant_types:
  - child
  - individual
eligibility_version: "2026-09"
effective_from: 2015-01-22
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
    resource: https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=171
    title: Sukanya Samriddhi Account Scheme, 2019 (rules text) — National Savings Institute
    author: National Savings Institute, Ministry of Finance
    last_modified: not_verified
  - id: S2
    resource: https://www.indiapost.gov.in/
    title: India Post — Sukanya Samriddhi Account (operational page)
    author: Department of Posts
    last_modified: not_verified
---

# SSY — Sukanya Samriddhi Yojana

## Overview

SSY is a small-savings scheme under the Sukanya Samriddhi Account
Scheme, 2019 (framed under the Government Savings Promotion Act), part
of the Beti Bachao Beti Padhao initiative. A guardian opens the account
in the name of a **girl child below 10 years of age**; deposits earn a
Government-notified interest rate (currently **8.2% per annum** per
Ministry of Finance quarterly revision, PIB note of 21 Jan 2026), with
tax-free maturity treatment (EEA status under the Income-tax Act).
Account matures 21 years from opening; deposits for 15 years; partial
withdrawal for education at 18; early full closure on marriage after 18.

**Interest-rate caveat:** the rate is revised quarterly by the
Government. The engine must treat 8.2% as the **rate applicable per the
latest verified notification** and re-verify each quarter (see
[benefits.md](benefits.md)).

## Objective

To promote the girl child's welfare by enabling guardians to build a
long-term corpus for her education and marriage with a high,
government-guaranteed return.

## Target Beneficiaries

Girl children below 10 years (account holder), through natural or legal
guardians. Maximum **two accounts per family** (exceptions per rules:
twins/triplets, second child order adjustments) [S1].

Concept links: [woman](../../concepts/woman.md) ·
[household](../../concepts/household.md)

## Key Features

- Account opened by guardian for girl child below 10 [S1]
- One account per child; two accounts per family (rule exceptions
  apply) [S1]
- Minimum deposit ₹250/year; maximum ₹1.5 lakh/year (per scheme rules)
- Deposits for 15 years; maturity at 21 years from opening
- 50% partial withdrawal allowed for education after the girl turns 18
  (per rules)
- Premature closure permitted on marriage after 18 (per rules)
- Interest compounded annually, credited; rate notified quarterly
- Account fully tax-exempt (EEE) per Income-tax Act treatment
- Operable at post offices and authorised banks; passbook/India Post
  Payments Bank channels

## Eligibility

Summary — see [eligibility.md](eligibility.md): girl child under 10 at
opening; Indian citizen/resident; guardian opens; two-account family cap.

## Benefits

Interest-bearing savings with government guarantee and tax exemption.
Details: [benefits.md](benefits.md).

## Documents

Birth certificate of the girl, guardian KYC (Aadhaar/PAN), address
proof, photographs. Details: [documents.md](documents.md).

## Application

At any post office or authorised bank branch with the SSY form (Form-1
under the 2019 Rules). Details: [application.md](application.md).

## Important Conditions

- NRIs are **not** eligible to open new accounts (resident requirement
  at opening; if status changes after opening, rules apply) [S1]
- Deposit discipline: minimum ₹250/year to keep the account active;
  default handling per rules
- Withdrawal/closure conditions are rule-bound (18+ marriage closure
  with proof; education withdrawal)

## Exclusions

Boys; girls aged 10+ at opening; a third account in a family (save
rule exceptions); NRI guardians (new accounts). Structured list:
[exclusions.md](exclusions.md).

## Related Schemes

- [APY](../apy/scheme.md) — pension security for guardians
- [PMSBY/PMJJBY](../pmsby/scheme.md) — insurance for guardians
- [NSP](../nsp/scheme.md) — scholarships for the girl's education later

## Official Sources

1. [Sukanya Samriddhi Account Scheme 2019 rules — NSI](https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=171) [S1]
2. [India Post — SSY](https://www.indiapost.gov.in/) [S2]

## Discovery metadata

```yaml
discovery:
  user_goals:
    - save_for_daughter_education
    - save_for_daughter_marriage
    - tax_free_long_term_savings
  keywords:
    - sukanya samriddhi
    - girl child savings
    - ssy account
    - beti bachao beti padhao savings
    - 8.2 percent savings scheme
  semantic_topics:
    - small savings
    - girl child welfare
    - long-term family savings
```
