#!/usr/bin/env node
/**
 * tokens-check-fallbacks.mjs
 *
 * Os componentes usam `var(--en-token, #fallback)`. O fallback é o valor que
 * renderiza quando o tokens.css NÃO está carregado — e precisa espelhar o
 * valor real do token. Eles dessincronizam fácil a cada mudança de token
 * (foi o que aconteceu pré-09a0661: tokens viraram warm/purple, fallbacks
 * ficaram frios/azul). Ver memória [[project_fallback_sync]].
 *
 * Compara cada fallback hex contra o valor resolvido do token em dist/tokens.css.
 *
 * Uso:
 *   node scripts/tokens-check-fallbacks.mjs           # relatório
 *   node scripts/tokens-check-fallbacks.mjs --check   # falha (exit 1) se houver defasagem — p/ CI
 *   node scripts/tokens-check-fallbacks.mjs --fix      # corrige os fallbacks in-place
 *
 * Pré-requisito: dist/tokens.css buildado (pnpm build:tokens).
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const TOKENS_CSS = `${ROOT}/packages/tokens/dist/tokens.css`;
const COMPONENTS_SRC = `${ROOT}/packages/components/src`;

const MODE = process.argv.includes('--fix') ? 'fix'
  : process.argv.includes('--check') ? 'check'
  : 'report';

if (!existsSync(TOKENS_CSS)) {
  console.error(`❌  dist/tokens.css não encontrado. Rode: pnpm build:tokens`);
  process.exit(2);
}

// ── Mapa nome → valor resolvido (resolve cadeias var(--x)) ───────────────────
const css = readFileSync(TOKENS_CSS, 'utf8');
const map = {};
for (const m of css.matchAll(/^\s*(--en-[a-z0-9-]+):\s*([^;]+);/gm)) map[m[1]] = m[2].trim();

function resolveVal(v, seen = 0) {
  const mm = v.match(/^var\((--en-[a-z0-9-]+)\)$/);
  if (mm && map[mm[1]] && seen < 10) return resolveVal(map[mm[1]], seen + 1);
  return v;
}
const resolved = {};
for (const k in map) resolved[k] = resolveVal(map[k]);

// ── Varre os CSS de componente (ignora .stories.ts: markup de demo) ──────────
const files = execSync(`find '${COMPONENTS_SRC}' -name '*.css'`).toString().trim().split('\n').filter(Boolean);

const stale = [];
let fixedCount = 0;

for (const file of files) {
  let text = readFileSync(file, 'utf8');
  const next = text.replace(/var\((--en-[a-z0-9-]+),\s*(#[0-9a-fA-F]{3,8})\)/g, (full, name, fb) => {
    const want = resolved[name];
    if (want && /^#[0-9a-fA-F]{3,8}$/.test(want) && want.toLowerCase() !== fb.toLowerCase()) {
      stale.push({ file: file.replace(ROOT + '/', ''), name, fb: fb.toLowerCase(), want: want.toLowerCase() });
      return `var(${name}, ${want})`;
    }
    return full;
  });
  if (MODE === 'fix' && next !== text) {
    writeFileSync(file, next);
    fixedCount += stale.filter(s => s.file === file.replace(ROOT + '/', '')).length;
  }
}

// ── Saída ────────────────────────────────────────────────────────────────────
console.log('');
console.log('🎯  eNotas DS — Checagem de fallbacks de tokens');
console.log('─'.repeat(52));

if (stale.length === 0) {
  console.log('  ✅  Todos os fallbacks batem com os tokens atuais.\n');
  process.exit(0);
}

const byVal = {};
for (const s of stale) {
  const k = `${s.fb} → ${s.want}`;
  byVal[k] = (byVal[k] || 0) + 1;
}
console.log(`  Fallbacks defasados: ${stale.length} (em ${new Set(stale.map(s => s.file)).size} arquivos)\n`);
Object.entries(byVal).sort((a, b) => b[1] - a[1]).forEach(([k, n]) =>
  console.log(`  ${String(n).padStart(3)}x  ${k}`));

if (MODE === 'fix') {
  console.log(`\n  ✅  Corrigidos ${fixedCount} fallbacks. Rode: pnpm build:components\n`);
  process.exit(0);
}

if (MODE === 'check') {
  console.log(`\n  ❌  Fallbacks fora de sincronia. Rode: pnpm tokens:check-fallbacks --fix\n`);
  process.exit(1);
}

console.log(`\n  Para corrigir: pnpm tokens:check-fallbacks --fix\n`);
