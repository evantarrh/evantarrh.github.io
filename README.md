## Stack
Vite + vanilla TypeScript + CSS

## Commands
- `npm run dev` — start dev server
- `npm run build` — typecheck + production build (output: `dist/`)
- `npm run preview` — preview production build locally

## Structure
- `index.html` — entry point (Vite root)
- `src/main.ts` — app entry, renders into `#app`
- `src/style.css` — global styles
- `docs/` — planning docs and content info (not deployed)

## Setup

`npm install`
`npm run dev`

## Deploy me

`npm run build`, then `cp dist/* .`, then commit on gh-pages and push
