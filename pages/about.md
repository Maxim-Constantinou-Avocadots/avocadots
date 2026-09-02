# About page — build spec

Live reference: `pages/about.html` (published as an Artifact).
Replaces: `/about-avocadots-design-studio`.

Built entirely on the design system — every colour is a semantic token, the type
is the system's fluid scale, spacing is the 8pt rhythm, and the section rhythm
alternates white → tint → forest as `foundations/layout.md` prescribes.

---

## The idea

Their mission line is **"To engineer growth that feels human."** That sentence is
the page. So the composition alternates:

- **Engineered** — a credential bar, a dated origin arc, a systems diagram, a
  platform matrix.
- **Human** — nine people identified by their quirks rather than their titles.

The current About page states that mission and then illustrates it with **stock
abstract photography** — the image credits in the markup name Luca Bravo, Milad
Fakurian, Christian Lue and Maxim Berg. For a studio selling art direction, stock
gradients on the About page are the single most expensive detail on the site.
This page has no stock imagery anywhere, by design.

## Section order

| # | Section | Canvas | Job |
| --: | --- | --- | --- |
| 1 | Hero + credential bar | White | Mission line, then proof in the first screenful |
| 2 | Origin + dated arc | Tint (`--surface-sunken`) | Where this came from, in their own words |
| 3 | **The engine** | Forest (`.on-dark`) | Draw the one idea they repeat everywhere |
| 4 | Values | White | Five real values, one claim each |
| 5 | The nine | Forest (`.on-dark`) | The human half of the mission |
| 6 | Platforms | Tint | Certifications as capability, not badges |
| 7 | Close + contact | Forest | Named-human CTA, then the details |

Two forest sections plus the closing band is the ceiling set in
`foundations/layout.md` — spend the dark canvas twice, not five times.

## The engine diagram

The centrepiece, and the one genuinely new thing on the page.

They say *"Not services. Not silos. One engine"* and *"one unified growth engine"*
across the homepage, the mission page and the services page — and have never drawn
it. The diagram takes three labelled inputs (Branding, Web design, Digital
marketing), converges them through a single node, and outputs the three words
their own mission uses: **clarity, conversion, momentum**.

It is inline SVG with a `viewBox`, so it scales cleanly and the labels stay real
text — searchable, translatable, and readable by a screen reader through the
`aria-label` on the `<svg>`.

**In Wix:** add it as an SVG (Add → Vector Art → Upload SVG). Do not export it as a
PNG — the labels have to stay text. It scrolls horizontally inside its container
below ~620px rather than shrinking to illegibility.

## The team cards — inverted hierarchy

The deliberate move: **name large, quirk as the body, role demoted to a small
label at the bottom.**

Job titles are interchangeable across every agency in Cyprus. "Brings her dog
Zizel" is not. Every quirk on the page is drawn from the team's existing profiles —
nothing invented:

| Person | Role | Line |
| --- | --- | --- |
| Andreas Hadjigeorgiou | Founder & CEO | AI, data science, growth analytics. Reads at lightning speed. |
| Paris | COO | A sharp design eye, and the in-house joker. |
| Maxim | Web Designer | Obsessed with motion and the psychology behind a layout. |
| Anna | Web Designer | Focused, steady, reliable. |
| Olga | Project Manager | The calm in the storm. An interior designer, too. |
| Charis | Branding Designer | Sees every brand as a living story. |
| Christina | Digital Marketing Executive | Creativity with structure — and her dog, Zizel. |
| Andreas | Technical Specialist | Solves the technical problems, efficiently. |
| Katerina | Multimedia Designer | An architect by training. Makes the video and graphics. |

**Portraits.** The monogram tiles are placeholders, tinted across
`green-200/300/400` so the grid reads as a graded set. They exist so the page is
complete without faking photography. Replace them with **real portraits, shot
consistently** — same lens, same light, same background, same crop. Nine portraits
shot the same way is itself a design statement; nine shot differently is a
liability. The current page runs both colour *and* greyscale versions of each
person, which is two treatments where there should be one.

## Copy that needs a decision

Three things I could not resolve from public information — flagged rather than
guessed:

1. **Two people named Andreas.** The CEO and the Technical Specialist. The page
   currently gives the founder his surname and the other Andreas none, which reads
   as an oversight. Give both a surname, or give the second a distinguishing role
   line.
2. **"Five years"** — the current page says five years of operation from a 2020
   founding, which is now six. This page says *"Founded 2020"* and *"Five years
   later…"* in the narrative. Update both to whatever is true at publication, and
   prefer the founding year over a duration so it never goes stale again.
3. **Team size.** Nine people are profiled. If the real number is higher, the
   credential bar and the "The nine" heading both need changing — they are written
   to be checkable.

## Defects in the current page this fixes

| Current | This page |
| --- | --- |
| Stock abstract photography (four credited photographers) | No stock imagery |
| No statistics, though the homepage has four | Credential bar in the first screenful |
| Katerina's profile duplicated | Nine unique entries |
| Typo: *"cares about your business grow"* | Rewritten |
| Says "four core principles", lists five | Five, stated as five |
| Full services list duplicated from `/services` | One line, then a link — About is not a services page |
| "Start Now" ×6 on service tiles | One primary CTA, naming a person |
| Reviews mentioned but not shown | Left out rather than promised — see below |

## What would make it stronger

**Testimonials are the missing section.** The current page says *"explore our real
client reviews and testimonials"* and links away. A named quote from a client, on
this page, would do more than any of the copy — About pages are read by people
deciding whether to trust you. Two or three quotes belong between Values and the
team, using the testimonial component in `components/data-display.md`. I left the
slot out rather than build a section around content that doesn't exist yet.

**An office photograph.** One real, wide, un-styled shot of the studio in Nicosia,
full-bleed between the arc and the engine. Not a stock desk.

## Building it in Wix Studio

1. Apply the Site Colours and Text Themes first (`design-system/wix-mapping.md`) —
   this page assumes them.
2. Paste `design-system/tokens/wix-studio.css` into the CSS Editor if not already
   done. This page uses `on-dark`, `eyebrow`, `btn`, `btn-primary`,
   `btn-secondary` and `card` from that block.
3. Build sections top-down. Each is a standard Wix section; the forest ones carry
   the `on-dark` class and need no other colour settings.
4. Set section padding with `section-md`, and `section-lg` on the hero and close.
5. The credential bar, arc, values and team are all CSS Grid — in Wix these are
   repeaters or grid layouts. Team grid: `repeat(auto-fill, minmax(250px, 1fr))`.

## Accessibility

Verified against `design-system/accessibility.md`:

- **One `<h1>`.** The mission line. (The current `/web-design` page has 18 — do not
  copy that pattern here.)
- Every colour pair passes AA. The first draft of this page used `--ink-subtle`
  for four pieces of small text — the team card roles measured **2.96:1** — and all
  four were moved to `--ink-muted`. That token is 3.61:1 and is reserved for large
  text and non-text UI; it is not a body-copy colour.
- The monogram tiles are `aria-hidden` — the name follows in real text.
- The SVG carries an `aria-label` describing what it shows.
- Contact details are a `<dl>`, with real `tel:` and `mailto:` links.
- Reduced motion is honoured; nothing on the page depends on animation to be read.
