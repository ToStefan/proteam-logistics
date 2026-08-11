# ProTeam Logistics, LLC — Website

Static one-page website for ProTeam Logistics, LLC (Burr Ridge, IL).
MC 1695492 · USDOT 4339787 · (630) 242-2001

**Live:** https://tostefan.github.io/proteam-logistics/

## Stack

Plain HTML + CSS + vanilla JS. No build step, no dependencies.

- `index.html` — all sections (hero, about, services, why us, industries, driver application form, contact)
- `styles.css` — styling (brand: navy `#101d3f` / steel `#8fa3bf` from the PTL logo, red accent)
- `script.js` — mobile nav, scroll-reveal animations, application form handler
- `favicon.svg`

## Deploy

Hosted on GitHub Pages from the `main` branch (root). Every push to `main`
auto-deploys in ~1 minute:

```bash
git push origin main
```

## Custom domain (when purchased)

1. Repo → Settings → Pages → Custom domain → enter `www.example.com`
2. At the DNS provider add: `CNAME www → tostefan.github.io`
   and apex `A` records to GitHub Pages IPs (185.199.108-111.153)
3. Enable "Enforce HTTPS" once the certificate is issued

## TODO

- [ ] Replace `RECRUITING_EMAIL` placeholder in `script.js` (currently
      `info@proteamlogistics.com`) with the real company inbox, or swap the
      mailto handler for a form service (Formspree / FormSubmit).
- [ ] Replace the text-based logo with the real logo file if a vector/PNG
      version becomes available.
- [ ] Review the stats in the About section (48 states / 24-7 / 100% GPS) —
      adjust to real company numbers if desired.
