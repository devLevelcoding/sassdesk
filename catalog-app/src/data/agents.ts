// The AI agents that fit this catalog: six reusable agents cover all 25 CRMs, because most of
// them share a few patterns (inbound conversations, intake, reminders, outreach, "ask my data").
// Each one is built on an agent that already exists and runs, cited in `builtOn`.

export interface Agent {
  code: string
  name: string
  does: string
  serves: string[] | 'all' // catalog card numbers
  builtOn: string
  guardrail?: string
  first?: boolean // the ones to build first
}

export const agents: Agent[] = [
  {
    code: 'A1',
    name: 'Inbound reply & booking agent',
    does: 'Answers customers on WhatsApp, Instagram DM or the chat widget, checks free slots, books the appointment or table, and logs the lead in the pipeline. Hands over to a person when unsure.',
    serves: ['02', '04', '05', '13', '16', '25'],
    builtOn: 'book-concierge: chat widget + tool loop, live on shop.sassdesk.com',
    first: true,
  },
  {
    code: 'A2',
    name: '"Ask your CRM" copilot',
    does: '"Who owes me money?", "Which projects are over budget?", "Members who stopped coming": answers from the tenant\'s own data, plus a weekly digest. Read-only.',
    serves: 'all',
    builtOn: 'crm-copilot: safe ask-data on crm3-micro (tenant-scoped, per permission), which every CRM here forks',
    first: true,
  },
  {
    code: 'A3',
    name: 'Outreach writer',
    does: "Reads each prospect's site audit and Lighthouse score and drafts a personal first message. A person approves before anything is sent.",
    serves: ['11', '12', '14', '17', '21'],
    builtOn: "lead-intelligence-agent: sales copilot with a RAG playbook, plus leadMarketing's drip engine",
    guardrail: 'Drafts only: nothing goes out without approval.',
  },
  {
    code: 'A4',
    name: 'Intake & triage agent',
    does: 'Turns a new inquiry into a structured case (type, urgency, missing documents) and suggests a reply from past tickets.',
    serves: ['01', '07', '10', '20'],
    builtOn: "fraud-copilot's pattern: a strict draft schema, checked in code, a person decides",
    guardrail: 'Clinics: administrative only (forms, bookings), never medical advice.',
  },
  {
    code: 'A5',
    name: 'Reminder agent',
    does: 'Writes personal reminders (vaccinations, MOTs, license renewals, birthdays) and handles replies like "can we move it to Friday?".',
    serves: ['06', '07', '23', '24'],
    builtOn: "leadMarketing's drip engine + A1's booking tools",
  },
  {
    code: 'A6',
    name: 'Matchmaker',
    does: 'Matches incoming requests to listings or spaces ("3 rooms near the park under €1,500") and drafts listing descriptions.',
    serves: ['03', '22'],
    builtOn: "book-concierge's semantic search: local embeddings, no API quota",
  },
]

/** The agents specific to one CRM (A2 serves every CRM, so cards add it themselves). */
export const agentsFor = (num: string) => agents.filter((a) => a.serves !== 'all' && a.serves.includes(num))
