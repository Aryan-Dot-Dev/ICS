---
type: "Government Scheme Documents"
title: "Critical Infrastructure Development Scheme — Documents"
description: "Document requirements for ROW-5."
scheme_id: "ROW-5"
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
    resource: "https://haryanaindustries.gov.in/enterprises-promotion-policy-2015"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://haryanaindustries.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://haryanaindustries.gov.in/about-us"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://haryanaindustries.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Critical Infrastructure Development Scheme — Documents

```yaml
documents:
  - id: land-allotment-letter-or-possession-cert
    name: "Land allotment letter or possession certificate"
    required: always
    source: S1
    confidence: medium
  - id: project-report-detailing-infrastructure
    name: "Project report detailing infrastructure requirements"
    required: always
    source: S1
    confidence: medium
  - id: cost-estimates-for-internal-infrastructu
    name: "Cost estimates for internal infrastructure development"
    required: always
    source: S1
    confidence: medium
  - id: layout-plan-of-the-industrial-plot
    name: "Layout plan of the industrial plot"
    required: always
    source: S1
    confidence: medium
  - id: no-objection-certificate-noc-from-releva
    name: "No Objection Certificate (NOC) from relevant authorities (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: proof-of-identity-and-address-of-the-app
    name: "Proof of identity and address of the applicant"
    required: always
    source: S1
    confidence: medium
  - id: bank-details-for-subsidy-disbursement
    name: "Bank details for subsidy disbursement"
    required: always
    source: S1
    confidence: medium
  - id: any-other-document-as-specified-by-hsiid
    name: "Any other document as specified by HSIIDC or Department of Industries & Commerce"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.