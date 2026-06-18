/**
 * Code Connect — en-alert
 *
 * Props:
 *   @prop variant     — semântica: 'positive' | 'attention' | 'negative' | 'informative'
 *   @prop heading     — título opcional (bold)
 *   @prop dismissible — exibe botão de fechar (X)
 *   @prop icon        — exibe ícone de status (padrão true)
 *   @slot default     — descrição/corpo
 *   @slot action      — link/botão de ação
 *
 * Mapeado para a página de documentação "Alert" do arquivo do DS (node 2438:1075).
 * Quando existir um component set `en-alert` real (com variant properties) no
 * Figma, trocar o node-id por ele e reativar o mapeamento por `figma.enum`
 * (bloco comentado abaixo) para o Dev Mode popular a variante pela seleção.
 */

import figma from '@figma/code-connect';

const BASE_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=';

// Doc page "Alert" — mostra o snippet de uso no Dev Mode ao inspecionar a doc.
figma.connect(`${BASE_URL}2438-1075`, {
  example: () =>
    `<en-alert variant="attention" heading="Certificado vencendo" dismissible>
  O certificado digital A1 vence em 12 dias.
  <en-button slot="action" variant="primary" size="sm">Renovar</en-button>
</en-alert>`,
});

// Quando houver component set real, usar algo como:
// figma.connect(`${BASE_URL}<COMPONENT_SET_ID>`, {
//   props: {
//     variant: figma.enum('variant', {
//       positive: 'positive', attention: 'attention',
//       negative: 'negative', informative: 'informative',
//     }),
//     heading: figma.string('heading'),
//     dismissible: figma.boolean('dismissible'),
//     icon: figma.boolean('icon'),
//   },
//   example: ({ variant, heading, dismissible, icon }) => {
//     const v = variant ?? 'informative';
//     const h = heading ? ` heading="${heading}"` : '';
//     const d = dismissible ? ' dismissible' : '';
//     const i = icon === false ? ' icon="false"' : '';
//     return `<en-alert variant="${v}"${h}${d}${i}>Mensagem</en-alert>`;
//   },
// });
