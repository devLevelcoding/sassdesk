import type { BomColumn } from './types'

export const bomColumns: BomColumn[] = [
  {
    title: 'From crm3-micro',
    source: 'NestJS microservices · Prisma · shared package',
    items: [
      'Lead', 'Client', 'Proposal', 'ProposalSpace', 'ProposalRent',
      'Contract', 'Invoice', 'Task / TaskGroup', 'AgencyTask',
      'HelpdeskTicket', 'Partner', 'Shop', 'Inspection',
      'LoyaltyTransaction', 'Conversation / ChatMessage', 'ChangeLog',
    ],
  },
  {
    title: 'From leadMarketing + scraper',
    source: 'Next.js · Prisma/SQLite · Python scraper',
    items: [
      'Lead (scraped)', 'LighthouseScan', 'AuditRequest', 'LeadReport',
      'EmailTemplate / EmailLog', 'WarmupPlan / Batch', 'WhatsAppPlan / Batch',
      'Instagram scan hooks', 'phase / country fields', 'filter_leads.py scoring',
    ],
  },
]
