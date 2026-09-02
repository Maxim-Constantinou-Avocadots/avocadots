# Audit — avocadots.com, September 2026

The findings that motivated this design system. Everything below was measured
against the live site, not inferred.

**Method.** The published markup of `www.avocadots.com` was retrieved and parsed
for the Wix theme variables, declared colours, font stacks, radii and shadows;
the sitemaps were enumerated for page inventory; rendered page content was read
for several representative page types. Contrast figures were computed with the
WCAG 2.1 relative-luminance formula — the same script that ships in this repo as
`verify-contrast.mjs`.

**One limitation, stated plainly.** Headless Chromium could not complete TLS
through this session's network proxy, so this is an audit of markup, tokens and
content — not a visual critique of rendered pages. Findings about layout
aesthetics are therefore absent by design; everything here is measurable.

---

## Platform and inventory

| | |
| --- | --- |
| Platform | Wix Studio |
| Site ID | `45bd1116-78ea-4eea-a1ef-4411334b443b` |
| Static pages | ~45 |
| Case studies | 62 (branding 18, web design 22, e-commerce 9, digital marketing 10) |
| Blog posts | 74 |
| Code repository | Empty — zero commits |

The site is large enough that inconsistency compounds: a rule that is not written
down gets re-decided 180 times.

---

## Finding 1 — The primary call-to-action fails accessibility

This is the most consequential finding.

| Pair | Measured | WCAG AA | |
| --- | --: | --: | --- |
| Brand green `#86bd42` as text on white | **2.24:1** | 4.5:1 | FAIL |
| White text on a brand-green button | **2.24:1** | 4.5:1 | FAIL |
| Gold `#eac435` as text on white | **1.69:1** | 4.5:1 | FAIL |
| Deep forest `#1c3830` on white | 12.67:1 | 4.5:1 | pass |

Both of the ways the brand green is most likely to be used — as green text on a
white page, and as a white label on a green button — sit at less than half the
required contrast. This affects the "Work with us" and "Start Now" buttons, i.e.
the conversion path.

The green itself is not the problem and does not need to change. What was missing
was a rule separating the colour's *fill* role from its *text* role. The system
supplies one: see `foundations/color.md`.

## Finding 2 — Palette sprawl

Five accent colours were carried in the theme, apparently one per service line,
plus stray greys and a Wix default that is not a brand colour at all:

| Colour | Role observed | Disposition |
| --- | --- | --- |
| `#86bd42` green | Brand | **Kept** — becomes `green-400` |
| `#1c3830` forest | Dark sections, ink | **Kept** — becomes `green-900` |
| `#eac435` gold | Accent | **Kept**, narrowed to one warm accent |
| `#da2c38` red | Accent | Demoted to a semantic danger colour |
| `#253787` navy | Accent | **Dropped** |
| `#116dff` | Links | **Dropped** — Wix stock blue, never a brand colour |
| `#eef0f1`, `#f0f0f0`, `#8f8f8f`, `#6e6e6e` | Greys | Replaced by one neutral ramp |

The key structural observation: **deep forest `#1c3830` is the darkest shade of the
brand green.** The two colours Avocadots already owns are the two ends of a single
ramp, which is why the palette can narrow without losing brand equity.

## Finding 3 — No radius discipline

Seven distinct radii in use: `4px`, `6px`, `8px`, `16px`, `40px`, `300px`, `50%`.
`8px` is the most frequent (17 declarations) but nothing establishes when the
others apply. The system defines four, each with a stated use.

## Finding 4 — No elevation system

`box-shadow` resolves to `none` or `initial` on essentially every site element;
the only real shadows in the markup belong to Wix's own editor chrome. Depth and
layering are therefore undefined — there is no way to express "this card floats"
or "this menu is above the page" consistently. The system defines four levels,
tinted with forest rather than black.

## Finding 5 — Unshipped content on customer-facing pages

Case-study pages — the pages that carry the most sales weight for an agency —
contain unedited Wix defaults:

- Placeholder body copy is still live: *"Add paragraph text. Click 'Edit Text' to
  update the font, size and more."*
- Project cards render the literal strings **"Tag One", "Tag Two", "Tag Three"**.
- Case studies carry **no metrics and no testimonials**. The template captures
  Industry / Market / Platform / Site Type and then a gallery — it states what was
  built, never what it achieved.

For a studio whose homepage claims *"We've helped 150+ companies push the limits"*,
the absence of a single number on any case study is the widest gap between claim
and evidence on the site. `content/case-study-template.md` addresses it.

## Finding 6 — Competing calls to action

Five CTA labels are in circulation with no hierarchy — "Work with us", "Start
Now", "View Service", "Schedule a Meeting", "View All" — alongside stray links
labelled **"Add"** on the homepage's project and service lists, which appear to be
unedited component defaults rather than intentional copy.

## Finding 7 — Typography without a scale

The pairing itself is sound and is kept: **Manrope** for display and headings,
**Poppins** for body and UI. What is missing is a scale. Nine sizes are declared
(64, 48, 36, 28, 22, 18, 16, 14, 12) with line-heights between 1.1 and 1.6, no
letter-spacing rules at any size, and no measure limit on body copy. Display type
at 64px with default tracking is the most visible symptom.

---

## What this system changes

| Finding | Response |
| --- | --- |
| 1. CTA contrast failure | Split fill and text roles; forest labels on green fills. All 40 shipped pairs verified AA. |
| 2. Palette sprawl | One green ramp + one neutral ramp + one warm accent; three colours retired. |
| 3. Radius sprawl | Seven values reduced to four, each with a stated use. |
| 4. No elevation | Four forest-tinted levels, plus a border-first rule. |
| 5. Content debt | A case-study template with mandatory outcomes, and a fixed tag taxonomy. |
| 6. CTA confusion | One primary CTA per section, from a fixed verb set. |
| 7. No type scale | Nine fluid steps with defined line-height, tracking and measure. |
