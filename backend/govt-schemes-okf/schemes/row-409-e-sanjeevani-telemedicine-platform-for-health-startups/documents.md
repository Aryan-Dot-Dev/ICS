---
type: "Government Scheme Documents"
title: "e-Sanjeevani Telemedicine Platform for Health Startups — Documents"
description: "Document requirements for ROW-409."
scheme_id: "ROW-409"
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
    resource: "https://esanjeevani.mohfw.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://esanjeevani.mohfw.gov.in/assets/guidelines/ehr_guidlines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S3
    resource: "https://esanjeevani.mohfw.gov.in/assets/guidelines/Guidelines_for_Telemedicine_Services.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S4
    resource: "https://esanjeevani.mohfw.gov.in/assets/guidelines/Telemedicine_Practice_Guidelines.pdf"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# e-Sanjeevani Telemedicine Platform for Health Startups — Documents

```yaml
documents:
  - id: abha-id-for-health-record-linkage
    name: "ABHA ID (for health record linkage)"
    required: always
    source: S1
    confidence: medium
  - id: proof-of-identity-for-patient-registrati
    name: "Proof of identity for patient registration"
    required: always
    source: S1
    confidence: medium
  - id: training-completion-certificate-for-heal
    name: "Training completion certificate for healthcare providers (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: infrastructure-gap-analysis-report-for-s
    name: "Infrastructure gap analysis report (for State proposals)"
    required: always
    source: S1
    confidence: medium
  - id: proposal-for-infrastructure-and-hr-under
    name: "Proposal for infrastructure and HR under NHM (for States/UTs)"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.