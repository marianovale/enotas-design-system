import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-17843', {
  props: {
    currentStep: figma.enum('state', {
      Start: 0,
      End:   3,
    }),
  },
  example: ({ currentStep }) =>
    `<en-tour open .steps="\${tourSteps}" current-step="${currentStep ?? 0}" finish-label="Começar agora" skip-label="Pular tour"></en-tour>`,
});
