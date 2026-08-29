import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { BillOfMaterials } from './components/BillOfMaterials'
import { GroupSection } from './components/GroupSection'
import { catalogGroups } from './data/catalog'

export default function App() {
  return (
    <>
      <TopBar />
      <div className="wrap">
        <Header />
        <BillOfMaterials />
        {catalogGroups.map((group) => (
          <GroupSection key={group.tag} group={group} />
        ))}
      </div>
    </>
  )
}
