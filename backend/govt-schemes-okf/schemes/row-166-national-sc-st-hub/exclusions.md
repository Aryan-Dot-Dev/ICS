---
type: "Government Scheme Exclusions"
title: "National SC/ST Hub — Exclusions"
description: "Structured disqualifiers for ROW-166."
scheme_id: "ROW-166"
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
    resource: "https://scsthub.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://scsthub.in/content/special-credit-linked-capital-subsidy-scheme"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://scsthub.in/sites/default/files/NSSH-Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://scsthub.in/sites/default/files/schemes/NSSH_Guidelines_Sub_scheme__0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://scsthub.in/sites/default/files/NSSH-Achievement-Report-FY_2023-24_Final.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://scsthub.in/sites/default/files/training/Expression_of_Interest_for_Capacity_Building_Training_Program_2025-26_0.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://scsthub.in/sites/default/files/training/Contact%20details%20of%20NSSHOs%20May%202026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://scsthub.in/support"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://scsthub.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National SC/ST Hub — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Units availing subsidy under SCLCSS shall not be allowed to avail any other subsidy for procurement of the same plant & machinery and equipment from any other scheme of Central/State Government and vice-versa"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "any SC-ST MSE availing reimbursement under all the above-mentioned components cannot avail reimbursement from any other government or private agency"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "Industries covered under the RED category as per Classification of industries for consent management are not eligible for subsidy under SCLCSS"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-004
    detail: "Fabricated and second-hand plant and machinery shall not be eligible for consideration for subsidy under SCLCSS"
    effect: ineligible
    source: S1
    confidence: medium
```