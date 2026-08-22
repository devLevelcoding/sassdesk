# Hybrid (Type 2) build pattern

How a Hybrid CRM in the [mini-CRM catalog](project.html) integrates `F:\leadMarketing`'s outreach
engine on top of a `crm3-micro`-derived core. Established while building Table CRM (`#02`), the
first Hybrid built — read that one's own README for the full worked example; this is the
extracted, reusable part for the next 8 Type-2 CRMs.

## The core finding: don't port WarmupPlan/WarmupBatch as-is

leadMarketing's `WarmupPlan` → `WarmupBatch` → `WarmupBatchLead` is a **cold-outreach scheduler**:
one plan has an absolute `startDate`/`totalDays`, batches are numbered by `dayNumber` off that one
shared clock, and each batch has a `quota` throttling how many of a large scraped-lead list get
emailed that day. It's built to drip a big list out slowly so a sending domain doesn't get flagged
as spam — a **campaign-wide** clock, one plan shared across many leads.

Almost every Hybrid CRM in this catalog instead needs a **lifecycle drip**: an email (or WhatsApp
message) N days after *this specific customer's own event* — a visit, an appointment, a
subscription date. That's a fundamentally different trigger shape: every customer has their own
clock, not a shared campaign clock. Porting `WarmupPlan` for this would mean either running a new
"plan" per customer (defeats the point of the plan/batch split) or bolting a per-lead offset onto a
model built for a shared one.

## The reusable shape

Keep these two as-is — they generalize cleanly to any use case:

- **`EmailTemplate`** (`leadMarketing/prisma/schema.prisma:57`) — name, language, subject, body.
  Drop `domain` (which scraped-lead vertical it targets) if the product only serves one business.
- **`EmailLog`** (`schema.prisma:72`) — the send-audit record. Read-only from the app's side;
  only ever written by whatever processes the drip.

Replace `WarmupPlan`/`WarmupBatch`/`WarmupBatchLead`'s **absolute-campaign-day** scheduling with a
**relative-offset trigger row** — one row per (triggering event, drip rule), with its own
`scheduledFor` computed from *that event's own timestamp* plus an offset:

```prisma
model ReviewRequest {           // ← name this after whatever it actually is
  id            Int       @id @default(autoincrement())
  triggerId     Int        // FK to whatever event schedules it (a visit, an appointment...)
  clientId      Int
  templateId    Int?
  scheduledFor  DateTime   // = trigger.eventDate + N days, computed at creation
  status        String    @default("pending")
  sentAt        DateTime?
}
```

Created inside the same action that closes out the trigger event (e.g. `POST
/reservations/:id/complete` in Table CRM) — one click, several consequences, same shape as this
catalog's existing pattern of loyalty-points-auto-awarded-on-task-complete, just extended one hop
further into the leadMarketing side.

## "Runs itself" is honestly a manual trigger, same as everywhere else in this catalog

Checked leadMarketing for real cron infrastructure (`node-cron`, `setInterval`, `@Cron()`) —
there isn't any. `WarmupPlan`'s day-by-day schedule gets walked by a human running a script. None
of the "automatic" actions built so far in this catalog actually run unattended either (Engagement
CRM's invoice generation, Renewal Watch's license renewal — all manual button clicks under the
hood that happen to look automatic from the result). Follow that same honesty: expose a
`POST /<resource>/process-due` endpoint that fires whatever's past its `scheduledFor` and hasn't
been sent — it doesn't schedule itself, but it's the one place sends actually happen, not ad-hoc
code scattered elsewhere. Wire an external scheduler to it later if one of these ever goes live;
until then, a button in the UI calling it is the honest MVP version.

## Checklist for the next Type-2 CRM

1. Identify the trigger event (what "closes" and should kick off the drip).
2. Port `EmailTemplate` + `EmailLog` as-is (trim `domain` if single-tenant).
3. Write a `<Something>Request` table shaped like `ReviewRequest` above, `scheduledFor` computed
   off the trigger's own date, not a shared plan.
4. Fire the drip-creation from inside the trigger's own "complete/close" action.
5. Add `POST /<resource>/process-due` as the manual/external-scheduler entry point.
6. If the CRM also needs loyalty points, WhatsApp instead of email, etc. — check whether an
   existing built CRM already has the pattern (Booking CRM's `LoyaltyTransaction`,
   `WhatsAppBatch`/`WhatsAppBatchLead` for the WhatsApp equivalent of this same finding) before
   re-deriving it.
