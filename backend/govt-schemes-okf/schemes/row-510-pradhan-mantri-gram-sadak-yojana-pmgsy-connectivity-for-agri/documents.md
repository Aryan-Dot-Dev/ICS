---
type: "Government Scheme Documents"
title: "Pradhan Mantri Gram Sadak Yojana (PMGSY) – Connectivity for Agri — Documents"
description: "Document requirements for ROW-510."
scheme_id: "ROW-510"
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
---
# Pradhan Mantri Gram Sadak Yojana (PMGSY) – Connectivity for Agri — Documents

```yaml
documents:
  - id: detailed-project-report-dpr-with-alignme
    name: "Detailed Project Report (DPR) with alignment maps and cost estimates"
    required: always
    source: S1
    confidence: medium
  - id: land-availability-certificate-from-conce
    name: "Land availability certificate from concerned revenue authorities"
    required: always
    source: S1
    confidence: medium
  - id: no-objection-certificate-noc-from-forest
    name: "No Objection Certificate (NOC) from Forest Department if applicable"
    required: conditional
    source: S1
    confidence: medium
  - id: clearance-from-pollution-control-board-i
    name: "Clearance from Pollution Control Board if required"
    required: conditional
    source: S1
    confidence: medium
  - id: certificate-of-financial-concurrence-fro
    name: "Certificate of financial concurrence from State Finance Department"
    required: always
    source: S1
    confidence: medium
  - id: utilization-certificates-for-previously
    name: "Utilization Certificates for previously released funds"
    required: always
    source: S1
    confidence: medium
  - id: minutes-of-state-level-standing-committe
    name: "Minutes of State Level Standing Committee (SLSC) meetings"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.