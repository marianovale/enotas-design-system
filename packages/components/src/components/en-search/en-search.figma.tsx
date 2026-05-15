import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-16006', {
  props: {
    value: figma.enum('variant', {
      typing:    'termo buscado',
      searching: 'termo buscado',
      actived:   'termo buscado',
    }),
  },
  example: ({ value }) =>
    `<en-search placeholder="Buscar notas fiscais..."${value ? ` value="${value}"` : ''}></en-search>`,
});
