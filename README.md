# ToolWizHub

Landing page / hub for [toolwizhub.com](https://toolwizhub.com) — a collection of free,
no-signup web tools. The homepage links out to each tool's subdomain.

Static site (no build step): dark glassmorphism theme, animated gradient-mesh background,
branded splash screen, a bento grid of tool cards, and a "why" section. Fully responsive.

Featured tools (each its own subdomain):

- **Tickbox** → `tickbox.toolwizhub.com`
- **Tax Calculator** → `tax.toolwizhub.com`
- **DNS & Cert Health** → `dns-health.toolwizhub.com`

## Files

| File          | Purpose                                             |
| ------------- | --------------------------------------------------- |
| `index.html`  | Markup — nav, hero, tools grid, why, footer, splash |
| `styles.css`  | Dark glass theme, gradient mesh, splash, responsive |
| `main.js`     | Splash (once-per-session) + mobile nav toggle       |
| `assets/`     | ToolWizHub brand (WebP)                             |
| `robots.txt`  | Crawler rules                                       |
| `sitemap.xml` | Sitemap                                             |

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# visit http://localhost:8080
```

## Deploy to Cloudflare Pages

**Option A — Dashboard (drag & drop)**

1. Go to Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Drag this folder in and deploy.

**Option B — Wrangler CLI**

```bash
npm install -g wrangler
wrangler pages deploy . --project-name=toolwizhub
```

**Option C — Git integration**

Connect the repo in Cloudflare Pages. Since there's no build step:

- **Build command:** _(leave empty)_
- **Build output directory:** `/` (root)

Then point your `toolwizhub.com` custom domain at the Pages project.

## TODO

- Add new tool cards to the grid in `index.html` as tools ship.
- Confirm the Tax Calculator subdomain and update its links in `index.html` + footer.
