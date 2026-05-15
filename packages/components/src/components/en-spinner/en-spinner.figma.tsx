import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8176', {
  props: {
    size: figma.enum('state', {
      start:  'sm',
      rotate: 'default',
      finish: 'lg',
    }),
  },
  example: ({ size }) =>
    `<en-spinner size="${size ?? 'default'}"></en-spinner>`,
});
