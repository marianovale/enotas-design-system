import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12797', {
  props: {
    updated: figma.enum('variant', { updated: true }),
  },
  example: () =>
    `<en-header user-name="Nome do usuário" notification-count="3"></en-header>`,
});
