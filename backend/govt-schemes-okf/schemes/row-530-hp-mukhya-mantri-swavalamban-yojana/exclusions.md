---
type: "Government Scheme Exclusions"
title: "HP Mukhya Mantri Swavalamban Yojana — Exclusions"
description: "Structured disqualifiers for ROW-530."
scheme_id: "ROW-530"
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
    resource: "https://mmsy.hp.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://emerginghimachal.hp.gov.in/themes/backend/uploads/notification/Notification/Operational-Guidelines-for-Mukhya-Mantri-Swawlamban-Yojna-2019.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://mmsy.hp.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# HP Mukhya Mantri Swavalamban Yojana — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "The unit must be set up in Himachal Pradesh and the applicant must not have engaged any private agency or middleman for aviling benefits under the scheme."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Plant and machinery for which payment has been made in cash are not eligible for subsidy"
    effect: ineligible
    source: S1
    confidence: medium
```