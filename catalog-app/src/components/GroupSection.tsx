import type { CatalogGroup } from '../data/types'
import { Card } from './Card'

export function GroupSection({ group }: { group: CatalogGroup }) {
  return (
    <section className="group">
      <div className="group-head">
        <span className="group-tag">{group.tag}</span>
        <h2>{group.title}</h2>
        <p>{group.desc}</p>
      </div>
      <div className="grid">
        {group.cards.map((card) => (
          <Card key={card.num} card={card} />
        ))}
      </div>
    </section>
  )
}
