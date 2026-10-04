---
type: "Government Scheme Exclusions"
title: "SIDBI Direct Credit Scheme — Exclusions"
description: "Structured disqualifiers for ROW-15."
scheme_id: "ROW-15"
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
    resource: "https://sidbi.in/home-product"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://sidbi.in/project-funding"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://sidbi.in/machinery-loan"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://sidbi.in/head/uploads/other_loans_document/Cash Defence.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://sidbi.in/head/uploads/other_loans_document/Venture Debt Financing to MSMEs.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://sidbi.in/head/uploads/other_loans_document/Seed funding through Incubators.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://sidbi.in/head/uploads/other_loans_document/GST Sahay Invoice based financing to SIDBI Customers.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://sidbi.in/head/uploads/other_loans_document/SIDBI Gig Flexi Loans.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://sidbi.in/head/uploads/other_loans_document/FPS Sahay - Fair Price Shops Sahay.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S10
    resource: "https://sidbi.in/head/uploads/other_loans_document/GST Sahay Jan Aushadhi Kendras (JAKs).pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S11
    resource: "https://sidbi.in/en/government-programmes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S12
    resource: "https://www.sidbi.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# SIDBI Direct Credit Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Default to banks/FIs disqualifies applicant"
    effect: ineligible
    source: S1
    confidence: medium
```