---
type: "Government Scheme Documents"
title: "Export Oriented Unit (EOU) Scheme — Documents"
description: "Document requirements for ROW-138."
scheme_id: "ROW-138"
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
    resource: "https://www.dgft.gov.in/CP/?opt=EOU"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Export Oriented Unit (EOU) Scheme — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: memorandum-and-articles-of-association-p
    name: "Memorandum and Articles of Association / Partnership Deed"
    required: always
    source: S1
    confidence: medium
  - id: project-report-detailing-investment-empl
    name: "Project Report detailing investment, employment, export projections, and foreign exchange earnings"
    required: always
    source: S1
    confidence: medium
  - id: bank-solvency-certificate
    name: "Bank Solvency Certificate"
    required: always
    source: S1
    confidence: medium
  - id: income-tax-returns-of-the-promoters-for
    name: "Income Tax Returns of the promoters (for last 3 years)"
    required: always
    source: S1
    confidence: medium
  - id: list-of-plant-and-machinery-with-cif-val
    name: "List of Plant and Machinery with CIF value"
    required: always
    source: S1
    confidence: medium
  - id: details-of-technical-know-how-or-collabo
    name: "Details of Technical Know-how or Collaboration Agreement (if any)"
    required: conditional
    source: S1
    confidence: medium
  - id: undertaking-to-achieve-positive-net-fore
    name: "Undertaking to achieve positive net foreign exchange earnings"
    required: always
    source: S1
    confidence: medium
  - id: letter-of-authorization-for-signatory
    name: "Letter of Authorization for signatory"
    required: always
    source: S1
    confidence: medium
  - id: board-resolution-authorizing-the-applica
    name: "Board Resolution authorizing the application (for companies)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.