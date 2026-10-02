---
type: Government Scheme Documents
title: PMEGP — Documents
description: Document requirements for PMEGP application.
scheme_id: PMEGP
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
    resource: https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp
    title: PMEGP e-Portal (KVIC)
    author: KVIC
    last_modified: not_verified
  - id: S2
    resource: https://www.kviconline.gov.in/pmegpeportal/jsp/eligibility_criteria.jsp
    title: PMEGP Eligibility Criteria (KVIC e-portal)
    author: KVIC
    last_modified: not_verified
---

# PMEGP — Documents

```yaml
documents:
  - id: aadhaar
    name: Aadhaar card
    required: always
    condition: e-portal registration and identity verification
    source: S1
    confidence: high

  - id: aadhaar-mobile
    name: Mobile number (Aadhaar-linked)
    required: always
    condition: OTP verification on the e-portal
    source: S1
    confidence: high

  - id: special-category-certificate
    name: Special-category certificate (SC/ST/OBC/minority/ex-servicemen/PwD/NER)
    required: conditional
    condition: to claim special-category margin-money subsidy rates
    source: S1
    confidence: high

  - id: education-proof
    name: Education certificate (VIII/X pass)
    required: conditional
    condition: service projects above Rs.10 lakh need VIII-pass; manufacturing projects above Rs.25 lakh need X-pass
    source: S2
    confidence: high

  - id: project-profile
    name: Project report / project details entered on the e-portal
    required: always
    condition: appraisal by district task force and bank
    source: S1
    confidence: high

  - id: shg-trust-society-docs
    name: Registration documents for SHG/trust/co-operative society applicants
    required: conditional
    condition: institutional applicants only
    source: S1
    confidence: medium

  - id: bank-account
    name: Bank account (Aadhaar-linked preferred)
    required: always
    condition: credit linkage and subsidy routing
    source: S1
    confidence: high
```

## Notes

- An income certificate is **not** required under PMEGP; the income
  test is income-tax-payer status, established during appraisal.
- Rural/urban location is recorded on the e-portal; no separate document
  is prescribed at scheme level.
