import figma from '@figma/code-connect';

// Figma prop: state (default | hover | focus | finished | Edit Default | Edit | Edit Focus | inactived)
// finished = campo preenchido (valor válido), inactived = disabled
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8016', {
  props: {
    disabled: figma.enum('state', { inactived: true }),
    error:    figma.enum('state', { finished: false }),
  },
  example: ({ disabled }) =>
    `<en-input label="CNPJ" placeholder="00.000.000/0001-00"${disabled ? ' disabled' : ''}></en-input>`,
});
