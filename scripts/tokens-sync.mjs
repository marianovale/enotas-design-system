#!/usr/bin/env node
/**
 * tokens-sync.mjs
 *
 * Aplica um export Figma (style-dictionary-v3 split por collection) nos arquivos
 * src JSON do pacote @enotas-ds/tokens, reportando o diff antes de gravar.
 *
 * Pré-requisito: exportar tokens do Figma com:
 *   figma_export_tokens → outputPath = packages/tokens/.figma-export/
 *   format: style-dictionary-v3, splitByCollection: true, resolveAliases: false
 *
 * Uso:
 *   node scripts/tokens-sync.mjs           # aplica mudanças
 *   node scripts/tokens-sync.mjs --dry-run  # mostra diff sem gravar
 *
 * Script seguro: só atualiza valores existentes. Novos tokens são reportados,
 * não criados automaticamente (requer revisão manual).
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = resolve(__dirname, '..');
const TOKENS_SRC = join(ROOT, 'packages/tokens/src');
const EXPORT_DIR = join(ROOT, 'packages/tokens/.figma-export');

const DRY_RUN = process.argv.includes('--dry-run');

// ── Color namespaces que existem na Core / Color collection ──────────────────
const GLOBAL_COLOR_NS = new Set([
  'brand', 'neutral', 'success', 'warning', 'danger', 'info',
]);

// ── Semantic keys → arquivo de destino ──────────────────────────────────────
const SEMANTIC_FILE_MAP = {
  action:   'action.json',
  feedback: 'feedback.json',
  surface:  'surface.json',
  border:   'surface.json',
  text:     'surface.json',
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function readJSON(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function writeJSON(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
}

/** Percorre objeto aninhado e executa cb(path, node) para cada leaf {value, type} */
function walkTokens(obj, cb, _path = []) {
  for (const [key, val] of Object.entries(obj)) {
    if (val && typeof val === 'object' && 'value' in val && 'type' in val) {
      cb([..._path, key], val);
    } else if (val && typeof val === 'object') {
      walkTokens(val, cb, [..._path, key]);
    }
  }
}

/** deepGet(obj, ['a','b','c']) → obj.a.b.c */
function deepGet(obj, keys) {
  return keys.reduce((acc, k) => acc?.[k], obj);
}

/** deepSet(obj, ['a','b','c'], val) muta obj */
function deepSet(obj, keys, val) {
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (cur[keys[i]] === undefined) cur[keys[i]] = {};
    cur = cur[keys[i]];
  }
  cur[keys[keys.length - 1]] = val;
}

/**
 * Normaliza alias do Figma adicionando prefixo 'color.' para refs de cor global.
 *   "{danger.500}"       → "{color.danger.500}"
 *   "{brand.teal.500}"   → "{color.brand.teal.500}"
 *   "{neutral.0}"        → "{color.neutral.0}"
 *   "transparent"        → "transparent"  (sem mudança)
 */
function normalizeAlias(value) {
  return value.replace(/\{([^}]+)\}/g, (_, inner) => {
    const ns = inner.split('.')[0];
    if (GLOBAL_COLOR_NS.has(ns)) return `{color.${inner}}`;
    return `{${inner}}`; // já está certo
  });
}

/**
 * Normaliza um valor de token para comparação:
 *   - Cores hex → lowercase  (#22BAA0 → #22baa0)
 *   - Alias refs → sem mudança (já tratados pelo normalizeAlias)
 */
function normalizeValue(value) {
  if (typeof value === 'string' && /^#[0-9a-fA-F]+$/.test(value)) {
    return value.toLowerCase();
  }
  return value;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sync functions
// ─────────────────────────────────────────────────────────────────────────────

let totalChanged = 0;
let totalAdded = 0;
let totalUnchanged = 0;

/**
 * Sincroniza um export Figma (figmaData) contra um arquivo JSON existente (destPath).
 * figmaData já deve estar no formato exato do nosso JSON (keys iguais, aliases normalizados).
 */
function syncFile(figmaData, destPath, label) {
  if (!existsSync(destPath)) {
    console.error(`  ❌ Arquivo não encontrado: ${destPath}`);
    return;
  }

  const srcData = readJSON(destPath);
  const changes = [];
  const newTokens = [];

  walkTokens(figmaData, (path, figmaToken) => {
    const srcToken = deepGet(srcData, path);
    const figmaValue = normalizeValue(figmaToken.value);

    if (!srcToken) {
      newTokens.push({ path: path.join('.'), value: figmaValue });
      return;
    }

    const srcValue = normalizeValue(srcToken.value);

    if (srcValue !== figmaValue) {
      changes.push({
        path: path.join('.'),
        old: srcToken.value,
        new: figmaValue,
      });
      if (!DRY_RUN) {
        deepSet(srcData, [...path, 'value'], figmaValue);
      }
    } else {
      totalUnchanged++;
    }
  });

  totalChanged += changes.length;
  totalAdded += newTokens.length;

  if (changes.length === 0 && newTokens.length === 0) {
    console.log(`  ✅ ${label} — sem mudanças`);
    return;
  }

  console.log(`\n  📄 ${label}`);

  for (const c of changes) {
    const tag = DRY_RUN ? '[dry]' : '    ';
    console.log(`  ${tag} 🔄  ${c.path}`);
    console.log(`          antes : ${c.old}`);
    console.log(`          depois: ${c.new}`);
  }

  for (const n of newTokens) {
    console.log(`       ⚠️  NOVO (não aplicado): ${n.path} = ${n.value}`);
    console.log(`          Adicione manualmente ao JSON antes de rodar novamente.`);
  }

  if (!DRY_RUN && changes.length > 0) {
    writeJSON(destPath, srcData);
    console.log(`  ✅ ${changes.length} token(s) atualizado(s) em ${destPath.replace(ROOT + '/', '')}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Core / Color  →  src/global/color.json
// ─────────────────────────────────────────────────────────────────────────────
function syncCoreColor() {
  const exportFile = join(EXPORT_DIR, 'core-color.sd.json');
  if (!existsSync(exportFile)) {
    console.warn('  ⚠️  core-color.sd.json não encontrado — pulando Core/Color');
    return;
  }

  const figmaRaw = readJSON(exportFile);

  // Figma: { brand: {...}, danger: {...}, ... }
  // Nosso: { color: { brand: {...}, danger: {...}, ... } }
  const figmaWrapped = { color: figmaRaw };

  // Normaliza valores (remover "px" e converter para rem se necessário já não é
  // necessário aqui — cores são hex, sem conversão)
  syncFile(figmaWrapped, join(TOKENS_SRC, 'global/color.json'), 'global/color.json (Core/Color)');
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Semantic  →  src/semantic/{action,feedback,surface}.json
// ─────────────────────────────────────────────────────────────────────────────
function syncSemantic() {
  const exportFile = join(EXPORT_DIR, 'semantic.sd.json');
  if (!existsSync(exportFile)) {
    console.warn('  ⚠️  semantic.sd.json não encontrado — pulando Semantic');
    return;
  }

  const figmaRaw = readJSON(exportFile);

  // Normaliza aliases: {danger.500} → {color.danger.500}
  const normalized = JSON.parse(
    JSON.stringify(figmaRaw, (_, v) =>
      typeof v === 'string' ? normalizeAlias(v) : v,
    ),
  );

  // Agrupa por arquivo de destino
  /** @type {Record<string, object>} */
  const byFile = {};

  for (const [topKey, tokens] of Object.entries(normalized)) {
    const file = SEMANTIC_FILE_MAP[topKey];
    if (!file) {
      console.warn(`  ⚠️  Chave semântica desconhecida "${topKey}" — ignorando`);
      continue;
    }
    if (!byFile[file]) byFile[file] = {};
    byFile[file][topKey] = tokens;
  }

  for (const [file, data] of Object.entries(byFile)) {
    syncFile(data, join(TOKENS_SRC, 'semantic', file), `semantic/${file}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

console.log('');
console.log('🔄  eNotas DS — Token Sync (Figma → src JSON)');
console.log('─'.repeat(52));

if (DRY_RUN) {
  console.log('  Modo: DRY RUN — nenhum arquivo será alterado\n');
}

if (!existsSync(EXPORT_DIR)) {
  console.error(`
❌  Diretório de export não encontrado: ${EXPORT_DIR}

  Para fazer o export, peça ao Claude:
    "Exporte os tokens do Figma para packages/tokens/.figma-export/"

  Ou rode manualmente:
    pnpm tokens:pull
`);
  process.exit(1);
}

syncCoreColor();
syncSemantic();

console.log('');
console.log('─'.repeat(52));
console.log(`  Alterados : ${totalChanged}`);
console.log(`  Novos     : ${totalAdded} (requer revisão manual)`);
console.log(`  Sem mudança: ${totalUnchanged}`);

if (totalChanged > 0 && !DRY_RUN) {
  console.log('');
  console.log('  Próximo passo: pnpm build:tokens');
}

console.log('');
