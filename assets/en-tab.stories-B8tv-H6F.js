import{b as e}from"./lit-element-DYTQqYiP.js";const $={title:"Primitives/Tab",tags:["autodocs"],argTypes:{status:{control:"select",options:["inactive","active","hovered"]},disabled:{control:"boolean"},count:{control:"number"},href:{control:"text"}},args:{status:"inactive"}},t={render:({status:S,disabled:E,count:F})=>e`<en-tab status=${S} ?disabled=${E} count=${F}>NFS-e</en-tab>`},a={render:()=>e`<en-tab status="active">NFS-e</en-tab>`},s={render:()=>e`
    <div style="display:flex;gap:4px">
      <en-tab status="active" count="24">Emitidas</en-tab>
      <en-tab count="8">NF-e</en-tab>
      <en-tab count="3">Devoluções</en-tab>
    </div>`},n={render:()=>e`<en-tab href="/notas">Ver todas as notas</en-tab>`},r={render:()=>e`
    <div style="display:flex;border-bottom:1px solid #d6d6d6">
      <en-tab status="active" count="24">Emitidas</en-tab>
      <en-tab count="3">Em processo</en-tab>
      <en-tab>Canceladas</en-tab>
      <en-tab disabled>Rascunhos</en-tab>
    </div>`};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: ({
    status,
    disabled,
    count
  }) => html\`<en-tab status=\${status} ?disabled=\${disabled} count=\${count}>NFS-e</en-tab>\`
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,b,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:'{\n  render: () => html`<en-tab status="active">NFS-e</en-tab>`\n}',...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:4px">
      <en-tab status="active" count="24">Emitidas</en-tab>
      <en-tab count="8">NF-e</en-tab>
      <en-tab count="3">Devoluções</en-tab>
    </div>\`
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:'{\n  render: () => html`<en-tab href="/notas">Ver todas as notas</en-tab>`\n}',...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,g,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;border-bottom:1px solid #d6d6d6">
      <en-tab status="active" count="24">Emitidas</en-tab>
      <en-tab count="3">Em processo</en-tab>
      <en-tab>Canceladas</en-tab>
      <en-tab disabled>Rascunhos</en-tab>
    </div>\`
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const A=["Default","Active","WithCount","AsLink","TabGroup"];export{a as Active,n as AsLink,t as Default,r as TabGroup,s as WithCount,A as __namedExportsOrder,$ as default};
