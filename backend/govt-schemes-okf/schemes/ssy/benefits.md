---
type: Government Scheme Benefits
title: SSY — Benefits
description: Interest and withdrawal benefit objects for SSY.
scheme_id: SSY
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
    resource: https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=171
    title: Sukanya Samriddhi Account Scheme, 2019 (rules)
    author: National Savings Institute, Ministry of Finance
    last_modified: not_verified
  - id: S3
    resource: https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=157019&ModuleId=3
    title: PIB — Small savings rates note (SSY current rate reference)
    author: Press Information Bureau / Ministry of Finance
    last_modified: 2026-01-21
---

# SSY — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: INT-001
    type: service
    name: Government-notified interest on deposits
    amount:
      rate: 8.2
      unit: percent_per_annum
      currency: INR
      compounding: annual
      applicable_period: per latest quarterly Government notification (verified as of 2026-09-18 against PIB note of Jan 2026 [S3])
      stale_after: 2026-12-31
      note: interest rates are revised quarterly by the Government — the engine must re-verify each quarter and must not present 8.2% as a permanent constant
    conditions:
      - minimum deposit Rs.250/year; maximum Rs.1.5 lakh/year per rules [S1]
      - deposits for 15 years from opening
    guarantee: sovereign (Government of India small savings)
    source: S1
    confidence: high

  - benefit_id: TAX-001
    type: service
    name: Tax-free returns (EEE treatment)
    amount:
      value: full_interest_and_maturity_exemption
      currency: INR
      note: deposits, interest and maturity proceeds are exempt per Income-tax Act treatment of the scheme
    source: S1
    confidence: high

  - benefit_id: WDL-001
    type: service
    name: Partial withdrawal for education
    amount:
      value: up_to_50_percent_of_balance
      currency: INR
      note: after the girl attains 18 years (or Class X pass, per rules), for education purposes [S1]
    conditions: age/education condition and application per rules
    source: S1
    confidence: high

  - benefit_id: CLO-001
    type: service
    name: Maturity / early closure
    amount:
      value: full_balance_plus_interest
      currency: INR
      note: maturity 21 years from opening; premature closure on marriage after 18 (with proof), per rules [S1]
    conditions: rule-bound closure conditions
    source: S1
    confidence: high
```

## Notes

- The **rate is time-variable** (quarterly notification). 8.2% is the
  verified current rate at authoring; `stale_after` is set to force
  re-verification.
- Absolute maturity corpus depends on deposit behaviour — never
  precompute in the KB; the engine should calculate on demand.
