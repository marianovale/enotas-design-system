import figma from '@figma/code-connect';

// Figma prop: state (default | hovering | active)
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-3475', {
  props: {
    active: figma.enum('state', { active: true }),
  },
  example: ({ active }) =>
    `<en-nav-item icon="dashboard"${active ? ' active' : ''}>Dashboard</en-nav-item>`,
});
