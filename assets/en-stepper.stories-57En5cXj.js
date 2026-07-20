const a=[{label:"Dados da empresa",description:"CNPJ, razão social e endereço"},{label:"Configuração fiscal",description:"Regime tributário e certificado digital"},{label:"Integração",description:"Conectar com seu sistema de vendas"},{label:"Pronto!",description:"Comece a emitir suas notas"}],x={title:"Compostos/EnStepper",tags:["autodocs"],argTypes:{currentStep:{control:"number",min:0,max:3}},args:{currentStep:1}},r={render:({currentStep:e})=>{const t=document.createElement("en-stepper");return t.steps=a,t.currentStep=e,t.style.maxWidth="320px",t}},n={name:"Passo 1 (início)",render:()=>{const e=document.createElement("en-stepper");return e.steps=a,e.currentStep=0,e.style.maxWidth="320px",e}},s={name:"Último passo (concluído)",render:()=>{const e=document.createElement("en-stepper");return e.steps=a,e.currentStep=3,e.style.maxWidth="320px",e}};var o,c,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: ({
    currentStep
  }: any) => {
    const el = document.createElement('en-stepper') as any;
    el.steps = STEPS;
    el.currentStep = currentStep;
    el.style.maxWidth = '320px';
    return el;
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Passo 1 (início)',
  render: () => {
    const el = document.createElement('en-stepper') as any;
    el.steps = STEPS;
    el.currentStep = 0;
    el.style.maxWidth = '320px';
    return el;
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,u,S;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Último passo (concluído)',
  render: () => {
    const el = document.createElement('en-stepper') as any;
    el.steps = STEPS;
    el.currentStep = 3;
    el.style.maxWidth = '320px';
    return el;
  }
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const E=["Default","FirstStep","LastStep"];export{r as Default,n as FirstStep,s as LastStep,E as __namedExportsOrder,x as default};
