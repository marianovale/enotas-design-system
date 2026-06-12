#!/usr/bin/env node
/**
 * tokens-cosmos-migrate.mjs
 *
 * Migra os tokens do eNotas DS para os valores do Cosmos DS (hotmart.co).
 *
 * Fonte de verdade (validada): github.com/Hotmart-Org/cosmos-ds (repo privado)
 *   branch master · packages/core/src/tokens/hotmart.co/
 *   - base-color.ts  → paleta primitiva (ramps 50→950)
 *   - theme-light.ts → aliases semânticos (primary, cta, positive/negative/...)
 *   Verificado em 2026-06-12 via `gh api` — os valores abaixo são cópia 1:1.
 *
 * O que muda:
 *   - Paleta de cores primitiva → valores do Cosmos hotmart.co
 *   - Aliases semânticos → apontam para os novos primitivos
 *   - Nomes das CSS vars (--en-*) → NÃO MUDAM (zero rework no HTML/Razor)
 *
 * NOTA: o snapshot `before` em CSS_VAR_CHANGES reflete o estado REAL atual dos
 * tokens (pós-alinhamento estrutural, commit 09a0661) — não a paleta original.
 * Vários CSS vars já são idênticos ao Cosmos; o relatório marca esses com ✓.
 *
 * Uso:
 *   node scripts/tokens-cosmos-migrate.mjs --dry-run   # relatório sem gravar
 *   node scripts/tokens-cosmos-migrate.mjs             # aplica migração
 */

import { writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const TOKENS_SRC = `${ROOT}/packages/tokens/src`;

const DRY_RUN = process.argv.includes('--dry-run');

// ─────────────────────────────────────────────────────────────────────────────
// Cosmos hotmart.co — Paleta Primitiva (base-color.ts) — ramps completos
// Apenas os ramps que a camada semântica do eNotas referencia:
// primary(brand), cta, neutral, green, yellow, red, purple.
// (blue/maroon do Cosmos omitidos de propósito — não usados, seriam dívida.)
// ─────────────────────────────────────────────────────────────────────────────

const BASE = {
  // primary = warm near-black (brand Hotmart) — vira `brand` no eNotas
  primary: {
    50:  '#dcdad6',
    100: '#c3bfb8', // brand-gray
    200: '#a3a09a',
    300: '#878580',
    400: '#6c6966',
    500: '#52514e',
    600: '#3a3936',
    700: '#2e2e2c',
    800: '#242322',
    900: '#181817',
    950: '#0d0d0d', // brand-black — botão primary
  },
  // cta = laranja Hotmart
  cta: {
    50:  '#fff6f3',
    100: '#ffe5dd',
    200: '#ffbfaa',
    300: '#ff9673',
    400: '#ff6531',
    500: '#ff4000', // brand-cta
    600: '#be2b03',
    700: '#922102',
    800: '#671801',
    900: '#400f01',
    950: '#2e0a01',
  },
  // neutral = cinzas quentes (warm gray)
  neutral: {
    0:    '#ffffff',
    25:   '#faf9f7',
    50:   '#f5f3ef',
    100:  '#eae9e7',
    150:  '#dcdad6',
    200:  '#cecbc5',
    250:  '#c3bfb8', // brand-gray
    300:  '#b2afa8',
    350:  '#a3a09a',
    400:  '#96938d',
    450:  '#878580',
    500:  '#7a7773',
    550:  '#6c6966',
    600:  '#5f5e5a',
    650:  '#52514e',
    700:  '#464542',
    750:  '#3a3936',
    800:  '#2e2e2c',
    850:  '#242322',
    900:  '#181817',
    950:  '#131311',
    975:  '#131312',
    1000: '#0d0d0d', // brand-black
  },
  // feedback
  red: {
    50:  '#fee5eb', 100: '#fdbdcf', 200: '#fb90b0', 300: '#fa6591', 400: '#fb3a71',
    500: '#f81352', 600: '#e10042', 700: '#9c0832', 800: '#720425', 900: '#440216', 950: '#170007',
  },
  green: {
    50:  '#e6fbec', 100: '#b7f6cb', 200: '#8eedab', 300: '#63e58c', 400: '#3ddf6f',
    500: '#0bd043', 600: '#06af41', 700: '#098332', 800: '#0a5c24', 900: '#093517', 950: '#06130b',
  },
  yellow: {
    50:  '#fbf5e2', 100: '#f8e9b7', 200: '#f4da8a', 300: '#efcc64', 400: '#edbf41',
    500: '#ffc000', 600: '#b78c24', 700: '#88681b', 800: '#5f4914', 900: '#352a0d', 950: '#141106',
  },
  purple: {
    50:  '#f2ebfd', 100: '#ebe1fc', 200: '#cdb2fa', 300: '#b48ef5', 400: '#a475ff',
    500: '#7225f3', 600: '#5900f1', 700: '#38178f', 800: '#260d60', 900: '#17073a', 950: '#080213',
  },
};

// Helper: emite um ramp inteiro como tokens Style Dictionary
const ramp = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, { value: v, type: 'color' }]));

// ─────────────────────────────────────────────────────────────────────────────
// Novo global/color.json
// ─────────────────────────────────────────────────────────────────────────────

const NEW_COLOR_JSON = {
  color: {
    brand:   ramp(BASE.primary), // brand principal (preto Hotmart — era teal)
    cta:     ramp(BASE.cta),     // laranja Hotmart (era brand.purple)
    neutral: ramp(BASE.neutral), // cinzas quentes
    red:     ramp(BASE.red),
    green:   ramp(BASE.green),
    yellow:  ramp(BASE.yellow),
    purple:  ramp(BASE.purple),
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Novo semantic/action.json — refs validadas contra theme-light.ts
//   primary  → color.primary.950 (preto Hotmart)
//   secondary → outline preto
//   ghost    → hover warm gray
//   danger   → color.negative (red.600)
//   cta      → laranja (uso futuro)
// ─────────────────────────────────────────────────────────────────────────────

const NEW_ACTION_JSON = {
  action: {
    primary: {
      background:           { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d
      'background-hover':    { value: '{color.brand.900}',    type: 'color' }, // #181817
      'background-disabled': { value: '{color.neutral.150}',  type: 'color' }, // #dcdad6
      foreground:           { value: '{color.neutral.0}',    type: 'color' }, // #ffffff
    },
    secondary: {
      background:           { value: 'transparent',          type: 'color' },
      'background-hover':    { value: '{color.neutral.100}',  type: 'color' }, // #eae9e7
      border:               { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d
      foreground:           { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d
    },
    ghost: {
      background:           { value: 'transparent',          type: 'color' },
      'background-hover':    { value: '{color.neutral.100}',  type: 'color' }, // #eae9e7
      foreground:           { value: '{color.neutral.1000}', type: 'color' }, // #0d0d0d
    },
    danger: {
      background:           { value: '{color.red.600}',      type: 'color' }, // #e10042  (= Cosmos negative)
      'background-hover':    { value: '{color.red.700}',      type: 'color' }, // #9c0832
      foreground:           { value: '{color.neutral.0}',    type: 'color' }, // #ffffff
    },
    cta: {
      background:           { value: '{color.cta.500}',      type: 'color' }, // #ff4000
      'background-hover':    { value: '{color.cta.600}',      type: 'color' }, // #be2b03
      foreground:           { value: '{color.neutral.0}',    type: 'color' }, // #ffffff
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Novo semantic/surface.json — refs validadas contra theme-light.ts
//   surface.page    = off-background (neutral.50)
//   border.default  = color.border (neutral.150)
//   border.strong   = neutral.250
//   border.focus    = ring (primary.950)
//   text.secondary  = muted-foreground (neutral.500)
// ─────────────────────────────────────────────────────────────────────────────

const NEW_SURFACE_JSON = {
  surface: {
    page:    { value: '{color.neutral.50}',   type: 'color' }, // #f5f3ef  off-background
    default: { value: '{color.neutral.0}',    type: 'color' }, // #ffffff  background
    raised:  { value: '{color.neutral.0}',    type: 'color' }, // #ffffff  card
    overlay: { value: '{color.neutral.0}',    type: 'color' }, // #ffffff  popover
    sunken:  { value: '{color.neutral.100}',  type: 'color' }, // #eae9e7  muted
  },
  border: {
    default: { value: '{color.neutral.150}',  type: 'color' }, // #dcdad6  border / input-border
    strong:  { value: '{color.neutral.250}',  type: 'color' }, // #c3bfb8  brand-gray
    focus:   { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d  ring (preto)
  },
  text: {
    primary:   { value: '{color.neutral.1000}', type: 'color' }, // #0d0d0d  foreground
    secondary: { value: '{color.neutral.500}',  type: 'color' }, // #7a7773  muted-foreground
    disabled:  { value: '{color.neutral.400}',  type: 'color' }, // #96938d
    inverse:   { value: '{color.neutral.0}',    type: 'color' }, // #ffffff
    brand:     { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d  primary
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Novo semantic/feedback.json — refs validadas contra theme-light.ts
//   success → positive (green),  warning → attention (yellow)
//   danger  → negative (red),    info    → informative (purple)
//   Cosmos usa *-light p/ background e a cor cheia p/ ícone.
// ─────────────────────────────────────────────────────────────────────────────

const NEW_FEEDBACK_JSON = {
  feedback: {
    success: {
      background: { value: '{color.green.100}',  type: 'color' }, // #b7f6cb  positive-light
      foreground: { value: '{color.green.700}',  type: 'color' }, // #098332
      icon:       { value: '{color.green.500}',  type: 'color' }, // #0bd043  positive
    },
    warning: {
      background: { value: '{color.yellow.100}', type: 'color' }, // #f8e9b7  attention-light
      foreground: { value: '{color.yellow.700}', type: 'color' }, // #88681b
      icon:       { value: '{color.yellow.500}', type: 'color' }, // #ffc000  attention
    },
    danger: {
      background: { value: '{color.red.50}',     type: 'color' }, // #fee5eb
      foreground: { value: '{color.red.700}',    type: 'color' }, // #9c0832
      icon:       { value: '{color.red.600}',    type: 'color' }, // #e10042  negative
    },
    info: {
      background: { value: '{color.purple.100}', type: 'color' }, // #ebe1fc  informative-light
      foreground: { value: '{color.purple.700}', type: 'color' }, // #38178f
      icon:       { value: '{color.purple.400}', type: 'color' }, // #a475ff  informative
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Mapeamento de CSS vars para o relatório
// `before` = valor REAL resolvido hoje (color.json + semantic/* atuais)
// `after`  = valor Cosmos (theme-light.ts)
// ─────────────────────────────────────────────────────────────────────────────

const CSS_VAR_CHANGES = [
  { var: '--en-action-primary-background',          before: '#22baa0', after: '#0d0d0d', note: 'teal → preto Hotmart' },
  { var: '--en-action-primary-background-hover',    before: '#12795f', after: '#181817', note: 'teal escuro → quase-preto' },
  { var: '--en-action-primary-background-disabled', before: '#dcdad6', after: '#dcdad6', note: '✓ igual' },
  { var: '--en-action-primary-foreground',          before: '#ffffff', after: '#ffffff', note: '✓ igual' },
  { var: '--en-action-secondary-background-hover',  before: '#f5f3ef', after: '#eae9e7', note: 'warm gray um tom mais escuro' },
  { var: '--en-action-secondary-border',            before: '#c3bfb8', after: '#0d0d0d', note: 'cinza → preto (outline preto)' },
  { var: '--en-action-secondary-foreground',        before: '#0d0d0d', after: '#0d0d0d', note: '✓ igual' },
  { var: '--en-action-ghost-background-hover',      before: '#eae9e7', after: '#eae9e7', note: '✓ igual' },
  { var: '--en-action-ghost-foreground',            before: '#0d0d0d', after: '#0d0d0d', note: '✓ igual' },
  { var: '--en-action-danger-background',           before: '#f13838', after: '#e10042', note: 'vermelho → rosa-vermelho (negative)' },
  { var: '--en-action-danger-background-hover',     before: '#c01f1f', after: '#9c0832' },
  { var: '--en-action-danger-foreground',           before: '#ffffff', after: '#ffffff', note: '✓ igual' },
  { var: '--en-border-default',                     before: '#c3bfb8', after: '#dcdad6', note: 'borda mais clara' },
  { var: '--en-border-strong',                      before: '#96938d', after: '#c3bfb8', note: 'borda forte mais clara' },
  { var: '--en-border-focus',                       before: '#22baa0', after: '#0d0d0d', note: 'teal → preto (ring)' },
  { var: '--en-text-primary',                       before: '#0d0d0d', after: '#0d0d0d', note: '✓ igual' },
  { var: '--en-text-secondary',                     before: '#7a7773', after: '#7a7773', note: '✓ igual' },
  { var: '--en-text-disabled',                      before: '#c3bfb8', after: '#96938d', note: 'disabled mais escuro' },
  { var: '--en-text-brand',                         before: '#22baa0', after: '#0d0d0d', note: 'teal → preto' },
  { var: '--en-surface-page',                       before: '#f5f3ef', after: '#f5f3ef', note: '✓ igual' },
  { var: '--en-surface-sunken',                     before: '#eae9e7', after: '#eae9e7', note: '✓ igual' },
  { var: '--en-feedback-success-background',        before: '#e6f7ec', after: '#b7f6cb', note: 'verde mais vibrante' },
  { var: '--en-feedback-success-icon',              before: '#1a8a3c', after: '#0bd043', note: 'verde vibrante' },
  { var: '--en-feedback-warning-background',        before: '#fff8e1', after: '#f8e9b7' },
  { var: '--en-feedback-warning-icon',              before: '#f59e0b', after: '#ffc000' },
  { var: '--en-feedback-danger-background',         before: '#fde8e8', after: '#fee5eb' },
  { var: '--en-feedback-danger-icon',               before: '#f13838', after: '#e10042' },
  { var: '--en-feedback-info-background',           before: '#ebe1fc', after: '#ebe1fc', note: '✓ igual (já é purple Cosmos)' },
  { var: '--en-feedback-info-foreground',           before: '#38178f', after: '#38178f', note: '✓ igual' },
  { var: '--en-feedback-info-icon',                 before: '#a475ff', after: '#a475ff', note: '✓ igual' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Relatório
// ─────────────────────────────────────────────────────────────────────────────

function printReport() {
  console.log('');
  console.log('🎨  eNotas DS → Cosmos hotmart.co — Mapeamento de Tokens');
  console.log('═'.repeat(60));
  console.log('  Fonte: github.com/Hotmart-Org/cosmos-ds (master)');
  console.log('  packages/core/src/tokens/hotmart.co — validado 2026-06-12');

  console.log('\n📦  PALETA PRIMITIVA\n');
  const primitiveMap = [
    ['color.brand.teal.500 (#22baa0)', 'color.brand.950   (#0d0d0d) — preto Hotmart'],
    ['color.brand.purple.*',           'color.cta.*       (#ff4000) — laranja CTA'],
    ['color.neutral.*  (warm gray)',   'color.neutral.*   (✓ já alinhado)'],
    ['color.danger.500 (#f13838)',     'color.red.600     (#e10042) — vermelho-rosa'],
    ['color.success.500 (#1a8a3c)',    'color.green.500   (#0bd043) — verde vibrante'],
    ['color.warning.500 (#f59e0b)',    'color.yellow.500  (#ffc000) — amarelo'],
    ['color.info.* (#a475ff)',         'color.purple.*    (✓ já é o purple Cosmos)'],
  ];
  primitiveMap.forEach(([before, after]) => {
    console.log(`  ${before.padEnd(34)} →  ${after}`);
  });

  console.log('\n⚡  CSS VARS COM MUDANÇA SIGNIFICATIVA\n');
  const significant = CSS_VAR_CHANGES.filter(c => !c.note || (!c.note.includes('✓') && !c.note.includes('similar')));
  significant.forEach(({ var: v, before, after, note }) => {
    console.log(`  ${v}`);
    console.log(`    antes : ${before}`);
    console.log(`    depois: ${after}${note ? `  ← ${note}` : ''}`);
    console.log('');
  });

  const unchanged = CSS_VAR_CHANGES.filter(c => c.note?.includes('✓'));
  if (unchanged.length) {
    console.log(`  ✓  Sem mudança (${unchanged.length}): ${unchanged.map(c => c.var).join(', ')}`);
  }

  console.log(`\n  Total de CSS vars analisadas: ${CSS_VAR_CHANGES.length}  ·  já idênticas: ${unchanged.length}  ·  mudam: ${CSS_VAR_CHANGES.length - unchanged.length}`);

  console.log('\n✅  O que NÃO muda:');
  console.log('  • Nomes --en-* de todas as CSS vars');
  console.log('  • HTML/Razor Views (.cshtml)');
  console.log('  • CSS dos componentes (.css)');
  console.log('  • Props/variants dos componentes');
  console.log('');
}

// ─────────────────────────────────────────────────────────────────────────────
// Aplicar migração
// ─────────────────────────────────────────────────────────────────────────────

function applyMigration() {
  const files = [
    { path: `${TOKENS_SRC}/global/color.json`,     data: NEW_COLOR_JSON },
    { path: `${TOKENS_SRC}/semantic/action.json`,   data: NEW_ACTION_JSON },
    { path: `${TOKENS_SRC}/semantic/surface.json`,  data: NEW_SURFACE_JSON },
    { path: `${TOKENS_SRC}/semantic/feedback.json`, data: NEW_FEEDBACK_JSON },
  ];

  console.log('📝  Arquivos atualizados:\n');
  for (const { path, data } of files) {
    if (!existsSync(path)) { console.error(`  ❌ Não encontrado: ${path}`); continue; }
    const rel = path.replace(ROOT + '/', '');
    if (DRY_RUN) {
      console.log(`  [dry] ${rel}`);
    } else {
      writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
      console.log(`  ✅  ${rel}`);
    }
  }

  if (!DRY_RUN) {
    console.log('\n  Próximos passos:');
    console.log('  1. pnpm build:tokens          → gera novo dist/tokens.css');
    console.log('  2. pnpm build:components       → rebuild Web Components');
    console.log('  3. pnpm storybook              → validação visual\n');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

printReport();

if (DRY_RUN) {
  console.log('─'.repeat(60));
  console.log('  Modo DRY RUN — nenhum arquivo alterado.');
  console.log('  Para aplicar: node scripts/tokens-cosmos-migrate.mjs\n');
} else {
  applyMigration();
}
