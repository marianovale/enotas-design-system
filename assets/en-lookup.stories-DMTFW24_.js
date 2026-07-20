import{b as n}from"./lit-element-DYTQqYiP.js";const a=[{value:"sp",label:"São Paulo"},{value:"rj",label:"Rio de Janeiro"},{value:"mg",label:"Minas Gerais"},{value:"ba",label:"Bahia"},{value:"pr",label:"Paraná"},{value:"rs",label:"Rio Grande do Sul"},{value:"sc",label:"Santa Catarina"},{value:"go",label:"Goiás",disabled:!0}],j={title:"Components/EnLookup",tags:["autodocs"],parameters:{docs:{description:{component:`
Campo de busca com autocomplete para selecionar itens de listas dinâmicas.
Combina digitação livre com dropdown de resultados filtrados em tempo real.

**Quando usar:**
- Listas com muitos itens onde o usuário precisa filtrar digitando (clientes, municípios, CNPJs)
- Busca assíncrona — use \`loading\` enquanto aguarda resposta da API

**Não usar:**
- Listas pequenas e fixas → prefira \`en-select\`
- Múltiplas seleções complexas → prefira \`en-checkbox-group\`

**Eventos:**
- \`enSearch\` — dispara ao digitar (use para busca assíncrona)
- \`enLookupChange\` — dispara ao selecionar uma opção
- \`enLookupClear\` — dispara ao limpar a seleção
        `}}},argTypes:{label:{control:"text",description:"Rótulo acima do campo"},placeholder:{control:"text",description:"Texto de hint interno do input"},loading:{control:"boolean",description:"Exibe spinner e bloqueia o dropdown"},multiple:{control:"boolean",description:"Permite selecionar múltiplas opções (modo chips)"},disabled:{control:"boolean",description:"Bloqueia toda interação com o campo"},error:{control:"text",description:"Mensagem de erro exibida abaixo do campo"},hint:{control:"text",description:"Texto auxiliar exibido quando não há erro"}}},r={args:{label:"Estado",placeholder:"Buscar estado...",loading:!1,multiple:!1,disabled:!1,error:"",hint:"Selecione um estado brasileiro"},render:({label:e,placeholder:o,loading:l,multiple:m,disabled:b,error:w,hint:F})=>n`
    <en-lookup
      label=${e}
      placeholder=${o}
      ?loading=${l}
      ?multiple=${m}
      ?disabled=${b}
      error=${w||void 0}
      hint=${F}
      .options=${a}
    ></en-lookup>
  `},s={args:{label:"Estados",placeholder:"Buscar estados...",loading:!1,multiple:!0,disabled:!1},render:({label:e,placeholder:o,loading:l,multiple:m,disabled:b})=>n`
    <en-lookup
      label=${e}
      placeholder=${o}
      ?loading=${l}
      ?multiple=${m}
      ?disabled=${b}
      .options=${a}
    ></en-lookup>
  `},i={args:{label:"Busca remota",placeholder:"Digitando...",loading:!0,multiple:!1},render:({label:e,placeholder:o,loading:l})=>n`
    <en-lookup
      label=${e}
      placeholder=${o}
      ?loading=${l}
      .options=${[]}
    ></en-lookup>
  `},t={args:{label:"Estado",error:"Campo obrigatório"},render:({label:e,error:o})=>n`
    <en-lookup
      label=${e}
      error=${o}
      .options=${a}
    ></en-lookup>
  `},d={name:"Disabled",parameters:{docs:{description:{story:"Campo bloqueado quando o usuário não tem permissão para editar o campo naquele contexto."}}},args:{label:"Estado",disabled:!0},render:({label:e,disabled:o})=>n`
    <en-lookup
      label=${e}
      ?disabled=${o}
      .options=${a}
    ></en-lookup>
  `},p={name:"Filled",parameters:{docs:{description:{story:"Campo com valor já selecionado — estado após o usuário escolher uma opção."}}},args:{label:"Estado"},render:({label:e})=>n`
      <en-lookup
        label=${e}
        .value=${{value:"sp",label:"São Paulo"}}
        .options=${a}
      ></en-lookup>
    `},u={name:"With Hint",parameters:{docs:{description:{story:"Texto auxiliar abaixo do campo para orientar o usuário sem estado de erro."}}},args:{label:"Estado",hint:"Selecione o estado de emissão da nota fiscal"},render:({label:e,hint:o})=>n`
    <en-lookup
      label=${e}
      hint=${o}
      .options=${a}
    ></en-lookup>
  `},c={name:"All States",parameters:{docs:{description:{story:"Todos os estados do componente em uma única view — útil para QA e revisão visual."}},controls:{disable:!0}},render:()=>n`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 300px;">
        <en-lookup label="Default" placeholder="Buscar..." .options=${a}></en-lookup>
        <en-lookup label="Filled" .value=${{value:"sp",label:"São Paulo"}} .options=${a}></en-lookup>
        <en-lookup label="Disabled" disabled .options=${a}></en-lookup>
        <en-lookup label="Error" error="Campo obrigatório" .options=${a}></en-lookup>
        <en-lookup label="Loading" loading .options=${[]}></en-lookup>
        <en-lookup label="With Hint" hint="Selecione um estado brasileiro" .options=${a}></en-lookup>
      </div>
    `};var $,g,h;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Estado',
    placeholder: 'Buscar estado...',
    loading: false,
    multiple: false,
    disabled: false,
    error: '',
    hint: 'Selecione um estado brasileiro'
  },
  render: ({
    label,
    placeholder,
    loading,
    multiple,
    disabled,
    error,
    hint
  }) => html\`
    <en-lookup
      label=\${label}
      placeholder=\${placeholder}
      ?loading=\${loading}
      ?multiple=\${multiple}
      ?disabled=\${disabled}
      error=\${error || undefined}
      hint=\${hint}
      .options=\${SAMPLE_OPTIONS}
    ></en-lookup>
  \`
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,S,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Estados',
    placeholder: 'Buscar estados...',
    loading: false,
    multiple: true,
    disabled: false
  },
  render: ({
    label,
    placeholder,
    loading,
    multiple,
    disabled
  }) => html\`
    <en-lookup
      label=\${label}
      placeholder=\${placeholder}
      ?loading=\${loading}
      ?multiple=\${multiple}
      ?disabled=\${disabled}
      .options=\${SAMPLE_OPTIONS}
    ></en-lookup>
  \`
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var P,E,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Busca remota',
    placeholder: 'Digitando...',
    loading: true,
    multiple: false
  },
  render: ({
    label,
    placeholder,
    loading
  }) => html\`
    <en-lookup
      label=\${label}
      placeholder=\${placeholder}
      ?loading=\${loading}
      .options=\${[]}
    ></en-lookup>
  \`
}`,...(v=(E=i.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var f,O,L;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Estado',
    error: 'Campo obrigatório'
  },
  render: ({
    label,
    error
  }) => html\`
    <en-lookup
      label=\${label}
      error=\${error}
      .options=\${SAMPLE_OPTIONS}
    ></en-lookup>
  \`
}`,...(L=(O=t.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var A,T,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Campo bloqueado quando o usuário não tem permissão para editar o campo naquele contexto.'
      }
    }
  },
  args: {
    label: 'Estado',
    disabled: true
  },
  render: ({
    label,
    disabled
  }) => html\`
    <en-lookup
      label=\${label}
      ?disabled=\${disabled}
      .options=\${SAMPLE_OPTIONS}
    ></en-lookup>
  \`
}`,...(M=(T=d.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var C,N,_;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Filled',
  parameters: {
    docs: {
      description: {
        story: 'Campo com valor já selecionado — estado após o usuário escolher uma opção.'
      }
    }
  },
  args: {
    label: 'Estado'
  },
  render: ({
    label
  }) => {
    const selected: LookupOption = {
      value: 'sp',
      label: 'São Paulo'
    };
    return html\`
      <en-lookup
        label=\${label}
        .value=\${selected}
        .options=\${SAMPLE_OPTIONS}
      ></en-lookup>
    \`;
  }
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var y,I,D;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With Hint',
  parameters: {
    docs: {
      description: {
        story: 'Texto auxiliar abaixo do campo para orientar o usuário sem estado de erro.'
      }
    }
  },
  args: {
    label: 'Estado',
    hint: 'Selecione o estado de emissão da nota fiscal'
  },
  render: ({
    label,
    hint
  }) => html\`
    <en-lookup
      label=\${label}
      hint=\${hint}
      .options=\${SAMPLE_OPTIONS}
    ></en-lookup>
  \`
}`,...(D=(I=u.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var q,B,W;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story: 'Todos os estados do componente em uma única view — útil para QA e revisão visual.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => {
    const selected: LookupOption = {
      value: 'sp',
      label: 'São Paulo'
    };
    return html\`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 300px;">
        <en-lookup label="Default" placeholder="Buscar..." .options=\${SAMPLE_OPTIONS}></en-lookup>
        <en-lookup label="Filled" .value=\${selected} .options=\${SAMPLE_OPTIONS}></en-lookup>
        <en-lookup label="Disabled" disabled .options=\${SAMPLE_OPTIONS}></en-lookup>
        <en-lookup label="Error" error="Campo obrigatório" .options=\${SAMPLE_OPTIONS}></en-lookup>
        <en-lookup label="Loading" loading .options=\${[]}></en-lookup>
        <en-lookup label="With Hint" hint="Selecione um estado brasileiro" .options=\${SAMPLE_OPTIONS}></en-lookup>
      </div>
    \`;
  }
}`,...(W=(B=c.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const G=["Default","Multiple","Loading","WithError","Disabled","Filled","WithHint","AllStates"];export{c as AllStates,r as Default,d as Disabled,p as Filled,i as Loading,s as Multiple,t as WithError,u as WithHint,G as __namedExportsOrder,j as default};
