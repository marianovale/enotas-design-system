import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12619', {
  props: {
    itemCount: figma.enum('count', {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '15': 15,
    }),
  },
  example: () =>
    `<en-popover .items="\${items}">\n  <en-button slot="trigger" variant="ghost">Opções ▾</en-button>\n</en-popover>`,
});
