import { agents } from '../data/agents'

export function AgentsSection() {
  return (
    <section className="group" id="agents">
      <div className="group-head">
        <span className="group-tag">AI</span>
        <h2>Six agents cover all 25</h2>
        <p>Most CRMs here share a few patterns, so a handful of reusable agents serves the whole catalog. Each is built on an agent that already runs.</p>
      </div>
      <div className="grid">
        {agents.map((a) => (
          <div className={`card${a.first ? ' agent-first' : ''}`} key={a.code}>
            <div className="card-top">
              <span className="card-num">{a.code}</span>
              <h3 className="card-title">{a.name}</h3>
              {a.first && <span className="agent-badge">build first</span>}
            </div>
            <p className="card-pitch">{a.does}</p>
            <div className="card-row">
              <span className="label">Serves</span>
              <div className="chips">
                {a.serves === 'all' ? <span>all 25</span> : a.serves.map((n) => <a key={n} href={`#crm-${n}`}>{n}</a>)}
              </div>
            </div>
            <div className="card-row">
              <span className="label">Built on</span>
              <span className="gtm-text">{a.builtOn}</span>
            </div>
            {a.guardrail && (
              <div className="card-row">
                <span className="label">Guardrail</span>
                <span className="gtm-text">{a.guardrail}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
