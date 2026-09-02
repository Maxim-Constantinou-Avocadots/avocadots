# Avocadots Design System

The design system for [avocadots.com](https://www.avocadots.com) — a Wix Studio
site of roughly 45 pages, 62 case studies and 74 blog posts.

It exists because an agency's own site is its loudest credential, and this one had
drifted: five competing accent colours, seven border radii, no elevation system,
and a primary call-to-action measuring **2.24:1** against a 4.5:1 accessibility
requirement.

## The short version

**Deep forest `#1c3830` is the darkest shade of the brand green `#86bd42`.** The
two colours Avocadots already owned turned out to be the two ends of one ramp, so
the palette narrows to one brand ramp, one neutral ramp and one warm accent —
without giving up any brand equity.

**The brand green has two roles, not one.** As a *fill* it stays exactly as it is.
As *text* it moves to `green-700`. Conflating the two is what put the conversion
path below half the required contrast, and separating them fixes it site-wide.

All 40 colour pairings the system ships are verified by script, in both the light
and forest-dark contexts.

## Where to start

| If you want to… | Read |
| --- | --- |
| Understand why any of this changed | [`design-system/audit.md`](design-system/audit.md) |
| Apply it to the live site | [`design-system/wix-mapping.md`](design-system/wix-mapping.md) |
| Pick a colour | [`design-system/foundations/color.md`](design-system/foundations/color.md) |
| Set some type | [`design-system/foundations/typography.md`](design-system/foundations/typography.md) |
| Build a component | [`design-system/components/`](design-system/components/) |
| Write a case study | [`design-system/content/case-study-template.md`](design-system/content/case-study-template.md) |
| Write or fix a service page | [`design-system/content/service-page-pattern.md`](design-system/content/service-page-pattern.md) |
| Check accessibility | [`design-system/accessibility.md`](design-system/accessibility.md) |

## Layout

```
design-system/
  audit.md                  What was wrong, with measurements
  accessibility.md          Rules + the generated contrast table
  wix-mapping.md            Token → Wix Studio slot, and the rollout order
  verify-contrast.mjs       Checks all 40 pairs; exits non-zero on failure
  build-wix-css.mjs         Generates the paste-ready Wix CSS block

  tokens/
    tokens.json             Source of truth (Style-Dictionary shaped)
    tokens.css              CSS custom properties — primitives + semantics
    wix-classes.css         Custom classes for Wix Studio
    wix-studio.css          GENERATED — the block you paste into Wix

  foundations/              colour · typography · space/radius/elevation · motion · layout
  components/               button · cards · tag-badge · data-display ·
                            navigation · forms · disclosure · cta-band
  content/                  case-study template · service-page pattern ·
                            tag taxonomy · voice and CTAs

styleguide/
  index.html                The living style guide
```

## Using it

Components reference **semantic** tokens (`--ink`, `--brand`, `--surface`), never
primitives (`--green-400`). That is what lets a component work unchanged on both
the white and the forest-dark canvas: wrap a section in `.on-dark` and every token
resolves to its dark-context value.

```html
<section class="on-dark section-md">
  <p class="eyebrow">Our work</p>
  <h2>Projects that speak for themselves.</h2>
  <a class="btn btn-primary" href="/projects">See our work</a>
</section>
```

If you are writing a hex value anywhere outside `tokens/`, stop.

## Commands

```bash
node design-system/verify-contrast.mjs        # verify every shipped colour pair
node design-system/verify-contrast.mjs --md   # regenerate the accessibility table
node design-system/build-wix-css.mjs          # rebuild the Wix paste block
```

Run the verifier after any colour change. The contrast table in
`accessibility.md` is generated output — don't hand-edit it.

## Scope

This repository is documentation and tokens. The site itself stays on Wix Studio,
and the colour and typography layers are applied by hand in the editor — there is
no API for editor-side design settings. `wix-mapping.md` is what makes that a
short, ordered job rather than an open-ended one.
