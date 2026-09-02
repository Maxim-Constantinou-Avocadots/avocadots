# Service page pattern

Derived from a direct comparison of two live service pages:

- **`/web-design`** — the page to move toward
- **`/digital-marketing`** — the page to move away from

Both were measured, not eyeballed. The finding that matters most:

> **The two pages are almost exactly the same length — 665 words versus 702.**
> The weaker page is the *longer* one.

So the gap is not effort, budget or word count. It is a difference in whose side
of the desk the page is written from.

---

## The diagnosis in one line

**`/web-design` is written from the buyer's side. `/digital-marketing` is written
from the agency's side.**

Every other difference follows from that.

| | `/web-design` | `/digital-marketing` |
| --- | --- | --- |
| Words | ~665 | ~702 |
| Content images | **20** | 7 |
| Project cards | 7, each labelled by sector | 4 |
| Proof in the hero | 4 credentials | none |
| Problem named before the pitch | yes | no |
| Feature framing | client outcomes | agency process |
| Primary CTA | "Book a Call With Andreas" | "Book a Free Digital Marketing Consultation" |
| Vaguest CTA repeated | "Start Now" ×2 | **"Start Now" ×10** |
| FAQ | buyer questions | 3 of 7 are search-bait |

---

## The seven moves that make `/web-design` work

### 1. Proof in the first screenful

A credential bar sits directly under the hero:

> 150+ Websites Delivered · 30-Day Launch Guarantee · Certified Wix Partner ·
> Shopify Experts

Four claims, one of which is a **guarantee with a number attached**. The
digital-marketing hero offers a good line — *"Digital marketing that turns clicks
into customers"* — and then nothing to back it.

**Rule:** every service page carries three to four proof points above the fold.
At least one is a number.

### 2. Name the reader's suspicion before pitching

> **"Most Websites Look Fine. Most Websites Don't Perform."**

That is the reader's own private doubt, said out loud, before any selling starts.
It is the same rhetorical move as the homepage's strongest line — *"Most businesses
don't fail from bad ideas — they fail from unclear brands."*

The digital-marketing equivalent is **"Why Digital Marketing Matters"** — a lecture
on the category, delivered to someone who is already shopping for it.

**Rule:** section two names the problem the reader already suspects. Never explain
the category to a buyer who is on the page to buy it.

### 3. Two-beat antithesis for the positioning line

> **"Design attracts attention. Performance earns trust."**

Two short clauses, a pivot in the middle. Compare **"Creativity meets
performance."** — the same idea with the tension removed, and a sentence that would
sit unchanged on any agency site in the world.

**Rule:** positioning lines get a pivot. Claim, then the reason or the counterweight.

### 4. Features are client outcomes, not agency processes

This is the sharpest single contrast on the two pages.

| `/web-design` | `/digital-marketing` |
| --- | --- |
| Built to be Found | Strategy & Funnel Design |
| Built to Convert | Creative & Content |
| Built to Grow With You | Campaign Setup & Management |
| Built to Last | Tracking & Optimization |
| | Reporting & Insights |

The left column is four things **the client's website will do**. The right column is
five things **the agency will do at its desk**. A buyer cares about the left.

The web-design cards also carry the deliverables underneath — *"SEO, AI Visibility
(GEO), Speed Optimization, Multi-language"* — so the outcome is the headline and
the mechanism is the detail. That ordering is the whole trick.

**Rule:** headline the outcome, sub-list the mechanism. Never headline your own
process. And "The Unified Performance System" is a name for a process that did not
need one — a proprietary label on ordinary work reads as insecurity.

### 5. Show the work, at volume

**20 content images against 7.** Seven project cards, each tagged by sector
(Hospital, Bar, Properties, Logistics, Event, Construction, Entertainment), against
four.

For a design agency this is the entire argument. The digital-marketing page asks to
be believed; the web-design page shows the receipts.

**Rule:** minimum six project cards per service page, each labelled by sector so a
prospect can find themselves in the list.

### 6. A person, not a process

> **"Book a Call With Andreas"** vs **"Book a Free Digital Marketing Consultation"**

Four words against six. A named human against a category noun. One reads like the
next step; the other reads like a form.

**Rule:** the primary CTA on a service page names the person the prospect will
actually speak to.

### 7. Answer buyer questions, not search queries

`/web-design` asks: *Can you redesign our existing website? Do you provide ongoing
support? Do you handle SEO and optimization?* — questions a prospect has.

`/digital-marketing` asks: *What are the best digital advertising platforms in
Cyprus? What is the main difference between paid digital marketing and organic
digital marketing? What are the main advantages of digital marketing over
traditional marketing?* — questions typed into Google by someone who is not yet a
buyer.

Three of its seven FAQs are search-bait wearing an FAQ costume. They push the
buyer's real questions further down the page and make the section feel like content
marketing rather than a sales conversation.

**Rule:** the FAQ answers the objections that stop a deal. Keyword pages belong in
the blog, where the site already has 74 of them.

---

## The template

```
1  Hero                headline · one-line promise · 3–4 proof points · primary CTA
2  The problem         name the reader's suspicion. No CTA.
3  Positioning         two-beat antithesis + the client-side benefit list
4  The work            6+ project cards, each sector-labelled → "View all projects"
5  What you get        4 outcome-headlined cards, mechanism sub-listed
6  Mid-page CTA        named-human booking
7  FAQ                 5–7 buyer objections. No search-bait.
8  Contact form        short. See components/forms.md
9  Cross-sell          one adjacent service
10 CTA band            see components/cta-band.md
```

Section 2 is the one most often skipped and the one that does the most work.

## Anti-patterns, named

| Anti-pattern | Where it shows | Instead |
| --- | --- | --- |
| Category education | "Why Digital Marketing Matters" | Name the reader's problem |
| Process as feature | "Strategy & Funnel Design" | "Built to be Found" |
| Proprietary methodology name | "The Unified Performance System" | Describe the work plainly |
| Frictionless abstraction | "Creativity meets performance." | Add the pivot |
| Corporate CTA | "Book a Free Digital Marketing Consultation" | "Book a call with Andreas" |
| Vague CTA on repeat | **"Start Now" ×10** | One clear label per job |
| Search-bait FAQ | "…best platforms in Cyprus?" | Move it to the blog |
| Telling instead of showing | 7 images | 20 |

## Defects on the good page too

`/web-design` is the better page, not a finished one. Three things to fix before it
becomes the reference:

- **18 `<h1>` elements.** There should be one. This is a real accessibility and SEO
  defect, and it is worse here than on `/digital-marketing`, which has two. See
  `../accessibility.md` on heading structure.
- **Four stray "Add" links** — unedited Wix component defaults, the same defect
  found on the homepage.
- **Three copy errors:** "Certified **WIx** Partner", "Higher **Convertsion**
  Rates", and "Built **To** be Found" against "Built **to** be Found" in the same
  component.

## Applying this to the other service pages

`/digital-marketing` is not the only page written from the agency's side. Work in
this order, rewriting to the template above:

1. **`/digital-marketing`** — the largest gap, and a flagship service.
2. **`/ecommerce-shopify`** and **`/logo-branding-design`** — the other two primary
   lines.
3. **`/crm`, `/cro`, `/generative-engine-optimisation`, `/email-marketing`** — the
   secondary lines.

For each, the fastest meaningful edit is usually the same three: add the hero proof
bar, replace the process list with outcome-headlined cards, and change the CTA to
name a person.
