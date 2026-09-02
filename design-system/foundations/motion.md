# Motion

Motion should explain a change, not decorate it. If an animation doesn't help
someone understand what just happened or what they can do next, remove it.

## Tokens

| Duration | Value | Use |
| --- | --- | --- |
| `--duration-instant` | 80ms | Colour-only changes: hover tint, focus ring |
| `--duration-fast` | 140ms | Small state changes: buttons, tags, icon flips |
| `--duration-base` | 220ms | The default. Cards, hovers, expanding panels |
| `--duration-slow` | 360ms | Larger surfaces: menus, drawers, accordions |
| `--duration-entrance` | 520ms | Once-per-element entrances on scroll |

| Easing | Curve | Use |
| --- | --- | --- |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default for state changes |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances — fast start, soft landing |
| `--ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exits — things leaving the screen |

Never use `linear` for anything a person watches. Nothing physical moves at a
constant speed, and it reads as cheap.

## Rules

**Animate only `transform` and `opacity`.** They run on the compositor. Animating
`height`, `top`, `width` or `margin` forces layout on every frame and produces
visible jank on mid-range phones. For an accordion, animate `grid-template-rows`
from `0fr` to `1fr`, or transform a wrapper — not `height`.

**Entrances happen once.** An element that re-animates every time it scrolls back
into view is an irritation, not a delight. Trigger once and unobserve.

**Stagger sparingly.** A row of cards can stagger at 60ms intervals. A list of
twenty items cannot — the last item arrives more than a second late and the page
feels broken.

**Hover lifts are 2px.** `translateY(-2px)` with a shadow step. More than 4px and
cards appear to jump.

**Nothing moves more than ~24px on entrance.** Long travel makes a page feel slow
because the reader waits for it to settle.

## Reduced motion

Non-negotiable. `tokens.css` already zeroes every duration under
`prefers-reduced-motion: reduce`, so anything using the duration tokens is handled.
If you write a keyframe animation or a scroll effect by hand, guard it yourself:

```css
@media (prefers-reduced-motion: reduce) {
  .parallax { transform: none !important; animation: none !important; }
}
```

The content must be fully readable with all motion removed. An entrance animation
that starts at `opacity: 0` and never runs leaves an invisible page — so set the
resting state to visible and let the animation move *from* a start state, or gate
the initial state on the media query.

## In Wix Studio

Wix applies its own element animations and a global page transition. Two rules:

1. Set the global page transition once in Site Styles and leave it. Per-page
   transitions are how sites end up feeling inconsistent.
2. Wix's animation presets run longer than this scale. Where a preset is
   configurable, bring it toward `--duration-base` (220ms) for state changes and
   `--duration-entrance` (520ms) for scroll entrances. Reserve entrance animation
   for the first screenful of a page and section headings — not every element.
