const N={title:"Compostos/EnHeader",tags:["autodocs"],argTypes:{userName:{control:"text"},notificationCount:{control:"number"},showSearch:{control:"boolean"}},args:{userName:"Mariano Vale",notificationCount:3,showSearch:!0}},n={render:({userName:e,notificationCount:p,showSearch:S})=>{const o=document.createElement("en-header");return o.userName=e,o.notificationCount=p,o.showSearch=S,o}},a={name:"Com logo customizado",render:()=>{const e=document.createElement("en-header");return e.userName="Ana Souza",e.notificationCount=0,e.logoSrc="https://via.placeholder.com/80x32?text=eNotas",e.logoAlt="eNotas",e}},t={name:"Sem campo de busca",render:()=>{const e=document.createElement("en-header");return e.userName="Carlos Lima",e.showSearch=!1,e.notificationCount=12,e}};var r,s,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    userName,
    notificationCount,
    showSearch
  }: any) => {
    const el = document.createElement('en-header') as any;
    el.userName = userName;
    el.notificationCount = notificationCount;
    el.showSearch = showSearch;
    return el;
  }
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Com logo customizado',
  render: () => {
    const el = document.createElement('en-header') as any;
    el.userName = 'Ana Souza';
    el.notificationCount = 0;
    el.logoSrc = 'https://via.placeholder.com/80x32?text=eNotas';
    el.logoAlt = 'eNotas';
    return el;
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var i,d,h;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Sem campo de busca',
  render: () => {
    const el = document.createElement('en-header') as any;
    el.userName = 'Carlos Lima';
    el.showSearch = false;
    el.notificationCount = 12;
    return el;
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const f=["Default","WithLogo","NoSearch"];export{n as Default,t as NoSearch,a as WithLogo,f as __namedExportsOrder,N as default};
