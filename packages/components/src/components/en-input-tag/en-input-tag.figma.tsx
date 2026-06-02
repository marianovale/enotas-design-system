import figma from '@figma/code-connect';

/**
 * en-input-tag — campo de entrada de múltiplas tags.
 *
 * Props:
 *   label       {string}    - Label visível acima do campo
 *   placeholder {string}    - Texto exibido quando o campo está vazio e sem tags
 *   value       {string[]}  - Array de tags presentes no campo
 *   disabled    {boolean}   - Desabilita interação (somente-leitura)
 *   error       {string}    - Mensagem de erro — ativa estado de erro visualmente
 *   hint        {string}    - Texto auxiliar exibido abaixo do campo quando não há erro
 *
 * Eventos:
 *   enTagAdd    {string}    - Disparado ao confirmar uma nova tag (Enter / vírgula / blur)
 *   enTagRemove {string}    - Disparado ao remover uma tag existente
 *   enChange    {string[]}  - Disparado após qualquer mudança no array de tags
 */

// Estado "Key" — campo vazio, sem tags
figma.connect(
  'en-input-tag',
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15362',
  {
    variant: { variant: 'Key' },
    props: {
      label: figma.string('Label'),
      placeholder: figma.string('Placeholder'),
    },
    example: ({ label, placeholder }) =>
      `<en-input-tag label="${label}" placeholder="${placeholder}"></en-input-tag>`,
  },
);

// Estado "Digited" — campo com tags preenchidas
figma.connect(
  'en-input-tag',
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15362',
  {
    variant: { variant: 'Digited' },
    props: {
      label: figma.string('Label'),
      placeholder: figma.string('Placeholder'),
    },
    example: ({ label, placeholder }) =>
      `<en-input-tag
  label="${label}"
  placeholder="${placeholder}"
  .value="\${tags}"
></en-input-tag>`,
  },
);

// Estado "Disabled" — campo desabilitado (somente-leitura)
figma.connect(
  'en-input-tag',
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15362',
  {
    variant: { variant: 'Disabled' },
    props: {
      label: figma.string('Label'),
    },
    example: ({ label }) =>
      `<en-input-tag
  label="${label}"
  disabled
  .value="\${tags}"
></en-input-tag>`,
  },
);

// Estado "Error" — campo com mensagem de erro
figma.connect(
  'en-input-tag',
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15362',
  {
    variant: { variant: 'Error' },
    props: {
      label: figma.string('Label'),
      error: figma.string('Error'),
    },
    example: ({ label, error }) =>
      `<en-input-tag
  label="${label}"
  error="${error}"
></en-input-tag>`,
  },
);
