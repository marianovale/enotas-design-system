/**
 * Code Connect — en-tag
 *
 * @component en-tag
 *
 * @prop {TagVariant} variant
 *   Cor da tag: 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple'
 *   Default: 'neutral'
 *
 * @prop {boolean} dismissible
 *   Exibe um botão de fechar (×) ao lado do conteúdo.
 *   Ao clicar, dispara o evento `enDismiss`.
 *   Default: false
 *
 * @event enDismiss
 *   Disparado quando o usuário clica no botão de fechar.
 *   Só existe quando `dismissible` é true.
 *
 * @slot (default)
 *   Texto ou conteúdo interno da tag.
 *
 * @example Uso básico
 *   <en-tag variant="teal">NFS-e</en-tag>
 *
 * @example Com dismiss
 *   <en-tag variant="blue" dismissible>Autorizada</en-tag>
 */

import figma from '@figma/code-connect';

const BASE_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2065-8405';

/* ------------------------------------------------------------------ */
/* Connect por variante (sem dismissible)                               */
/* ------------------------------------------------------------------ */

figma.connect('<en-tag>', BASE_URL, {
  variant: { variant: 'neutral', dismissible: 'false' },
  example: () => `<en-tag variant="neutral">Label</en-tag>`,
});

figma.connect('<en-tag>', BASE_URL, {
  variant: { variant: 'red', dismissible: 'false' },
  example: () => `<en-tag variant="red">Label</en-tag>`,
});

figma.connect('<en-tag>', BASE_URL, {
  variant: { variant: 'orange', dismissible: 'false' },
  example: () => `<en-tag variant="orange">Label</en-tag>`,
});

figma.connect('<en-tag>', BASE_URL, {
  variant: { variant: 'yellow', dismissible: 'false' },
  example: () => `<en-tag variant="yellow">Label</en-tag>`,
});

figma.connect('<en-tag>', BASE_URL, {
  variant: { variant: 'green', dismissible: 'false' },
  example: () => `<en-tag variant="green">Label</en-tag>`,
});

figma.connect('<en-tag>', BASE_URL, {
  variant: { variant: 'teal', dismissible: 'false' },
  example: () => `<en-tag variant="teal">Label</en-tag>`,
});

figma.connect('<en-tag>', BASE_URL, {
  variant: { variant: 'blue', dismissible: 'false' },
  example: () => `<en-tag variant="blue">Label</en-tag>`,
});

figma.connect('<en-tag>', BASE_URL, {
  variant: { variant: 'purple', dismissible: 'false' },
  example: () => `<en-tag variant="purple">Label</en-tag>`,
});

/* ------------------------------------------------------------------ */
/* Connect com dismissible (mostra o evento enDismiss)                  */
/* ------------------------------------------------------------------ */

figma.connect('<en-tag>', BASE_URL, {
  variant: { dismissible: 'true' },
  props: {
    variant: figma.enum('variant', {
      neutral: 'neutral',
      red:     'red',
      orange:  'orange',
      yellow:  'yellow',
      green:   'green',
      teal:    'teal',
      blue:    'blue',
      purple:  'purple',
    }),
  },
  example: ({ variant }) =>
    `<en-tag variant="${variant ?? 'neutral'}" dismissible>Label</en-tag>`,
});
