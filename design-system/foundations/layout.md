# Layout

## Containers

| Token | Width | Use |
| --- | --- | --- |
| `--container-narrow` | 880px | Long-form reading: blog posts, case-study prose, legal |
| `--container-max` | 1280px | The default for marketing sections |
| `--container-wide` | 1440px | Full-bleed galleries, logo walls, image grids |

Gutters are fluid: `--gutter: clamp(1rem, 0.5rem + 2.5vw, 2.5rem)` — 16px on a
phone, 40px on a desktop.

```css
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
```

## Grid

Twelve columns at desktop, eight at tablet, four at mobile. Gap is `--space-5`
(24px), rising to `--space-6` (32px) above 1024px.

Common spans:

| Pattern | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Project / case-study cards | 3 across (4 cols) | 2 across | 1 |
| Service cards | 2 across (6 cols) | 2 across | 1 |
| Blog cards | 3 across (4 cols) | 2 across | 1 |
| Stat blocks | 4 across (3 cols) | 2 across | 2 |
| Logo wall | 6 across (2 cols) | 4 across | 3 |
| Text + media | 6 / 6 | stacked | stacked |
| Long-form prose | 8 cols, offset 2 | full | full |

Prefer `repeat(auto-fit, minmax(280px, 1fr))` for card grids — it reflows without
breakpoint-by-breakpoint rules and degrades sensibly at any width.

## Breakpoints

Aligned to Wix Studio's defaults so the system and the editor agree:

| Name | Width |
| --- | --- |
| Mobile | ≤ 479px |
| Tablet | 480 – 1023px |
| Desktop | ≥ 1024px |
| Large desktop | ≥ 1440px |

Design mobile-first; add complexity upward. Most sections need only one rule —
stack below 768px.

## Section rhythm

A page is a sequence of sections, and the rhythm between them carries as much
meaning as the sections themselves.

- Vertical padding is `--section-md` by default, `--section-lg` for the hero and
  for moments that need air.
- **Alternate the canvas** to mark structure: white → sunken grey → white →
  forest-dark. A run of three identical white sections reads as one long
  undifferentiated page.
- Use the forest-dark canvas (`.on-dark`) **at most twice per page**. It is the
  strongest signal available; spending it everywhere spends it nowhere. Natural
  homes: the "unified growth engine" statement and the closing CTA band.
- Each section carries **one** heading and **one** primary action.

## Full-bleed inside a container

For an image or a dark band that must run edge to edge while its text stays in the
container:

```css
.full-bleed {
  width: 100vw;
  margin-inline: calc(50% - 50vw);
}
```

Guard against horizontal overflow — `100vw` includes the scrollbar on some
browsers. Set `overflow-x: hidden` on a wrapper, never on `body` (it breaks
`position: sticky`).
