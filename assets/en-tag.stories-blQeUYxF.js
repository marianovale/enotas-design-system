import{b as e}from"./lit-element-DYTQqYiP.js";const G=["neutral","red","orange","yellow","green","teal","blue","purple"],D={title:"Components/EnTag",tags:["autodocs"],parameters:{docs:{description:{component:`
**en-tag** é um rótulo colorido inline usado para categorizar ou classificar conteúdo.

Quando usar **tag** (em vez de **badge**):
- Rótulo associado a um item de lista ou tabela — ex.: tipo de nota, status de categoria.
- Pode ser removida pelo usuário quando \`dismissible\` é true (filtros ativos, seleções).
- Conteúdo textual livre via slot — pode ser qualquer string curta.

Quando usar **badge** (em vez de **tag**):
- Contador numérico ou indicador de quantidade — ex.: "3 pendentes".
- Não é removível pelo usuário; serve apenas como informação visual.
        `.trim()}}},argTypes:{variant:{control:"select",options:G,description:"Cor semântica da tag. Use cores frias (teal, blue) para categorias neutras, quentes (red, orange) para alertas e warm (yellow) para avisos.",table:{type:{summary:"TagVariant"},defaultValue:{summary:"neutral"}}},dismissible:{control:"boolean",description:"Quando `true`, exibe um botão de fechar (×) que ao ser clicado dispara o evento `enDismiss`. Útil em filtros ativos e seleções removíveis.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:"text",description:"Conteúdo textual exibido dentro da tag (mapeado para o slot padrão).",table:{type:{summary:"string"}}}},args:{variant:"neutral",dismissible:!1,label:"São Paulo"}},a={parameters:{docs:{description:{story:"Playground interativo — altere variant, dismissible e label nos Controls."}}},render:({variant:o,dismissible:l,label:d})=>e`
    <en-tag variant=${o} ?dismissible=${l}>${d}</en-tag>
  `},t={name:"Todas as cores",parameters:{docs:{description:{story:"As 8 variantes de cor disponíveis, todas sem dismiss."}}},render:()=>e`
    <div style="display:flex;flex-wrap:wrap;gap:8px;padding:16px">
      <en-tag variant="neutral">Neutral</en-tag>
      <en-tag variant="red">Red</en-tag>
      <en-tag variant="orange">Orange</en-tag>
      <en-tag variant="yellow">Yellow</en-tag>
      <en-tag variant="green">Green</en-tag>
      <en-tag variant="teal">Teal</en-tag>
      <en-tag variant="blue">Blue</en-tag>
      <en-tag variant="purple">Purple</en-tag>
    </div>
  `},n={name:"Todos os estados",parameters:{docs:{description:{story:"Grade compacta com as 8 variantes em dois estados: sem dismiss (linha superior) e com dismiss (linha inferior)."}}},render:()=>e`
    <div style="display:flex;flex-direction:column;gap:12px;padding:16px">
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <en-tag variant="neutral">Neutral</en-tag>
        <en-tag variant="red">Red</en-tag>
        <en-tag variant="orange">Orange</en-tag>
        <en-tag variant="yellow">Yellow</en-tag>
        <en-tag variant="green">Green</en-tag>
        <en-tag variant="teal">Teal</en-tag>
        <en-tag variant="blue">Blue</en-tag>
        <en-tag variant="purple">Purple</en-tag>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <en-tag variant="neutral" dismissible>Neutral</en-tag>
        <en-tag variant="red" dismissible>Red</en-tag>
        <en-tag variant="orange" dismissible>Orange</en-tag>
        <en-tag variant="yellow" dismissible>Yellow</en-tag>
        <en-tag variant="green" dismissible>Green</en-tag>
        <en-tag variant="teal" dismissible>Teal</en-tag>
        <en-tag variant="blue" dismissible>Blue</en-tag>
        <en-tag variant="purple" dismissible>Purple</en-tag>
      </div>
    </div>
  `},i={name:"Com dismiss",parameters:{docs:{description:{story:"Tags removíveis — típicas em filtros ativos. O evento `enDismiss` é disparado ao clicar no ×."}}},render:()=>e`
    <div style="display:flex;flex-wrap:wrap;gap:8px;padding:16px">
      <en-tag variant="teal" dismissible>São Paulo</en-tag>
      <en-tag variant="blue" dismissible>Rio de Janeiro</en-tag>
      <en-tag variant="green" dismissible>Minas Gerais</en-tag>
      <en-tag variant="orange" dismissible>Bahia</en-tag>
    </div>
  `},s={name:"Em contexto — filtros ativos",parameters:{docs:{description:{story:"Padrão comum em listagens: barra de filtros ativos acima da tabela, onde cada tag pode ser removida individualmente."}}},render:()=>e`
    <div style="font-family:sans-serif;font-size:14px;padding:16px;max-width:560px">
      <div style="color:#6b7280;margin-bottom:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">
        Filtros ativos
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <en-tag variant="teal" dismissible>NFS-e</en-tag>
        <en-tag variant="blue" dismissible>Autorizada</en-tag>
        <en-tag variant="green" dismissible>Jan–Mar 2025</en-tag>
        <en-tag variant="purple" dismissible>Acima de R$ 1.000</en-tag>
      </div>
    </div>
  `},r={name:"Em contexto — categorização de serviços",parameters:{docs:{description:{story:"Tags não removíveis usadas para classificar linhas de uma lista. Ideal para categorias de serviço, status ou tributos."}}},render:()=>e`
    <div style="font-family:sans-serif;font-size:14px;padding:16px">
      <div style="display:flex;flex-direction:column;gap:12px">
        ${[{nome:"Desenvolvimento de Software",tags:[{v:"teal",l:"TI"},{v:"blue",l:"ISS 5%"}]},{nome:"Consultoria Tributária",tags:[{v:"purple",l:"Consultoria"},{v:"orange",l:"ISS 2%"}]},{nome:"Design Gráfico",tags:[{v:"yellow",l:"Criativo"},{v:"green",l:"Simples"}]}].map(({nome:o,tags:l})=>e`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border:1px solid #e5e7eb;border-radius:8px">
            <span style="font-weight:500">${o}</span>
            <div style="display:flex;gap:6px">
              ${l.map(({v:d,l:A})=>e`<en-tag variant=${d}>${A}</en-tag>`)}
            </div>
          </div>
        `)}
      </div>
    </div>
  `};var g,p,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Playground interativo — altere variant, dismissible e label nos Controls.'
      }
    }
  },
  render: ({
    variant,
    dismissible,
    label
  }) => html\`
    <en-tag variant=\${variant} ?dismissible=\${dismissible}>\${label}</en-tag>
  \`
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,c,u;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Todas as cores',
  parameters: {
    docs: {
      description: {
        story: 'As 8 variantes de cor disponíveis, todas sem dismiss.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex;flex-wrap:wrap;gap:8px;padding:16px">
      <en-tag variant="neutral">Neutral</en-tag>
      <en-tag variant="red">Red</en-tag>
      <en-tag variant="orange">Orange</en-tag>
      <en-tag variant="yellow">Yellow</en-tag>
      <en-tag variant="green">Green</en-tag>
      <en-tag variant="teal">Teal</en-tag>
      <en-tag variant="blue">Blue</en-tag>
      <en-tag variant="purple">Purple</en-tag>
    </div>
  \`
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,x,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Todos os estados',
  parameters: {
    docs: {
      description: {
        story: 'Grade compacta com as 8 variantes em dois estados: sem dismiss (linha superior) e com dismiss (linha inferior).'
      }
    }
  },
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;padding:16px">
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <en-tag variant="neutral">Neutral</en-tag>
        <en-tag variant="red">Red</en-tag>
        <en-tag variant="orange">Orange</en-tag>
        <en-tag variant="yellow">Yellow</en-tag>
        <en-tag variant="green">Green</en-tag>
        <en-tag variant="teal">Teal</en-tag>
        <en-tag variant="blue">Blue</en-tag>
        <en-tag variant="purple">Purple</en-tag>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <en-tag variant="neutral" dismissible>Neutral</en-tag>
        <en-tag variant="red" dismissible>Red</en-tag>
        <en-tag variant="orange" dismissible>Orange</en-tag>
        <en-tag variant="yellow" dismissible>Yellow</en-tag>
        <en-tag variant="green" dismissible>Green</en-tag>
        <en-tag variant="teal" dismissible>Teal</en-tag>
        <en-tag variant="blue" dismissible>Blue</en-tag>
        <en-tag variant="purple" dismissible>Purple</en-tag>
      </div>
    </div>
  \`
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,w,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Com dismiss',
  parameters: {
    docs: {
      description: {
        story: 'Tags removíveis — típicas em filtros ativos. O evento \`enDismiss\` é disparado ao clicar no ×.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex;flex-wrap:wrap;gap:8px;padding:16px">
      <en-tag variant="teal" dismissible>São Paulo</en-tag>
      <en-tag variant="blue" dismissible>Rio de Janeiro</en-tag>
      <en-tag variant="green" dismissible>Minas Gerais</en-tag>
      <en-tag variant="orange" dismissible>Bahia</en-tag>
    </div>
  \`
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var h,T,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Em contexto — filtros ativos',
  parameters: {
    docs: {
      description: {
        story: 'Padrão comum em listagens: barra de filtros ativos acima da tabela, onde cada tag pode ser removida individualmente.'
      }
    }
  },
  render: () => html\`
    <div style="font-family:sans-serif;font-size:14px;padding:16px;max-width:560px">
      <div style="color:#6b7280;margin-bottom:8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">
        Filtros ativos
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <en-tag variant="teal" dismissible>NFS-e</en-tag>
        <en-tag variant="blue" dismissible>Autorizada</en-tag>
        <en-tag variant="green" dismissible>Jan–Mar 2025</en-tag>
        <en-tag variant="purple" dismissible>Acima de R$ 1.000</en-tag>
      </div>
    </div>
  \`
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var $,z,P;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Em contexto — categorização de serviços',
  parameters: {
    docs: {
      description: {
        story: 'Tags não removíveis usadas para classificar linhas de uma lista. Ideal para categorias de serviço, status ou tributos.'
      }
    }
  },
  render: () => html\`
    <div style="font-family:sans-serif;font-size:14px;padding:16px">
      <div style="display:flex;flex-direction:column;gap:12px">
        \${[{
    nome: 'Desenvolvimento de Software',
    tags: [{
      v: 'teal',
      l: 'TI'
    }, {
      v: 'blue',
      l: 'ISS 5%'
    }]
  }, {
    nome: 'Consultoria Tributária',
    tags: [{
      v: 'purple',
      l: 'Consultoria'
    }, {
      v: 'orange',
      l: 'ISS 2%'
    }]
  }, {
    nome: 'Design Gráfico',
    tags: [{
      v: 'yellow',
      l: 'Criativo'
    }, {
      v: 'green',
      l: 'Simples'
    }]
  }].map(({
    nome,
    tags
  }) => html\`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border:1px solid #e5e7eb;border-radius:8px">
            <span style="font-weight:500">\${nome}</span>
            <div style="display:flex;gap:6px">
              \${tags.map(({
    v,
    l
  }) => html\`<en-tag variant=\${v}>\${l}</en-tag>\`)}
            </div>
          </div>
        \`)}
      </div>
    </div>
  \`
}`,...(P=(z=r.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const I=["Default","AllVariants","AllStates","Dismissible","InContext","Categorization"];export{n as AllStates,t as AllVariants,r as Categorization,a as Default,i as Dismissible,s as InContext,I as __namedExportsOrder,D as default};
