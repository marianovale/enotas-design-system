import{b as a}from"./lit-element-DYTQqYiP.js";const u={title:"Compostos/EnCard",tags:["autodocs"],argTypes:{size:{control:"select",options:["large","small"]},bordered:{control:"boolean"},clickable:{control:"boolean"}},args:{size:"large",bordered:!1,clickable:!1}},e={render:({size:g,bordered:b,clickable:f})=>a`
    <en-card size=${g} ?bordered=${b} ?clickable=${f} style="max-width:400px">
      <div slot="header" style="font-weight:600;font-size:1rem">Resumo do mês</div>
      <p style="margin:0;color:#6b6b6b">Total de notas emitidas: <strong>142</strong></p>
      <p style="margin:8px 0 0;color:#6b6b6b">Valor total: <strong>R$ 48.320,00</strong></p>
      <div slot="footer">
        <en-button variant="ghost" size="sm">Ver detalhes</en-button>
      </div>
    </en-card>
  `},t={render:()=>a`
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <en-card size="large" style="width:300px">
        <div slot="header" style="font-weight:600">Large card</div>
        Conteúdo do card grande com mais padding.
      </en-card>
      <en-card size="small" style="width:300px">
        <div slot="header" style="font-weight:600">Small card</div>
        Conteúdo do card compacto.
      </en-card>
    </div>
  `},r={render:()=>a`
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <en-card clickable size="small" style="width:200px;cursor:pointer">
        <en-nf-status type="nfs-e" status="emitida"></en-nf-status>
        <p style="margin:8px 0 0;font-weight:600">NFS-e #1042</p>
        <p style="margin:4px 0 0;font-size:.875rem;color:#6b6b6b">R$ 1.200,00</p>
      </en-card>
      <en-card clickable size="small" style="width:200px;cursor:pointer">
        <en-nf-status type="nf-e" status="cancelada"></en-nf-status>
        <p style="margin:8px 0 0;font-weight:600">NF-e #893</p>
        <p style="margin:4px 0 0;font-size:.875rem;color:#6b6b6b">R$ 3.450,00</p>
      </en-card>
    </div>
  `};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    size,
    bordered,
    clickable
  }) => html\`
    <en-card size=\${size} ?bordered=\${bordered} ?clickable=\${clickable} style="max-width:400px">
      <div slot="header" style="font-weight:600;font-size:1rem">Resumo do mês</div>
      <p style="margin:0;color:#6b6b6b">Total de notas emitidas: <strong>142</strong></p>
      <p style="margin:8px 0 0;color:#6b6b6b">Valor total: <strong>R$ 48.320,00</strong></p>
      <div slot="footer">
        <en-button variant="ghost" size="sm">Ver detalhes</en-button>
      </div>
    </en-card>
  \`
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,d,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <en-card size="large" style="width:300px">
        <div slot="header" style="font-weight:600">Large card</div>
        Conteúdo do card grande com mais padding.
      </en-card>
      <en-card size="small" style="width:300px">
        <div slot="header" style="font-weight:600">Small card</div>
        Conteúdo do card compacto.
      </en-card>
    </div>
  \`
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      <en-card clickable size="small" style="width:200px;cursor:pointer">
        <en-nf-status type="nfs-e" status="emitida"></en-nf-status>
        <p style="margin:8px 0 0;font-weight:600">NFS-e #1042</p>
        <p style="margin:4px 0 0;font-size:.875rem;color:#6b6b6b">R$ 1.200,00</p>
      </en-card>
      <en-card clickable size="small" style="width:200px;cursor:pointer">
        <en-nf-status type="nf-e" status="cancelada"></en-nf-status>
        <p style="margin:8px 0 0;font-weight:600">NF-e #893</p>
        <p style="margin:4px 0 0;font-size:.875rem;color:#6b6b6b">R$ 3.450,00</p>
      </en-card>
    </div>
  \`
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const h=["Default","Sizes","Clickable"];export{r as Clickable,e as Default,t as Sizes,h as __namedExportsOrder,u as default};
