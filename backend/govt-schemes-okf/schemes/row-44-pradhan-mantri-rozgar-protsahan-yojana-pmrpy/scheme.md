---
type: "Government Scheme"
title: "Pradhan Mantri Rozgar Protsahan Yojana (PMRPY)"
description: "Pradhan Mantri Rozgar Protsahan Yojana (PMRPY) is a central government scheme launched to incentivize employers for generating new employment by paying the employer's contribution to the Employees' Provident Fund (EPF) and Employees' State Insurance (ESI) for new employees."
scheme_id: "ROW-44"
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
    resource: "https://pmrpy.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.epfindia.gov.in/site_en/Employer.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
official_name: "Pradhan Mantri Rozgar Protsahan Yojana (PMRPY)"
government_level: central
ministry: "Ministry of Labour and Employment, Government of India"
categories:
  - "women-and-child"
  - "entrepreneurship"
  - "employment"
benefit_types:
  - "subsidy"
  - "insurance"
target_groups:
  - "employers"
  - "new-employees"
  - "formal-sector-workers"
geographies:
  - "IN"
applicant_types:
  - "entrepreneur"
  - "worker"
  - "woman"
eligibility_version: "2026-10"
confidence: "medium"
source_data_last_updated: "not_verified"
runs_source: "runs/row-44/ai_summary.json"
---
# Pradhan Mantri Rozgar Protsahan Yojana (PMRPY)

## Overview

Pradhan Mantri Rozgar Protsahan Yojana (PMRPY) is a central government scheme launched to incentivize employers for generating new employment by paying the employer's contribution to the Employees' Provident Fund (EPF) and Employees' State Insurance (ESI) for new employees. The scheme aims to encourage job creation in the formal sector, particularly benefiting first-time employees and supporting workforce formalization. It was operational from 2016 to 2019 and has since been subsumed into other initiatives like the Aatmanirbhar Bharat Rozgar Yojana (ABRY).

## Objective

- Incentivize employers to generate new employment
- Reduce the financial burden of social security contributions on employers
- Encourage hiring of first-time employees
- Formalize the workforce by bringing workers under EPF and ESI coverage
- Support job creation in manufacturing and services sectors


## Target Beneficiaries

**employers**, **new employees**, **formal sector workers**


Concept links: [woman](../../concepts/woman.md) · [entrepreneur](../../concepts/entrepreneur.md)


## Key Features

- Geographic scope: Pan-India (central-level)
- Deadline: Scheme was applicable for employees registered up to 31 March 2019; benefits provided for three years from date of registration. No longer accepting new registrations.
- Portal: https://www.epfindia.gov.in/site_en/Employer.php
- Import confidence (source): medium


## Eligibility

Employers who have registered new employees with EPFO and/or ESIC on or after 1 April 2016, with a Universal Account Number (UAN) assigned to the employee, and who have not previously benefited from similar schemes for the same employee. The employee must be drawing a monthly wage of less than INR 15,000.


Deterministic rules: [eligibility.md](eligibility.md).


## Benefits

The government pays the employer's full contribution (12% towards EPF and ESI) for a period of three years for new employees earning less than INR 15,000 per month. This reduces the employer's cost of hiring and encourages formal employment generation.


Structured benefit objects: [benefits.md](benefits.md).


## Documents

5 document(s) recorded in source data. Full list: [documents.md](documents.md).


## Application

Portal: https://www.epfindia.gov.in/site_en/Employer.php. Steps, channels and deadlines: [application.md](application.md).


## Important Conditions

- Scheme closed for new registrations effective 1 April 2019
- Benefits limited to three years per employee from date of registration
- Only applicable to employees earning less than INR 15,000 per month
- Employer must be compliant with EPFO and ESIC regulations
- Subsumed under Aatmanirbhar Bharat Rozgar Yojana (ABRY) for subsequent periods


## Exclusions

_No explicit disqualifier recorded in source data — this is NOT evidence that none exist. See [exclusions.md](exclusions.md).


## Related Schemes

- [Deen Dayal Antyodaya Yojana - Urban (DAY-NULM)](../row-45-deen-dayal-antyodaya-yojana-urban-day-nulm/scheme.md)
- [Annapurna Scheme](../row-46-annapurna-scheme/scheme.md)
- [Stree Shakti Package for Women Entrepreneurs](../row-47-stree-shakti-package-for-women-entrepreneurs/scheme.md)


## Official Sources

1. [https://pmrpy.gov.in](https://pmrpy.gov.in) [S1]
2. [https://www.epfindia.gov.in/site_en/Employer.php](https://www.epfindia.gov.in/site_en/Employer.php) [S2]


## Discovery metadata

```yaml
discovery:
  user_goals:
    - get_financial_subsidy
    - grow_my_business
    - find_employment
  keywords:
    - "pmrpy"
    - "pradhan"
    - "mantri"
    - "rozgar"
    - "protsahan"
    - "yojana"
    - "employers"
    - "new employees"
    - "formal sector workers"
    - "women entrepreneurship"
  semantic_topics:
    - women-and-child
    - entrepreneurship
    - employment
```
