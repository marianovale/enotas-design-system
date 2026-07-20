import{b as n}from"./lit-element-DYTQqYiP.js";const G={title:"Primitives/EnButton",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"],description:"Variante visual do botão"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do botão"},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},label:{control:"text"}},args:{variant:"primary",size:"md",disabled:!1,loading:!1,fullWidth:!1,label:"Emitir Nota"}},e={render:({variant:i,size:S,disabled:x,loading:w,fullWidth:A,label:D})=>n`<en-button
      variant=${i}
      size=${S}
      ?disabled=${x}
      ?loading=${w}
      ?full-width=${A}
    >${D}</en-button>`},t={render:()=>n`
    <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center">
      <en-button variant="primary">Primary</en-button>
      <en-button variant="secondary">Secondary</en-button>
      <en-button variant="ghost">Ghost</en-button>
      <en-button variant="danger">Danger</en-button>
    </div>
  `},a={render:()=>n`
    <div style="display:flex;gap:1rem;align-items:center">
      <en-button size="sm">Small</en-button>
      <en-button size="md">Medium</en-button>
      <en-button size="lg">Large</en-button>
    </div>
  `},r={args:{loading:!0,label:"Aguarde..."},render:({label:i})=>n`<en-button variant="primary" loading>${i}</en-button>`},o={render:()=>n`
    <div style="display:flex;gap:1rem">
      <en-button variant="primary" disabled>Primary</en-button>
      <en-button variant="secondary" disabled>Secondary</en-button>
      <en-button variant="ghost" disabled>Ghost</en-button>
    </div>
  `};var s,l,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    variant,
    size,
    disabled,
    loading,
    fullWidth,
    label
  }) => html\`<en-button
      variant=\${variant}
      size=\${size}
      ?disabled=\${disabled}
      ?loading=\${loading}
      ?full-width=\${fullWidth}
    >\${label}</en-button>\`
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,b,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center">
      <en-button variant="primary">Primary</en-button>
      <en-button variant="secondary">Secondary</en-button>
      <en-button variant="ghost">Ghost</en-button>
      <en-button variant="danger">Danger</en-button>
    </div>
  \`
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:1rem;align-items:center">
      <en-button size="sm">Small</en-button>
      <en-button size="md">Medium</en-button>
      <en-button size="lg">Large</en-button>
    </div>
  \`
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,y,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Aguarde...'
  },
  render: ({
    label
  }) => html\`<en-button variant="primary" loading>\${label}</en-button>\`
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,z,$;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:1rem">
      <en-button variant="primary" disabled>Primary</en-button>
      <en-button variant="secondary" disabled>Secondary</en-button>
      <en-button variant="ghost" disabled>Ghost</en-button>
    </div>
  \`
}`,...($=(z=o.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const L=["Default","AllVariants","AllSizes","Loading","Disabled"];export{a as AllSizes,t as AllVariants,e as Default,o as Disabled,r as Loading,L as __namedExportsOrder,G as default};
