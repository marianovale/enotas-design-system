/**
 * Code Connect — en-badge
 *
 * Props:
 *   @prop variant  — aparência semântica: 'default' | 'positive' | 'negative' |
 *                    'attention' | 'informative' | 'brand'
 *   @prop size     — altura do badge: 'sm' (1.25rem) | 'md' (1.5rem, padrão)
 *   @prop outline  — quando true, exibe borda colorida sem fundo sólido
 *   @slot default  — texto ou conteúdo do badge (não é uma prop)
 *
 * O connect genérico (nó raiz do component set) cobre todos os casos.
 * Os connects individuais por variante garantem que o Dev Mode exiba o snippet
 * correto ao inspecionar um nó específico do component set no Figma.
 */

import figma from '@figma/code-connect';

const BASE_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=';

// ---------------------------------------------------------------------------
// Connect genérico — nó raiz do component set (cobre seleções sem nó próprio)
// ---------------------------------------------------------------------------
figma.connect(`${BASE_URL}2065-8356`, {
  props: {
    variant: figma.enum('variant', {
      default:     'default',
      negative:    'negative',
      positive:    'positive',
      attention:   'attention',
      informative: 'informative',
      brand:       'brand',
    }),
    size: figma.enum('size', {
      sm: 'sm',
      md: 'md',
    }),
    outline: figma.boolean('outline'),
  },
  example: ({ variant, size, outline }) => {
    const v = variant ?? 'default';
    const s = size ?? 'md';
    const outlineAttr = outline ? ' outline' : '';
    const sizeAttr = s !== 'md' ? ` size="${s}"` : '';
    return `<en-badge variant="${v}"${sizeAttr}${outlineAttr}>Label</en-badge>`;
  },
});

// ---------------------------------------------------------------------------
// Connects individuais — variante solid (sem outline)
// ---------------------------------------------------------------------------

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'default', outline: 'false' },
  example: () => `<en-badge variant="default">Label</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'positive', outline: 'false' },
  example: () => `<en-badge variant="positive">Autorizada</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'negative', outline: 'false' },
  example: () => `<en-badge variant="negative">Rejeitada</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'attention', outline: 'false' },
  example: () => `<en-badge variant="attention">Pendente</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'informative', outline: 'false' },
  example: () => `<en-badge variant="informative">Em análise</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'brand', outline: 'false' },
  example: () => `<en-badge variant="brand">eNotas</en-badge>`,
});

// ---------------------------------------------------------------------------
// Connects individuais — variante outline
// ---------------------------------------------------------------------------

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'default', outline: 'true' },
  example: () => `<en-badge variant="default" outline>Label</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'positive', outline: 'true' },
  example: () => `<en-badge variant="positive" outline>Autorizada</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'negative', outline: 'true' },
  example: () => `<en-badge variant="negative" outline>Rejeitada</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'attention', outline: 'true' },
  example: () => `<en-badge variant="attention" outline>Pendente</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'informative', outline: 'true' },
  example: () => `<en-badge variant="informative" outline>Em análise</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { variant: 'brand', outline: 'true' },
  example: () => `<en-badge variant="brand" outline>eNotas</en-badge>`,
});

// ---------------------------------------------------------------------------
// Connects para size sm (solid + outline)
// ---------------------------------------------------------------------------

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { size: 'sm', outline: 'false' },
  props: {
    variant: figma.enum('variant', {
      default:     'default',
      negative:    'negative',
      positive:    'positive',
      attention:   'attention',
      informative: 'informative',
      brand:       'brand',
    }),
  },
  example: ({ variant }) =>
    `<en-badge variant="${variant ?? 'default'}" size="sm">Label</en-badge>`,
});

figma.connect(`${BASE_URL}2065-8356`, {
  variant: { size: 'sm', outline: 'true' },
  props: {
    variant: figma.enum('variant', {
      default:     'default',
      negative:    'negative',
      positive:    'positive',
      attention:   'attention',
      informative: 'informative',
      brand:       'brand',
    }),
  },
  example: ({ variant }) =>
    `<en-badge variant="${variant ?? 'default'}" size="sm" outline>Label</en-badge>`,
});
