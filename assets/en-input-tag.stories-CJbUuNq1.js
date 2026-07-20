import{D as z,b as o,n as q,i as L,y as H,S as M,u as W,c as O,E as V,f as I,A as R,e as j,r as G}from"./lit-element-DYTQqYiP.js";import{_ as k}from"./iframe-BdA74om7.js";const B=Object.freeze(Object.defineProperty({__proto__:null,CSSResult:q,LitElement:L,ReactiveElement:H,adoptStyles:M,defaultConverter:W,getCompatibleStyle:O,html:o,noChange:V,notEqual:I,nothing:R,render:z,supportsAdoptingStyleSheets:j,unsafeCSS:G},Symbol.toStringTag,{value:"Module"})),Q={title:"Primitives/EnInputTag",tags:["autodocs"],parameters:{docs:{description:{component:"Campo de entrada que permite adicionar múltiplas tags. O usuário digita um valor e pressiona **Enter** ou **vírgula** para confirmar cada tag. **Backspace** com o campo vazio remove a última tag. Aceita valor inicial via propriedade `.value` (array de strings)."}}},argTypes:{label:{control:"text",description:"Label visível acima do campo."},placeholder:{control:"text",description:"Texto exibido quando o campo está vazio e sem tags."},hint:{control:"text",description:"Texto auxiliar exibido abaixo do campo quando não há erro."},error:{control:"text",description:"Mensagem de erro — ativa o estado de erro visualmente."},disabled:{control:"boolean",description:"Desabilita interação com o campo (somente-leitura)."}},args:{label:"Palavras-chave",placeholder:"Digite e pressione Enter...",disabled:!1}},i={name:"Vazio (padrão)",render:({label:a,placeholder:r,hint:e,error:n,disabled:t})=>o`<en-input-tag
      label=${a}
      placeholder=${r}
      ?disabled=${t}
      hint=${e??""}
      error=${n??""}
    ></en-input-tag>`},s={name:"Com tags iniciais",render:({label:a,placeholder:r,disabled:e})=>{const n=o`<en-input-tag
      label=${a}
      placeholder=${r}
      ?disabled=${e}
    ></en-input-tag>`,t=document.createElement("div");k(async()=>{const{render:u}=await Promise.resolve().then(()=>B);return{render:u}},void 0,import.meta.url).then(({render:u})=>{u(n,t);const g=t.querySelector("en-input-tag");g&&(g.value=["NFS-e","São Paulo","Aprovada"])});const l=document.createElement("en-input-tag");return l.label=a??"Filtros ativos",l.placeholder=r??"Digite e pressione Enter...",l.value=["NFS-e","São Paulo","Aprovada"],l},args:{label:"Filtros ativos"}},d={name:"Com erro",args:{label:"E-mails",error:"Adicione ao menos um e-mail"},render:({label:a,placeholder:r,error:e})=>o`<en-input-tag
      label=${a}
      placeholder=${r??"nome@empresa.com"}
      error=${e}
    ></en-input-tag>`},p={name:"Com hint",args:{label:"Categorias",hint:"Separe as categorias com Enter ou vírgula."},render:({label:a,placeholder:r,hint:e})=>o`<en-input-tag
      label=${a}
      placeholder=${r}
      hint=${e}
    ></en-input-tag>`},c={name:"Desabilitado",args:{label:"Tags (somente leitura)",disabled:!0},render:({label:a,disabled:r})=>{const e=document.createElement("en-input-tag");return e.label=a??"Tags (somente leitura)",e.disabled=r??!0,e.value=["Fixo","Não editável"],e}},m={name:"Todos os estados",parameters:{docs:{description:{story:"Grade com os quatro estados do componente: vazio, com tags, desabilitado e com erro."}},controls:{disable:!0}},render:()=>{const a=document.createElement("en-input-tag");a.label="Com tags",a.placeholder="Digite e pressione Enter...",a.value=["NFS-e","São Paulo","Aprovada"];const r=document.createElement("en-input-tag");r.label="Desabilitado",r.disabled=!0,r.value=["Fixo","Não editável"];const e=document.createElement("div");e.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;max-width:720px";const n=document.createElement("div");n.innerHTML='<en-input-tag label="Vazio (padrão)" placeholder="Digite e pressione Enter..."></en-input-tag>';const t=document.createElement("div");return t.innerHTML='<en-input-tag label="Com erro" error="Campo obrigatório"></en-input-tag>',e.appendChild(n),e.appendChild(a),e.appendChild(r),e.appendChild(t),e}};var b,h,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Vazio (padrão)',
  render: ({
    label,
    placeholder,
    hint,
    error,
    disabled
  }) => html\`<en-input-tag
      label=\${label}
      placeholder=\${placeholder}
      ?disabled=\${disabled}
      hint=\${hint ?? ''}
      error=\${error ?? ''}
    ></en-input-tag>\`
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var E,C,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Com tags iniciais',
  render: ({
    label,
    placeholder,
    disabled
  }) => {
    const tpl = html\`<en-input-tag
      label=\${label}
      placeholder=\${placeholder}
      ?disabled=\${disabled}
    ></en-input-tag>\`;
    // Lit não suporta binding de array via atributo — setamos a prop via ref após render
    const container = document.createElement('div');
    import('lit').then(({
      render
    }) => {
      render(tpl, container);
      const el = container.querySelector('en-input-tag') as any;
      if (el) el.value = ['NFS-e', 'São Paulo', 'Aprovada'];
    });
    const el = document.createElement('en-input-tag') as any;
    el.label = label ?? 'Filtros ativos';
    el.placeholder = placeholder ?? 'Digite e pressione Enter...';
    el.value = ['NFS-e', 'São Paulo', 'Aprovada'];
    return el;
  },
  args: {
    label: 'Filtros ativos'
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var $,y,T;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Com erro',
  args: {
    label: 'E-mails',
    error: 'Adicione ao menos um e-mail'
  },
  render: ({
    label,
    placeholder,
    error
  }) => html\`<en-input-tag
      label=\${label}
      placeholder=\${placeholder ?? 'nome@empresa.com'}
      error=\${error}
    ></en-input-tag>\`
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,f,D;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Com hint',
  args: {
    label: 'Categorias',
    hint: 'Separe as categorias com Enter ou vírgula.'
  },
  render: ({
    label,
    placeholder,
    hint
  }) => html\`<en-input-tag
      label=\${label}
      placeholder=\${placeholder}
      hint=\${hint}
    ></en-input-tag>\`
}`,...(D=(f=p.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var w,A,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Desabilitado',
  args: {
    label: 'Tags (somente leitura)',
    disabled: true
  },
  render: ({
    label,
    disabled
  }) => {
    const el = document.createElement('en-input-tag') as any;
    el.label = label ?? 'Tags (somente leitura)';
    el.disabled = disabled ?? true;
    el.value = ['Fixo', 'Não editável'];
    return el;
  }
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var _,P,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Todos os estados',
  parameters: {
    docs: {
      description: {
        story: 'Grade com os quatro estados do componente: vazio, com tags, desabilitado e com erro.'
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => {
    // Cria cada variante diretamente como elemento para poder setar .value
    const withTags = document.createElement('en-input-tag') as any;
    withTags.label = 'Com tags';
    withTags.placeholder = 'Digite e pressione Enter...';
    withTags.value = ['NFS-e', 'São Paulo', 'Aprovada'];
    const disabledEl = document.createElement('en-input-tag') as any;
    disabledEl.label = 'Desabilitado';
    disabledEl.disabled = true;
    disabledEl.value = ['Fixo', 'Não editável'];
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;max-width:720px';
    const emptyContainer = document.createElement('div');
    emptyContainer.innerHTML = \`<en-input-tag label="Vazio (padrão)" placeholder="Digite e pressione Enter..."></en-input-tag>\`;
    const errorContainer = document.createElement('div');
    errorContainer.innerHTML = \`<en-input-tag label="Com erro" error="Campo obrigatório"></en-input-tag>\`;
    wrapper.appendChild(emptyContainer);
    wrapper.appendChild(withTags);
    wrapper.appendChild(disabledEl);
    wrapper.appendChild(errorContainer);
    return wrapper;
  }
}`,...(N=(P=m.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const U=["Default","WithInitialTags","WithError","WithHint","Disabled","AllStates"];export{m as AllStates,i as Default,c as Disabled,d as WithError,p as WithHint,s as WithInitialTags,U as __namedExportsOrder,Q as default};
