# Case-study template

62 case studies are live. They are the pages that decide whether a prospect
believes the pitch, and they are currently the weakest pages on the site.

**What is there now:** a title, a short description, four metadata fields
(Industry, Market, Platform, Site Type), an image gallery, and a booking CTA.
Several pages still carry unedited Wix placeholder copy — *"Add paragraph text.
Click 'Edit Text' to update the font, size and more."*

**What is missing:** any statement of what the work achieved. No metrics, no
testimonials, no before-and-after. Every case study says what was built. None says
what changed.

The homepage claims *"We've helped 150+ companies push the limits and start
scaling with clarity."* Not one case study substantiates it. Closing that gap is
the highest-value content work available on this site.

---

## The template

### 1. Header

- **Client name** — `--text-display`, one per page
- **One-line outcome** — `--text-lg`, `--ink-muted`. What changed, in a sentence.
  Not what was built.
- **Hero image** — the strongest single visual

> "Limassol Agora — a market's identity and website, rebuilt around the stalls
> rather than the building."

### 2. Facts strip

Five fields, always in this order. Four already exist on the current pages; only
**Services** is new, and it is derivable from which portfolio categories the
project appears in.

| Field | Example | Source |
| --- | --- | --- |
| Sector | Retail & markets | Taxonomy |
| Market | Cyprus | Known |
| Services | Web design, Branding | Taxonomy |
| Platform | Wix Studio | Known |
| Year | 2026 | Known |

### 3. Challenge — 60–90 words

The client's situation before the work. Specific and concrete: what was failing,
and what it was costing them. If this paragraph could be pasted onto another case
study without anyone noticing, it isn't written yet.

> Avoid: "The client needed a modern website."
> Use: "Traders were listed in a PDF that hadn't been updated in two years.
> Visitors arrived at the market not knowing who would be there or when it opened."

### 4. Approach — 90–140 words

What was done and, more importantly, **why that and not something else**. This is
where judgement shows, and judgement is what the client is actually buying. Two or
three decisions, each with its reasoning.

Avoid listing deliverables. A bullet list of "logo, brand book, website" describes
an invoice, not a project.

### 5. Outcome — the section that has to exist

**Three metrics**, as stat blocks, each with a measurement window:

```
  +38%              4.1s → 1.2s          62
  more enquiries    load time            traders listed
  first 90 days     mobile, LCP          from 0
```

Sources, in order of preference: Google Analytics, Search Console, the client's own
CRM or sales figures, Shopify or platform analytics, PageSpeed/Lighthouse.

**If a project has no measured outcome, do not invent one.** Use the fallback:

> **What changed.** One honest paragraph on the concrete difference the work made.
> Where a number genuinely doesn't exist, a specific qualitative outcome ("the
> market now updates its own trader list weekly, without us") beats a vague number
> every time — and a fabricated number is a liability, not a case study.

Going forward, **agree the measurement before the project starts.** The reason
these pages have no numbers is almost certainly that nobody captured a baseline.
Add "what will we measure, and what is it today?" to kick-off.

### 6. Testimonial — where one exists

Real quote, real name, real role, real company. See `../components/data-display.md`.
Omit the section entirely rather than run an unattributed quote.

### 7. Gallery

Three to eight images. Every one must show something the others don't — five
crops of the same homepage is padding. Caption anything non-obvious.

### 8. Next project

Two or three related case studies, matched by sector or service. Never a dead end.

### 9. CTA band

Closing band with copy matched to this page: "Want results like these?" — not the
generic site-wide sentence. See `../components/cta-band.md`.

---

## Worked example — Limassol Agora

Filled with what is **actually known** from the existing page, with the gaps
marked. This is the honest state of a real case study today, and it shows exactly
what needs collecting.

| Section | Status |
| --- | --- |
| Client name | Known — Limassol Agora |
| One-line outcome | **To write** — currently no outcome statement exists |
| Facts strip | Known — Industry, Market, Platform, Site Type already on the page |
| Services | Derivable — appears under Web Design |
| Challenge | **To write** — no challenge section exists |
| Approach | **To write** — placeholder copy currently occupies this slot |
| Metrics ×3 | **To source** — from Analytics / Search Console for the launch window |
| Testimonial | **To request** — none on file |
| Gallery | Known — images already on the page |
| Next project | **To add** — no cross-links currently |

Every "to write" item is a writing task. Every "to source" item needs one Analytics
export. Neither requires new design work — which is the point: the template is
buildable from what Avocadots already has, plus one round of data collection.

---

## Rollout

62 case studies is too many to rewrite at once. In order:

1. **Six flagship studies** — the ones already featured on the homepage (Scandia,
   Minerva Insurance, Gizet, Limassol Agora, German Medical Institute, Air
   Control). Full template, real metrics.
2. **Purge the placeholders.** Sweep all 62 for "Add paragraph text" and the
   "Tag One / Tag Two / Tag Three" strings. This is a defect fix, not a content
   project, and should happen first — it takes hours, not weeks.
3. **Everything else**, prioritised by traffic, to at least: outcome line, facts
   strip, challenge, approach, gallery.
4. **New projects** ship complete or don't ship.

## Word budget

| Section | Words |
| --- | --- |
| One-line outcome | 12–20 |
| Challenge | 60–90 |
| Approach | 90–140 |
| Outcome prose | 40–70 |
| **Total** | **~200–320** |

Short enough to be read. Long enough to prove something.
