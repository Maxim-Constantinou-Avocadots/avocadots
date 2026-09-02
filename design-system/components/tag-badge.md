# Tag and badge

Small, high-frequency elements. They go wrong by multiplying — five colours, three
radii, four sizes — so the rules here are deliberately narrow.

## Tag

A category label. Read-only by default; interactive when used as a filter.

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface-sunken);
  color: var(--ink-muted);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  white-space: nowrap;
}
```

**One tag style.** Tags are not colour-coded by service — that was the old
five-accent palette leaking into components. The tag's text carries its meaning.

Tag content comes from `../content/tag-taxonomy.md`. Never free text.

Maximum **three tags** on a card. More is noise, and the fourth is never read.

## Filter tag

The interactive variant, used on `/projects`. Selected state inverts:

```css
.tag--filter { cursor: pointer; background: var(--surface); }
.tag--filter:hover { border-color: var(--border-strong); color: var(--ink); }
.tag--filter[aria-pressed="true"] {
  background: var(--brand);
  border-color: var(--brand);
  color: var(--on-brand);
}
.tag--filter:focus-visible {
  outline: var(--focus-width) solid var(--focus);
  outline-offset: var(--focus-offset);
}
```

Filter tags are `<button aria-pressed>`, not links — they change the view, they
don't navigate. Hit area must reach 44px even though the pill is ~28px tall:

```css
.tag--filter { position: relative; }
.tag--filter::before { content: ""; position: absolute; inset: -8px; }
```

Always provide a "Reset filter" control and show the result count — a filter that
returns nothing with no explanation reads as a broken page.

## Badge

Draws attention to a status or a distinction. Rarer than a tag — if more than one
badge is visible at a time, none of them is working.

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  background: var(--accent);
  color: var(--on-accent);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}
```

The gold accent is the badge fill — this is its main job on the site (awards, "Gold
winner", a featured project). `--on-accent` is forest at 7.51:1.

Status variants use `--success`, `--warning`, `--danger` as the *text and border*
colour on a tinted background, not as a solid fill — a solid `--danger` fill with
white text is louder than any status on this site needs.

## Eyebrow

Not a tag — no box. A small uppercase label above a heading.

```css
.eyebrow {
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--brand-text);
}
```

`--brand-text` (`green-700`), never `--brand` — at `--text-xs` this is small text
and needs the full 4.5:1.

## Accessibility

- A decorative tag needs no ARIA. A filter tag is a `<button>` with `aria-pressed`.
- Never use colour alone to distinguish tag meaning; the label carries it.
- Uppercase is done with `text-transform`, so the underlying text stays
  sentence-case for screen readers, which otherwise may spell out short words.
