---
type: "Government Scheme Documents"
title: "Raw Material Supply Scheme (RMSS) for Handlooms — Documents"
description: "Document requirements for ROW-180."
scheme_id: "ROW-180"
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
    resource: "https://handlooms.nic.in/assets/img/Handloom Schemes/NHDP_English Compendium_2024.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://handlooms.nic.in/assets/img/Statistics/Key Achivements in India.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://handlooms.nic.in/about.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://handlooms.nic.in/vision_and_mission.php"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://handlooms.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Raw Material Supply Scheme (RMSS) for Handlooms — Documents

```yaml
documents:
  - id: application-form-forwarded-by-state-dire
    name: "Application form forwarded by State Directorate of Handlooms and Textiles"
    required: always
    source: S1
    confidence: medium
  - id: yarn-passbook-for-tracking-entitlements
    name: "Yarn Passbook (for tracking entitlements)"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-for-dbt-transfer
    name: "Bank account details for DBT transfer"
    required: always
    source: S1
    confidence: medium
  - id: utilization-certificate-uc-for-previous
    name: "Utilization Certificate (UC) for previous fund releases (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: proof-of-engagement-in-handloom-producti
    name: "Proof of engagement in handloom production (e.g., registration, weaver’s identity card)"
    required: always
    source: S1
    confidence: medium
  - id: recommendation-from-state-directorate-of
    name: "Recommendation from State Directorate of Handlooms and Textiles"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.