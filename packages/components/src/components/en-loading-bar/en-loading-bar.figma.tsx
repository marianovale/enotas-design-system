import figma from '@figma/code-connect';

// loadingBar: position (start | 50)
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12089', {
  props: {
    value: figma.enum('position', { start: 0, '50': 50 }),
  },
  example: ({ value }) =>
    `<en-loading-bar active${value ? ` value="${value}"` : ''}></en-loading-bar>`,
});
