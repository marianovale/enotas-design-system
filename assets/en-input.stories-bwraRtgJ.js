import{b as o}from"./lit-element-DYTQqYiP.js";const V={title:"Primitives/EnInput",tags:["autodocs"],parameters:{docs:{description:{component:"Campo de texto com suporte a label, placeholder, hint, erro, required e tamanhos (sm/default/lg). Gerencia estados internamente (default → focus → finished) e emite eventos `enInput`, `enChange`, `enFocus` e `enBlur`. Aceita slots `prefix` e `suffix` para ícones."}}},argTypes:{label:{control:"text",description:"Rótulo visível acima do campo."},placeholder:{control:"text",description:"Texto de apoio exibido quando o campo está vazio."},value:{control:"text",description:"Valor atual do campo (controlado)."},type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"Tipo HTML do input nativo."},hint:{control:"text",description:"Texto auxiliar exibido abaixo do campo (ocultado quando há erro)."},error:{control:"text",description:"Mensagem de erro — ativa borda vermelha e exibe o texto abaixo do campo."},disabled:{control:"boolean",description:"Desabilita o campo impedindo qualquer interação."},required:{control:"boolean",description:"Marca o campo como obrigatório com asterisco (*) ao lado do label."},variantSize:{control:"select",options:["sm","default","lg"],description:"Altura do campo: sm = 32 px, default = 40 px, lg = 48 px."},name:{control:"text",description:"Atributo `name` para submissão de formulários."}},args:{label:"CNPJ",placeholder:"00.000.000/0001-00",disabled:!1,required:!1,variantSize:"default",type:"text"}},n={name:"Default",parameters:{docs:{description:{story:"Estado inicial do campo — vazio, sem interação."}}},render:({label:e,placeholder:a,hint:r,error:J,disabled:w,required:I,variantSize:L,type:M})=>o`<en-input
      label=${e}
      placeholder=${a}
      ?disabled=${w}
      ?required=${I}
      hint=${r??""}
      error=${J??""}
      variantSize=${L}
      type=${M}
    ></en-input>`},i={name:"Filled",parameters:{docs:{description:{story:"Campo com valor preenchido — corresponde ao estado `finished` no Figma. A borda retorna à cor padrão (strong) indicando valor válido."}}},args:{label:"CNPJ",value:"11.222.333/0001-81",placeholder:"00.000.000/0001-00"},render:({label:e,placeholder:a,value:r})=>o`<en-input label=${e} placeholder=${a} value=${r}></en-input>`},l={name:"With Hint",parameters:{docs:{description:{story:"Texto auxiliar abaixo do campo orientando o preenchimento. Ocultado automaticamente quando há `error`."}}},args:{label:"Razão Social",placeholder:"Nome da empresa conforme CNPJ",hint:"Informe o nome exato registrado na Receita Federal."},render:({label:e,placeholder:a,hint:r})=>o`<en-input label=${e} placeholder=${a} hint=${r}></en-input>`},t={name:"With Error",parameters:{docs:{description:{story:'Estado de validação com erro — borda vermelha e mensagem abaixo do campo. Use `error=""` para limpar.'}}},args:{label:"E-mail",placeholder:"seu@email.com",error:"E-mail inválido"},render:({label:e,placeholder:a,error:r})=>o`<en-input label=${e} placeholder=${a} error=${r}></en-input>`},d={name:"Required",parameters:{docs:{description:{story:"Campo obrigatório — asterisco (*) ao lado do label e atributo `required` no input nativo."}}},args:{label:"E-mail corporativo",placeholder:"seu@empresa.com",required:!0},render:({label:e,placeholder:a,required:r})=>o`<en-input label=${e} placeholder=${a} ?required=${r}></en-input>`},s={name:"Disabled",parameters:{docs:{description:{story:"Campo desabilitado — corresponde ao estado `inactived` no Figma. Fundo cinza, cursor `not-allowed`."}}},args:{disabled:!0,label:"Campo desabilitado",placeholder:"Não editável"},render:({label:e,placeholder:a,disabled:r})=>o`<en-input label=${e} placeholder=${a} ?disabled=${r}></en-input>`},p={name:"Sizes",parameters:{docs:{description:{story:"Três tamanhos disponíveis: `sm` (32 px), `default` (40 px) e `lg` (48 px)."}}},render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 320px;">
      <en-input label="Small (32 px)"   placeholder="variantSize=sm"      variantSize="sm"></en-input>
      <en-input label="Default (40 px)" placeholder="variantSize=default"  variantSize="default"></en-input>
      <en-input label="Large (48 px)"   placeholder="variantSize=lg"       variantSize="lg"></en-input>
    </div>
  `},c={name:"All States",parameters:{docs:{description:{story:"Visão geral de todos os estados: default, filled, disabled, error e required. Útil para validar tokens visuais e paridade com o Figma."}},controls:{disable:!0}},render:()=>o`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem; padding: 1rem;">
      <en-input
        label="Default"
        placeholder="00.000.000/0001-00"
      ></en-input>

      <en-input
        label="Filled"
        placeholder="00.000.000/0001-00"
        value="11.222.333/0001-81"
      ></en-input>

      <en-input
        label="Disabled"
        placeholder="00.000.000/0001-00"
        disabled
      ></en-input>

      <en-input
        label="Error"
        placeholder="00.000.000/0001-00"
        error="CNPJ inválido"
      ></en-input>

      <en-input
        label="Required"
        placeholder="00.000.000/0001-00"
        required
      ></en-input>

      <en-input
        label="With Hint"
        placeholder="00.000.000/0001-00"
        hint="Somente empresas ativas."
      ></en-input>
    </div>
  `};var m,u,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Estado inicial do campo — vazio, sem interação.'
      }
    }
  },
  render: ({
    label,
    placeholder,
    hint,
    error,
    disabled,
    required,
    variantSize,
    type
  }) => html\`<en-input
      label=\${label}
      placeholder=\${placeholder}
      ?disabled=\${disabled}
      ?required=\${required}
      hint=\${hint ?? ''}
      error=\${error ?? ''}
      variantSize=\${variantSize}
      type=\${type}
    ></en-input>\`
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,v,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Filled',
  parameters: {
    docs: {
      description: {
        story: 'Campo com valor preenchido — corresponde ao estado \`finished\` no Figma. ' + 'A borda retorna à cor padrão (strong) indicando valor válido.'
      }
    }
  },
  args: {
    label: 'CNPJ',
    value: '11.222.333/0001-81',
    placeholder: '00.000.000/0001-00'
  },
  render: ({
    label,
    placeholder,
    value
  }) => html\`<en-input label=\${label} placeholder=\${placeholder} value=\${value}></en-input>\`
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,f,$;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With Hint',
  parameters: {
    docs: {
      description: {
        story: 'Texto auxiliar abaixo do campo orientando o preenchimento. Ocultado automaticamente quando há \`error\`.'
      }
    }
  },
  args: {
    label: 'Razão Social',
    placeholder: 'Nome da empresa conforme CNPJ',
    hint: 'Informe o nome exato registrado na Receita Federal.'
  },
  render: ({
    label,
    placeholder,
    hint
  }) => html\`<en-input label=\${label} placeholder=\${placeholder} hint=\${hint}></en-input>\`
}`,...($=(f=l.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var S,q,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Error',
  parameters: {
    docs: {
      description: {
        story: 'Estado de validação com erro — borda vermelha e mensagem abaixo do campo. Use \`error=""\` para limpar.'
      }
    }
  },
  args: {
    label: 'E-mail',
    placeholder: 'seu@email.com',
    error: 'E-mail inválido'
  },
  render: ({
    label,
    placeholder,
    error
  }) => html\`<en-input label=\${label} placeholder=\${placeholder} error=\${error}></en-input>\`
}`,...(y=(q=t.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var z,E,C;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Required',
  parameters: {
    docs: {
      description: {
        story: 'Campo obrigatório — asterisco (*) ao lado do label e atributo \`required\` no input nativo.'
      }
    }
  },
  args: {
    label: 'E-mail corporativo',
    placeholder: 'seu@empresa.com',
    required: true
  },
  render: ({
    label,
    placeholder,
    required
  }) => html\`<en-input label=\${label} placeholder=\${placeholder} ?required=\${required}></en-input>\`
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var F,D,N;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Campo desabilitado — corresponde ao estado \`inactived\` no Figma. Fundo cinza, cursor \`not-allowed\`.'
      }
    }
  },
  args: {
    disabled: true,
    label: 'Campo desabilitado',
    placeholder: 'Não editável'
  },
  render: ({
    label,
    placeholder,
    disabled
  }) => html\`<en-input label=\${label} placeholder=\${placeholder} ?disabled=\${disabled}></en-input>\`
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var R,W,A;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: 'Três tamanhos disponíveis: \`sm\` (32 px), \`default\` (40 px) e \`lg\` (48 px).'
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 320px;">
      <en-input label="Small (32 px)"   placeholder="variantSize=sm"      variantSize="sm"></en-input>
      <en-input label="Default (40 px)" placeholder="variantSize=default"  variantSize="default"></en-input>
      <en-input label="Large (48 px)"   placeholder="variantSize=lg"       variantSize="lg"></en-input>
    </div>
  \`
}`,...(A=(W=p.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var T,P,H;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem; padding: 1rem;">
      <en-input
        label="Default"
        placeholder="00.000.000/0001-00"
      ></en-input>

      <en-input
        label="Filled"
        placeholder="00.000.000/0001-00"
        value="11.222.333/0001-81"
      ></en-input>

      <en-input
        label="Disabled"
        placeholder="00.000.000/0001-00"
        disabled
      ></en-input>

      <en-input
        label="Error"
        placeholder="00.000.000/0001-00"
        error="CNPJ inválido"
      ></en-input>

      <en-input
        label="Required"
        placeholder="00.000.000/0001-00"
        required
      ></en-input>

      <en-input
        label="With Hint"
        placeholder="00.000.000/0001-00"
        hint="Somente empresas ativas."
      ></en-input>
    </div>
  \`
}`,...(H=(P=c.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const k=["Default","Filled","WithHint","WithError","Required","Disabled","Sizes","AllStates"];export{c as AllStates,n as Default,s as Disabled,i as Filled,d as Required,p as Sizes,t as WithError,l as WithHint,k as __namedExportsOrder,V as default};
