#!/usr/bin/env node
/**
 * Generates tokens/wix-studio.css — the single block to paste into the
 * Wix Studio CSS Editor.
 *
 * Wix cannot @import, so the paste-ready file has to be self-contained.
 * Generating it from tokens.css keeps it from drifting out of sync.
 *
 *   node design-system/build-wix-css.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const read = (f) => readFileSync(join(here, 'tokens', f), 'utf8');

const header = `/* ==========================================================================
   Avocadots Design System — Wix Studio CSS Editor block
   --------------------------------------------------------------------------
   GENERATED FILE — do not edit.
   Edit tokens/tokens.css or tokens/wix-classes.css, then run:
       node design-system/build-wix-css.mjs

   Paste the whole of this file into Wix Studio:
       Site Styles  →  CSS Editor

   Site Colors and Text Themes are set separately, in the editor panels.
   See design-system/wix-mapping.md for the slot-by-slot table.
   ========================================================================== */

`;

const out = header + read('tokens.css') + '\n\n' + read('wix-classes.css');
writeFileSync(join(here, 'tokens', 'wix-studio.css'), out);

const lines = out.split('\n').length;
const bytes = Buffer.byteLength(out, 'utf8');
console.log(`wix-studio.css written — ${lines} lines, ${(bytes / 1024).toFixed(1)} KB`);
