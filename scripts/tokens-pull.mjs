#!/usr/bin/env node
/**
 * tokens-pull.mjs
 *
 * Wrapper de documentação. Este script descreve o que o agente Claude faz
 * ao executar `pnpm tokens:pull` — o export real usa o figma-console-mcp
 * (Desktop Bridge plugin), não um script Node puro.
 *
 * Para rodar:
 *   1. Abra o Figma com o plugin figma-console-mcp ativo (ícone verde = pronto)
 *   2. Peça ao Claude Code: "Execute pnpm tokens:pull"
 *   3. Claude usará o figma_export_tokens MCP tool para gravar em
 *      packages/tokens/.figma-export/
 *   4. Em seguida rode: pnpm tokens:sync (ou pnpm tokens:pull já encadeia)
 *
 * Por que não é um script autônomo?
 *   A Figma REST API não expõe Variables em planos non-Enterprise (HTTP 403).
 *   O figma-console-mcp usa a Plugin API via WebSocket local — requer Figma aberto.
 */

console.log('');
console.log('🔗  eNotas DS — Token Pull');
console.log('─'.repeat(52));
console.log('');
console.log('  Este comando requer o Claude Code com o Figma Desktop Bridge ativo.');
console.log('');
console.log('  Se você está vendo isto sem o Claude, abra uma sessão Claude Code e peça:');
console.log('    "Execute pnpm tokens:pull para sincronizar tokens do Figma"');
console.log('');
console.log('  Fluxo completo:');
console.log('    1. figma_export_tokens → packages/tokens/.figma-export/*.sd.json');
console.log('    2. node scripts/tokens-sync.mjs');
console.log('    3. pnpm build:tokens');
console.log('');
process.exit(0);
