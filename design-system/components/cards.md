# Cards

One base card; three content variants. All share the same box so a mixed grid
holds a rhythm.

## Base

```css
.card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-standard),
              transform  var(--duration-base) var(--ease-standard),
              border-color var(--duration-base) var(--ease-standard);
}

.card__media { aspect-ratio: 16 / 10; object-fit: cover; width: 100%; }
.card__body  { padding: var(--space-5); display: flex; flex-direction: column;
               gap: var(--space-3); flex: 1; }
.card__title { font-family: var(--font-display); font-size: var(--text-h4);
               font-weight: var(--weight-medium); line-height: var(--leading-snug);
               letter-spacing: var(--tracking-snug); color: var(--ink); }
.card__meta  { font-size: var(--text-sm); color: var(--ink-muted); }

/* Border at rest, shadow on hover — see foundations/space-radius-elevation.md */
.card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--elevation-2);
  transform: translateY(-2px);
}
```

**Radius nesting:** the card is `--radius-lg` (16px) and `overflow: hidden`, so
media inherits the corner. If media sits inset with padding around it, give it
`--radius-md` — an inner radius equal to its container's reads as an error.

## Whole-card links

Make the title the real link and stretch it over the card. This keeps one link per
card in the accessibility tree — nesting a card-wide `<a>` around other links is
invalid and produces unusable screen-reader output.

```css
.card__title a::after { content: ""; position: absolute; inset: 0; }
.card { position: relative; }
```

Any genuinely separate link inside the card needs `position: relative; z-index: 1`.

## Project / case-study card

The most important card on the site — it is how the portfolio is judged.

```
┌──────────────────────────────┐
│  16:10 project image         │
├──────────────────────────────┤
│  WEB DESIGN        ← eyebrow │
│  Limassol Agora    ← title   │
│  One line on the outcome.    │
│  ┌────────┐ ┌────────┐       │
│  │ Retail │ │ Shopify│  tags │
│  └────────┘ └────────┘       │
└──────────────────────────────┘
```

Required: image, service eyebrow (`--text-xs`, uppercase, `--brand-text`), client
name, **one line naming the outcome**, one to three tags.

Two rules the old cards broke:

- **Tags come from the taxonomy**, never free text. Live cards currently render the
  literal strings "Tag One", "Tag Two", "Tag Three". See `../content/tag-taxonomy.md`.
- **The description line states a result**, not a category. "Rebuilt the booking
  flow — 38% more enquiries" earns a click. "A web design project" does not.

Where a headline metric exists, show it on the card. A grid of project cards each
carrying a number is the strongest portfolio page an agency can have.

## Service card

Title, one-sentence description, a list of three to six sub-services, one link.

Sub-service lists use `--text-sm` and `--ink-muted`. Do not bullet more than six —
the current Branding card lists six, which is the ceiling, not the target.

The card links to the service page. Its label is "View service", not "Add" — the
homepage's "Add" links are unedited component defaults and should be removed.

## Blog card

Category eyebrow, title, date and read time in `--card__meta`, optional thumbnail.
Titles clamp to three lines:

```css
.card__title { display: -webkit-box; -webkit-line-clamp: 3;
               -webkit-box-orient: vertical; overflow: hidden; }
```

Clamp the title, never the excerpt — a truncated sentence mid-word reads as broken.

## Grid

`repeat(auto-fit, minmax(280px, 1fr))` with `gap: var(--space-5)`. Reflows without
per-breakpoint rules.

**Equal heights.** Cards in a row must match. `display: flex` on the body with
`flex: 1` on the space above the footer pins actions to the bottom regardless of
title length.

## On the forest canvas

Inside `.on-dark`, use `background: var(--surface-raised)` and drop the shadow —
shadows do not read on dark. Separation comes from the surface step instead.
