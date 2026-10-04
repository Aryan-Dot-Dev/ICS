---
type: "Government Scheme Documents"
title: "Nivesh Mitra – UP Single Window Portal — Documents"
description: "Document requirements for ROW-352."
scheme_id: "ROW-352"
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
    resource: "https://niveshmitra.up.nic.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://niveshmitra.up.nic.in/Default.aspx"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://niveshmitra.up.nic.in/Documents/User_Process_Flow/UPS_1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://niveshmitra.up.nic.in/Documents/Dept_Process_Flow/DPF_1.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://niveshmitra.up.nic.in/Documents/Refund_Policy_Nivesh_Mitra.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://niveshmitra.up.nic.in/Documents/NM_Live_List.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://niveshmitra.up.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Nivesh Mitra – UP Single Window Portal — Documents

```yaml
documents:
  - id: self-declaration-of-all-land-holders
    name: "Self Declaration of all Land Holders"
    required: always
    source: S1
    confidence: medium
  - id: map-of-land-including-quadriplegic-signe
    name: "Map of land (including Quadriplegic), signed by all Land Holders"
    required: always
    source: S1
    confidence: medium
  - id: document-of-updated-circle-rate-determin
    name: "Document of Updated Circle Rate, determined by Collector"
    required: always
    source: S1
    confidence: medium
  - id: certified-copy-of-updated-khatauni
    name: "Certified copy of updated Khatauni"
    required: always
    source: S1
    confidence: medium
  - id: certified-copy-of-updated-khasra
    name: "Certified copy of updated Khasra"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.