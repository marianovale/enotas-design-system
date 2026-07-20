import{b as t}from"./lit-element-DYTQqYiP.js";const D=["nf-e","nfs-e","nf-e de devolução"],i=["emitida","em processo de emissão","pendente","cancelada","falha ao emitir","falha ao cancelar","nao-emitir"],U={title:"eNotas/EnNfStatus",tags:["autodocs"],parameters:{docs:{description:{component:`
**en-nf-status** exibe o tipo e o status de uma nota fiscal de forma compacta,
combinando a sigla do tipo (NF-e, NFS-e, NF-e de devolução) com um badge
colorido que reflete o estado atual da nota.

**Quando usar:**
- Linhas de tabela ou listagem de notas fiscais, ao lado do número/série
- Cards de resumo em dashboards de emissão
- Tooltips e popovers de detalhe rápido

**Não usar:**
- Como substituto de mensagens de erro — use \`en-feedback\` para explicações detalhadas
- Em fluxos de edição onde o status ainda não foi definido — use \`en-badge\` genérico

**Intents por status:**
| Status | Intent |
|---|---|
| emitida | success |
| em processo de emissão | warning |
| pendente | info |
| cancelada | neutral |
| falha ao emitir | danger |
| falha ao cancelar | danger |
| nao-emitir | neutral |
        `}}},argTypes:{type:{control:"select",options:["nf-e","nfs-e","nf-e de devolução","all"],description:"Tipo da nota fiscal. `all` omite o rótulo de tipo e exibe apenas o status.",table:{defaultValue:{summary:"nf-e"}}},status:{control:"select",options:i,description:"Estado atual da nota fiscal. Determina a cor (intent) e o texto do badge de status.",table:{defaultValue:{summary:"emitida"}}},hovering:{control:"boolean",description:"Ativa o visual de hover programaticamente. Útil para testes visuais e estados de foco em listas interativas.",table:{defaultValue:{summary:"false"}}}},args:{type:"nf-e",status:"emitida",hovering:!1}},s={name:"Playground",render:({type:e,status:a,hovering:o})=>t`<en-nf-status
      type=${e}
      status=${a}
      ?hovering=${o}
    ></en-nf-status>`},r={name:"Todos os status (NF-e)",parameters:{docs:{description:{story:"Os 7 valores de `status` aplicados ao tipo `nf-e`. Cada status carrega um intent semântico distinto (success, warning, info, neutral, danger)."}}},render:()=>t`
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center">
      ${i.map(e=>t`<en-nf-status type="nf-e" status=${e}></en-nf-status>`)}
    </div>
  `},n={name:"Todos os tipos (emitida)",parameters:{docs:{description:{story:"Os 3 tipos de nota fiscal com o status `emitida`. O type `all` omite o rótulo de tipo — veja a story **Matrix** para ver o comportamento completo."}}},render:()=>t`
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center">
      ${D.map(e=>t`<en-nf-status type=${e} status="emitida"></en-nf-status>`)}
    </div>
  `},d={name:"Matrix type × status",parameters:{docs:{description:{story:"Matriz completa de todas as combinações type × status. Cada linha é um tipo de nota; cada coluna é um status. Use para QA visual e alinhamento com o Figma."}},layout:"padded"},render:()=>t`
    <table style="border-collapse:collapse;font-family:var(--en-font-family-sans,sans-serif);font-size:0.75rem">
      <thead>
        <tr>
          <th style="padding:0.5rem 0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600;border-bottom:1px solid var(--en-color-neutral-200,#e5e7eb)">
            type \\ status
          </th>
          ${i.map(e=>t`
              <th style="padding:0.5rem 0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600;border-bottom:1px solid var(--en-color-neutral-200,#e5e7eb);white-space:nowrap">
                ${e}
              </th>
            `)}
        </tr>
      </thead>
      <tbody>
        ${[...D,"all"].map((e,a)=>t`
            <tr style="${a%2===0?"background:var(--en-color-neutral-50,#f9fafb)":""}">
              <td style="padding:0.5rem 0.75rem;font-weight:600;white-space:nowrap;color:var(--en-color-neutral-700,#374151)">
                ${e}
              </td>
              ${i.map(o=>t`
                  <td style="padding:0.5rem 0.75rem">
                    <en-nf-status type=${e} status=${o}></en-nf-status>
                  </td>
                `)}
            </tr>
          `)}
      </tbody>
    </table>
  `},l={name:"Em contexto (lista de NFs)",parameters:{docs:{description:{story:"Lista de notas fiscais simulada, mostrando `en-nf-status` ao lado de número, tomador e valor. Replica o padrão de uso em tabelas do produto eNotas."}},layout:"padded"},render:()=>t`
      <table style="width:100%;border-collapse:collapse;font-family:var(--en-font-family-sans,sans-serif);font-size:0.875rem">
        <thead>
          <tr style="border-bottom:2px solid var(--en-color-neutral-200,#e5e7eb)">
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Número</th>
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Status</th>
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Tomador</th>
            <th style="padding:0.75rem;text-align:right;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Valor</th>
          </tr>
        </thead>
        <tbody>
          ${[{num:"001.234",type:"nf-e",status:"emitida",tomador:"Acme Ltda.",valor:"R$ 1.500,00"},{num:"001.235",type:"nfs-e",status:"em processo de emissão",tomador:"Beta Serviços S.A.",valor:"R$ 320,00"},{num:"001.236",type:"nf-e",status:"pendente",tomador:"Gamma Comércio Eireli",valor:"R$ 8.750,00"},{num:"001.237",type:"nf-e de devolução",status:"emitida",tomador:"Delta ME",valor:"R$ 450,00"},{num:"001.238",type:"nf-e",status:"falha ao emitir",tomador:"Épsilon Tech Ltda.",valor:"R$ 2.100,00"},{num:"001.239",type:"nfs-e",status:"cancelada",tomador:"Zeta Consultoria",valor:"R$ 5.000,00"},{num:"001.240",type:"nf-e",status:"nao-emitir",tomador:"Eta Distribuidora",valor:"R$ 670,00"},{num:"001.241",type:"nf-e",status:"falha ao cancelar",tomador:"Theta Logística",valor:"R$ 3.200,00"}].map((a,o)=>t`
              <tr style="border-bottom:1px solid var(--en-color-neutral-100,#f3f4f6);${o%2!==0?"background:var(--en-color-neutral-50,#f9fafb)":""}">
                <td style="padding:0.75rem;color:var(--en-color-neutral-900,#111827);font-weight:500">${a.num}</td>
                <td style="padding:0.75rem">
                  <en-nf-status type=${a.type} status=${a.status}></en-nf-status>
                </td>
                <td style="padding:0.75rem;color:var(--en-color-neutral-700,#374151)">${a.tomador}</td>
                <td style="padding:0.75rem;text-align:right;color:var(--en-color-neutral-700,#374151)">${a.valor}</td>
              </tr>
            `)}
        </tbody>
      </table>
    `};var m,p,c,u,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    type,
    status,
    hovering
  }) => html\`<en-nf-status
      type=\${type}
      status=\${status}
      ?hovering=\${hovering}
    ></en-nf-status>\`
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"Playground — controles disponíveis para explorar qualquer combinação de type, status e hovering.",...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var y,g,v,h,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Todos os status (NF-e)',
  parameters: {
    docs: {
      description: {
        story: 'Os 7 valores de \`status\` aplicados ao tipo \`nf-e\`. Cada status carrega um intent semântico distinto (success, warning, info, neutral, danger).'
      }
    }
  },
  render: () => html\`
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center">
      \${ALL_STATUSES.map(s => html\`<en-nf-status type="nf-e" status=\${s}></en-nf-status>\`)}
    </div>
  \`
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"Todos os 7 status disponíveis para o tipo `nf-e`.\nUse esta story para validar intents e rótulos de forma rápida.",...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var $,x,w,S,T;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Todos os tipos (emitida)',
  parameters: {
    docs: {
      description: {
        story: 'Os 3 tipos de nota fiscal com o status \`emitida\`. O type \`all\` omite o rótulo de tipo — veja a story **Matrix** para ver o comportamento completo.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center">
      \${ALL_TYPES.map(t => html\`<en-nf-status type=\${t} status="emitida"></en-nf-status>\`)}
    </div>
  \`
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:"Os 3 tipos de nota com status `emitida`.\nConfirma que o rótulo de tipo aparece corretamente em cada variante.\nO tipo `all` é omitido aqui pois não exibe rótulo de tipo.",...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var A,L,E,R,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Matrix type × status',
  parameters: {
    docs: {
      description: {
        story: 'Matriz completa de todas as combinações type × status. Cada linha é um tipo de nota; cada coluna é um status. Use para QA visual e alinhamento com o Figma.'
      }
    },
    layout: 'padded'
  },
  render: () => html\`
    <table style="border-collapse:collapse;font-family:var(--en-font-family-sans,sans-serif);font-size:0.75rem">
      <thead>
        <tr>
          <th style="padding:0.5rem 0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600;border-bottom:1px solid var(--en-color-neutral-200,#e5e7eb)">
            type \\\\ status
          </th>
          \${ALL_STATUSES.map(s => html\`
              <th style="padding:0.5rem 0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600;border-bottom:1px solid var(--en-color-neutral-200,#e5e7eb);white-space:nowrap">
                \${s}
              </th>
            \`)}
        </tr>
      </thead>
      <tbody>
        \${[...ALL_TYPES, 'all' as NfType].map((t, i) => html\`
            <tr style="\${i % 2 === 0 ? 'background:var(--en-color-neutral-50,#f9fafb)' : ''}">
              <td style="padding:0.5rem 0.75rem;font-weight:600;white-space:nowrap;color:var(--en-color-neutral-700,#374151)">
                \${t}
              </td>
              \${ALL_STATUSES.map(s => html\`
                  <td style="padding:0.5rem 0.75rem">
                    <en-nf-status type=\${t} status=\${s}></en-nf-status>
                  </td>
                \`)}
            </tr>
          \`)}
      </tbody>
    </table>
  \`
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source},description:{story:`Matriz completa type × status — todas as combinações em uma única view.
Referência visual para QA e revisões de design.`,...(N=(R=d.parameters)==null?void 0:R.docs)==null?void 0:N.description}}};var C,F,M,O,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Em contexto (lista de NFs)',
  parameters: {
    docs: {
      description: {
        story: 'Lista de notas fiscais simulada, mostrando \`en-nf-status\` ao lado de número, tomador e valor. Replica o padrão de uso em tabelas do produto eNotas.'
      }
    },
    layout: 'padded'
  },
  render: () => {
    const rows: Array<{
      num: string;
      type: NfType;
      status: NfStatus;
      tomador: string;
      valor: string;
    }> = [{
      num: '001.234',
      type: 'nf-e',
      status: 'emitida',
      tomador: 'Acme Ltda.',
      valor: 'R$ 1.500,00'
    }, {
      num: '001.235',
      type: 'nfs-e',
      status: 'em processo de emissão',
      tomador: 'Beta Serviços S.A.',
      valor: 'R$ 320,00'
    }, {
      num: '001.236',
      type: 'nf-e',
      status: 'pendente',
      tomador: 'Gamma Comércio Eireli',
      valor: 'R$ 8.750,00'
    }, {
      num: '001.237',
      type: 'nf-e de devolução',
      status: 'emitida',
      tomador: 'Delta ME',
      valor: 'R$ 450,00'
    }, {
      num: '001.238',
      type: 'nf-e',
      status: 'falha ao emitir',
      tomador: 'Épsilon Tech Ltda.',
      valor: 'R$ 2.100,00'
    }, {
      num: '001.239',
      type: 'nfs-e',
      status: 'cancelada',
      tomador: 'Zeta Consultoria',
      valor: 'R$ 5.000,00'
    }, {
      num: '001.240',
      type: 'nf-e',
      status: 'nao-emitir',
      tomador: 'Eta Distribuidora',
      valor: 'R$ 670,00'
    }, {
      num: '001.241',
      type: 'nf-e',
      status: 'falha ao cancelar',
      tomador: 'Theta Logística',
      valor: 'R$ 3.200,00'
    }];
    return html\`
      <table style="width:100%;border-collapse:collapse;font-family:var(--en-font-family-sans,sans-serif);font-size:0.875rem">
        <thead>
          <tr style="border-bottom:2px solid var(--en-color-neutral-200,#e5e7eb)">
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Número</th>
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Status</th>
            <th style="padding:0.75rem;text-align:left;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Tomador</th>
            <th style="padding:0.75rem;text-align:right;color:var(--en-color-neutral-500,#6b7280);font-weight:600">Valor</th>
          </tr>
        </thead>
        <tbody>
          \${rows.map((row, i) => html\`
              <tr style="border-bottom:1px solid var(--en-color-neutral-100,#f3f4f6);\${i % 2 !== 0 ? 'background:var(--en-color-neutral-50,#f9fafb)' : ''}">
                <td style="padding:0.75rem;color:var(--en-color-neutral-900,#111827);font-weight:500">\${row.num}</td>
                <td style="padding:0.75rem">
                  <en-nf-status type=\${row.type} status=\${row.status}></en-nf-status>
                </td>
                <td style="padding:0.75rem;color:var(--en-color-neutral-700,#374151)">\${row.tomador}</td>
                <td style="padding:0.75rem;text-align:right;color:var(--en-color-neutral-700,#374151)">\${row.valor}</td>
              </tr>
            \`)}
        </tbody>
      </table>
    \`;
  }
}`,...(M=(F=l.parameters)==null?void 0:F.docs)==null?void 0:M.source},description:{story:`Simulação de uma listagem real de notas fiscais — contexto de uso mais próximo
do produto. Demonstra como o componente se comporta em diferentes densidades
e junto a outras informações da NF.`,...(_=(O=l.parameters)==null?void 0:O.docs)==null?void 0:_.description}}};const P=["Default","AllStatuses","AllTypes","AllTypesAndStatuses","InContext"];export{r as AllStatuses,n as AllTypes,d as AllTypesAndStatuses,s as Default,l as InContext,P as __namedExportsOrder,U as default};
