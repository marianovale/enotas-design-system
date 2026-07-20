import{b as e}from"./lit-element-DYTQqYiP.js";const I={title:"Primitives/EnBadge",tags:["autodocs"],parameters:{docs:{description:{component:`
**en-badge** exibe um rótulo de status curto e compacto. Use-o para comunicar o estado de um
objeto (nota fiscal, pedido, tarefa) de forma imediata e escaneável.

**Badge vs Tag**
- Use **badge** para estados de sistema gerados automaticamente — ex: "Autorizada", "Rejeitada", "Em análise".
- Use **tag** para categorias ou atributos escolhidos pelo usuário — ex: "Imposto retido", "Serviço", "NFS-e".
  A tag normalmente é interativa (clicável/removível); o badge é puramente informativo.

**Slot**
O conteúdo é passado via slot padrão (\`<en-badge>Texto</en-badge>\`), não por prop.

**Retrocompatibilidade**
A prop \`intent\` (valores legados: neutral, success, warning, danger, info) ainda é aceita e mapeada
internamente para os valores Cosmos. Prefira sempre \`variant\`.
        `.trim()}}},argTypes:{variant:{control:"select",options:["default","positive","negative","attention","informative","brand"],description:"Variante visual (alinhado com Cosmos DS). Define cor de fundo, texto e borda de acordo com a semântica da informação.",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md"],description:"Tamanho do badge. `sm` = 1.25rem de altura; `md` = 1.5rem (padrão).",table:{defaultValue:{summary:"md"}}},outline:{control:"boolean",description:"Quando `true`, exibe apenas a borda colorida sem fundo sólido. Útil em fundos coloridos para manter contraste.",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Conteúdo exibido no badge. Passado via **slot** — não é uma prop do componente. Use este controle apenas nas stories interativas do Storybook.",table:{category:"Slot (Storybook only)"}}},args:{variant:"default",size:"md",outline:!1,label:"Status"}},t={parameters:{docs:{description:{story:"Playground interativo. Use os controles do painel para explorar todas as combinações de variant, size e outline."}}},render:({variant:n,size:a,outline:m,label:p})=>e`<en-badge variant=${n} size=${a} ?outline=${m}>${p}</en-badge>`},i={name:"Todas as variantes",parameters:{docs:{description:{story:"As 6 variantes semânticas no estilo sólido (padrão). Cada cor mapeia para um estado de negócio específico dentro do eNotas."}},controls:{disable:!0}},render:()=>e`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <en-badge variant="default">Default</en-badge>
      <en-badge variant="positive">Autorizada</en-badge>
      <en-badge variant="negative">Rejeitada</en-badge>
      <en-badge variant="attention">Pendente</en-badge>
      <en-badge variant="informative">Em análise</en-badge>
      <en-badge variant="brand">eNotas</en-badge>
    </div>
  `},o={name:"Todos os estados (solid + outline)",parameters:{docs:{description:{story:"Visão completa: as 6 variantes em modo sólido (linha superior) e em modo outline (linha inferior). Use para QA visual e validação de contraste."}},controls:{disable:!0}},render:()=>e`
    <div style="display:flex;flex-direction:column;gap:0.75rem">
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <en-badge variant="default">Default</en-badge>
        <en-badge variant="positive">Autorizada</en-badge>
        <en-badge variant="negative">Rejeitada</en-badge>
        <en-badge variant="attention">Pendente</en-badge>
        <en-badge variant="informative">Em análise</en-badge>
        <en-badge variant="brand">eNotas</en-badge>
      </div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <en-badge variant="default" outline>Default</en-badge>
        <en-badge variant="positive" outline>Autorizada</en-badge>
        <en-badge variant="negative" outline>Rejeitada</en-badge>
        <en-badge variant="attention" outline>Pendente</en-badge>
        <en-badge variant="informative" outline>Em análise</en-badge>
        <en-badge variant="brand" outline>eNotas</en-badge>
      </div>
    </div>
  `},r={name:"Variante outline",parameters:{docs:{description:{story:"Todas as variantes em modo outline. Prefira este estilo quando o badge estiver sobre um fundo colorido ou em contextos de menor destaque."}},controls:{disable:!0}},render:()=>e`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <en-badge variant="default" outline>Default</en-badge>
      <en-badge variant="positive" outline>Autorizada</en-badge>
      <en-badge variant="negative" outline>Rejeitada</en-badge>
      <en-badge variant="attention" outline>Pendente</en-badge>
      <en-badge variant="informative" outline>Em análise</en-badge>
      <en-badge variant="brand" outline>eNotas</en-badge>
    </div>
  `},d={name:"Tamanhos",parameters:{docs:{description:{story:"`sm` é indicado para tabelas densas e campos compactos. `md` é o padrão para a maioria dos contextos."}},controls:{disable:!0}},render:()=>e`
    <div style="display:flex;gap:0.75rem;align-items:center">
      <en-badge variant="positive" size="sm">sm</en-badge>
      <en-badge variant="positive" size="md">md</en-badge>
    </div>
  `},s={name:"Em contexto — listagem de notas",parameters:{docs:{description:{story:"Uso real do badge em uma listagem de notas fiscais. Demonstra como cada variante comunica o estado de processamento de uma NFS-e."}},controls:{disable:!0}},render:()=>e`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:480px;font-family:sans-serif;font-size:14px">
      ${[{nf:"NFS-e #001234",tomador:"Empresa ABC Ltda",variant:"positive",label:"Autorizada"},{nf:"NFS-e #001235",tomador:"Comércio XYZ S.A.",variant:"attention",label:"Pendente"},{nf:"NFS-e #001236",tomador:"Serviços DEF Ltda",variant:"negative",label:"Rejeitada"},{nf:"NFS-e #001237",tomador:"Tech Solutions Inc",variant:"informative",label:"Em análise"}].map(({nf:n,tomador:a,variant:m,label:p})=>e`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border:1px solid #e5e7eb;border-radius:8px">
          <div>
            <div style="font-weight:600">${n}</div>
            <div style="color:#6b7280;margin-top:2px">${a}</div>
          </div>
          <en-badge variant=${m}>${p}</en-badge>
        </div>
      `)}
    </div>
  `},j=[{label:"Paga",variant:"positive"},{label:"Processando",variant:"informative"},{label:"Pendente",variant:"attention"},{label:"Vencida",variant:"negative"},{label:"Recusada",variant:"negative"},{label:"Suspensa",variant:"negative"},{label:"Cancelada",variant:"default"}],V=[{label:"Dentro do plano",variant:"positive"},{label:"Em apuração",variant:"informative"},{label:"A pagar",variant:"attention"},{label:"Vencida",variant:"negative"},{label:"Importação pendente",variant:"attention"},{label:"Paga",variant:"positive"}],c=n=>e`
  <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
    ${n.map(a=>e`<en-badge variant=${a.variant} ?outline=${a.outline}>${a.label}</en-badge>`)}
  </div>
`,l={name:"Status de fatura (Emissor)",parameters:{docs:{description:{story:"Catálogo dos estados de fatura do Emissor mapeados para variantes do `en-badge` (item 5 do feedback). `info` = purple (decisão unificada). Vencida/Recusada/Suspensa usam `negative` sólido; Cancelada usa `default`."}},controls:{disable:!0}},render:()=>e`
    <div style="display:flex;flex-direction:column;gap:1.25rem;font-family:sans-serif">
      <div>
        <div style="font-size:12px;font-weight:700;color:#7a7773;text-transform:uppercase;letter-spacing:1px;margin-bottom:0.5rem">Assinatura</div>
        ${c(j)}
      </div>
      <div>
        <div style="font-size:12px;font-weight:700;color:#7a7773;text-transform:uppercase;letter-spacing:1px;margin-bottom:0.5rem">Excedentes</div>
        ${c(V)}
      </div>
    </div>
  `};var v,g,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Playground interativo. Use os controles do painel para explorar todas as combinações de variant, size e outline.'
      }
    }
  },
  render: ({
    variant,
    size,
    outline,
    label
  }) => html\`<en-badge variant=\${variant} size=\${size} ?outline=\${outline}>\${label}</en-badge>\`
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,f,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Todas as variantes',
  parameters: {
    docs: {
      description: {
        story: 'As 6 variantes semânticas no estilo sólido (padrão). Cada cor mapeia para um estado de negócio específico dentro do eNotas.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <en-badge variant="default">Default</en-badge>
      <en-badge variant="positive">Autorizada</en-badge>
      <en-badge variant="negative">Rejeitada</en-badge>
      <en-badge variant="attention">Pendente</en-badge>
      <en-badge variant="informative">Em análise</en-badge>
      <en-badge variant="brand">eNotas</en-badge>
    </div>
  \`
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,S,A;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Todos os estados (solid + outline)',
  parameters: {
    docs: {
      description: {
        story: 'Visão completa: as 6 variantes em modo sólido (linha superior) e em modo outline (linha inferior). Use para QA visual e validação de contraste.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:0.75rem">
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <en-badge variant="default">Default</en-badge>
        <en-badge variant="positive">Autorizada</en-badge>
        <en-badge variant="negative">Rejeitada</en-badge>
        <en-badge variant="attention">Pendente</en-badge>
        <en-badge variant="informative">Em análise</en-badge>
        <en-badge variant="brand">eNotas</en-badge>
      </div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
        <en-badge variant="default" outline>Default</en-badge>
        <en-badge variant="positive" outline>Autorizada</en-badge>
        <en-badge variant="negative" outline>Rejeitada</en-badge>
        <en-badge variant="attention" outline>Pendente</en-badge>
        <en-badge variant="informative" outline>Em análise</en-badge>
        <en-badge variant="brand" outline>eNotas</en-badge>
      </div>
    </div>
  \`
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var E,w,z;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Variante outline',
  parameters: {
    docs: {
      description: {
        story: 'Todas as variantes em modo outline. Prefira este estilo quando o badge estiver sobre um fundo colorido ou em contextos de menor destaque.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center">
      <en-badge variant="default" outline>Default</en-badge>
      <en-badge variant="positive" outline>Autorizada</en-badge>
      <en-badge variant="negative" outline>Rejeitada</en-badge>
      <en-badge variant="attention" outline>Pendente</en-badge>
      <en-badge variant="informative" outline>Em análise</en-badge>
      <en-badge variant="brand" outline>eNotas</en-badge>
    </div>
  \`
}`,...(z=(w=r.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var h,$,N;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Tamanhos',
  parameters: {
    docs: {
      description: {
        story: '\`sm\` é indicado para tabelas densas e campos compactos. \`md\` é o padrão para a maioria dos contextos.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;gap:0.75rem;align-items:center">
      <en-badge variant="positive" size="sm">sm</en-badge>
      <en-badge variant="positive" size="md">md</en-badge>
    </div>
  \`
}`,...(N=($=d.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var P,D,C;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Em contexto — listagem de notas',
  parameters: {
    docs: {
      description: {
        story: 'Uso real do badge em uma listagem de notas fiscais. Demonstra como cada variante comunica o estado de processamento de uma NFS-e.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;max-width:480px;font-family:sans-serif;font-size:14px">
      \${[{
    nf: 'NFS-e #001234',
    tomador: 'Empresa ABC Ltda',
    variant: 'positive',
    label: 'Autorizada'
  }, {
    nf: 'NFS-e #001235',
    tomador: 'Comércio XYZ S.A.',
    variant: 'attention',
    label: 'Pendente'
  }, {
    nf: 'NFS-e #001236',
    tomador: 'Serviços DEF Ltda',
    variant: 'negative',
    label: 'Rejeitada'
  }, {
    nf: 'NFS-e #001237',
    tomador: 'Tech Solutions Inc',
    variant: 'informative',
    label: 'Em análise'
  }].map(({
    nf,
    tomador,
    variant,
    label
  }) => html\`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border:1px solid #e5e7eb;border-radius:8px">
          <div>
            <div style="font-weight:600">\${nf}</div>
            <div style="color:#6b7280;margin-top:2px">\${tomador}</div>
          </div>
          <en-badge variant=\${variant}>\${label}</en-badge>
        </div>
      \`)}
    </div>
  \`
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var T,R,F;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Status de fatura (Emissor)',
  parameters: {
    docs: {
      description: {
        story: 'Catálogo dos estados de fatura do Emissor mapeados para variantes do \`en-badge\` (item 5 do feedback). ' + '\`info\` = purple (decisão unificada). Vencida/Recusada/Suspensa usam \`negative\` sólido; Cancelada usa \`default\`.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:1.25rem;font-family:sans-serif">
      <div>
        <div style="font-size:12px;font-weight:700;color:#7a7773;text-transform:uppercase;letter-spacing:1px;margin-bottom:0.5rem">Assinatura</div>
        \${row(ASSINATURA)}
      </div>
      <div>
        <div style="font-size:12px;font-weight:700;color:#7a7773;text-transform:uppercase;letter-spacing:1px;margin-bottom:0.5rem">Excedentes</div>
        \${row(EXCEDENTES)}
      </div>
    </div>
  \`
}`,...(F=(R=l.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const k=["Default","AllVariants","AllStates","Outline","Sizes","InContext","StatusFatura"];export{o as AllStates,i as AllVariants,t as Default,s as InContext,r as Outline,d as Sizes,l as StatusFatura,k as __namedExportsOrder,I as default};
