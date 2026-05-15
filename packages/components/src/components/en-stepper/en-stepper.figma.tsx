import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-12816', {
  props: {
    currentStep: figma.enum('currentStep', { '1': 0, '2': 1, '3': 2, 'step4': 3 }),
  },
  example: ({ currentStep }) =>
    `<en-stepper .steps="\${steps}" current-step="${currentStep ?? 0}"></en-stepper>`,
});
