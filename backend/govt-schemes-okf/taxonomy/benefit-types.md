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

### Additions (runs batch rows 1–600, imported 2026-10-02)

| Term | Definition | Examples in this bundle |
|---|---|---|
| `tax-exemption` | Tax holiday, deduction or rebate granted by scheme provisions | row-70 (Section 80-IAC), row-71 (Angel Tax Exemption), row-11 (NSIC Credit Support) |
| `credit-guarantee` | Government-backed guarantee of a lender's loss on a loan | row-9 (CGTMSE), row-128 (ECLGS), row-4 (State Mini Cluster Development) |
| `equity` | Direct fund investment / co-investment in an entity | row-15 (SIDBI Direct Credit), row-22 (DPIIT Recognition), row-36 (PM-MITRA) |

Note: schemes whose source data records no benefit text emit
`benefit_types: []` with a `not_verified` note in `benefits.md` — do not
back-fill a type that the source does not support.

Related quantifiers used inside benefit objects: `max_amount`, `min_amount`,
`frequency` (one_time | monthly | quarterly | annual | seasonal), `duration`,
`contribution` (beneficiary share), `delivery` (dbt | account_credit |
e_voucher | in_kind | through_lending_institution).
