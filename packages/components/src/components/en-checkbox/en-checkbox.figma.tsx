import figma from '@figma/code-connect';

/**
 * en-checkbox — caixa de seleção com três variantes visuais.
 *
 * Props:
 *  - type: 'square' | 'round' | 'switch'  — variante visual do controle
 *  - checked: boolean | 'indeterminate'    — estado marcado; 'indeterminate' exibe traço (−)
 *  - disabled: boolean                     — desabilita interação e aplica opacity 0.4
 *  - label: string                         — texto visível ao lado do controle
 *  - name / value: string                  — úteis em forms nativos
 *
 * Evento:
 *  - enChange: CustomEvent<boolean>        — emitido ao clicar; value = novo estado checked
 */

// ─── Square (default) ────────────────────────────────────────────────────────

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'square', active: 'false' },
    props: {
      disabled: figma.enum('state', { inactive: true, default: false }),
      label: figma.string('Label'),
    },
    example: ({ disabled, label }) =>
      `<en-checkbox type="square" label="${label ?? 'Label'}"${disabled ? ' disabled' : ''}></en-checkbox>`,
  },
);

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'square', active: 'true' },
    props: {
      disabled: figma.enum('state', { inactive: true, default: false }),
      label: figma.string('Label'),
    },
    example: ({ disabled, label }) =>
      `<en-checkbox type="square" checked label="${label ?? 'Label'}"${disabled ? ' disabled' : ''}></en-checkbox>`,
  },
);

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'square', active: 'indeterminate' },
    props: {
      disabled: figma.enum('state', { inactive: true, default: false }),
      label: figma.string('Label'),
    },
    example: ({ disabled, label }) =>
      `<en-checkbox type="square" checked="indeterminate" label="${label ?? 'Label'}"${disabled ? ' disabled' : ''}></en-checkbox>`,
  },
);

// ─── Round ────────────────────────────────────────────────────────────────────

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'round', active: 'false' },
    props: {
      disabled: figma.enum('state', { inactive: true, default: false }),
      label: figma.string('Label'),
    },
    example: ({ disabled, label }) =>
      `<en-checkbox type="round" label="${label ?? 'Label'}"${disabled ? ' disabled' : ''}></en-checkbox>`,
  },
);

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'round', active: 'true' },
    props: {
      disabled: figma.enum('state', { inactive: true, default: false }),
      label: figma.string('Label'),
    },
    example: ({ disabled, label }) =>
      `<en-checkbox type="round" checked label="${label ?? 'Label'}"${disabled ? ' disabled' : ''}></en-checkbox>`,
  },
);

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'round', active: 'indeterminate' },
    props: {
      disabled: figma.enum('state', { inactive: true, default: false }),
      label: figma.string('Label'),
    },
    example: ({ disabled, label }) =>
      `<en-checkbox type="round" checked="indeterminate" label="${label ?? 'Label'}"${disabled ? ' disabled' : ''}></en-checkbox>`,
  },
);

// ─── Switch ───────────────────────────────────────────────────────────────────

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'switch', active: 'false' },
    props: {
      disabled: figma.enum('state', { inactive: true, default: false }),
      label: figma.string('Label'),
    },
    example: ({ disabled, label }) =>
      `<en-checkbox type="switch" label="${label ?? 'Label'}"${disabled ? ' disabled' : ''}></en-checkbox>`,
  },
);

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'switch', active: 'true' },
    props: {
      disabled: figma.enum('state', { inactive: true, default: false }),
      label: figma.string('Label'),
    },
    example: ({ disabled, label }) =>
      `<en-checkbox type="switch" checked label="${label ?? 'Label'}"${disabled ? ' disabled' : ''}></en-checkbox>`,
  },
);
