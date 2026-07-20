import{b as i}from"./lit-element-DYTQqYiP.js";const u=["alert","alert-circle","arrow-down","arrow-left","arrow-right","arrow-up","calendar-tucked-corner","chart","clock","company","credit-cards","dashboard","done-check","done-check-circle","download","earth-world","envelope","eye-hidden","eye-show-visible","filter-sort","help","hourglass","invoice","invoice-checkmark","key","link","mail-open","nfe","nfs","notification","padlock-lock","padlock-unlock","pen","percent","plus-add","print","refresh-rotate","rocket","search","setting","share-arrow","shopping-bag-line","star","target","trash","user","users","wallet"],g={title:"Primitives/EnIcon",tags:["autodocs"],argTypes:{name:{control:"select",options:u},size:{control:"select",options:["8px","12px","16px","20px","24px"]},label:{control:"text"}},args:{name:"nfe",size:"24px"}},n={render:({name:e,size:x,label:h})=>i`<en-icon name=${e} size=${x} label=${h??""}></en-icon>`},o={render:()=>i`
    <div style="display:flex;align-items:center;gap:1.5rem;color:#1f1f1f">
      <en-icon name="nfe" size="8px"></en-icon>
      <en-icon name="nfe" size="12px"></en-icon>
      <en-icon name="nfe" size="16px"></en-icon>
      <en-icon name="nfe" size="20px"></en-icon>
      <en-icon name="nfe" size="24px"></en-icon>
    </div>
  `},a={name:"Ícones eNotas",render:()=>i`
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;color:#1f1f1f">
      ${["nfe","nfs","nfe-devolution","nfe-split","nfe-history","nfe-canceled","nfe-done","nfe-xml","nf-paper","invoice","invoice-checkmark"].map(e=>i`
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;color:#6b6b6b">
            <en-icon name=${e} size="24px"></en-icon>
            <span>${e}</span>
          </div>`)}
    </div>
  `};var r,s,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    name,
    size,
    label
  }) => html\`<en-icon name=\${name} size=\${size} label=\${label ?? ''}></en-icon>\`
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var t,l,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;align-items:center;gap:1.5rem;color:#1f1f1f">
      <en-icon name="nfe" size="8px"></en-icon>
      <en-icon name="nfe" size="12px"></en-icon>
      <en-icon name="nfe" size="16px"></en-icon>
      <en-icon name="nfe" size="20px"></en-icon>
      <en-icon name="nfe" size="24px"></en-icon>
    </div>
  \`
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,f,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Ícones eNotas',
  render: () => html\`
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;color:#1f1f1f">
      \${['nfe', 'nfs', 'nfe-devolution', 'nfe-split', 'nfe-history', 'nfe-canceled', 'nfe-done', 'nfe-xml', 'nf-paper', 'invoice', 'invoice-checkmark'].map(name => html\`
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;color:#6b6b6b">
            <en-icon name=\${name} size="24px"></en-icon>
            <span>\${name}</span>
          </div>\`)}
    </div>
  \`
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const z=["Default","Sizes","ENotasIcons"];export{n as Default,a as ENotasIcons,o as Sizes,z as __namedExportsOrder,g as default};
