---
type: "Government Scheme Exclusions"
title: "NSIC Credit Support Scheme — Exclusions"
description: "Structured disqualifiers for ROW-11."
scheme_id: "ROW-11"
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
    resource: "https://nsic.co.in/Schemes/RawMaterialAgainstBG"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://nsic.co.in/documents/pdfs/sprs/1.Check_List_of_Fresh_Registration_23052023.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://nsic.co.in/documents/pdfs/FAQ-SPRS-4.8.2021.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://www.nsic.co.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# NSIC Credit Support Scheme — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "Units blacklisted;"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-002
    detail: "Units engaged in manufacture of medicine and drugs except Ayurvedic, Unani, Siddha, and Homeopathic medicines are not eligible"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-003
    detail: "Wholesale trading, retail trading, or commission agents are not eligible"
    effect: ineligible
    source: S1
    confidence: medium
  - id: EX-004
    detail: "Units blacklisted or with proprietor/partner/director/Karta convicted of criminal offence are not eligible"
    effect: ineligible
    source: S1
    confidence: medium
```