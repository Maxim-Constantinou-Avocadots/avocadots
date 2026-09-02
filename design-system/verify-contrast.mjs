#!/usr/bin/env node
/**
 * Avocadots Design System — contrast verifier.
 *
 * Parses tokens.css, resolves the semantic layer down to real hex values,
 * and checks every foreground/background pair the system actually ships.
 * Exits non-zero if any pair misses its WCAG target.
 *
 *   node design-system/verify-contrast.mjs           # report
 *   node design-system/verify-contrast.mjs --md      # emit the markdown table
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(here, 'tokens', 'tokens.css'), 'utf8');

/* ---- parse -------------------------------------------------------- */
// Split the file into the :root block and the .on-dark block so the two
// contexts resolve independently.
const blockOf = (selector) => {
  const i = css.indexOf(selector);
  if (i === -1) throw new Error(`missing block: ${selector}`);
  const start = css.indexOf('{', i);
  let depth = 0, end = start;
  for (let j = start; j < css.length; j++) {
    if (css[j] === '{') depth++;
    else if (css[j] === '}' && --depth === 0) { end = j; break; }
  }
  return css.slice(start, end);
};

const declsIn = (text) => {
  const out = {};
  for (const m of text.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    out[m[1]] = m[2].trim();
  }
  return out;
};

const light = declsIn(blockOf(':root'));
const dark = { ...light, ...declsIn(blockOf('.on-dark')) };
const gold = { ...light, ...declsIn(blockOf('.on-gold')) };

/** Resolve a token to a hex/rgba string, following var() aliases. */
const resolve = (name, scope, seen = new Set()) => {
  if (seen.has(name)) throw new Error(`circular token: ${name}`);
  seen.add(name);
  const raw = scope[name];
  if (raw === undefined) throw new Error(`undefined token: ${name}`);
  const alias = raw.match(/^var\(\s*(--[a-z0-9-]+)\s*\)$/i);
  return alias ? resolve(alias[1], scope, seen) : raw;
};

/* ---- colour maths -------------------------------------------------- */
const toRgb = (v) => {
  const hex = v.match(/^#([0-9a-f]{6})$/i);
  if (hex) return [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16));
  const rgba = v.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,/\s]+([\d.]+))?\s*\)/i);
  if (rgba) return [+rgba[1], +rgba[2], +rgba[3], rgba[4] === undefined ? 1 : +rgba[4]];
  throw new Error(`cannot parse colour: ${v}`);
};

/** Flatten a translucent foreground over its backdrop before measuring. */
const over = (fg, bg) => {
  const a = fg[3] === undefined ? 1 : fg[3];
  return a === 1 ? fg.slice(0, 3) : [0, 1, 2].map((i) => Math.round(fg[i] * a + bg[i] * (1 - a)));
};

const lum = (rgb) => {
  const c = rgb.slice(0, 3).map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};

const ratio = (fgRaw, bgRaw) => {
  const bg = toRgb(bgRaw);
  const fg = over(toRgb(fgRaw), bg);
  const [a, b] = [lum(fg), lum(bg)];
  return +(((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05))).toFixed(2);
};

/* ---- the pairs the system ships ------------------------------------ */
// target: 4.5 = AA body text · 3 = AA large text and non-text UI
const PAIRS = [
  // [foreground token, background token, target, description]
  ['--ink',               '--bg',              4.5, 'Body ink on page background'],
  ['--ink-muted',         '--bg',              4.5, 'Muted ink on page background'],
  ['--ink-subtle',        '--bg',              3.0, 'Subtle ink — large text / UI only'],
  ['--ink',               '--surface-sunken',  4.5, 'Ink on sunken surface'],
  ['--ink',               '--surface-accent',  4.5, 'Ink on accent tint surface'],
  ['--ink-muted',         '--surface-sunken',  4.5, 'Muted ink on sunken surface'],
  ['--on-brand',          '--brand',           4.5, 'Button label on brand fill'],
  ['--on-brand',          '--brand-hover',     4.5, 'Button label on brand hover fill'],
  ['--on-accent',         '--accent',          4.5, 'Label on accent fill'],
  ['--brand-text',        '--bg',              4.5, 'Brand link text on background'],
  ['--brand-text-hover',  '--bg',              4.5, 'Brand link hover on background'],
  ['--brand-text',        '--surface-sunken',  4.5, 'Brand link on sunken surface'],
  ['--focus',             '--bg',              3.0, 'Focus ring against background'],
  ['--border-strong',     '--bg',              1.2, 'Hairline border visibility'],
  ['--success',           '--bg',              4.5, 'Success text'],
  ['--warning',           '--bg',              4.5, 'Warning text'],
  ['--danger',            '--bg',              4.5, 'Danger text'],
  ['--ink-inverse',       '--surface-inverse', 4.5, 'Inverse ink on inverse surface'],
  ['--on-cta',            '--cta',             4.5, 'Label on the primary CTA'],
  ['--on-cta',            '--cta-hover',       4.5, 'Label on the CTA hover fill'],
  ['--on-highlight',      '--highlight',       4.5, 'Text under the highlighter'],
];

// Category palette — identity colours for team, service and tag markers.
// Each deep tone must carry a white label; each tint a forest one.
const CATEGORY = ['forest','moss','teal','ocean','violet','berry','clay','olive']
  .flatMap((name) => [
    ['--on-cat',      `--cat-${name}`,        4.5, `White label on ${name}`],
    ['--on-cat-tint', `--cat-${name}-tint`,   4.5, `Forest label on ${name} tint`],
  ]);

// The gold canvas is unusually restrictive — white, muted ink and the green
// link colour all fail on it. These pairs exist so that stays enforced.
const GOLD_ONLY = [
  ['--ink',        '--surface-gold', 4.5, 'Ink on a full gold section'],
  ['--ink-muted',  '--surface-gold', 4.5, 'Muted ink on gold'],
  ['--brand-text', '--surface-gold', 4.5, 'Link text on gold'],
  ['--ink',        '--surface-sunken', 4.5, 'Ink on the gold sunken tone'],
  ['--on-cta',     '--cta',          4.5, 'CTA label on gold canvas (inverts to forest)'],
];

const DARK_ONLY = [
  ['--ink',        '--surface-raised', 4.5, 'Ink on raised forest surface'],
  ['--ink-muted',  '--surface-raised', 4.5, 'Muted ink on raised forest surface'],
  ['--brand-text', '--surface-raised', 4.5, 'Brand link on raised forest surface'],
  ['--brand',      '--surface',        3.0, 'Brand fill against forest canvas'],
];

/* ---- run ----------------------------------------------------------- */
const rows = [];
let failures = 0;

for (const [label, scope, list] of [
  ['Light', light, [...PAIRS, ...CATEGORY]],
  ['Forest dark', dark, [...PAIRS, ...DARK_ONLY]],
  ['Gold', gold, GOLD_ONLY],
]) {
  for (const [fg, bg, target, desc] of list) {
    const r = ratio(resolve(fg, scope), resolve(bg, scope));
    const pass = r >= target;
    if (!pass) failures++;
    rows.push({ context: label, desc, fg, bg, ratio: r, target, pass });
  }
}

if (process.argv.includes('--md')) {
  console.log('| Context | Pair | Tokens | Ratio | Target | |');
  console.log('| --- | --- | --- | --: | --: | --- |');
  for (const r of rows) {
    console.log(
      `| ${r.context} | ${r.desc} | \`${r.fg}\` on \`${r.bg}\` | ${r.ratio.toFixed(2)}:1 | ${r.target.toFixed(1)}:1 | ${r.pass ? 'PASS' : '**FAIL**'} |`
    );
  }
} else {
  for (const r of rows) {
    console.log(
      `${r.pass ? 'PASS' : 'FAIL'}  ${String(r.ratio).padStart(6)}:1  (needs ${r.target})  ${r.context.padEnd(11)}  ${r.desc}`
    );
  }
  console.log(`\n${rows.length} pairs checked, ${failures} failing.`);
}

process.exit(failures ? 1 : 0);
