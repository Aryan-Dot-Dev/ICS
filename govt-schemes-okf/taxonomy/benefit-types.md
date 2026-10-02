---
type: Taxonomy
title: Benefit Types
description: Controlled vocabulary for the nature of benefit a scheme delivers.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Benefit Types

Closed vocabulary used in scheme frontmatter (`benefit_types`) and in
benefit objects (`benefit.type`). One benefit object carries exactly one
type; schemes list all applicable types.

| Term | Definition | Examples in this bundle |
|---|---|---|
| `grant` | Non-repayable money with a defined purpose | pmegp margin money subsidy (grant component) |
| `subsidy` | Government-paid share of a cost the beneficiary would otherwise bear | pmfby premium subsidy, pmmy (none — loans only), pmsvanidhi interest subsidy |
| `loan` | Credit that must be repaid | pmmy, stand-up-india, pmegp credit component, pm-vishwakarma, pm-svanidhi, pmay-g institutional loan |
| `insurance` | Risk cover paying on an insured event | pmfby, pmsby, pmjjby, pm-jay (health) |
| `pension` | Periodic payment for old age / survivor status | apy, nsap components |
| `scholarship` | Educational financial award | nsp-csss, pms-sc, nmmss |
| `cash-transfer` | Direct unconditional/conditional money to bank account | pm-kisan, pmmvy, nsap, pmay-g/pmay-u assistance |
| `reimbursement` | Compensation of expenses already incurred | pms-sc course-fee reimbursement, pmsvanidhi interest subsidy |
| `in-kind` | Physical goods / services instead of cash | pmuy (connection + stove), nsap-Annapurna (foodgrain), pm-vishwakarma toolkit e-voucher |
| `service` | Facilitation/enablement rather than money | pmmy/stand-up-india handholding, nsp (portal aggregating schemes) |

Related quantifiers used inside benefit objects: `max_amount`, `min_amount`,
`frequency` (one_time | monthly | quarterly | annual | seasonal), `duration`,
`contribution` (beneficiary share), `delivery` (dbt | account_credit |
e_voucher | in_kind | through_lending_institution).
