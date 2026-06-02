/**
 * Code Connect — en-button
 *
 * Props:
 *   @prop variant      — aparência do botão: 'default' | 'secondary' | 'ghost' |
 *                        'negative' | 'cta' | 'link' | 'positive' | 'attention' |
 *                        'informative' | 'white'
 *   @prop size         — altura do botão: 'sm' (32 px) | 'md' (40 px, padrão) | 'lg' (48 px)
 *   @prop disabled     — desabilita interação e reduz opacity
 *   @prop loading      — exibe spinner no lugar do conteúdo e bloqueia clique
 *   @prop fullWidth    — ocupa 100 % da largura do container pai
 *   @prop pill         — border-radius full, formato pílula
 *   @slot default      — texto do botão
 *   @slot prefix       — ícone posicionado antes do texto
 *   @slot suffix       — ícone posicionado após o texto
 *
 * Nomes de variante no Figma (após rename) → valor da prop `variant`:
 *   "default"        → 'default'   (primário teal)
 *   "secondary"      → 'secondary' (outline)
 *   "ghost"          → 'ghost'     (sem fundo)
 *   "Primary · Danger" / "negative" → 'negative' (vermelho)
 *   "Link"           → 'link'      (só texto)
 *   "cta"            → 'cta'       (laranja)
 *
 * Evento:
 *   enClick: CustomEvent<MouseEvent> — emitido ao clicar (não emite se disabled/loading)
 */

import figma from '@figma/code-connect';

const FIGMA_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-3105';

// ---------------------------------------------------------------------------
// Connect genérico — nó raiz do component set
// Cobre seleções que não batam em nenhum connect específico abaixo.
// ---------------------------------------------------------------------------

/** Connect genérico: reflete todas as combinações de variante/tamanho. */
figma.connect(FIGMA_URL, {
  props: {
    variant: figma.enum('variant', {
      default:           'default',
      secondary:         'secondary',
      ghost:             'ghost',
      negative:          'negative',
      'Primary · Danger': 'negative',
      link:              'link',
      Link:              'link',
      cta:               'cta',
    }),
    size: figma.enum('size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    disabled: figma.enum('state', { inactive: true, default: false }),
    loading:  figma.enum('state', { loading: true,  default: false }),
  },
  example: ({ variant, size, disabled, loading }) => {
    const v = variant ?? 'default';
    const s = size    ?? 'md';
    const sizeAttr    = s !== 'md' ? ` size="${s}"` : '';
    const disabledAttr = disabled  ? ' disabled'    : '';
    const loadingAttr  = loading   ? ' loading'     : '';
    return `<en-button variant="${v}"${sizeAttr}${disabledAttr}${loadingAttr}>Label</en-button>`;
  },
});

// ---------------------------------------------------------------------------
// Variantes principais — tamanho md, estado normal
// ---------------------------------------------------------------------------

/** Variante default: botão primário teal, tamanho md. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'default', size: 'md', state: 'default' },
  example: () => `<en-button variant="default">Label</en-button>`,
});

/** Variante secondary: outline com borda colorida, tamanho md. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'secondary', size: 'md', state: 'default' },
  example: () => `<en-button variant="secondary">Label</en-button>`,
});

/** Variante ghost: sem fundo nem borda, tamanho md. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'ghost', size: 'md', state: 'default' },
  example: () => `<en-button variant="ghost">Label</en-button>`,
});

/** Variante negative: ação destrutiva / perigo, fundo vermelho, tamanho md. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'negative', size: 'md', state: 'default' },
  example: () => `<en-button variant="negative">Label</en-button>`,
});

/** Variante negative (alias de nome antigo "Primary · Danger" no Figma). */
figma.connect(FIGMA_URL, {
  variant: { variant: 'Primary · Danger', size: 'md', state: 'default' },
  example: () => `<en-button variant="negative">Label</en-button>`,
});

/** Variante link: somente texto, sem fundo nem borda, tamanho md. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'link', size: 'md', state: 'default' },
  example: () => `<en-button variant="link">Label</en-button>`,
});

/** Variante link (alias de nome "Link" no Figma, com L maiúsculo). */
figma.connect(FIGMA_URL, {
  variant: { variant: 'Link', size: 'md', state: 'default' },
  example: () => `<en-button variant="link">Label</en-button>`,
});

/** Variante cta: call-to-action laranja, tamanho md. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'cta', size: 'md', state: 'default' },
  example: () => `<en-button variant="cta">Label</en-button>`,
});

// ---------------------------------------------------------------------------
// Estado: disabled — qualquer variante
// ---------------------------------------------------------------------------

/** Estado disabled: variante default desabilitada. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'default', state: 'inactive' },
  example: () => `<en-button variant="default" disabled>Label</en-button>`,
});

/** Estado disabled: variante secondary desabilitada. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'secondary', state: 'inactive' },
  example: () => `<en-button variant="secondary" disabled>Label</en-button>`,
});

/** Estado disabled: variante ghost desabilitada. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'ghost', state: 'inactive' },
  example: () => `<en-button variant="ghost" disabled>Label</en-button>`,
});

/** Estado disabled: variante negative desabilitada. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'negative', state: 'inactive' },
  example: () => `<en-button variant="negative" disabled>Label</en-button>`,
});

/** Estado disabled: variante link desabilitada. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'link', state: 'inactive' },
  example: () => `<en-button variant="link" disabled>Label</en-button>`,
});

/** Estado disabled: variante cta desabilitada. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'cta', state: 'inactive' },
  example: () => `<en-button variant="cta" disabled>Label</en-button>`,
});

// ---------------------------------------------------------------------------
// Estado: loading — qualquer variante
// ---------------------------------------------------------------------------

/** Estado loading: variante default com spinner. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'default', state: 'loading' },
  example: () => `<en-button variant="default" loading>Label</en-button>`,
});

/** Estado loading: variante secondary com spinner. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'secondary', state: 'loading' },
  example: () => `<en-button variant="secondary" loading>Label</en-button>`,
});

/** Estado loading: variante ghost com spinner. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'ghost', state: 'loading' },
  example: () => `<en-button variant="ghost" loading>Label</en-button>`,
});

/** Estado loading: variante negative com spinner. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'negative', state: 'loading' },
  example: () => `<en-button variant="negative" loading>Label</en-button>`,
});

/** Estado loading: variante cta com spinner. */
figma.connect(FIGMA_URL, {
  variant: { variant: 'cta', state: 'loading' },
  example: () => `<en-button variant="cta" loading>Label</en-button>`,
});

// ---------------------------------------------------------------------------
// Tamanhos — size sm e lg (md já coberto acima)
// ---------------------------------------------------------------------------

/** Tamanho sm (32 px): variante default pequena. */
figma.connect(FIGMA_URL, {
  variant: { size: 'sm', state: 'default' },
  props: {
    variant: figma.enum('variant', {
      default:           'default',
      secondary:         'secondary',
      ghost:             'ghost',
      negative:          'negative',
      'Primary · Danger': 'negative',
      link:              'link',
      Link:              'link',
      cta:               'cta',
    }),
  },
  example: ({ variant }) =>
    `<en-button variant="${variant ?? 'default'}" size="sm">Label</en-button>`,
});

/** Tamanho lg (48 px): variante default grande. */
figma.connect(FIGMA_URL, {
  variant: { size: 'lg', state: 'default' },
  props: {
    variant: figma.enum('variant', {
      default:           'default',
      secondary:         'secondary',
      ghost:             'ghost',
      negative:          'negative',
      'Primary · Danger': 'negative',
      link:              'link',
      Link:              'link',
      cta:               'cta',
    }),
  },
  example: ({ variant }) =>
    `<en-button variant="${variant ?? 'default'}" size="lg">Label</en-button>`,
});

// ---------------------------------------------------------------------------
// Posicionamento de ícone — slots prefix / suffix / icon-only
// ---------------------------------------------------------------------------

/**
 * Ícone à esquerda: usa o slot "prefix".
 * Substitua o name do en-icon pelo ícone real do contexto.
 */
figma.connect(FIGMA_URL, {
  variant: { icon: 'left', state: 'default' },
  props: {
    variant: figma.enum('variant', {
      default:   'default',
      secondary: 'secondary',
      ghost:     'ghost',
      negative:  'negative',
      cta:       'cta',
    }),
    size: figma.enum('size', { sm: 'sm', md: 'md', lg: 'lg' }),
  },
  example: ({ variant, size }) => {
    const sizeAttr = size && size !== 'md' ? ` size="${size}"` : '';
    return (
      `<en-button variant="${variant ?? 'default'}"${sizeAttr}>\n` +
      `  <en-icon slot="prefix" name="placeholder"></en-icon>\n` +
      `  Label\n` +
      `</en-button>`
    );
  },
});

/**
 * Ícone à direita: usa o slot "suffix".
 * Substitua o name do en-icon pelo ícone real do contexto.
 */
figma.connect(FIGMA_URL, {
  variant: { icon: 'right', state: 'default' },
  props: {
    variant: figma.enum('variant', {
      default:   'default',
      secondary: 'secondary',
      ghost:     'ghost',
      negative:  'negative',
      cta:       'cta',
    }),
    size: figma.enum('size', { sm: 'sm', md: 'md', lg: 'lg' }),
  },
  example: ({ variant, size }) => {
    const sizeAttr = size && size !== 'md' ? ` size="${size}"` : '';
    return (
      `<en-button variant="${variant ?? 'default'}"${sizeAttr}>\n` +
      `  Label\n` +
      `  <en-icon slot="suffix" name="placeholder"></en-icon>\n` +
      `</en-button>`
    );
  },
});

/**
 * Botão icon-only (sem texto): apenas o slot default com o ícone.
 * Use aria-label para acessibilidade.
 */
figma.connect(FIGMA_URL, {
  variant: { icon: 'center', state: 'default' },
  props: {
    variant: figma.enum('variant', {
      default:   'default',
      secondary: 'secondary',
      ghost:     'ghost',
      negative:  'negative',
      cta:       'cta',
    }),
    size: figma.enum('size', { sm: 'sm', md: 'md', lg: 'lg' }),
  },
  example: ({ variant, size }) => {
    const sizeAttr = size && size !== 'md' ? ` size="${size}"` : '';
    return (
      `<en-button variant="${variant ?? 'default'}"${sizeAttr} aria-label="Ação">\n` +
      `  <en-icon name="placeholder"></en-icon>\n` +
      `</en-button>`
    );
  },
});

/**
 * Botão ícone duplo (dual): ícone em ambos os lados — prefix + suffix.
 */
figma.connect(FIGMA_URL, {
  variant: { icon: 'dual', state: 'default' },
  props: {
    variant: figma.enum('variant', {
      default:   'default',
      secondary: 'secondary',
      ghost:     'ghost',
    }),
    size: figma.enum('size', { sm: 'sm', md: 'md', lg: 'lg' }),
  },
  example: ({ variant, size }) => {
    const sizeAttr = size && size !== 'md' ? ` size="${size}"` : '';
    return (
      `<en-button variant="${variant ?? 'default'}"${sizeAttr}>\n` +
      `  <en-icon slot="prefix" name="placeholder"></en-icon>\n` +
      `  Label\n` +
      `  <en-icon slot="suffix" name="placeholder"></en-icon>\n` +
      `</en-button>`
    );
  },
});
