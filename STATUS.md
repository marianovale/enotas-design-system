# eNotas Design System — Status dos Componentes

Acompanhamento do progresso de implementação do DS. Atualizado a cada componente entregue.

**Legenda:**
- ✅ Pronto — componente, stories e Code Connect publicado
- 🔨 Em andamento
- ⏳ Planejado
- ❌ Bloqueado

---

## Fase 2 — Primitivos ✅ Concluída (11/11)

| Componente | Tag HTML | Figma | Status | Props principais |
|---|---|---|---|---|
| Button | `<en-button>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-3105) | ✅ Pronto | `variant`, `color`, `size`, `disabled`, `loading` |
| Badge | `<en-badge>` | — | ✅ Pronto | `intent`, `size`, `outline` |
| Spinner | `<en-spinner>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8176) | ✅ Pronto | `size`, `label` |
| Input | `<en-input>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8016) | ✅ Pronto | `label`, `type`, `value`, `disabled`, `required`, `error`, `hint` |
| Textarea | `<en-textarea>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8051) | ✅ Pronto | `label`, `rows`, `value`, `disabled`, `required`, `error`, `hint` |
| Select | `<en-select>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8082) | ✅ Pronto | `label`, `options`, `value`, `disabled`, `required`, `error`, `hint` |
| Checkbox | `<en-checkbox>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183) | ✅ Pronto | `type` (square/round/switch), `checked`, `disabled`, `label` |
| Icon | `<en-icon>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-7004) | ✅ Pronto | `name` (110+ ícones), `size` |
| Tab | `<en-tab>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15130) | ✅ Pronto | `status`, `value`, `disabled`, `count`, `href` |
| Input Tag | `<en-input-tag>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15362) | ✅ Pronto | `value` (array), `label`, `disabled` — Enter/vírgula adiciona tag |
| NF Status | `<en-nf-status>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-9286) | ✅ Pronto | `type` (nfs-e/nf-e/…), `status` — específico eNotas |

---

## Fase 3 — Padrões Compostos ✅ Concluída (7/7)

| Componente | Tag HTML | Figma | Status | Props principais |
|---|---|---|---|---|
| Card | `<en-card>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-4460) | ✅ Pronto | `size`, `bordered`, `clickable` — slots: header, default, footer |
| Search | `<en-search>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-16006) | ✅ Pronto | `value`, `placeholder`, `disabled` — Enter busca, Esc limpa |
| Filter | `<en-filter>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15115) | ✅ Pronto | `active`, `value`, `count`, `disabled` |
| FAQ | `<en-faq>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-16183) | ✅ Pronto | `items`, `openIndex`, `multiple` — accordion animado |
| Stepper | `<en-stepper>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12816) | ✅ Pronto | `steps`, `currentStep` — onboarding |
| Popover | `<en-popover>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12619) | ✅ Pronto | `items`, `placement`, `minWidth` — fecha ao clicar fora, keyboard nav |
| Header | `<en-header>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12797) | ✅ Pronto | `userName`, `avatarSrc`, `notificationCount`, `showSearch` |

---

## Fase 4 — Componentes Avançados ✅ Concluída (7/7)

| Componente | Tag HTML | Figma | Status | Props principais |
|---|---|---|---|---|
| Tooltip | `<en-tooltip>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-7346) | ✅ Pronto | `content`, `placement`, `disabled` |
| Input Number | `<en-input-number>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-9333) | ✅ Pronto | `value`, `min`, `max`, `step`, `label`, `disabled` |
| Progress | `<en-progress>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-4457) | ✅ Pronto | `value`, `max`, `intent`, `label`, `showLabel` |
| Modal | `<en-modal>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15388) | ✅ Pronto | `open`, `heading`, `size` — slots: header, default, footer; ESC fecha |
| Nav Item | `<en-nav-item>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-3475) | ✅ Pronto | `icon`, `active`, `disabled`, `count`, `href`, `value` |
| Footer | `<en-footer>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-16349) | ✅ Pronto | `version`, `companyName`, `year` |
| Tour | `<en-tour>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-17843) | ✅ Pronto | `steps`, `open`, `currentStep`, `finishLabel`, `skipLabel` |

---

## Fase 4b — Componentes Adicionais ✅ Concluída (3/3)

| Componente | Tag HTML | Figma | Status | Props principais |
|---|---|---|---|---|
| Tab (upgrade) | `<en-tab>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12524) | ✅ Pronto | `count` (badge), `href` (link mode) — adicionados ao en-tab existente |
| Segmented | `<en-segmented>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15139) | ✅ Pronto | `options` (array), `value`, `disabled` — controle segmentado 2–5 opções |
| Loading Bar | `<en-loading-bar>` | [↗](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12089) | ✅ Pronto | `active`, `value` — barra linear, indeterminado ou 0–100 |

---

## Fase 5 — Cosmos Alignment ✅ Concluída

### 5a — Tailwind Foundation

| Tarefa | Status | Descrição |
|---|---|---|
| Tailwind preset v3 | ✅ Pronto | `packages/tokens/dist/tailwind-preset.js` — preset com cores/tipografia/radius/shadow eNotas |
| Tailwind theme v4 | ✅ Pronto | `packages/tokens/dist/tailwind-theme.css` — `@theme` bridge para Tailwind v4 |
| Exports de tokens | ✅ Pronto | `package.json` atualizado com `./tailwind-preset` e `./tailwind-theme` |

### 5b — API Alignment (Cosmos-compatible)

| Componente | Mudança | Backward-compat |
|---|---|---|
| `en-button` | `variant`: `primary`→`default`, novo `cta/negative/positive/attention/informative/white`; `color` deprecated; novo `pill` | `primary` e `color="danger"` mantidos como aliases |
| `en-badge` | `intent` → `variant`; valores: `neutral`→`default`, `success`→`positive`, `warning`→`attention`, `danger`→`negative`, `info`→`informative` | `intent` mantido como deprecated |
| `en-spinner` | Novo `variant: default\|thin\|thick`; sizes: adicionado `xs` e `xl`; `default` como alias de `md` | `md` mantido |
| `en-input` | Novo `variantSize: sm\|default\|lg` | — |
| `en-textarea` | Novo `variantSize: sm\|default\|lg` | — |
| `en-checkbox` | `checked` aceita `'indeterminate'`; aria-checked="mixed" | — |
| `en-modal` | `hideClose` → `closable` (semântica invertida, default: true) | `hideClose` mantido como deprecated |
| `en-tooltip` | `text` → `content`; novo `align: start\|center\|end` | `text` mantido como deprecated |

### 5c — Novos Componentes ✅ Concluída (3/3)

| Componente | Tag HTML | Status | Props principais |
|---|---|---|---|
| Lookup | `<en-lookup>` | ✅ Pronto | `label`, `placeholder`, `value`, `options`, `loading`, `multiple`, `disabled`, `error`, `hint` — eventos: `enSearch`, `enLookupChange`, `enLookupClear` |
| Tag | `<en-tag>` | ✅ Pronto | `variant` (neutral/red/orange/yellow/green/teal/blue/purple), `dismissible` — evento: `enDismiss` |
| Switch | `<en-switch>` | ✅ Pronto | `checked`, `disabled`, `label`, `name`, `value` — split do `en-checkbox type="switch"` |

### 5d — Pendências

| Tarefa | Status | Descrição |
|---|---|---|
| Gerar wrappers React | ⏳ Planejado | `pnpm build:components:react` — pacote `@enotas-ds/components-react` |
| Mapear tokens para Cosmos | ✅ Pronto | `dist/cosmos-bridge.css` — redireciona `--en-*` → `--cds-*`; tokens de brand eNotas (teal/purple) são extensão permanente, não mapeados |
| Guia de migração | ⏳ Planejado | Doc: Razor → React, passo a passo |
| Nodes Figma p/ en-lookup, en-tag | ⏳ Planejado | Criar componentes no Figma e atualizar Code Connect |

---

## Como usar

### Setup (uma vez no `_Layout.cshtml`)

```html
<!-- 1. Fontes (Hotmart Sans, Hotmart Display, Font Awesome) -->
<link rel="stylesheet" href="/dist/fonts.css">
<!-- 2. Tokens e componentes -->
<link rel="stylesheet" href="/dist/tokens.css">
<script type="module" src="/dist/enotas-ds/enotas-ds.esm.js"></script>
```

### Exemplos em Razor Views

```html
<!-- Header da aplicação -->
<en-header user-name="João Silva" notification-count="3"></en-header>

<!-- Busca e filtros -->
<en-search placeholder="Buscar notas fiscais..."></en-search>
<div style="display:flex;gap:8px">
  <en-filter active>Todos</en-filter>
  <en-filter count="24">NFS-e</en-filter>
  <en-filter count="8">NF-e</en-filter>
</div>

<!-- Formulários -->
<en-input label="CNPJ" placeholder="00.000.000/0001-00" required></en-input>
<en-select label="Regime tributário" id="regime-select"></en-select>
<en-textarea label="Observações" rows="3"></en-textarea>
<en-checkbox type="switch" label="Emissão automática"></en-checkbox>
<en-input-tag label="Palavras-chave" placeholder="Digite e pressione Enter..."></en-input-tag>

<!-- Status e feedback -->
<en-badge intent="success">Autorizada</en-badge>
<en-nf-status type="nfs-e" status="emitida"></en-nf-status>
<en-spinner size="md"></en-spinner>

<!-- Navegação -->
<en-tab value="emitidas" status="active">Emitidas</en-tab>
<en-tab value="canceladas">Canceladas</en-tab>

<!-- Cards -->
<en-card size="large">
  <div slot="header">Resumo do mês</div>
  Notas emitidas: 142
  <div slot="footer"><en-button variant="ghost" size="sm">Ver todas</en-button></div>
</en-card>

<!-- Popover -->
<en-popover id="menu-perfil">
  <en-button slot="trigger" variant="ghost">Minha conta ▾</en-button>
</en-popover>

<!-- FAQ -->
<en-faq id="central-ajuda"></en-faq>

<!-- Onboarding -->
<en-stepper id="onboarding"></en-stepper>
```

### Inicializar via JavaScript (props que são objetos/arrays)

```js
// Select options
document.querySelector('#regime-select').options = [
  { value: 'simples', label: 'Simples Nacional' },
  { value: 'lucro-presumido', label: 'Lucro Presumido' },
  { value: 'mei', label: 'MEI' },
];

// Popover items
document.querySelector('#menu-perfil').items = [
  { label: 'Meu perfil', icon: 'user', value: 'profile' },
  { label: 'Configurações', icon: 'setting', value: 'settings' },
  { divider: true },
  { label: 'Sair', icon: 'exit-door', value: 'logout', danger: true },
];

// FAQ items
document.querySelector('#central-ajuda').items = [
  { question: 'O que é NFS-e?', answer: '...' },
  { question: 'Como cancelo uma nota?', answer: '...' },
];

// Stepper
document.querySelector('#onboarding').steps = [
  { label: 'Dados da empresa', description: 'CNPJ e endereço' },
  { label: 'Configuração fiscal', description: 'Regime tributário' },
  { label: 'Pronto!' },
];
```

### Eventos (JavaScript / jQuery)

```js
// Nativo
document.querySelector('en-button').addEventListener('enClick', (e) => { ... });
document.querySelector('en-search').addEventListener('enSearch', (e) => console.log(e.detail));
document.querySelector('en-popover').addEventListener('enPopoverSelect', (e) => console.log(e.detail.value));
document.querySelector('en-filter').addEventListener('enFilterChange', (e) => console.log(e.detail));

// jQuery
$('en-button').on('enClick', function(e) { ... });
$('en-select').on('enChange', function(e) { console.log(e.originalEvent.detail); });
$('en-input-tag').on('enTagAdd', function(e) { console.log('tag:', e.originalEvent.detail); });
```

---

## Links úteis

- [Figma — eNotas Design System](https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System)
- [Storybook local](http://localhost:6006) — `pnpm storybook`
- [CLAUDE.md](./CLAUDE.md) — guia para Claude Code
