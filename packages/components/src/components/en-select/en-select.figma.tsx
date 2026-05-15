import figma from '@figma/code-connect';

// Figma prop: state (default | hover | focus | finished)
// finished = opção selecionada
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8082', {
  props: {
    disabled: figma.enum('state', { inactived: true }),
  },
  example: ({ disabled }) =>
    `<en-select label="Regime tributário" .options="\${options}"${disabled ? ' disabled' : ''}></en-select>`,
});
