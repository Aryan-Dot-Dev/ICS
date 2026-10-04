---
type: "Government Scheme Exclusions"
title: "BIRAC PACE Programme for Biotech Incubation — Exclusions"
description: "Structured disqualifiers for ROW-549."
scheme_id: "ROW-549"
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
    resource: "https://birac.nic.in/pace.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://birac.nic.in/webcontent/1613355528_PACE_scheme_document_15_02_2021.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://birac.nic.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# BIRAC PACE Programme for Biotech Incubation — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Absence of which can result in disqualification of the proposal."
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Proposals submitted in collaboration with companies defaulting on repayment of loan or are irregular with regard to repayment of instalments to BIRAC would be considered ineligible"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "Applicant who had withdrawn their proposal after approval from Apex committee or whose project was foreclosed due to inadequate funds or any other irregularity would be debarred from submitting fresh proposals for next 3 calls (1 year) unless the withdrawal was due to papers not being ready"
    effect: ineligible
    source: S1
    confidence: medium
```