# Forms

The site runs a contact form, a careers application, onboarding forms and several
platform-access request pages. They should all look and behave identically.

## Field

```css
.field { display: flex; flex-direction: column; gap: var(--space-2); }

.field__label {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--ink);
}

.field__input {
  min-height: 44px;
  padding: var(--space-3) var(--space-4);
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--ink);
  transition: border-color var(--duration-fast) var(--ease-standard),
              box-shadow   var(--duration-fast) var(--ease-standard);
}
.field__input::placeholder { color: var(--ink-subtle); }
.field__input:hover  { border-color: var(--ink-subtle); }
.field__input:focus  {
  outline: none;                       /* replaced, not removed */
  border-color: var(--focus);
  box-shadow: 0 0 0 var(--focus-width) color-mix(in srgb, var(--focus) 25%, transparent);
}
.field__hint  { font-size: var(--text-sm); color: var(--ink-muted); }
.field__error { font-size: var(--text-sm); color: var(--danger);
                display: flex; align-items: center; gap: var(--space-1); }

.field--invalid .field__input { border-color: var(--danger); }
.field__input:disabled { background: var(--surface-sunken); color: var(--ink-subtle);
                         cursor: not-allowed; }
```

Font size on inputs is **16px minimum**. Anything smaller makes iOS Safari zoom on
focus, which is the single most common mobile form defect.

## Rules

**Every field has a visible label.** Placeholder text is not a label — it vanishes
the moment someone types, so anyone interrupted mid-form loses the question. It
also fails contrast in most implementations.

**Mark optional fields, not required ones.** On most of these forms nearly
everything is required, so the asterisks become wallpaper. Label the two optional
fields "(optional)" instead.

**Errors say what to do.** "Enter an email address like name@company.com", not
"Invalid input". Show them on blur, not on every keystroke — validating as
someone types tells them they're wrong before they've finished being right.

**Errors are announced and associated:**

```html
<input id="email" aria-invalid="true" aria-describedby="email-error">
<p id="email-error" class="field__error" role="alert">
  Enter an email address like name@company.com
</p>
```

**One column.** Multi-column forms increase completion errors and break badly at
tablet width. The only reasonable pairing is a first-name/last-name row.

**Ask for less.** The contact form is a conversion surface. Every field removed
raises completion. Name, email, one message field, and — if genuinely needed — a
service selector. Budget and phone can wait for the reply.

## Submission

- The submit button is `--primary`, full-width on mobile.
- On submit set `aria-busy="true"` and keep the label visible (see `button.md`).
- Disable the button only *during* the request, never before it — a form that
  gates its own submit button on client-side validity leaves people stuck with no
  explanation.
- Success replaces the form with a confirmation in the same place, focus moved to
  it. Never a bare alert, and never a silent redirect that loses the context.
- Errors that come back from the server appear above the form, focused, listing
  which fields need attention as links to those fields.

## Checkbox, radio, select

- Native controls unless there is a real reason not to — they carry keyboard
  support, screen-reader semantics and mobile pickers for free.
- Custom styling stays at 20px minimum for the control, with the label clickable.
- The full label row is the hit area, not just the 20px box.
- Selects need a visible chevron and must not be used for fewer than four options —
  use radios below that.
