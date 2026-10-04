---
type: "Government Scheme Documents"
title: "UPI Innovation Fund (NPCI) — Documents"
description: "Document requirements for ROW-469."
scheme_id: "ROW-469"
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
    resource: "https://npci.org.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://npci.org.in/partner-program"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://www.npci.org.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# UPI Innovation Fund (NPCI) — Documents

```yaml
documents:
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation / Registration"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-entity
    name: "PAN of the entity"
    required: always
    source: S1
    confidence: medium
  - id: detailed-project-proposal
    name: "Detailed project proposal"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-concept-or-prototype-if-availab
    name: "Proof of concept or prototype (if available)"
    required: conditional
    source: S1
    confidence: medium
  - id: team-details-and-expertise
    name: "Team details and expertise"
    required: always
    source: S1
    confidence: medium
  - id: financial-projections-and-utilization-pl
    name: "Financial projections and utilization plan"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.