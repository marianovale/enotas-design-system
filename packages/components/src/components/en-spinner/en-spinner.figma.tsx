/**
 * Code Connect — en-spinner
 *
 * Props mapeadas:
 *   size    — tamanho do spinner: 'xs' | 'sm' | 'md' | 'lg' | 'xl' ('default' é alias de 'md')
 *   variant — espessura do traço: 'default' | 'thin' | 'thick'
 *   label   — texto acessível lido por screen readers (não visível)
 *
 * Sem eventos — o componente é puramente visual / de estado.
 *
 * Nota: o nó Figma 290-8176 representa o estado animado canônico do spinner.
 * Os frames internos 'start', 'rotate' e 'finish' são quadros da animação Figma
 * e não correspondem a nenhuma prop do componente — o spinner sempre gira via CSS.
 */
import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-8176',
  {
    props: {
      // O nó Figma expõe uma propriedade "Size" com os valores canônicos.
      // Caso o arquivo use apenas o estado animado sem variante de tamanho,
      // este connect representa o tamanho padrão (md).
      size: figma.enum('Size', {
        XS: 'xs',
        SM: 'sm',
        MD: 'md',
        LG: 'lg',
        XL: 'xl',
      }),
      label: figma.string('Label'),
    },
    example: ({ size, label }) =>
      `<en-spinner size="${size ?? 'md'}" label="${label ?? 'Carregando...'}"></en-spinner>`,
  },
);
