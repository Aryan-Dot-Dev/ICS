---
type: "Government Scheme"
title: "GST QRMP Scheme for MSMEs"
description: "The GST QRMP Scheme for MSMEs allows eligible small taxpayers to file GSTR-3B and GSTR-1 returns on a quarterly basis while paying taxes monthly."
scheme_id: "ROW-418"
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
    resource: "https://www.gst.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.gst.gov.in/qrmp"
    title: not_verified
    author: not_verified
    last_modified: not_verified
official_name: "GST QRMP Scheme for MSMEs"
government_level: central
ministry: "Goods and Services Tax Network (GSTN) under the oversight of the GST Council and the Central Board of Indirect Taxes and Customs (CBIC)"
categories:
  - "taxation"
  - "regulation-compliance"
  - "entrepreneurship"
benefit_types:
  - "tax-exemption"
  - "loan"
  - "subsidy"
  - "grant"
target_groups:
  - "msme"
geographies:
  - "IN"
applicant_types:
  - "business"
eligibility_version: "2026-10"
confidence: "medium"
source_data_last_updated: "2026"
runs_source: "runs/row-418/ai_summary.json"
---
# GST QRMP Scheme for MSMEs

## Overview

The GST QRMP Scheme for MSMEs allows eligible small taxpayers to file GSTR-3B and GSTR-1 returns on a quarterly basis while paying taxes monthly. It is designed to reduce compliance burden for small businesses by simplifying return filing frequency. Taxpayers under this scheme must pay tax through Form PMT-06 for the first two months of each quarter and file returns only once per quarter. The scheme is optional and available to taxpayers with an aggregate annual turnover of up to INR 5 crores.

## Objective

- Reduce compliance burden for small taxpayers
- Allow quarterly filing of GSTR-1 and GSTR-3B returns
- Enable monthly tax payment via PMT-06 for better cash flow management
- Simplify GST return process for MSMEs with turnover up to INR 5 crores


## Target Beneficiaries

**MSME**


## Key Features

- Geographic scope: Pan-India (central-level)
- Deadline: Tax payment via PMT-06 is due monthly by the 25th of the following month. Quarterly returns (GSTR-1 and GSTR-3B) must be filed by the 22nd or 24th of the month following the quarter, depending on the taxpayer's category and state/UT. The option to opt into or opt out of the QRMP scheme must be exercised before the last day of the opening month of a quarter.
- Portal: https://www.gst.gov.in/
- Source data last updated: 2026
- Import confidence (source): medium


## Eligibility

Taxpayers having an aggregate annual turnover of up to INR 5 crores in the preceding financial year are eligible to opt into the QRMP scheme. The scheme is optional and applies to all categories of registered taxpayers under GST, including MSMEs, who wish to file returns quarterly while paying tax monthly.


Deterministic rules: [eligibility.md](eligibility.md).


## Benefits

Quarterly filing of GSTR-1 and GSTR-3B returns reduces the frequency of return submission from monthly to quarterly. Taxpayers pay tax monthly using Form PMT-06, ensuring steady cash outflow compliance. The scheme reduces the administrative burden of frequent filings while maintaining regular tax payment discipline. It is particularly beneficial for small businesses seeking simpler compliance…


Structured benefit objects: [benefits.md](benefits.md).


## Documents

_No document list in source data (not_verified). See [documents.md](documents.md).


## Application

Portal: https://www.gst.gov.in/. Steps, channels and deadlines: [application.md](application.md).


## Important Conditions

- Taxpayers must pay tax monthly using Form PMT-06 for the first two months of each quarter
- Failure to pay monthly tax via PMT-06 may attract interest and penalties
- The quarterly return filing facility is only available if monthly tax payments are made on time
- Opting out of the scheme is allowed only at the start of a quarter
- Not available to taxpayers under the composition scheme


## Exclusions

_No explicit disqualifier recorded in source data — this is NOT evidence that none exist. See [exclusions.md](exclusions.md).


## Related Schemes

- [Tax Collected at Source (TCS) Exemption for Startups](../row-412-tax-collected-at-source-tcs-exemption-for-startups/scheme.md)
- [Startup GST Exemption & Composition Scheme](../row-413-startup-gst-exemption-composition-scheme/scheme.md)
- [ESOP Tax Deferment for Startup Employees](../row-414-esop-tax-deferment-for-startup-employees/scheme.md)


## Official Sources

1. [https://www.gst.gov.in/](https://www.gst.gov.in/) [S1]
2. [https://www.gst.gov.in/qrmp](https://www.gst.gov.in/qrmp) [S2]


## Discovery metadata

```yaml
discovery:
  user_goals:
    - reduce_tax_liability
    - grow_my_business
  keywords:
    - "gst"
    - "qrmp"
    - "scheme"
    - "msmes"
    - "msme"
    - "tax & compliance"
  semantic_topics:
    - taxation
    - regulation-compliance
    - entrepreneurship
```
