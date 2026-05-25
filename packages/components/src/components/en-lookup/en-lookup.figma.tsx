import figma from '@figma/code-connect';

// Equivalente Cosmos: Combobox
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2396-45835', {
  props: {
    disabled: figma.enum('state', { disabled: true }),
    loading:  figma.enum('state', { loading: true }),
  },
  example: ({ disabled, loading }) =>
    `<en-lookup label="Tomador" placeholder="Buscar..."${loading ? ' loading' : ''}${disabled ? ' disabled' : ''}></en-lookup>`,
});
