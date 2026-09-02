# About page — build spec

Live reference: `pages/about.html` (published as an Artifact).
Replaces: `/about-avocadots-design-studio`.

Built on the studio's preferred draft — its section architecture is kept almost
entirely — rebuilt on the design system.

---

## Why this draft was the right base

Its content architecture is stronger than the earlier version in three ways:

- **The "how this studio actually works" trio** — the founder takes the first call,
  design and build sit in the same room, the same names stay on the thread after
  launch. That is real, checkable differentiation, and the best writing on the page.
- **Team cards with a role pill, a description and a fun fact** — warmer and more
  useful than monogram tiles alone.
- **A complete page**: a named process, a story timeline, values, services and an
  FAQ, rather than a statement.

## What changed

### Colour — 41 values, none of them the brand's

The draft contained 41 distinct hex values and **not one came from the brand
palette**. The near-misses were the real problem: `#15342b` where forest is
`#1c3830`, `#f0c31a` where gold is `#eac435`, a lime `#c8e45e` where the brand
green is `#86bd42`. Close enough to look right alone, wrong beside the live site.

Every value is now a token. The page contains **zero raw hex outside `:root`**.

### The category palette (new to the design system)

Avatars, service dots and role pills carried roughly fifteen ad-hoc hues — purple,
red, blue, lime, grey. Rather than flatten that (the multi-colour idea gives each
person identity) it was rebuilt as a disciplined family of eight tones at
consistent chroma, **two of which are the brand's own** — forest and moss — so the
set is anchored rather than bolted on. See `design-system/foundations/color.md`.

Every deep tone carries a white label (5.93–12.67:1); every tint carries forest
(9.72–11.43:1). Rule: **identity, never state.** A berry avatar says *which
person*, never *something is wrong*.

### Accessibility — five measured failures, all fixed

| | Was | Now |
| --- | --: | --: |
| Client logo marquee | **1.84:1** | 5.59 |
| Muted text on cream (13–14px) | 4.47:1 | 5.33 |
| Avatar: white on lime | **2.26:1** | 6.81 |
| Avatar: white on lime | **2.30:1** | 6.90 |

The marquee was the worst of these — the client logos, the page's social proof,
were effectively invisible.

Also added, all absent from the draft: `prefers-reduced-motion` handling for the
four infinite animations, `:focus-visible` rings (the draft had none, while
stripping link underlines globally), a real FAQ disclosure chevron (the draft
removed the marker without replacing it), a `<main>` landmark, and real `href`s on
every nav and service link.

### Code

- **13 dead CSS classes removed** — `compare`, `chart`, `frag`, `join`, `hl` and
  others: roughly 60 lines styling sections that did not exist in the markup.
- **The scroll-reveal did nothing.** It animated on load while the observer only
  ever set `animationPlayState = "running"`, so everything below the fold had
  finished before it was scrolled to. Replaced with a resting-visible animation.
- **The counter rendered a literal `0`** as its no-JS state. It now renders `150+`
  in the markup and counts up only as an enhancement.
- Fixed-px tracking on fluid type (`-3.2px` on a `clamp(40px…)` h1 is −8% at
  mobile) is now em-based. `font-weight:650` removed.

### Layout

The draft ran **two full gold bands**. Gold is now spent once — on the positioning
statement, mirroring where `/web-design` puts its yellow — and the engine diagram
moved to the green tint. Its SVG takes `var(--ink)` / `var(--ink-muted)`, so it
inherits whichever surface it sits on rather than being drawn for one canvas.

## Content

**Katerina was missing.** The live About page profiles nine people; the draft had
eight. She is restored, and the fun facts now come from the team's real profiles
rather than rewrites.

**Three claims are flagged, not silently kept.** They carry `class="todo"` with a
dotted underline and a tooltip:

1. The **"Then"** timeline entry — the Wix/Shopify milestone. No basis on the live
   site; confirm the year and the wording.
2. The **"Since"** timeline entry — the team expansion. Same.
3. The **founder quote** — presented as a direct attribution to a named person.
   Confirm the wording with Andreas, or replace it.

**Remove the `.todo` class before launch.** It exists to stop unverified copy
shipping by accident.

## Open — needs Avocadots to settle

**The 100+ vs 150+ contradiction is on the live site, not from any draft.** The
homepage says "100+ websites" and "150+ companies"; `/web-design` says "150+
Websites Delivered". The page uses the defensible reading — **150+ companies
helped** — but the two pages should be reconciled.

Also still open: the **two people named Andreas** need disambiguating (the founder
has a surname, the technical specialist does not), and **"five years"** from a 2020
founding is now six.

## Portraits

Monogram tiles are placeholders on the category tones. Replace with **nine
portraits shot the same way** — same lens, light, background, crop. Nine shot
consistently is a design statement; nine shot differently is a liability. The live
page currently runs both colour and greyscale versions of each person, which is two
treatments where there should be one.

## Building it in Wix Studio

1. Apply Site Colours and Text Themes first (`design-system/wix-mapping.md`).
2. Paste `design-system/tokens/wix-studio.css` into the CSS Editor — it now carries
   the category palette.
3. Sections map to standard Wix sections; the gold band takes the `on-gold` class.
4. Team and service grids are CSS Grid with `auto-fit` / `minmax`, which Wix
   repeaters reproduce directly.

## Accessibility checklist

- One `<h1>`, a `<main>` landmark, headings descending without skips.
- 67 contrast pairs verified by script across light, forest and gold contexts.
- Reduced motion honoured; the page is complete with all motion removed.
- The stat reads `150+` with JavaScript disabled.
- The marquee list exists once in the DOM; the visual duplicate is added by script
  so assistive tech does not read the client list twice.
