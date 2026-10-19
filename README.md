# xmo-portfolio

Personal portfolio site for Samuel Eksmo — [xmo.se](https://xmo.se). A single-page Svelte 5 app, built with Vite, available in English and Swedish.

## Development

Requires Node.js 20.19+ (CI and Docker use Node 24).

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

`Dockerfile` builds the site and serves `dist/` with nginx on port 80:

```bash
docker build -t xmorepo .
docker run -p 8080:80 xmorepo
```

GitHub Actions (`.github/workflows/docker.yml`) builds every push and pull request. Pushes to `master` also publish `<DOCKER_USERNAME>/xmorepo:latest` and `:<commit sha>` to Docker Hub, using the `DOCKER_USERNAME` and `DOCKER_PASSWORD` repository secrets.
