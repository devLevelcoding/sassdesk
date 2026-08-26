import { bomColumns } from '../data/bom'

export function BillOfMaterials() {
  return (
    <>
      <div className="bom">
        {bomColumns.map((col) => (
          <div className="bom-col" key={col.title}>
            <h2>{col.title}</h2>
            <p className="src">{col.source}</p>
            <ul className="bom-list">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="bom-note">Every card below cites exactly which of these it reuses — nothing is invented.</p>
    </>
  )
}
