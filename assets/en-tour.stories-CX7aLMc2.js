const u=[{title:"Bem-vindo ao eNotas!",description:"O eNotas é a plataforma de emissão de notas fiscais integrada à Hotmart. Vamos te mostrar o que você pode fazer por aqui."},{title:"Emita notas em segundos",description:"Configure sua empresa uma vez e emita NFS-e, NF-e e NF-e de devolução diretamente da plataforma, sem precisar acessar a prefeitura."},{title:"Acompanhe tudo em um lugar",description:"Dashboard com visão geral de notas emitidas, pendentes e com falha. Filtros por tipo, período e status para encontrar qualquer nota rapidamente."},{title:"Pronto para começar?",description:"Configure sua primeira empresa e emita sua primeira nota em menos de 5 minutos."}],d={title:"Compostos/EnTour",tags:["autodocs"],argTypes:{finishLabel:{control:"text"},skipLabel:{control:"text"}},args:{finishLabel:"Começar agora",skipLabel:"Pular tour"}},a={render:({finishLabel:i,skipLabel:p})=>{const n=document.createElement("div"),t=document.createElement("en-button");t.setAttribute("variant","primary"),t.textContent="Iniciar tour";const e=document.createElement("en-tour");return e.steps=u,e.finishLabel=i,e.skipLabel=p,t.addEventListener("enClick",()=>{e.open=!0,e.currentStep=0}),n.appendChild(t),n.appendChild(e),n}};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    finishLabel,
    skipLabel
  }: any) => {
    const wrapper = document.createElement('div');
    const btn = document.createElement('en-button') as any;
    btn.setAttribute('variant', 'primary');
    btn.textContent = 'Iniciar tour';
    const tour = document.createElement('en-tour') as any;
    tour.steps = TOUR_STEPS;
    tour.finishLabel = finishLabel;
    tour.skipLabel = skipLabel;
    btn.addEventListener('enClick', () => {
      tour.open = true;
      tour.currentStep = 0;
    });
    wrapper.appendChild(btn);
    wrapper.appendChild(tour);
    return wrapper;
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["Default"];export{a as Default,m as __namedExportsOrder,d as default};
