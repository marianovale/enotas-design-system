import{b as c}from"./lit-element-DYTQqYiP.js";const b={title:"Compostos/EnNavItem",tags:["autodocs"],argTypes:{active:{control:"boolean"},disabled:{control:"boolean"},icon:{control:"text"},count:{control:"number"}},args:{active:!1,disabled:!1,icon:"nfe"}},e={render:({active:m,disabled:d,icon:v,count:l})=>c`<en-nav-item ?active=${m} ?disabled=${d} icon=${v} count=${l} style="max-width:220px">
      Notas Fiscais
    </en-nav-item>`},n={name:"Sidebar completa",render:()=>c`
    <nav style="width:220px;padding:0.5rem;background:#fff;border:1px solid #e1e3e6;border-radius:0.75rem">
      <en-nav-item active icon="dashboard">Dashboard</en-nav-item>
      <en-nav-item icon="nfe" count="3">NF-e</en-nav-item>
      <en-nav-item icon="nfs">NFS-e</en-nav-item>
      <en-nav-item icon="company">Empresas</en-nav-item>
      <en-nav-item icon="setting">Configurações</en-nav-item>
      <en-nav-item icon="help">Ajuda</en-nav-item>
      <en-nav-item disabled icon="chart-line">Relatórios (em breve)</en-nav-item>
    </nav>
  `};var a,i,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ({
    active,
    disabled,
    icon,
    count
  }) => html\`<en-nav-item ?active=\${active} ?disabled=\${disabled} icon=\${icon} count=\${count} style="max-width:220px">
      Notas Fiscais
    </en-nav-item>\`
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Sidebar completa',
  render: () => html\`
    <nav style="width:220px;padding:0.5rem;background:#fff;border:1px solid #e1e3e6;border-radius:0.75rem">
      <en-nav-item active icon="dashboard">Dashboard</en-nav-item>
      <en-nav-item icon="nfe" count="3">NF-e</en-nav-item>
      <en-nav-item icon="nfs">NFS-e</en-nav-item>
      <en-nav-item icon="company">Empresas</en-nav-item>
      <en-nav-item icon="setting">Configurações</en-nav-item>
      <en-nav-item icon="help">Ajuda</en-nav-item>
      <en-nav-item disabled icon="chart-line">Relatórios (em breve)</en-nav-item>
    </nav>
  \`
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const u=["Default","Sidebar"];export{e as Default,n as Sidebar,u as __namedExportsOrder,b as default};
