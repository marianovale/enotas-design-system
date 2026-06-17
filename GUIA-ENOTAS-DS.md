# Guia de uso — eNotas Design System

> Doc de contexto para construir telas/iniciativas usando o **eNotas DS**.
> Estado em jun/2026. Cole isto no chat onde você está iterando a iniciativa.

---

## O que é

Sistema de componentes da funcionalidade **eNotas** dentro da Hotmart.
Entrega como **Web Components (Stencil.js)** — funcionam direto em ASP.NET Razor Views + jQuery legado, e também geram wrappers React. Você consome com `<script>` + `<link>`, sem build especial.

Caminho futuro: convergência com o **Cosmos DS** (DS corporativo da Hotmart). Por isso o naming já espelha o Cosmos.

---

## Como consumir (uma vez no layout)

```html
<link rel="stylesheet" href="/dist/fonts/fonts.css">      <!-- Hotmart Sans, Hotmart Display -->
<link rel="stylesheet" href="/dist/tokens.css">           <!-- variáveis --en-* -->
<link rel="stylesheet" href="/dist/text-styles.css">      <!-- classes de tipografia .en-text-* / .en-title-* -->
<script type="module" src="/dist/enotas-ds/enotas-ds.esm.js"></script>
```

```html
<!-- depois, em qualquer .cshtml / .html -->
<en-button variant="primary" size="md">Emitir Nota</en-button>
<en-badge intent="success">Aprovado</en-badge>
<h2 class="en-title-md">Notas do mês</h2>
<p class="en-text-sm">Detalhes do documento fiscal.</p>
```

---

## Componentes disponíveis (30)

`en-badge` · `en-button` · `en-card` · `en-checkbox` · `en-faq` · `en-filter` · `en-footer` · `en-header` · `en-icon` · `en-input` · `en-input-number` · `en-input-tag` · `en-loading-bar` · `en-lookup` · `en-modal` · `en-nav-item` · `en-nf-status` · `en-popover` · `en-progress` · `en-search` · `en-segmented` · `en-select` · `en-spinner` · `en-stepper` · `en-switch` · `en-tab` · `en-tag` · `en-textarea` · `en-tooltip` · `en-tour`

Convenções: tag `en-*`, props alinhadas ao Cosmos (`variant`, `size`, `intent`, `disabled`), eventos `enClick`/`enChange`.

**Estados de nota fiscal** (Emitida/Em emissão/Negada/Corrigida): use `<en-nf-status>`, não `<en-badge>` genérico.
Ícone sempre via `<en-icon>`, **nunca** caractere de texto/emoji.

---

## Tokens (`--en-*`)

Mudar o valor em um lugar propaga para todos os componentes.

### Cor (semânticos — prefira estes)
- Ação: `--en-action-primary-*`, `--en-action-secondary-*`, `--en-action-ghost-*`, `--en-action-danger-*`
- Superfície: `--en-surface-page|default|raised|overlay|sunken`
- Borda: `--en-border-default|strong|focus`
- Texto: `--en-text-primary|secondary|disabled|inverse|brand`
- Feedback: `--en-feedback-{success|warning|danger|info}-{background|foreground|icon}`

### Espaçamento / raio
`--en-spacing-{0…96}` (escala Tailwind, base 4px) · `--en-radius-{none,xs,sm,md,lg,xl,2xl,3xl,4xl,full}`

---

## Tipografia (naming Cosmos/Tailwind)

### Primitivos
- Família: `--en-font-family-sans` (Hotmart Sans), `--en-font-family-serif` (Hotmart Display), `--en-font-family-mono`
- Tamanho: `--en-font-size-{xs,sm,base,lg,xl,2xl…9xl}` — **16px = `base`** (não `md`)
- Peso: `--en-font-weight-{light(300),normal(400),bold(700)}`
- Line-height: `--en-font-leading-{3…10}` (numérico Tailwind: `4`=16px … `10`=40px)
- Tracking: `--en-font-tracking-{normal(0),wide(2px)}`

### ⚠️ Regra de peso (importante)
**Use só Regular (400) e Bold (700).**
- Corpo = Regular · ênfase/links/títulos fortes = Bold
- **NÃO use Medium/Semibold** — não existem em arquivo (a fonte só tem Light/Regular/Bold) e renderizam como faux.
- **"MD/SM/LG" é tamanho, nunca peso.**

### Type styles prontos (classes utilitárias)
- Corpo: `.en-text-{xs,sm,base,lg,xl,2xl…9xl}` (size + leading pareados)
- Títulos: `.en-title-{xs,sm,md,lg,xl}` + variantes `-overline` (caixa alta) e `-subheading`
- Display/hero: `.en-display-{sm,md,lg}`
- Serif (Hotmart Display): adicione a classe `.en-serif`

```html
<span class="en-title-md-overline">Competência</span>
<h2 class="en-title-md">Maio / 2026</h2>
<p class="en-title-md-subheading">Resumo da apuração</p>
```

---

## Acessibilidade (baseline)
- WCAG **AA** mínimo. Contraste ≥ 4.5:1 em texto de dado (valores, datas, status).
- Foco visível em tudo que é interativo (contadores trabalham por teclado).
- Status **nunca** só por cor — sempre ícone + cor (WCAG 1.4.1).

---

## ⚠️ Restrições atuais (PoC) — leia antes de pedir mudança de token

1. **Cores estão congeladas.** Há uma PoC em andamento mantendo a **identidade teal** do eNotas (`--en-text-brand`/`primary` ainda teal `#22baa0`). **Não migrar para o laranja/preto do Cosmos agora.**
2. **Neutros são quentes** (warm gray: `#f5f3ef`, `#eae9e7`, `#96938d`, `#0d0d0d`) — já alinhados ao Cosmos.
3. **`info` = purple** (`#a475ff`), não azul. (Doc antigo do Emissor cita azul — está desatualizado.)
   - ⚠️ **Carregue sempre o `tokens.css` atual (pós-alinhamento `09a0661`).** Os fallbacks embutidos nos componentes já foram corrigidos para warm/purple, mas um bundle `/dist/` antigo servido pela app pode renderizar a paleta velha (neutros frios `#f7f7f7…`, info azul `#004f8a`). Se vir cor fria/azul, o bundle está defasado — peça rebuild/redeploy.
4. **Não criar tokens novos exclusivos do eNotas** sem necessidade real — cada token novo é dívida de migração para o Cosmos.
5. **Não divergir de prop/variant/token naming do Cosmos** — o alinhamento é a proteção da migração.

---

## Componentes que o DS AINDA NÃO tem (backlog conhecido)
- `<en-alert>` / `<en-banner>` (feedback persistente inline) e `<en-toast>` (efêmero). Se a iniciativa precisar, hoje monta-se à mão — sinalize para formalizar no DS.
- Variantes de estado de fatura (Paga/Processando/Pendente/Vencida/…) — candidatas a `<en-badge>`/`RegistroFatura`.

---

## Pipeline (como o design vira código)
`Figma Variables → tokens (Style Dictionary, auto) → --en-* no CSS → componentes Stencil (escritos à mão, consomem os tokens) → Code Connect liga Figma ↔ código`

Tokens são quase automáticos; componentes são escritos uma vez e reaproveitam os tokens, então mudança de token propaga sozinha.
