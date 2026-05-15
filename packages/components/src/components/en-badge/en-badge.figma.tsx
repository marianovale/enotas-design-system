import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=2065-8356', {
  props: {
    variant: figma.enum('variant', {
      default:     'default',
      negative:    'negative',
      positive:    'positive',
      attention:   'attention',
      informative: 'informative',
      brand:       'brand',
    }),
    size: figma.enum('size', {
      sm: 'sm',
      md: 'md',
    }),
  },
  example: ({ variant, size }) =>
    `<en-badge variant="${variant ?? 'default'}" size="${size ?? 'md'}">Label</en-badge>`,
});
