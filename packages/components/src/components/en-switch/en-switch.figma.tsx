import figma from '@figma/code-connect';

// en-switch mapeia para o component set 'checkbox' filtrado por type=switch
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183', {
  variant: { type: 'switch' },
  props: {
    checked: figma.enum('active', { true: true, false: false }),
    hasLabel: figma.enum('label', { true: true, false: false }),
  },
  example: ({ checked, hasLabel }) =>
    `<en-switch${checked ? ' checked' : ''}${hasLabel ? ' label="Label"' : ''}></en-switch>`,
});
