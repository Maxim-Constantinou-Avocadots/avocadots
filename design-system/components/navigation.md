# Navigation — header, dropdown, footer

## Header

Current structure: logo · Home · Services (dropdown) · Our Work · About Us ·
Careers · Blogs · "Contact Us" · "Start Now".

That is **seven nav items plus two buttons** — at the top of what a visitor can
hold in mind. Two recommendations:

- Drop "Home" from the nav. The logo is the home link on every site; the slot is
  better spent elsewhere or left empty.
- Ship **one** header CTA, not two. "Contact Us" and "Start Now" go to the same
  place conceptually and split the click. Keep "Start now" as the primary; move
  "Contact" into the nav list or the footer.

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-4) var(--gutter);
  background: var(--surface);
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-base) var(--ease-standard),
              box-shadow   var(--duration-base) var(--ease-standard);
}
.header[data-scrolled="true"] {
  border-bottom-color: var(--border);
  box-shadow: var(--elevation-1);
}

.nav__link {
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  color: var(--ink);
  font-size: var(--text-base);
  font-weight: var(--weight-medium);
  text-decoration: none;
}
.nav__link:hover { color: var(--brand-text); }
.nav__link[aria-current="page"] { color: var(--brand-text); }
.nav__link:focus-visible {
  outline: var(--focus-width) solid var(--focus);
  outline-offset: var(--focus-offset);
}
```

The header gains its border and shadow **only once scrolled** — a hairline under a
header sitting on its own hero is a line for no reason.

`aria-current="page"` marks the active item. Don't mark it with colour alone; a
weight change or an underline should accompany it.

## Services dropdown

Six items: Branding, Web Design, E-Commerce, Digital Marketing, CRM, GEO.

```css
.dropdown__panel {
  position: absolute;
  min-width: 260px;
  padding: var(--space-3);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--elevation-3);
}
.dropdown__item {
  display: block;
  padding: var(--space-3);
  border-radius: var(--radius-md);
  color: var(--ink);
  text-decoration: none;
}
.dropdown__item:hover { background: var(--surface-sunken); }
.dropdown__item-desc { font-size: var(--text-sm); color: var(--ink-muted); }
```

**Behaviour.**

- Opens on hover *and* on focus, with a ~120ms open delay and ~250ms close delay.
  No delay means the menu flickers as the pointer crosses it.
- `Escape` closes and returns focus to the trigger.
- The trigger is a `<button aria-expanded>`, not a bare link — a control that
  opens something is a button.
- Arrow keys move between items once open.
- Hover alone is never the only way in. Keyboard and touch users need the click
  path, so the trigger must also toggle on click.

Give each service a one-line description in the panel. Six bare words make a
visitor guess; "E-Commerce — Shopify builds, migrations, checkout optimisation"
does not.

## Mobile

Below 1024px the nav collapses to a toggle.

- The toggle is a `<button>` with `aria-expanded` and `aria-label="Menu"`.
- The open panel traps focus and closes on `Escape`.
- Lock body scroll while open — but preserve scroll position, or the page jumps to
  the top on close.
- Nav items are at least 44px tall with 8px between them.
- Put the primary CTA at the **bottom** of the open panel as a full-width button,
  where a thumb reaches.

## Footer

Current structure is four columns — General, Services, Company, Social — carrying
roughly 20 links. That is a reasonable footer for a site this size; it mainly needs
tightening.

```css
.footer { background: var(--surface-inverse); color: var(--ink-inverse);
          padding-block: var(--section-md); }
.footer__grid { display: grid; gap: var(--space-8);
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
.footer__heading {
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--ink-muted-inverse);
  margin-bottom: var(--space-4);
}
.footer__link { display: block; padding-block: var(--space-2);
                color: var(--ink-inverse); text-decoration: none; opacity: 0.85; }
.footer__link:hover { opacity: 1; text-decoration: underline; }
```

The footer is a forest-dark surface, so wrap it in `.on-dark` and the tokens
resolve correctly with no dark-specific rules.

**Notes.**

- Remove duplicates. "FAQ" currently appears in two columns and "Blog" in three
  forms across the footer and nav.
- Social icons are icon-only links and each needs an `aria-label` — six unlabelled
  icons is six "link" announcements in a row.
- Keep the legal row (privacy, terms, company registration, © year) visually
  separate at `--text-sm` and `--ink-muted-inverse`.
- The footer is the right home for the second CTA displaced from the header.
