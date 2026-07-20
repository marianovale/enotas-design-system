import{b as u}from"./lit-element-DYTQqYiP.js";const x={title:"Compostos/EnSearch",tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"}},args:{placeholder:"Buscar notas fiscais...",disabled:!1}},a={render:({placeholder:e,disabled:l})=>u`<en-search placeholder=${e} ?disabled=${l} style="max-width:400px"></en-search>`},r={render:()=>{const e=document.createElement("en-search");return e.value="NFS-e São Paulo",e.style.maxWidth="400px",e}},s={args:{disabled:!0},render:({placeholder:e,disabled:l})=>u`<en-search placeholder=${e} ?disabled=${l} style="max-width:400px"></en-search>`};var d,t,o;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    placeholder,
    disabled
  }) => html\`<en-search placeholder=\${placeholder} ?disabled=\${disabled} style="max-width:400px"></en-search>\`
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const el = document.createElement('en-search') as any;
    el.value = 'NFS-e São Paulo';
    el.style.maxWidth = '400px';
    return el;
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,h,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: ({
    placeholder,
    disabled
  }) => html\`<en-search placeholder=\${placeholder} ?disabled=\${disabled} style="max-width:400px"></en-search>\`
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const g=["Default","WithValue","Disabled"];export{a as Default,s as Disabled,r as WithValue,g as __namedExportsOrder,x as default};
