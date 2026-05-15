# @enotas-ds/components

30 Web Components do eNotas DS construídos com **Stencil.js**.

Funcionam nativamente em qualquer HTML — ASP.NET Razor Views, jQuery, e também em React via wrappers auto-gerados.

---

## Instalação via script tag (Razor / .NET)

```html
<link rel="stylesheet" href="/dist/tokens.css">
<script type="module" src="/dist/enotas-ds/enotas-ds.esm.js"></script>
```

## Instalação via npm

```bash
pnpm add @enotas-ds/components
```

```ts
import { defineCustomElements } from '@enotas-ds/components/loader';
defineCustomElements();
```

---

## Componentes disponíveis

### Primitivos

| Tag | Props principais | Eventos |
|---|---|---|
| `<en-button>` | `variant`, `size`, `disabled`, `loading`, `pill`, `full-width` | `enClick` |
| `<en-badge>` | `variant`, `size`, `outline` | — |
| `<en-spinner>` | `size`, `variant`, `label` | — |
| `<en-input>` | `label`, `type`, `value`, `disabled`, `required`, `error`, `hint`, `variant-size` | `enInput`, `enChange`, `enFocus`, `enBlur` |
| `<en-textarea>` | `label`, `rows`, `value`, `disabled`, `required`, `error`, `hint`, `variant-size` | `enInput`, `enChange` |
| `<en-select>` | `label`, `options`, `value`, `disabled`, `required`, `error`, `hint` | `enChange` |
| `<en-checkbox>` | `checked`, `disabled`, `label`, `name`, `value` | `enChange` |
| `<en-icon>` | `name` (110+ ícones), `size` | — |
| `<en-tab>` | `status`, `value`, `disabled`, `count`, `href` | `enTabSelect` |
| `<en-input-tag>` | `value` (array), `label`, `disabled` | `enTagAdd`, `enTagRemove`, `enChange` |
| `<en-nf-status>` | `type` (nfs-e/nf-e/…), `status` | — |

### Compostos

| Tag | Props principais | Eventos |
|---|---|---|
| `<en-card>` | `size`, `bordered`, `clickable` — slots: `header`, default, `footer` | `enCardClick` |
| `<en-search>` | `value`, `placeholder`, `disabled` | `enSearch`, `enSearchClear` |
| `<en-filter>` | `active`, `value`, `count`, `disabled` | `enFilterChange` |
| `<en-faq>` | `items`, `open-index`, `multiple` | `enFaqToggle` |
| `<en-stepper>` | `steps`, `current-step` | `enStepperChange`, `enStepperComplete` |
| `<en-popover>` | `items`, `placement`, `min-width` — slot: `trigger` | `enPopoverSelect`, `enPopoverOpen`, `enPopoverClose` |
| `<en-header>` | `user-name`, `avatar-src`, `notification-count`, `show-search` | `enHeaderSearch`, `enHeaderNotification`, `enHeaderAvatarClick` |

### Avançados

| Tag | Props principais | Eventos |
|---|---|---|
| `<en-tooltip>` | `content`, `placement`, `align`, `disabled` | — |
| `<en-input-number>` | `value`, `min`, `max`, `step`, `label`, `disabled` | `enChange` |
| `<en-progress>` | `value`, `max`, `intent`, `label`, `show-label` | — |
| `<en-modal>` | `open`, `heading`, `size`, `closable` — slots: `header`, default, `footer` | `enModalClose` |
| `<en-nav-item>` | `icon`, `active`, `disabled`, `count`, `href`, `value` | `enNavItemClick` |
| `<en-footer>` | `version`, `company-name`, `year` | — |
| `<en-tour>` | `steps`, `open`, `current-step`, `finish-label`, `skip-label` | `enTourNext`, `enTourPrev`, `enTourFinish`, `enTourSkip` |

### Adicionais / Cosmos Alignment

| Tag | Props principais | Eventos |
|---|---|---|
| `<en-segmented>` | `options` (array), `value`, `disabled` | `enSegmentedChange` |
| `<en-loading-bar>` | `active`, `value` | — |
| `<en-lookup>` | `label`, `value`, `options`, `loading`, `multiple`, `disabled`, `error`, `hint` | `enSearch`, `enLookupChange`, `enLookupClear` |
| `<en-tag>` | `variant`, `dismissible` | `enDismiss` |
| `<en-switch>` | `checked`, `disabled`, `label`, `name`, `value` | `enChange` |

---

## Exemplos

### Formulário de emissão

```html
<en-input label="CNPJ" placeholder="00.000.000/0001-00" required></en-input>
<en-select label="Regime tributário" id="regime"></en-select>
<en-textarea label="Observações" rows="3"></en-textarea>
<en-checkbox label="Emitir automaticamente"></en-checkbox>
<en-button variant="primary" size="md">Emitir Nota</en-button>
```

```js
document.querySelector('#regime').options = [
  { value: 'simples', label: 'Simples Nacional' },
  { value: 'lucro-presumido', label: 'Lucro Presumido' },
];
```

### Listagem com status

```html
<en-search placeholder="Buscar notas..."></en-search>
<en-filter active count="142">Todas</en-filter>
<en-filter count="98">NFS-e</en-filter>
<en-filter count="44">NF-e</en-filter>

<!-- em cada linha da tabela -->
<en-nf-status type="nfs-e" status="emitida"></en-nf-status>
<en-badge variant="positive">Autorizada</en-badge>
```

### jQuery

```js
$('en-button').on('enClick', function(e) {
  // funciona nativamente com jQuery
});

$('en-search').on('enSearch', function(e) {
  var termo = e.originalEvent.detail;
  buscarNotas(termo);
});
```

---

## Estrutura de arquivos

Cada componente segue a convenção:

```
src/components/en-[nome]/
  en-[nome].tsx          # lógica Stencil — @Component, @Prop, @Event
  en-[nome].css          # estilos shadow DOM com tokens --en-*
  en-[nome].stories.ts   # story Storybook
  en-[nome].figma.tsx    # Code Connect mapping
  readme.md              # documentação auto-gerada pelo Stencil
```

---

## Build

```bash
# Web Components
pnpm build:components

# Wrappers React (integração Cosmos)
pnpm build:components:react

# Watch mode
pnpm --filter @enotas-ds/components dev
```
