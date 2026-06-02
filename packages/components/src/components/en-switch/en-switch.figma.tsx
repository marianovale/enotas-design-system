import figma from '@figma/code-connect';

/**
 * en-switch — Code Connect para o component set 'checkbox' filtrado por type=switch.
 *
 * Props mapeadas:
 * @prop checked  — estado ligado/desligado
 * @prop disabled — desabilita a interação
 * @prop label    — texto visível ao lado do switch
 * @prop value    — valor submetido ao formulário quando checked (padrão: "on")
 * @prop name     — nome do campo para formulários nativos
 *
 * Evento:
 * @event enChange — emitido ao alternar; payload: boolean (novo valor de checked)
 */

// Estado: desligado, sem label
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'switch', active: 'false', label: 'false' },
    example: () => `<en-switch></en-switch>`,
  },
);

// Estado: desligado, com label
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'switch', active: 'false', label: 'true' },
    example: () => `<en-switch label="Label"></en-switch>`,
  },
);

// Estado: ligado, sem label
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'switch', active: 'true', label: 'false' },
    example: () => `<en-switch checked></en-switch>`,
  },
);

// Estado: ligado, com label
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'switch', active: 'true', label: 'true' },
    example: () => `<en-switch checked label="Label"></en-switch>`,
  },
);

// Estado: desabilitado, desligado, com label
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'switch', active: 'false', state: 'inactive', label: 'true' },
    example: () => `<en-switch disabled label="Label"></en-switch>`,
  },
);

// Estado: desabilitado, ligado, com label
figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183',
  {
    variant: { type: 'switch', active: 'true', state: 'inactive', label: 'true' },
    example: () => `<en-switch checked disabled label="Label"></en-switch>`,
  },
);
