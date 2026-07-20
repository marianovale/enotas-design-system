import{b as t}from"./lit-element-DYTQqYiP.js";const x={title:"Feedback/EnAlert",tags:["autodocs"],parameters:{docs:{description:{component:`
**en-alert** é um aviso **persistente inline** (banner). Fica na tela até o usuário
fechar (quando \`dismissible\`) ou a condição mudar. Use para pendências de pagamento,
certificado vencendo, avisos no topo de uma página ou seção.

**Alert/Banner vs Toast**
- **Alert** (este): persistente, ancorado ao contexto/layout.
- **Toast**: efêmero, flutuante, some sozinho — para confirmações de ação.

**Acessibilidade**
O status é comunicado por **ícone + cor**, nunca só cor (WCAG 1.4.1). Variantes
\`negative\`/\`attention\` usam \`role="alert"\` (assertivo); \`positive\`/\`informative\`
usam \`role="status"\`.

**Slots**
- *default*: descrição/corpo.
- *action*: link ou botão (ex: \`<en-button slot="action">\`).

**Retrocompatibilidade**
A prop \`intent\` (success/warning/danger/info) é aceita e mapeada para as variantes
Cosmos (positive/attention/negative/informative). Prefira sempre \`variant\`.
        `.trim()}}},argTypes:{variant:{control:"select",options:["positive","attention","negative","informative"],description:"Variante semântica (alinhado com Cosmos DS).",table:{defaultValue:{summary:"informative"}}},heading:{control:"text",description:"Título opcional, exibido em bold acima da descrição."},dismissible:{control:"boolean",description:"Exibe o botão de fechar (X) e emite `enAlertDismiss` ao fechar.",table:{defaultValue:{summary:"false"}}},icon:{control:"boolean",description:"Exibe o ícone de status à esquerda.",table:{defaultValue:{summary:"true"}}},body:{control:"text",description:"Conteúdo do corpo. Passado via **slot** padrão — não é uma prop.",table:{category:"Slot (Storybook only)"}}},args:{variant:"informative",heading:"",dismissible:!1,icon:!0,body:"O certificado digital A1 da empresa vence em 12 dias."}},e={parameters:{docs:{description:{story:"Playground interativo. Use os controles para explorar variant, heading, dismissible e icon."}}},render:({variant:p,heading:v,dismissible:g,icon:f,body:b})=>t`
    <en-alert
      variant=${p}
      heading=${v||void 0}
      ?dismissible=${g}
      ?icon=${f}
    >${b}</en-alert>
  `},a={name:"Todas as variantes",parameters:{controls:{disable:!0}},render:()=>t`
    <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:560px">
      <en-alert variant="positive" heading="Nota autorizada">A NFS-e #1042 foi autorizada pela prefeitura.</en-alert>
      <en-alert variant="informative" heading="Em apuração">O fechamento de excedentes está em apuração até o dia 05.</en-alert>
      <en-alert variant="attention" heading="Certificado vencendo">O certificado digital A1 vence em 12 dias.</en-alert>
      <en-alert variant="negative" heading="Pagamento recusado">A fatura de maio foi recusada. Atualize a forma de pagamento.</en-alert>
    </div>
  `},n={name:"Estados",parameters:{controls:{disable:!0}},render:()=>t`
    <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:560px">
      <en-alert variant="attention" heading="Pendência de pagamento" dismissible>
        A fatura de maio está em aberto desde 10/06.
        <en-button slot="action" variant="primary" size="sm">Pagar agora</en-button>
        <en-button slot="action" variant="ghost" size="sm">Ver detalhes</en-button>
      </en-alert>

      <en-alert variant="informative">
        Apenas uma descrição, sem título nem ação.
      </en-alert>

      <en-alert variant="negative" heading="Falha na emissão" icon=${!1} dismissible>
        Sem ícone — útil quando o contexto já comunica o status visualmente.
      </en-alert>

      <en-alert variant="positive" heading="Tudo certo">
        Banner multiline: texto mais longo que ocupa várias linhas para validar o
        alinhamento do ícone ao topo, o espaçamento interno e o comportamento de
        quebra de linha em descrições extensas dentro do componente.
      </en-alert>
    </div>
  `};var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Playground interativo. Use os controles para explorar variant, heading, dismissible e icon.'
      }
    }
  },
  render: ({
    variant,
    heading,
    dismissible,
    icon,
    body
  }) => html\`
    <en-alert
      variant=\${variant}
      heading=\${heading || undefined}
      ?dismissible=\${dismissible}
      ?icon=\${icon}
    >\${body}</en-alert>
  \`
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var s,d,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Todas as variantes',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:560px">
      <en-alert variant="positive" heading="Nota autorizada">A NFS-e #1042 foi autorizada pela prefeitura.</en-alert>
      <en-alert variant="informative" heading="Em apuração">O fechamento de excedentes está em apuração até o dia 05.</en-alert>
      <en-alert variant="attention" heading="Certificado vencendo">O certificado digital A1 vence em 12 dias.</en-alert>
      <en-alert variant="negative" heading="Pagamento recusado">A fatura de maio foi recusada. Atualize a forma de pagamento.</en-alert>
    </div>
  \`
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,c,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Estados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:0.75rem;max-width:560px">
      <en-alert variant="attention" heading="Pendência de pagamento" dismissible>
        A fatura de maio está em aberto desde 10/06.
        <en-button slot="action" variant="primary" size="sm">Pagar agora</en-button>
        <en-button slot="action" variant="ghost" size="sm">Ver detalhes</en-button>
      </en-alert>

      <en-alert variant="informative">
        Apenas uma descrição, sem título nem ação.
      </en-alert>

      <en-alert variant="negative" heading="Falha na emissão" icon=\${false} dismissible>
        Sem ícone — útil quando o contexto já comunica o status visualmente.
      </en-alert>

      <en-alert variant="positive" heading="Tudo certo">
        Banner multiline: texto mais longo que ocupa várias linhas para validar o
        alinhamento do ícone ao topo, o espaçamento interno e o comportamento de
        quebra de linha em descrições extensas dentro do componente.
      </en-alert>
    </div>
  \`
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const y=["Default","AllVariants","States"];export{a as AllVariants,e as Default,n as States,y as __namedExportsOrder,x as default};
