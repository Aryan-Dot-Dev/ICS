---
type: Rule Concept
title: Business Type
description: Enterprise stage, sector and legal form used by credit/subsidy scheme rules.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Rule Concept: `applicant.business`

## Machine fields

- `applicant.business.stage` — `greenfield` (new) | `existing` |
  `planned`
- `applicant.business.sector` — `manufacturing` | `services` | `trading`
  | `agri_allied`
- `applicant.business.legal_form` — `proprietary` | `partnership` |
  `llp` | `company` | `self_help_group` | `joint_liability_group` |
  `none_yet`
- `applicant.business.years_operating` — number
- `applicant.prior_repayment_record` — e.g. Mudra Tarun repaid (for Tarun Plus)

## Scheme-specific uses

| Scheme | Business rules |
|---|---|
| [pmmy](../schemes/pmmy/eligibility.md) | non-farm income-generating activity; sector agnostic (manufacturing/trading/services); category by loan size |
| [stand-up-india](../schemes/stand-up-india/eligibility.md) | **greenfield only** — first-time venture in manufacturing/services/trading |
| [pmegp](../schemes/pmegp/eligibility.md) | new micro-enterprise only; sector caps on project cost |
| [pm-vishwakarma](../schemes/pm-vishwakarma/eligibility.md) | artisan enterprise in notified trade; loan tranche 2 conditional on tranche-1 repayment |
| [pm-svanidhi](../schemes/pm-svanidhi/eligibility.md) | working capital for existing street-vending activity; tranche progression conditional on repayment |

## Engine notes

Stage mismatch is the most frequent ineligibility cause (e.g. existing
business ⇒ not Stand-Up India). Tranche progression must never be
presented as a first-loan entitlement.
