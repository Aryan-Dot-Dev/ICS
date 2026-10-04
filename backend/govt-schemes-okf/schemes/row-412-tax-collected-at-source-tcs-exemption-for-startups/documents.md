---
type: "Government Scheme Documents"
title: "Tax Collected at Source (TCS) Exemption for Startups — Documents"
description: "Document requirements for ROW-412."
scheme_id: "ROW-412"
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
    resource: "https://www.incometax.gov.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
  - id: S2
    resource: "https://www.startupindia.gov.in/"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Tax Collected at Source (TCS) Exemption for Startups — Documents

```yaml
documents:
  - id: dpiit-recognition-certificate
    name: "DPIIT recognition certificate"
    required: always
    source: S1
    confidence: medium
  - id: pan-of-the-startup
    name: "PAN of the startup"
    required: always
    source: S1
    confidence: medium
  - id: certificate-of-incorporation-registratio
    name: "Certificate of Incorporation/Registration"
    required: always
    source: S1
    confidence: medium
  - id: form-27eq-or-tcs-exemption-application
    name: "Form 27EQ or TCS exemption application"
    required: always
    source: S1
    confidence: medium
  - id: details-of-specified-transactions-attrac
    name: "Details of specified transactions attracting TCS"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.