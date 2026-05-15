import figma from '@figma/code-connect';

// Figma prop: state (default | hover | focus | finished | edit -> hover | edit -> focus | inactived)
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8051', {
  props: {
    disabled: figma.enum('state', { inactived: true }),
  },
  example: ({ disabled }) =>
    `<en-textarea label="Observações" placeholder="Descreva aqui..." rows="4"${disabled ? ' disabled' : ''}></en-textarea>`,
});
