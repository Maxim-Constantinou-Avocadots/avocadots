# Accordion / FAQ

The site runs a five-question FAQ on the homepage and a dedicated `/faq` page.

## Structure

Use native `<details>`/`<summary>` unless animation demands otherwise. It is
keyboard accessible, screen-reader correct and searchable in-page for free.

```css
.accordion__item { border-bottom: 1px solid var(--border); }

.accordion__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  width: 100%;
  padding: var(--space-5) 0;
  background: none;
  border: 0;
  text-align: left;
  cursor: pointer;
  font-family: var(--font-display);
  font-size: var(--text-h5);
  font-weight: var(--weight-medium);
  color: var(--ink);
}
.accordion__trigger:hover { color: var(--brand-text); }
.accordion__trigger:focus-visible {
  outline: var(--focus-width) solid var(--focus);
  outline-offset: var(--focus-offset);
}

.accordion__icon {
  flex: none;
  transition: transform var(--duration-base) var(--ease-standard);
}
.accordion__item[open] .accordion__icon { transform: rotate(45deg); }

.accordion__panel {
  padding-bottom: var(--space-5);
  max-width: var(--measure);
  color: var(--ink-muted);
  line-height: var(--leading-relaxed);
}
```

## Animating it properly

Never animate `height` — it forces layout every frame. Animate the grid track:

```css
.accordion__panel-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--duration-slow) var(--ease-standard);
}
.accordion__item[open] .accordion__panel-wrap { grid-template-rows: 1fr; }
.accordion__panel-wrap > * { overflow: hidden; }
```

The duration tokens zero out under `prefers-reduced-motion`, so this is already
compliant.

## Behaviour

- **Allow multiple open.** Auto-closing the previous answer when someone opens the
  next is a comparison-hostile pattern on an FAQ — people open two questions
  precisely to compare them.
- Use a plus that rotates to a cross, or a chevron that rotates 180°. Not both.
- The whole row is the target, not just the text.
- Don't open the first item by default. It biases attention toward whichever
  question happens to be first.

## The icon rotation

A `+` rotated 45° becomes `×`. That single transform communicates open and closed
with one glyph and no icon swap — and it animates on the compositor.

## Writing the questions

- Questions are in the visitor's words, not the company's. "How much does a website
  cost?" beats "Pricing structure".
- Answer in the first sentence, then elaborate. Someone scanning reads only that
  sentence.
- An FAQ that avoids the pricing question loses trust rather than protecting
  margin. Give a range and what moves it.
- Keep answers under ~60 words. Longer means the question deserves a page.

## Accessibility

- If you build a custom accordion rather than `<details>`, the trigger is a
  `<button>` with `aria-expanded` and `aria-controls`, and the panel needs an `id`.
- Never put the trigger inside a heading *and* make the heading a button — one or
  the other. The usual correct form is `<h3><button>…</button></h3>`.
- Content inside a closed panel must be genuinely hidden (`display: none` or the
  native `[open]` mechanism), or screen readers announce it while it is invisible.
