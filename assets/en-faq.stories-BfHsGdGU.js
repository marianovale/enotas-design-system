const c=[{question:"O que é NFS-e?",answer:"A Nota Fiscal de Serviços Eletrônica (NFS-e) é um documento de existência exclusivamente digital, gerado e armazenado eletronicamente pela Prefeitura ou por empresa conveniada, para documentar as operações de prestação de serviços."},{question:"Como cancelo uma nota fiscal?",answer:'Para cancelar uma NF-e, acesse a nota desejada, clique em "Cancelar" e informe o motivo do cancelamento. O prazo máximo para cancelamento varia conforme a prefeitura emissora.'},{question:"Qual o prazo de emissão da NFS-e?",answer:"O prazo de emissão depende da prefeitura. A maioria processa em até 2 minutos, mas algumas podem levar até 24 horas em casos de instabilidade no sistema municipal."},{question:"Posso emitir NF-e e NFS-e pela mesma conta?",answer:"Sim. O eNotas suporta emissão de múltiplos tipos de notas fiscais na mesma conta, desde que a empresa esteja habilitada para cada tipo junto às autoridades fiscais."}],d={title:"Compostos/EnFaq",tags:["autodocs"],argTypes:{multiple:{control:"boolean"}},args:{multiple:!1}},t={render:({multiple:e})=>{const a=document.createElement("en-faq");return a.items=c,a.multiple=e,a.style.maxWidth="640px",a}},s={name:"Múltiplos abertos",render:()=>{const e=document.createElement("en-faq");return e.items=c,e.multiple=!0,e.openIndex=0,e.style.maxWidth="640px",e}};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: ({
    multiple
  }) => {
    const el = document.createElement('en-faq') as any;
    el.items = FAQ_ITEMS;
    el.multiple = multiple;
    el.style.maxWidth = '640px';
    return el;
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,m,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Múltiplos abertos',
  render: () => {
    const el = document.createElement('en-faq') as any;
    el.items = FAQ_ITEMS;
    el.multiple = true;
    el.openIndex = 0;
    el.style.maxWidth = '640px';
    return el;
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const p=["Default","MultipleOpen"];export{t as Default,s as MultipleOpen,p as __namedExportsOrder,d as default};
