import{b as t}from"./lit-element-DYTQqYiP.js";const P={title:"Primitives/LoadingBar",tags:["autodocs"],argTypes:{active:{control:"boolean"},value:{control:"number",min:0,max:100}},args:{active:!0}},e={render:()=>t`<en-loading-bar active></en-loading-bar>`},a={args:{value:65},render:({value:o})=>t`<en-loading-bar active value=${o}></en-loading-bar>`},r={render:()=>t`
    <div style="position:relative;width:100%">
      <en-loading-bar active style="position:absolute;top:0;left:0;right:0"></en-loading-bar>
      <div style="padding:32px;color:#6b6b6b;text-align:center">Carregando notas fiscais...</div>
    </div>`},n={render:()=>{const o=t`<en-loading-bar active value="0" id="demo-bar"></en-loading-bar>`;let i=0;const I=setInterval(()=>{i+=5;const s=document.getElementById("demo-bar");s&&(s.value=i),i>=100&&clearInterval(I)},200);return o}};var l,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{\n  render: () => html`<en-loading-bar active></en-loading-bar>`\n}",...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var v,g,m;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 65
  },
  render: ({
    value
  }) => html\`<en-loading-bar active value=\${value}></en-loading-bar>\`
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,u,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <div style="position:relative;width:100%">
      <en-loading-bar active style="position:absolute;top:0;left:0;right:0"></en-loading-bar>
      <div style="padding:32px;color:#6b6b6b;text-align:center">Carregando notas fiscais...</div>
    </div>\`
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,y,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const el = html\`<en-loading-bar active value="0" id="demo-bar"></en-loading-bar>\`;
    let v = 0;
    const interval = setInterval(() => {
      v += 5;
      const bar = document.getElementById('demo-bar') as any;
      if (bar) bar.value = v;
      if (v >= 100) clearInterval(interval);
    }, 200);
    return el;
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const S=["Indeterminate","Determinate","PageLoader","Progress0to100"];export{a as Determinate,e as Indeterminate,r as PageLoader,n as Progress0to100,S as __namedExportsOrder,P as default};
