export interface CatalogCard {
  num: string
  name: string
  vertical: string
  pitch: string
  reuses: string[]
  gtm: string
  specHref: string
  liveHref: string
}

export interface CatalogGroup {
  tag: string
  title: string
  desc: string
  cards: CatalogCard[]
}

export interface BomColumn {
  title: string
  source: string
  items: string[]
}
