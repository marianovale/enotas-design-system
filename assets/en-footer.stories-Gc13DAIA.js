import{b as c}from"./lit-element-DYTQqYiP.js";const f={title:"Compostos/EnFooter",tags:["autodocs"],argTypes:{copyright:{control:"text"},version:{control:"text"}},args:{version:"2.4.1"}},e={render:({copyright:l,version:d})=>c`<en-footer copyright=${l??""} version=${d}></en-footer>`},o={name:"Com links",render:()=>c`
    <en-footer version="2.4.1">
      <div slot="links" style="display:flex;gap:1.5rem">
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Termos de uso</a>
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Privacidade</a>
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Suporte</a>
      </div>
    </en-footer>
  `};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    copyright,
    version
  }) => html\`<en-footer copyright=\${copyright ?? ''} version=\${version}></en-footer>\`
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Com links',
  render: () => html\`
    <en-footer version="2.4.1">
      <div slot="links" style="display:flex;gap:1.5rem">
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Termos de uso</a>
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Privacidade</a>
        <a href="#" style="font-size:.875rem;color:#6b6b6b;text-decoration:none">Suporte</a>
      </div>
    </en-footer>
  \`
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const p=["Default","WithLinks"];export{e as Default,o as WithLinks,p as __namedExportsOrder,f as default};
