import{b as e}from"./lit-element-DYTQqYiP.js";const T={title:"Primitives/EnInputNumber",tags:["autodocs"],parameters:{docs:{description:{component:"Campo numérico com botões de incremento e decremento. Suporta label, hint, erro, limites mínimo/máximo e passo configurável. Gerencia estados internamente (default → focus → finished) e emite eventos `enChange` e `enInput`. Ideal para quantidades, parcelas e valores inteiros dentro de um intervalo definido."}}},argTypes:{label:{control:"text",description:"Rótulo visível acima do campo."},value:{control:"number",description:"Valor atual do campo (controlado, padrão 0)."},min:{control:"number",description:"Valor mínimo permitido — o botão de decremento é desabilitado ao atingir este limite."},max:{control:"number",description:"Valor máximo permitido — o botão de incremento é desabilitado ao atingir este limite."},step:{control:"number",description:"Quantidade adicionada/subtraída a cada clique nos botões de step (padrão 1)."},disabled:{control:"boolean",description:"Desabilita o campo e ambos os botões impedindo qualquer interação."},required:{control:"boolean",description:"Marca o campo como obrigatório com asterisco (*) ao lado do label."},error:{control:"text",description:"Mensagem de erro — ativa borda vermelha e exibe o texto abaixo do campo."},hint:{control:"text",description:"Texto auxiliar exibido abaixo do campo (ocultado automaticamente quando há `error`)."},name:{control:"text",description:"Atributo `name` para submissão de formulários HTML nativos."}},args:{label:"Quantidade",value:1,min:0,max:100,step:1,disabled:!1}},a={name:"Default",parameters:{docs:{description:{story:"Estado inicial com valor zero — sem interação."}}},render:({label:F,value:Q,min:V,max:H,step:M,disabled:R,required:A,error:I,hint:L})=>e`<en-input-number
      label=${F}
      value=${Q}
      min=${V}
      max=${H}
      step=${M}
      ?disabled=${R}
      ?required=${A}
      error=${I??""}
      hint=${L??""}
      style="max-width:200px"
    ></en-input-number>`},n={name:"With Limits",parameters:{docs:{description:{story:"Campo com limites explícitos de min/max e hint orientando o usuário. Os botões de step são desabilitados automaticamente ao atingir os extremos."}}},render:()=>e`<en-input-number
      label="Número de parcelas"
      value="3"
      min="1"
      max="12"
      hint="Máximo 12 parcelas"
      style="max-width:200px"
    ></en-input-number>`},r={name:"With Hint",parameters:{docs:{description:{story:"Texto auxiliar abaixo do campo orientando o preenchimento. Ocultado automaticamente quando há `error`."}}},render:()=>e`<en-input-number
      label="Quantidade de itens"
      value="0"
      min="0"
      max="999"
      hint="Informe a quantidade disponível em estoque."
      style="max-width:200px"
    ></en-input-number>`},i={name:"With Error",parameters:{docs:{description:{story:'Estado de validação com erro — borda vermelha e mensagem abaixo do campo. Corresponde ao estado `error` no Figma. Use `error=""` para limpar.'}}},render:()=>e`<en-input-number
      label="Quantidade"
      value="150"
      min="0"
      max="100"
      error="Valor excede o limite máximo de 100"
      style="max-width:200px"
    ></en-input-number>`},o={name:"Disabled",parameters:{docs:{description:{story:"Campo desabilitado — corresponde ao estado `inactived` no Figma. Fundo cinza, botões e input com cursor `not-allowed`."}}},render:()=>e`<en-input-number
      label="Quantidade (fixo)"
      value="5"
      min="0"
      max="100"
      disabled
      style="max-width:200px"
    ></en-input-number>`},t={name:"Required",parameters:{docs:{description:{story:"Campo obrigatório — asterisco (*) ao lado do label e atributo `required` no input nativo."}}},render:()=>e`<en-input-number
      label="Quantidade mínima"
      value="0"
      min="0"
      max="100"
      required
      style="max-width:200px"
    ></en-input-number>`},m={name:"All States",parameters:{docs:{description:{story:"Visão geral de todos os estados: default, filled, disabled, error e required. Útil para validar tokens visuais e paridade com o Figma."}},controls:{disable:!0}},render:()=>e`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1.5rem; padding: 1rem;">
      <en-input-number
        label="Default"
        value="0"
        min="0"
        max="100"
      ></en-input-number>

      <en-input-number
        label="Filled"
        value="5"
        min="0"
        max="100"
      ></en-input-number>

      <en-input-number
        label="With Hint"
        value="0"
        min="0"
        max="100"
        hint="Máximo 100 unidades"
      ></en-input-number>

      <en-input-number
        label="Error"
        value="150"
        min="0"
        max="100"
        error="Valor excede o máximo"
      ></en-input-number>

      <en-input-number
        label="Disabled"
        value="5"
        min="0"
        max="100"
        disabled
      ></en-input-number>

      <en-input-number
        label="Required"
        value="0"
        min="0"
        max="100"
        required
      ></en-input-number>
    </div>
  `};var s,d,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Estado inicial com valor zero — sem interação.'
      }
    }
  },
  render: ({
    label,
    value,
    min,
    max,
    step,
    disabled,
    required,
    error,
    hint
  }) => html\`<en-input-number
      label=\${label}
      value=\${value}
      min=\${min}
      max=\${max}
      step=\${step}
      ?disabled=\${disabled}
      ?required=\${required}
      error=\${error ?? ''}
      hint=\${hint ?? ''}
      style="max-width:200px"
    ></en-input-number>\`
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,p,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With Limits',
  parameters: {
    docs: {
      description: {
        story: 'Campo com limites explícitos de min/max e hint orientando o usuário. ' + 'Os botões de step são desabilitados automaticamente ao atingir os extremos.'
      }
    }
  },
  render: () => html\`<en-input-number
      label="Número de parcelas"
      value="3"
      min="1"
      max="12"
      hint="Máximo 12 parcelas"
      style="max-width:200px"
    ></en-input-number>\`
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,x,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'With Hint',
  parameters: {
    docs: {
      description: {
        story: 'Texto auxiliar abaixo do campo orientando o preenchimento. Ocultado automaticamente quando há \`error\`.'
      }
    }
  },
  render: () => html\`<en-input-number
      label="Quantidade de itens"
      value="0"
      min="0"
      max="999"
      hint="Informe a quantidade disponível em estoque."
      style="max-width:200px"
    ></en-input-number>\`
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,g,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With Error',
  parameters: {
    docs: {
      description: {
        story: 'Estado de validação com erro — borda vermelha e mensagem abaixo do campo. ' + 'Corresponde ao estado \`error\` no Figma. Use \`error=""\` para limpar.'
      }
    }
  },
  render: () => html\`<en-input-number
      label="Quantidade"
      value="150"
      min="0"
      max="100"
      error="Valor excede o limite máximo de 100"
      style="max-width:200px"
    ></en-input-number>\`
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var q,f,$;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Campo desabilitado — corresponde ao estado \`inactived\` no Figma. ' + 'Fundo cinza, botões e input com cursor \`not-allowed\`.'
      }
    }
  },
  render: () => html\`<en-input-number
      label="Quantidade (fixo)"
      value="5"
      min="0"
      max="100"
      disabled
      style="max-width:200px"
    ></en-input-number>\`
}`,...($=(f=o.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var w,W,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Required',
  parameters: {
    docs: {
      description: {
        story: 'Campo obrigatório — asterisco (*) ao lado do label e atributo \`required\` no input nativo.'
      }
    }
  },
  render: () => html\`<en-input-number
      label="Quantidade mínima"
      value="0"
      min="0"
      max="100"
      required
      style="max-width:200px"
    ></en-input-number>\`
}`,...(D=(W=t.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,S,C;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story: 'Visão geral de todos os estados: default, filled, disabled, error e required. ' + 'Útil para validar tokens visuais e paridade com o Figma.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1.5rem; padding: 1rem;">
      <en-input-number
        label="Default"
        value="0"
        min="0"
        max="100"
      ></en-input-number>

      <en-input-number
        label="Filled"
        value="5"
        min="0"
        max="100"
      ></en-input-number>

      <en-input-number
        label="With Hint"
        value="0"
        min="0"
        max="100"
        hint="Máximo 100 unidades"
      ></en-input-number>

      <en-input-number
        label="Error"
        value="150"
        min="0"
        max="100"
        error="Valor excede o máximo"
      ></en-input-number>

      <en-input-number
        label="Disabled"
        value="5"
        min="0"
        max="100"
        disabled
      ></en-input-number>

      <en-input-number
        label="Required"
        value="0"
        min="0"
        max="100"
        required
      ></en-input-number>
    </div>
  \`
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const z=["Default","WithLimits","WithHint","WithError","Disabled","Required","AllStates"];export{m as AllStates,a as Default,o as Disabled,t as Required,i as WithError,r as WithHint,n as WithLimits,z as __namedExportsOrder,T as default};
