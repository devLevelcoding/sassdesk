# Mini-CRM Catalog — Reuse Type Breakdown

Three types of reuse across the 25 mini-CRM ideas in the [catalog](project.html):

1. **Pure SassFactory reuse** — the whole product is a `crm3-micro` fork (forked `crm-svc` + a trimmed Prisma schema). No leadMarketing needed.
2. **Hybrid** — data model from `crm3-micro`, outreach/drip engine (email, WhatsApp, warmup) bolted on from leadMarketing.
3. **Pure leadMarketing / scraper** — productizes leadMarketing's own machinery as the CRM itself. No `crm3-micro` reuse.

| # | CRM | Vertical / Category | Type |
|---|---|---|---|
| 01 | Matter CRM | Law firms | 2 — Hybrid |
| 02 | Table CRM | Restaurants | 2 — Hybrid |
| 03 | Listing CRM | Real estate agents | 1 — Pure SassFactory |
| 04 | Membership CRM | Fitness studios | 2 — Hybrid |
| 05 | Booking CRM | Beauty & spas | 1 — Pure SassFactory |
| 06 | Garage CRM | Auto workshops | 1 — Pure SassFactory |
| 07 | Patient CRM | Veterinary clinics | 2 — Hybrid |
| 08 | Project CRM | Architects | 1 — Pure SassFactory |
| 09 | Engagement CRM | Consultants & accountants | 1 — Pure SassFactory |
| 10 | Intake CRM | Health clinics | 2 — Hybrid |
| 11 | Audit-as-a-Magnet | White-label tool | 3 — Pure leadMarketing |
| 12 | Worth-Contacting CRM | Prospecting tool | 3 — Pure leadMarketing |
| 13 | WhatsApp-Only CRM | Channel-first tool | 3 — Pure leadMarketing |
| 14 | Warmup-as-a-Service | Outbound tool | 3 — Pure leadMarketing |
| 15 | Reviews CRM | Add-on tool | 2 — Hybrid (leadMarketing-primary) |
| 16 | DM-First CRM | Channel-first tool | 3 — Pure leadMarketing |
| 17 | Site-Health CRM | Recurring monitor | 2 — Hybrid (leadMarketing-primary) |
| 18 | Franchise Ops CRM | Multi-location | 1 — Pure SassFactory |
| 19 | Solo CRM | Base product | 1 — Pure SassFactory |
| 20 | Helpdesk-Lite | Support layer | 2 — Hybrid |
| 21 | Rollout Planner CRM | Expansion tool | 3 — Pure leadMarketing |
| 22 | Marketplace Intake CRM | Two-sided deals | 1 — Pure SassFactory |
| 23 | Never-Forget CRM | Reminder engine | 2 — Hybrid |
| 24 | Renewal Watch CRM | Compliance tool | 1 — Pure SassFactory |
| 25 | Portal Chat | Embeddable widget | 1 — Pure SassFactory |

**Split: 10 Type 1 / 9 Type 2 / 6 Type 3.**
