# Typography

## The pairing stays

**Manrope** for display and headings. **Poppins** for body and UI. This pairing is
already on the site and already works — a geometric-humanist display face against
a rounder, quieter body face. This system keeps it and gives it a scale.

```css
--font-display: 'Manrope', ui-sans-serif, system-ui, sans-serif;
--font-body:    'Poppins', ui-sans-serif, system-ui, sans-serif;
```

What was missing: the old site declared nine sizes (64/48/36/28/22/18/16/14/12)
with line-heights scattered between 1.1 and 1.6, **no letter-spacing rules at any
size**, and no limit on body line length.

## The scale

Fluid via `clamp()` — type scales continuously with the viewport instead of
jumping at breakpoints.

| Token | Mobile → Desktop | Line height | Tracking | Face | Use |
| --- | --- | --- | --- | --- | --- |
| `--text-display` | 44 → 80px | 1.02 | −0.035em | Manrope 600 | One per page. Hero only. |
| `--text-h1` | 36 → 60px | 1.12 | −0.02em | Manrope 600 | Page title |
| `--text-h2` | 30 → 46px | 1.12 | −0.02em | Manrope 600 | Section heading |
| `--text-h3` | 24 → 34px | 1.25 | −0.01em | Manrope 600 | Sub-section |
| `--text-h4` | 20 → 26px | 1.25 | −0.01em | Manrope 500 | Card title |
| `--text-h5` | 18 → 21px | 1.25 | 0 | Manrope 500 | Small heading |
| `--text-lg` | 18px | 1.65 | 0 | Poppins 400 | Lead paragraph |
| `--text-base` | 16px | 1.5 | 0 | Poppins 400 | Body |
| `--text-sm` | 14px | 1.5 | 0 | Poppins 400 | Secondary, captions |
| `--text-xs` | 12px | 1.5 | +0.08em | Poppins 500 | Eyebrows, labels — always uppercase |

## Rules

**Tracking tightens as size grows.** Large type set at default tracking looks
loose and amateurish; small type set tight becomes unreadable. The scale above
encodes this — don't override it.

**Body copy is capped at a measure.** Long lines are the most common readability
failure on wide agency sites.

```css
p { max-width: var(--measure); }        /* 68ch */
.lead { max-width: var(--measure-narrow); }  /* 52ch */
```

**One `--text-display` per page.** If two things are the biggest thing, nothing is.

**Headings are sentence case**, not Title Case — matching the existing voice
("Projects that speak for themselves.", "Growth isn't luck. It's strategy and
creativity."). Only `--text-xs` eyebrows are uppercase, and they carry `+0.08em`
tracking to stay legible.

**Never skip more than one level.** An `h2` may be followed by an `h3` or an `h4`,
not an `h6`. Heading level is document structure; visual size is a token. If you
need a small heading in an important position, keep the level and apply a smaller
size token.

## Weights

Manrope 500 and 600 only — 700 is heavier than this brand needs and flattens the
distinction between display and heading. Poppins 400 for body, 500 for labels and
buttons.

## Loading

Both faces are Google Fonts and are already loaded by the site. Load only the
weights in use — Manrope 500/600, Poppins 400/500 — and always with
`font-display: swap`. Every extra weight is a render-blocking request on a page
whose hero is text.

## Applying this in Wix Studio

The scale maps onto Wix's Text Themes — see `../wix-mapping.md` for the slot
table. Wix exposes fewer heading slots than this scale has steps, so the two
largest steps share the H1 slot, separated by a custom class. The mapping table
gives the exact allocation.
