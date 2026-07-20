import{b as n}from"./lit-element-DYTQqYiP.js";const e=[{value:"simples",label:"Simples Nacional"},{value:"lucro-presumido",label:"Lucro Presumido"},{value:"lucro-real",label:"Lucro Real"},{value:"mei",label:"MEI"}],H={title:"Primitives/EnSelect",tags:["autodocs"],parameters:{docs:{description:{component:"Campo de seleção com suporte a label, placeholder, hint, erro e estado desabilitado. A prop `options` é um array JS (`SelectOption[]`) — não pode ser passada como atributo HTML. Use `.options` em frameworks com binding ou atribua via `element.options = [...]` em Razor/jQuery. Emite `enChange` ao selecionar, `enFocus` ao focar e `enBlur` ao sair do campo."}}},argTypes:{label:{control:"text",description:"Rótulo visível acima do campo."},placeholder:{control:"text",description:"Texto exibido quando nenhuma opção está selecionada."},value:{control:"text",description:"Valor da opção selecionada. Quando preenchido, o campo entra no estado `finished`."},hint:{control:"text",description:"Texto auxiliar exibido abaixo do campo (não aparece quando há `error`)."},error:{control:"text",description:"Mensagem de erro. Exibe borda vermelha e texto abaixo do campo."},disabled:{control:"boolean",description:"Desabilita o campo. Refletido como atributo HTML (`disabled`)."},required:{control:"boolean",description:"Marca o campo como obrigatório. Exibe asterisco (*) ao lado do label."}},args:{label:"Regime tributário",placeholder:"Selecione...",disabled:!1,required:!1}},a={parameters:{docs:{description:{story:"Estado padrão — placeholder visível, sem seleção."}}},render:({label:r,placeholder:o,hint:_,error:N,disabled:C,required:D})=>n`<en-select
      label=${r}
      placeholder=${o}
      .options=${e}
      ?disabled=${C}
      ?required=${D}
      hint=${_??""}
      error=${N??""}
    ></en-select>`},s={parameters:{docs:{description:{story:"Campo com opção já selecionada — estado `finished` no Figma."}}},args:{label:"Regime tributário",value:"simples"},render:({label:r,value:o})=>n`<en-select
      label=${r}
      value=${o}
      .options=${e}
    ></en-select>`},i={parameters:{docs:{description:{story:"Texto auxiliar abaixo do campo. Desaparece quando `error` está preenchido."}}},args:{label:"Regime tributário",hint:"Consulte seu contador caso tenha dúvidas."},render:({label:r,hint:o})=>n`<en-select
      label=${r}
      hint=${o}
      .options=${e}
    ></en-select>`},t={parameters:{docs:{description:{story:"Exibe borda vermelha e mensagem de erro abaixo do campo."}}},args:{label:"Regime tributário",error:"Selecione um regime"},render:({label:r,error:o})=>n`<en-select
      label=${r}
      .options=${e}
      error=${o}
    ></en-select>`},l={parameters:{docs:{description:{story:"Campo obrigatório — exibe asterisco (*) ao lado do label."}}},args:{label:"Regime tributário",required:!0},render:({label:r,required:o})=>n`<en-select
      label=${r}
      .options=${e}
      ?required=${o}
    ></en-select>`},d={parameters:{docs:{description:{story:"Campo desabilitado — estado `inactived` no Figma."}}},args:{disabled:!0,label:"Regime tributário"},render:({label:r,disabled:o})=>n`<en-select
      label=${r}
      .options=${e}
      ?disabled=${o}
    ></en-select>`},c={parameters:{controls:{disable:!0},docs:{description:{story:"Grid com todos os estados do componente para validação visual rápida."}}},render:()=>n`
    <div style="display: grid; grid-template-columns: repeat(3, 240px); gap: 24px; align-items: start;">
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Default</p>
        <en-select label="Regime tributário" .options=${e}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Filled</p>
        <en-select label="Regime tributário" value="simples" .options=${e}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Required</p>
        <en-select label="Regime tributário" required .options=${e}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">With Hint</p>
        <en-select label="Regime tributário" hint="Consulte seu contador." .options=${e}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Error</p>
        <en-select label="Regime tributário" error="Selecione um regime" .options=${e}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Disabled</p>
        <en-select label="Regime tributário" disabled .options=${e}></en-select>
      </div>
    </div>
  `};var p,b,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Estado padrão — placeholder visível, sem seleção.'
      }
    }
  },
  render: ({
    label,
    placeholder,
    hint,
    error,
    disabled,
    required
  }) => html\`<en-select
      label=\${label}
      placeholder=\${placeholder}
      .options=\${REGIME_OPTIONS}
      ?disabled=\${disabled}
      ?required=\${required}
      hint=\${hint ?? ''}
      error=\${error ?? ''}
    ></en-select>\`
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var u,g,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Campo com opção já selecionada — estado \`finished\` no Figma.'
      }
    }
  },
  args: {
    label: 'Regime tributário',
    value: 'simples'
  },
  render: ({
    label,
    value
  }) => html\`<en-select
      label=\${label}
      value=\${value}
      .options=\${REGIME_OPTIONS}
    ></en-select>\`
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,$,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Texto auxiliar abaixo do campo. Desaparece quando \`error\` está preenchido.'
      }
    }
  },
  args: {
    label: 'Regime tributário',
    hint: 'Consulte seu contador caso tenha dúvidas.'
  },
  render: ({
    label,
    hint
  }) => html\`<en-select
      label=\${label}
      hint=\${hint}
      .options=\${REGIME_OPTIONS}
    ></en-select>\`
}`,...(h=($=i.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var R,E,f;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Exibe borda vermelha e mensagem de erro abaixo do campo.'
      }
    }
  },
  args: {
    label: 'Regime tributário',
    error: 'Selecione um regime'
  },
  render: ({
    label,
    error
  }) => html\`<en-select
      label=\${label}
      .options=\${REGIME_OPTIONS}
      error=\${error}
    ></en-select>\`
}`,...(f=(E=t.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var y,S,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Campo obrigatório — exibe asterisco (*) ao lado do label.'
      }
    }
  },
  args: {
    label: 'Regime tributário',
    required: true
  },
  render: ({
    label,
    required
  }) => html\`<en-select
      label=\${label}
      .options=\${REGIME_OPTIONS}
      ?required=\${required}
    ></en-select>\`
}`,...(O=(S=l.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var I,q,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Campo desabilitado — estado \`inactived\` no Figma.'
      }
    }
  },
  args: {
    disabled: true,
    label: 'Regime tributário'
  },
  render: ({
    label,
    disabled
  }) => html\`<en-select
      label=\${label}
      .options=\${REGIME_OPTIONS}
      ?disabled=\${disabled}
    ></en-select>\`
}`,...(T=(q=d.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var M,G,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Grid com todos os estados do componente para validação visual rápida.'
      }
    }
  },
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(3, 240px); gap: 24px; align-items: start;">
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Default</p>
        <en-select label="Regime tributário" .options=\${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Filled</p>
        <en-select label="Regime tributário" value="simples" .options=\${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Required</p>
        <en-select label="Regime tributário" required .options=\${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">With Hint</p>
        <en-select label="Regime tributário" hint="Consulte seu contador." .options=\${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Error</p>
        <en-select label="Regime tributário" error="Selecione um regime" .options=\${REGIME_OPTIONS}></en-select>
      </div>
      <div>
        <p style="font: 12px/1 sans-serif; color: #6b6b6b; margin: 0 0 8px">Disabled</p>
        <en-select label="Regime tributário" disabled .options=\${REGIME_OPTIONS}></en-select>
      </div>
    </div>
  \`
}`,...(P=(G=c.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const W=["Default","Filled","WithHint","WithError","Required","Disabled","AllStates"];export{c as AllStates,a as Default,d as Disabled,s as Filled,l as Required,t as WithError,i as WithHint,W as __namedExportsOrder,H as default};
