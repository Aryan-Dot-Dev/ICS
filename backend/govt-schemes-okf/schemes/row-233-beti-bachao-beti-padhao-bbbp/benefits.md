---
type: "Government Scheme Benefits"
title: "Beti Bachao Beti Padhao (BBBP) — Benefits"
description: "Benefit objects for ROW-233."
scheme_id: "ROW-233"
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
    resource: "https://wcd.nic.in/bbbp-schemes"
    title: not_verified
    author: not_verified
    last_modified: not_verified
---
# Beti Bachao Beti Padhao (BBBP) — Benefits

## Benefit objects

```yaml
benefits:
  - benefit_id: BEN-001
    type: service
    name: "Non-financial benefits include awareness campaigns, community mobilization, trai"
    amount: not_verified
    detail: "Non-financial benefits include awareness campaigns, community mobilization, training of functionaries, and monitoring of CSR."
    source: S1
    confidence: medium
  - benefit_id: BEN-002
    type: tax-exemption
    name: "benefits are delivered through linked schemes such as"
    amount: not_verified
    detail: "Financial benefits are delivered through linked schemes such as Sukanya Samriddhi Yojana (SSY), which offers tax-free interest and tax deduction under Section 80C."
    source: S1
    confidence: medium
  - benefit_id: BEN-003
    type: scholarship
    name: "BBBP also facilitates convergence with other schemes for scholarships"
    amount: not_verified
    detail: "BBBP also facilitates convergence with other schemes for scholarships, bicycles, toilets, and financial incentives for girl child education."
    source: S1
    confidence: medium
  - benefit_id: BEN-004
    type: service
    name: "BBBP itself does not provide direct financial transfers to"
    amount: not_verified
    detail: "BBBP itself does not provide direct financial transfers to beneficiaries."
    source: S1
    confidence: medium
  - benefit_id: BEN-005
    type: service
    name: "support is channeled through convergent schemes like Sukanya"
    amount:
      value: 250
      currency: INR
      frequency: annual
      is_maximum: true
    detail: "Financial support is channeled through convergent schemes like Sukanya Samriddhi Yojana (SSY), where guardians can open accounts for girl children with a minimum deposit of INR 250 and maximum of INR 1.5 lakh per financial year, earning interest rate fixed by the government (currently 8.2% per annum, compounded annually)."
    source: S1
    confidence: medium
  - benefit_id: BEN-006
    type: service
    name: "scheme also supports state-level incentives for girl child"
    amount: not_verified
    detail: "The scheme also supports state-level incentives for girl child education under the BBBP framework."
    source: S1
    confidence: medium
```
- Benefit figures are quoted verbatim from the source import; re-verify amounts against the official portal before quoting them to an applicant.