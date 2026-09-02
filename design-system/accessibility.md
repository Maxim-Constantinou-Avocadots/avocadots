# Accessibility

The system is built so that using it correctly produces an accessible page by
default. Where a rule needs conscious effort, it is stated here.

## Contrast

Every foreground/background pairing the system ships is verified by script. The
table below is **generated output** — regenerate it rather than editing by hand:

```bash
node design-system/verify-contrast.mjs --md
```

Targets: **4.5:1** for body text, **3:1** for large text (≥24px, or ≥19px bold)
and for non-text UI such as focus rings and control boundaries.

The script parses `tokens.css`, resolves the semantic layer through its `var()`
aliases, flattens translucent colours over their backdrop, and fails the build if
any pair misses its target. If you add a semantic token or a new pairing, add it
to `PAIRS` in the script — a token that is not in the table is not verified.

<!-- BEGIN GENERATED CONTRAST TABLE -->
| Context | Pair | Tokens | Ratio | Target | |
| --- | --- | --- | --: | --: | --- |
| Light | Body ink on page background | `--ink` on `--bg` | 12.67:1 | 4.5:1 | PASS |
| Light | Muted ink on page background | `--ink-muted` on `--bg` | 5.59:1 | 4.5:1 | PASS |
| Light | Subtle ink — large text / UI only | `--ink-subtle` on `--bg` | 3.61:1 | 3.0:1 | PASS |
| Light | Ink on sunken surface | `--ink` on `--surface-sunken` | 12.08:1 | 4.5:1 | PASS |
| Light | Ink on accent tint surface | `--ink` on `--surface-accent` | 11.70:1 | 4.5:1 | PASS |
| Light | Muted ink on sunken surface | `--ink-muted` on `--surface-sunken` | 5.33:1 | 4.5:1 | PASS |
| Light | Button label on brand fill | `--on-brand` on `--brand` | 5.65:1 | 4.5:1 | PASS |
| Light | Button label on brand hover fill | `--on-brand` on `--brand-hover` | 7.09:1 | 4.5:1 | PASS |
| Light | Label on accent fill | `--on-accent` on `--accent` | 7.51:1 | 4.5:1 | PASS |
| Light | Brand link text on background | `--brand-text` on `--bg` | 6.81:1 | 4.5:1 | PASS |
| Light | Brand link hover on background | `--brand-text-hover` on `--bg` | 9.59:1 | 4.5:1 | PASS |
| Light | Brand link on sunken surface | `--brand-text` on `--surface-sunken` | 6.49:1 | 4.5:1 | PASS |
| Light | Focus ring against background | `--focus` on `--bg` | 4.53:1 | 3.0:1 | PASS |
| Light | Hairline border visibility | `--border-strong` on `--bg` | 1.56:1 | 1.2:1 | PASS |
| Light | Success text | `--success` on `--bg` | 5.38:1 | 4.5:1 | PASS |
| Light | Warning text | `--warning` on `--bg` | 4.67:1 | 4.5:1 | PASS |
| Light | Danger text | `--danger` on `--bg` | 6.54:1 | 4.5:1 | PASS |
| Light | Inverse ink on inverse surface | `--ink-inverse` on `--surface-inverse` | 12.67:1 | 4.5:1 | PASS |
| Forest dark | Body ink on page background | `--ink` on `--bg` | 12.67:1 | 4.5:1 | PASS |
| Forest dark | Muted ink on page background | `--ink-muted` on `--bg` | 5.53:1 | 4.5:1 | PASS |
| Forest dark | Subtle ink — large text / UI only | `--ink-subtle` on `--bg` | 3.51:1 | 3.0:1 | PASS |
| Forest dark | Ink on sunken surface | `--ink` on `--surface-sunken` | 17.06:1 | 4.5:1 | PASS |
| Forest dark | Ink on accent tint surface | `--ink` on `--surface-accent` | 10.70:1 | 4.5:1 | PASS |
| Forest dark | Muted ink on sunken surface | `--ink-muted` on `--surface-sunken` | 7.44:1 | 4.5:1 | PASS |
| Forest dark | Button label on brand fill | `--on-brand` on `--brand` | 5.65:1 | 4.5:1 | PASS |
| Forest dark | Button label on brand hover fill | `--on-brand` on `--brand-hover` | 7.09:1 | 4.5:1 | PASS |
| Forest dark | Label on accent fill | `--on-accent` on `--accent` | 7.51:1 | 4.5:1 | PASS |
| Forest dark | Brand link text on background | `--brand-text` on `--bg` | 7.09:1 | 4.5:1 | PASS |
| Forest dark | Brand link hover on background | `--brand-text-hover` on `--bg` | 8.83:1 | 4.5:1 | PASS |
| Forest dark | Brand link on sunken surface | `--brand-text` on `--surface-sunken` | 9.55:1 | 4.5:1 | PASS |
| Forest dark | Focus ring against background | `--focus` on `--bg` | 7.09:1 | 3.0:1 | PASS |
| Forest dark | Hairline border visibility | `--border-strong` on `--bg` | 2.26:1 | 1.2:1 | PASS |
| Forest dark | Success text | `--success` on `--bg` | 6.92:1 | 4.5:1 | PASS |
| Forest dark | Warning text | `--warning` on `--bg` | 9.28:1 | 4.5:1 | PASS |
| Forest dark | Danger text | `--danger` on `--bg` | 7.45:1 | 4.5:1 | PASS |
| Forest dark | Inverse ink on inverse surface | `--ink-inverse` on `--surface-inverse` | 12.67:1 | 4.5:1 | PASS |
| Forest dark | Ink on raised forest surface | `--ink` on `--surface-raised` | 10.70:1 | 4.5:1 | PASS |
| Forest dark | Muted ink on raised forest surface | `--ink-muted` on `--surface-raised` | 4.67:1 | 4.5:1 | PASS |
| Forest dark | Brand link on raised forest surface | `--brand-text` on `--surface-raised` | 5.99:1 | 4.5:1 | PASS |
| Forest dark | Brand fill against forest canvas | `--brand` on `--surface` | 5.65:1 | 3.0:1 | PASS |
<!-- END GENERATED CONTRAST TABLE -->

### Two rules that come out of this data

1. **`--brand` (`#86bd42`) is never text on a light surface** — 2.24:1. Use
   `--brand-text` (`green-700`). This was the single largest defect on the old
   site, and it sat on the primary call to action.
2. **`--ink-subtle` is 3.61:1** — large text and non-text UI only. Never body copy.

## Focus

Every interactive element shows a visible focus ring. Never `outline: none`
without an equivalent replacement.

```css
:focus-visible {
  outline: var(--focus-width) solid var(--focus);  /* 3px */
  outline-offset: var(--focus-offset);             /* 2px */
  border-radius: inherit;
}
```

`:focus-visible` rather than `:focus`, so mouse users don't see rings on click but
keyboard users always do. The ring colour changes with context — `green-600` on
light, `green-300` on the forest canvas — so it stays visible on either.

## Targets and spacing

- Minimum interactive target: **44 × 44px**. A 32px-tall tag chip needs vertical
  padding on its hit area even if the visible pill stays small.
- Adjacent targets are separated by at least `--space-2` (8px).
- Text links inside body copy are exempt from the size rule but must be
  distinguishable by more than colour — underline them.

## Colour is never the only signal

Form validation states carry an icon and text, not just a red border. Tags that
denote a service category carry the category name, not just a hue. Charts label
their series directly rather than relying on a legend keyed only by colour.

## Motion

`prefers-reduced-motion: reduce` zeroes every duration token, so anything built on
the tokens is already compliant. Hand-written keyframes and scroll effects must
guard themselves — see `foundations/motion.md`. The page must be fully readable
with all motion removed.

## Structure

- One `<h1>` per page. Heading levels descend without skipping — visual size is a
  token, document structure is the level.
- Landmarks on every page: `<header>`, `<nav>`, `<main>`, `<footer>`.
- A "skip to content" link as the first focusable element.
- Images carry meaningful `alt`; decorative images carry `alt=""`.
- Icon-only buttons carry an `aria-label`. This includes the social icons in the
  footer and the mobile menu toggle.

## Forms

- Every input has a visible, associated `<label>`. Placeholder text is not a
  label — it disappears on focus and fails contrast in most implementations.
- Errors are announced (`aria-live="polite"`), described (`aria-describedby`), and
  say what to do, not just what is wrong.
- Required fields are marked in text, not only with an asterisk.

## Content

- Link text makes sense out of context. "Read the Limassol Agora case study", not
  "Read more" — a screen-reader user listing links hears only the link text.
- Language is set on `<html lang="en">`.
- Case-study metrics are given as text, not baked into images. A number inside a
  JPEG is invisible to search engines and screen readers alike.

## What to check before shipping a page

1. Tab through it. Every interactive element reachable, ring always visible, order
   matches the visual order.
2. Zoom to 200%. No content lost, no horizontal scroll.
3. Run the contrast script if any colour changed.
4. Turn on reduced motion. Page still readable and complete.
5. Check headings in outline view. One `h1`, no skipped levels.
