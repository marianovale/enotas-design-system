import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-9333', {
  props: {
    value: figma.enum('state', {
      Default:  0,
      Hovering: 0,
      Focus:    0,
      Finished: 5,
    }),
  },
  example: ({ value }) =>
    `<en-input-number label="Quantidade" value="${value ?? 0}" min="0" max="100"></en-input-number>`,
});
