---
type: "Government Scheme Documents"
title: "Mission Innovation India — Documents"
description: "Document requirements for ROW-103."
scheme_id: "ROW-103"
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
    resource: "https://missioninnovation.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Mission Innovation India — Documents

```yaml
documents:
  - id: project-proposal-detailing-objectives-me
    name: "Project proposal detailing objectives, methodology, and expected outcomes"
    required: always
    source: S1
    confidence: medium
  - id: budget-breakdown-and-justification
    name: "Budget breakdown and justification"
    required: always
    source: S1
    confidence: medium
  - id: technical-feasibility-report
    name: "Technical feasibility report"
    required: always
    source: S1
    confidence: medium
  - id: information-on-applicant-organization-re
    name: "Information on applicant organization (registration, PAN, etc.)"
    required: always
    source: S1
    confidence: medium
  - id: details-of-collaborating-partners-if-any
    name: "Details of collaborating partners (if any)"
    required: conditional
    source: S1
    confidence: medium
  - id: intellectual-property-status-and-managem
    name: "Intellectual property status and management plan"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.