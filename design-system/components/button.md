# Button

The component the old site got most wrong: white labels on a `#86bd42` fill at
2.24:1, on the primary conversion path. Every rule here follows from fixing that.

## Variants

| Variant | Fill | Label | Use |
| --- | --- | --- | --- |
| **Primary** | `--brand` | `--on-brand` (forest) | The one action that matters in this section |
| **Secondary** | transparent, `--border-strong` outline | `--ink` | Alternative action beside a primary |
| **Ghost** | transparent | `--ink` | Low-emphasis, tertiary; toolbars and card footers |
| **Link** | none | `--brand-text`, underlined | Inline in prose |

**One primary button per section.** Two primaries beside each other means neither
is primary. The homepage currently pairs "Work with us" with "Schedule a Meeting" —
that is a primary and a *secondary*, not two primaries.

## Sizes

| Size | Height | Padding X | Text | Use |
| --- | --- | --- | --- | --- |
| `sm` | 36px | `--space-4` | `--text-sm` | Inside cards, tight toolbars |
| `md` | 44px | `--space-5` | `--text-base` | Default |
| `lg` | 52px | `--space-6` | `--text-lg` | Hero, closing CTA band |

`md` is 44px because that is the minimum accessible target. `sm` is below it, so
where an `sm` button stands alone give it a larger hit area than its visible box.

## States

Labels are **forest, not white**. The fill **lifts** on hover rather than
darkening — darkening drops the forest label to 4.15:1 (see `foundations/color.md`).

```
rest     --brand         #86bd42   5.65:1
hover    --brand-hover   #a8ce76   7.09:1   + translateY(-1px)
active   --brand-active  #c7e0a6   8.83:1   + translateY(0)
focus    rest fill + 3px --focus ring, 2px offset
disabled --surface-sunken fill, --ink-subtle label, no pointer events
loading  label stays in place, spinner replaces the icon slot; width is locked
```

Never remove the label on load — a button that collapses to a spinner shifts the
layout under the cursor.

## Reference

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 44px;
  padding-inline: var(--space-5);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-medium);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-standard),
              transform       var(--duration-fast) var(--ease-standard),
              border-color    var(--duration-fast) var(--ease-standard);
}

.btn:focus-visible {
  outline: var(--focus-width) solid var(--focus);
  outline-offset: var(--focus-offset);
}

.btn--primary            { background: var(--brand);        color: var(--on-brand); }
.btn--primary:hover      { background: var(--brand-hover);  transform: translateY(-1px); }
.btn--primary:active     { background: var(--brand-active); transform: translateY(0); }

.btn--secondary          { background: transparent; color: var(--ink);
                           border-color: var(--border-strong); }
.btn--secondary:hover    { background: var(--surface-sunken); border-color: var(--ink-muted); }

.btn--ghost              { background: transparent; color: var(--ink); }
.btn--ghost:hover        { background: var(--surface-sunken); }

.btn--link {
  min-height: 0; padding: 0; background: none;
  color: var(--brand-text);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
.btn--link:hover { color: var(--brand-text-hover); }

.btn[disabled], .btn[aria-disabled="true"] {
  background: var(--surface-sunken);
  color: var(--ink-subtle);
  border-color: var(--border);
  cursor: not-allowed;
  transform: none;
}

.btn--sm { min-height: 36px; padding-inline: var(--space-4); font-size: var(--text-sm); }
.btn--lg { min-height: 52px; padding-inline: var(--space-6); font-size: var(--text-lg); }
```

Because every value is a semantic token, the same markup works unchanged inside a
`.on-dark` section.

## Labels

Say what happens next. Verbs, not nouns. See `../content/voice-and-cta.md` for the
approved set — the old site ran five competing labels plus stray "Add" links left
over from component defaults.

Never "Click here", "Learn more", or "Submit".

## Accessibility

- A button that navigates is an `<a>`; a button that acts is a `<button>`. Getting
  this wrong breaks middle-click, keyboard behaviour and screen-reader announcement.
- Icon-only buttons need an `aria-label`.
- Loading state sets `aria-busy="true"`.
- Never rely on the fill colour alone to mark the primary action — it should also
  be the most prominent by position and size.
