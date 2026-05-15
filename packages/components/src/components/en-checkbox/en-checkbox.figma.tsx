import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8183', {
  props: {
    type:    figma.enum('type', { switch: 'switch', square: 'square', round: 'round' }),
    checked: figma.enum('active', {
      true:          true,
      false:         false,
      indeterminate: 'indeterminate',
    }),
  },
  example: ({ type, checked }) => {
    const checkedAttr = checked === 'indeterminate'
      ? ' checked="indeterminate"'
      : checked ? ' checked' : '';
    return `<en-checkbox type="${type ?? 'square'}"${checkedAttr} label="Label"></en-checkbox>`;
  },
});
