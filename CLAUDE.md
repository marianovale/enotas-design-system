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

## Agentes Disponíveis

- `.claude/agents/product-designer.md` — para tarefas de design: extrair tokens do Figma, propor componentes, escrever docs MDX
- `.claude/agents/full-stack-developer.md` — para tarefas de implementação: criar componentes Stencil, Code Connect, stories, pipeline de tokens
