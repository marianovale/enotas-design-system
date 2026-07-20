import{b as a}from"./lit-element-DYTQqYiP.js";const T={title:"Components/EnSwitch",tags:["autodocs"],parameters:{docs:{description:{component:"Switch toggle para ativar/desativar uma configuração com efeito imediato. Use `<en-switch>` quando a ação tem efeito imediato (ex: ligar emissão automática). Prefira `<en-checkbox>` quando a seleção faz parte de um formulário com botão de confirmação."}}},argTypes:{label:{control:"text",description:"Label visível ao lado do switch"},checked:{control:"boolean",description:"Estado ligado/desligado"},disabled:{control:"boolean",description:"Desabilita a interação"},value:{control:"text",description:"Valor submetido quando checked (formulários)"}},args:{label:"Emissão automática",checked:!1,disabled:!1,value:"on"}},n={render:({label:e,checked:i,disabled:t})=>a`
    <en-switch
      label=${e}
      ?checked=${i}
      ?disabled=${t}
    ></en-switch>
  `},o={name:"Ligado (checked)",args:{label:"Modo escuro",checked:!0},render:({label:e,checked:i})=>a`
    <en-switch label=${e} ?checked=${i}></en-switch>
  `},s={name:"Desabilitado",render:()=>a`
    <div style="display:flex;flex-direction:column;gap:12px;padding:16px">
      <en-switch label="Desabilitado (off)" disabled></en-switch>
      <en-switch label="Desabilitado (on)" disabled checked></en-switch>
    </div>
  `},d={name:"Sem label",render:()=>a`
    <div style="display:flex;gap:16px;padding:16px;align-items:center">
      <en-switch></en-switch>
      <en-switch checked></en-switch>
    </div>
  `},l={name:"Todos os estados",parameters:{docs:{description:{story:"Grid 2×3 mostrando as combinações de off/on com sem label, com label e disabled."}}},render:()=>a`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:16px;font-family:sans-serif;font-size:12px;color:#6b7280;text-align:center">
      <div>
        <div style="margin-bottom:8px;font-weight:600">Sem label</div>
        <en-switch></en-switch>
      </div>
      <div>
        <div style="margin-bottom:8px;font-weight:600">Com label</div>
        <en-switch label="Label"></en-switch>
      </div>
      <div>
        <div style="margin-bottom:8px;font-weight:600">Disabled</div>
        <en-switch label="Label" disabled></en-switch>
      </div>
      <div>
        <en-switch checked></en-switch>
        <div style="margin-top:8px">Sem label (on)</div>
      </div>
      <div>
        <en-switch checked label="Label"></en-switch>
        <div style="margin-top:8px">Com label (on)</div>
      </div>
      <div>
        <en-switch checked disabled label="Label"></en-switch>
        <div style="margin-top:8px">Disabled (on)</div>
      </div>
    </div>
  `},c={name:"Em contexto — configurações de emissão",render:()=>a`
    <div style="font-family:sans-serif;font-size:14px;max-width:480px;padding:16px">
      <div style="font-weight:600;font-size:16px;margin-bottom:16px">Configurações de emissão</div>
      <div style="display:flex;flex-direction:column;gap:0;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        ${[{label:"Emissão automática",description:"Emite a NFS-e imediatamente após o pagamento",checked:!0},{label:"Enviar por e-mail",description:"Envia a nota para o tomador automaticamente",checked:!0},{label:"Cancelamento automático",description:"Cancela a nota ao estornar o pagamento",checked:!1},{label:"Notificações de falha",description:"Alerta por e-mail quando uma emissão falhar",checked:!0},{label:"Modo sandbox",description:"Emite em ambiente de testes (não gera nota fiscal real)",checked:!1}].map(({label:e,description:i,checked:t},m)=>a`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;${m>0?"border-top:1px solid #e5e7eb":""}">
            <div>
              <div style="font-weight:500">${e}</div>
              <div style="color:#6b7280;font-size:12px;margin-top:2px">${i}</div>
            </div>
            <en-switch ?checked=${t}></en-switch>
          </div>
        `)}
      </div>
    </div>
  `},r={name:"Captura de eventos (enChange)",render:()=>{const e=i=>t=>{const m=t.detail;console.log(`[enChange] ${i}:`,m)};return a`
      <div style="font-family:sans-serif;font-size:14px;padding:16px;display:flex;flex-direction:column;gap:12px">
        <p style="margin:0;color:#6b7280">Abra o console para ver os eventos <code>enChange</code>.</p>
        <en-switch
          label="Emissão automática"
          @enChange=${e("Emissão automática")}
        ></en-switch>
        <en-switch
          label="Enviar por e-mail"
          checked
          @enChange=${e("Enviar por e-mail")}
        ></en-switch>
      </div>
    `}};var p,h,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    label,
    checked,
    disabled
  }) => html\`
    <en-switch
      label=\${label}
      ?checked=\${checked}
      ?disabled=\${disabled}
    ></en-switch>
  \`
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,g,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Ligado (checked)',
  args: {
    label: 'Modo escuro',
    checked: true
  },
  render: ({
    label,
    checked
  }) => html\`
    <en-switch label=\${label} ?checked=\${checked}></en-switch>
  \`
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,u,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Desabilitado',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;padding:16px">
      <en-switch label="Desabilitado (off)" disabled></en-switch>
      <en-switch label="Desabilitado (on)" disabled checked></en-switch>
    </div>
  \`
}`,...(w=(u=s.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var y,k,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Sem label',
  render: () => html\`
    <div style="display:flex;gap:16px;padding:16px;align-items:center">
      <en-switch></en-switch>
      <en-switch checked></en-switch>
    </div>
  \`
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var E,$,S;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Todos os estados',
  parameters: {
    docs: {
      description: {
        story: 'Grid 2×3 mostrando as combinações de off/on com sem label, com label e disabled.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:16px;font-family:sans-serif;font-size:12px;color:#6b7280;text-align:center">
      <div>
        <div style="margin-bottom:8px;font-weight:600">Sem label</div>
        <en-switch></en-switch>
      </div>
      <div>
        <div style="margin-bottom:8px;font-weight:600">Com label</div>
        <en-switch label="Label"></en-switch>
      </div>
      <div>
        <div style="margin-bottom:8px;font-weight:600">Disabled</div>
        <en-switch label="Label" disabled></en-switch>
      </div>
      <div>
        <en-switch checked></en-switch>
        <div style="margin-top:8px">Sem label (on)</div>
      </div>
      <div>
        <en-switch checked label="Label"></en-switch>
        <div style="margin-top:8px">Com label (on)</div>
      </div>
      <div>
        <en-switch checked disabled label="Label"></en-switch>
        <div style="margin-top:8px">Disabled (on)</div>
      </div>
    </div>
  \`
}`,...(S=($=l.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var D,L,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Em contexto — configurações de emissão',
  render: () => html\`
    <div style="font-family:sans-serif;font-size:14px;max-width:480px;padding:16px">
      <div style="font-weight:600;font-size:16px;margin-bottom:16px">Configurações de emissão</div>
      <div style="display:flex;flex-direction:column;gap:0;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        \${[{
    label: 'Emissão automática',
    description: 'Emite a NFS-e imediatamente após o pagamento',
    checked: true
  }, {
    label: 'Enviar por e-mail',
    description: 'Envia a nota para o tomador automaticamente',
    checked: true
  }, {
    label: 'Cancelamento automático',
    description: 'Cancela a nota ao estornar o pagamento',
    checked: false
  }, {
    label: 'Notificações de falha',
    description: 'Alerta por e-mail quando uma emissão falhar',
    checked: true
  }, {
    label: 'Modo sandbox',
    description: 'Emite em ambiente de testes (não gera nota fiscal real)',
    checked: false
  }].map(({
    label,
    description,
    checked
  }, i) => html\`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 16px;\${i > 0 ? 'border-top:1px solid #e5e7eb' : ''}">
            <div>
              <div style="font-weight:500">\${label}</div>
              <div style="color:#6b7280;font-size:12px;margin-top:2px">\${description}</div>
            </div>
            <en-switch ?checked=\${checked}></en-switch>
          </div>
        \`)}
      </div>
    </div>
  \`
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var A,q,M;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Captura de eventos (enChange)',
  render: () => {
    const onSwitch = (label: string) => (e: Event) => {
      const checked = (e as CustomEvent<boolean>).detail;
      console.log(\`[enChange] \${label}:\`, checked);
    };
    return html\`
      <div style="font-family:sans-serif;font-size:14px;padding:16px;display:flex;flex-direction:column;gap:12px">
        <p style="margin:0;color:#6b7280">Abra o console para ver os eventos <code>enChange</code>.</p>
        <en-switch
          label="Emissão automática"
          @enChange=\${onSwitch('Emissão automática')}
        ></en-switch>
        <en-switch
          label="Enviar por e-mail"
          checked
          @enChange=\${onSwitch('Enviar por e-mail')}
        ></en-switch>
      </div>
    \`;
  }
}`,...(M=(q=r.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const j=["Default","Checked","Disabled","WithoutLabel","AllStates","InContext","EventHandling"];export{l as AllStates,o as Checked,n as Default,s as Disabled,r as EventHandling,c as InContext,d as WithoutLabel,j as __namedExportsOrder,T as default};
