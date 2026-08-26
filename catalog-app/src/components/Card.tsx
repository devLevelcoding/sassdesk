import type { CatalogCard } from '../data/types'

export function Card({ card }: { card: CatalogCard }) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="card-num">{card.num}</span>
        <h3 className="card-title">{card.name}</h3>
      </div>
      <p className="card-vertical">{card.vertical}</p>
      <p className="card-pitch">{card.pitch}</p>
      <div className="card-row">
        <span className="label">Reuses</span>
        <div className="chips">
          {card.reuses.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
      </div>
      <div className="card-row">
        <span className="label">GTM</span>
        <span className="gtm-text">{card.gtm}</span>
      </div>
      <div className="card-links">
        <a className="card-spec-link" href={card.specHref}>Spec &rarr;</a>
        <a className="card-live-link" href={card.liveHref} target="_blank" rel="noopener noreferrer">
          Live app &#8599;
        </a>
      </div>
    </div>
  )
}
