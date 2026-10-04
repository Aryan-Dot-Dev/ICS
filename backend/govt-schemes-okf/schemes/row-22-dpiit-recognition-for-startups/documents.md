---
type: "Government Scheme Documents"
title: "DPIIT Recognition for Startups — Documents"
description: "Document requirements for ROW-22."
scheme_id: "ROW-22"
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
    resource: "https://startupindia.gov.in/content/sih/en/startup-scheme.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://startupindia.gov.in/content/sih/en/startupgov/startup_recognition_page.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://startupindia.gov.in/content/sih/en/profile.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S5
    resource: "https://startupindia.gov.in/content/dam/invest-india/Templates/public/Action%20Plan.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S6
    resource: "https://startupindia.gov.in/content/dam/invest-india/HomePage/Startup-Playbook-Exclusive-Benefits-for-DPIIT-Recognised-Startups-in-India-April-2026.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S7
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S8
    resource: "https://www.startupindia.gov.in/content/sih/en/recognition.html"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# DPIIT Recognition for Startups — Documents

```yaml
documents:
  - id: memorandum-of-association-for-pvt-ltd-ll
    name: "Memorandum of Association for Pvt. Ltd. / LLP Deed"
    required: always
    source: S1
    confidence: medium
  - id: board-resolution-if-any
    name: "Board Resolution (If Any)"
    required: conditional
    source: S1
    confidence: medium
  - id: annual-accounts-of-the-startup-for-the-l
    name: "Annual Accounts of the startup for the last three financial years"
    required: always
    source: S1
    confidence: medium
  - id: income-tax-returns-for-the-last-three-fi
    name: "Income Tax returns for the last three financial years"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.