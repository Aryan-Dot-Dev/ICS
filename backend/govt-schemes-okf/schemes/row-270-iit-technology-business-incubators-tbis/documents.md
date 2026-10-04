---
type: "Government Scheme Documents"
title: "IIT Technology Business Incubators (TBIs) — Documents"
description: "Document requirements for ROW-270."
scheme_id: "ROW-270"
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
    resource: "https://www.iitb.ac.in/incubator"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# IIT Technology Business Incubators (TBIs) — Documents

```yaml
documents:
  - id: business-plan-or-project-proposal
    name: "Business plan or project proposal"
    required: always
    source: S1
    confidence: medium
  - id: team-member-profiles-and-cvs
    name: "Team member profiles and CVs"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-concept-or-prototype-details
    name: "Proof of concept or prototype details"
    required: always
    source: S1
    confidence: medium
  - id: incorporation-documents-if-applicable
    name: "Incorporation documents (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: ip-details-or-patent-filings-if-any
    name: "IP details or patent filings (if any)"
    required: conditional
    source: S1
    confidence: medium
  - id: funding-details-or-financial-projections
    name: "Funding details or financial projections"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.