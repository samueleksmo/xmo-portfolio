# xmo-portfolio

Personal portfolio site for Samuel Eksmo — [xmo.se](https://xmo.se). A single-page Svelte 5 app, built with Vite, available in English and Swedish.

## Development

Requires Node.js 20.19+ (Vercel builds with Node 24).

```bash
npm install
npm run dev       # dev server with hot reload on http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the built dist/ locally
```

## Project layout

- `index.html` – page shell and meta tags
- `src/App.svelte` – page sections: Home, About, ClientWork (portfolio cards), Footer
- `src/services/i18n.js` – all English and Swedish text (`svelte-i18n`)
- `src/global.css` – fonts and base styles
- `public/` – static images and fonts, copied as-is into the build

## Deployment

Hosted on [Vercel](https://vercel.com). Every push to `master` deploys to production; other branches and pull requests get preview deployments.

Build settings live in `vercel.json` (Vite, `npm run build`, output `dist/`), and the Node.js version is pinned to 24.x via `engines` in `package.json`.
