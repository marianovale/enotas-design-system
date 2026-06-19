# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O Projeto

**eNotas Design System** — sistema de componentes da funcionalidade eNotas dentro da Hotmart.

- Entrega: **Web Components** (Stencil.js) — funcionam diretamente em ASP.NET Razor Views + jQuery legado via `<script>` tag
- Futuro: merge com **Cosmos DS** (React + Storybook) da Hotmart — os wrappers React são gerados automaticamente pelo Stencil
- Figma: integração via **MCP Server** + **Code Connect** — agentes geram código usando os componentes reais

## Comandos

```bash
# Instalar dependências
pnpm install

# Build completo (tokens → componentes)
pnpm build

# Build individual
pnpm build:tokens           # @enotas-ds/tokens → dist/tokens.css + tokens.js
pnpm build:components       # @enotas-ds/components → Web Components
pnpm build:components:react # Gera wrappers React para futura integração Cosmos

# Desenvolvimento
pnpm --filter @enotas-ds/components dev   # watch mode

# Documentação
pnpm storybook              # http://localhost:6006

# Figma Code Connect
pnpm figma:connect          # publica mapeamentos no Dev Mode do Figma

# Lint e typecheck
pnpm lint
pnpm typecheck
```

## Arquitetura

### Monorepo (pnpm workspaces)

```
packages/tokens/       → @enotas-ds/tokens      (Style Dictionary)
packages/components/   → @enotas-ds/components   (Stencil.js Web Components)
packages/icons/        → @enotas-ds/icons         (SVGs)
apps/storybook/        → documentação interativa
```

### Pipeline de Tokens

Figma Variables → `packages/tokens/src/global/*.json` + `src/semantic/*.json` → Style Dictionary → `dist/tokens.css`

- **Global** (`src/global/`): valores primitivos — `color`, `font`, `spacing`, `radius`, `shadow`
- **Semântico** (`src/semantic/`): aliases por intenção — `action`, `feedback`, `surface`
- Prefixo CSS: `--en-*` (ex: `--en-action-primary-background`)
- Ao mergear com Cosmos: só o mapeamento semântico muda, o HTML/Razor permanece intacto

### Estratégia de Tokens — eNotas → Identidade Hotmart

**Decisão de produto**: o eNotas será, no futuro, 100% Cosmos DS — sem tokens diferenciados.
eNotas adotará a identidade visual da Hotmart (cores, tipografia, espaçamentos do Cosmos).

Hoje os tokens divergem intencionalmente:

| Token | eNotas atual | Cosmos/Hotmart |
|---|---|---|
| `primary` | `#22BAA0` (teal eNotas) | cor primária Hotmart |
| outros | valores próprios eNotas | referência Cosmos |

**Por que não usar os tokens do Cosmos agora?**
O Cosmos ainda não tem um pacote consumível pelo ambiente .NET/Razor (sem npm, sem bundler).
Manter `--en-*` próprio evita acoplamento prematuro e permite entregas independentes.

**Plano de migração (quando o merge acontecer):**
1. Substituir os valores em `src/global/color.json` pelos valores do Cosmos
2. O CSS gerado (`dist/tokens.css`) passa a refletir a identidade Hotmart
3. HTML/Razor Views **não mudam** — só os valores visuais mudam
4. Componentes Stencil viram wrappers dos componentes React do Cosmos (ou são aposentados)

**O que NÃO fazer enquanto isso:**
- Não criar tokens exclusivos eNotas sem necessidade real — cada novo token é dívida de migração
- Não divergir prop names / variant names do Cosmos — alinhamento é a proteção para a migração

### Componentes (Stencil.js)

Cada componente fica em `packages/components/src/components/<tag>/`:

```
en-button/
  en-button.tsx        # lógica Stencil (@Component, @Prop, @Event)
  en-button.css        # estilos com shadow DOM, usa variáveis --en-*
  en-button.stories.ts # story Storybook
  en-button.figma.tsx  # Code Connect mapping
```

**Convenções:**
- Tag HTML: prefixo `en-` (ex: `<en-button>`, `<en-card>`)
- Classe Stencil: prefixo `En` (ex: `EnButton`)
- Props: `variant`, `size`, `intent`, `disabled` — alinhadas com Cosmos quando possível
- Eventos: prefixo `en` (ex: `enClick`, `enChange`) — evita colisão com eventos nativos
- Tipos exportados junto com o componente (ex: `ButtonVariant`, `ButtonSize`)

### Uso em Razor Views (.NET)

```html
<!-- _Layout.cshtml — uma vez no layout base -->
<link rel="stylesheet" href="/dist/fonts.css">   <!-- Hotmart Sans, Hotmart Display, Font Awesome -->
<link rel="stylesheet" href="/dist/tokens.css">
<script type="module" src="/dist/enotas-ds/enotas-ds.esm.js"></script>

<!-- Em qualquer .cshtml -->
<en-button variant="primary" size="md">Emitir Nota</en-button>
<en-badge intent="success">Aprovado</en-badge>
```

### Figma MCP

Configure `FIGMA_API_KEY` no ambiente. O `.mcp.json` na raiz conecta Claude Code ao Figma:

```bash
export FIGMA_API_KEY=figd_...
```

Ao receber uma URL de frame Figma, o agente acessa tokens, componentes e variants direto do arquivo — e gera código usando `<en-*>` reais graças ao Code Connect.

## Feedback de produtos consumidores

- **`feedback-do-emissor.md`** — achados e pedidos vindos da iniciativa Emissor/Gestão Financeira 2026 (jun/2026). Status: `<en-alert>` e `<en-toast>` ✅ criados (com doc no Figma); tipografia ✅ documentada; cor de "info" ✅ resolvida = **purple unificado** (`#a475ff`) em banner/alert/toast **e** status de fatura — teal do Emissor descontinuado. Em aberto: confirmar ícones faltantes (item 4) e variantes de `RegistroFatura` a partir do catálogo de estados (item 5). **Ler ao trabalhar em feedback/alert/toast, tipografia ou estados de fatura.**

## Agentes Disponíveis

- `.claude/agents/product-designer.md` — para tarefas de design: extrair tokens do Figma, propor componentes, escrever docs MDX
- `.claude/agents/full-stack-developer.md` — para tarefas de implementação: criar componentes Stencil, Code Connect, stories, pipeline de tokens
