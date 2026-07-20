import{b as o}from"./lit-element-DYTQqYiP.js";const y={title:"Primitivos/EnTooltip",tags:["autodocs"],argTypes:{text:{control:"text"},placement:{control:"select",options:["top","bottom","left","right"]},disabled:{control:"boolean"}},args:{text:"Texto explicativo",placement:"top",disabled:!1}},e={render:({text:u,placement:b,disabled:g})=>o`
    <div style="display:flex;justify-content:center;padding:3rem">
      <en-tooltip text=${u} placement=${b} ?disabled=${g}>
        <en-button variant="secondary" size="sm">Passe o mouse</en-button>
      </en-tooltip>
    </div>
  `},t={name:"Todos os posicionamentos",render:()=>o`
    <div style="display:grid;grid-template-columns:repeat(2,auto);gap:2rem;justify-content:center;padding:4rem">
      <en-tooltip text="Tooltip em cima" placement="top">
        <en-button variant="secondary" size="sm">Top</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip embaixo" placement="bottom">
        <en-button variant="secondary" size="sm">Bottom</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip à esquerda" placement="left">
        <en-button variant="secondary" size="sm">Left</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip à direita" placement="right">
        <en-button variant="secondary" size="sm">Right</en-button>
      </en-tooltip>
    </div>
  `},n={name:"Em ícone de ajuda",render:()=>o`
    <div style="display:flex;align-items:center;gap:0.5rem;padding:3rem">
      <span>Regime tributário</span>
      <en-tooltip text="O regime define como os impostos são calculados na emissão da nota." placement="right">
        <en-icon name="help" size="16px" style="color:#6b6b6b;cursor:help"></en-icon>
      </en-tooltip>
    </div>
  `};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ({
    text,
    placement,
    disabled
  }) => html\`
    <div style="display:flex;justify-content:center;padding:3rem">
      <en-tooltip text=\${text} placement=\${placement} ?disabled=\${disabled}>
        <en-button variant="secondary" size="sm">Passe o mouse</en-button>
      </en-tooltip>
    </div>
  \`
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var r,l,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Todos os posicionamentos',
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(2,auto);gap:2rem;justify-content:center;padding:4rem">
      <en-tooltip text="Tooltip em cima" placement="top">
        <en-button variant="secondary" size="sm">Top</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip embaixo" placement="bottom">
        <en-button variant="secondary" size="sm">Bottom</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip à esquerda" placement="left">
        <en-button variant="secondary" size="sm">Left</en-button>
      </en-tooltip>
      <en-tooltip text="Tooltip à direita" placement="right">
        <en-button variant="secondary" size="sm">Right</en-button>
      </en-tooltip>
    </div>
  \`
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,c,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Em ícone de ajuda',
  render: () => html\`
    <div style="display:flex;align-items:center;gap:0.5rem;padding:3rem">
      <span>Regime tributário</span>
      <en-tooltip text="O regime define como os impostos são calculados na emissão da nota." placement="right">
        <en-icon name="help" size="16px" style="color:#6b6b6b;cursor:help"></en-icon>
      </en-tooltip>
    </div>
  \`
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const v=["Default","AllPlacements","WithIcon"];export{t as AllPlacements,e as Default,n as WithIcon,v as __namedExportsOrder,y as default};
