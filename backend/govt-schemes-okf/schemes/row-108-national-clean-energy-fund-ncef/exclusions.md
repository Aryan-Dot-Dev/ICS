---
type: "Government Scheme Exclusions"
title: "National Clean Energy Fund (NCEF) — Exclusions"
description: "Structured disqualifiers for ROW-108."
scheme_id: "ROW-108"
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
    resource: "https://coal.nic.in"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# National Clean Energy Fund (NCEF) — Exclusions

Explicit disqualifiers found in the source data. Each has effect `ineligible`; evaluate before eligibility rules.

```yaml
exclusions:
  - id: EX-001
    detail: "- Incorporated in India under Companies Act, 2013 or foreign jurisdiction per incorporation laws<br>- No insolvency proceedings admitted by NCLT or competent court<br>- Not blacklisted by Central/State Government<br>- Promoters/directors not convicted of coal block allocation offence or sentenced to >3 years imprisonment<br>- Compliance with Applicable Laws"
    effect: ineligible
    source: S1
    confidence: medium
```