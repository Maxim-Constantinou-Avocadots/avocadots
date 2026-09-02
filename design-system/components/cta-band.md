# CTA band

The closing section of a page. On a site with 180+ pages this is the component
that does the most repeated work, so it needs to be one thing, everywhere.

## Structure

```html
<section class="cta-band on-dark">
  <div class="cta-band__inner">
    <p class="eyebrow">Ready when you are</p>
    <h2 class="cta-band__title">Let's build a digital presence that does more than look good.</h2>
    <p class="cta-band__body">Tell us where you're trying to get to. We'll tell you what it takes.</p>
    <div class="cta-band__actions">
      <a class="btn btn--primary btn--lg" href="/contact">Start a project</a>
      <a class="btn btn--secondary btn--lg" href="/projects">See our work</a>
    </div>
  </div>
</section>
```

```css
.cta-band { background: var(--surface); padding-block: var(--section-lg); }

.cta-band__inner {
  max-width: var(--container-narrow);
  margin-inline: auto;
  padding-inline: var(--gutter);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  text-align: center;
}

.cta-band__title {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--ink);
  text-wrap: balance;
}

.cta-band__body { color: var(--ink-muted); max-width: var(--measure-narrow); }

.cta-band__actions { display: flex; flex-wrap: wrap; gap: var(--space-3);
                     justify-content: center; }

@media (max-width: 479px) {
  .cta-band__actions { flex-direction: column; align-self: stretch; }
  .cta-band__actions .btn { width: 100%; }
}
```

Because it carries `.on-dark`, every token resolves to the forest palette and the
buttons inside need no variant of their own — `--brand` fill with a forest label
sits on the forest canvas at 5.65:1.

## Rules

**One primary, at most one secondary.** The secondary is a lower-commitment path
for someone not ready to convert — usually the portfolio. Never two primaries.

**The heading is a promise, not a command.** "Let's build a digital presence that
does more than look good" works. "Contact us today!" does not.

**Vary the copy by page.** The band is the same component everywhere, but the same
sentence on all 180 pages reads as boilerplate. Match the promise to the page: a
case study closes on "Want results like these?"; a service page closes on the
outcome of that service.

**At most one forest-dark section elsewhere on the page.** This band is almost
always the right place to spend the dark canvas. If the page already runs a dark
section mid-scroll, set this band on `--surface-accent` (the green tint) instead so
the page doesn't end on its second dark block.

## Placement

Last section before the footer, on every marketing page. The one exception is the
contact page itself — a CTA band pointing at the form the visitor is already
looking at is noise.

## Accessibility

- The heading keeps its level in the document outline. It is usually an `<h2>`.
- Buttons that navigate are `<a>` elements styled as buttons (see `button.md`).
- Link text stands alone: "Start a project", not "Get started" repeated in every
  band on the site — a screen-reader user listing links hears them consecutively.
