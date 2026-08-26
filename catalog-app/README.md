# Catalog app

React (Vite) rewrite of `/project.html` — the 25-CRM catalog page on sassdesk.com. Previously a single
~550-line hand-maintained HTML file; the 25 near-identical card blocks are now data
(`src/data/catalog.ts`) rendered through one `Card` component instead of copy-pasted markup.

## Build

```
npm install
npm run build
```

Outputs to `../project-app/` (outside this folder, at the sassdesk repo root) — `index.html` +
`assets/*.js` + `assets/*.css`. `project-app/` is gitignored; it's a build artifact, not source.

## Deploy

sassdesk.com is plain FTP-hosted (cPanel, `web1.trustnetsolutions.ro`), no CI/build pipeline — deploy
is manual:

1. `npm run build`
2. Upload `project-app/assets/*` to `sassdesk.com/assets/` (same folder every time — filenames are
   content-hashed by Vite, so stale chunks from a previous build just sit unused; not cleaned up
   automatically).
3. Upload `project-app/index.html` to `sassdesk.com/project.html` (note the rename).

FTP credentials: `F:\go\V4\GoAdmin\gofile\config.yaml`, project `sassdesk`.

## Updating catalog data

Edit `src/data/catalog.ts` (25 cards, `CatalogGroup[]`) or `src/data/bom.ts` (the two "bill of
materials" columns) directly — no HTML to hand-edit anymore. Each card's `liveHref` should point at
that CRM's actual deployed UI URL; see `../StatusCrm.md`'s "Live URLs" table for the current list.
