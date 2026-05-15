import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-16183', {
  props: {
    openIndex: figma.enum('index', { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4 }),
  },
  example: ({ openIndex }) =>
    `<en-faq .items="\${faqItems}"${openIndex !== undefined ? ` open-index="${openIndex}"` : ''}></en-faq>`,
});
