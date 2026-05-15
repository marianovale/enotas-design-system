import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-4457', {
  props: {
    value: figma.enum('value', {
      start:    0,
      finished: 100,
    }),
  },
  example: ({ value }) =>
    `<en-progress value="${value ?? 65}" show-label label="Processando..."></en-progress>`,
});
