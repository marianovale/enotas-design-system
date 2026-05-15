import figma from '@figma/code-connect';

// dual-tab: Component=1|2|3|4 (número de opções)
figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-15139', {
  props: {},
  example: () =>
    `<en-segmented value="month" .options="\${[\n  { value: 'month', label: 'Mês' },\n  { value: 'quarter', label: 'Trimestre' },\n  { value: 'year', label: 'Ano' },\n]}"></en-segmented>`,
});
