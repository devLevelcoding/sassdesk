import type { CatalogGroup } from './types'

export const catalogGroups: CatalogGroup[] = [
  {
    "tag": "A",
    "title": "Vertical reskins",
    "desc": "One niche, crm3-micro's existing entities renamed to fit it, seeded from a scraper list that already covers this exact vertical.",
    "cards": [
      {
        "num": "01",
        "name": "Matter CRM",
        "vertical": "Law firms",
        "pitch": "Client intake → matter tracking → retainer billing, with none of the case-management bloat a real legal-tech tool carries.",
        "reuses": [
          "Lead",
          "Proposal",
          "TaskGroup",
          "Contract",
          "Invoice"
        ],
        "gtm": "Scrape law firms → Lighthouse-audit their site → warmup email pitching a zero-setup intake CRM their receptionist can run.",
        "specHref": "/crm/matter-crm.html",
        "liveHref": "https://matter-crm-ui.onrender.com"
      },
      {
        "num": "02",
        "name": "Table CRM",
        "vertical": "Restaurants",
        "pitch": "Reservation pipeline plus a post-visit loyalty and review-request drip that runs itself.",
        "reuses": [
          "Client",
          "LoyaltyTransaction",
          "WarmupPlan",
          "EmailTemplate"
        ],
        "gtm": "Restaurant scrape list + Instagram outreach — leadMarketing already scans Instagram, and this niche lives there.",
        "specHref": "/crm/table-crm.html",
        "liveHref": "https://tablecrm-ui.vercel.app"
      },
      {
        "num": "03",
        "name": "Listing CRM",
        "vertical": "Real estate agents",
        "pitch": "The smallest lift on this whole list — ProposalSpace / ProposalRent / ProposalCompetitor already model a listing pipeline almost verbatim.",
        "reuses": [
          "Client",
          "Proposal",
          "ProposalSpace",
          "ProposalRent",
          "Contract"
        ],
        "gtm": "Agent sites score badly on Lighthouse almost universally — the audit is a near-guaranteed icebreaker here.",
        "specHref": "/crm/listing-crm.html",
        "liveHref": "https://listingcrm-ui.vercel.app"
      },
      {
        "num": "04",
        "name": "Membership CRM",
        "vertical": "Fitness studios",
        "pitch": "Trial-to-member pipeline, class scheduling, and an attendance-streak loyalty mechanic.",
        "reuses": [
          "Lead",
          "AgencyTask",
          "LoyaltyTransaction",
          "WhatsAppPlan"
        ],
        "gtm": "WhatsApp warmup for trial conversion — the channel gyms already run on.",
        "specHref": "/crm/membership-crm.html",
        "liveHref": "https://membershipcrm-ui.vercel.app"
      },
      {
        "num": "05",
        "name": "Booking CRM",
        "vertical": "Beauty & spas",
        "pitch": "Appointment-as-task, punch-card loyalty, and Instagram DMs landing straight in the pipeline.",
        "reuses": [
          "Client",
          "Task",
          "LoyaltyTransaction",
          "ChangeLog"
        ],
        "gtm": "leadMarketing's Instagram-lead hook feeds this niche directly — same channel, same data shape.",
        "specHref": "/crm/booking-crm.html",
        "liveHref": "https://bookingcrm-ui.vercel.app"
      },
      {
        "num": "06",
        "name": "Garage CRM",
        "vertical": "Auto workshops",
        "pitch": "Per-vehicle repair-job tracking, parts-supplier partner records, WhatsApp status updates to the customer.",
        "reuses": [
          "Client",
          "TaskGroup",
          "Invoice",
          "Partner"
        ],
        "gtm": "Workshop scrape + WhatsApp warmup — repair-status texting is already the norm in this vertical.",
        "specHref": "/crm/garage-crm.html",
        "liveHref": "https://garagecrm-ui.vercel.app"
      },
      {
        "num": "07",
        "name": "Patient CRM",
        "vertical": "Veterinary clinics",
        "pitch": "Pet-owner profiles with recurring vaccination and checkup reminders baked in from day one.",
        "reuses": [
          "Client",
          "AgencyTask",
          "Invoice",
          "EmailTemplate"
        ],
        "gtm": "Vet scrape list, pitched on one line: your no-show rate drops when reminders are automatic.",
        "specHref": "/crm/patient-crm.html",
        "liveHref": "https://patientcrm-ui.vercel.app"
      },
      {
        "num": "08",
        "name": "Project CRM",
        "vertical": "Architects",
        "pitch": "Bid pipeline, phased project milestones, staged billing, and change-request tracking.",
        "reuses": [
          "Proposal",
          "TaskGroup",
          "Contract",
          "HelpdeskTicket"
        ],
        "gtm": "Architect scrape + Lighthouse audit — portfolio sites run heavy, an easy technical hook.",
        "specHref": "/crm/project-crm.html",
        "liveHref": "https://projectcrm-ui.vercel.app"
      },
      {
        "num": "09",
        "name": "Engagement CRM",
        "vertical": "Consultants & accountants",
        "pitch": "Retainer clients, recurring invoicing, deliverable tracking, a client-support inbox.",
        "reuses": [
          "Client",
          "Contract",
          "Invoice",
          "Conversation"
        ],
        "gtm": "Professional-services scrape list, plain email warmup — this audience actually reads email.",
        "specHref": "/crm/engagement-crm.html",
        "liveHref": "https://engagementcrm-ui.vercel.app"
      },
      {
        "num": "10",
        "name": "Intake CRM",
        "vertical": "Health clinics",
        "pitch": "Same shape as Patient CRM with a human patient in place of a pet.",
        "reuses": [
          "Client",
          "Task",
          "HelpdeskTicket",
          "WhatsAppPlan"
        ],
        "gtm": "Health-vertical scrape + WhatsApp reminders aimed at private-pay no-shows.",
        "specHref": "/crm/intake-crm.html",
        "liveHref": "https://intakecrm-ui.vercel.app"
      }
    ]
  },
  {
    "tag": "B",
    "title": "The engine, productized",
    "desc": "leadMarketing's own machinery — scoring, audits, drips — sold as the CRM, not just used to sell one.",
    "cards": [
      {
        "num": "11",
        "name": "Audit-as-a-Magnet",
        "vertical": "White-label tool",
        "pitch": "Point it at any list, get branded PDF site audits on autopilot — a standalone tool other agencies resell.",
        "reuses": [
          "LighthouseScan",
          "AuditRequest",
          "LeadReport"
        ],
        "gtm": "Sell it to the freelance web devs who'd otherwise be your competitors on the vertical products above.",
        "specHref": "/crm/audit-magnet.html",
        "liveHref": "https://audit-magnet-crm-ui.onrender.com"
      },
      {
        "num": "12",
        "name": "Worth-Contacting CRM",
        "vertical": "Prospecting tool",
        "pitch": "<code>filter_leads.py</code>'s scoring — no site +10, low rating with a site +5, reviews with no site +5 — as a live-ranked view, not a one-off CSV.",
        "reuses": [
          "scraper scoring",
          "Lead.status"
        ],
        "gtm": "Sold to local agencies and freelancers as their own always-fresh prospecting pipeline.",
        "specHref": "/crm/worth-contacting-crm.html",
        "liveHref": "https://worth-contacting-crm-ui.onrender.com"
      },
      {
        "num": "13",
        "name": "WhatsApp-Only CRM",
        "vertical": "Channel-first tool",
        "pitch": "No email UI at all — every Lead and Client thread is a WhatsApp conversation, full stop.",
        "reuses": [
          "WhatsAppPlan",
          "WhatsAppBatch",
          "WhatsAppBatchLead"
        ],
        "gtm": "Sells itself to workshops, salons, restaurants — the businesses that never check email.",
        "specHref": "/crm/whatsapp-only-crm.html",
        "liveHref": "https://whatsapp-only-crm-ui.onrender.com"
      },
      {
        "num": "14",
        "name": "Warmup-as-a-Service",
        "vertical": "Outbound tool",
        "pitch": "White-label the drip engine and country/phase dashboard, decoupled from scraping — bring your own list.",
        "reuses": [
          "WarmupPlan",
          "WarmupBatch",
          "EmailLog"
        ],
        "gtm": "Monthly fee to small agencies who don't want to build outbound tooling themselves.",
        "specHref": "/crm/warmup-service.html",
        "liveHref": "https://warmup-as-a-service-ui.onrender.com"
      },
      {
        "num": "15",
        "name": "Reviews CRM",
        "vertical": "Add-on tool",
        "pitch": "One job only: a post-visit review-request drip, sold purely on \"get more Google reviews.\"",
        "reuses": [
          "rating / reviewCount",
          "ClientEvent",
          "WarmupPlan"
        ],
        "gtm": "Works across every vertical above as a small add-on, not a separate sales motion.",
        "specHref": "/crm/reviews-crm.html",
        "liveHref": "https://reviews-crm-ui.onrender.com"
      },
      {
        "num": "16",
        "name": "DM-First CRM",
        "vertical": "Channel-first tool",
        "pitch": "An Instagram-native pipeline for businesses whose inbound is DMs, not forms.",
        "reuses": [
          "Lead.instagramUrl",
          "instagramStatus"
        ],
        "gtm": "Same list as Table CRM and Booking CRM — beauty, fitness, restaurants.",
        "specHref": "/crm/dm-first-crm.html",
        "liveHref": "https://dm-first-crm-ui.onrender.com"
      },
      {
        "num": "17",
        "name": "Site-Health CRM",
        "vertical": "Recurring monitor",
        "pitch": "The Lighthouse score becomes a tracked metric re-scanned monthly, with a built-in upsell path to a redesign.",
        "reuses": [
          "LighthouseScan (recurring)",
          "Client"
        ],
        "gtm": "Every audit sent in the vertical GTMs above converts into a recurring subscription, not a one-time pitch.",
        "specHref": "/crm/site-health-crm.html",
        "liveHref": "https://site-health-crm-ui.onrender.com"
      }
    ]
  },
  {
    "tag": "C",
    "title": "Structural reuse",
    "desc": "Patterns already baked into crm3-micro's platform layer, generalized past the vertical they were built for.",
    "cards": [
      {
        "num": "18",
        "name": "Franchise Ops CRM",
        "vertical": "Multi-location",
        "pitch": "Shop / Inspection / Closing / Opening / FranchiseTicket, pulled out of the full platform for chains too small (2–10 locations) to need it.",
        "reuses": [
          "Shop",
          "Inspection",
          "Closing/Opening",
          "FranchiseTicket"
        ],
        "gtm": "Sell to any vertical above the moment one customer opens a second location.",
        "specHref": "/crm/franchise-ops-crm.html",
        "liveHref": "https://franchise-ops-crm-ui.onrender.com"
      },
      {
        "num": "19",
        "name": "Solo CRM",
        "vertical": "Base product",
        "pitch": "The floor: Client, Proposal, Contract, Invoice, Task — nothing else. No multi-tenant, no HR.",
        "reuses": [
          "Client",
          "Proposal",
          "Contract",
          "Invoice",
          "Task"
        ],
        "gtm": "The generic base every vertical product above is a reskin of — sell it horizontally before verticalizing.",
        "specHref": "/crm/solo-crm.html",
        "liveHref": "https://solocrm-ui.vercel.app"
      },
      {
        "num": "20",
        "name": "Helpdesk-Lite",
        "vertical": "Support layer",
        "pitch": "HelpdeskTicket repurposed as a plain \"did my thing get done\" inbox, WhatsApp-linked.",
        "reuses": [
          "HelpdeskTicket",
          "WhatsAppBatch"
        ],
        "gtm": "Bundled into Garage CRM and Patient CRM as the support layer, not sold on its own.",
        "specHref": "/crm/helpdesk-lite.html",
        "liveHref": "https://helpdesk-lite-ui.onrender.com"
      },
      {
        "num": "21",
        "name": "Rollout Planner CRM",
        "vertical": "Expansion tool",
        "pitch": "leadMarketing's phase/country fields turned into a city-by-city expansion planner next to the live pipeline.",
        "reuses": [
          "Lead.phase",
          "Lead.country"
        ],
        "gtm": "Sold to expanding chains — gyms, salons — sequencing which city to prospect next.",
        "specHref": "/crm/rollout-planner-crm.html",
        "liveHref": "https://rollout-planner-crm-ui.onrender.com"
      },
      {
        "num": "22",
        "name": "Marketplace Intake CRM",
        "vertical": "Two-sided deals",
        "pitch": "ProposalOwner / ProposalSpace already model a two-sided deal — generalized past real estate to event-space or equipment rental.",
        "reuses": [
          "ProposalOwner",
          "ProposalSpace"
        ],
        "gtm": "Same scrape-and-audit playbook, aimed at rental-marketplace operators instead of agents.",
        "specHref": "/crm/marketplace-intake-crm.html",
        "liveHref": "https://marketplace-intake-crm-ui.vercel.app"
      },
      {
        "num": "23",
        "name": "Never-Forget CRM",
        "vertical": "Reminder engine",
        "pitch": "AgencyTask's recurring-assignment pattern generalized into one engine for birthdays, MOTs, renewals, checkups.",
        "reuses": [
          "AgencyTask",
          "WarmupPlan"
        ],
        "gtm": "The one feature every vertical product above actually needs — ships as their shared reminder core.",
        "specHref": "/crm/never-forget-crm.html",
        "liveHref": "https://never-forget-crm-ui.vercel.app"
      },
      {
        "num": "24",
        "name": "Renewal Watch CRM",
        "vertical": "Compliance tool",
        "pitch": "Regulatory and license deadline tracking for regulated SMBs, with an audit trail of what renewed on time.",
        "reuses": [
          "Task",
          "ChangeLog"
        ],
        "gtm": "Law firms and health/vet clinics first — the two verticals where a missed renewal is expensive.",
        "specHref": "/crm/renewal-watch-crm.html",
        "liveHref": "https://renewal-watch-crm-ui.vercel.app"
      },
      {
        "num": "25",
        "name": "Portal Chat",
        "vertical": "Embeddable widget",
        "pitch": "Conversation/ChatMessage, already Socket.io-backed, extracted as a client-chat widget any product above can bolt on.",
        "reuses": [
          "Conversation",
          "ChatMessage"
        ],
        "gtm": "Not sold alone — the detail that makes any of the above feel less like a spreadsheet with a login.",
        "specHref": "/crm/portal-chat.html",
        "liveHref": "https://portal-chat-ui.vercel.app"
      }
    ]
  }
]
