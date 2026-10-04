---
type: "Government Scheme Exclusions"
title: "EESL Energy Efficiency Innovation Support — Exclusions"
description: "Structured disqualifiers for ROW-467."
scheme_id: "ROW-467"
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
    resource: "https://eeslindia.org/wp-content/uploads/2026/02/Expression of Interest for Technical Solution Provider1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://eeslindia.org/wp-content/uploads/2026/01/EOI - Registration of Channel Partners - Pradhan Mantri Surya Ghar Muft Bijli Yojana in the State of Odisha.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://eeslindia.org/wp-content/uploads/2025/12/EOI_Strategic Partnership_UBS_EESL.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://eeslindia.org/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://eeslindia.org/hi/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://eeslindia.org/en/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://eeslindia.org"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# EESL Energy Efficiency Innovation Support — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    field: applicant.pan_held
    operator: is_true
    value: true
    detail: "Interested parties must register via the EESL website, submit a filled registration form along with requisite documents including GST Certificate, PAN Card, Demand Draft/NEFT/RTGS of Rupees One Lakh Only as refundable security deposit, To Whom It May Concern letter, Self-Declaration for Blacklisting, Contract Agreement copies, Non-Disclosure Agreement, PPP MII and Land Border Sharing Certificate, Compliance Matrix, EFT form, and Cancelled Cheque."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Applicants must not have been blacklisted by any Central/State Government or Public Sector Undertaking."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "Parties must not have been blacklisted by any Central/State Government or Public Sector Undertaking"
    effect: ineligible
    source: S1
    confidence: medium
```