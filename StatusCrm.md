# Mini-CRM Build Status

Tracks actual build progress against the [25-idea catalog](project.html) / [type breakdown](PlanInherit.md). Updated as each one moves through: **Not started → Built → Tested → Deployed**.

All built CRMs live grouped under `F:\projects\Sasses\` (one subfolder per CRM, each with its own `backend` root + `frontend/`).

**Cross-cutting fix (2026-08-20)**: every `ResourceView` across all 5 built CRMs had Create + Delete but no Edit — `patchResource` existed in every `api.ts` and every backend `PATCH` route worked, the UI just never wired a button to it. Fixed in all 5 (Edit button, pre-filled form, Cancel). Also added a client-side phone-length check (pops an alert if under 6 chars) and, while fixing Booking CRM's Loyalty view, found its "Delete" button had no backing `DELETE` route at all — disabled edit/delete there instead of adding one, since deleting a ledger entry would break the running balance chain.

| # | CRM | Type | Status | Tested | Deployed | Notes |
|---|---|---|---|---|---|---|
| 19 | Solo CRM | 1 | Built | Partial | No | `F:\projects\Sasses\solo-crm`. Backend fully tested (real HTTP calls: client → proposal → invoice, relations + totals confirmed correct). Frontend typecheck + build clean, CORS+fetch verified against live backend, but **not visually confirmed in an actual browser** (no browser tool available). Runs locally — `:3300` (API) / `:5174` (UI) — not deployed anywhere. |
| 03 | Listing CRM | 1 | Built | Partial | No | `F:\projects\Sasses\listing-crm`. Backend fully tested (client → nested proposal+space+rent in one call, nested PATCH upsert, list-with-includes — all confirmed correct). Frontend typecheck + build clean, CORS+fetch verified against live backend, **not visually confirmed in an actual browser**. Runs locally — `:3301` (API) / `:5175` (UI) — not deployed anywhere. |
| 05 | Booking CRM | 1 | Built | Partial | No | `F:\projects\Sasses\booking-crm`. Backend fully tested — the real integration: booked an appointment, completed it, confirmed loyalty points auto-awarded (balance carried correctly) and 3 changelog entries recorded (client create, task complete, loyalty earn), in the right order. Found + fixed a real bug during testing: `/loyalty` returned a bare array instead of `{data, total}` like every other endpoint. Frontend typecheck + build clean, CORS+fetch verified, **not visually confirmed in an actual browser**. Runs locally — `:3302` (API) / `:5176` (UI) — not deployed anywhere. |
| 06 | Garage CRM | 1 | Built | Partial | No | `F:\projects\Sasses\garage-crm`. Backend fully tested step-by-step: client → job created with an inline 4-step checklist → checklist task marked done → partner created → invoice off the job (250 + 47.5 tax = 297.5 total, confirmed) → marked paid. No route collision between `/jobs/:id` and `/jobs/tasks/:taskId` despite both being 2-segment-adjacent patterns. Frontend typecheck + build clean, CORS+fetch verified, **not visually confirmed in an actual browser**. Runs locally — `:3303` (API) / `:5177` (UI) — not deployed anywhere. |
| 08 | Project CRM | 1 | Built | Partial | No | `F:\projects\Sasses\project-crm`. Backend fully tested step-by-step: client → proposal → contract → phase with an inline 3-item milestone checklist → milestone marked done → change-request ticket filed, responded to, and closed (`closedAt` auto-set correctly). Found + fixed the same class of bug again: `/phases` returned a bare array instead of `{data, total}`. Frontend typecheck + build clean, CORS+fetch verified, **not visually confirmed in an actual browser**. Runs locally — `:3304` (API) / `:5178` (UI) — not deployed anywhere. |
| 01 | Matter CRM | 2 | Not started | — | — | |
| 02 | Table CRM | 2 | Not started | — | — | |
| 04 | Membership CRM | 2 | Not started | — | — | |
| 07 | Patient CRM | 2 | Not started | — | — | |
| 09 | Engagement CRM | 1 | Not started | — | — | |
| 10 | Intake CRM | 2 | Not started | — | — | |
| 11 | Audit-as-a-Magnet | 3 | Not started | — | — | |
| 12 | Worth-Contacting CRM | 3 | Not started | — | — | |
| 13 | WhatsApp-Only CRM | 3 | Not started | — | — | |
| 14 | Warmup-as-a-Service | 3 | Not started | — | — | |
| 15 | Reviews CRM | 2 | Not started | — | — | |
| 16 | DM-First CRM | 3 | Not started | — | — | |
| 17 | Site-Health CRM | 2 | Not started | — | — | |
| 18 | Franchise Ops CRM | 1 | Not started | — | — | |
| 20 | Helpdesk-Lite | 2 | Not started | — | — | |
| 21 | Rollout Planner CRM | 3 | Not started | — | — | |
| 22 | Marketplace Intake CRM | 1 | Not started | — | — | |
| 23 | Never-Forget CRM | 2 | Not started | — | — | |
| 24 | Renewal Watch CRM | 1 | Not started | — | — | |
| 25 | Portal Chat | 1 | Not started | — | — | |

**Totals: 5 / 25 built &middot; 0 / 25 tested end-to-end (incl. browser) &middot; 0 / 25 deployed.**

## Status definitions

- **Built** — backend (and, where applicable, frontend) code exists and compiles/runs.
- **Tested** — verified with real requests/data, not just "it compiled." *Partial* means backend verified but frontend only build/typecheck-verified, not eyeballed in a browser.
- **Deployed** — pushed to a real reachable host (not just running on localhost).
