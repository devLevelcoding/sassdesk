export function Header() {
  return (
    <header>
      <p className="eyebrow">Parts Catalog — Rev. 2026-08-19</p>
      <h1>25 ways to assemble a mini-CRM out of parts you already own</h1>
      <p className="dek">
        Every entry below is a scoped-down product built from two codebases already on disk:{' '}
        <code>crm3-micro</code>'s multi-tenant data model and <code>leadMarketing</code>'s outreach engine, seeded by{' '}
        <code>scraper</code>'s business-listing lists across ~20 EU countries. Nothing here needs a new backend to
        start.
      </p>
    </header>
  )
}
