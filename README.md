# eNotas Design System

> Sistema de componentes da funcionalidade eNotas dentro da Hotmart.
> Web Components nativos que rodam em ASP.NET Razor Views + jQuery — sem React, sem configuração de bundler.

---

## Visão geral

O eNotas DS entrega **30 componentes** prontos para uso em qualquer `.cshtml`, baseados no [Figma eNotas Design System](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System). Todos os componentes são documentados no Figma Dev Mode via **Code Connect** — o designer inspeciona, o código `<en-*>` já aparece pronto.

A stack foi escolhida para resolver consistência visual **hoje**, sem exigir migração do frontend .NET, e com caminho claro para o merge com o **Cosmos DS** no futuro (wrappers React gerados automaticamente pelo Stencil).

---

## Instalação no projeto .NET

Adicione uma única vez no `_Layout.cshtml`:

```html
<!-- Fontes: Hotmart Sans, Hotmart Display, Font Awesome -->
<link rel="stylesheet" href="/dist/fonts.css">
<!-- Tokens de design -->
<link rel="stylesheet" href="/dist/tokens.css">
<!-- Web Components -->
<script type="module" src="/dist/enotas-ds/enotas-ds.esm.js"></script>
```

A partir daí, use qualquer componente em qualquer `.cshtml`:

```html
<en-button variant="primary" size="md">Emitir Nota</en-button>
<en-badge variant="positive">Autorizada</en-badge>
<en-nf-status type="nfs-e" status="emitida"></en-nf-status>
```

Compatível com jQuery sem adaptação:

```js
$('en-button').on('enClick', function() {
  // lógica existente intacta
});
```

---

## Estrutura do monorepo

```
packages/tokens/        → @enotas-ds/tokens      (Style Dictionary — CSS vars --en-*)
packages/components/    → @enotas-ds/components   (Stencil.js Web Components)
packages/icons/         → @enotas-ds/icons         (SVGs)
apps/storybook/         → documentação interativa
figma-plugin/           → plugins auxiliares para o Figma
```

---

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Build completo (tokens → componentes)
pnpm build

# Builds individuais
pnpm build:tokens            # @enotas-ds/tokens → dist/tokens.css
pnpm build:components        # @enotas-ds/components → Web Components
pnpm build:components:react  # Wrappers React para integração Cosmos

# Watch mode
pnpm --filter @enotas-ds/components dev

# Storybook (documentação)
pnpm storybook               # http://localhost:6006

# Figma Code Connect
pnpm figma:connect           # publica snippets no Figma Dev Mode

# Qualidade
pnpm lint
pnpm typecheck
```

---

## Componentes

| # | Componente | Tag HTML | Categoria |
|---|---|---|---|
| 1 | Button | `<en-button>` | Primitivo |
| 2 | Badge | `<en-badge>` | Primitivo |
| 3 | Spinner | `<en-spinner>` | Primitivo |
| 4 | Input | `<en-input>` | Primitivo |
| 5 | Textarea | `<en-textarea>` | Primitivo |
| 6 | Select | `<en-select>` | Primitivo |
| 7 | Checkbox | `<en-checkbox>` | Primitivo |
| 8 | Icon | `<en-icon>` | Primitivo |
| 9 | Tab | `<en-tab>` | Primitivo |
| 10 | Input Tag | `<en-input-tag>` | Primitivo |
| 11 | NF Status | `<en-nf-status>` | Primitivo |
| 12 | Card | `<en-card>` | Composto |
| 13 | Search | `<en-search>` | Composto |
| 14 | Filter | `<en-filter>` | Composto |
| 15 | FAQ | `<en-faq>` | Composto |
| 16 | Stepper | `<en-stepper>` | Composto |
| 17 | Popover | `<en-popover>` | Composto |
| 18 | Header | `<en-header>` | Composto |
| 19 | Tooltip | `<en-tooltip>` | Avançado |
| 20 | Input Number | `<en-input-number>` | Avançado |
| 21 | Progress | `<en-progress>` | Avançado |
| 22 | Modal | `<en-modal>` | Avançado |
| 23 | Nav Item | `<en-nav-item>` | Avançado |
| 24 | Footer | `<en-footer>` | Avançado |
| 25 | Tour | `<en-tour>` | Avançado |
| 26 | Segmented | `<en-segmented>` | Adicional |
| 27 | Loading Bar | `<en-loading-bar>` | Adicional |
| 28 | Lookup | `<en-lookup>` | Cosmos Alignment |
| 29 | Tag | `<en-tag>` | Cosmos Alignment |
| 30 | Switch | `<en-switch>` | Cosmos Alignment |

Todos os componentes têm props tipadas, eventos prefixados `en-`, suporte a acessibilidade (ARIA + teclado) e Code Connect publicado no Figma.

---

## Tokens de design

Todos os valores visuais são CSS Custom Properties com prefixo `--en-*`:

```css
/* Camada global (primitivos) */
--en-color-teal-500: #22baa0;

/* Camada semântica (intenção) */
--en-action-primary-background: var(--en-color-teal-500);
```

Alterar a cor primária em um lugar propaga para todos os componentes automaticamente. Ao mergear com o Cosmos DS, apenas o mapeamento semântico muda — o HTML das views permanece intacto.

---

## Figma → Código

Com o **Code Connect** publicado, o fluxo de handoff é:

```
Designer ajusta componente no Figma Dev Mode
           ↓
Dev copia o código gerado (já é <en-button>, não uma div genérica)
           ↓
Cola no .cshtml — funciona imediatamente
```

Para republicar os mapeamentos após alterações:

```bash
pnpm figma:connect
```

---

## Caminho para o Cosmos DS

O Stencil gera wrappers React automaticamente. O mesmo componente que hoje roda no Razor:

```html
<!-- Hoje — Razor View (.cshtml) -->
<en-button variant="primary">Emitir Nota</en-button>
```

Amanhã estará disponível como React sem reescrever nada:

```tsx
// Futuro — React/Cosmos
import { EnButton } from '@enotas-ds/components-react';
<EnButton variant="primary" onEnClick={handleClick}>Emitir Nota</EnButton>
```

A API de props já está alinhada com o Cosmos (`variant`, `size`, `intent`, `disabled`). A migração é um find-and-replace.

---

## Documentação

| Recurso | Descrição |
|---|---|
| [OVERVIEW.md](./OVERVIEW.md) | Visão executiva — por que Web Components, como funciona, caminho para o Cosmos |
| [STATUS.md](./STATUS.md) | Status detalhado de todos os 30 componentes com links para o Figma |
| [CLAUDE.md](./CLAUDE.md) | Guia para Claude Code — contexto do projeto para automação com IA |
| `packages/components/src/components/*/readme.md` | Docs auto-geradas pelo Stencil — props, eventos, slots |

---

## Contribuindo

Cada novo componente segue a estrutura:

```
packages/components/src/components/en-[nome]/
  en-[nome].tsx          # lógica Stencil (@Component, @Prop, @Event)
  en-[nome].css          # estilos com shadow DOM, tokens --en-*
  en-[nome].stories.ts   # story Storybook com Controls
  en-[nome].figma.tsx    # Code Connect — snippet no Figma Dev Mode
```

Convenções:
- **Tag HTML**: prefixo `en-` — ex: `<en-button>`
- **Classe Stencil**: prefixo `En` — ex: `EnButton`
- **Eventos**: prefixo `en` — ex: `enClick`, `enChange`
- **Estilos**: somente tokens `--en-*`, nunca valores hard-coded
- **Props**: alinhadas com Cosmos (`variant`, `size`, `intent`, `disabled`) quando possível

---

## Links

- [Figma — eNotas Design System](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System)
- [Storybook local](http://localhost:6006) — `pnpm storybook`
- [Cosmos DS](https://hotmart-org.github.io/cosmos) — Design System corporativo da Hotmart
