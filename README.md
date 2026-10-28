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
- `src/components/contact/Contact.svelte` – contact form
- `api/contact.js` – Vercel Function that emails form messages via [Resend](https://resend.com)
- `src/global.css` – fonts and base styles
- `public/` – static images and fonts, copied as-is into the build

## Deployment

Hosted on [Vercel](https://vercel.com). Every push to `master` deploys to production; other branches and pull requests get preview deployments.

Build settings live in `vercel.json` (Vite, `npm run build`, output `dist/`), and the Node.js version is pinned to 24.x via `engines` in `package.json`.

## Contact form

The form posts to `/api/contact`, which emails the message to you through Resend, with the visitor's address as reply-to. It has simple spam traps: a hidden honeypot field and a minimum fill time. Set these in Vercel → Project → Settings → Environment Variables, then redeploy:

| Variable             | Required | Purpose                                                                    |
| -------------------- | -------- | -------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | yes      | API key from Resend                                                        |
| `CONTACT_TO_EMAIL`   | yes      | Inbox that receives the messages                                           |
| `CONTACT_FROM_EMAIL` | no       | Sender on a Resend-verified domain, e.g. `xmo.se <kontakt@xmo.se>`         |

Without `CONTACT_FROM_EMAIL`, Resend's test sender (`onboarding@resend.dev`) is used, which can only deliver to the email address your Resend account is registered with.

`npm run dev` doesn't run the function. To try the form locally, use `npx vercel dev` with the variables in a local `.env`.
