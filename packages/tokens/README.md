# @enotas-ds/tokens

Tokens de design do eNotas DS gerados com **Style Dictionary**.

Exporta CSS Custom Properties com prefixo `--en-*`, um preset Tailwind v3 e um tema Tailwind v4.

---

## Arquitetura

```
src/
  global/         → valores primitivos (cor, tipografia, espaçamento, radius, sombra)
  semantic/       → aliases por intenção (action, feedback, surface)

dist/
  tokens.css          → CSS vars --en-* (global + semântico)
  tokens.js           → objeto JS com todos os tokens
  tailwind-preset.js  → preset para Tailwind v3
  tailwind-theme.css  → @theme bridge para Tailwind v4
  cosmos-bridge.css   → --en-* → --cds-* (compatibilidade com Cosmos DS)
```

## Camadas

### Global (primitivos)

Valores brutos sem semântica. Nunca usar diretamente nos componentes.

```css
--en-color-teal-500: #22baa0;
--en-spacing-4: 1rem;
--en-radius-md: 0.5rem;
```

### Semântico (aliases)

Intenção de uso. Componentes usam sempre esta camada.

```css
--en-action-primary-background:    var(--en-color-teal-500);
--en-action-primary-foreground:    var(--en-color-white);
--en-feedback-positive-background: var(--en-color-green-100);
```

Trocar a cor primária = atualizar um token semântico → todos os componentes refletem automaticamente.

---

## Uso

### No .NET / Razor

```html
<link rel="stylesheet" href="/dist/tokens.css">
```

### No CSS

```css
.meu-elemento {
  background: var(--en-action-primary-background);
  color: var(--en-action-primary-foreground);
  border-radius: var(--en-radius-md);
  padding: var(--en-spacing-3) var(--en-spacing-4);
}
```

### Com Tailwind v3

```js
// tailwind.config.js
module.exports = {
  presets: [require('@enotas-ds/tokens/tailwind-preset')],
};
```

### Com Tailwind v4

```css
/* globals.css */
@import '@enotas-ds/tokens/tailwind-theme.css';
```

---

## Build

```bash
pnpm build:tokens
```

Roda o Style Dictionary e gera todos os artefatos em `dist/`.
