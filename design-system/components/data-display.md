# Stat block, testimonial, logo wall

The three components that turn claims into evidence. The old site had the claims
("150+ companies", "100+ websites delivered") but almost no evidence attached to
individual work.

## Stat block

A number and what it means. The single highest-value component on a case study.

```css
.stat { display: flex; flex-direction: column; gap: var(--space-2); }
.stat__value {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-display);
  color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.stat__label { font-size: var(--text-sm); color: var(--ink-muted); max-width: 24ch; }
```

**Rules.**

- `tabular-nums` so a row of figures aligns. Proportional digits make a stat row
  look accidental.
- The label says what was measured and over what period: "more enquiries, first
  90 days" — not "increase".
- Three or four per row. Two looks thin; five stops being memorable.
- The value may carry `--brand-text` for emphasis on a light canvas, or `--brand`
  on the forest canvas where it is large enough to pass as large text. Use it on
  **one** stat in a row, not all of them.
- **Never fabricate.** If a project has no measured outcome, use the qualitative
  outcome line instead and leave the stat row out. A made-up number is worse than
  no number — see `../content/case-study-template.md`.

## Testimonial

```css
.testimonial { display: flex; flex-direction: column; gap: var(--space-5);
               max-width: var(--measure-narrow); }
.testimonial__quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-snug);
  color: var(--ink);
  text-wrap: balance;
}
.testimonial__attribution { display: flex; align-items: center; gap: var(--space-3); }
.testimonial__avatar { width: 48px; height: 48px; border-radius: var(--radius-pill);
                       object-fit: cover; }
.testimonial__name { font-weight: var(--weight-medium); color: var(--ink); }
.testimonial__role { font-size: var(--text-sm); color: var(--ink-muted); }
```

- Use real quotation marks (`"…"`), not `"`. Don't set a giant decorative quote
  glyph — it dates the page and adds nothing.
- **Attribution is mandatory**: name, role, company. An unattributed quote reads
  as invented and does more harm than omitting it.
- Two to four lines. Longer quotes get cut, with the cut marked by an ellipsis.
- Set in Manrope at `--text-h3` — a testimonial is a display moment, not body copy.
- `text-wrap: balance` prevents an orphaned last word.

## Logo wall

Client and partner logos. The site currently shows Shopify, Wix Studio, Meta,
Google Ads, TikTok and GoHighLevel as partners.

```css
.logo-wall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--space-6) var(--space-8);
  align-items: center;
}
.logo-wall img {
  max-height: 32px;
  width: auto;
  margin-inline: auto;
  opacity: 0.65;
  filter: grayscale(1);
  transition: opacity var(--duration-base) var(--ease-standard),
              filter  var(--duration-base) var(--ease-standard);
}
.logo-wall img:hover { opacity: 1; filter: grayscale(0); }
```

**Optical sizing, not fixed sizing.** Logos have wildly different aspect ratios; a
uniform `max-height` makes a wide wordmark dominate a compact roundel. Cap height
*and* width, then adjust individual logos by eye. This is the one place in the
system where a hand-tuned value beats a token.

Greyscale at rest unifies a set of clashing brand colours — necessary here, since
the partner logos span six palettes. Colour on hover, so the logo is still
identifiable.

Label the wall. "Partners" or "Clients we've worked with" — an unlabelled logo row
is ambiguous about whether these are clients, tools, or certifications, and the
site currently mixes platforms (Shopify, Wix) with ad channels (Meta, Google Ads).

## Accessibility

- Stat values are text, never images. A number baked into a JPEG is invisible to
  search engines and screen readers.
- Testimonials use `<figure>` and `<figcaption>`, with the quote in `<blockquote>`.
- Logo `alt` text is the company name. If the wall is purely decorative and the
  companies are named nearby, `alt=""` is correct — but that is rarely the case on
  a credibility section.
