---
type: "Government Scheme Documents"
title: "Powertex India Scheme — Documents"
description: "Document requirements for ROW-37."
scheme_id: "ROW-37"
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
    resource: "https://texmin.nic.in/powertex"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Powertex India Scheme — Documents

```yaml
documents:
  - id: certificate-of-registration-incorporatio
    name: "Certificate of Registration / Incorporation"
    required: always
    source: S1
    confidence: medium
  - id: pan-card-of-the-unit-or-entrepreneur
    name: "PAN Card of the unit or entrepreneur"
    required: always
    source: S1
    confidence: medium
  - id: bank-account-details-and-cancelled-chequ
    name: "Bank account details and cancelled cheque"
    required: always
    source: S1
    confidence: medium
  - id: detailed-project-report-with-cost-estima
    name: "Detailed project report with cost estimates"
    required: always
    source: S1
    confidence: medium
  - id: quotations-from-suppliers-for-machinery
    name: "Quotations from suppliers for machinery"
    required: always
    source: S1
    confidence: medium
  - id: land-ownership-or-lease-documents
    name: "Land ownership or lease documents"
    required: always
    source: S1
    confidence: medium
  - id: consent-to-establish-from-pollution-cont
    name: "Consent to establish from Pollution Control Board (if applicable)"
    required: conditional
    source: S1
    confidence: medium
  - id: audit-reports-of-previous-years-for-exis
    name: "Audit reports of previous years (for existing units)"
    required: always
    source: S1
    confidence: medium
  - id: undertaking-regarding-non-availing-of-si
    name: "Undertaking regarding non-availing of similar subsidy from other sources"
    required: always
    source: S1
    confidence: medium
```

- `required: conditional` marks documents the source phrases as "if applicable / if available / optional"; everything else is recorded as always required by the source.