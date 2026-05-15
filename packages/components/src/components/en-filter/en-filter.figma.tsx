import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15115', {
  props: {
    active: figma.enum('state', { Active: true }),
    count:  figma.enum('variant', { '2': 24 }),
  },
  example: ({ active, count }) =>
    `<en-filter${active ? ' active' : ''}${count ? ` count="${count}"` : ''}>NFS-e</en-filter>`,
});
