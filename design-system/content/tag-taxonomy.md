# Tag taxonomy

Project cards currently render the literal strings **"Tag One", "Tag Two",
"Tag Three"** — unedited component defaults visible on the live portfolio.

Beyond the immediate defect, tags need to be a **closed vocabulary**. Free-text
tags always drift: "Ecommerce", "E-commerce", "E-Commerce" and "Online store"
become four filters for one idea, and the filter UI quietly stops working.

## Rules

1. Tags come from the lists below. Nothing else.
2. **Maximum three tags per card** — one service, one sector, optionally one
   platform. The fourth tag is never read.
3. Tags are not colour-coded. One tag style; the words carry the meaning. (See
   `../components/tag-badge.md`.)
4. Adding a term is a deliberate decision, recorded here — not something done in
   passing while editing a project.

## Service tags

Mirror the service lines exactly, so portfolio filters and the Services menu agree.

| Tag | Covers |
| --- | --- |
| `Branding` | Identity, strategy, positioning, brand books |
| `Web design` | Websites, UI/UX, responsive builds |
| `E-commerce` | Shopify and online-store builds, migrations, checkout work |
| `Digital marketing` | Paid social, performance ads, retargeting, content |
| `CRM` | CRM setup, integration, automation |
| `SEO` | Search optimisation, technical SEO |
| `GEO` | Generative engine optimisation, AI visibility |
| `CRO` | Conversion rate optimisation |
| `Email marketing` | Campaigns, flows, lifecycle |

Note the casing: **"E-commerce"** and **"Web design"** — sentence case, one hyphen.
The site currently mixes "E-Commerce", "e-commerce" and "Ecommerce".

## Sector tags

Derived from the 62 live case studies, so every existing project has a home.

| Tag | Example clients |
| --- | --- |
| `Healthcare` | German Medical Institute, Odon Dental Clinic, GastroCare, MedSure |
| `Insurance & finance` | Minerva Insurance, Battery Associates |
| `Construction & property` | Hadjiloucas Construction, Themeliotechniki, NTC Properties |
| `Retail & markets` | Limassol Agora, Rare Skin Store, Calizo, Casually, Peggymou |
| `Food & drink` | Eva Bakes Bread, Punin Wine, Rum & Jam |
| `Aviation` | AviAir, Aerojet, Air Control |
| `Automotive & industrial` | Safinpart, TechnoRed, Powersoft |
| `Professional services` | Proactive, Deventor, Tapaas |
| `Education` | The Phonics School |
| `Travel & hospitality` | Vichy Holidays, UC Hall |
| `Arts & culture` | Vima Art Fair, Music Element |
| `Technology` | Gizet, Incito, Loop Mobile, Mobhaus |

Twelve sectors for 62 projects — roughly five each. Enough to be a useful filter,
few enough that every one has substance behind it. A sector with a single project
in it is not a filter, it's a dead end.

## Platform tags

Optional third tag, only where the platform is genuinely a selling point.

`Wix Studio` · `Shopify` · `WordPress` · `Custom build`

## Applying it

- **CMS field type:** in the Wix CMS, make Service and Sector *reference* or
  *selection* fields — not text. This makes drift structurally impossible rather
  than a matter of discipline.
- **Filter UI:** the `/projects` filter currently offers Branding, Digital
  Marketing, E-Commerce, Web Design, SEO. Align it to the service tags above and
  add a second filter row for sector once every project is tagged.
- **Migration:** tag the six flagship projects first, then work through the rest by
  category. Until a project is tagged, show no tags on its card rather than the
  placeholder strings.

## Changing this list

Adding a service tag means a new service line exists. Adding a sector tag means
there are at least two projects in it. Removing a tag means retagging every project
that used it. Record the change here in the same commit.
