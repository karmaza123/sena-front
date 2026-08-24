# SENA — Promo Landing

Front-end for the SENA neighborhood/building-community promo landing page — the dark
charcoal design, built as a Next.js App Router app.

**Source design:** Figma file `oorfgjWjTHvVgLE1XiCDXq` — *SENA Neighborhood — Promo Landing*,
frame `707:1140` ("SENA — Landing / Dark (Charcoal)", 1440×6462).

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Plain CSS — no utility framework. Every Figma variable lives as a CSS custom
  property in `app/globals.css`.
- Noto Sans Georgian via `next/font/google`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Layout

```
app/
  page.tsx      all 13 sections; content arrays at the top of the file
  globals.css   design tokens + section styles
  layout.tsx    font, metadata, lang="ka"
public/img/     assets exported from Figma (logo lockups, backgrounds,
                partner chips, app screens, project cards)
```

## Design tokens

Mirrored 1:1 from the Figma variable set:

| Token | Value |
| --- | --- |
| `--bg-page` | `#14151a` |
| `--bg-band` | `#101116` |
| `--bg-band-deep` | `#0c0d11` |
| `--surface-card` | `#1c1e24` |
| `--surface-raised` | `#2a2d35` |
| `--text-ink` | `#f5f3ef` |
| `--text-body` | `#cfcac1` |
| `--text-muted` | `#9a968e` |
| `--accent` | `#d5c7a2` |
| `--gold-200` | `#f8ecc4` |
| `--border-soft` | `rgba(255,255,255,.08)` |
| `--border-hairline` | `rgba(213,199,162,.22)` |

## Open items

Both are gaps in the source Figma frame, carried into the build as-is:

- **Services grid** repeats cards 01–04 across both rows with identical copy; only the
  second row's third card differs (navy background + chat screenshot).
- **FAQ** — only question 1 has answer copy in the design. The remaining eight use a
  placeholder (`FAQ_PLACEHOLDER` in `app/page.tsx`) so the accordion stays usable.

The lead form's `onSubmit` is a no-op and still needs an endpoint.
