import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-7346', {
  props: {
    visible: figma.enum('active', { true: true, false: false }),
  },
  example: () =>
    `<en-tooltip content="Texto explicativo" placement="top">\n  <en-button variant="ghost" size="sm">Ajuda</en-button>\n</en-tooltip>`,
});
