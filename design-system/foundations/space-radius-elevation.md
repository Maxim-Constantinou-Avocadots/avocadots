# Space, radius and elevation

## Space

4pt base, 8pt rhythm. Twelve steps, `--space-1` (4px) through `--space-12` (128px).

Use the scale for everything: padding, gaps, margins. The value of a spacing scale
is not that 24px is better than 25px — it is that when everything is on the scale,
inconsistency becomes visible instead of invisible.

**Section padding** is fluid, so sections breathe on desktop without crushing on
mobile:

```css
--section-sm: clamp(2.5rem, 1.5rem + 4vw, 4rem);   /*  40 →  64px */
--section-md: clamp(4rem,   2.5rem + 6vw, 7rem);   /*  64 → 112px */
--section-lg: clamp(5rem,   3rem   + 8vw, 10rem);  /*  80 → 160px */
```

Most sections are `--section-md`. Reserve `--section-lg` for the hero and for
moments that need air around them — a single statistic, a testimonial.

**Vertical rhythm inside a section**: heading to body `--space-4`; body to CTA
`--space-6`; between sibling cards `--space-5`.

## Radius

Four values, down from the seven the old site used (4, 6, 8, 16, 40, 300px, 50%).

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | 6px | Inputs, tags, small chips |
| `--radius-md` | 10px | Buttons, small cards, form controls |
| `--radius-lg` | 16px | Cards, media, panels |
| `--radius-pill` | 999px | Chips, avatars, pill buttons |

**Nesting rule.** An inner radius should be smaller than its container's, roughly
by the padding between them. A `--radius-md` image inside a `--radius-lg` card
looks right; the same radius on both looks like a mistake.

**Don't mix within a component.** One radius per element. If a card is
`--radius-lg`, its image corners are `--radius-md` or square — never a third value.

## Elevation

The old site had none: `box-shadow` was `none` or `initial` almost everywhere, so
there was no consistent way to say "this floats".

Four levels. **Shadows are tinted with forest, never pure black** — black shadows
under a warm green palette read as grime rather than depth.

| Token | Use |
| --- | --- |
| `--elevation-0` | Flat. Anything sitting directly on the page. |
| `--elevation-1` | Resting cards, subtle lift on hover. |
| `--elevation-2` | Raised cards, hovering interactive tiles. |
| `--elevation-3` | Dropdowns, popovers, sticky nav once scrolled. |
| `--elevation-4` | Modals and dialogs only. |

### Border first

On light surfaces, **prefer a hairline `--border` to a shadow.** A 1px border
defines an edge honestly; a shadow implies the element is floating, which is
usually a lie. Reserve shadows for things that genuinely sit above the page —
menus, modals, and an element that lifts on hover.

The common good pattern: border at rest, shadow on hover.

```css
.card {
  border: 1px solid var(--border);
  box-shadow: var(--elevation-0);
  transition: box-shadow var(--duration-base) var(--ease-standard),
              transform  var(--duration-base) var(--ease-standard);
}
.card:hover {
  box-shadow: var(--elevation-2);
  transform: translateY(-2px);
}
```

### On the forest canvas

Shadows do not read on a dark background. In `.on-dark`, levels 1 and 2 resolve to
`none` — use `--surface-raised` to separate a panel from the canvas instead.
Levels 3 and 4 stay, deepened, because a modal still needs to detach from the page.
