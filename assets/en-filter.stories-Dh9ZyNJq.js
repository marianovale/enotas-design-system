import{b as t}from"./lit-element-DYTQqYiP.js";const F={title:"Compostos/EnFilter",tags:["autodocs"],argTypes:{active:{control:"boolean"},disabled:{control:"boolean"},count:{control:"number"}},args:{active:!1,disabled:!1}},e={render:({active:p,disabled:u,count:v})=>t`<en-filter ?active=${p} ?disabled=${u} count=${v}>NFS-e</en-filter>`},n={name:"Grupo de filtros",render:()=>t`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
      <en-filter active>Todos</en-filter>
      <en-filter count="24">NFS-e</en-filter>
      <en-filter count="8">NF-e</en-filter>
      <en-filter count="3">NF-e Devolução</en-filter>
      <en-filter disabled>Importação (em breve)</en-filter>
    </div>
  `},r={name:"Com ícone",render:()=>t`
    <div style="display:flex;gap:0.5rem">
      <en-filter>
        <en-icon slot="icon" name="filter-sort" size="16px"></en-icon>
        Filtrar
      </en-filter>
      <en-filter active>
        <en-icon slot="icon" name="done-check" size="16px"></en-icon>
        Emitidas
      </en-filter>
    </div>
  `};var i,o,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    active,
    disabled,
    count
  }) => html\`<en-filter ?active=\${active} ?disabled=\${disabled} count=\${count}>NFS-e</en-filter>\`
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var a,s,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Grupo de filtros',
  render: () => html\`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
      <en-filter active>Todos</en-filter>
      <en-filter count="24">NFS-e</en-filter>
      <en-filter count="8">NF-e</en-filter>
      <en-filter count="3">NF-e Devolução</en-filter>
      <en-filter disabled>Importação (em breve)</en-filter>
    </div>
  \`
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,f,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Com ícone',
  render: () => html\`
    <div style="display:flex;gap:0.5rem">
      <en-filter>
        <en-icon slot="icon" name="filter-sort" size="16px"></en-icon>
        Filtrar
      </en-filter>
      <en-filter active>
        <en-icon slot="icon" name="done-check" size="16px"></en-icon>
        Emitidas
      </en-filter>
    </div>
  \`
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const x=["Default","FilterGroup","WithIcon"];export{e as Default,n as FilterGroup,r as WithIcon,x as __namedExportsOrder,F as default};
