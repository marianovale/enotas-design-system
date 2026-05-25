#!/usr/bin/env node
/**
 * tokens-cosmos-migrate.mjs
 *
 * Migra os tokens do eNotas DS para os valores do Cosmos DS (hotmart.co).
 * Fonte: github.com/Hotmart-Org/cosmos-ds — packages/core/src/tokens/hotmart.co
 *
 * O que muda:
 *   - Paleta de cores primitiva → valores do Cosmos hotmart.co
 *   - Aliases semânticos → apontam para os novos primitivos
 *   - Nomes das CSS vars (--en-*) → NÃO MUDAM (zero rework no HTML/Razor)
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
// Cosmos hotmart.co — Paleta Primitiva (base-color.ts)
// ─────────────────────────────────────────────────────────────────────────────

const BASE = {
  // primary = warm near-black (brand Hotmart)
  primary: {
    50:  '#dcdad6',
    100: '#c3bfb8',
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
    500: '#ff4000',
    600: '#be2b03',
    700: '#922102',
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
    600:  '#5f5e5a',
    650:  '#52514e',
    700:  '#464542',
    750:  '#3a3936',
    800:  '#2e2e2c',
    850:  '#242322',
    900:  '#181817',
    950:  '#131311',
    1000: '#0d0d0d', // brand-black
  },
  // feedback
  red:    { 50: '#fee5eb', 100: '#fdbdcf', 500: '#f81352', 600: '#e10042', 700: '#9c0832' },
  green:  { 50: '#e6fbec', 100: '#b7f6cb', 500: '#0bd043', 600: '#06af41', 700: '#098332' },
  yellow: { 50: '#fbf5e2', 100: '#f8e9b7', 500: '#ffc000', 600: '#b78c24', 700: '#88681b' },
  purple: { 50: '#f2ebfd', 100: '#ebe1fc', 400: '#a475ff', 500: '#7225f3', 700: '#38178f' },
  blue:   { 50: '#e3f5fb', 100: '#b4e5f8', 500: '#00bfff', 600: '#1e85b4', 700: '#186384' },
};

// ─────────────────────────────────────────────────────────────────────────────
// Novo global/color.json
// ─────────────────────────────────────────────────────────────────────────────

const NEW_COLOR_JSON = {
  color: {
    // brand principal (preto Hotmart — era teal)
    brand: {
      500: { value: BASE.primary[500], type: 'color' },
      600: { value: BASE.primary[600], type: 'color' },
      700: { value: BASE.primary[700], type: 'color' },
      800: { value: BASE.primary[800], type: 'color' },
      900: { value: BASE.primary[900], type: 'color' },
      950: { value: BASE.primary[950], type: 'color' },
      50:  { value: BASE.primary[50],  type: 'color' },
      100: { value: BASE.primary[100], type: 'color' },
      200: { value: BASE.primary[200], type: 'color' },
      300: { value: BASE.primary[300], type: 'color' },
      400: { value: BASE.primary[400], type: 'color' },
    },
    // cta = laranja Hotmart (era brand.purple)
    cta: {
      500: { value: BASE.cta[500], type: 'color' },
      600: { value: BASE.cta[600], type: 'color' },
      700: { value: BASE.cta[700], type: 'color' },
    },
    // neutral = cinzas quentes
    neutral: {
      0:    { value: BASE.neutral[0],    type: 'color' },
      25:   { value: BASE.neutral[25],   type: 'color' },
      50:   { value: BASE.neutral[50],   type: 'color' },
      100:  { value: BASE.neutral[100],  type: 'color' },
      150:  { value: BASE.neutral[150],  type: 'color' },
      200:  { value: BASE.neutral[200],  type: 'color' },
      250:  { value: BASE.neutral[250],  type: 'color' },
      300:  { value: BASE.neutral[300],  type: 'color' },
      400:  { value: BASE.neutral[400],  type: 'color' },
      500:  { value: BASE.neutral[500],  type: 'color' },
      600:  { value: BASE.neutral[600],  type: 'color' },
      700:  { value: BASE.neutral[700],  type: 'color' },
      800:  { value: BASE.neutral[800],  type: 'color' },
      900:  { value: BASE.neutral[900],  type: 'color' },
      950:  { value: BASE.neutral[950],  type: 'color' },
      1000: { value: BASE.neutral[1000], type: 'color' },
    },
    // feedback
    red:    {
      50:  { value: BASE.red[50],  type: 'color' },
      100: { value: BASE.red[100], type: 'color' },
      500: { value: BASE.red[500], type: 'color' },
      600: { value: BASE.red[600], type: 'color' },
      700: { value: BASE.red[700], type: 'color' },
    },
    green:  {
      50:  { value: BASE.green[50],  type: 'color' },
      100: { value: BASE.green[100], type: 'color' },
      500: { value: BASE.green[500], type: 'color' },
      600: { value: BASE.green[600], type: 'color' },
      700: { value: BASE.green[700], type: 'color' },
    },
    yellow: {
      50:  { value: BASE.yellow[50],  type: 'color' },
      100: { value: BASE.yellow[100], type: 'color' },
      500: { value: BASE.yellow[500], type: 'color' },
      600: { value: BASE.yellow[600], type: 'color' },
      700: { value: BASE.yellow[700], type: 'color' },
    },
    purple: {
      50:  { value: BASE.purple[50],  type: 'color' },
      100: { value: BASE.purple[100], type: 'color' },
      400: { value: BASE.purple[400], type: 'color' },
      500: { value: BASE.purple[500], type: 'color' },
      700: { value: BASE.purple[700], type: 'color' },
    },
    blue: {
      50:  { value: BASE.blue[50],  type: 'color' },
      100: { value: BASE.blue[100], type: 'color' },
      500: { value: BASE.blue[500], type: 'color' },
      600: { value: BASE.blue[600], type: 'color' },
      700: { value: BASE.blue[700], type: 'color' },
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Novo semantic/action.json
// primary  → color.primary (preto) — decisão: botão principal eNotas = preto Hotmart
// secondary → outline preto
// ghost    → hover warm gray
// danger   → color.negative (red.600)
// cta      → laranja (para uso futuro se necessário)
// ─────────────────────────────────────────────────────────────────────────────

const NEW_ACTION_JSON = {
  action: {
    primary: {
      background:           { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d
      'background-hover':   { value: '{color.brand.900}',    type: 'color' }, // #181817
      'background-disabled':{ value: '{color.neutral.150}',  type: 'color' }, // #dcdad6
      foreground:           { value: '{color.neutral.0}',    type: 'color' }, // #ffffff
    },
    secondary: {
      background:           { value: 'transparent',          type: 'color' },
      'background-hover':   { value: '{color.neutral.100}',  type: 'color' }, // #eae9e7
      border:               { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d
      foreground:           { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d
    },
    ghost: {
      background:           { value: 'transparent',          type: 'color' },
      'background-hover':   { value: '{color.neutral.100}',  type: 'color' }, // #eae9e7
      foreground:           { value: '{color.neutral.1000}', type: 'color' }, // #0d0d0d
    },
    danger: {
      background:           { value: '{color.red.600}',      type: 'color' }, // #e10042
      'background-hover':   { value: '{color.red.700}',      type: 'color' }, // #9c0832
      foreground:           { value: '{color.neutral.0}',    type: 'color' }, // #ffffff
    },
    cta: {
      background:           { value: '{color.cta.500}',      type: 'color' }, // #ff4000
      'background-hover':   { value: '{color.cta.600}',      type: 'color' }, // #be2b03
      foreground:           { value: '{color.neutral.0}',    type: 'color' }, // #ffffff
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Novo semantic/surface.json
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
    default: { value: '{color.neutral.150}',  type: 'color' }, // #dcdad6  border-light
    strong:  { value: '{color.neutral.250}',  type: 'color' }, // #c3bfb8  border / input-border
    focus:   { value: '{color.brand.950}',    type: 'color' }, // #0d0d0d  ring (preto)
  },
  text: {
    primary:   { value: '{color.neutral.1000}', type: 'color' }, // #0d0d0d  foreground
    secondary:  { value: '{color.neutral.500}',  type: 'color' }, // #7a7773  muted-foreground
    disabled:  { value: '{color.neutral.400}',   type: 'color' }, // #96938d
    inverse:   { value: '{color.neutral.0}',     type: 'color' }, // #ffffff
    brand:     { value: '{color.brand.950}',     type: 'color' }, // #0d0d0d  primary
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Novo semantic/feedback.json
// positive=success, negative=danger, attention=warning, informative=info(purple)
// ─────────────────────────────────────────────────────────────────────────────

const NEW_FEEDBACK_JSON = {
  feedback: {
    success: {
      background: { value: '{color.green.100}',  type: 'color' }, // #b7f6cb
      foreground: { value: '{color.green.700}',  type: 'color' }, // #098332
      icon:       { value: '{color.green.500}',  type: 'color' }, // #0bd043
    },
    warning: {
      background: { value: '{color.yellow.100}', type: 'color' }, // #f8e9b7
      foreground: { value: '{color.yellow.700}', type: 'color' }, // #88681b
      icon:       { value: '{color.yellow.500}', type: 'color' }, // #ffc000
    },
    danger: {
      background: { value: '{color.red.50}',     type: 'color' }, // #fee5eb
      foreground: { value: '{color.red.700}',    type: 'color' }, // #9c0832
      icon:       { value: '{color.red.600}',    type: 'color' }, // #e10042
    },
    info: {
      background: { value: '{color.purple.100}', type: 'color' }, // #ebe1fc
      foreground: { value: '{color.purple.700}', type: 'color' }, // #38178f
      icon:       { value: '{color.purple.400}', type: 'color' }, // #a475ff
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Mapeamento de CSS vars para o relatório
// ─────────────────────────────────────────────────────────────────────────────

const CSS_VAR_CHANGES = [
  { var: '--en-action-primary-background',          before: '#22baa0', after: '#0d0d0d', note: 'teal → preto Hotmart' },
  { var: '--en-action-primary-background-hover',    before: '#12795f', after: '#181817' },
  { var: '--en-action-primary-background-disabled', before: '#d6d6d6', after: '#dcdad6', note: 'similar, warm gray' },
  { var: '--en-action-primary-foreground',          before: '#ffffff', after: '#ffffff', note: '✓ igual' },
  { var: '--en-action-secondary-background-hover',  before: '#f7f7f7', after: '#eae9e7', note: 'cool gray → warm gray' },
  { var: '--en-action-secondary-border',            before: '#b3b3b3', after: '#0d0d0d', note: 'cinza → preto' },
  { var: '--en-action-secondary-foreground',        before: '#333333', after: '#0d0d0d', note: 'cinza escuro → preto' },
  { var: '--en-action-ghost-background-hover',      before: '#ebebeb', after: '#eae9e7', note: 'similar, warm' },
  { var: '--en-action-ghost-foreground',            before: '#333333', after: '#0d0d0d' },
  { var: '--en-action-danger-background',           before: '#f13838', after: '#e10042', note: 'vermelho → rosa-vermelho' },
  { var: '--en-action-danger-background-hover',     before: '#c01f1f', after: '#9c0832' },
  { var: '--en-action-danger-foreground',           before: '#ffffff', after: '#ffffff', note: '✓ igual' },
  { var: '--en-border-default',                     before: '#d6d6d6', after: '#dcdad6', note: 'similar' },
  { var: '--en-border-strong',                      before: '#8f8f8f', after: '#c3bfb8', note: 'cinza médio → warm gray claro' },
  { var: '--en-border-focus',                       before: '#22baa0', after: '#0d0d0d', note: 'teal → preto' },
  { var: '--en-text-primary',                       before: '#1f1f1f', after: '#0d0d0d', note: 'quase igual' },
  { var: '--en-text-secondary',                     before: '#6b6b6b', after: '#7a7773', note: 'cinza → warm gray' },
  { var: '--en-text-disabled',                      before: '#b3b3b3', after: '#96938d', note: 'cinza → warm gray' },
  { var: '--en-text-brand',                         before: '#22baa0', after: '#0d0d0d', note: 'teal → preto' },
  { var: '--en-surface-page',                       before: '#f7f7f7', after: '#f5f3ef', note: 'cinza frio → off-white quente' },
  { var: '--en-surface-sunken',                     before: '#ebebeb', after: '#eae9e7', note: 'similar, warm' },
  { var: '--en-feedback-success-background',        before: '#e6f7ec', after: '#b7f6cb', note: 'verde mais vibrante' },
  { var: '--en-feedback-success-icon',              before: '#1a8a3c', after: '#0bd043', note: 'verde vibrante' },
  { var: '--en-feedback-danger-background',         before: '#fde8e8', after: '#fee5eb' },
  { var: '--en-feedback-danger-icon',               before: '#f13838', after: '#e10042' },
  { var: '--en-feedback-warning-background',        before: '#fff8e1', after: '#f8e9b7' },
  { var: '--en-feedback-warning-icon',              before: '#f59e0b', after: '#ffc000' },
  { var: '--en-feedback-info-background',           before: '#e0f0ff', after: '#ebe1fc', note: 'azul → roxo' },
  { var: '--en-feedback-info-foreground',           before: '#004f8a', after: '#38178f', note: 'azul → roxo escuro' },
  { var: '--en-feedback-info-icon',                 before: '#0077cc', after: '#a475ff', note: 'azul → roxo' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Relatório
// ─────────────────────────────────────────────────────────────────────────────

function printReport() {
  console.log('');
  console.log('🎨  eNotas DS → Cosmos hotmart.co — Mapeamento de Tokens');
  console.log('═'.repeat(60));
  console.log('  Fonte: github.com/Hotmart-Org/cosmos-ds');
  console.log('  Brand: hotmart.co (identidade Hotmart atual)');

  console.log('\n📦  PALETA PRIMITIVA\n');
  const primitiveMap = [
    ['color.brand.teal.500 (#22baa0)', 'color.brand.950  (#0d0d0d) — preto Hotmart'],
    ['color.brand.purple.* ', 'color.cta.*      (#ff4000) — laranja CTA'],
    ['color.neutral.50  (#f7f7f7)', 'color.neutral.50  (#f5f3ef) — off-white quente'],
    ['color.neutral.400 (#8f8f8f)', 'color.neutral.400 (#96938d) — warm gray'],
    ['color.neutral.800 (#1f1f1f)', 'color.neutral.1000(#0d0d0d) — preto puro'],
    ['color.danger.500  (#f13838)', 'color.red.600     (#e10042) — vermelho-rosa'],
    ['color.success.500 (#1a8a3c)', 'color.green.500   (#0bd043) — verde vibrante'],
    ['color.warning.500 (#f59e0b)', 'color.yellow.500  (#ffc000) — amarelo'],
    ['color.info.500    (#0077cc)', 'color.purple.400  (#a475ff) — roxo (era azul!)'],
  ];
  primitiveMap.forEach(([before, after]) => {
    console.log(`  ${before.padEnd(34)} →  ${after}`);
  });

  console.log('\n⚡  CSS VARS COM MUDANÇA SIGNIFICATIVA\n');
  const significant = CSS_VAR_CHANGES.filter(c => c.note && !c.note.includes('✓') && !c.note.includes('similar'));
  significant.forEach(({ var: v, before, after, note }) => {
    console.log(`  ${v}`);
    console.log(`    antes : ${before}`);
    console.log(`    depois: ${after}  ← ${note}`);
    console.log('');
  });

  const unchanged = CSS_VAR_CHANGES.filter(c => c.note?.includes('✓'));
  if (unchanged.length) {
    console.log(`  ✓  Sem mudança: ${unchanged.map(c => c.var).join(', ')}`);
  }

  console.log(`\n  Total de CSS vars alteradas: ${CSS_VAR_CHANGES.length}`);

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
