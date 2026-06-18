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
 * ⚠️ NODE_ID pendente: substituir o placeholder abaixo pelo node-id real do
 * component set `en-alert` no Figma assim que ele for criado (ver página de
 * documentação do DS). Enquanto estiver como TODO, `pnpm figma:connect` deve
 * pular este arquivo.
 */

import figma from '@figma/code-connect';

const BASE_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=';

// TODO: trocar TODO-en-alert pelo node-id do component set no Figma.
figma.connect(`${BASE_URL}TODO-en-alert`, {
  props: {
    variant: figma.enum('variant', {
      positive:    'positive',
      attention:   'attention',
      negative:    'negative',
      informative: 'informative',
    }),
    heading: figma.string('heading'),
    dismissible: figma.boolean('dismissible'),
    icon: figma.boolean('icon'),
    body: figma.string('body'),
  },
  example: ({ variant, heading, dismissible, icon, body }) => {
    const v = variant ?? 'informative';
    const headingAttr = heading ? ` heading="${heading}"` : '';
    const dismissAttr = dismissible ? ' dismissible' : '';
    const iconAttr = icon === false ? ' icon="false"' : '';
    return `<en-alert variant="${v}"${headingAttr}${dismissAttr}${iconAttr}>${body ?? 'Mensagem do alerta'}</en-alert>`;
  },
});
