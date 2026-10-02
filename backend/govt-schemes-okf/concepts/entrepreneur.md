---
type: Beneficiary Concept
title: Entrepreneur
description: Persons starting or operating a micro or small enterprise, served by credit and subsidy schemes.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Entrepreneur

## Definition

A person who sets up or runs an enterprise (manufacturing, trading or
services). Central schemes support them mainly through collateral-free or
subsidised credit, margin-money subsidy and handholding.

## Schemes linked to this concept

- [PMMY (Mudra)](../schemes/pmmy/scheme.md) — collateral-free loans up to ₹20 lakh (Tarun Plus), non-farm income-generating activity
- [Stand-Up India](../schemes/stand-up-india/scheme.md) — ₹10 lakh–₹1 crore greenfield loans for SC/ST and women entrepreneurs
- [PMEGP](../schemes/pmegp/scheme.md) — margin-money subsidy on bank credit for new micro-enterprises; VIII-pass applicants 18+, others 18+ with no cap on education
- [PM Vishwakarma](../schemes/pm-vishwakarma/scheme.md) — for artisans in the 18 notified trades (a specialised entrepreneur subset)
- [PM SVANidhi](../schemes/pm-svanidhi/scheme.md) — for street vendors (a specialised micro-entrepreneur subset)

## Engine notes

Business-stage matters: `new_business` vs `existing_business`
(Stand-Up India: greenfield only; PMMY Tarun Plus: prior Tarun repayment;
PMEGP: new units; PM SVANidhi: existing vendors). See
[business-type](../rules/business-type.md) and [age](../rules/age.md).
