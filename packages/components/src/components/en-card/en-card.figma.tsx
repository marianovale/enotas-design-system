import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-4460', {
  props: {
    size: figma.enum('size', { large: 'large', small: 'small' }),
  },
  example: ({ size }) =>
    `<en-card size="${size}">\n  <!-- conteúdo -->\n</en-card>`,
});
