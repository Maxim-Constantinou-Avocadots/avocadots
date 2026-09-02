# Colour

## The idea

Avocadots already owned the right two colours — it just didn't know they were the
same colour. Deep forest `#1c3830` is the darkest shade of the brand green
`#86bd42`. Placed on one ramp:

```
green-50   #f2f8ea    green-500  #6ea233
green-100  #e2efd0    green-600  #57822a
green-200  #c7e0a6    green-700  #436421
green-300  #a8ce76    green-800  #334c1a
green-400  #86bd42  ← brand      green-900  #1c3830  ← forest
                                 green-950  #0f1f1a
```

So the palette narrows from five competing accents to **one brand ramp, one
neutral ramp, one warm accent** — without giving up anything the brand already
stands for.

## The rule that matters most

The old site used the brand green as both a fill and a text colour. As text on
white it measures **2.24:1** against a 4.5:1 requirement, and white text on a green
button measures the same. The conversion path was the least legible thing on the
page.

The fix is not a new green. It is separating two roles that were being conflated:

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| **Fill** | `--brand` | `green-400` `#86bd42` | Button and block backgrounds, accents, graphic shapes |
| **Text** | `--brand-text` | `green-700` `#436421` | Green text, links, icons on a light surface |

**Never use `--brand` as a text colour on a light surface. Never use
`--brand-text` as a large fill.**

Labels on a green fill are **forest**, not white:

```css
background: var(--brand);   /* #86bd42 */
color:      var(--on-brand); /* #1c3830 — 5.65:1, AA */
```

### Why the brand fill lifts on hover

Conventionally a button darkens on hover. This one lightens, and that is
deliberate: the label is forest ink, so darkening the fill pushes the pair *down*
(forest on `green-500` is only 4.15:1 — a fail). Lifting to `green-300` holds
7.09:1 and still reads clearly as an interaction.

```
rest    green-400  #86bd42   forest label   5.65:1
hover   green-300  #a8ce76   forest label   7.09:1
active  green-200  #c7e0a6   forest label   8.83:1
```

## Gold — the second brand colour

**Corrected.** An earlier version of this document called gold "the single warm
accent", to be used "sparingly" and "never more than once or twice per screen".
That was wrong about this brand. On `/web-design` — the page the studio holds up
as the reference — gold carries four structural roles:

- the **primary CTA** fill ("Get Your Custom Quote"), with forest text
- the **nav CTA** fill ("Contact Us")
- an **entire full-bleed section** background
- a **highlighter** behind key phrases in running copy

So gold is a co-equal brand colour, and the system now says so. Green remains the
identity; gold is what asks for the click.

```
--cta: gold-500   --on-cta: green-900   (7.51:1)
--highlight: gold-300   --on-highlight: green-900   (9.28:1)
--surface-gold: gold-500
```

### Gold is unusually restrictive

It is a light, highly saturated colour, so most things fail on it. Verified:

| On gold `#eac435` | Ratio | |
| --- | --: | --- |
| Forest `green-900` | 7.51 | **use this** |
| `green-800` (muted role) | 5.68 | ok |
| `--ink-muted` (`neutral-600`) | 3.31 | **fails** |
| `--brand-text` (`green-700`) | 4.04 | **fails** |
| `green-400` | 1.33 | **fails badly** |
| White | 1.69 | **never** |

In practice: **on a gold surface, nearly everything is forest.** Hierarchy comes
from size and weight, not from a lighter ink. The `.on-gold` context in
`tokens.css` encodes this, including inverting the CTA to a forest fill — a gold
button on a gold section is meaningless.

`gold-500` remains a fill. For gold *text* on white, use `gold-700 #8d710b` or
darker.

## The category palette

Separate from the brand palette, and doing a different job: telling things
**apart**. Team avatars, service markers, tag identity — cases where a reader needs
to distinguish eight things at a glance, and the brand ramp alone cannot.

Eight tones at consistent chroma. **Forest and moss are the brand's own colours**,
so the family is anchored on the brand rather than bolted on beside it.

| | Deep — white label | Tint — forest label |
| --- | --- | --- |
| Forest | `#1c3830` 12.67 | `#d9e4df` 9.72 |
| Moss | `#436421` 6.81 | `#e2efd0` 10.55 |
| Teal | `#12655c` 6.90 | `#d3ebe7` 10.14 |
| Ocean | `#1d5b96` 7.03 | `#dbe8f6` 10.19 |
| Violet | `#57408c` 8.34 | `#e6e0f4` 9.85 |
| Berry | `#932d59` 7.61 | `#f7dde7` 9.92 |
| Clay | `#a04425` 6.27 | `#fadfd4` 10.00 |
| Olive | `#7a6109` 5.93 | `#fdf3d4` 11.43 |

Use `--on-cat` (white) on any deep tone and `--on-cat-tint` (forest) on any tint —
both are verified against all eight, so you can pair them without checking.

### Rules

- **Identity, never state.** A category colour says *which one*, never *how it is
  going* — that is `--success` / `--warning` / `--danger`. A red avatar must never
  imply a problem.
- **Assign deliberately and keep it.** Once a person or service owns a tone, it is
  theirs across the site. A palette that reshuffles is decoration, not a system.
- **Never as a large surface.** These are marks: avatars, dots, pills. A full
  section in category berry is not a thing.
- **The label colour is fixed.** White on deep, forest on tint. Do not improvise —
  the ad-hoc version of this palette on an earlier draft had white labels at
  2.26:1.

## Neutrals

One ramp, `neutral-0` through `neutral-900`, carrying a faint green undertone so
greys sit with the brand instead of fighting it. It replaces the four unrelated
greys previously in use (`#eef0f1`, `#f0f0f0`, `#8f8f8f`, `#6e6e6e`).

Body copy uses `--ink`. Secondary copy uses `--ink-muted`. `--ink-subtle` is
3.61:1 and is therefore restricted to large text and non-text UI — never body copy.

## Retired

| Colour | Why |
| --- | --- |
| `#253787` navy | Palette sprawl. No role the ramp doesn't cover. |
| `#da2c38` red | No longer a brand colour. The danger role uses `#b3242f`. |
| `#116dff` | Wix's stock link blue. Never a brand colour — it leaked in from defaults. |
| `#eef0f1` `#f0f0f0` `#8f8f8f` `#6e6e6e` | Replaced by the neutral ramp. |

## Semantic tokens

Components reference these, never the primitives. Each has a defined value in both
the light and the forest-dark context, so a component works on either canvas with
no changes of its own.

| Token | Role |
| --- | --- |
| `--bg` `--surface` `--surface-sunken` `--surface-raised` `--surface-accent` `--surface-inverse` | Backgrounds |
| `--ink` `--ink-muted` `--ink-subtle` `--ink-inverse` | Text |
| `--border` `--border-strong` | Hairlines |
| `--brand` `--brand-hover` `--brand-active` `--on-brand` | Brand fills |
| `--brand-text` `--brand-text-hover` | Brand text and links |
| `--accent` `--on-accent` | Warm accent |
| `--focus` | Focus ring |
| `--success` `--warning` `--danger` | Status |

## The forest-dark canvas

Any section on the deep-forest background gets `class="on-dark"`. That redefines
every semantic token, so the components inside need no dark-specific styling:

```html
<section class="on-dark">
  <h2>Growth isn't luck.</h2>   <!-- --ink is now white -->
  <a href="#">Read the case study</a>  <!-- --brand-text is now green-300 -->
</section>
```

Two things change beyond colour on this canvas:

- **Shadows stop working.** Levels 1 and 2 resolve to `none`; use
  `--surface-raised` for separation instead.
- **Status colours brighten.** The light-context success green measures 2.35:1 on
  forest, so the dark context substitutes brighter variants. This is automatic.

## Checking your work

Every foreground/background pair the system ships is verified by script:

```bash
node design-system/verify-contrast.mjs        # 40 pairs, exits non-zero on failure
node design-system/verify-contrast.mjs --md   # regenerate the table in accessibility.md
```

If you add a semantic token or a new pairing, add it to `PAIRS` in that script.
The table in `accessibility.md` is generated output — do not hand-edit it.
