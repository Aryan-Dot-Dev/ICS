---
type: "Government Scheme Documents"
title: "Defence India Startup Challenge (DISC) – iDEX — Documents"
description: "Document requirements for ROW-80."
scheme_id: "ROW-80"
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
    resource: "https://idex.gov.in/challenges"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://idex.gov.in/en/challenges"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://idex.gov.in/how_to_apply"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://idex.gov.in/faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://idex.gov.in/financial-faq"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://idex.gov.in/uploads/resources/1726729375_a706d8ad0ebe4d13abac.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://idex.gov.in/uploads/resources/1700215966_01115b225ef4d436c635.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://idex.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S9
    resource: "https://idex.gov.in/disc"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Defence India Startup Challenge (DISC) – iDEX — Documents

```yaml
documents:
  - id: full-details-of-a-single-point-of-contac
    name: "Full Details of a Single Point of Contact"
    required: always
    source: S1
    confidence: medium
  - id: entity-details-for-startups-msmes
    name: "Entity Details (for Startups/MSMEs)"
    required: always
    source: S1
    confidence: medium
  - id: proposal-details-including-problem-state
    name: "Proposal Details including problem statement selection, funding level, technical and financial details"
    required: always
    source: S1
    confidence: medium
  - id: mention-of-relevant-patents-and-research
    name: "Mention of relevant patents and research papers by the applicant (if any)"
    required: conditional
    source: S1
    confidence: medium
  - id: tentative-business-plan
    name: "Tentative business plan"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.