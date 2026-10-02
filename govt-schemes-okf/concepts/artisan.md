---
type: Beneficiary Concept
title: Artisan
description: Traditional artisans and craftspersons practising one of the trades notified under PM Vishwakarma.
okf_version: "0.2"
generated:
  by: process:scheme-ingestion-pipeline
  at: 2026-09-18
status: stable
---

# Concept: Artisan

## Definition

A traditional artisan or craftsperson working with hands and tools in one
of the **18 notified trades** under PM Vishwakarma, e.g. carpenter,
blacksmith, potter, cobbler (shoemaker), mason, basket maker, barber,
boat maker, hammer & toolkit maker, locksmith, goldsmith, laundry
(Dhobi), tailor, sculptor (Moorthy Sthapak), stone breaker, fishing net
maker, doll & toy maker, broom maker. The official list must be confirmed
from pmvishwakarma.gov.in at review time.

## Schemes linked to this concept

- [PM Vishwakarma](../schemes/pm-vishwakarma/scheme.md) — recognition certificate, training with stipend, toolkit e-voucher, collateral-free enterprise development loan, marketing support

## Engine notes

Trade membership is a hard dimension: `applicant.occupation in
<vishwakarma_trades>`. Unregistered or salaried persons are excluded (see
[exclusions](../schemes/pm-vishwakarma/exclusions.md)). Daily-wage and
salaried workers in the same craft do not qualify.
