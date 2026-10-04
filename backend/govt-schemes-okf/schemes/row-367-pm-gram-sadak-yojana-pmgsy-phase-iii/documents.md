---
type: "Government Scheme Documents"
title: "PM Gram Sadak Yojana (PMGSY) Phase III — Documents"
description: "Document requirements for ROW-367."
scheme_id: "ROW-367"
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
    resource: "https://pmgsy.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://omms.nic.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# PM Gram Sadak Yojana (PMGSY) Phase III — Documents

```yaml
documents:
  - id: detailed-project-report-dpr
    name: "Detailed Project Report (DPR)"
    required: always
    source: S1
    confidence: medium
  - id: land-availability-certificate
    name: "Land availability certificate"
    required: always
    source: S1
    confidence: medium
  - id: environmental-clearance-if-applicable
    name: "Environmental clearance (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: forest-clearance-if-applicable
    name: "Forest clearance (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: clearance-from-railway-authorities-if-cr
    name: "Clearance from Railway authorities (if crossing tracks)"
    required: always
    source: S1
    confidence: medium
  - id: clearance-from-irrigation-department-if
    name: "Clearance from Irrigation department (if crossing canals)"
    required: always
    source: S1
    confidence: medium
  - id: no-objection-certificate-noc-from-concer
    name: "No Objection Certificate (NOC) from concerned departments"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-inclusion-in-core-network
    name: "Certificate of inclusion in Core Network"
    required: always
    source: S1
    confidence: medium
  - id: survey-and-alignment-drawings
    name: "Survey and alignment drawings"
    required: always
    source: S1
    confidence: medium
  - id: bill-of-quantities-boq
    name: "Bill of Quantities (BOQ)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.