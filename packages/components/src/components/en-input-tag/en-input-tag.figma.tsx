import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15362', {
  props: {
    hasValue: figma.enum('variant', { Key: true, Digited: true }),
  },
  example: ({ hasValue }) =>
    `<en-input-tag label="Palavras-chave" placeholder="Digite e pressione Enter..."${hasValue ? ' .value="${tags}"' : ''}></en-input-tag>`,
});
