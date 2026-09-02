# Applying this system in Wix Studio

avocadots.com is a Wix Studio site, so the system has to be entered through the
editor. This document is the bridge: every token below maps to a specific Wix
control, and the mapping stays inside Wix's real limits.

**What Wix Studio gives you**

| Feature | Limit | What it controls |
| --- | --- | --- |
| Site Colors | up to 25 renameable slots (6 by default) | Every colour picker in the editor |
| Text Themes | H1–H6 plus paragraph styles | Global typography |
| Max Width | one global value | Container width |
| Page Transitions | one global setting | Between-page motion |
| CSS Editor | custom classes + media queries | Everything else |

**Important:** the colour and type layers are applied by hand in the editor.
There is no API for editor-side design settings, so nobody can script this — which
is exactly why the mapping is written down.

---

## Step 1 — Site Colors

Site Styles → Colors. Set these 20 slots and **rename each one**. Renaming is what
turns an anonymous swatch grid into a system a team can use correctly.

The first six keep Wix's built-in roles, so Wix's own components and apps inherit
the right colours automatically.

| Slot | Rename to | Value | Token | Wix's built-in role |
| --: | --- | --- | --- | --- |
| 1 | Page background | `#ffffff` | `--bg` | Primary background |
| 2 | Surface sunken | `#f8faf8` | `--surface-sunken` | Secondary background |
| 3 | Disabled | `#c9d1cb` | `--border-strong` | Disabled states |
| 4 | Ink muted | `#5e6b62` | `--ink-muted` | Secondary text |
| 5 | Ink | `#1c3830` | `--ink` | Primary text |
| 6 | Brand text | `#436421` | `--brand-text` | Links and actions |
| 7 | Brand fill | `#86bd42` | `--brand` | — |
| 8 | Brand fill hover | `#a8ce76` | `--brand-hover` | — |
| 9 | Brand fill active | `#c7e0a6` | `--brand-active` | — |
| 10 | Brand text hover | `#334c1a` | `--brand-text-hover` | — |
| 11 | Focus ring | `#57822a` | `--focus` | — |
| 12 | Tint 50 | `#f2f8ea` | `--surface-accent` | — |
| 13 | Tint 100 | `#e2efd0` | `--green-100` | — |
| 14 | Forest raised | `#24443a` | `--surface-raised` (dark) | — |
| 15 | Forest deep | `#0f1f1a` | `--surface-sunken` (dark) | — |
| 16 | Border | `#e2e7e3` | `--border` | — |
| 17 | Ink subtle | `#7d8a80` | `--ink-subtle` | — |
| 18 | Ink muted on dark | `#a3aea6` | `--ink-muted` (dark) | — |
| 19 | Accent gold | `#eac435` | `--accent` | — |
| 20 | Accent gold tint | `#fdf3d4` | `--gold-100` | — |

Slots 21–25 stay empty, held for future growth.

Status colours (success, warning, danger and their bright variants) are **not**
given slots. They are rarely picked by hand in the editor, and they are defined in
the CSS block in step 4. This keeps the palette a designer sees down to the twenty
colours they should actually be choosing from.

### Colours to remove while you're in there

| Remove | Why |
| --- | --- |
| `#253787` navy | Dropped from the brand |
| `#da2c38` red | No longer a brand colour |
| `#116dff` | Wix stock link blue — never a brand colour |
| `#eef0f1`, `#f0f0f0`, `#8f8f8f`, `#6e6e6e` | Superseded by the neutral ramp |

Wix updates every element using a colour when you change that colour, so replacing
a retired swatch with its ramp equivalent migrates the whole site in one action.
Do this rather than deleting — deleting leaves elements orphaned.

**Do slot 6 first.** It is the links-and-actions role, and moving it from the Wix
blue to `#436421` fixes link contrast site-wide in a single change.

---

## Step 2 — Text Themes

Site Styles → Typography. Fonts: **Manrope** for headings, **Poppins** for
paragraphs.

Wix has fewer heading slots than the scale has steps, so the two display steps
share H1, separated by a custom class.

| Wix slot | Font | Size (desktop) | Weight | Line height | Letter spacing |
| --- | --- | --- | --- | --- | --- |
| H1 | Manrope | 60px | 600 | 1.12 | −0.02em |
| H2 | Manrope | 46px | 600 | 1.12 | −0.02em |
| H3 | Manrope | 34px | 600 | 1.25 | −0.01em |
| H4 | Manrope | 26px | 500 | 1.25 | −0.01em |
| H5 | Manrope | 21px | 500 | 1.25 | 0 |
| H6 | Manrope | 18px | 500 | 1.25 | 0 |
| P1 | Poppins | 18px | 400 | 1.65 | 0 |
| P2 | Poppins | 16px | 400 | 1.5 | 0 |
| P3 | Poppins | 14px | 400 | 1.5 | 0 |

The `--text-display` step (80px) is applied with the `.display` custom class from
step 4, on an H1 element — so the document keeps one `h1` and the outline stays
correct.

**Turn on "Scale text"** so type scales between breakpoints rather than jumping.
That is Wix's equivalent of the `clamp()` values in `tokens.css`.

The `--text-xs` step (12px eyebrows) is not a text theme — it is the `.eyebrow`
class in step 4, because it carries uppercase and letter-spacing that would be
wrong as a global paragraph style.

---

## Step 3 — Max Width and Page Transitions

- **Max Width:** `1280px`, matching `--container-max`.
- **Page Transitions:** set once, globally. "Out-In" or "None". Do not set
  per-page transitions — that is how a site becomes inconsistent.

---

## Step 4 — CSS Editor

Paste `tokens/wix-studio.css` into the Wix Studio CSS Editor. It declares the token
custom properties and the custom classes the components need.

Then apply classes to elements in the editor. Wix Studio classes work like any CSS
class: assign it in the inspector, and every element carrying it updates together.

| Class | Apply to |
| --- | --- |
| `on-dark` | Any section on the forest canvas |
| `display` | The hero H1 |
| `eyebrow` | Small uppercase labels above headings |
| `btn` + `btn-primary` / `btn-secondary` / `btn-ghost` | Buttons |
| `card` | Project, service and blog cards |
| `tag` | Category tags |
| `badge` | Awards, featured markers |
| `stat` / `stat-value` / `stat-label` | Case-study metrics |
| `measure` | Body-copy containers |
| `section-sm` / `section-md` / `section-lg` | Section vertical padding |

**A caveat worth knowing:** Wix generates its own class names and its element
styles can be more specific than yours. Where a rule doesn't take, apply the value
through the Wix inspector instead of escalating with `!important` — a stylesheet
full of `!important` is unmaintainable, and Wix will win the next round anyway.

---

## Step 5 — Rollout

Global changes land everywhere at once, so sequence matters. Verify at each stage
before moving on.

1. **Site Colors and Text Themes.** Highest leverage — this alone fixes the
   contrast failure across all 180+ pages. Check the homepage, one service page,
   one case study and one blog post before continuing.
2. **Header and footer.** Seen on every page. Apply nav and footer rules; resolve
   the double header CTA (see `components/navigation.md`).
3. **Templates, not pages.** The case-study, project-listing and blog-post layouts
   are CMS-driven — fixing a template fixes every page built on it. This is where
   the "Tag One / Tag Two / Tag Three" defect gets resolved.
4. **The placeholder sweep.** Search all 62 case studies for "Add paragraph text"
   and remove it. Hours of work, and it stops the portfolio contradicting the
   pitch.
5. **High-traffic pages.** Home, Services, Projects, Contact, About.
6. **The long tail.** Remaining service pages, then blog posts.

## Verify after rollout

- Run `node design-system/verify-contrast.mjs` if any colour value changed.
- Tab through the homepage and one case study: focus ring always visible.
- Check a case-study page at 375px and 1440px.
- Search the live site for `#116dff`, `Tag One`, and `Add paragraph text` — all
  should return nothing.
- Confirm the Site Colors panel shows twenty named slots, not a wall of unnamed
  swatches.
