import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2065-8405', {
  props: {
    variant: figma.enum('variant', {
      neutral: 'neutral',
      red:     'red',
      orange:  'orange',
      yellow:  'yellow',
      green:   'green',
      teal:    'teal',
      blue:    'blue',
      purple:  'purple',
    }),
    dismissible: figma.enum('dismissible', {
      true:  true,
      false: false,
    }),
  },
  example: ({ variant, dismissible }) =>
    `<en-tag variant="${variant ?? 'neutral'}"${dismissible ? ' dismissible' : ''}>Label</en-tag>`,
});
