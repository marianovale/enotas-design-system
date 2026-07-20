import{b as e}from"./lit-element-DYTQqYiP.js";const R={title:"Primitives/EnCheckbox",tags:["autodocs"],parameters:{docs:{description:{component:`
\`en-checkbox\` é o controle de seleção do eNotas DS. Oferece três variantes visuais:

- **square** — caixa com cantos arredondados; use para seleções múltiplas em listas (padrão HTML \`<input type="checkbox">\`)
- **round** — caixa circular; use para seleção exclusiva em grupos pequenos (estilo radio visual com semântica de checkbox)
- **switch** — toggle deslizante; use para ligar/desligar uma configuração com efeito imediato

O estado \`checked="indeterminate"\` (traço −) aplica-se a square e round quando um grupo parcialmente está selecionado.
Emite \`enChange\` com o novo valor booleano ao ser clicado ou acionado por teclado (Space / Enter).
        `.trim()}}},argTypes:{type:{control:"select",options:["square","round","switch"],description:"Variante visual do controle. `square` = caixa; `round` = círculo; `switch` = toggle deslizante.",table:{defaultValue:{summary:"square"}}},checked:{control:"select",options:[!1,!0,"indeterminate"],description:'Estado marcado. Aceita `true`, `false` ou `"indeterminate"` (exibe traço −, só em square/round).',table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Desabilita o controle. Bloqueia cliques, aplica opacity 0.4 e remove do tab order.",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Texto visível ao lado do controle. Omita para usar apenas o ícone.",table:{defaultValue:{summary:""}}}},args:{type:"square",checked:!1,disabled:!1,label:"Aceito os termos"}},a={name:"Default",render:({type:L,checked:z,disabled:D,label:A})=>e`<en-checkbox
      type=${L}
      .checked=${z}
      ?disabled=${D}
      label=${A}
    ></en-checkbox>`},c={name:"Checked",parameters:{docs:{description:{story:"Controle no estado marcado (`checked`)."}}},render:()=>e`<en-checkbox type="square" checked label="Selecionado"></en-checkbox>`},o={name:"Indeterminate",parameters:{docs:{description:{story:"Estado intermediário: exibe traço (−). Útil quando um grupo tem seleção parcial. Aplica-se a `square` e `round`; ignorado em `switch`."}}},render:()=>e`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square" checked="indeterminate" label="Square — indeterminate"></en-checkbox>
      <en-checkbox type="round"  checked="indeterminate" label="Round — indeterminate"></en-checkbox>
    </div>
  `},n={name:"Disabled",parameters:{docs:{description:{story:"Todos os tipos no estado `disabled` (desmarcado e marcado). Opacity 0.4, sem interação."}}},render:()=>e`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square"  disabled label="Square desabilitado"></en-checkbox>
      <en-checkbox type="square"  disabled checked label="Square marcado desabilitado"></en-checkbox>
      <en-checkbox type="round"   disabled label="Round desabilitado"></en-checkbox>
      <en-checkbox type="round"   disabled checked label="Round marcado desabilitado"></en-checkbox>
      <en-checkbox type="switch"  disabled label="Switch desabilitado"></en-checkbox>
      <en-checkbox type="switch"  disabled checked label="Switch ativo desabilitado"></en-checkbox>
    </div>
  `},t={name:"All Types",parameters:{docs:{description:{story:"As três variantes visuais no estado marcado."}}},render:()=>e`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square" checked label="Square"></en-checkbox>
      <en-checkbox type="round"  checked label="Round"></en-checkbox>
      <en-checkbox type="switch" checked label="Switch"></en-checkbox>
    </div>
  `},s={name:"All States",parameters:{docs:{description:{story:"Grade completa: type (square / round / switch) × estado (default / checked / indeterminate / disabled / checked+disabled)."}}},render:()=>e`
    <div style="display:grid;grid-template-columns:auto repeat(5,1fr);gap:0.75rem 1.5rem;align-items:center">
      <!-- Cabeçalho -->
      <span></span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Default</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Checked</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Indeterminate</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Disabled</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Checked + Disabled</span>

      <!-- Square -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Square</span>
      <en-checkbox type="square" label="Label"></en-checkbox>
      <en-checkbox type="square" checked label="Label"></en-checkbox>
      <en-checkbox type="square" checked="indeterminate" label="Label"></en-checkbox>
      <en-checkbox type="square" disabled label="Label"></en-checkbox>
      <en-checkbox type="square" checked disabled label="Label"></en-checkbox>

      <!-- Round -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Round</span>
      <en-checkbox type="round" label="Label"></en-checkbox>
      <en-checkbox type="round" checked label="Label"></en-checkbox>
      <en-checkbox type="round" checked="indeterminate" label="Label"></en-checkbox>
      <en-checkbox type="round" disabled label="Label"></en-checkbox>
      <en-checkbox type="round" checked disabled label="Label"></en-checkbox>

      <!-- Switch -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Switch</span>
      <en-checkbox type="switch" label="Label"></en-checkbox>
      <en-checkbox type="switch" checked label="Label"></en-checkbox>
      <span style="font-size:0.75rem;color:#999;font-style:italic">n/a</span>
      <en-checkbox type="switch" disabled label="Label"></en-checkbox>
      <en-checkbox type="switch" checked disabled label="Label"></en-checkbox>
    </div>
  `};var l,r,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Default',
  render: ({
    type,
    checked,
    disabled,
    label
  }) => html\`<en-checkbox
      type=\${type}
      .checked=\${checked}
      ?disabled=\${disabled}
      label=\${label}
    ></en-checkbox>\`
}`,...(d=(r=a.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var i,b,h;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Checked',
  parameters: {
    docs: {
      description: {
        story: 'Controle no estado marcado (\`checked\`).'
      }
    }
  },
  render: () => html\`<en-checkbox type="square" checked label="Selecionado"></en-checkbox>\`
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var p,m,k;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Indeterminate',
  parameters: {
    docs: {
      description: {
        story: 'Estado intermediário: exibe traço (−). Útil quando um grupo tem seleção parcial. Aplica-se a \`square\` e \`round\`; ignorado em \`switch\`.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square" checked="indeterminate" label="Square — indeterminate"></en-checkbox>
      <en-checkbox type="round"  checked="indeterminate" label="Round — indeterminate"></en-checkbox>
    </div>
  \`
}`,...(k=(m=o.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var u,x,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Todos os tipos no estado \`disabled\` (desmarcado e marcado). Opacity 0.4, sem interação.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square"  disabled label="Square desabilitado"></en-checkbox>
      <en-checkbox type="square"  disabled checked label="Square marcado desabilitado"></en-checkbox>
      <en-checkbox type="round"   disabled label="Round desabilitado"></en-checkbox>
      <en-checkbox type="round"   disabled checked label="Round marcado desabilitado"></en-checkbox>
      <en-checkbox type="switch"  disabled label="Switch desabilitado"></en-checkbox>
      <en-checkbox type="switch"  disabled checked label="Switch ativo desabilitado"></en-checkbox>
    </div>
  \`
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,g,q;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'All Types',
  parameters: {
    docs: {
      description: {
        story: 'As três variantes visuais no estado marcado.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <en-checkbox type="square" checked label="Square"></en-checkbox>
      <en-checkbox type="round"  checked label="Round"></en-checkbox>
      <en-checkbox type="switch" checked label="Switch"></en-checkbox>
    </div>
  \`
}`,...(q=(g=t.parameters)==null?void 0:g.docs)==null?void 0:q.source}}};var w,S,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story: 'Grade completa: type (square / round / switch) × estado (default / checked / indeterminate / disabled / checked+disabled).'
      }
    }
  },
  render: () => html\`
    <div style="display:grid;grid-template-columns:auto repeat(5,1fr);gap:0.75rem 1.5rem;align-items:center">
      <!-- Cabeçalho -->
      <span></span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Default</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Checked</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Indeterminate</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Disabled</span>
      <span style="font-size:0.75rem;font-weight:600;color:#666">Checked + Disabled</span>

      <!-- Square -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Square</span>
      <en-checkbox type="square" label="Label"></en-checkbox>
      <en-checkbox type="square" checked label="Label"></en-checkbox>
      <en-checkbox type="square" checked="indeterminate" label="Label"></en-checkbox>
      <en-checkbox type="square" disabled label="Label"></en-checkbox>
      <en-checkbox type="square" checked disabled label="Label"></en-checkbox>

      <!-- Round -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Round</span>
      <en-checkbox type="round" label="Label"></en-checkbox>
      <en-checkbox type="round" checked label="Label"></en-checkbox>
      <en-checkbox type="round" checked="indeterminate" label="Label"></en-checkbox>
      <en-checkbox type="round" disabled label="Label"></en-checkbox>
      <en-checkbox type="round" checked disabled label="Label"></en-checkbox>

      <!-- Switch -->
      <span style="font-size:0.75rem;font-weight:600;color:#666">Switch</span>
      <en-checkbox type="switch" label="Label"></en-checkbox>
      <en-checkbox type="switch" checked label="Label"></en-checkbox>
      <span style="font-size:0.75rem;color:#999;font-style:italic">n/a</span>
      <en-checkbox type="switch" disabled label="Label"></en-checkbox>
      <en-checkbox type="switch" checked disabled label="Label"></en-checkbox>
    </div>
  \`
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const T=["Default","Checked","Indeterminate","Disabled","AllTypes","AllStates"];export{s as AllStates,t as AllTypes,c as Checked,a as Default,n as Disabled,o as Indeterminate,T as __namedExportsOrder,R as default};
