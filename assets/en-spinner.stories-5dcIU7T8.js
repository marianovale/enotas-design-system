import{b as s}from"./lit-element-DYTQqYiP.js";const T={title:"Primitives/EnSpinner",tags:["autodocs"],parameters:{docs:{description:{component:'Indicador de carregamento animado (spinning). Use sempre que uma operação assíncrona estiver em andamento. Forneça a prop `label` com texto descritivo — ela é lida por screen readers via `role="status"` e não aparece visualmente.'}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Tamanho do spinner. `default` é alias de `md`. Opções disponíveis: `xs`, `sm`, `md`, `lg`, `xl`.",table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["default","thin","thick"],description:"Espessura do traço do spinner. `default` usa a espessura padrão do design token.",table:{defaultValue:{summary:"default"}}},label:{control:"text",description:'Texto acessível lido por screen readers via `aria-label` interno. Não é visível na tela. Use verbos de ação no gerúndio: "Carregando...", "Salvando...", "Processando nota...".',table:{defaultValue:{summary:"Carregando..."}}}},args:{size:"md",variant:"default",label:"Carregando..."}},e={render:({size:i,variant:E,label:w})=>s`<en-spinner size=${i} variant=${E} label=${w}></en-spinner>`},n={parameters:{controls:{disable:!0}},render:()=>s`
    <div style="display:flex;gap:1.5rem;align-items:center">
      <en-spinner size="xs"></en-spinner>
      <en-spinner size="sm"></en-spinner>
      <en-spinner size="md"></en-spinner>
      <en-spinner size="lg"></en-spinner>
      <en-spinner size="xl"></en-spinner>
    </div>
  `},r={parameters:{controls:{disable:!0}},render:()=>s`
    <div style="display:flex;gap:2rem;align-items:flex-end">
      ${["xs","sm","md","lg","xl"].map(i=>s`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem">
            <en-spinner size=${i} label="Carregando..."></en-spinner>
            <span style="font-size:0.75rem;color:var(--en-content-secondary,#6b7280)">${i}</span>
          </div>
        `)}
    </div>
  `},a={parameters:{controls:{disable:!0}},render:()=>s`
    <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:320px">
      <!-- Botão com spinner inline -->
      <button
        disabled
        style="
          display:inline-flex;
          align-items:center;
          gap:0.5rem;
          padding:0.5rem 1rem;
          background:var(--en-action-primary-background,#22baa0);
          color:#fff;
          border:none;
          border-radius:var(--en-radius-md,6px);
          font-size:0.875rem;
          cursor:not-allowed;
          opacity:0.8;
        "
      >
        <en-spinner size="sm" label="Emitindo nota..."></en-spinner>
        Emitindo nota...
      </button>

      <!-- Card de carregamento -->
      <div
        style="
          display:flex;
          align-items:center;
          gap:1rem;
          padding:1rem 1.25rem;
          border:1px solid var(--en-border-subtle,#e5e7eb);
          border-radius:var(--en-radius-md,6px);
          background:var(--en-surface-default,#fff);
        "
      >
        <en-spinner size="md" label="Carregando notas fiscais..."></en-spinner>
        <div>
          <div style="font-size:0.875rem;font-weight:500;color:var(--en-content-default,#111827)">
            Carregando notas fiscais
          </div>
          <div style="font-size:0.75rem;color:var(--en-content-secondary,#6b7280);margin-top:0.25rem">
            Aguarde enquanto buscamos os dados...
          </div>
        </div>
      </div>
    </div>
  `};var o,t,d,l,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: ({
    size,
    variant,
    label
  }) => html\`<en-spinner size=\${size} variant=\${variant} label=\${label}></en-spinner>\`
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source},description:{story:"Estado interativo padrão. Use os controles para explorar tamanhos, variantes e labels.",...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.description}}};var m,c,u,v,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;gap:1.5rem;align-items:center">
      <en-spinner size="xs"></en-spinner>
      <en-spinner size="sm"></en-spinner>
      <en-spinner size="md"></en-spinner>
      <en-spinner size="lg"></en-spinner>
      <en-spinner size="xl"></en-spinner>
    </div>
  \`
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:"Todos os tamanhos disponíveis lado a lado para comparação visual.",...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.description}}};var b,f,x,y,z;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;gap:2rem;align-items:flex-end">
      \${(['xs', 'sm', 'md', 'lg', 'xl'] as SpinnerSize[]).map(size => html\`
          <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem">
            <en-spinner size=\${size} label="Carregando..."></en-spinner>
            <span style="font-size:0.75rem;color:var(--en-content-secondary,#6b7280)">\${size}</span>
          </div>
        \`)}
    </div>
  \`
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`Todos os tamanhos com label visível abaixo de cada spinner.
Útil para alinhar com decisões de layout: qual tamanho usar em cada contexto.`,...(z=(y=r.parameters)==null?void 0:y.docs)==null?void 0:z.description}}};var h,C,S,$,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:320px">
      <!-- Botão com spinner inline -->
      <button
        disabled
        style="
          display:inline-flex;
          align-items:center;
          gap:0.5rem;
          padding:0.5rem 1rem;
          background:var(--en-action-primary-background,#22baa0);
          color:#fff;
          border:none;
          border-radius:var(--en-radius-md,6px);
          font-size:0.875rem;
          cursor:not-allowed;
          opacity:0.8;
        "
      >
        <en-spinner size="sm" label="Emitindo nota..."></en-spinner>
        Emitindo nota...
      </button>

      <!-- Card de carregamento -->
      <div
        style="
          display:flex;
          align-items:center;
          gap:1rem;
          padding:1rem 1.25rem;
          border:1px solid var(--en-border-subtle,#e5e7eb);
          border-radius:var(--en-radius-md,6px);
          background:var(--en-surface-default,#fff);
        "
      >
        <en-spinner size="md" label="Carregando notas fiscais..."></en-spinner>
        <div>
          <div style="font-size:0.875rem;font-weight:500;color:var(--en-content-default,#111827)">
            Carregando notas fiscais
          </div>
          <div style="font-size:0.75rem;color:var(--en-content-secondary,#6b7280);margin-top:0.25rem">
            Aguarde enquanto buscamos os dados...
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:`Spinner em contexto real: botão com estado de carregamento.
Demonstra uso inline com ação desabilitada durante o processamento.`,...(k=($=a.parameters)==null?void 0:$.docs)==null?void 0:k.description}}};const q=["Default","AllSizes","AllSizesLabeled","InContext"];export{n as AllSizes,r as AllSizesLabeled,e as Default,a as InContext,q as __namedExportsOrder,T as default};
